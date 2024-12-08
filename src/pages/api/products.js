
import Stripe from 'stripe'

export const handler = async (req, res) => {
  if (req.method?.toLocaleLowerCase() !== 'get') {
    return res.status(405).end()
  }
  const stripe = new Stripe(process.env.STRIPE_API_KEY, {
    apiVersion: '2024-11-20.acacia',
    maxNetworkRetries: 3,
  })
  const products = await stripe.products.list()
  if (!products.data || products.data.length < 1) {
     return res.status(200).json([])
  }
  await Promise.all(products.data.map(async (product, i) => {
    const prices = await stripe.prices.list({
      product: product.id,
    })
    products.data[i].prices = prices
  }))
  res.status(200).json(products)
}
