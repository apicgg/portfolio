import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  let date = new Date()
  let currentYear = date.getFullYear()
  return (
    <footer className='footer-section'>
      <div className='footer-main'>
        <h3 className='grid--self-center footer-designer'>
          Designed and Developed by Anurag Pramanik
        </h3>
        <h3 className='grid--self-center footer-designer'>
          Copyright © {currentYear} AP
        </h3>
        <ul className='footer-social-box footer-designer'>
          <li className='footer-social-list'>
            <a
              href='https://github.com/apicgg'
              target='_blank'
              rel='noreferrer'>
              <FaGithub className='footer-social-icon' />
            </a>
          </li>
          <li className='footer-social-list'>
            <a
              href='https://twitter.com/titas_p'
              target='_blank'
              rel='noreferrer'>
              <FaTwitter className='footer-social-icon' />
            </a>
          </li>
          <li className='footer-social-list'>
            <a
              href='https://www.linkedin.com/in/anurag-pramanik-345843125/'
              target='_blank'
              rel='noreferrer'>
              <FaLinkedinIn className='footer-social-icon' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
