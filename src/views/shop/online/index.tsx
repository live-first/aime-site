import { Container, Grid2 } from '@mui/material'
import { BaseViewLayout } from '../../../layouts/BaseViewLayout'
import { Link } from 'react-router-dom'

type GoodsCardProps = {
  image: string
  title: string
  description: string
  price: number
  selected?: number
  isSoldout?: boolean
  isNew?: boolean
  href: string
}

const GoodsCard = (props: GoodsCardProps) => {
  const { image, title, description, price, href } = props
  return (
    <div className='flex flex-col gap-2 rounded-lg border-2 border-[#2945c1] p-4'>
      <div>
        <img src={image} alt={title} />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='font-sans text-lg font-bold'>{title}</div>
        <div className=''>¥{price} / 1点</div>
        <div className=''>{description}</div>
        <Link target='_blank' className='w-full rounded-md bg-aime-base py-2 text-center' to={href}>
          購入する
        </Link>
      </div>
    </div>
  )
}

export const OnlineShopView = () => {
  return (
    <BaseViewLayout>
      <div className='w-full px-2 py-16'>
        <Container maxWidth='lg'>
          <div className='py-8 text-center font-mono text-[48px]'>ONLINE SHOP</div>
          <div className='pb-6'>
            <Grid2 container spacing={4}>
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <GoodsCard
                  image='https://aime-official.info/static/pictures/shop/v_shop.png'
                  title='【バレンタインメイドコス】デコチェキ（オンライン限定）'
                  description='2/28までの販売です。'
                  price={3000}
                  href='https://buy.stripe.com/bIYcQ64Bdd5D7rGaEU'
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <GoodsCard
                  image='https://aime-official.info/static/pictures/shop/birth_yuzuki.png'
                  title='【生誕衣装】（成瀬ゆづき）'
                  description='2/28までの販売です。'
                  price={3000}
                  href='https://buy.stripe.com/8wM7vM0kXghPfYc7sK'
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <GoodsCard
                  image='https://aime-official.info/static/pictures/shop/birth_arisa.png'
                  title='【生誕衣装】（桜夢ありさ）'
                  description='2/28までの販売です。'
                  price={3000}
                  href='https://buy.stripe.com/3cs8zQ6Jl7Lj3bq8wN'
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <GoodsCard
                  image='https://aime-official.info/static/pictures/shop/ac_shop_yuuka.png'
                  title='アクリルキーホルダー（愛月ゆうか）'
                  description='無くなり次第販売終了となります。'
                  price={1500}
                  href='https://buy.stripe.com/bIYaHY1p13v313icN7'
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <GoodsCard
                  image='https://aime-official.info/static/pictures/shop/ac_shop_yuzuki.png'
                  title='アクリルキーホルダー（成瀬ゆづき）'
                  description='無くなり次第販売終了となります。'
                  price={1500}
                  href='https://buy.stripe.com/00gg2i4Bd6Hf9zO14o'
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <GoodsCard
                  image='https://aime-official.info/static/pictures/shop/ac_shop_arisa.png'
                  title='アクリルキーホルダー（桜夢ありさ）'
                  description='無くなり次第販売終了となります。'
                  price={1500}
                  href='https://buy.stripe.com/bIYcQ61p16Hf4fu7sL'
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <GoodsCard
                  image='https://aime-official.info/static/pictures/aime_official.png'
                  title='デコチェキ（カスタム）'
                  description='複数メンバーの購入をご希望の方はこちらからご購入ください。'
                  price={3000}
                  href='https://buy.stripe.com/fZe4jA5Fh0iRcM0fZc'
                />
              </Grid2>
            </Grid2>
          </div>
          <Container maxWidth='sm' className='flex flex-col px-2 py-4 text-center'>
            <Link to='/shop' className='rounded bg-aime-base py-4'>
              ショップへ
            </Link>
          </Container>
        </Container>
      </div>
    </BaseViewLayout>
  )
}
