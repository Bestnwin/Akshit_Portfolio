import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-32 bg-gradient-to-b from-black to-zinc-900">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-800/50 p-8 rounded-2xl backdrop-blur-md shadow-lg border border-gray-800"
      >
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I'm a Computer Science student at VIT Vellore with a passion for building
          autonomous systems, IoT-based solutions, and AI-integrated dashboards.
          My work blends innovation and logic, transforming real-world problems
          into interactive digital solutions.
        </p>
      </motion.div>

      <motion.div
        className="h-64 md:h-80 bg-gradient-to-tr from-cyan-400/20 to-transparent rounded-2xl border border-cyan-400/30"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  </section>
);

export default About;
