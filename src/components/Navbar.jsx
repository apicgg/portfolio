import {
  AiFillStar,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className='container mx-auto p-4 pb-1 border-b-2 border-gray-400'>
        {/* Flex container */}
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='text-blue-900 font-bold text-3xl'>
            <Link to='/'>AP.</Link>
          </div>

          {/* Menu Items */}
          <ul className='flex items-center justify-between space-x-12 text-lg font-[500]'>
            <li>
              <Link to='/' className='flex items-center hover:text-blue-900'>
                <AiOutlineHome className='mr-1 ' /> Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='flex items-center hover:text-blue-900'
              >
                <AiOutlineUser className='mr-1' /> About
              </Link>
            </li>
            <li>
              <Link
                to='/projects'
                className='flex items-center hover:text-blue-900'
              >
                <AiOutlineFundProjectionScreen className='mr-1' /> Projects
              </Link>
            </li>
            <li>
              <Link
                to='/resume'
                className='flex items-center hover:text-blue-900'
              >
                <AiFillStar className='mr-1' /> Resume
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
