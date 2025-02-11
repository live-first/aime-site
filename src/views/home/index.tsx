import { Container, Grid2 } from '@mui/material'
import { BaseViewLayout } from '../../layouts/BaseViewLayout'
import { NewsList } from '../../templates/newsList'
import { useState } from 'react'
import { EventCard } from '../../templates/eventCard'
import { Event } from '../../domain/Event'
import { eventList } from '../../resources/events'
import { YoutubeView } from '../../templates/youtube'
import { Link } from 'react-router-dom'

export const HomeView = () => {
  const [events, setEvents] = useState<Event[]>(eventList)
  const EntryEvents = () => {
    return (
      <Grid2 container spacing={2} style={{margin: '0', width: '100%'}}>
        {events.length !== 0 ? events.map((event) => {
          return (
            <Grid2 size={{ sm: 12, md: 6, lg: 4 }} key={event.eventId}>
              <EventCard
                eventId={event.eventId}
                title={event.title}
                date={event.date}
                openTime={event.openTime}
                startTime={event.startTime}
                placeName={event.placeName}
                imgUrl={event.imgUrl} 
              />
            </Grid2>
          )
        }) : <div className='flex flex-col w-full text-center'>準備中</div>}
      </Grid2>
    );
  }

  return (
    <BaseViewLayout>
      <div className='w-full'>
        <img src='https://aime-official.info/static/pictures/aime_official.png' alt='aiMeのアーティスト写真' />
      </div>
      <Container maxWidth='lg' className='flex flex-col gap-12 py-8'>
          <Container maxWidth='md' className='flex flex-col gap-4 bg-[#f1f1f1]'>
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
        <div className='flex flex-col gap-4'>
          <div className='text-5xl font-serif text-aime-base text-center'>SCHEDULE</div>
          <div className='flex flex-col text-center'>
            <EntryEvents />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='text-5xl font-serif text-aime-base text-center'>VIDEO</div>
          <div className='flex gap-2 justify-center'>
            <YoutubeView videoId='fWHcbiwRpLo' title='♪ 君想い MOVIE' />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='text-5xl font-serif text-aime-base text-center'>OTHER</div>
          <div className='flex gap-4 justify-center'>
            <Link to='/shop/online' className='text-center px-3 py-2 bg-slate-200 rounded-md'>オンラインショップ</Link>
            <Link to='/faq' className='text-center px-3 py-2 bg-slate-200 rounded-md'>よくある質問</Link>
          </div>
        </div>
      </Container>
    </BaseViewLayout>   
  )
}
