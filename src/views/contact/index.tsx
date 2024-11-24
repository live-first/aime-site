import { Container } from '@mui/material'
import { BaseViewLayout } from '../../layouts/BaseViewLayout'

export const ContactView = () => {
  return (
    <BaseViewLayout>
      <div className='w-full py-16 px-8 flex flex-col gap-6'>
        <Container maxWidth='lg'>
          <div className='text-center font-mono text-[48px] py-8'>CONTACT</div>
          <div className='flex flex-col gap-10 min-h-screen'>
            <div className=''>出演依頼、お問い合わせは下記のメールアドレスにお願いいたします。</div>
            <div className=''>info@aime-official.info</div>
          </div>
        </Container>
      </div>
    </BaseViewLayout>
  )
}
