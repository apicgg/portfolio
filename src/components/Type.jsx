import TypeWriter from 'typewriter-effect'

const Type = () => {
  return (
    <TypeWriter
      options={{
        strings: [
          'Developer',
          'Open Source',
          'MERN Stack',
          'Full Stack Engineer',
        ],
        autoStart: true,
        loop: true,
        delay: 40,
        deleteSpeed: 30,
      }}
    />
  )
}

export default Type
