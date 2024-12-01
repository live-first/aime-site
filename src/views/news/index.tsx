import { Container } from '@mui/material'
import { BaseViewLayout } from '../../layouts/BaseViewLayout'
import { NewsList } from '../../templates/newsList'

export const NewsView = () => {
  return (
    <BaseViewLayout>
      <div className='w-full py-16 px-8'>
      <div className='text-center font-mono text-[48px] py-8'>NEWS</div>
        <Container maxWidth='md' className='bg-[#e8e8e8] py-16 rounded-xl'>
          <Container maxWidth='sm'>
            <NewsList max={10} isPagination={true} />
          </Container>
        </Container>
        
      </div>
    </BaseViewLayout>
  )
}
