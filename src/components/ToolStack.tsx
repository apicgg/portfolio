"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  SiAmazonaws,
  SiExpo,
  SiFirebase,
  SiGithub,
  SiGooglecloud,
  SiVisualstudiocode,
} from "react-icons/si";

const tools = [
  {
    icon: SiFirebase,
    href: "https://firebase.google.com/",
    label: "Firebase",
    color: "text-orange-500",
  },
  {
    icon: SiExpo,
    href: "https://expo.dev/",
    label: "Expo",
    color: "text-gray-900 dark:text-gray-100",
  },
  {
    icon: SiAmazonaws,
    href: "https://aws.amazon.com/",
    label: "AWS",
    color: "text-orange-600",
  },
  {
    icon: SiGooglecloud,
    href: "https://cloud.google.com/",
    label: "GCP",
    color: "text-blue-500",
  },
  {
    icon: SiVisualstudiocode,
    href: "https://code.visualstudio.com/",
    label: "VS Code",
    color: "text-blue-600",
  },
  {
    icon: SiGithub,
    href: "https://github.com/",
    label: "GitHub",
    color: "text-gray-900 dark:text-gray-100",
  },
];

export default function ToolStack() {
  return (
    <section
      className="section-padding flex flex-col items-center justify-center"
      aria-label="Tool stack section with various developer tools and services"
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {tools.map((tool, idx) => (
          <motion.div
            key={tool.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.15, y: -5 }}
          >
            <Link
              href={tool.href}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={`Visit ${tool.label} website`}
              className="group flex flex-col items-center justify-center rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-md transition-all duration-300 hover:border-gray-400 hover:shadow-xl dark:border-gray-800 dark:from-gray-900 dark:to-gray-800 dark:hover:border-gray-600"
            >
              <tool.icon
                className={`mb-2 h-12 w-12 transition-colors ${tool.color} group-hover:scale-110`}
              />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                {tool.label}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
