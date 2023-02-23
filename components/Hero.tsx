import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from 'components/BackgroundCircle';
import avatar from 'public/assets/home-right.png';
import Intro from './Intro';
import TechStack from './TechStack';
import ToolStack from './ToolStack';

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Hi, I'm Anurag.", 'React', 'Next.js', 'MERN Stack'],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <>
      <div className="flex flex-col h-screen space-y-4 items-center justify-center text-center overflow-hidden">
        <BackgroundCircle />
        <div className="rounded-full h-32 w-32 mx-auto object-cover">
          <Image src={avatar} alt="Anurag avatar" priority />
        </div>

        <div>
          <h2 className="text-sm uppercase text-gray-400 p-2 tracking-[15px]">
            Software Engineer
          </h2>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#339af0" />
          </h1>
        </div>
      </div>
      <Intro />
      <h2 className="text-2xl md:text-3xl text-center font-semibold mt-10 pt-8">
        <span className="text-[#74C0FC]">Language, Library and Frameworks</span>
      </h2>
      <TechStack />
      <h2 className="text-xl md:text-3xl text-center font-semibold mt-4 pt-6 text-fontColor">
        Other <span className="text-[#74C0FC]">Tools</span> I use
      </h2>
      <ToolStack />
    </>
  );
};

export default Hero;
