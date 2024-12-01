import { Container, TextField } from '@mui/material'
import { MypageViewLayout } from '../../layouts/MypageViewLayout'

export const ToolsView = () => {
  return (
    <MypageViewLayout>
      <Container maxWidth='md'>
        <div className='flex flex-col gap-6'>
          <TextField
            required
            fullWidth
            size='small'
            margin='dense'
            label='イベント名'
            placeholder='LIVE FIRST'
          />
        </div>
      </Container>
    </MypageViewLayout>
  )
}
