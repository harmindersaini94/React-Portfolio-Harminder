import blogImage from "../assets/tech-blog.webp";
import todoImage from "../assets/todo.webp";

/**
 * Single source of content for every section.
 * Facts follow the October 2026 resume: Fullsteam (Jun 2025–Present),
 * E One Moli Energy (Mar 2022–May 2025), Douglas College, and TCS.
 * Experience is exactly "7 years". RAG and semantic search stay marked
 * "in development". Do not add metrics that are not in this file.
 *
 * Portrait: set avatar.src to a public path such as "/portrait.jpg"
 * when a new photo arrives. null keeps the HS terminal placeholder.
 * Avatar.jsx is the only component that renders it.
 */
const profile = {
  name: "Harminder Singh Saini",
  role: "Senior Full Stack Developer",
  company: "Fullsteam",
  product: "EPASS ERP",
  location: "Surrey, BC, Canada",
  locationShort: "Surrey, BC",
  email: "harminder.saini111@gmail.com",
  phone: "+1 778 956 7035",
  phoneHref: "tel:+17789567035",
  yearsLabel: "7 years",
  copyrightYear: 2026,
  resume: {
    href: "/Harminder_Saini_Resume.pdf",
    filename: "Harminder_Saini_Resume.pdf",
  },
  mailto:
    "mailto:harminder.saini111@gmail.com?subject=Initial%20Exploration%20Call%20for%20a%20Potential%20Opportunity",
  seo: {
    title: "Harminder Singh Saini · Senior Full Stack Developer",
    description:
      "Harminder Singh Saini, Senior Full Stack Developer in Surrey, BC. 7 years shipping scalable systems in .NET, React, GraphQL and Azure OpenAI.",
    url: "https://react-portfolio-harminder.vercel.app/",
  },
  avatar: {
    src: null,
    initials: "HS",
    alt: "Harminder Singh Saini",
    placeholderLabel: "portrait pending",
  },
  nav: [
    { href: "#work", label: "./work" },
    { href: "#experience", label: "./experience" },
    { href: "#stack", label: "./stack" },
    { href: "#contact", label: "./contact" },
  ],
  socials: [
    {
      id: "github",
      label: "github",
      href: "https://github.com/harmindersaini94",
      hero: true,
    },
    {
      id: "linkedin",
      label: "linkedin",
      href: "https://www.linkedin.com/in/harmindersaini94/",
      hero: true,
    },
    {
      id: "x",
      label: "x",
      href: "https://x.com/hssaini_11",
    },
  ],
  hero: {
    kicker: "Senior Full Stack Developer @ Fullsteam",
    lede: "7 years shipping scalable systems in .NET, React and the cloud. Right now I'm wiring Azure OpenAI into an enterprise ERP so people can ask for data in plain English.",
    ledeEmphasis: [".NET, React and the cloud", "Azure OpenAI"],
    primaryCta: { href: "#work", label: "view case studies →" },
  },
  boot: [
    { text: "reading profile.json", status: "ok" },
    { text: "mounting case studies", status: "ok" },
    { text: "mounting git log", status: "ok" },
    { text: "ready · surrey, bc", status: "ok" },
  ],
  terminal: {
    command: "whoami --verbose",
    followUps: ["open ./resume.pdf", "git log --career", "cd ./work"],
    fields: [
      { key: "role", value: "Senior Full Stack Developer" },
      { key: "company", value: "Fullsteam · EPASS ERP" },
      { key: "experience", value: "7 years" },
      { key: "backend", values: [".NET", "C#", "GraphQL"] },
      { key: "data", values: ["EF Core", "SQL Server"] },
      { key: "frontend", values: ["React", "Angular", "Lit"] },
      { key: "ai", values: ["Azure OpenAI", "NLP search"] },
      { key: "location", value: "Surrey, BC, Canada" },
    ],
  },
  about: {
    kicker: "// about",
    title:
      "Full stack engineer for the unglamorous, high-stakes parts of business software: ERP data, payments and legacy modernization.",
    body: "I've worked across .NET/C#, Python, Java and Node.js on the backend and React, Angular, Lit and TypeScript on the frontend. Before Fullsteam I was a Full Stack Developer at E One Moli Energy, and earlier at Douglas College and Tata Consultancy Services. I studied Computer Science and Engineering at Guru Nanak Dev University and Computing Studies at Douglas College.",
  },
  education: [
    {
      credential:
        "Post-Baccalaureate Diploma in Computing Studies and Information Systems",
      school: "Douglas College",
      detail: "New Westminster, BC · GPA 3.20",
    },
    {
      credential: "B.Tech, Computer Science and Engineering",
      school: "Guru Nanak Dev University",
      detail: "Amritsar, India · GPA 7.77",
    },
  ],
  work: {
    kicker: "// featured work",
    title: "Case studies",
    sideKicker: "// side projects",
  },
  caseStudies: [
    {
      id: "nlp-search",
      featured: true,
      eyebrow: "Fullsteam · EPASS ERP · 2025 → now",
      title: "Ask the ERP in plain English",
      body: "An Azure OpenAI powered natural-language search that translates a user's question into structured JSON filters, then retrieves live product, inventory, pricing and sales data. A .NET, GraphQL and EF Core layer enforces query validation and controlled database access, built to extend across ERP modules with RAG and semantic search",
      note: "in development",
      tags: ["Azure OpenAI", ".NET", "GraphQL", "EF Core"],
      pipeline: {
        caption: "flow · how a question becomes a query",
        steps: [
          {
            title: "User question",
            detail: "natural language in the ERP UI",
          },
          {
            title: "Azure OpenAI",
            detail: "→ structured JSON filters",
          },
          {
            title: "Validation layer",
            detail: ".NET · GraphQL · EF Core, controlled DB access",
          },
          {
            title: "Live data",
            detail: "product · inventory · pricing · sales",
          },
        ],
      },
    },
    {
      id: "pay-by-link",
      eyebrow: "Fullsteam · in production",
      title: "AR pay-by-link",
      body: "Customers pay accounts receivable through a generated link. The flow hops from the UI to an authentication API, through Fullsteam's in-house payment gateway API, to database updates that trigger native payment notifications.",
      hops: ["UI", "auth API", "payment gateway", "DB", "notifications"],
    },
    {
      id: "modernization",
      eyebrow: "E One Moli Energy · 2022 – 2025",
      title: "Legacy to modern .NET and React",
      body: ".NET Framework 4.7.2 → .NET 8.0 upgrade with a class library refactor, a VB.NET datasets → C# Lists migration, and a KnockoutJS/jQuery → React MVC migration.",
      metrics: [
        { value: 30, suffix: "%", label: "faster execution" },
        { value: 20, suffix: "%", label: "less memory" },
        { value: 40, suffix: "%", label: "site performance" },
      ],
    },
  ],
  projects: [
    {
      id: "blog",
      title: "Tech Blog",
      summary:
        "React and Tailwind with an Appwrite backend for the database and authentication. CI/CD with GitHub Actions and Vercel.",
      image: blogImage,
      imageAlt: "Screenshot of the Tech Blog",
      live: "https://tech-blog-sooty-seven.vercel.app/",
      source: "https://github.com/harmindersaini94/Final_Blog_Project",
    },
    {
      id: "todo",
      title: "Interactive Todo",
      summary:
        "React and Redux with local storage persistence. CI/CD with GitHub and Vercel.",
      image: todoImage,
      imageAlt: "Screenshot of the Interactive Todo app",
      live: "https://interactive-todo.vercel.app/",
      source: "https://github.com/harmindersaini94/Interactive_ToDo",
    },
    {
      id: "portfolio",
      title: "Portfolio",
      summary:
        "React, Framer Motion, and Tailwind. CI/CD with GitHub and Vercel.",
      image: null,
      imageAlt: "",
      live: "https://react-portfolio-harminder.vercel.app",
      source: "https://github.com/harmindersaini94/React-Portfolio-Harminder",
    },
  ],
  experienceIntro: {
    kicker: "// experience",
    title: "git log --career",
  },
  experience: [
    {
      id: "fullsteam",
      current: true,
      dates: "Jun 2025 – Present",
      location: "Surrey, BC",
      title: "Senior Full Stack Developer",
      org: "Fullsteam",
      bullets: [
        "Developed an Azure OpenAI powered natural-language search for an enterprise ERP (EPASS), translating user queries into structured JSON filters to retrieve live product, inventory, pricing, and sales data.",
        "Designed a secure, extensible AI query architecture with .NET, GraphQL, and EF Core that enforces query validation and controlled database access, with planned expansion across ERP modules using RAG and semantic search.",
        "Implemented and moved into production an accounts receivable (AR) payment flow that lets users pay through a generated link, spanning the UI, an authentication API layer, Fullsteam's in-house payment gateway API, and database updates that trigger native payment notification services.",
        "Built the dashboard infrastructure in Lit and partnered with product managers and developers to deliver optimized EPASS Reports dashboards and widgets across domains, surfacing salesperson activity, products sold by last quarter, last year, or custom date range, and company-level sales performance.",
        "Collaborated on researching and building the next-generation web-based EPASS ERP: a UI layer with a service layer for each module that calls an aggregator middle tier, which queries the database and returns results.",
      ],
    },
    {
      id: "moli",
      current: false,
      dates: "Mar 2022 – May 2025",
      location: "Maple Ridge, BC",
      title: "Full Stack Developer",
      org: "E One Moli Energy (Canada) Limited",
      bullets: [
        "Upgraded a legacy desktop application from .NET Framework 4.7.2 to .NET 8.0, including a class library refactor, optimized SQL Server interactions, and breaking-change fixes, achieving 30% faster execution.",
        "Migrated a production application from VB.NET datasets to C# Lists using OOP and LINQ, improving query performance by 30% and reducing memory usage by 20%.",
        "Led migration of an internal web application from KnockoutJS/jQuery to a React-based MVC architecture, improving component efficiency by 30% and site performance by 40%.",
        "Built a real-time data visualization application with Python, FastAPI, Dash, and SQL Server to display live sensor temperature and pressure data with Plotly charts.",
        "Partnered with scientists to build a Python predictive microservice (Scikit-learn, XGBoost) forecasting battery cell self-discharge trends.",
        "Developed a secure web application with Node.js, React, and JavaScript for fast terminal data retrieval, using OAuth and Docker, delivering a 30% performance improvement and faster deployments.",
      ],
    },
    {
      id: "douglas",
      current: false,
      dates: "Sep 2020 – May 2021",
      location: "New Westminster, BC",
      title: "IT Support Assistant",
      org: "Douglas College",
      bullets: [
        "Built a Scrapy web crawler that detects dead links on the college website, reducing manual effort by 50%.",
        "Developed a mentor-mentee registration application with Power Automate and SharePoint in an Agile team, increasing efficiency by 40%.",
        "Built a Node.js, React, and MongoDB hostel management application serving 1,000+ users.",
        "Provided production support, achieving 20% faster ticket resolution.",
      ],
    },
    {
      id: "tcs",
      current: false,
      dates: "Jan 2018 – Jul 2019",
      location: "Ahmedabad, India",
      title: "System Engineer, SAP ABAP",
      org: "Tata Consultancy Services",
      bullets: [
        "Developed SAP ABAP/4 solutions for MM, SD, and HR modules in an Agile Scrum team, implementing BADIs and screen, menu, and function module exits on an Oracle backend, reducing downtime by 30%.",
      ],
    },
  ],
  stack: {
    kicker: "// stack",
    title: "Tools I reach for",
    groups: [
      {
        id: "languages",
        label: "languages",
        items: [".NET", "C#", "Java", "Python", "JavaScript", "TypeScript", "HTML"],
      },
      {
        id: "frontend",
        label: "web & frameworks",
        items: ["React", "Angular", "Lit", "Tailwind", "Entity Framework", "JSON"],
      },
      {
        id: "ai",
        label: "ai",
        accent: true,
        items: [
          "Azure OpenAI",
          "natural-language (NLP) search",
          { label: "RAG & semantic search", note: "in development" },
        ],
      },
      {
        id: "apis",
        label: "apis & architecture",
        items: [
          "REST APIs",
          "GraphQL",
          "Microservices",
          "MVC",
          "Payment gateway integration",
          "Scalability",
        ],
      },
      {
        id: "data",
        label: "data",
        items: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB", "EF Core"],
      },
      {
        id: "cloud",
        label: "cloud & devops",
        items: [
          "Azure DevOps",
          "Azure Logic Apps",
          "AWS Lambda",
          "AWS S3",
          "Amazon Lex",
          "Docker",
          "CI/CD",
        ],
      },
      {
        id: "practices",
        label: "practices",
        items: ["Agile"],
      },
    ],
  },
  contact: {
    kicker: "// contact",
    title: "Let's build something solid.",
    body: "Questions, collaborations or opportunities: my inbox is open. Based in Surrey, BC.",
  },
};

export default profile;
