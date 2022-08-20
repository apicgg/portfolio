import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiAmazonaws,
} from 'react-icons/si'

const ToolStack = () => {
  return (
    <section className='flex flex-col items-center justify-between space-y-4'>
      <div className='grid grid-cols-2 gap-5 md:flex md:flex-row my-6 md:space-x-16'>
        <i className='py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
          <SiLinux className='w-14 h-14' />
        </i>
        <i className='py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
          <SiAmazonaws className='w-14 h-14' />
        </i>
        <i className='py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
          <SiVisualstudiocode className='w-14 h-14' />
        </i>
        <i className='py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
          <SiPostman className='w-14 h-14' />
        </i>
        <i className='hidden md:block py-4 border-2 border-darkGray rounded px-14 hover:scale-110 ease-in-out duration-300'>
          <SiVercel className='w-14 h-14' />
        </i>
      </div>
    </section>
  )
}

export default ToolStack
