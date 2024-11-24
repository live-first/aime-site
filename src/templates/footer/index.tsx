import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

export const Footer = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex gap-8 pt-8 px-8 justify-between'>
        <div className='flex gap-8 whitespace-pre-wrap'>
          <Link to='/news' className=''>NEWS</Link>
          <Link to='/about' className=''>ABOUT US</Link>
          <Link to='/profile'>PROFILE</Link>
          <Link to='/schedule'>SCHEDULE</Link>
          <Link to='/shop'>SHOP</Link>
          <Link to='/faq'>FAQ</Link>
          <Link to='/contact'>CONTACT</Link>
        </div>
        <div className='w-full text-center justify-center'>
          <img className='w-80' src={logo} alt='aiMeロゴ' />
        </div>
      </div>
      <div className='w-full py-4 px-6 text-center pt-5'>Copyright aiMe All Rights Reserved.</div>
    </div>
  )
}
