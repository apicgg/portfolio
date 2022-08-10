import Type from '../components/Type'
import Home2 from './Home2'

const Home = () => {
  return (
    <>
      <section className='container mx-auto'>
        <div className='flex items-center justify-between p-6 m-12 relative'>
          <div className='flex flex-col p-24 text-4xl text-slate-700'>
            <div>
              <h1>
                Hi There!{' '}
                <span className='wave' role='img' aria-labelledby='wave'>
                  👋
                </span>
              </h1>
            </div>
            <h2 className='mt-4'>
              I'M <strong>ANURAG</strong>.
            </h2>
            <span className='mt-6 text-5xl text-blue-900 font-[600]'>
              <Type />
            </span>
          </div>
          <img
            src='/home-right.png'
            alt='home-right'
            width='400'
            className='pl-4 absolute right-20 top-30'
          />
        </div>
        <Home2 />
      </section>
    </>
  )
}

export default Home
