import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import xLogo from '../../images/x-logo.png'
import ytLogo from '../../images/youtube-logo.png'
import ttLogo from '../../images/tiktok-logo.png'
import './index.css'
import { useState } from 'react'

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='w-full flex flex-col fixed z-50'>
      <div className='w-full h-14 px-4 flex justify-between bg-white shadow-sm shadow-cyan-500/50'>
        <Link className='h-full' to='/'>
          <img className='h-full' src={logo} alt='aiMeロゴ' />
        </Link>
        <nav className='is-pc gap-4 items-center'>
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
        <button className={`is-sp hamburger-menu ${open ? 'active' : ''}`} id='menu01' onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className='w-full flex py-1 justify-end px-6 gap-6'>
        <Link to='https://twitter.com/aime_staff' target='_blank'>
          <img className='h-6' src={xLogo} alt='x-logo' />
        </Link>
        <Link to='https://www.tiktok.com/@aime_1005' target='_blank'>
          <img className='h-6' src={ttLogo} alt='tiktok-logo' />
        </Link>
        <Link to='#' target='_blank'>
          <img className='h-6' src={ytLogo} alt='youtube-logo' />
        </Link>
      </div>
      <div className={`${open ? 'block' : 'hidden'} absolute min-h-screen min-w-full sp-bg py-8 px-6`}>
        あああ
      </div>
    </div>
  )
}
