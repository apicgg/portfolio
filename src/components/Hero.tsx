"use client";

import { motion } from "framer-motion";

import BackgroundCircle from "./BackgroundCircle";
import Intro from "./Intro";
import Projects from "./Projects";
import TechStack from "./TechStack";
import ToolStack from "./ToolStack";
import TypewriterHeadline from "./TypewriterHeadline";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="flex min-h-screen flex-col items-center justify-center space-y-4 overflow-hidden text-center">
        <BackgroundCircle />
        <TypewriterHeadline />
      </div>
      <Intro />
      <Projects />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 pt-8 text-center"
      >
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <p className="mt-2 text-gray-400">
          Technologies I use to build amazing mobile and web experiences
        </p>
      </motion.div>
      <TechStack />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 pt-8 text-center"
      >
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          Development <span className="gradient-text">Tools</span>
        </h2>
        <p className="mt-2 text-gray-400">
          Tools and services that power my development workflow
        </p>
      </motion.div>
      <ToolStack />
    </section>
  );
}
