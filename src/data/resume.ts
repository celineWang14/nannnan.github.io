export const personal = {
  name: "Nannan Wang",
  email: "wang_nannan@outlook.com",
  phone: "424-465-4488",
  location: "Los Angeles, CA",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  summary:
    "Software Engineer who builds high-performance, data-intensive systems end-to-end in small teams with short production cycles, from a data platform supporting $400M+ in annual capital planning to NLP retrieval services with measured, statistically evaluated quality gains.",
};

export const education = {
  school: "University of California, Los Angeles (UCLA)",
  degree: "B.S. in Computer Science",
  gpa: "3.8",
  graduation: "Jun 2027",
};

export const experiences = [
  {
    title: "Forward Deployed Software Engineer",
    company: "Healthpeak Properties",
    location: "Irvine, CA",
    period: "Jun 2026 – Sep 2026",
    bullets: [
      "Built and shipped end-to-end a capital planning data platform used by 500+ users at a publicly traded REIT as the sole engineer in a 6-person embedded team, analyzing spend schedules across 2,000+ items and $400M+ in annual capital.",
      "Designed the system architecture and role-specific workflows with React, TypeScript, and Palantir Foundry OSDK, supporting bulk import, multi-stage approvals, and spend analytics that replaced a fragmented Yardi, Excel, and email process.",
      "Moved from stakeholder interviews to a working demo in 3 days and to production in 2 weeks through daily iteration with capital asset managers; the platform was adopted for future AOP planning cycles.",
      "Kept the production system resilient by triaging incidents, resolving race conditions and asynchronous state-synchronization defects, and instrumenting PostHog analytics to drive data-informed iteration.",
      "Built a second anomaly-detection platform over 10,000+ historical invoices across 704+ properties, modeling commodity-level usage and multi-year consumption trends; delivered a working demo in 1 week.",
      "Engineered an automated flagging engine that detects billing gaps, abnormal billing periods, cost and spend deviations, and threshold violations with explainable alerts and resolution tracking, shifting manual invoice review to exception-based workflows.",
    ],
    tags: ["React", "TypeScript", "Palantir Foundry", "OSDK", "PostHog"],
  },
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
    title: "Clubhouse UCLA",
    subtitle: "Club Discovery & Review Platform",
    period: "Mar 2025 – Jun 2025",
    description:
      "Discovery and review platform for 1,300+ UCLA clubs with authenticated, email-verified reviews, helping students assess workload, culture, and inclusivity before joining.",
    bullets: [
      "Integrated UCLA's official club data API and built a trusted review pipeline with Google sign-in and email verification.",
      "Built query-state-driven discovery with category/keyword filtering, MongoDB endpoints, and client-side caching, cutting redundant requests by 40%.",
      "Ran iterative usability testing with 100+ students, boosting search-to-detail click-through by 15%.",
    ],
    tags: ["React", "MongoDB", "Node.js", "Google OAuth"],
    link: "https://www.clubhouseucla.com/",
  },
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
    skills: ["React", "Next.js", "Redux", "Vue.js", "Node.js", "Express", "FastAPI", "Flask", "Palantir Foundry", "TailwindCSS"],
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
