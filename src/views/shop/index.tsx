import { Container, Grid2 } from '@mui/material'
import { BaseViewLayout } from '../../layouts/BaseViewLayout'

type GoodsCardProps = {
  id: number
  image: string
  title: string
  description: string
  price: number
  selected: number
  isSoldout: boolean
  isNew: boolean
}

const GoodsCard = (props: GoodsCardProps) => {
  const { image, title, description, price, selected, isSoldout, isNew } = props
  return (
    <div className='flex flex-col gap-2 p-4'>
      <div>
        <img src={image} alt={title} />
      </div>
      <div className='flex flex-col gap-2'>
        <div className=''>{title}</div>
        <div className=''>{price}</div>
        <div className='flex'>

        </div>
      </div>
    </div>
  )
}

export const ShopView = () => {
  return (
    <BaseViewLayout>
      <Container maxWidth='lg'>
        <div className='text-center font-mono text-[48px] py-8'>SHOP</div>
        <div className='relative'>
          <Grid2 container spacing={4}>
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>

            </Grid2>
          </Grid2>
          <div className='absolute bottom-6 left-4'>

          </div>
        </div>
      </Container>
    </BaseViewLayout>
  )
}
