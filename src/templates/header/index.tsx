import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

export const Header = () => {
  return (
    <div className='w-full h-16 px-4 flex justify-between fixed bg-white z-50'>
      <div className='h-full'>
        <img className='h-full' src={logo} alt='aiMeロゴ' />
      </div>
      <nav className='flex gap-4 items-center'>
        <Link to='/news' className=''>
          <span>NEWS</span>
        </Link>
        <Link to='/about' className=''>
          <span>ABOUT</span>
        </Link>
        <Link to='/profile' className=''>
          <span>PROFILE</span>
        </Link>
        <Link to='/schedule' className=''>
          <span>SCHEDULE</span>
        </Link>
        <Link to='/contact' className=''>
          <span>CONTACT</span>
        </Link>
      </nav>
    </div>
  )
}
