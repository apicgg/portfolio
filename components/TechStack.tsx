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
  SiTypescript,
} from 'react-icons/si'

const TechStack = () => {
  return (
    <>
      <section className='flex flex-col items-center justify-center space-y-4'>
        <div className='grid grid-cols-2 lg:flex gap-5 my-6 lg:space-x-16'>
          <i className='py-4 border-2 border-[#474747] rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <SiHtml5 className='w-14 h-14' color='gray' />
          </i>
          <i className='lg:hidden py-4 border-2 border-[#474747] rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <DiCss3 className='w-14 h-14' color='gray' />
          </i>
          <i className='py-4 border-2 border-[#474747] rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <SiTailwindcss className='w-14 h-14' color='gray' />
          </i>

          <i className='py-4 border-2 border-[#474747] rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <DiJavascript1 className='w-14 h-14' color='gray' />
          </i>
          <i className='lg:hidden py-4 border-2 border-[#474747] rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <DiNodejs className='w-14 h-14' color='gray' />
          </i>
          <i className='py-4 border-2 border-[#474747] rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <DiReact className='w-14 h-14' color='gray' />
          </i>
        </div>

        <div className='grid grid-cols-2 gap-5 lg:flex my-6 lg:space-x-16'>
          <i className='py-4 border-2 border-[#474747] rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <SiTypescript className='w-14 h-14' color='gray' />
          </i>
          <i className='py-4 border-2 border-[#474747] rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <SiNextdotjs className='w-14 h-14' color='gray' />
          </i>
          <i className='py-4 border-2 border-[#474747] rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <DiMongodb className='w-14 h-14' color='gray' />
          </i>
          <i className='py-4 border-2 border-[#474747] rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <DiGit className='w-14 h-14' color='gray' />
          </i>
        </div>
      </section>
    </>
  )
}

export default TechStack
