import Type from '../components/Type'
import Hero2 from './Hero2'

const Home = () => {
  return (
    <main className='hero-main'>
      <section id='hero' className='section-hero'>
        <div className='hero'>
          <div className='hero-text-box'>
            <h1 className='heading-primary'>
              Hi There!
              <span className='hero-wave' role='img' aria-labelledby='wave'>
                👋
              </span>
            </h1>
            <p className='hero-main-intro'>
              I'M <strong>ANURAG</strong>.
            </p>
            <p className='hero-main-intro'>
              From <strong>Kolkata,India</strong>.
            </p>
            <span className='hero-main-typewriter'>
              <Type />
            </span>
          </div>
        </div>
        <div className='hero-img-box'>
          <img
            className='hero-img'
            src='/home-right.png'
            alt='Avatar in homepage'
            width='400px'
          />
        </div>
      </section>
      <Hero2 />
    </main>
  )
}

export default Home
