import { BaseViewLayout } from '../../layouts/BaseViewLayout'
import { NewsList } from '../../templates/newsList'

export const HomeView = () => {
  return (
    <BaseViewLayout>
      <div className='w-full'>
        <img src='https://aime-official.info/static/pictures/aime_official.png' alt='aiMeのアーティスト写真' />
      </div>
      <div className='py-2 px-7 gap-4'>
        <div className='flex flex-col gap-2'>
          <div className='text-5xl font-serif text-aime-base'>NEWS</div>
          <NewsList max={3} />
        </div>
        <div className='flex flex-col gap-2'>
          <div className='text-5xl font-serif text-aime-base'>ABOUT US</div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='text-5xl font-serif text-aime-base'>PHOTOGRAPHY</div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='text-5xl font-serif text-aime-base'>VIDEO</div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='text-5xl font-serif text-aime-base'>SCHEDULE</div>
        </div>
      </div>
    </BaseViewLayout>   
  )
}
