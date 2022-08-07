import Type from '../components/Type'

const Home = () => {
  return (
    <>
      <section className='container'>
        <div className='flex items-center justify-between p-6 m-12'>
          <div className='flex flex-col p-24 text-6xl text-blue-900'>
            <h1>Hi There!</h1>
            <span className='mt-6 text-4xl'>
              <Type />
            </span>
          </div>
          <img src='/public/home-right.png' alt='home-right' width='400' />
        </div>
      </section>
    </>
  )
}

export default Home
