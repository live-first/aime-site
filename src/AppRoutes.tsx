import { AnimatePresence } from 'framer-motion'
import { createContext, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Appearance, loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { HomeView } from './views/home'
import { AboutView } from './views/about'
import { NewsView } from './views/news'
import { ProfileView } from './views/profile'
import { ScheduleView } from './views/schedule'
import { ContactView } from './views/contact'
import { NotFoundView } from './views/notFound'
import { NewsDetailView } from './views/news/newsDetail'
import { ManagementLoginView } from './views/management/login'
import { ManagementView } from './views/management'
import { ToolsView } from './views/tools'
import { FaqView } from './views/faq'
import { ShopView } from './views/shop'
import { CheckoutForm } from './views/shop/buy'
import { CompletePage } from './views/shop/complate'
import { OnlineShopView } from './views/shop/online'

export const AppContext = createContext({})

const stripePromise = loadStripe(process.env.STRIPE_PUBLISH_API_KEY!!)

const Main = () => {
  const [clientSecret, setClientSecret] = useState('')
  const [dpmCheckerLink, setDpmCheckerLink] = useState('')

  const ScrollToTop = () => {
    const { pathname } = useLocation()
  
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null
  }

  useEffect(() => {
  
    fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'xl-tshirt', amount: 1000 }] }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret)
        // [DEV] For demo purposes only
        setDpmCheckerLink(data.dpmCheckerLink)
      })
  }, [])

  const appearance: Appearance = {
    theme: 'stripe',
  }

  const loader = 'auto'

  return (
    <AnimatePresence>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/news' element={<NewsView />} />
        <Route path='/news/:newsId' element={<NewsDetailView />} />
        <Route path='/about' element={<AboutView />} />
        <Route path='/profile' element={<ProfileView />} />
        <Route path='/schedule' element={<ScheduleView />} />
        <Route path='/contact' element={<ContactView />} />
        <Route path='/faq' element={<FaqView />} />
        <Route path='/shop' element={<ShopView />} />
        <Route path='/management/login' element={<ManagementLoginView />} />
        <Route path='/management/:id' element={<ManagementView />} />
        <Route path='/tools' element={<ToolsView />} />
        <Route path='*' element={<NotFoundView />} />
      </Routes>
      <Elements options={{clientSecret, appearance, loader}} stripe={stripePromise}>
        <Routes>
          <Route path='/shop/online' element={<OnlineShopView />} />
          <Route path='/shop/online/buy' element={<CheckoutForm dpmCheckerLink={dpmCheckerLink} />} />
          <Route path='/shop/online/complate' element={<CompletePage />} />
        </Routes>
      </Elements>
    </AnimatePresence>
  )
}

const App = () => {
  return (
    <Main />
  )
}
export default App
