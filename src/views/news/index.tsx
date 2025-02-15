import { Container } from '@mui/material'
import { BaseViewLayout } from '../../layouts/BaseViewLayout'
import { NewsList } from '../../templates/newsList'

export const NewsView = () => {
  return (
    <BaseViewLayout>
      <div className='w-full px-8 py-16'>
        <div className='py-8 text-center font-mono text-[48px]'>NEWS</div>
        <Container maxWidth='md' className='rounded-xl bg-[#e8e8e8] py-16'>
          <Container maxWidth='sm'>
            <NewsList max={10} isPagination={true} />
          </Container>
        </Container>
      </div>
    </BaseViewLayout>
  )
}
