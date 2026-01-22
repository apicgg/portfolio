"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaMobileAlt } from "react-icons/fa";

import ThemeToggle from "./ThemeToggleButton";

export default function Header() {
  return (
    <header className="fixed z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-lg dark:border-gray-800/50 dark:bg-gray-900/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
          }}
        >
          <Link
            className="group flex items-center gap-2 pl-2 text-2xl font-bold transition-colors hover:text-blue-600 dark:hover:text-blue-400 lg:text-3xl"
            href="/"
            aria-label="Anurag Pramanik"
          >
            <span className="gradient-text">AP.</span>
            <FaMobileAlt className="h-5 w-5 text-blue-600 opacity-0 transition-all group-hover:opacity-100 dark:text-blue-400" />
          </Link>
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
          }}
          className="flex items-center gap-4 lg:gap-10"
        >
          <nav className="hidden gap-6 md:flex">
            <Link
              href="#projects"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Projects
            </Link>
            <Link
              href="https://github.com/apicgg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              GitHub
            </Link>
          </nav>
          <div className="hidden">
            <ThemeToggle />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
