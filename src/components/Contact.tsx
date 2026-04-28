import { motion } from "framer-motion";
import { personal } from "../data/resume";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const socials = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}`, isLucide: true },
  { icon: GithubIcon, label: "GitHub", value: "github.com/nannanwang", href: personal.github, isLucide: false },
  { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/nannanwang", href: personal.linkedin, isLucide: false },
  { icon: MapPin, label: "Location", value: personal.location, href: null, isLucide: true },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">Contact</p>
          <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-slate-400 text-lg">
            I'm currently open to internships and new opportunities. Whether you have a question, an idea, or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {socials.map((s, i) => {
            const Icon = s.icon;
            const card = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={s.href ? { scale: 1.03, borderColor: "rgba(99,102,241,0.5)" } : {}}
                className={`flex items-center gap-4 p-5 rounded-2xl bg-slate-800/50 border border-slate-700 transition-colors ${s.href ? "cursor-pointer" : "cursor-default"}`}
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-indigo-400" />
                </div>
                <div>
                  <div className="text-slate-500 text-xs mb-0.5">{s.label}</div>
                  <div className="text-white text-sm font-medium">{s.value}</div>
                </div>
              </motion.div>
            );

            return s.href ? (
              <a key={s.label} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer">
                {card}
              </a>
            ) : (
              <div key={s.label}>{card}</div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href={`mailto:${personal.email}`}
            whileHover={{ scale: 1.05, boxShadow: "0 0 32px rgba(99,102,241,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-colors"
          >
            <Mail size={18} /> Say Hello
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
