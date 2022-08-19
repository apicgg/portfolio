import Type from '../components/Type'
import Hero2 from './Hero2'

const Home = () => {
  return (
    <main className='bg-slate-400'>
      <section
        id='hero'
        className='max-w-3xl md:max-w-7xl mx-auto flex items-center justify-between flex-col-reverse md:flex-row py-12 md:py-24 px-2 space-y-0'>
        <div>
          <div>
            <h1 className='text-[#212529] text-3xl md:text-5xl font-medium py-3'>
              Hi There!
              <span className='hero-wave' role='img' aria-labelledby='wave'>
                👋
              </span>
            </h1>
            <p className='text-2xl md:text-4xl'>
              I'M <strong>ANURAG</strong>.
            </p>
            <p className='text-2xl md:text-4xl py-2'>
              From <strong>Bangalore, India</strong>.
            </p>
            <span className='text-[#212b57] text-3xl font-semibold'>
              <Type />
            </span>
          </div>
        </div>
        <div>
          <img src='/home-right.png' alt='Avatar in homepage' width='400px' />
        </div>
      </section>
      <Hero2 />
    </main>
  )
}

export default Home
