import myImg from '../../src/Assets/my-avatar.svg'

const Home2 = () => {
  return (
    <section className='section-intro container'>
      <div>
        <h1 className='heading-secondary'>
          LET ME <span className='text-color'>INTRODUCE</span> MYSELF
        </h1>
        <p className='about-me'>
          I have over 4 years of experience as a Software Engineer. I fell in
          love with programming especially with web development after my
          graduation.
          <br />
          <br />I am fluent in
          <i>
            <b className='text-color'> HTML, CSS and JavaScript. </b>
          </i>
          <br />
          <br />
          My field of interest is to build web applications. And also in areas
          related to modern web technologies like &nbsp;
          <i>
            <b className='text-color'>Deno, Server-side render etc. </b>
          </i>
          <br />
          <br />
          Whenever possible, I also apply my passion for open-source software
          development with <b className='text-color'>Node.js</b> and Modern
          Javascript Library and Frameworks like
          <i>
            <b className='text-color'> React.js and Next.js.</b>
          </i>
        </p>
      </div>

      <div className='section-intro-avatar-box'>
        <img className='section-intro-avatar' src={myImg} alt='My Avatar' />
      </div>
    </section>
  )
}

export default Home2
