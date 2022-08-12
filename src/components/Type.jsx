import TypeWriter from 'typewriter-effect'

const Type = () => {
  return (
    <TypeWriter
      options={{
        strings: ['Developer', 'Open Source', 'MERN Stack'],
        autoStart: true,
        loop: true,
        delay: 60,
        deleteSpeed: 30,
      }}
    />
  )
}

export default Type
