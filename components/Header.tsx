import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed w-full backdrop-blur-md">
      <div className="flex items-center justify-between max-w-5xl mx-auto p-2">
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
            className="text-2xl lg:text-3xl font-normal lg:font-medium pl-2"
            href="/"
            aria-label="Anurag Pramanik"
          >
            AP.
          </Link>
        </motion.div>

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
          <li className="flex items-center justify-between font-medium text-sm md:text-base lg:text-xl lg:py-2 lg:px-4 lg:rounded-lg lg:hover:scale-110 transition-all duration-300">
            <Link
              href="https://apicgg.github.io/digital-resume/"
              className="hidden lg:block coolButton"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Anurag Pramanik resume website"
            >
              Resume
            </Link>
            <Link
              href="https://apicgg.github.io/digital-resume/"
              className="block lg:hidden coolButton"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Anurag Pramanik resume website"
            >
              Resume
            </Link>
          </li>
        </motion.ul>
      </div>
    </header>
  );
};

export default Header;
