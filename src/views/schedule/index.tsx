import { Container } from '@mui/material'
import { BaseViewLayout } from '../../layouts/BaseViewLayout'

export const ScheduleView = () => {
  return (
    <BaseViewLayout>
      <div className='w-full py-16 px-2'>
        <Container maxWidth='lg'>
          <div className='text-center font-mono text-[48px] py-8'>SCHEDULE</div>
          <div className='flex flex-col gap-4'>
            <iframe
              title='カレンダー'
              src='https://timetreeapp.com/public_calendars/aimestaff/embed?calendar_name=false&frame_color=%23c2e8ff'
              className='w-full border-none h-[700px]' />
          </div>
        </Container>
      </div>
    </BaseViewLayout>
  )
}
