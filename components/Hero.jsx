"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-white bg-[url(/assets/hero-bg.png)] bg-no-repeat bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold max-w-3xl mx-auto leading-normal"
        >
          Hi, I am <span className="text-blue-400">Siddhi Rane</span> Passionate Software Developer
        </motion.h1>
        <p className="text-xl mt-4 text-gray-300">
          Software Developer | React.js | Next.js | SvelteKit | AdTech
        </p>
      </div>
    </section>
  );
}
