import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import { BaseViewLayout } from '../../layouts/BaseViewLayout'
import { eventList } from '../../resources/events'
import { NotFoundView } from '../notFound'

export const EventDetailView = () => {
  const id = useParams()
  const eventIndex = eventList.findIndex((event) => event.eventId === Number(id))
  const eventData = eventList[eventIndex]

  return eventData ? (
    <BaseViewLayout>
      <Container maxWidth='sm'></Container>
    </BaseViewLayout>
  ) : (
    <NotFoundView />
  )
}
