import {
  SiGit,
  SiMongodb,
  SiNextdotjs,
  SiRadixui,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import Link from "next/link";
import { FaMobileAlt } from "react-icons/fa";

const TechStack = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-4">
      <div className="my-6 grid grid-cols-2 gap-5 lg:flex lg:space-x-16">
        <Link
          href="https://react.dev/"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiReact className="gray h-14 w-14" />
        </Link>
        <Link
          href="https://nextjs.org/"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiNextdotjs className="gray h-14 w-14" />
        </Link>
        {/* <Link className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110">
          <SiJavascript
            className={styles.iconStyles}
            color={styles.iconColor}
          />
        </Link> */}
        <Link
          href="https://www.typescriptlang.org/"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiTypescript className="gray h-14 w-14" />
        </Link>
        <Link
          href="https://reactnative.dev/"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <FaMobileAlt className="gray h-14 w-14" />
        </Link>
      </div>

      <div className="my-6 grid grid-cols-2 gap-5 lg:flex lg:space-x-16">
        <Link
          href="https://tailwindcss.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiTailwindcss className="gray h-14 w-14" />
        </Link>
        <Link
          href="https://www.radix-ui.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiRadixui className="gray h-14 w-14" />
        </Link>

        <Link
          href="https://www.mongodb.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiMongodb className="gray h-14 w-14" />
        </Link>
        <Link
          href="https://git-scm.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiGit className="gray h-14 w-14" />
        </Link>
      </div>
    </section>
  );
};

export default TechStack;
