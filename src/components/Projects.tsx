import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "../data/resume";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

function TiltCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative bg-slate-800/60 border border-slate-700 rounded-2xl p-6 cursor-default h-full"
      >
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 rounded-2xl bg-linear-to-br from-indigo-500/10 via-violet-500/5 to-transparent pointer-events-none"
        />
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 rounded-2xl ring-1 ring-indigo-500/40 pointer-events-none"
        />

        <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-white font-bold text-xl">{project.title}</h3>
              <p className="text-indigo-400 text-sm font-medium">{project.subtitle}</p>
            </div>
            <div className="flex gap-2 ml-4">
              <motion.a
                href={project.link}
                whileHover={{ scale: 1.15, color: "#a5b4fc" }}
                className="text-slate-500 hover:text-indigo-400 transition-colors"
              >
                <GithubIcon size={18} className="text-current" />
              </motion.a>
              <motion.a
                href={project.link}
                whileHover={{ scale: 1.15, color: "#a5b4fc" }}
                className="text-slate-500 hover:text-indigo-400 transition-colors"
              >
                <ExternalLink size={18} />
              </motion.a>
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

          <ul className="space-y-1.5 mb-4">
            {project.bullets.map((b, i) => (
              <li key={i} className="text-slate-500 text-xs flex gap-2">
                <span className="text-indigo-500 shrink-0 mt-0.5">▸</span>
                {b}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0.7, scale: 1 }}
                transition={{ delay: hovered ? i * 0.04 : 0 }}
                className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">Projects</p>
          <h2 className="text-4xl font-bold text-white">What I've Built</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <TiltCard key={p.title} project={p} index={i} />
          ))}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: projects.length * 0.12 }}
            className="bg-slate-800/30 border border-dashed border-slate-700 rounded-2xl p-6 flex items-center justify-center text-slate-600 text-sm"
          >
            More coming soon...
          </motion.div>
        </div>
      </div>
    </section>
  );
}
