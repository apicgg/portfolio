import {
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from 'react-icons/di'
import {
  SiHtml5,
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
} from 'react-icons/si'

const TechStack = () => {
  return (
    <>
      <section className='flex flex-col items-center just space-x-0 space-y-4'>
        <div className='flex my-6 space-x-16'>
          <i className='py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <SiHtml5 className='tech-icon' />
          </i>
          <i className='py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <DiCss3 className='tech-icon' />
          </i>
          <i className='py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <DiJavascript1 className='tech-icon' />
          </i>
          <i className='py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <DiNodejs className='tech-icon' />
          </i>
          <i className='py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <DiReact className='tech-icon' />
          </i>
        </div>

        <div className='flex py-4 space-x-16'>
          <i className='py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <SiCplusplus className='tech-icon' />
          </i>
          <i className='py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <SiNextdotjs className='tech-icon' />
          </i>
          <i className='py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <DiMongodb className='tech-icon' />
          </i>
          <i className='py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <DiGit className='tech-icon' />
          </i>
          <i className='py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <SiTailwindcss className='tech-icon' />
          </i>
        </div>
      </section>
    </>
  )
}
export default TechStack
