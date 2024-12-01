import { Container } from '@mui/material'
import { BaseViewLayout } from '../../layouts/BaseViewLayout'
import { NewsList } from '../../templates/newsList'

export const HomeView = () => {
  return (
    <BaseViewLayout>
      <div className='w-full'>
        <img src='https://aime-official.info/static/pictures/aime_official.png' alt='aiMeのアーティスト写真' />
      </div>
      <Container maxWidth='lg' className='flex flex-col gap-12 py-8'>
          <Container maxWidth='md' className='flex flex-col gap-2 bg-[#f1f1f1]'>
            <div className='text-5xl font-serif text-aime-base text-center'>NEWS</div>
            <Container maxWidth='sm'>
              <NewsList max={3} />
            </Container>
          </Container>
        {/* <div className='flex flex-col gap-2'>
          <div className='text-5xl font-serif text-aime-base'>ABOUT US</div>
        </div> */}
        {/* <div className='flex flex-col gap-2'>
          <div className='text-5xl font-serif text-aime-base'>PHOTOGRAPHY</div>
        </div> */}
        {/* <div className='flex flex-col gap-2'>
          <div className='text-5xl font-serif text-aime-base'>VIDEO</div>
        </div> */}
        <div className='flex flex-col gap-2'>
          <div className='text-5xl font-serif text-aime-base text-center'>SCHEDULE</div>
          <div className='flex flex-col text-center'>〜 作成中 〜</div>
        </div>
      </Container>
    </BaseViewLayout>   
  )
}
