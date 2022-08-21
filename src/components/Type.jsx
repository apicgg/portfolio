import TypeWriter from 'typewriter-effect'

const Type = () => {
  return (
    <TypeWriter
      options={{
        strings: ['Web Developer', 'Full Stack', 'Open Source Contributor'],
        autoStart: true,
        loop: true,
        delay: 40,
        deleteSpeed: 30,
        pauseFor: 1500,
      }}
    />
  )
}

export default Type
