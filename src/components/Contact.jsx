import { motion } from "framer-motion";

const Contact = () => (
  <section id="contact" className="py-32 text-center bg-black">
    <motion.h2
      className="text-4xl font-bold mb-6 text-cyan-400"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      Get In Touch
    </motion.h2>
    <motion.p
      className="text-gray-400 mb-8 max-w-lg mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      Let’s connect and bring your ideas to life — whether it’s AI, IoT, or full-stack magic.
    </motion.p>
    <a
      href="mailto:akshit6299@outlook.com"
      className="px-8 py-3 border border-cyan-400 rounded-xl text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
    >
      Say Hello 👋
    </a>
  </section>
);

export default Contact;
