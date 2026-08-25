export const profile = {
  name: "Anurag Chugh",
  title: "Backend-Focused Software Engineer",
  email: "nrgchugh@gmail.com",
  phone: "+91 7696090258",
  location: "Bengaluru, Karnataka",
  linkedin: "https://www.linkedin.com/in/AnuragChugh404",
  resume: "https://drive.google.com/file/d/1XXnj2KoGw4kqHwv5c5qZ9znUGNZkd4VR/view?usp=sharing",
  github: "https://github.com/Ukriyte",
  leetcode: "https://leetcode.com/u/nrgchugh/",
  summary: "Backend-focused software engineer with hands-on experience in SQL performance optimization, ETL pipelines, and legacy system modernization. Strong in building reliable backend services, scalable REST APIs, and shipping production improvements using JavaScript and TypeScript. Experienced with high-volume data workloads, debugging distributed systems, and end-to-end project ownership.",
};

export const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "SQL", "C/C++"],
  backend: ["Node.js", "Express", "REST APIs", "Authentication", "Rate Limiting"],
  databases: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
  frontend: ["React", "HTML", "CSS", "Tailwind", "UI Frameworks"],
  tools: ["SSMS", "Query Store", "Azure DevOps", "Git", "GitHub", "Postman", "NGINX"],
  concepts: ["System Design (HLD/LLD)", "Data Structures", "Algorithms", "OOP", "SQL Tuning"],
};

export type AchievementMetric =
  | { before: number; after: number; unit: string; type: string }
  | { improvement: number; unit: string; type: string };

export type ExperienceAchievement = {
  text: string;
  metrics?: AchievementMetric;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: ExperienceAchievement[];
  techStack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Osfin.ai",
    role: "Software Development Engineer I",
    location: "Bengaluru, Karnataka",
    period: "February 2026 - Present",
    achievements: [
      {
        text: "Developed dispute and chargeback lifecycle workflows across UPI, IMPS, and AEPS, covering state transitions, actor permissions, turnaround-time rules, and failure handling.",
      },
      {
        text: "Improved concurrency safety for approval and batch workflows through pre-validation, database uniqueness constraints, and controlled exception handling to prevent duplicate processing.",
      },
      {
        text: "Strengthened batch reliability with retry mechanisms, recovery of stuck execution states, configurable health probes, and backward-compatible Liquibase migrations.",
      },
      {
        text: "Built and tested IDFC Bank CBS Hold API integrations for enquiry, placement, recovery, and removal, covering validation, failure handling, and reconciliation workflows.",
      },
    ],
    techStack: ["Java", "Spring Boot", "Spring Batch", "REST APIs", "Oracle", "Liquibase", "JUnit"],
  },
  {
    company: "E-Ring Inc.",
    role: "Software Engineer I",
    location: "Hyderabad, Telangana",
    period: "July 2025 - November 2025",
    achievements: [
      {
        text: "Re-architected a county-wide ETL workflow using BCP-driven pipelines, reducing processing time for 1M+ records from 8 hours to 45 minutes.",
        metrics: { before: 8 * 60, after: 45, unit: "min", type: "performance" },
      },
      {
        text: "Developed T-SQL monitoring and reconciliation scripts for billing workflows, reducing manual validation effort and improving audit readiness.",
      },
    ],
    techStack: ["SQL Server", "T-SQL", "BCP", "ETL", "SSMS", "Azure DevOps"],
  },
];

