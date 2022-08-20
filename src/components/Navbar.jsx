import { useState } from 'react'
import { AiFillStar, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <nav className='bg-slate-400 h-24'>
      <header className='container mx-auto md:pt-4 p-6 relative'>
        <div className='flex items-center justify-between'>
          <div>
            <Link
              className='text-2xl md:text-3xl text-blue-900 font-semibold md:font-bold'
              to='/'>
              AP.
            </Link>
          </div>

          <ul className='md:flex items-center gap-10 hidden'>
            <li>
              <Link
                to='/'
                className='flex items-center text-white font-medium text-lg py-2 px-4 rounded-lg bg-blue-900 hover:scale-110 transition-all duration-300'>
                <AiOutlineHome className='mr-1' /> Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='flex items-center text-white font-medium text-lg py-2 px-4 rounded-lg bg-blue-900 hover:scale-110 transition-all duration-300'>
                <AiOutlineUser className='mr-1' /> About
              </Link>
            </li>
            <li>
              <a
                href='https://apicgg.github.io/digital-resume/'
                target='_blank'
                className='flex items-center text-white font-medium text-lg py-2 px-4 rounded-lg bg-blue-900 hover:scale-110 transition-all duration-300  main-nav-link-sec'>
                <AiFillStar className='mr-1' /> Resume
              </a>
            </li>
          </ul>

          {/* TODO */}
          {/* Hamburger Icon */}
          <button
            onClick={() => setIsMobile(!isMobile)}
            className={`${
              isMobile ? 'open' : null
            } block hamburger md:hidden focus:outline-none`}>
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className='md:hidden'>
          <div
            id='menu'
            className={`${
              isMobile ? 'flex' : 'hidden'
            } absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-slate-400 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='https://apicgg.github.io/digital-resume/' target='_blank'>
              {' '}
              Resume
            </a>
          </div>
        </div>
      </header>
    </nav>
  )
}

export default Navbar
