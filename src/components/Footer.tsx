import { motion } from "framer-motion";
import { personal } from "../data/resume";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} {personal.name}. Built with React + Vite + Framer Motion.
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: personal.github },
            { icon: Linkedin, href: personal.linkedin },
            { icon: Mail, href: `mailto:${personal.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#a5b4fc" }}
              whileTap={{ scale: 0.9 }}
              className="text-slate-600 hover:text-indigo-400 transition-colors"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
