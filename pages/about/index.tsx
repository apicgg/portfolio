import TechStack from 'components/TechStack'
import ToolStack from 'components/ToolStack'
import React from 'react'

const About = () => {
  return (
    <section className='h-screen'>
      <h2 className='text-2xl md:text-3xl text-center font-semibold my-4'>
        <span className='text-[#74C0FC]'>Language, Library and Frameworks</span>
      </h2>
      <TechStack />
      <h2 className='text-xl md:text-3xl text-center font-semibold mt-4 pt-6 text-fontColor'>
        Other <span className='text-[#74C0FC]'>Tools</span> I use
      </h2>
      <ToolStack />
    </section>
  )
}

export default About
