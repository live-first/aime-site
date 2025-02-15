import { Container } from '@mui/material'
import { BaseViewLayout } from '../../layouts/BaseViewLayout'

export const ContactView = () => {
  return (
    <BaseViewLayout>
      <div className='flex w-full flex-col gap-6 px-8 py-16'>
        <Container maxWidth='lg'>
          <div className='py-8 text-center font-mono text-[48px]'>CONTACT</div>
          <div className='mb-40 flex flex-col gap-10'>
            <div className=''>出演依頼、お問い合わせは下記のメールアドレスにお願いいたします。</div>
            <div className=''>info@aime-official.info</div>
          </div>
        </Container>
      </div>
    </BaseViewLayout>
  )
}
