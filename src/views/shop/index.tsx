import { Container } from "@mui/material"
import { BaseViewLayout } from "../../layouts/BaseViewLayout"

export const ShopView = () => {
  return (
    <BaseViewLayout>
      <Container maxWidth='lg'>
        <div className='text-center font-mono text-[48px] py-8'>SHOP</div>
        <div>〜 制作中 〜</div>
      </Container>
    </BaseViewLayout>
  )
}
