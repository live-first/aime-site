import { Link  } from 'react-router-dom'
import { Clock, MapPin, CalendarBlank } from '@phosphor-icons/react'
import './index.scss'
import { ImageContainer } from '../imageContainer'
import { Event } from '../../domain/Event'

type EventProps = Event

const ResizeFontSize = (text: string) => {
  const textLength = text.length;
  if (textLength < 10) {
    return '1em';
  } else if (10 <= textLength && textLength < 20) {
    return '0.9em';
  } else {
    return '0.8em';
  }
}

export const EventCard = (props: EventProps) => {
  const {eventId,title,placeName,date,openTime,startTime,imgUrl} = props;
  return (
    <Link to={`./event/${eventId}`} style={{textDecoration: 'none'}}>
      <div className='event-card'>
        {imgUrl[0] && <ImageContainer imgUrl={imgUrl[0]} width='30%' height='200px' />}
        <div className='detail-area'>
          <div className='event-title'>{title}</div>
          <div className='footer-area'>
            {date ? <div className='event-date flex gap-1'><CalendarBlank size={18} className='translate-y-1' />{date}</div> : <></>}
            {openTime && startTime ? <div className='event-time flex gap-1'><Clock size={18} className='translate-y-1' />OPEN {openTime} / START {startTime}</div> : ''}
            {placeName ? <div className='event-place flex gap-1' style={{fontSize: ResizeFontSize(placeName)}}><MapPin size={18} className='translate-y-1' />{placeName}</div> : ''}
          </div>
        </div>
      </div>
    </Link>
  );
}
