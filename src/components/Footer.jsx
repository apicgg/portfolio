import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  let date = new Date()
  let currentYear = date.getFullYear()
  return (
    <footer className='bg-[#64748b] py-8 px-28 md:py-4 md:px-14'>
      <div className='grid grid-rows-3 gap-y-5 md:grid-cols-3 md:grid-rows-none items-center justify-between'>
        <h3 className='font-semibold'>Developed by Anurag Pramanik</h3>
        <h3 className='place-self-center font-semibold'>
          Copyright © {currentYear} AP
        </h3>
        <ul className='flex items-center justify-center gap-10 font-semibold'>
          <li>
            <a
              href='https://github.com/apicgg'
              target='_blank'
              rel='noreferrer'>
              <FaGithub className='h-5 w-5 text-black' />
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/titas_p'
              target='_blank'
              rel='noreferrer'>
              <FaTwitter className='h-5 w-5 text-black' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/anurag-pramanik-345843125/'
              target='_blank'
              rel='noreferrer'>
              <FaLinkedinIn className='h-5 w-5 text-black' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
