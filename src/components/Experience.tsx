import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "../data/resume";
import { Briefcase, MapPin } from "lucide-react";

function TimelineCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-start gap-8 md:gap-0">
      {/* Left side */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}
      >
        <motion.div
          whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(99,102,241,0.15)" }}
          className="bg-slate-800/60 border border-slate-700 hover:border-indigo-500/50 rounded-2xl p-6 transition-colors"
        >
          <div className={`flex items-center gap-2 mb-1 text-indigo-400 text-xs font-semibold uppercase tracking-wider ${isLeft ? "md:justify-end" : ""}`}>
            <Briefcase size={12} />
            {exp.period}
          </div>
          <h3 className="text-white font-bold text-lg leading-tight">{exp.title}</h3>
          <div className={`flex items-center gap-1.5 text-slate-400 text-sm mt-1 mb-4 ${isLeft ? "md:justify-end" : ""}`}>
            <MapPin size={12} />
            {exp.company} · {exp.location}
          </div>

          <ul className={`space-y-2 ${isLeft ? "md:text-left" : ""}`}>
            {exp.bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.05 }}
                className="text-slate-400 text-sm leading-relaxed flex gap-2"
              >
                <span className="text-indigo-500 mt-1.5 shrink-0">▸</span>
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>

          <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? "md:justify-end" : ""}`}>
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Timeline dot — hidden on mobile */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
          className="w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 z-10"
        />
      </div>
    </div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-28 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">Experience</p>
          <h2 className="text-4xl font-bold text-white">Where I've Worked</h2>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Animated vertical line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-800">
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent"
            />
          </div>

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <TimelineCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
