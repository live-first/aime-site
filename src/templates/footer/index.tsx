import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

export const Footer = () => {
  return (
    <div className='flex flex-col bg-[#ddf9ff]'>
      <div className='flex gap-8 pt-8 px-8 justify-between'>
        <div className='flex flex-wrap gap-8'>
          <Link to='/news' className='whitespace-nowrap'>NEWS</Link>
          <Link to='/about' className='whitespace-nowrap'>ABOUT US</Link>
          <Link to='/profile' className='whitespace-nowrap'>PROFILE</Link>
          <Link to='/schedule' className='whitespace-nowrap'>SCHEDULE</Link>
          <Link to='/shop' className='whitespace-nowrap'>SHOP</Link>
          <Link to='/shop/online' className='whitespace-nowrap'>ONLINE SHOP</Link>
          <Link to='/faq' className='whitespace-nowrap'>FAQ</Link>
          <Link to='/contact' className='whitespace-nowrap'>CONTACT</Link>
        </div>
        <div className='w-full text-center justify-center'>
          <img className='w-80' src={logo} alt='aiMeロゴ' />
        </div>
      </div>
      <div className='w-full py-4 px-6 text-center pt-5'>Copyright aiMe All Rights Reserved.</div>
    </div>
  )
}
