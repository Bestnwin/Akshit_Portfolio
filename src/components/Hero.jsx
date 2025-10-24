import { motion } from "framer-motion";

const Hero = () => (
  <section
    id="home"
    className="h-screen flex flex-col justify-center items-center relative overflow-hidden text-center"
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
    <motion.h1
      className="text-5xl md:text-7xl font-extrabold mb-6 z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Hey, I’m <span className="text-cyan-400">Akshit Sharma</span>
    </motion.h1>
    <motion.p
      className="text-gray-400 text-lg md:max-w-2xl px-6 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      A passionate developer merging software, hardware, and AI to create smart, interactive systems.
    </motion.p>
    <motion.a
      href="#projects"
      className="mt-10 px-8 py-3 rounded-xl border border-cyan-400 text-cyan-400 font-medium hover:bg-cyan-400 hover:text-black transition z-10"
      whileHover={{ scale: 1.1 }}
    >
      View My Work
    </motion.a>
  </section>
);

export default Hero;
