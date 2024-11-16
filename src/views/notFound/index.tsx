import { Link  } from 'react-router-dom'
import { Container } from '@mui/material'
import { BaseViewLayout } from '../../layouts/BaseViewLayout'

export const NotFoundView = () => {
  return (
    <BaseViewLayout>
      <Container maxWidth='lg'>
        ページが存在しません。
        <Link to='/'>トップ</Link>に戻る
      </Container>
    </BaseViewLayout>
    
  )
}
