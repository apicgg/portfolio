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
        <div className='flex my-6 space-x-16'>
          <i className='tech-icon-container  py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <SiLinux className='tech-icon' />
          </i>
          <i className='tech-icon-container-aws py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <SiAmazonaws className='tech-icon' />
          </i>
          <i className='tech-icon-container-vscode py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <SiVisualstudiocode className='tech-icon' />
          </i>
          <i className='tech-icon-container-postman py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <SiPostman className='tech-icon' />
          </i>
          <i className='tech-icon-container py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
            <SiVercel className='tech-icon' />
          </i>
        </div>
      </section>
    </>
  )
}

export default ToolStack
