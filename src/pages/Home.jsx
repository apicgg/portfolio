import Type from '../components/Type'
import Home2 from './Home2'

const Home = () => {
  return (
    <section id='hero'>
      <main className='hero-main'>
        <article className='hero-main-article'>
          <div>
            <h1>
              Hi There!
              <span className='hero-wave' role='img' aria-labelledby='wave'>
                👋
              </span>
            </h1>
          </div>
          <h2 className='hero-main-intro'>
            I'M <strong>ANURAG</strong>.
          </h2>
          <h2>
            From <strong>Kolkata, India</strong>.
          </h2>
          <span className='hero-main-typewriter'>
            <Type />
          </span>
        </article>
        <div className='hero-img-box'>
          <img
            className='hero-img'
            src='/home-right.png'
            alt='home-right'
            width='400'
          />
        </div>
      </main>
      <Home2 />
    </section>
  )
}

export default Home
