import { Container } from '@mui/material'
import { BaseViewLayout } from '../../layouts/BaseViewLayout'

export const ScheduleView = () => {
  return (
    <BaseViewLayout>
      <div className='w-full py-16 px-8'>
        <Container maxWidth='lg'>
          <div className='text-center font-mono text-[48px] py-8'>SCHEDULE</div>
          <div className='flex flex-col gap-4'></div>
        </Container>
      </div>
    </BaseViewLayout>
  )
}
