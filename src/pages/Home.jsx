import Type from '../components/Type'

const Home = () => {
  return (
    <>
      <section className='container'>
        <div className='flex items-center justify-between p-6 m-12'>
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
            <span className='mt-6 text-5xl text-blue-900'>
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
      </section>
    </>
  )
}

export default Home
