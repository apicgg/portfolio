import aboutRight from '../Assets/about-right.svg'
import TechStack from '../components/TechStack'
import ToolStack from '../components/ToolStack'
import Social from './Social'

const About = () => {
  return (
    <main className='bg-slate-400'>
      <section className='max-w-3xl md:max-w-7xl mx-auto'>
        <div className='flex flex-col-reverse items-center justify-between md:py-12 px-4 md:flex-row'>
          <div>
            <header className='text-3xl md:text-4xl text-center font-semibold'>
              <h3>
                Know who <span className='text-blue-900'> I'm!</span>
              </h3>
            </header>
            <p className='text-lg md:text-xl pt-5 font-medium'>
              Hi Everyone, My name is &nbsp;
              <span className='text-blue-900'>Anurag Pramanik.</span>
              <br />
              I work as a Software Engineer in an IT organization. <br /> <br />
              I am currently pursuing Masters in Computer Software Engineering
              from BITS Pilani.
              <br />I am also willing to contribute to open-source projects.
            </p>
          </div>

          <div>
            <img
              src={aboutRight}
              alt='about-right'
              style={{ height: '450px', width: '450px' }}
            />
          </div>
        </div>
        <h2 className='text-2xl md:text-3xl text-center font-semibold my-4'>
          <span className='text-blue-900'>
            Language, Library and Frameworks
          </span>
        </h2>
        <TechStack />
        <h2 className='text-xl md:text-3xl text-center font-semibold mt-4 pt-6'>
          Other <span className='text-blue-900'>Tools</span> I use
        </h2>
        <ToolStack />
        <Social />
      </section>
    </main>
  )
}

export default About
