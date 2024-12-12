import { Container } from "@mui/material"
import { Link } from "react-router-dom"

export const CompletePage = () => {

  return (
    <Container maxWidth='md'>
      <div className="flex flex-col gap-4">
        <img src='https://aime-official.info/static/pictures/aime_official.png' alt='aiMeのアーティスト写真' />
        <div className='w- full text-center text-xl'>ご購入ありがとうございます。</div>
        <Link to='/shop/online' className='w-full bg-aime-base py-2 text-center rounded-xl'>オンラインショップに戻る</Link>
      </div>
    </Container>
  )
}