import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className='container mx-auto p-4'>
        {/* Flex container */}
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='text-blue-900 font-bold text-3xl'>
            <Link to='/'>AP.</Link>
          </div>

          {/* Menu Items */}
          <ul className='flex items-center justify-between space-x-20 '>
            <li>
              <Link to='/home' className='flex items-center'>
                <AiOutlineHome className='mr-1' /> Home
              </Link>
            </li>
            <li>
              <Link to='/about' className='flex items-center'>
                <AiOutlineUser className='mr-1' /> About
              </Link>
            </li>
            <li>
              <Link to='/projects' className='flex items-center'>
                <AiOutlineFundProjectionScreen className='mr-1' /> Projects
              </Link>
            </li>
            <li>
              <Link to='/resume' className='flex items-center'>
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
