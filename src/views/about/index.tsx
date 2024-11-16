import { Container } from "@mui/material"
import { BaseViewLayout } from "../../layouts/BaseViewLayout"

export const AboutView = () => {
  return (
    <BaseViewLayout>
      <div className='w-full py-16 px-8'>
        <Container maxWidth='lg'>
        <div className='text-center font-mono text-[48px] py-8'>ABOUT</div>
          <img src="https://aime-official.info/static/pictures/aime_official2.jpeg" alt="aiMe" />
        </Container>
      </div>
    </BaseViewLayout>
  )
}
