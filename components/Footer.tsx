import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  let date = new Date();
  let currentYear = date.getFullYear();
  return (
    <footer className='bg-[#161619] text-fontColor py-8 px-12 md:px-14'>
      <div className='grid grid-rows-3 gap-y-5 md:grid-cols-3 md:grid-rows-none items-center justify-center md:justify-between'>
        <h3 className='font-semibold'>Developed by Anurag</h3>
        <h3 className='place-self-center font-semibold'>
          Copyright © {currentYear} AP
        </h3>
        <ul className='flex items-center justify-center gap-10 font-semibold'>
          <li>
            <Link
              href='https://github.com/apicgg/portfolio'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Anurag Pramanik github repository'
            >
              <FaGithub className='h-5 w-5' />
            </Link>
          </li>
          <li>
            <Link
              href='https://www.linkedin.com/in/anurag-pramanik-345843125/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Anurag Pramanik linkedin'
            >
              <FaLinkedinIn className='h-5 w-5' />
            </Link>
          </li>
          <li>
            <Link
              href='https://twitter.com/titas_p'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Anurag Pramanik twitter'
            >
              <FaTwitter className='h-5 w-5' />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
