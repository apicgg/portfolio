import aboutRight from '../Assets/about-right.svg'
import TechStack from '../components/TechStack'
import ToolStack from '../components/ToolStack'
import Social from './Social'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <section className='container p-8 px-24 mx-auto'>
        <div className='flex items-center justify-between'>
          <div>
            <header className='pb-6 mb-4 text-4xl text-center text-slate-800 font-[600]'>
              Know who <span className='font-[700] text-blue-900'> I'm!</span>
            </header>
            <p className='font-[500] text-xl leading-normal'>
              Hi Everyone, My name is &nbsp;
              <span className='font-bold text-blue-900'>Anurag Pramanik.</span>
              <br />
              I work as a Software Engineer in an IT organization. <br /> <br />
              I am currently pursuing Masters in Computer Software Engineering
              from BITS Pilani.
              <br />I also contribute to open-source projects in my free time!
            </p>
          </div>

          <img
            src={aboutRight}
            alt='about-right'
            style={{ height: '450px', width: '450px' }}
          />
        </div>
        <h1 className='m-2 text-3xl text-center text-slate-800 font-[600]'>
          <span className='text-blue-900'>
            Language, Library and Frameworks
          </span>
        </h1>
        <TechStack />
        <h1 className='m-2 mt-10 text-3xl text-center text-slate-800 font-[600]'>
          Other <span className='text-blue-900'>Tools</span> I use
        </h1>
        <ToolStack />
        <Social />
      </section>
      <Footer />
    </>
  )
}

export default About
