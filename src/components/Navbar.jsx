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
      <header className='container mx-auto p-4 '>
        <div className='flex items-center justify-between'>
          <div>
            <Link className='text-3xl text-blue-900 font-bold' to='/'>
              AP.
            </Link>
          </div>

          <ul className='flex items-center gap-12'>
            <li>
              <Link
                to='/'
                className='flex items-center text-white font-medium text-lg py-2 px-6 rounded-lg bg-blue-900 hover:scale-110 transition-all duration-300'>
                <AiOutlineHome className='mr-1' /> Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='flex items-center text-white font-medium text-lg py-2 px-6 rounded-lg bg-blue-900 hover:scale-110 transition-all duration-300'>
                <AiOutlineUser className='mr-1' /> About
              </Link>
            </li>
            <li>
              <a
                href='https://apicgg.github.io/digital-resume/'
                target='_blank'
                className='flex items-center text-white font-medium text-lg py-2 px-6 rounded-lg bg-blue-900 hover:scale-110 transition-all duration-300  main-nav-link-sec'>
                <AiFillStar className='mr-1' /> Resume
              </a>
            </li>
            {/* <li>
            <Link to='/project' className='main-nav-link'>
              <AiOutlineFundProjectionScreen className='mr-1' /> Projects
            </Link>
          </li>
           */}
          </ul>
        </div>
      </header>
    </nav>
  )
}

export default Header
