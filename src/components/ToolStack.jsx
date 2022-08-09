import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiAmazonaws,
} from 'react-icons/si'

const ToolStack = () => {
  return (
    <>
      <section className='flex flex-col items-center space-x-0 space-y-4'>
        <div className='flex my-6 space-x-12'>
          <i className='py-4 border-2 border-darkGray rounded px-14'>
            <SiLinux className='tech-icon' />
          </i>
          <i className='py-4 border-2 border-darkGray rounded px-14'>
            <SiAmazonaws className='tech-icon' />
          </i>
          <i className='py-4 border-2 border-darkGray rounded px-14'>
            <SiVisualstudiocode className='tech-icon' />
          </i>
          <i className='py-4 border-2 border-darkGray rounded px-14'>
            <SiPostman className='tech-icon' />
          </i>
          <i className='py-4 border-2 border-darkGray rounded px-14'>
            <SiVercel className='tech-icon' />
          </i>
        </div>
      </section>
    </>
  )
}

export default ToolStack
