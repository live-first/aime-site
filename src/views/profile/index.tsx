import { BaseViewLayout } from '../../layouts/BaseViewLayout'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'
import xLogo from '../../images/x-logo.png'
import ttLogo from '../../images/tiktok-logo.png'
import instaLogo from '../../images/instagram_logo.png'

type ProfileContentProps = {
  name: string
  borderColor: string
  textColor: string
  birthday: string
  place: string
  blood: string
  personality: string
  goodPoint: string
  x?: string
  insta?: string
  tiktok?: string
}

const ProfileContent = (props: ProfileContentProps) => {
  const {name, borderColor, textColor, birthday, place, blood, personality, goodPoint, x, insta, tiktok} = props

  return (
    <>
      <div className={`font-mono text-2xl border-b-2 ${textColor} ${borderColor} mb-2`}>{name}</div>
      <div className='flex flex-col gap-3 px-3'>
        <div className='flex'>
          <div className='w-[100px]'>誕生日</div>
          <div>{birthday}</div>
        </div>
        <div className='flex'>
          <div className='w-[100px]'>出身地</div>
          <div>{place}</div>
        </div>
        <div className='flex'>
          <div className='w-[100px]'>血液型</div>
          <div>{blood}</div>
        </div>
        <div className='flex'>
          <div className='w-[100px]'>性格</div>
          <div>{personality}</div>
        </div>
        <div className='flex'>
          <div className='w-[100px]'>得意なこと/好きなこと</div>
          <div>{goodPoint}</div>
        </div>
        <div className='flex'>
          <div className='w-[100px]'>SNS</div>
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
                  place='神奈川県'
                  blood='A型'
                  personality='マイペース'
                  goodPoint='お菓子作り、食べること'
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
                  place='東京都'
                  blood='O型'
                  personality='申し訳ないほどに気分屋'
                  goodPoint='マリカ、ヨガ'
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
                  place='千葉県'
                  blood='O型'
                  personality='ふわふわ、でも芯は強い'
                  goodPoint='不器用だけどできるようになるまでがんばること/かわいいキャラや生き物をみること 音楽を聞くこと 美術館にいくこと 美味しいものを食べること'
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
                  place='東京都'
                  blood='不明'
                  personality='元気な心配性'
                  goodPoint='アイドルさんを推すこと、食べること、寝ること、手を使わずに鼻を凹ますこと'
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
                  place='佐賀県'
                  blood='B型'
                  personality='いつもニコニコしてるけど意外と負けず嫌い'
                  goodPoint='小さい子供のお世話！人の写真を撮ること！バレーボール5年習ってたので得意！アイドルが好き！あとは名探偵コナンとディズニー！'
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
                  place='神奈川県'
                  blood='A型'
                  personality='いつも前向き！楽観的！'
                  goodPoint='可愛い子を探す・食べること・歌うこと・お芝居・温泉・アイドルの振りコピ・イッテQ・クレヨンしんちゃん'
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
                  place='埼玉県'
                  blood='AB型'
                  personality='楽観的 すぐ泣く'
                  goodPoint='楽器を吹くこと ほっぺを大きく膨らませること 笑顔 / 音楽聞くこと 人と話すこと 美味しいもの食べること ポムポムプリン'
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
