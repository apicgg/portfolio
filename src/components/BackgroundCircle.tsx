"use client";

import { motion } from "framer-motion";

export default function BackgroundCircle() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex items-center justify-center"
      >
        {/* Animated gradient circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-[200px] w-[200px] rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute h-[300px] w-[300px] rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl"
        />

        {/* Static circles */}
        <div className="absolute h-[200px] w-[200px] animate-ping rounded-full border-2 border-blue-500/30" />
        <div className="absolute h-[300px] w-[300px] rounded-full border border-gray-700/30" />
        <div className="absolute h-[500px] w-[500px] rounded-full border border-gray-700/20" />
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-[650px] w-[650px] rounded-full border-2 border-blue-500/20"
        />
      </motion.div>
    </div>
  );
}
