import TypeWriter from 'typewriter-effect'

const Type = () => {
  return (
    <TypeWriter
      options={{
        strings: ['Web Developer', 'Full Stack', 'MERN Stack', 'Open Source'],
        autoStart: true,
        loop: true,
        delay: 40,
        deleteSpeed: 30,
      }}
    />
  )
}

export default Type
