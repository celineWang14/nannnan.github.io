import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { personal, education } from "../data/resume";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const INITIALS = personal.name
  .split(" ")
  .map((n) => n[0])
  .join("");

function FloatingBlob() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 30);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 30);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div style={{ x, y }} className="relative w-48 h-48 mx-auto mb-8">
      {/* Pulsing glow ring */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-indigo-500/30 blur-xl"
      />
      {/* Avatar circle */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-48 h-48 rounded-full bg-gradient-to-br from-indigo-500 via-violet-600 to-purple-700 flex items-center justify-center shadow-2xl shadow-indigo-500/40"
      >
        <span className="text-5xl font-black text-white tracking-tight">{INITIALS}</span>
      </motion.div>
    </motion.div>
  );
}

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.5, ease: "easeOut" },
  }),
};

function AnimatedName() {
  const chars = personal.name.split("");
  return (
    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4 flex flex-wrap justify-center gap-x-0">
      {chars.map((char, i) =>
        char === " " ? (
          <span key={i} className="w-4 md:w-6" />
        ) : (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="inline-block"
            whileHover={{ y: -6, color: "#a5b4fc", transition: { duration: 0.15 } }}
          >
            {char}
          </motion.span>
        )
      )}
    </h1>
  );
}

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
});

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <FloatingBlob />

        <AnimatedName />

        <motion.p
          variants={fadeUp(0.7)}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-indigo-300 font-semibold mb-3"
        >
          Full-Stack Software Engineer
        </motion.p>

        <motion.p
          variants={fadeUp(0.9)}
          initial="hidden"
          animate="visible"
          className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-2"
        >
          {personal.summary}
        </motion.p>

        <motion.p
          variants={fadeUp(1.0)}
          initial="hidden"
          animate="visible"
          className="text-slate-500 text-sm mb-8"
        >
          {education.school} · {education.degree} · GPA {education.gpa}
        </motion.p>

        <motion.div
          variants={fadeUp(1.1)}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-3 justify-center"
        >
          <motion.a
            href={`mailto:${personal.email}`}
            whileHover={{ scale: 1.06, boxShadow: "0 0 24px rgba(99,102,241,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors"
          >
            <Mail size={15} /> Contact Me
          </motion.a>
          <motion.a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-600 hover:border-indigo-500 text-slate-300 hover:text-white font-medium text-sm transition-colors"
          >
            <Github size={15} /> GitHub
          </motion.a>
          <motion.a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-600 hover:border-indigo-500 text-slate-300 hover:text-white font-medium text-sm transition-colors"
          >
            <Linkedin size={15} /> LinkedIn
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 rounded-full bg-indigo-400" />
        </motion.div>
        <span className="text-slate-600 text-xs">scroll</span>
      </motion.div>
    </section>
  );
}
