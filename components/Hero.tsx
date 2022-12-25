import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "components/BackgroundCircle";
import avatar from "public/assets/home-right.png";
import Intro from "./Intro";

// TODO: Add scroll snap
const Hero = () => {
  const [text] = useTypewriter({
    words: ["Hi, I'm Anurag.", "guy-who-loves-coffee.tsx", "<AndCodes />"],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <>
      <div className="flex flex-col h-screen space-y-4 items-center justify-center text-center overflow-hidden">
        <BackgroundCircle />
        <div className="rounded-full h-32 w-32 mx-auto object-cover">
          <Image src={avatar} alt="Anurag avatar" />
        </div>

        <div>
          <h2 className="text-sm uppercase text-gray-400 p-2 tracking-[15px]">
            Software Enginner
          </h2>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#339af0" />
          </h1>
        </div>
      </div>
      <Intro />
    </>
  );
};

export default Hero;
