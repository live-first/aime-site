import { Container } from '@mui/material'
import { BaseViewLayout } from '../../layouts/BaseViewLayout'

export const AboutView = () => {
  return (
    <BaseViewLayout>
      <div className='w-full px-8 py-16'>
        <Container maxWidth='lg'>
          <div className='py-8 text-center font-mono text-[48px]'>ABOUT</div>
          <img src='https://aime-official.info/static/pictures/aime_official2.jpeg' alt='aiMe' />
        </Container>
      </div>
    </BaseViewLayout>
  )
}
