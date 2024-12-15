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
    <div className='flex flex-col gap-2 p-4 border-[#2945c1] border-2 rounded-lg'>
      <div>
        <img src={image} alt={title} />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='font-sans text-lg font-bold'>{title}</div>
        <div className=''>¥{price} / 1点</div>
        <div className=''>{description}</div>
        <Link target='_blank' className='w-full text-center py-2 bg-aime-base rounded-md' to={href}>購入する</Link>
      </div>
    </div>
  )
}

export const OnlineShopView = () => {

  return (
    <BaseViewLayout>
      <div className='w-full py-16 px-2'>
        <Container maxWidth='lg'>
          <div className='text-center font-mono text-[48px] py-8'>ONLINE SHOP</div>
          <div className='pb-6'>
            <Grid2 container spacing={4}>
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <GoodsCard
                  image='https://aime-official.info/static/pictures/shop/shion.png'
                  title='デコチェキ（夏井しおん）'
                  description=''
                  price={3000}
                  href='https://buy.stripe.com/3cs03k2t5fdLeU8007'
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <GoodsCard
                  image='https://aime-official.info/static/pictures/shop/yuzuki.png'
                  title='デコチェキ（成瀬ゆづき）'
                  description=''
                  price={3000}
                  href='https://buy.stripe.com/eVa7vMebNaXvcM09AM'
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <GoodsCard
                  image='https://aime-official.info/static/pictures/shop/arisa.png'
                  title='デコチェキ（桜夢ありさ）'
                  description=''
                  price={3000}
                  href='https://buy.stripe.com/fZedUac3FaXvcM0bIT'
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <GoodsCard
                  image='https://aime-official.info/static/pictures/shop/yuuka.png'
                  title='デコチェキ（愛月ゆうか）'
                  description=''
                  price={3000}
                  href='https://buy.stripe.com/8wM4jA7Npe9H8vK00d'
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <GoodsCard
                  image='https://aime-official.info/static/pictures/shop/nami.png'
                  title='デコチェキ（鈴乃なみ）'
                  description=''
                  price={3000}
                  href='https://buy.stripe.com/aEU17ogjV7LjdQ45ku'
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <GoodsCard
                  image='https://aime-official.info/static/pictures/shop/sara.png'
                  title='デコチェキ（水羽さら）'
                  description=''
                  price={3000}
                  href='https://buy.stripe.com/7sI3fw9Vxc1zcM0dQY'
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <GoodsCard
                  image='https://aime-official.info/static/pictures/shop/aine.png'
                  title='デコチェキ（星宮あいね）'
                  description=''
                  price={3000}
                  href='https://buy.stripe.com/bIYeYeebN1mVaDS4gp'
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
            <Link to='/shop' className='py-4 bg-aime-base rounded'>ショップへ</Link>
          </Container>
        </Container>
      </div>
    </BaseViewLayout>
  )
}
