import { useNavigate, useParams } from 'react-router-dom'
import { MypageViewLayout } from '../../layouts/MypageViewLayout'
import { useEffect, useState } from 'react'
import { Users } from '../../resources/users'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { SlArrowDown } from 'react-icons/sl'

type AineType = {
  aine1?: string | number
  aine2?: string | number
  aine3?: string | number
}

type SaraType = {
  sara1?: string | number
  sara2?: string | number
  sara3?: string | number
}

type ShionType = {
  shion1?: string | number
  shion2?: string | number
  shion3?: string | number
}

type YuzukiType = {
  yuzuki1?: string | number
  yuzuki2?: string | number
  yuzuki3?: string | number
}

type ArisaType = {
  arisa1?: string | number
  arisa2?: string | number
  arisa3?: string | number
}

type YuukaType = {
  yuuka1?: string | number
  yuuka2?: string | number
  yuuka3?: string | number
}

type NamiType = {
  nami1?: string | number
  nami2?: string | number
  nami3?: string | number
}

type OtherType = {
  randam?: string | number
  all?: string | number
  other1?: string
  other2?: string
  other3?: string
  target?: string
}

type ResponseType = {
  timestamp: string
  eventName: string
  date: string
  place: string
} & AineType &
  SaraType &
  ShionType &
  YuzukiType &
  ArisaType &
  YuukaType &
  NamiType &
  OtherType

