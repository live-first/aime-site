import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

export const Header = () => {
  return (
    <div className='w-full h-16 px-2 flex justify-between'>
      <div className='h-full'>
        <img className='h-full' src={logo} alt='aiMeロゴ' />
      </div>
      <nav className='flex gap-2'>
        <Link to='/' className=''>
          <span>HOME</span>
        </Link>
        <Link to='/' className=''>
          <span>INFOMATION</span>
        </Link>
        <Link to='/' className=''>
          <span>SCHEDULE</span>
        </Link>
        <Link to='/' className=''>
          <span>MEMBER</span>
        </Link>
        <Link to='/' className=''>
          <span>CONTACT</span>
        </Link>
      </nav>
    </div>
  )
}