export const projects = [
  {
    id: "pokernight",
    name: "PokerNight",
    subtitle: "Real-Time Multiplayer Poker",
    description: "Server-authoritative poker platform with real-time gameplay, reconnect recovery, and independently testable backend layers.",
    github: "https://github.com/Ukriyte/PokerNight",
    techStack: ["Java 21", "Spring Boot", "WebSockets/STOMP", "JUnit", "REST APIs"],
    architecture: {
      layers: [
        { name: "Game Engine", components: ["Betting Rounds", "Side Pots", "Showdown Evaluator"] },
        { name: "Application", components: ["Command Validation", "Idempotency", "Room State"] },
        { name: "Transport", components: ["WebSockets", "STOMP Topics", "Reconnect Recovery"] },
        { name: "Automation", components: ["Bot Lifecycle", "Decision Adapter", "Turn Pacing"] },
      ],
    },
    features: [
      "Server-authoritative engine with forced blinds, all-ins, side pots, dealer rotation, and chip-conservation invariants.",
      "Per-room command serialization and idempotent command handling preserve consistency under concurrent actions and retries.",
      "Bot lifecycle and decision adapter reuse the same validated command path as human players.",
    ],
    category: "Backend",
  },
  {
    id: "neural-drive",
    name: "Neural Drive",
    subtitle: "Self-Driving Car Simulator",
    description: "AI-driven cars trained using Neural Networks and Genetic Algorithms with live visualization",
    github: "https://github.com/Ukriyte/Self-Driving-Car",
    live: "https://neuraldriver.vercel.app/",
    techStack: ["React", "TypeScript", "Neural Networks", "Genetic Algorithms", "HTML Canvas"],
    architecture: {
      layers: [
        { name: "Presentation", components: ["React UI", "Canvas Renderer", "Controls Panel"] },
        { name: "Simulation", components: ["Car Physics", "Road Generator", "Collision Detection"] },
        { name: "AI Engine", components: ["Neural Network", "Genetic Algorithm", "Fitness Scoring"] },
        { name: "Persistence", components: ["Model Storage", "Training Params", "LocalStorage"] },
      ],
    },
    features: [
      "Fitness scoring, mutation, and population-based training cycles",
      "Live road simulation and network activations visualization",
      "Model persistence and interactive tuning of training parameters",
    ],
    category: "AI/ML",
  },
  {
    id: "taskflow",
    name: "TaskFlow",
    subtitle: "Voice-Enabled Task Management System",
    description: "Full-stack task management with voice input and NLP-style parsing",
    github: "https://github.com/Ukriyte/TaskFlow-VELO",
    live: "https://echo-crud-craft.lovable.app/",
    techStack: ["MongoDB", "Express", "React", "Node.js", "NLP"],
    architecture: {
      layers: [
        { name: "Client", components: ["React UI", "Voice Input", "Kanban Board"] },
        { name: "API Gateway", components: ["Express Server", "Rate Limiting", "Validation"] },
        { name: "Business Logic", components: ["NLP Parser", "Task Processor", "Search Engine"] },
        { name: "Data Layer", components: ["MongoDB", "Indexing", "Aggregation"] },
      ],
    },
    features: [
      "Natural language to structured tasks (title, date, priority, status)",
      "Rate limiting, validation, and RESTful APIs",
      "Drag-and-drop boards with database-level search and filtering",
    ],
    category: "Full-Stack",
  },
  {
    id: "url-shortener",
    name: "Scalable URL Shortener",
    subtitle: "High-Performance Link Management Service",
    description: "Stateless REST API service with Redis-backed redirect caching, token-bucket rate limiting, and safe short-code generation.",
    github: "https://github.com/Ukriyte/URL-Shortener/",
    techStack: ["TypeScript", "Node.js", "Redis", "REST APIs", "Express"],
    architecture: {
      layers: [
        { name: "API", components: ["Create URL", "Resolve Redirect", "Validation"] },
        { name: "Cache", components: ["Redis", "Hot Redirects", "TTL Strategy"] },
        { name: "Protection", components: ["Token Bucket", "Abuse Limits", "Stateless Handlers"] },
        { name: "Service", components: ["Short-Code Generator", "Collision Checks", "Safe Redirects"] },
      ],
    },
    features: [
      "Redis-backed caching separates the latency-sensitive read path from URL creation and persistence.",
      "Focused REST API paths keep URL creation and redirect resolution stateless and independently deployable.",
      "Token-bucket rate limiting, input validation, and collision-safe short-code generation protect public APIs.",
    ],
    category: "Backend",
  },
  {
    id: "crypto-unwrapped",
    name: "Crypto Unwrapped",
    subtitle: "Wallet Analytics Dashboard",
    description: "Web3 dashboard to visualize wallet balances, transactions, and gas usage",
    github: "https://github.com/solo-daemon/block-mint",
    techStack: ["React", "Web3", "MetaMask", "Ethers.js"],
    architecture: {
      layers: [
        { name: "UI Layer", components: ["Dashboard", "Charts", "Portfolio View"] },
        { name: "Web3 Integration", components: ["MetaMask", "Ethers.js", "Wallet Connect"] },
        { name: "Data Processing", components: ["TX Parser", "Balance Aggregator", "Gas Calculator"] },
        { name: "Blockchain", components: ["Ethereum RPC", "Token Contracts", "NFT Metadata"] },
      ],
    },
    features: [
      "MetaMask integration for authentication and blockchain queries",
      "ERC-20 tokens, NFTs, and transaction history display",
      "Responsive UI for real-time portfolio insights",
    ],
    category: "Web3",
  },
];

export const education = [
  {
    institution: "Indian Institute of Technology Roorkee (IIT Roorkee)",
    degree: "Bachelor of Technology (BTech) - Mechanical Engineering",
    location: "Uttarakhand, India",
    period: "Nov 2021 - May 2025",
  },
  {
    institution: "Stepping Stones Public School CBSE",
    degree: "Intermediate (Class XII)",
    location: "Chandigarh, India",
    period: "June 2020 - July 2021",
  },
];

export const certifications = [
  {
    name: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/Ukriyte/data-analysis-with-python-v7",
  },
  {
    name: "Education Mentor",
    issuer: "Mathongo",
    link: "https://drive.google.com/file/d/1b35zAQToHMFPe-kA1GQ8zS5TemWjCvQ5/view",
  },
];

export const highlights = [
  {
    text: "Secured Global Rank 279 in CodeChef Starters 215",
    detail: "Competing among 30,000 programmers worldwide",
    type: "competitive",
  },
  {
    text: "Solved 400+ DSA problems in C++, Java",
    detail: "On LeetCode and GeeksforGeeks",
    type: "practice",
    link: "https://leetcode.com/u/nrgchugh/",
  },
  {
    text: "Winner, StackTooDeep Hackathon",
    detail: "Blockchain Society, IIT Roorkee",
    type: "achievement",
  },
];

export const timeline = [
  { year: "2021", event: "Started BTech at IIT Roorkee", type: "education" },
  { year: "2022", event: "Won StackTooDeep Hackathon", type: "achievement" },
  { year: "2023", event: "Built Neural Drive & TaskFlow", type: "project" },
  { year: "2024", event: "Joined E-Ring Inc. as SWE I", type: "work" },
  { year: "2024", event: "Built Scalable URL Shortener", type: "project" },
  { year: "2025", event: "Graduating from IIT Roorkee", type: "education" },
];
