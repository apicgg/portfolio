"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function TypewriterHeadline() {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Anurag.",
      "GenAI, Frontend, TypeScript",
      "React, Next.js",
      "React Native, Expo",
      "Tailwind, GraphQL",
      "Node.js, AWS, GCP",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="pt-14">
      <h2 className="p-2 text-sm uppercase tracking-[15px] text-zinc-900 dark:text-gray-400">
        Frontend Architect
      </h2>
      <h1 className="px-10 text-xl font-semibold md:text-2xl lg:text-3xl">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#339af0" />
      </h1>
    </div>
  );
}
