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

      <nav className='main-nav'>
        <ul className='main-nav-list'>
          <li>
            <Link to='/' className='main-nav-link'>
              <AiOutlineHome className='mr-1' /> Home
            </Link>
          </li>
          <li>
            <Link to='/about' className='main-nav-link main-nav-link-sec'>
              <AiOutlineUser className='mr-1' /> About
            </Link>
          </li>
          {/* <li>
            <Link to='/project' className='main-nav-link'>
              <AiOutlineFundProjectionScreen className='mr-1' /> Projects
            </Link>
          </li>
          <li>
            <Link to='/resume' className='main-nav-link'>
              <AiFillStar className='mr-1' /> Resume
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header
