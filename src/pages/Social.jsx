import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Social = () => {
  return (
    <>
      <section className='pt-8 mt-4 text-center'>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className='purple'>connect </span>with me
        </p>
        <ul className='flex items-center justify-center p-4 space-x-12'>
          <li className=''>
            <a
              href='https://github.com/apicgg'
              target='_blank'
              rel='noreferrer'>
              <FaGithub className='social-icon' />
            </a>
          </li>
          <li className=''>
            <a
              href='https://twitter.com/titas_p'
              target='_blank'
              rel='noreferrer'>
              <FaTwitter className='social-icon' />
            </a>
          </li>
          <li className=''>
            <a href='#' target='_blank' rel='noreferrer'>
              <FaLinkedinIn className='social-icon' />
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}
export default Social
