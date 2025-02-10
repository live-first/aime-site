import { useParams  } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import './ticketInfo.scss'
import { BaseViewLayout } from '../../layouts/BaseViewLayout'

export const TicketInfoView = () => {
  const id = useParams();
  const [data, setData] = useState<Event>();
  useEffect (
    () => {
      fetch(`http://localhost:8080/event/${id.eventId}`, {mode: 'cors'})
      .then(response => response.json())
      .then(event => {
        setData(event)      
      })
      .catch(e => {
        console.error('リクエストエラー:', e.error);
      });
    }, []
  );

  return (
    <BaseViewLayout>
      <Container maxWidth='md'>
      
      </Container>
    </BaseViewLayout>
  )  
}
