import { motion } from "framer-motion";
import projects from "../data/projects";

const Projects = () => (
  <section id="projects" className="py-28 bg-gradient-to-t from-black to-zinc-900">
    <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Projects</h2>
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          className="p-6 rounded-2xl bg-zinc-900/60 border border-gray-800 hover:border-cyan-400/40 transition shadow-lg hover:shadow-cyan-400/10"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-cyan-300">{p.title}</h3>
          <p className="text-gray-400">{p.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