export const ManagementView = () => {
  const navigate = useNavigate()
  const id = useParams()
  const localUser = JSON.parse(localStorage.getItem('user') as string)
  const [responses, setResponses] = useState<ResponseType[]>()

  if (localUser && localUser.id !== id.id) {
    navigate('/management/login')
    return <></>
  }

  const user = Users.find((user) => localUser && user.id.toString() === localUser.id)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    user &&
      fetch(user?.api, { mode: 'cors' })
        .then((response) => response.json())
        .then((data) => {
          setResponses(data)
        })
        .catch((error) => {
          console.error('リクエストエラー:', error)
        })
  }, [user])

  type AccordionProps = {
    name: string
    bgColor: string
    cheki1?: string | number
    cheki2?: string | number
    cheki3?: string | number
  }

  const AccordionDetailView = (props: AccordionProps) => {
    const { name, bgColor, cheki1, cheki2, cheki3 } = props
    return (
      <>
        <div className={`text-sm ${bgColor}`}>{name}</div>
        <div className='flex gap-6 border-b-[0.5px] border-gray-400'>
          <div className='w-[100px] text-sm'>サインなし</div>
          <div className='w-[100px] text-right text-sm'>{cheki1} 枚</div>
          <div className='w-[100px] text-right text-sm'>
            {cheki1 !== '' && Number(cheki1) * 1000} 円
          </div>
        </div>
        <div className='flex gap-6 border-b-[0.5px] border-gray-400'>
          <div className='w-[100px] text-sm'>らくがき</div>
          <div className='w-[100px] text-right text-sm'>{cheki2} 枚</div>
          <div className='w-[100px] text-right text-sm'>
            {cheki2 !== '' && Number(cheki2) * 2000} 円
          </div>
        </div>
        <div className='flex gap-6 border-b-[0.5px] border-gray-400'>
          <div className='w-[100px] text-sm'>宿題</div>
          <div className='w-[100px] text-right text-sm'>{cheki3} 枚</div>
          <div className='w-[100px] text-right text-sm'>
            {cheki3 !== '' && Number(cheki3) * 3000} 円
          </div>
        </div>
      </>
    )
  }

  const handleSubmit = () => {
    localStorage.removeItem('user')
    navigate('/management/login')
  }

  const getDate = (before: string) => {
    const beforeDate = new Date(before)
    return `${beforeDate.getFullYear()} / ${beforeDate.getMonth() + 1} / ${beforeDate.getDate()}`
  }

  return (
    <MypageViewLayout>
      <div className='w-full py-4 text-right'>
        <button className='bg-slate-400 p-2' onClick={handleSubmit}>
          ログアウト
        </button>
      </div>
      <div className='mb-5 flex flex-col gap-4'>
        {responses &&
          responses.map((data, index) => {
            return (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<SlArrowDown />}>
                  <div className='flex flex-col'>
                    <div className='font-bold'>{getDate(data.date)}</div>
                    <div className='text-sm'>{data.eventName}</div>
                    <div className='text-sm'>{data.place}</div>
                  </div>
                </AccordionSummary>
                <AccordionDetails className='px-2 py-4'>
                  <div className='flex gap-6 border-b-[0.5px] border-gray-400'>
                    <div className='w-[100px] text-sm'>集合</div>
                    <div className='w-[100px] text-right text-sm'>{data.all} 枚</div>
                    <div className='w-[100px] text-right text-sm'>- 円</div>
                  </div>
                  <div className='flex gap-6 border-b-[0.5px] border-gray-400'>
                    <div className='w-[100px] text-sm'>ランダム</div>
                    <div className='w-[100px] text-right text-sm'>{data.randam} 枚</div>
                    <div className='w-[100px] text-right text-sm'>
                      {data.randam !== '' && Number(data.randam) * 500} 円
                    </div>
                  </div>
                  <div className='flex gap-6 border-b-[0.5px] border-gray-400'>
                    <div className='w-[100px] text-sm'>その他1</div>
                    <div className='text-right text-sm'>{data.other1}</div>
                  </div>
                  <div className='flex gap-6 border-b-[0.5px] border-gray-400'>
                    <div className='w-[100px] text-sm'>その他2</div>
                    <div className='text-right text-sm'>{data.other2}</div>
                  </div>
                  <div className='flex gap-6 border-b-[0.5px] border-gray-400'>
                    <div className='w-[100px] text-sm'>その他3</div>
                    <div className='text-right text-sm'>{data.other3}</div>
                  </div>
                  <div className='flex gap-6 border-b-[0.5px] border-gray-400'>
                    <div className='w-[100px] text-sm'>動員</div>
                    <div className='text-right text-sm'>{data.target}</div>
                  </div>
                  <AccordionDetailView
                    name='星宮あいね'
                    bgColor='bg-aine-yellow'
                    cheki1={data.aine1}
                    cheki2={data.aine2}
                    cheki3={data.aine3}
                  />
                  <AccordionDetailView
                    name='水羽さら'
                    bgColor='bg-sara-blue'
                    cheki1={data.sara1}
                    cheki2={data.sara2}
                    cheki3={data.sara3}
                  />
                  <AccordionDetailView
                    name='桜夢ありさ'
                    bgColor='bg-arisa-pink'
                    cheki1={data.arisa1}
                    cheki2={data.arisa2}
                    cheki3={data.arisa3}
                  />
                  <AccordionDetailView
                    name='夏井しおん'
                    bgColor='bg-shion-red'
                    cheki1={data.shion1}
                    cheki2={data.shion2}
                    cheki3={data.shion3}
                  />
                  <AccordionDetailView
                    name='成瀬ゆづき'
                    bgColor='bg-[#f0f0f0]'
                    cheki1={data.yuzuki1}
                    cheki2={data.yuzuki2}
                    cheki3={data.yuzuki3}
                  />
                  <AccordionDetailView
                    name='愛月ゆうか'
                    bgColor='bg-yuka-orange'
                    cheki1={data.yuuka1}
                    cheki2={data.yuuka2}
                    cheki3={data.yuuka3}
                  />
                  <AccordionDetailView
                    name='鈴乃なみ'
                    bgColor='bg-nami-purple'
                    cheki1={data.nami1}
                    cheki2={data.nami2}
                    cheki3={data.nami3}
                  />
                </AccordionDetails>
              </Accordion>
            )
          })}
      </div>
    </MypageViewLayout>
  )
}
