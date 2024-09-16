import { BaseViewLayout } from '../../layouts/BaseViewLayout'
import { Header } from '../../templates/header'

export const TopView = () => {
  return (
    <BaseViewLayout
      header={<Header />}
    >
      <div className='w-full'>
        <img src='https://aime-official.info/static/pictures/aime-official.png' alt='aiMeのアーティスト写真' />
      </div>
    </BaseViewLayout>
      
      
  )
}
