import Image from 'next/image'
import myImg from 'public/assets/my-avatar.svg'

const Intro = () => {
  return (
    <section className='max-w-5xl mx-auto flex items-center justify-between flex-col-reverse lg:flex-row md:gap-12 p-4 md:p-8'>
      <div className='px-4 md:px-0'>
        <h1 className='text-2xl md:text-4xl font-medium md:font-semibold text-center py-2 pt-6'>
          LET ME <span className='text-[#74C0FC]'>INTRODUCE</span> MYSELF
        </h1>
        <p className='text-base md:text-lg '>
          I have over 4 years of experience as a Software Engineer. I fell in
          love with programming especially with web development after my
          graduation.
          <br />
          <br />I am fluent in
          <i>
            <b className='text-[#74C0FC]'> HTML, CSS and JavaScript. </b>
          </i>
          <br />
          <br />
          My field of interest is to build full-stack web applications. And also
          in areas related to modern web technologies like &nbsp;
          <i>
            <b className='text-[#74C0FC]'>Next.js, Deno etc. </b>
          </i>
        </p>
      </div>

      <section className='flex items-center justify-center'>
        <Image src={myImg} alt='My Avatar' style={{ width: '250px' }} />
      </section>
    </section>
  )
}

export default Intro
