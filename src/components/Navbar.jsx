import {
  AiFillStar,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='bg-slate-400 h-24'>
      <header className='container mx-auto md:pt-4 p-6 '>
        <div className='flex items-center justify-between'>
          <div>
            <Link
              className='text-xl md:text-3xl text-blue-900 font-semibold md:font-bold'
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
            // onClick={onClick}
            id='menu-btn'
            class='block hamburger md:hidden focus:outline-none'>
            <span class='hamburger-top'></span>
            <span class='hamburger-middle'></span>
            <span class='hamburger-bottom'></span>
          </button>
        </div>
      </header>
    </nav>
  )
}

export default Header
