"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaMobileAlt } from "react-icons/fa";
import {
  SiExpo,
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const mobileTechs = [
  {
    icon: FaMobileAlt,
    href: "https://reactnative.dev/",
    label: "React Native",
    color: "text-blue-500",
  },
  {
    icon: SiExpo,
    href: "https://expo.dev/",
    label: "Expo",
    color: "text-gray-900 dark:text-gray-100",
  },
  {
    icon: FaMobileAlt,
    href: "https://developer.apple.com/ios/",
    label: "iOS",
    color: "text-gray-900 dark:text-gray-100",
  },
  {
    icon: SiReact,
    href: "https://react.dev/",
    label: "React",
    color: "text-cyan-500",
  },
];

const webTechs = [
  {
    icon: SiNextdotjs,
    href: "https://nextjs.org/",
    label: "Next.js",
    color: "text-gray-900 dark:text-gray-100",
  },
  {
    icon: SiTypescript,
    href: "https://www.typescriptlang.org/",
    label: "TypeScript",
    color: "text-blue-600",
  },
  {
    icon: SiNodedotjs,
    href: "https://nodejs.org/en",
    label: "Node.js",
    color: "text-green-600",
  },
  {
    icon: SiTailwindcss,
    href: "https://tailwindcss.com/",
    label: "Tailwind CSS",
    color: "text-cyan-500",
  },
];

const backendTechs = [
  {
    icon: SiPostgresql,
    href: "https://www.postgresql.org/",
    label: "PostgreSQL",
    color: "text-blue-700",
  },
  {
    icon: SiGit,
    href: "https://git-scm.com/",
    label: "Git",
    color: "text-orange-600",
  },
];

export default function TechStack() {
  return (
    <section
      className="section-padding flex flex-col items-center justify-center"
      aria-label="Technology stack section"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Mobile First
        </h3>
      </motion.div>

      <div className="my-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:flex lg:gap-6">
        {mobileTechs.map((tech, idx) => (
          <motion.div
            key={tech.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.15, y: -5 }}
          >
            <Link
              href={tech.href}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={`Visit ${tech.label} documentation`}
              className="group flex flex-col items-center justify-center rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-md transition-all duration-300 hover:border-blue-400 hover:shadow-xl dark:border-gray-800 dark:from-gray-900 dark:to-gray-800 dark:hover:border-blue-500"
            >
              <tech.icon
                className={`mb-2 h-12 w-12 transition-colors ${tech.color} group-hover:scale-110`}
              />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                {tech.label}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8 mt-12 text-center"
      >
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
          Web & Backend
        </h3>
      </motion.div>

      <div className="my-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:flex lg:gap-6">
        {webTechs.map((tech, idx) => (
          <motion.div
            key={tech.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.15, y: -5 }}
          >
            <Link
              href={tech.href}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={`Visit ${tech.label} documentation`}
              className="group flex flex-col items-center justify-center rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-md transition-all duration-300 hover:border-purple-400 hover:shadow-xl dark:border-gray-800 dark:from-gray-900 dark:to-gray-800 dark:hover:border-purple-500"
            >
              <tech.icon
                className={`mb-2 h-12 w-12 transition-colors ${tech.color} group-hover:scale-110`}
              />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                {tech.label}
              </span>
            </Link>
          </motion.div>
        ))}
        {backendTechs.map((tech, idx) => (
          <motion.div
            key={tech.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (webTechs.length + idx) * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.15, y: -5 }}
          >
            <Link
              href={tech.href}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={`Visit ${tech.label} documentation`}
              className="group flex flex-col items-center justify-center rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-md transition-all duration-300 hover:border-purple-400 hover:shadow-xl dark:border-gray-800 dark:from-gray-900 dark:to-gray-800 dark:hover:border-purple-500"
            >
              <tech.icon
                className={`mb-2 h-12 w-12 transition-colors ${tech.color} group-hover:scale-110`}
              />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                {tech.label}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
