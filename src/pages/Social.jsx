import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Social = () => {
  return (
    <>
      <section className='pt-10 mt-10 text-center'>
        <h1 className='pb-2 mb-1 text-4xl text-center text-slate-800 font-[600]'>
          FIND ME ON
        </h1>
        <p className='text-xl'>
          Feel free to <span className='font-[500]'>connect </span>with me
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
            <a
              href='https://www.linkedin.com/in/anurag-pramanik-345843125/'
              target='_blank'
              rel='noreferrer'>
              <FaLinkedinIn className='social-icon' />
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Social
