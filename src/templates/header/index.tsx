import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import xLogo from '../../images/x-logo.png'
import ytLogo from '../../images/youtube-logo.png'
import ttLogo from '../../images/tiktok-logo.png'
import './index.css'
import { useState } from 'react'
import { Grid2 } from '@mui/material'

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='fixed top-0 z-50 flex w-full flex-col'>
      <div className='flex h-14 w-full justify-between bg-white px-4 shadow-sm shadow-cyan-500/50'>
        <h1>
          <Link className='h-full' to='/'>
            <img className='h-full' src={logo} alt='aiMeロゴ' />
          </Link>
        </h1>
        <nav className='is-pc items-center gap-4'>
          <Link to='/news' className=''>
            <span>NEWS</span>
          </Link>
          <Link to='/about' className=''>
            <span>ABOUT</span>
          </Link>
          <Link to='/profile' className=''>
            <span>PROFILE</span>
          </Link>
          <Link to='/shop' className=''>
            <span>SHOP</span>
          </Link>
          <Link to='/schedule' className=''>
            <span>SCHEDULE</span>
          </Link>
          <Link to='/contact' className=''>
            <span>CONTACT</span>
          </Link>
        </nav>
        <button
          className={`is-sp hamburger-menu ${open ? 'active' : ''}`}
          id='menu01'
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className='flex w-full justify-end gap-6 px-6 py-1'>
        <Link to='https://twitter.com/aime_staff' target='_blank'>
          <img className='h-6' src={xLogo} alt='x-logo' />
        </Link>
        <Link to='https://www.tiktok.com/@aime_1005' target='_blank'>
          <img className='h-6' src={ttLogo} alt='tiktok-logo' />
        </Link>
        <Link to='https://www.youtube.com/@aiMe_2024' target='_blank'>
          <img className='h-6' src={ytLogo} alt='youtube-logo' />
        </Link>
      </div>
      <div
        className={`${open ? 'block' : 'hidden'} sp-bg absolute min-h-screen min-w-full px-10 pb-8 pt-16`}
      >
        <Grid2 container spacing={8}>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Link to='/' className='w-full'>
              <span>HOME</span>
            </Link>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Link to='/news' className=''>
              <span>NEWS</span>
            </Link>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Link to='/about' className=''>
              <span>ABOUT</span>
            </Link>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Link to='/profile' className=''>
              <span>PROFILE</span>
            </Link>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Link to='/shop' className=''>
              <span>SHOP</span>
            </Link>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Link to='/schedule' className=''>
              <span>SCHEDULE</span>
            </Link>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Link to='/contact' className=''>
              <span>CONTACT</span>
            </Link>
          </Grid2>
        </Grid2>
      </div>
    </div>
  )
}
