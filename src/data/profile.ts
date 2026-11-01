// Everything the page says lives here. Adding a role or a project is one edit
// in this file — the markup never needs touching.

export const identity = {
  name: 'Abdullah Alsaidi',
  title: 'Senior Software Engineer · AI & Backend Systems · Barcelona',
  host: 'abdullah@barcelona',
  program: 'agent.run',
  task: 'introduce yourself',
  summary: [
    '8+ years shipping scalable backends and production AI. At Revolut',
    'I delivered an internal AI assistant with MCP tool integrations. I',
    'work on agentic workflows, vector search and GenAI systems that',
    'hold up in production.',
  ],
  email: 'abdullah.alsaidi16@gmail.com',
  links: [
    { label: 'in/abdullah-alsaidi', href: 'https://www.linkedin.com/in/abdullah-alsaidi/' },
    { label: 'gh/abdullahalsaidi16', href: 'https://github.com/abdullahalsaidi16' },
  ],
  call: {
    label: 'book a call',
    href: 'https://calendly.com/abdullah-alsaidi16/one-on-one-with-me',
  },
};

export type Role = {
  company: string;
  role: string;
  from: string;
  to: string;
  where: string;
  results: string[];
  running?: boolean;
};

export const roles: Role[] = [
  {
    company: 'Revolut',
    role: 'Software Engineer',
    from: 'Jul 2024',
    to: 'now',
    where: 'Barcelona',
    running: true,
    results: [
      'Delivered an internal AI assistant end to end, with MCP tool integrations, for Revolut staff and Revolut People users',
      'ClickUp and DocuSign integrations for the Revolut People HR product',
      'LLM-powered workflows built with PMs and data scientists',
      'Backend APIs: performance work and a scalable service architecture',
    ],
  },
  {
    company: 'Glovo',
    role: 'Software Engineer',
    from: 'Nov 2022',
    to: 'Jul 2024',
    where: 'Barcelona',
    results: [
      'Core communication services on microservices and Kafka',
      'Backend-driven UIs, loyalty features and profile APIs',
      'Tier 1 services maintained and scaled for reliability and traceability',
    ],
  },
  {
    company: 'Oneragtime',
    role: 'Backend Developer',
    from: 'Oct 2021',
    to: 'Nov 2022',
    where: 'Barcelona',
    results: [
      'Faster internal tools for investors and founders',
      'Broad test coverage and fixes for systemic bugs',
    ],
  },
  {
    company: 'STOWK',
    role: 'Backend Developer',
    from: 'Oct 2019',
    to: 'Oct 2021',
    where: 'remote, USA',
    results: [
      'Took predictive pricing models for US vehicle shipping (MoveCar) into production',
      'Model-serving APIs and MLOps pipelines with monitoring dashboards',
      'ML features in production, including embedding-based components',
    ],
  },
  {
    company: 'L-One Systems',
    role: 'ML Engineer',
    from: 'Nov 2018',
    to: 'Dec 2019',
    where: 'remote, Germany',
    results: [
      'Serverless satellite image analysis APIs',
      'Field boundary and vegetation detection for agri-intelligence company Spacenus',
    ],
  },
];

export type Artifact = {
  name: string;
  context: string;
  blurb: string;
  stack: string[];
  link: { label: string; href: string };
  alt?: { label: string; href: string };
};

export const artifacts: Artifact[] = [
  {
    name: 'The Good Scammer',
    context: 'GitLab Transcend Hackathon · Oct 2026',
    blurb:
      'Trains elderly people to spot phone fraud through consented AI mock scam calls, then gives the family a debrief. Consent is one state machine, and only the category of disclosed data is stored.',
    stack: ['FastAPI', 'Twilio SIP', 'React 19', 'Cloud Run'],
    link: { label: 'live site', href: 'https://thegoodscammer.com/' },
    alt: {
      label: 'gitlab',
      href: 'https://gitlab.com/gitlab-ai-hackathon/transcend-october-2026/5960498/showcase/',
    },
  },
  {
    name: 'FUSION',
    context: 'HackBarna 2026',
    blurb:
      'Ranks 14,002 hexagons in Spain by wildfire risk, fusing ESA WorldCover, Kontur, OpenStreetMap and 523 weeks of ERA5 into a weekly priority score. Caching cut API calls from 280 to 30.',
    stack: ['H3', 'rasterio', 'Shapely'],
    link: { label: 'live site', href: 'https://abdullahalsaidi16.github.io/grootguard/' },
    alt: { label: 'repo', href: 'https://github.com/abdullahalsaidi16/grootguard' },
  },
  {
    name: 'Maskode',
    context: 'Open source',
    blurb:
      'A privacy-first fork of the OpenCode agent. A local model strips names, emails and phone numbers before anything reaches an LLM, then restores them in the response.',
    stack: ['local model', 'privacy'],
    link: { label: 'repo', href: 'https://github.com/abdullahalsaidi16/maskode' },
  },
];

export const config: { key: string; value: string; map?: boolean }[] = [
  { key: 'languages', value: 'Python, Java, SQL, NoSQL' },
  { key: 'frameworks', value: 'FastAPI, Django, Pydantic' },
  { key: 'ai', value: 'LangChain, LangGraph, LlamaIndex, Hugging Face, RAG, Agents, MCP, Vector Search' },
  { key: 'infra', value: 'AWS, Azure, Kafka, Serverless, CI/CD' },
  {
    key: 'education',
    value: 'MSc Data Science — Harbour.Space, BEng Computer Engineering — Damascus University',
  },
  { key: 'speaks', value: 'arabic: native, english: professional, spanish: basic', map: true },
];
