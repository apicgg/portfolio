"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/apicgg",
      label: "GitHub",
      color: "hover:text-gray-100",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/anurag-p-345843125/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: FaXTwitter,
      href: "https://twitter.com/anuragp_dev",
      label: "Twitter",
      color: "hover:text-gray-100",
    },
  ];

  return (
    <footer className="border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <div className="grid grid-rows-3 items-center justify-center gap-y-6 md:grid-cols-3 md:grid-rows-none md:justify-between">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-semibold text-gray-300"
          >
            Built with ❤️ by Anurag
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="place-self-center text-sm font-medium text-gray-400"
          >
            Copyright © {currentYear} AP. All rights reserved.
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-8"
          >
            {socialLinks.map((social, idx) => (
              <motion.li
                key={social.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4 + idx * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Anurag's ${social.label}`}
                  prefetch={true}
                  className={`text-gray-400 transition-colors ${social.color}`}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </footer>
  );
}
