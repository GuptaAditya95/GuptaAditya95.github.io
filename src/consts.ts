// Everything personal lives here. Edit this file first.
export const SITE = {
  name: 'Aditya Gupta',
  short: 'Aditya',
  title: 'Aditya Gupta',
  description:
    'Aditya Gupta learns AI in public: by-hand breakdowns of model architectures, frameworks for leading AI transformation, and experiments along the way.',
  // The one-line answer to "who is this?"
  headline: 'I learn AI by breaking it down, then share what I learn so others can too.',
  intro:
    "I'm Aditya. I take something hard, like how a transformer actually computes attention or how a leader picks which AI pilots to fund, work through it piece by piece, and publish the result as something you can use. This site is the map to all of it.",
  // TODO(Aditya): replace with your role and location from LinkedIn.
  role: '',
  location: '',
  email: '',
  links: {
    github: 'https://github.com/GuptaAditya95',
    linkedin: 'https://www.linkedin.com/in/aditya-gupta-45893581',
    x: '',
  },
  // Put a PDF at public/resume.pdf and set this to '/resume.pdf' to show a Résumé button.
  resume: '',
};

// The topics I care about. Projects and the learning trail are tagged with these ids,
// and the home page lets visitors filter by them.
export const TOPICS = {
  models: { label: 'How models work', blurb: 'Transformers, attention, BERT: every matrix, worked by hand.' },
  leadership: { label: 'Leading AI transformation', blurb: 'Strategy, prioritisation and roadmaps for bringing AI into a business.' },
  responsible: { label: 'Responsible AI & privacy', blurb: 'Readiness, governance, and keeping people safe in the data.' },
  data: { label: 'Data & engineering', blurb: 'The pipelines, tooling and foundations underneath AI.' },
} as const;
export type Topic = keyof typeof TOPICS;

export type Project = {
  name: string;
  tagline: string;
  summary: string;
  topics: Topic[];
  year: string;
  url?: string; // live site
  repo?: string;
  featured?: boolean;
  // For featured projects: the pieces inside, each with a link.
  parts?: { label: string; note: string; href: string }[];
  forWhom?: string;
};

const GH = 'https://github.com/GuptaAditya95';

export const PROJECTS: Project[] = [
  {
    name: "Let's Break It Down",
    tagline: 'Model architectures, worked out by hand',
    summary:
      'Interactive breakdowns of the architectures behind modern AI. Each one walks a full forward pass, every matrix, every shape, every sum, with a practice panel beside each step so you do the math yourself.',
    forWhom: 'Anyone who wants to understand architectures from scratch. No training experience needed, just comfort with multiplying and adding.',
    topics: ['models'],
    year: '2026',
    url: 'https://guptaaditya95.github.io/llmbreakdown/',
    repo: `${GH}/llmbreakdown`,
    featured: true,
    parts: [
      { label: '01 · Attention, by hand', note: 'Attention Is All You Need (2017)', href: 'https://guptaaditya95.github.io/llmbreakdown/attention/' },
      { label: '02 · BERT, by hand', note: 'BERT (2018)', href: 'https://guptaaditya95.github.io/llmbreakdown/bert/' },
    ],
  },
  {
    name: 'AI Transformation Playbook',
    tagline: 'Leading AI transformation, one framework at a time',
    summary:
      "I'm working through a course on leading AI transformation. After each lesson I turn my notes into a reusable framework, show it on a case study (a fictional insurer, Meridian), and publish it.",
    forWhom: 'Business leaders. No technical background needed.',
    topics: ['leadership', 'responsible'],
    year: '2026',
    url: 'https://guptaaditya95.github.io/ai-transformation-playbook/',
    repo: `${GH}/ai-transformation-playbook`,
    featured: true,
    parts: [
      { label: '1 · Build your AI leadership strategy', note: 'The Translation Method', href: 'https://guptaaditya95.github.io/ai-transformation-playbook/lessons/build-your-ai-leadership-strategy/' },
      { label: '2 · AI literacy for business leaders', note: 'AI Readiness and Responsible AI', href: 'https://guptaaditya95.github.io/ai-transformation-playbook/lessons/ai-literacy-for-business-leaders/' },
      { label: '3 · Prioritise AI pilots', note: 'The Value–Feasibility–Risk Sort', href: 'https://guptaaditya95.github.io/ai-transformation-playbook/lessons/prioritise-ai-pilots/' },
      { label: '4 · Build the AI transformation roadmap', note: 'The Absorption and Momentum Tests', href: 'https://guptaaditya95.github.io/ai-transformation-playbook/lessons/build-the-ai-transformation-roadmap/' },
    ],
  },
  {
    name: 'Kipu Pay corpus anonymizer',
    tagline: 'Hackathon: sell the data without selling the people',
    summary:
      'Built for a Frontier Labs hackathon challenge. Anonymizes a fintech’s chats, documents and tables with one consistent pseudonym per person, so the data stays useful and no one can be identified. Zero leaks on the validator.',
    topics: ['responsible', 'data'],
    year: '2026',
    repo: `${GH}/kipu-anonymizer`,
  },
  {
    name: 'AssureBot',
    tagline: 'AI agents for risk and assurance',
    summary: 'An experiment in agent-based modelling for risk and assurance work.',
    topics: ['responsible', 'leadership'],
    year: '2024',
    repo: `${GH}/AssureBot`,
  },
  {
    name: 'Linear regression, explained in code',
    tagline: 'Back to fundamentals',
    summary: 'Notebook code walking through how linear regression works under the hood.',
    topics: ['models'],
    year: '2024',
    repo: `${GH}/linear-regression`,
  },
  {
    name: 'DevOps from zero',
    tagline: 'Learning CI/CD by building it',
    summary: 'A from-scratch repo for learning continuous integration and delivery.',
    topics: ['data'],
    year: '2024',
    repo: `${GH}/devops-from-zero`,
  },
  {
    name: 'Data engineering coursework',
    tagline: 'Notebooks from a data engineering course',
    summary: 'Hands-on exercises from Coursera data engineering coursework.',
    topics: ['data'],
    year: '2022',
    repo: `${GH}/coursera_de`,
  },
  {
    name: 'Tableau version control',
    tagline: 'Git-style history for dashboards',
    summary: 'A version control system for Tableau workbooks.',
    topics: ['data'],
    year: '2020',
    repo: `${GH}/tableau_versioncontrol`,
  },
];

