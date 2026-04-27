import { motion } from "framer-motion";
import { skillGroups } from "../data/resume";

const GROUP_COLORS: Record<string, { pill: string; dot: string }> = {
  "Languages":              { pill: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20", dot: "bg-indigo-400" },
  "Frameworks & Libraries": { pill: "bg-violet-500/10 text-violet-300 border-violet-500/20", dot: "bg-violet-400" },
  "APIs, Data & Storage":   { pill: "bg-purple-500/10 text-purple-300 border-purple-500/20", dot: "bg-purple-400" },
  "AI / ML":                { pill: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20", dot: "bg-fuchsia-400" },
  "Cloud, DevOps & Testing":{ pill: "bg-sky-500/10 text-sky-300 border-sky-500/20", dot: "bg-sky-400" },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">Skills</p>
          <h2 className="text-4xl font-bold text-white">My Toolkit</h2>
        </motion.div>

        <div className="space-y-10">
          {skillGroups.map((group, gi) => {
            const colors = GROUP_COLORS[group.label] ?? GROUP_COLORS["Languages"];
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: gi * 0.08 }}
              >
                {/* Group header with animated underline */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                  <motion.h3
                    className="text-white font-semibold text-sm uppercase tracking-widest relative"
                  >
                    {group.label}
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: gi * 0.08 + 0.2, ease: "easeOut" }}
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-current opacity-20 origin-left"
                    />
                  </motion.h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.75, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: gi * 0.06 + si * 0.04,
                        duration: 0.35,
                        type: "spring",
                        stiffness: 300,
                        damping: 22,
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border cursor-default ${colors.pill}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
