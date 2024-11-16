import { BaseViewLayout } from '../../layouts/BaseViewLayout'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { Link } from 'react-router-dom'
import xLogo from '../../images/x-logo.png'
import ttLogo from '../../images/tiktok-logo.png'
import instaLogo from '../../images/instagram_logo.png'

type ProfileContentProps = {
  name: string
  borderColor: string
  textColor: string
  birthday: string
  x?: string
  insta?: string
  tiktok?: string
}

const ProfileContent = (props: ProfileContentProps) => {
  const {name, borderColor, textColor, birthday, x, insta, tiktok} = props

  return (
    <>
      <div className={`font-mono text-2xl border-b-2 ${textColor} ${borderColor} mb-2`}>{name}</div>
      <div className='flex flex-col gap-3 px-3'>
        <div className='flex'>
          <div className='w-[80px]'>誕生日</div>
          <div>{birthday}</div>
        </div>
        <div className='flex'>
          <div className='w-[80px]'>SNS</div>
          <div className='flex gap-2'>
            {x && (
              <Link to={x} target='_blank'>
                <img className='h-6' src={xLogo} alt='x-logo' />
              </Link>
            )}
            {insta && (
              <Link to={insta} target='_blank'>
                <img className='h-6' src={instaLogo} alt='instagram-logo' />
              </Link>
            )}
            {tiktok && (
              <Link to={tiktok} target='_blank'>
                <img className='h-6' src={ttLogo} alt='tiktok-logo' />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export const ProfileView = () => {
  return (
    <BaseViewLayout>
      <div className='w-full py-16 px-8'>
        <Container maxWidth='lg'>
          <div className='text-center font-mono text-[48px] py-8'>MEMBER</div>
          <div className='flex flex-col gap-4'>
            <div className='flex'>
              <img className='w-1/3' src='https://aime-official.info/static/pictures/arisa_cut.png' alt='桜夢ありさ' />
              <div className='w-2/3'>
                <ProfileContent
                  name='桜夢ありさ'
                  borderColor='border-arisa-pink'
                  textColor='text-arisa-pink'
                  birthday='11月23日'
                  x='https://twitter.com/arisa_aiMe'
                  insta='https://www.instagram.com/sakura._arisa?igsh=OXc3amZ1cW40MWhp/'
                  tiktok='https://www.tiktok.com/@arisa_aime' />
              </div>
            </div>
            <div className='flex'>
              <div className='w-2/3'>
                <ProfileContent
                  name='夏井しおん'
                  borderColor='border-shion-red'
                  textColor='text-shion-red'
                  birthday='8月25日'
                  x='https://twitter.com/shion_aiMe'
                  insta='https://www.instagram.com/mo___.oo?igsh=MXhhZmZwbTFwYWplZg==/'
                  tiktok='https://www.tiktok.com/@monemonekyun' />
              </div>
              <img className='w-1/3' src='https://aime-official.info/static/pictures/shion_cut.png' alt='夏井しおん' />
            </div>
            <div className='flex'>
              <img className='w-1/3' src='https://aime-official.info/static/pictures/yuzuki_cut.png' alt='成瀬ゆづき' />
              <div className='w-2/3'>
                <ProfileContent
                  name='成瀬ゆづき'
                  borderColor='border-yuzuki-white'
                  textColor='text-yuzuki-white'
                  birthday='2月4日'
                  x='https://twitter.com/yuzuki_aiMe'
                  insta=''
                  tiktok='https://www.tiktok.com/@amor__u._.u' />
              </div>
            </div>
            <div className='flex'>
              <div className='w-2/3'>
                <ProfileContent
                  name='水羽さら'
                  borderColor='border-sara-blue'
                  textColor='text-sara-blue'
                  birthday='6月15日'
                  x='https://twitter.com/sara__aiMe'
                  insta='https://www.instagram.com/mizuha_sara?igsh=MXRnMzNmZnF6bmpvZg==/'
                  tiktok='https://www.tiktok.com/@mizuha_sara' />
              </div>
              <img className='w-1/3' src='https://aime-official.info/static/pictures/sara_cut.png' alt='水羽さら' />
            </div>
            <div className='flex'>
              <img className='w-1/3' src='https://aime-official.info/static/pictures/yuuka_cut.png' alt='愛月ゆうか' />
              <div className='w-2/3'>
                <ProfileContent
                  name='愛月ゆうか'
                  borderColor='border-yuka-orange'
                  textColor='text-yuka-orange'
                  birthday='12月1日'
                  x='https://twitter.com/yuuka_aiMe'
                  insta='https://www.instagram.com/yuukaaaa.__?igsh=MXIxNGN4ZmtiMjluMg==/'
                  tiktok='https://www.tiktok.com/@5n_y_12' />
              </div>
            </div>
            <div className='flex'>
              <div className='w-2/3'>
                <ProfileContent
                  name='鈴乃なみ'
                  borderColor='border-nami-purple'
                  textColor='text-nami-purple'
                  birthday='6月27日'
                  x='https://twitter.com/nami__aiMe'
                  insta='https://www.instagram.com/suzuno_nami?igsh=OTZnNzNkemR6a2Zj/'
                  tiktok='https://www.tiktok.com/@suzuno_nami' />
              </div>
              <img className='w-1/3' src='https://aime-official.info/static/pictures/nami_cut.png' alt='鈴乃なみ' />
            </div>
            <div className='flex'>
              <img className='w-1/3' src='https://aime-official.info/static/pictures/aine_cut.png' alt='星宮あいね' />
              <div className='w-2/3'>
                <ProfileContent
                  name='星宮あいね'
                  borderColor='border-aine-yellow'
                  textColor='text-aine-yellow'
                  birthday='8月3日'
                  x='https://twitter.com/aine__aiMe'
                  insta=''
                  tiktok='https://www.tiktok.com/@aine_aime' />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </BaseViewLayout>);
};
