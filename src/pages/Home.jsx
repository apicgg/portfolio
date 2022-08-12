import Type from '../components/Type'
import Home2 from './Home2'

const Home = () => {
  return (
    <>
      <section>
        <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between px-2 lg:px-16 m-2 lg:m-12 space-y-0'>
          <div className='flex flex-col p-12 lg:p-24 text-4xl text-slate-700'>
            <div>
              <h1>
                Hi There!
                <span className='wave' role='img' aria-labelledby='wave'>
                  👋
                </span>
              </h1>
            </div>
            <h2 className='mt-4'>
              I'M <strong>ANURAG</strong>.
            </h2>
            <h2 className='mt-2'>
              From <strong>Kolkata, India</strong>.
            </h2>
            <span className='mt-6 text-3xl lg:text-4xl text-blue-900 font-[600]'>
              <Type />
            </span>
          </div>
          <img
            src='/home-right.png'
            alt='home-right'
            width='400'
            className='pl-4'
          />
        </div>
        <Home2 />
      </section>
    </>
  )
}

export default Home
