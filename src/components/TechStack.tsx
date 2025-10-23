import Link from "next/link";
import { FaMobileAlt } from "react-icons/fa";
import {
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function TechStack() {
  return (
    <section
      className="flex flex-col items-center justify-center space-y-4"
      aria-label="Technology stack section"
    >
      <div className="my-6 grid grid-cols-2 gap-5 lg:flex lg:space-x-16">
        <Link
          href="https://react.dev/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Visit the official React documentation website"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiReact className="gray h-14 w-14" />
        </Link>

        <Link
          href="https://nextjs.org/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Visit the official Next.js documentation website"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiNextdotjs className="gray h-14 w-14" />
        </Link>

        <Link
          href="https://reactnative.dev/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Visit the official React Native documentation website"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <FaMobileAlt className="gray h-14 w-14" />
        </Link>

        <Link
          href="https://www.typescriptlang.org/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Visit the official TypeScript documentation website"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiTypescript className="gray h-14 w-14" />
        </Link>
      </div>

      <div className="my-6 grid grid-cols-2 gap-5 lg:flex lg:space-x-16">
        <Link
          href="https://nodejs.org/en"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Visit the official Node.js documentation website"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiNodedotjs className="gray h-14 w-14" />
        </Link>

        <Link
          href="https://tailwindcss.com/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Visit the official Tailwind CSS documentation website"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiTailwindcss className="gray h-14 w-14" />
        </Link>

        <Link
          href="https://www.postgresql.org/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Visit the official PostgreSQL documentation website"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiPostgresql className="gray h-14 w-14" />
        </Link>

        <Link
          href="https://git-scm.com/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Visit the official Git documentation website"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiGit className="gray h-14 w-14" />
        </Link>
      </div>
    </section>
  );
}
