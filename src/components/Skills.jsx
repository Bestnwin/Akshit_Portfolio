import { motion } from "framer-motion";
import skills from "../data/skills";

const Skills = () => (
  <section id="skills" className="py-24 bg-black/60 text-center">
    <h2 className="text-4xl font-bold mb-10 text-cyan-400">Skills</h2>
    <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          className="px-6 py-3 border border-cyan-400/40 rounded-xl hover:border-cyan-400 text-gray-300 hover:text-white bg-zinc-900/50 hover:bg-cyan-400/20 transition"
          whileHover={{ scale: 1.05 }}
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
