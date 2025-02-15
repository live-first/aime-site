import { Container } from '@mui/material'
import { BaseViewLayout } from '../../layouts/BaseViewLayout'

export const ScheduleView = () => {
  return (
    <BaseViewLayout>
      <div className='w-full px-2 py-16'>
        <Container maxWidth='lg'>
          <div className='py-8 text-center font-mono text-[48px]'>SCHEDULE</div>
          <div className='flex flex-col gap-4'>
            <iframe
              title='カレンダー'
              src='https://timetreeapp.com/public_calendars/aimestaff/embed?calendar_name=false&frame_color=%23c2e8ff'
              className='h-[700px] w-full border-none'
            />
          </div>
        </Container>
      </div>
    </BaseViewLayout>
  )
}
