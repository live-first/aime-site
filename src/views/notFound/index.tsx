import { Link  } from 'react-router-dom'
import { Container } from '@mui/material'

export const NotFoundView = () => {
  return (
    <Container maxWidth='lg'>
        ページが存在しません。
      <Link to='/'>トップ</Link>に戻る
    </Container>
  )
}
