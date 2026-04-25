export const personal = {
  name: 'Shubham Vijay Tidke',
  title: 'Software Engineer',
  roles: ['Software Engineer', 'Backend Engineer', 'Distributed Systems Engineer', 'ML/AI Engineer', 'Researcher'],
  tagline: 'Building scalable systems, intelligent applications, and real-world solutions — one commit at a time.',
  email: 'shubhamvt2000@gmail.com',
  phone: '(984) 379-1549',
  github: 'https://github.com/ShubhamTidke',
  linkedin: 'https://linkedin.com/in/shubham-tidke',
  resume: 'https://drive.google.com/file/d/1QEmh3T1M2WFtIXCDM7yaVnA6ub9I6afP/view?usp=sharing',
  location: 'Raleigh, NC',
}

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'C', 'Shell'],
  },
  {
    category: 'Web & Backend',
    items: ['REST APIs', 'Microservices', 'Spring Boot', 'Node.js', 'React', 'Angular', 'Django', 'GraphQL', 'gRPC'],
  },
  {
    category: 'Data & Cloud',
    items: ['AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Kafka', 'Redis', 'MongoDB', 'Elasticsearch', 'Logstash', 'Kibana'],
  },
  {
    category: 'DevOps & Observability',
    items: ['Git', 'CI/CD', 'Linux', 'Jenkins', 'Maven', 'Prometheus', 'Grafana', 'Agile/Scrum'],
  },
  {
    category: 'AI & ML',
    items: ['PyTorch', 'Hugging Face', 'LangChain', 'RAG', 'NumPy', 'Pandas', 'Reinforcement Learning', 'OpenCV'],
  },
]

export const experience = [
  {
    role: 'Research Intern',
    company: 'North Carolina State University',
    location: 'Raleigh, NC',
    period: 'Aug 2025 – Present',
    bullets: [
      'Engineered a real-time ELK pipeline replacing manual Carnegie Mellon DataShop log exports, processing 108 GB of logs across 33 studies and reducing data turnaround from days to seconds.',
      'Integrated GPT-4 into a learn-by-teaching tutoring app built with Spring Boot, Angular, and Docker to generate personalized questions that test student understanding, resulting in a 30% increase in test scores.',
    ],
    stack: ['ELK Stack', 'Spring Boot', 'Angular', 'Docker', 'GPT-4'],
  },
  {
    role: 'Software Engineer',
    company: 'EQ Technologic',
    location: 'Pune, India',
    period: 'Nov 2021 – Jun 2024',
    bullets: [
      'Led a 3-engineer team to reduce mean resolution time from ~60 min to under 10 min (83% reduction) by building a unified observability dashboard with React across 12 distributed cluster nodes.',
      'Centralized connection management across distributed servers by architecting an Apache Ignite cluster, enabling seamless horizontal scaling and reducing resource exhaustion issues by 74%.',
      'Collaborated with cross-functional teams to design and deliver a Spring Boot microservice handling 1M+ daily events, driving authentication and connection workflows across diverse enterprise systems.',
      'Migrated from role-based access model to feature-level permissions across 87 REST API endpoints using a two-layer authorization system built on Spring Security and custom annotations.',
      'Boosted application transaction throughput by 26% by implementing Apache Ignite caching at the repository layer.',
      'Engineered a parallel connection initialization process to reduce deployment warm-up time by 60% (30 min → 12 min).',
    ],
    stack: ['React', 'Spring Boot', 'Apache Ignite', 'Prometheus', 'Grafana', 'Spring Security'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'EQ Technologic',
    location: 'Pune, India',
    period: 'Aug 2021 – Oct 2021',
    bullets: [
      'Reduced database migration time by 80% via transaction-scoped connection sharing across the API call chain.',
      'Added HikariCP telemetry to surface leaks/failures immediately, eliminating a manual follow-up step in production.',
    ],
    stack: ['Java', 'Spring Boot', 'HikariCP', 'PostgreSQL'],
  },
]

export const projects = [
  {
    title: 'Distributed Threat Detection',
    subtitle: 'Real-Time Security Platform',
    description:
      'Real-time threat detection platform on Kubernetes and Kafka detecting zero-day attacks from system calls with 90% accuracy and 5–8 second early warning, cutting monitoring overhead by 60% and reducing false positives to 0.8%.',
    stack: ['Kubernetes', 'Kafka', 'Elasticsearch', 'Docker'],
    hackathon: null,
    link: null,
  },
  {
    title: 'LLM Cache Optimization',
    subtitle: 'RAG-Based Policy Generator',
    description:
      'RAG-based framework to generate novel cache replacement policies, boosting hit rate from 43% to 52%. Deployed a 120B parameter LLM inference pipeline using vLLM on H100 GPU HPC cluster for large-scale feedback loops.',
    stack: ['LLM', 'RAG', 'Prompt Engineering', 'vLLM', 'HPC Clusters'],
    hackathon: null,
    link: null,
  },
  {
    title: 'SightBuddy',
    subtitle: 'AI Web Browser Extension',
    description:
      'A voice-first AI web assistant with Gemini that enables visually impaired users to navigate the web hands-free. Supports page summarization, Q&A, and actions like clicking buttons, filling and submitting forms entirely by voice.',
    stack: ['Gemini', 'WebSpeechAPI', 'Django'],
    hackathon: { label: '🏆 HackNCState 2025', award: 'Best Use of Generative AI' },
    link: 'https://devpost.com/software/sight-buddy',
  },
  {
    title: 'UNewz',
    subtitle: 'YouTube Credibility Extension',
    description:
      'Real-time credibility overlay for YouTube that detects clickbait, extracts claims, and links sources — backed by Redis cloud cache. Designed a ReAct agent to fact-check and provide alternative sources in parallel within 50 sec for ~5 claims.',
    stack: ['LangChain', 'Redis', 'DuckDuckGo', 'Vultr Cloud', 'Twelve Labs'],
    hackathon: { label: '🏆 HackNCState 2026', award: 'Best Use of Tech' },
    link: 'https://devpost.com/software/truthdetector-yznrlx',
  },
]

export const education = [
  {
    degree: 'Master of Computer Science',
    school: 'North Carolina State University',
    location: 'Raleigh, NC',
    period: 'Aug 2024 – May 2026',
    gpa: '3.96 / 4.0',
    coursework: [
      'Deep Learning Beyond Accuracy',
      'Neural Networks',
      'Generative AI for Computer Systems',
      'Software Engineering',
      'Automated Learning and Data Analysis',
      'Building Game AI',
      'Artificial Intelligence',
      'Maching Learning with Graphs',
      'Database Management',
      'Design & Analysis of Algorithms',
    ],
  },
  {
    degree: 'Bachelor of Technology in Information Technology',
    school: 'Pune Institute of Computer Technology',
    location: 'Pune, India',
    period: 'Aug 2017 – May 2021',
    gpa: '3.9 / 4.0',
    coursework: [
      'Machine Learning & Apps',
      'Distributed Computing Systems',
      'Data Science & Big Data Analytics',
      'Cloud Computing',
      'Operating Systems',
      'Computer Network Technology',
      'Software Design and Modeling',
      'Database Management Systems',
    ],
  },
]