// How I learn. Shown as an interactive loop on the home page.
export const METHOD = [
  { step: 'Pick something hard', text: 'A paper, a course lesson, or a challenge I can’t yet explain simply.', example: 'Attention Is All You Need' },
  { step: 'Break it down', text: 'Work it through piece by piece: every matrix by hand, or raw notes into one framework.', example: 'Every shape of a forward pass, computed on paper' },
  { step: 'Build something you can use', text: 'An interactive page, a worksheet, a framework with a case study.', example: 'Attention, by hand, with a practice panel beside each step' },
  { step: 'Publish and ask for feedback', text: 'Put it online, invite corrections, and let it shape the next one.', example: 'Feedback became the PLAYBOOK for the BERT breakdown' },
];

export const NOW = [
  'Building the next “by hand” breakdown after BERT',
  'Taking a course on leading AI transformation and publishing a framework per lesson',
  'Exploring privacy-preserving data for AI (see the hackathon anonymizer)',
];

// The three kinds of writing on the blog.
export const KINDS = {
  post: { label: 'Writing', blurb: 'Longer pieces on my work and what I learned.' },
  thought: { label: 'Thoughts', blurb: 'Short notes and opinions, written quickly.' },
  experiment: { label: 'Experiments', blurb: 'Things I tried to see what would happen.' },
} as const;
export type Kind = keyof typeof KINDS;

// Ways to join in. Used on the home page and /community/.
export const PLAYBOOK_EMAIL_FORM =
  'https://api.follow.it/subscription-form/YndOTnZHM0l2d1lVdW9DdEpMS0ErRnJvR0xzTU9KWDNPR3hYb0IyZGR1STc4RVRWeXNSODdnWXg5SmhFNDdBdnZ4bFdzQk1hc3FwWGJCdVl0MkxuZy92Ym9jK1Y5bEpqVzRJNVR3akx5T1JkeUtuZFBTeWJiMHNlVlAwdXBjNU18bXlMT1dwSWh2VytieEtkR2o1czNjQnl0cFh2RmM0Sm9qdWJZS2RUN0FDRT0=/8';

// Career history for the About page. Hidden until filled in.
// TODO(Aditya): paste from LinkedIn, newest first.
export const EXPERIENCE: { role: string; org: string; dates: string; note?: string }[] = [];
export const EDUCATION: { what: string; where: string; dates?: string }[] = [];
