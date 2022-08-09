import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  let date = new Date()
  let currentYear = date.getFullYear()
  return (
    <>
      <footer className='bg-slate-500 px-12 py-1'>
        <div className='container mx-auto flex  items-center justify-between font-[500]'>
          <h3>Developed by Anurag Pramanik</h3>
          <h3>Copyright © {currentYear} AP</h3>
          <ul className='flex items-center justify-center p-4 space-x-12'>
            <li className=''>
              <a
                href='https://github.com/apicgg'
                target='_blank'
                rel='noreferrer'>
                <FaGithub className='social-icon-footer' />
              </a>
            </li>
            <li className=''>
              <a
                href='https://twitter.com/titas_p'
                target='_blank'
                rel='noreferrer'>
                <FaTwitter className='social-icon-footer' />
              </a>
            </li>
            <li className=''>
              <a
                href='https://www.linkedin.com/in/anurag-pramanik-345843125/'
                target='_blank'
                rel='noreferrer'>
                <FaLinkedinIn className='social-icon-footer' />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
