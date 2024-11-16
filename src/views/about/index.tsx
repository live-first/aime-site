import { Container } from "@mui/material"
import { BaseViewLayout } from "../../layouts/BaseViewLayout"

export const AboutView = () => {
  return (
    <BaseViewLayout>
      <Container maxWidth='lg'>
        <img src="https://aime-official.info/static/pictures/aime_official2.jpeg" alt="aiMe" />
      </Container>
    </BaseViewLayout>
  )
}
