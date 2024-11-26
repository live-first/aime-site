import { Container, TextField } from '@mui/material'
import { ErrorMessage } from '@hookform/error-message'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MypageViewLayout } from '../../../layouts/MypageViewLayout'
import { Users } from '../../../resources/users'

type InputType = {
  email: string
  password: string
}

export const ManagementLoginView = () => {
  const navigate = useNavigate()

  const {register, handleSubmit, formState: {errors}} = useForm<InputType>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<InputType> = (data) => {
    const user = Users.find((user) => (
      user.email === data.email && user.password === data.password
    ))
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
      navigate(`/management/${user.id}`)
    }
  }

  return (
    <MypageViewLayout>
      <Container maxWidth='md'>
        <div className='flex flex-col gap-5 bg-[#f2f2f2] rounded-lg py-5 px-3 border-[#848484]'>
          <div>
            <TextField
              required
              fullWidth
              size='small'
              margin='dense'
              label='メールアドレス'
              autoComplete='current-email'
              placeholder='wakuwakuticket@example.com'
              {...register('email', { 
                required: 'メールアドレスを入力してください。', 
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/i,
                message: 'メールアドレスの形式が不正です。',
                },
              })}
            />
            <ErrorMessage errors={errors} name="email" render={({message}) => <div className='errorMsg'>{message}</div>} />
          </div>
          <div>
            <TextField
              required
              fullWidth
              size='small'
              margin='dense'
              label='パスワード'
              type='password'
              autoComplete='current-password'
              placeholder='パスワードを入力してください'
              {...register('password', { 
                required: 'パスワードを入力してください。',
              })}
            />
            <ErrorMessage errors={errors} name="password" render={({message}) => <div className='errorMsg'>{message}</div>} />
          </div>
          <div>
            <button className='' onClick={handleSubmit(onSubmit)}>ログイン</button>
          </div>
        </div>
      </Container>
    </MypageViewLayout>
  )
}