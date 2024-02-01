"use client";

import Image from "next/image";
import avatar from "public/assets/home-right.png";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Intro from "./Intro";
import TechStack from "./TechStack";
import ToolStack from "./ToolStack";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Anurag.",
      "Frontend Lead",
      "React, React Native",
      "Next.js, TypeScript",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <section className="mx-auto max-w-5xl">
      <div className="flex h-screen flex-col items-center justify-center space-y-4 overflow-hidden text-center">
        <BackgroundCircle />
        <figure className="mx-auto h-32 w-32 rounded-full object-cover">
          <Image src={avatar} alt="Anurag's avatar" priority />
        </figure>

        <div>
          <h2 className="p-2 text-sm uppercase tracking-[15px] text-zinc-900 dark:text-gray-400">
            Frontend Consultant
          </h2>
          <h1 className="px-10 text-xl font-semibold md:text-2xl lg:text-3xl">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#339af0" />
          </h1>
        </div>
      </div>
      <Intro />
      <h2 className="mt-10 pt-8 text-center text-2xl font-semibold md:text-3xl">
        <span className="text-[#1C3782] dark:text-[#74C0FC]">
          Language, Library and Frameworks
        </span>
      </h2>
      <TechStack />
      <h2 className="mt-4 pt-6 text-center text-xl font-semibold md:text-3xl">
        Other <span className="text-[#1C3782] dark:text-[#74C0FC]">Tools</span>{" "}
        I use
      </h2>
      <ToolStack />
    </section>
  );
};

export default Hero;
