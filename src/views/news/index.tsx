import { Container } from '@mui/material'
import { BaseViewLayout } from '../../layouts/BaseViewLayout'
import { NewsList } from '../../templates/newsList'

export const NewsView = () => {
  return (
    <BaseViewLayout>
      <div className='w-full py-16 px-8'>
        <Container maxWidth='lg'>
          <div className='text-center font-mono text-[48px] py-8'>NEWS</div>
          <NewsList max={10} isPagination={true} />
        </Container>
      </div>
    </BaseViewLayout>
  )
}
