import { motion } from "framer-motion";
import { personal, education } from "../data/resume";
import { MapPin, GraduationCap, Star } from "lucide-react";

const stats = [
  { label: "GPA", value: education.gpa },
  { label: "Internships", value: "3" },
  { label: "Projects", value: "4+" },
  { label: "Grad Year", value: "'27" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">About</p>
          <h2 className="text-4xl font-bold text-white">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm a <span className="text-indigo-300 font-semibold">Computer Science student at UCLA</span> with a passion for building fast, polished, production-ready web applications. I love the intersection of great engineering and great user experience.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              From real-time SSE streaming interfaces to citation-grounded RAG systems, I thrive on tackling hard technical problems with clean, maintainable code. I've shipped end-to-end across frontend and backend — from React component systems to FastAPI retrieval services.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin size={16} className="text-indigo-400 shrink-0" />
                {personal.location}
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <GraduationCap size={16} className="text-indigo-400 shrink-0" />
                {education.degree} · {education.school}
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Star size={16} className="text-indigo-400 shrink-0" />
                GPA: {education.gpa} · Expected {education.graduation}
              </div>
            </div>
          </motion.div>

          {/* Right — stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(99,102,241,0.5)" }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center transition-colors"
              >
                <div className="text-4xl font-black text-white mb-1">{s.value}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
