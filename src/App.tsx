import { motion } from "framer-motion";
import { useCursor } from "./hooks/useCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function CustomCursor() {
  const { x, y } = useCursor();
  return (
    <motion.div
      style={{ x, y }}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-indigo-400/60 pointer-events-none z-[9999] mix-blend-screen hidden md:block"
    />
  );
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
