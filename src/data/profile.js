// Content follows the resume supplied in October 2026.
export const profile = {
  name: 'Samuel Baer',
  email: 'Sampbaer@gmail.com',
  phone: '(346) 546-5647',
  location: 'Pleasant Grove, Utah',
  linkedin: 'https://www.linkedin.com/in/samuel-p-baer/',
  github: 'https://github.com/sampbaer-creator',
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
}

export const experience = [
  {
    role: 'Carrier Relations Analyst Intern', company: 'Trucordia',
    location: 'Lindon, UT', dates: 'Aug 2026 — Present',
    points: [
      'Built state-by-state carrier profitability and forecasting analysis of $19M+ in premium, policy, and contract data. Identified a 10% profit-sharing agreement against a 15% benchmark to support stronger carrier terms.',
      'Compile, clean, and validate data from multiple sources for Excel reports, dashboards, and leadership presentations.',
      'Manage operational records, document workflows, and identify process gaps and reporting improvements.',
    ],
  },
  {
    role: 'Business Intelligence & Reporting Services Analyst', company: 'Utah Valley University',
    location: 'Orem, UT', dates: 'Apr 2026 — Present',
    points: [
      'Maintain 7+ Power BI reports used by 15 university departments, monitoring refreshes and troubleshooting with report owners.',
      'Write and review advanced Azure SQL queries for reporting requests from 10+ departments, following FERPA and data governance requirements.',
      'Deployed and validated university-wide SRI student surveys reaching 114,338 students, correcting reporting errors and supporting leadership reporting.',
    ],
  },
  {
    role: 'AI Annotator', company: 'Handshake', location: 'Remote', dates: 'Nov 2025 — Aug 2026',
    points: [
      'Reviewed and validated 5,000+ AI-generated data entries using internal tools to improve recommendation model accuracy.',
      'Evaluated behavioral patterns in user-generated data to improve machine learning training datasets.',
    ],
  },
]

export const projects = [
  {
    number: '01', title: 'BaerVault', category: 'Personal finance platform',
    description: 'A personal finance application for household budgets, cash flow, transactions, and investments. I designed the PostgreSQL data model and built and deployed the application with Next.js and Supabase.',
    technologies: ['Next.js', 'TypeScript', 'React', 'Supabase / PostgreSQL', 'Vercel'],
    github: 'https://github.com/sampbaer-creator/BaerVault',
    live: 'https://www.baervault.company',
  },
  {
    number: '02', title: 'GridGuard', category: 'Property intelligence',
    description: 'A property risk application using geographic and government data to analyze flood, wildfire, wind, and planning scenarios. I integrated external APIs and GIS services with an interactive map.',
    technologies: ['Next.js', 'TypeScript', 'FastAPI / Python', 'Leaflet', 'Cloudflare Workers'],
    github: 'https://github.com/sampbaer-creator/GridGuard',
    live: 'https://gridguard-utah.earthy-moth-6817.chatgpt.site',
  },
  {
    number: '03', title: 'Business Statistics Analysis', category: 'UVU Women’s Impact Lab',
    description: 'Survey analysis for the UVU Women’s Impact Lab. I used R Markdown for regression modeling, hypothesis testing, and visualization, then delivered a report of the findings to the client.',
    technologies: ['R', 'R Markdown', 'Regression', 'Hypothesis testing'],
    github: 'https://github.com/sampbaer-creator/R_Final_Project',
  },
]

export const skillGroups = [
  { title: 'Languages', skills: 'SQL, Python, R, TypeScript, C#, HTML, CSS' },
  { title: 'Data & business intelligence', skills: 'Power BI, Tableau, Excel, Microsoft Azure, Azure SQL Database, Snowflake, Supabase / PostgreSQL' },
  { title: 'Analytics', skills: 'ETL pipelines, data analysis, data validation & quality, financial analysis & forecasting, statistical modeling, data visualization, KPI reporting, data governance (FERPA)' },
  { title: 'Tools & workflow', skills: 'JIRA, Smartsheet, SharePoint, Confluence, GitHub, Vercel, AI coding agents' },
]
