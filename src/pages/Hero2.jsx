import myImg from '../../src/Assets/my-avatar.svg'
import Tilt from 'react-parallax-tilt'

const Hero2 = () => {
  return (
    <section className='max-w-3xl md:max-w-7xl mx-auto flex items-center justify-between flex-col-reverse md:flex-row md:gap-12 py-12 pt-16 mt-16 md:py-24 px-2'>
      <div>
        <h1 className='text-2xl md:text-4xl font-medium md:font-semibold text-center py-2 pt-6'>
          LET ME <span className='text-blue-900'>INTRODUCE</span> MYSELF
        </h1>
        <p className='text-base md:text-lg '>
          I have over 4 years of experience as a Software Engineer. I fell in
          love with programming especially with web development after my
          graduation.
          <br />
          <br />I am fluent in
          <i>
            <b className='text-blue-900'> HTML, CSS and JavaScript. </b>
          </i>
          <br />
          <br />
          My field of interest is to build web applications. And also in areas
          related to modern web technologies like &nbsp;
          <i>
            <b className='text-blue-900'>Deno, Server-side render etc. </b>
          </i>
          <br />
          <br />
          Whenever possible, I also apply my passion for open-source software
          development with <b className='text-blue-900'>Node.js</b> and Modern
          Javascript Library and Frameworks like
          <i>
            <b className='text-blue-900'> React.js and Next.js.</b>
          </i>
        </p>
      </div>

      <Tilt className='flex items-center justify-center'>
        <img src={myImg} alt='My Avatar' style={{ width: '300px' }} />
      </Tilt>
    </section>
  )
}

export default Hero2
