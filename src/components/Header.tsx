"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggleButton";

const Header = () => {
  const path = usePathname();

  const isBlogPath = path.includes("blog");

  return (
    <header className="fixed z-20 w-full backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-2">
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

        <div className="flex items-center justify-center gap-5">
          <motion.ul
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
          </motion.ul>
          <motion.ul
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
            {isBlogPath ? (
              <Link href="/" prefetch={true} className="coolButton">
                Home
              </Link>
            ) : (
              <Link href="/blog" prefetch={true} className="coolButton">
                Blog
              </Link>
            )}
          </motion.ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
