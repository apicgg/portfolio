import { motion } from "framer-motion";

const BackgroundCircle = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute mt-52 h-[200px] w-[200px] animate-ping rounded-full border border-slate-400 dark:border-[#8a8a8a]" />
      <div className="absolute mt-52 h-[300px] w-[300px] rounded-full border border-slate-400 dark:border-[#333]" />
      <div className="absolute mt-52 h-[500px] w-[500px] rounded-full border border-slate-400 dark:border-[#333]" />
      <div className="absolute mt-52 h-[650px] w-[650px] animate-pulse rounded-full border border-slate-400 opacity-20 dark:border-[#F9C34D]" />
    </motion.div>
  );
};

export default BackgroundCircle;
