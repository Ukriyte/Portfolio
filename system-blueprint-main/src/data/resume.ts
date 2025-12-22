export const profile = {
  name: "Anurag Chugh",
  title: "Backend-Focused Software Engineer",
  email: "nrgchugh@gmail.com",
  phone: "+91 7696090258",
  location: "Bengaluru, Karnataka",
  linkedin: "https://www.linkedin.com/in/AnuragChugh404",
  resume: "https://drive.google.com/file/d/15DAedFrOAgJWhT1QYNy-mVGlNNcEX12l/view?usp=sharing",
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

export const experience = [
  {
    company: "E-Ring Inc.",
    role: "Software Engineer I",
    location: "Hyderabad, Telangana",
    period: "July 2025 - Present",
    achievements: [
      {
        text: "Replaced cursor-based extraction with BCP-based pipelines, accelerating a monthly county-wide ETL job (1M+ records) from 8 hours → 45 minutes",
        metrics: { before: 8 * 60, after: 45, unit: "min", type: "performance" },
      },
      {
        text: "Built T-SQL monitoring scripts for billing and reconciliation, cutting manual validation by 20% and improving audit turnaround time",
        metrics: { improvement: 20, unit: "%", type: "efficiency" },
      },
      {
        text: "Migrated DevExpress and VB logic to plain JavaScript inside ASP.NET pages, reducing page load time by 18%",
        metrics: { improvement: 18, unit: "%", type: "performance" },
      },
    ],
    techStack: ["SQL Server", "T-SQL", "Query Store", "Azure DevOps", "SSMS", "JavaScript", "ASP.NET"],
  },
];

export const projects = [
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
    demo: "https://drive.google.com/file/d/1NJDpUZGoh1rUPnR7frNbxokKaBexVOff/view",
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
    name: "URL Shortener",
    subtitle: "Scalable Link Management Service",
    description: "High-performance URL shortener with Redis caching and analytics",
    github: "https://github.com/Ukriyte/URL-Shortener/",
    demo: "https://www.youtube.com/watch?v=vbokstNosZM",
    techStack: ["TypeScript", "Node.js", "Redis", "PostgreSQL", "REST APIs"],
    architecture: {
      layers: [
        { name: "API", components: ["REST Endpoints", "Rate Limiter", "Validator"] },
        { name: "Cache", components: ["Redis", "Token Bucket", "TTL Manager"] },
        { name: "Service", components: ["URL Generator", "Analytics", "Redirector"] },
        { name: "Storage", components: ["PostgreSQL", "URL Table", "Analytics Table"] },
      ],
    },
    features: [
      "Redis caching and PostgreSQL persistence",
      "Distributed token-bucket rate limiting for abuse prevention",
      "Analytics to track requests, latency, and errors",
      "Safe redirection logic and unique ID generation",
    ],
    category: "Backend",
  },
  {
    id: "crypto-unwrapped",
    name: "Crypto Unwrapped",
    subtitle: "Wallet Analytics Dashboard",
    description: "Web3 dashboard to visualize wallet balances, transactions, and gas usage",
    github: "https://github.com/solo-daemon/block-mint",
    demo: "https://www.youtube.com/watch?v=SgvFoTloewM",
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
