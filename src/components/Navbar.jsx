import {
  AiFillStar,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo-box'>
        <Link className='logo' to='/'>
          AP.
        </Link>
      </div>

          {/* Menu Items */}
          <ul className='flex items-center justify-between space-x-12 text-lg font-[500]'>
            <li>
              <Link
                to='/'
                className='flex items-center hover:text-blue-900 nav'>
                <AiOutlineHome className='mr-1' /> Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='flex items-center hover:text-blue-900 nav'>
                <AiOutlineUser className='mr-1' /> About
              </Link>
            </li>
            <li>
              <Link
                to='/project'
                className='flex items-center hover:text-blue-900 nav'>
                <AiOutlineFundProjectionScreen className='mr-1' /> Projects
              </Link>
            </li>
            <li>
              <Link
                to='/resume'
                className='flex items-center hover:text-blue-900 nav'>
                <AiFillStar className='mr-1' /> Resume
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
