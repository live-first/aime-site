import { BaseViewLayout } from '../../layouts/BaseViewLayout'
import { Link } from 'react-router-dom'

export const HomeView = () => {
  return (
    <BaseViewLayout>
      <div className='w-full'>
        <img src='https://aime-official.info/static/pictures/aime_official.png' alt='aiMeのアーティスト写真' />
      </div>
      <div className='py-2 px-7 gap-4'>
        <div className=''>
          <div className='text-5xl font-serif text-[#93d5f4]'>NEWS</div>
        </div>
        <div>
          <div>ABOUT US</div>
        </div>
        <div>
          <div>PHOTOGRAPHY</div>
        </div>
        <div>
          <div>VIDEO</div>
        </div>
        <div>
          <div>SCHEDULE</div>
        </div>
      </div>
      
    </BaseViewLayout>   
  )
}
