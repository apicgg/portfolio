import myImg from '../../src/Assets/my-avatar.svg'
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import Tilt from 'react-parallax-tilt'

const Home2 = () => {
  return (
    <>
      <section className='flex items-center justify-between space-x-12 space-y-0 m-52 pt-14'>
        <div>
          <h1 className='pb-4 text-4xl text-center text-slate-800 font-[600]'>
            LET ME <span className='font-[700] text-blue-900'>INTRODUCE</span>{' '}
            MYSELF
          </h1>
          <div className='font-[500]'>
            <p>
              Hi All, My name is Anurag Pramanik and I work as a Full Stack Web
              Developer in an IT company.
              <br />
              <br />I am fluent in
              <i>
                <b> HTML, CSS and JavaScript </b>
              </i>
              <br />
              <br />
              My field of interest is to build web applications. And also in
              areas related to modern web technologies like &nbsp;
              <i>
                <b className='text-blue-900'>Deno, Server-side render etc. </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for open-source
              software development with <b className='text-blue-900'>
                Node.js
              </b>{' '}
              and
              <i>
                <b className='text-blue-900'>
                  {' '}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className='text-blue-900'> React.js and Next.js.</b>
              </i>
            </p>
          </div>
        </div>

        <Tilt className='pl-4 ml-2'>
          <img
            src={myImg}
            alt='my-avatar'
            style={{ height: '300px', width: '400px' }}
          />
        </Tilt>
      </section>
    </>
  )
}

export default Home2
