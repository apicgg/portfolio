import aboutRight from '../Assets/about-right.svg'
import TechStack from '../components/TechStack'
import ToolStack from '../components/ToolStack'
import Social from './Social'

const About = () => {
  return (
    <section className='container'>
      <div className='grid pt-960'>
        <div>
          <header className='heading-secondary'>
            <h3>
              Know who <span className='text-color'> I'm!</span>
            </h3>
          </header>
          <p className='about-me'>
            Hi Everyone, My name is &nbsp;
            <span className='text-color'>Anurag Pramanik.</span>
            <br />
            I work as a Software Engineer in an IT organization. <br /> <br />
            I am currently pursuing Masters in Computer Software Engineering
            from BITS Pilani.
            <br />I am also willing contribute to open-source projects in my
            free time!
          </p>
        </div>

        <div>
          <img
            className='about-img'
            src={aboutRight}
            alt='about-right'
            // style={{ height: '450px', width: '450px' }}
          />
        </div>
      </div>
      <h2 className='about-tech'>
        <span className='text-color'>Language, Library and Frameworks</span>
      </h2>
      <TechStack />
      <h2 className='about-tech'>
        Other <span className='text-color'>Tools</span> I use
      </h2>
      <ToolStack />
      <Social />
    </section>
  )
}

export default About
