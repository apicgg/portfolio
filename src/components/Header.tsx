"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import ThemeToggle from "./ThemeToggleButton";

export default function Header() {
  return (
    <header className="fixed z-20 w-full backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-2">
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
            duration: 1.5,
          }}
        >
          <Link
            className="pl-2 text-2xl font-normal lg:text-3xl lg:font-medium"
            href="/"
            aria-label="Anurag Pramanik"
          >
            AP.
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
            duration: 1.5,
          }}
          className="flex items-center gap-2 lg:gap-10"
        >
          <ThemeToggle />
        </motion.div>
      </div>
    </header>
  );
}
