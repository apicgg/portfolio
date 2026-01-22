"use client";

import { motion } from "framer-motion";
import { FaMobileAlt } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function TypewriterHeadline() {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "Web & Mobile Apps",
      "React & React Native",
      "Cross-Platform Solutions",
      "Next.js & Expo",
      "Building Digital Experiences",
    ],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-14"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-6 flex justify-center"
      >
        <div className="rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 backdrop-blur-sm">
          <FaMobileAlt className="h-12 w-12 text-blue-400" />
        </div>
      </motion.div>
      <h2 className="mb-4 p-2 text-sm uppercase tracking-[15px] text-gray-400">
        Frontend Web & Mobile Developer
      </h2>
      <h1 className="px-4 text-2xl font-bold md:px-10 md:text-3xl lg:text-5xl">
        <span className="gradient-text mr-3">{text}</span>
        <Cursor cursorColor="#3b82f6" />
      </h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-6 px-4 text-base text-gray-400 md:text-lg"
      >
        Crafting beautiful, performant web and mobile experiences
      </motion.p>
    </motion.div>
  );
}
