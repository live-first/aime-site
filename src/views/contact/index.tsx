import { Container } from '@mui/material'
import { BaseViewLayout } from '../../layouts/BaseViewLayout'

export const ContactView = () => {
  return (
    <BaseViewLayout>
      <div className='w-full py-16 px-8 flex flex-col gap-6'>
        <Container maxWidth='lg'>
          <div className='text-center font-mono text-[48px] py-8'>CONTACT</div>
          <div className='flex flex-col gap-4'></div>
        </Container>
      </div>
    </BaseViewLayout>
  )
}
