import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

export const Footer = () => {
  return (
    <div className='flex flex-col bg-[#ddf9ff]'>
      <div className='flex justify-between gap-8 px-8 pt-8'>
        <div className='flex flex-wrap gap-8'>
          <Link to='/news' className='whitespace-nowrap'>
            NEWS
          </Link>
          <Link to='/about' className='whitespace-nowrap'>
            ABOUT US
          </Link>
          <Link to='/profile' className='whitespace-nowrap'>
            PROFILE
          </Link>
          <Link to='/schedule' className='whitespace-nowrap'>
            SCHEDULE
          </Link>
          <Link to='/shop' className='whitespace-nowrap'>
            SHOP
          </Link>
          <Link to='/shop/online' className='whitespace-nowrap'>
            ONLINE SHOP
          </Link>
          <Link to='/faq' className='whitespace-nowrap'>
            FAQ
          </Link>
          <Link to='/contact' className='whitespace-nowrap'>
            CONTACT
          </Link>
        </div>
        <div className='w-full justify-center text-center'>
          <img className='w-80' src={logo} alt='aiMeロゴ' />
        </div>
      </div>
      <div className='w-full px-6 py-4 pt-5 text-center'>Copyright aiMe All Rights Reserved.</div>
    </div>
  )
}
