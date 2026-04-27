export const personal = {
  name: "Nannan Wang",
  email: "wang_nannan@outlook.com",
  phone: "424-465-4488",
  location: "Los Angeles, CA",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  summary:
    "Full-Stack Software Engineer building production React/TypeScript/Next.js apps with Python/FastAPI/Node.js, including SSE streaming interfaces and citation-grounded RAG Q&A.",
};

export const education = {
  school: "University of California, Los Angeles (UCLA)",
  degree: "B.S. in Computer Science",
  gpa: "3.8",
  graduation: "Jun 2027",
};

export const experiences = [
  {
    title: "Software Engineer Intern (Full-Stack)",
    company: "VortexNet",
    location: "Covina, CA",
    period: "Sep 2025 – Mar 2026",
    bullets: [
      "Built a student and early-career job-prep knowledge base using Next.js, React, TypeScript, and Redux Toolkit to process resumes, interview notes, and study documents, enabling source-cited Q&A functionality.",
      "Delivered real-time streaming Q&A with Server-Sent Events, session history, and source deep-linking, reducing time to first token to under 1 second through incremental rendering and concurrency controls.",
      "Enhanced multi-document retrieval quality by integrating metadata filters, query rewrite, and reranking in a FastAPI retrieval service backed by PGVector/Pinecone, increasing top-5 cited-source hit rate by 10% on 150 offline queries.",
      "Reduced unsafe responses by implementing prompt-injection guardrails and retrieval-trace logging, lowering citation mismatch rate by 30% and cutting debug time by 30%.",
      "Operationalized the system for demos with CI checks, structured logs, and latency metrics, supporting 200 documents and 5,000+ indexed chunks.",
    ],
    tags: ["Next.js", "React", "TypeScript", "FastAPI", "PGVector", "Pinecone", "SSE"],
  },
  {
    title: "Software Engineer Intern",
    company: "MetaX",
    location: "Hangzhou, China",
    period: "Jun 2025 – Sep 2025",
    bullets: [
      "Delivered an internal task management platform for a 900-employee GPU enterprise, building workflows in React, TypeScript, and Tailwind and integrating REST APIs with role-based access control.",
      "Standardized UI patterns by creating reusable form and data-table components, reducing duplicated UI logic by 30% and accelerating module delivery across teams.",
      "Improved performance with pagination, memoization, and component splitting, reducing re-renders and achieving p95 table interactions under 200ms on pages with 1,000+ records.",
      "Owned end-to-end delivery as the sole UI engineer, aligning API contracts and GitLab CI workflows, ensuring stable rollouts with regression checks and latency monitoring.",
    ],
    tags: ["React", "TypeScript", "Tailwind", "REST APIs", "GitLab CI"],
  },
  {
    title: "Founding Software Engineer (Web)",
    company: "Clubhouse UCLA",
    location: "Los Angeles, CA",
    period: "Mar 2025 – Jun 2025",
    bullets: [
      "Launched a club discovery and review platform aggregating 1,300+ UCLA clubs, enabling students to assess workload, culture, and inclusivity before joining.",
      "Integrated UCLA's official club data API and built a trusted review pipeline with Google sign-in and email verification, improving review credibility and reducing low-quality submissions.",
      "Built query-state-driven discovery with category/keyword filtering, MongoDB endpoints, and client-side caching, cutting redundant requests by 40% and keeping median search updates under 300ms.",
      "Ran iterative usability testing with 100+ UCLA students, refining key flows and boosting search-to-club-detail click-through by 15%, contributing to strong early adoption at launch.",
    ],
    tags: ["React", "MongoDB", "Node.js", "Google OAuth"],
  },
];

export const projects = [
  {
    title: "FreshFork",
    subtitle: "AI Meal Planning Application",
    period: "Sep 2024 – Dec 2024",
    description:
      "AI-driven meal-planning web app that generates nutrition-aware meal plans and leftover-based recipes, translating user goals into structured prompts for personalized results.",
    bullets: [
      "Developed an AI-driven meal-planning web app that generates nutrition-aware meal plans and leftover-based recipes.",
      "Enhanced perceived performance by optimizing React rendering and decoupling AI image generation, reducing UI blocking and improving key page interactions by 20%.",
    ],
    tags: ["React", "AI", "OpenAI API", "Node.js"],
    link: "#",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "PHP", "Java", "SQL", "HTML5", "CSS3", "C++", "Go", "R"],
  },
  {
    label: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Redux", "Vue.js", "Node.js", "Express", "FastAPI", "Flask", "TailwindCSS"],
  },
  {
    label: "APIs, Data & Storage",
    skills: ["REST", "SSE", "PostgreSQL", "MongoDB", "Redis", "Pinecone", "PGVector"],
  },
  {
    label: "AI / ML",
    skills: ["OpenAI API", "HuggingFace", "LangChain", "RAG", "Embeddings", "NumPy", "Pandas", "Scikit-learn"],
  },
  {
    label: "Cloud, DevOps & Testing",
    skills: ["AWS S3", "EC2", "Azure Lambda", "Docker", "GitHub Actions", "Vercel", "Sentry", "Jest", "Cypress"],
  },
];
