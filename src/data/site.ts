// All portfolio content lives here. Edit this file to add projects, roles or links.
import type { ImageMetadata } from "astro";

import dataApiOne from "../assets/portfolio/gs_data_api_one.png";
import phoenix from "../assets/portfolio/gs_phoenix.png";
import risc from "../assets/portfolio/risc_rating.png";
import fpd from "../assets/portfolio/fpd.png";
import hbk from "../assets/portfolio/hbk.png";
import zonarCard from "../assets/portfolio/zonar1.png";
import zonarDetail from "../assets/portfolio/zonar2.png";
import flask from "../assets/portfolio/flask-app.png";
import aspire from "../assets/portfolio/sg_aspire.png";
import topazDelta from "../assets/portfolio/topaz_delta.png";
import epamAward from "../assets/awards/epam-impact-award-2025.png";
import ciiKaizenAward from "../assets/awards/cii-kaizen-championship-2021.png";
import logoHydPy from "../assets/events_logo/hydpy_metups.jpg";
import logoPyConIndia2023 from "../assets/events_logo/pycon_india_2023.png";
import logoPyConIndia2024 from "../assets/events_logo/pycon_india_2024.png";
import logoPyConIndia2025 from "../assets/events_logo/pycon_india_2025.png";
import logoPyConSG2025 from "../assets/events_logo/pycon_sg_2025.jpeg";
import logoPyConSG2026 from "../assets/events_logo/pycon_sg_2026.png";
import logoPyConfHyd2025 from "../assets/events_logo/pyconf_hyd_2025.jpeg";
import logoPyConfHyd2026 from "../assets/events_logo/pyconf_hyd_2026.jpg";
import logoPythonAsia2026 from "../assets/events_logo/python_asia_2026.png";
import logoTechScape2026 from "../assets/events_logo/techscape_2026.png";
import photoJerry from "../assets/testimonial_author/jerry_thomas.jpeg";
import photoTodd from "../assets/testimonial_author/todd_young.jpeg";
import photoMichael from "../assets/testimonial_author/michael_hearn.jpeg";
import photoVenkata from "../assets/testimonial_author/venkat_reddy.jpeg";
import photoVasanthi from "../assets/testimonial_author/vasanthi_annamalai.png";

export const profile = {
    name: "Vivek Keshore",
    role: "Software Architect",
    location: "Hyderabad, India",
    email: "vivek.keshore@gmail.com",
    rotatingWords: ["data platforms", "FastAPI backends", "AI Agents", "cloud native systems"],
};

// Brand icons are 24×24 paths from Simple Icons (CC0). `color` is the brand fill on hover; `ink` is the icon on top of it.
export const socials = [
    { label: "GitHub", href: "https://github.com/vivekkeshore/", color: "#ffffff", ink: "#0b0d12", icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vivek-keshore/", color: "#0a66c2", ink: "#ffffff", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
    { label: "Medium", href: "https://vivek-keshore.medium.com/", color: "#ffffff", ink: "#0b0d12", icon: "M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0Zm.198 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.16 1.065-.397 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004zm19.25 3.668c-1.086.023-1.733 1.323-1.813 3.124H24V9.298a1.378 1.378 0 0 0-.342-.047Zm-1.862 3.632c-.1 1.756.86 3.239 2.204 3.634v-3.634z" },
    { label: "YouTube", href: "https://www.youtube.com/c/BeAPythonista", color: "#ff0000", ink: "#ffffff", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
    { label: "Quora", href: "https://www.quora.com/profile/Vivek-Keshore", color: "#b92b27", ink: "#ffffff", icon: "M7.3799.9483A11.9628 11.9628 0 0 1 21.248 19.5397l2.4096 2.4225c.7322.7362.21 1.9905-.8272 1.9905l-10.7105.01a12.52 12.52 0 0 1-.304 0h-.02A11.9628 11.9628 0 0 1 7.3818.9503Zm7.3217 4.428a7.1717 7.1717 0 1 0-5.4873 13.2512 7.1717 7.1717 0 0 0 5.4883-13.2511Z" },
    { label: "X", href: "https://twitter.com/VivekKeshore", color: "#ffffff", ink: "#0b0d12", icon: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" },
];

export type TalkCategory = "conference" | "meetup" | "corporate";

export interface Talk {
    event: string;
    /** "YYYY-MM" */
    date: string;
    title: string;
    kind: "talk" | "workshop";
    category: TalkCategory;
    international?: boolean;
    href?: string;
    /** Event logo, shown on a white tile. */
    logo?: ImageMetadata;
    /** "cover" for full-bleed square artwork (e.g. dark backgrounds); defaults to "contain". */
    logoFit?: "contain" | "cover";
    /** Banner-shaped logos get a wider tile instead of being cropped to a square. */
    logoWide?: boolean;
}

// Newest first.
export const talks: Talk[] = [
    {
        event: "EPAM TechScape",
        date: "2026-09",
        title: "Agentic AI Architecture Patterns",
        kind: "talk",
        category: "corporate",
        href: "https://lnkd.in/p/dXnxjyJp",
        logo: logoTechScape2026,
        logoFit: "cover",
        logoWide: true,
    },
    {
        event: "PyCon Singapore",
        date: "2026-06",
        title: "How to Write Terrible Python Code (And Why It Works… Until It Doesn't)",
        kind: "talk",
        category: "conference",
        international: true,
        href: "https://pycon.sg/speakers",
        logo: logoPyConSG2026,
    },
    {
        event: "Python Asia (PyCon APAC)",
        date: "2026-03",
        title: "Under the Hood: Hacking Python Data Types for Fun and Power",
        kind: "talk",
        category: "conference",
        international: true,
        href: "https://pretalx.com/python-asia-2026/talk/DADSMZ/",
        logo: logoPythonAsia2026,
    },
    {
        event: "PyConf Hyderabad",
        date: "2026-03",
        title: "Python Concurrency Chaos: Async, Threads, GIL-free, and Beyond",
        kind: "talk",
        category: "conference",
        href: "https://2026.pyconfhyd.org/speakers/vivek-keshore",
        logo: logoPyConfHyd2026,
        logoFit: "cover",
    },
    {
        event: "PyCon India",
        date: "2025-09",
        title: "FastAPI for Production: Patterns and Architecture in Practice",
        kind: "workshop",
        category: "conference",
        href: "https://cfp.in.pycon.org/2025/talk/LHLX8U/",
        logo: logoPyConIndia2025,
        logoFit: "cover",
    },
    {
        event: "PyCon India",
        date: "2025-09",
        title: "Surprises, Pitfalls, and Patterns: Learnings from Interviewing 400+ Developers",
        kind: "talk",
        category: "conference",
        href: "https://cfp.in.pycon.org/2025/talk/L8AUWL/",
        logo: logoPyConIndia2025,
        logoFit: "cover",
    },
    {
        event: "PyCon Singapore",
        date: "2025-06",
        title: "Boosting API Reliability: Property-Based Testing in Action",
        kind: "talk",
        category: "conference",
        international: true,
        href: "https://pythonsingapore.github.io/pyconsg-2025/schedule.html",
        logo: logoPyConSG2025,
    },
    {
        event: "HydPy Meetup",
        date: "2025-06",
        title: "Under the Hood: Python Data Types",
        kind: "talk",
        category: "meetup",
        href: "https://www.meetup.com/hydpygroup/events/308039337/",
        logo: logoHydPy,
        logoFit: "cover",
    },
    {
        event: "Softobiz Learning Quarter",
        date: "2025-05",
        title: "Web API Security Practices",
        kind: "talk",
        category: "corporate",
    },
    {
        event: "Softobiz Tech Quarter",
        date: "2025-03",
        title: "Advanced Prompt Engineering",
        kind: "talk",
        category: "corporate",
    },
    {
        event: "PyConf Hyderabad",
        date: "2025-02",
        title: "From Raw to Reliable: Automated Data Validation with Great Expectations",
        kind: "talk",
        category: "conference",
        href: "https://2025.pyconfhyd.org/speakers/vivek-keshore",
        logo: logoPyConfHyd2025,
    },
    {
        event: "HydPy Meetup",
        date: "2025-01",
        title: "API Testing with Schemathesis and Hypothesis",
        kind: "talk",
        category: "meetup",
        href: "https://www.meetup.com/hydpygroup/events/305325392/",
        logo: logoHydPy,
        logoFit: "cover",
    },
    {
        event: "PyCon India",
        date: "2024-09",
        title: "From Zero to Backend Hero: Creating Full-Featured Apps with FastAPI",
        kind: "workshop",
        category: "conference",
        href: "https://in.pycon.org/cfp/2024/proposals/from-zero-to-backend-hero-creating-full-featured-apps-with-fastapi~aADQz/",
        logo: logoPyConIndia2024,
    },
    {
        event: "PyCon India",
        date: "2023-08",
        title: "From Novice to Virtuoso: Mastering Object-Oriented Python in 3 Hours",
        kind: "workshop",
        category: "conference",
        href: "https://in.pycon.org/cfp/pycon-india-2023/proposals/from-novice-to-virtuoso-mastering-object-oriented-python-in-3-hours~dL9gX/",
        logo: logoPyConIndia2023,
    },
];

export const facts = [
    { label: "Currently", value: "Software Architect, EPAM" },
    { label: "Education", value: "M.Tech, IIIT Hyderabad" },
    { label: "Tech speaker", value: "PyCon India · SG · APAC" },
    { label: "Creator", value: "Be A Pythonista" },
];

export interface Project {
    id: string;
    title: string;
    /** Rendered as HTML so titles can carry marks like ™. */
    titleHtml?: string;
    eyebrow: string;
    /** One-line hook used on cards. */
    tagline: string;
    /** Longer pitch used on featured cards. */
    summary?: string;
    metrics?: { label: string; value: string }[];
    tags?: string[];
    cardImage?: ImageMetadata;
    cardAlt?: string;
    detailImage?: ImageMetadata;
    detailAlt?: string;
    /** Case-study paragraphs shown in the side panel. */
    details: string[];
    /** Bullet points shown under the paragraphs in the side panel. */
    highlights?: string[];
    link?: { label: string; href: string };
    /** Featured projects get a full stacking card; the rest go in the bento grid. */
    featured?: boolean;
    wide?: boolean;
    /** Use the animated pipeline diagram instead of a screenshot. */
    pipeline?: { name: string; note: string }[];
    /** Bespoke architecture diagram; with a cardImage too, the card toggles between the two. */
    diagram?: "topaz-delta";
}

export const projects: Project[] = [
    {
        id: "topaz-delta",
        title: "Topaz Delta",
        eyebrow: "EPAM Systems · AI-enabled hardware test platform",
        tagline: "AI-enabled hardware test platform with LLM root-cause analysis and MCP",
        summary:
            "A platform for hardware test engineers to build, schedule and run automated test workflows on on-prem, cloud and physical test machines with AI that diagnoses failed runs and lets assistants drive the platform.",
        metrics: [
            { label: "Runs on", value: "On-prem · Cloud · Physical" },
            { label: "AI services", value: "RCA · MCP · Foundry" },
        ],
        tags: ["Python", "FastAPI", "FastMCP", "GenAI", "LLMs", "MCP", "PostgreSQL", "Celery", "Docker", "AWS"],
        diagram: "topaz-delta",
        cardImage: topazDelta,
        cardAlt: "Topaz Delta task dashboard with run status history for each test task",
        detailImage: topazDelta,
        detailAlt: "Topaz Delta task dashboard",
        details: [
            "Designed and implemented the platform for hardware test engineers to build, schedule and run automated test workflows on on-prem, cloud and physical test machines. Runs can start manually, on a schedule or from GitHub events.",
        ],
        highlights: [
            "Designed the architecture of the API server, compute service and node agent, covering task and workflow orchestration, versioning, permissions and audit trails.",
            "Integrated with GitHub webhooks, Slack, email, LDAP, AWS, Artifactory and internal crash-analysis and compliance services.",
            "Designed and implemented AI root-cause analysis of failed runs. An LLM agent reads the run's logs and code, writes a diagnosis and classifies the failure so admins can triage it and track failure trends in Grafana.",
            "Designed Delta MCP, a Model Context Protocol server that lets AI assistants (Claude Code, Roo Code and others) create, run, schedule and debug tasks, with LDAP sign-in.",
            "Designed and implemented Foundry, a repository indexing and search service that gives AI agents context about each codebase, that enables the test engineers to create custom application for their specific use case in natural language.",
            "Built per-task runtime selection (MATLAB, Python, SDK) and fixed all security scan findings rated Blocker, Critical or High.",
        ],
        featured: true,
    },
    {
        id: "data-api-one",
        title: "Data API One",
        eyebrow: "Green Street · Commercial real estate",
        tagline: "FastAPI platform serving commercial real-estate data",
        summary:
            "A cloud-native FastAPI platform that lets investors pull Green Street's best-in-class CRE data straight into underwriting models, asset-management tools and data-science workflows.",
        metrics: [
            { label: "Data series", value: "4,000+" },
            { label: "Endpoints", value: "120+" },
            { label: "Coverage", value: "US + EU" },
        ],
        tags: ["FastAPI", "SQLAlchemy", "MySQL", "Redis", "AWS", "pytest"],
        cardImage: dataApiOne,
        cardAlt: "Green Street website showcasing its data platform",
        detailImage: dataApiOne,
        detailAlt: "Green Street website",
        details: [
            "Led a cloud-native platform, built from scratch, to change how clients run investment analyses in commercial real estate. It gives programmatic access to Green Street's best-in-class data: over 4,000 data series through 120+ endpoints across U.S. and Pan-European REIT and Data & Analytics products.",
            "The dataset spans NAVs, earnings, cap rates, IRRs, market grades, forward NOI projections and more. Clients plug it directly into underwriting models, asset-management platforms and data-science applications, automating queries so the latest numbers are always available on demand.",
        ],
        featured: true,
    },
    {
        id: "phoenix",
        title: "Phoenix",
        eyebrow: "Green Street · Platform modernisation",
        tagline: "245+ Celery tasks rebuilt on AWS-managed Airflow",
        summary:
            "Retired a home-grown Celery scheduler and rebuilt every task on AWS-managed Apache Airflow with automated CI/CD and a standard scaffold for every repository.",
        metrics: [
            { label: "Tasks rebuilt", value: "245+" },
            { label: "Repositories", value: "20+" },
            { label: "Architectures prototyped", value: "4" },
        ],
        tags: ["Airflow", "AWS MWAA", "ECS", "ECR", "S3", "FastAPI"],
        cardImage: phoenix,
        cardAlt: "Apache Airflow dashboard listing migrated DAGs",
        detailImage: phoenix,
        detailAlt: "Airflow DAG dashboard",
        details: [
            "Green Street ran hundreds of periodic and ad-hoc tasks across 20+ repositories on a custom Celery and Flower tool. It lacked role-based access, a shared dashboard and easy task management, and it was hard to scale or extend.",
            "Phoenix moved all of it to Apache Airflow, rewriting 245+ tasks as Airflow DAGs. The team researched and prototyped four candidate architectures, presented the trade-offs to the client, and delivered a cloud-native solution on AWS MWAA, ECS, ECR and S3 with automated CI/CD. A standard scaffold made adopting Airflow in each repository simple.",
            "In parallel, the team built APIs involving complex mathematical and geospatial calculations.",
        ],
        featured: true,
    },
    {
        id: "green",
        title: "GREEN Third Party",
        eyebrow: "Green Street · Data engineering",
        tagline: "Config-driven vendor ETL on Airflow",
        summary:
            "Automated ingestion of third-party property and transaction data. Any vendor, any cadence, plugged in through configuration instead of code.",
        metrics: [
            { label: "Feeds", value: "Daily → Monthly" },
            { label: "Regions", value: "US + EU" },
            { label: "Onboarding", value: "Config-driven" },
        ],
        tags: ["Airflow", "Python", "AWS", "MySQL"],
        pipeline: [
            { name: "Vendors", note: "US + EU feeds" },
            { name: "Validate", note: "Quality checks" },
            { name: "Transform", note: "Config rules" },
            { name: "Ingest", note: "Analyst-ready" },
        ],
        details: [
            "Green Street's real-estate intelligence relies on property and transaction data from many third-party vendors across the US and EU, delivered daily, weekly, bi-weekly or monthly. Collecting, validating, transforming and ingesting it was manual and slow.",
            "GREEN replaced that with cloud-native ETL pipelines on AWS and Airflow, plus a reusable, config-driven framework that brings any new or existing vendor into the system, removing manual work while staying friendly for the analysts who use the data.",
        ],
        featured: true,
    },
    {
        id: "risc",
        title: "RISC Rating System",
        titleHtml: "RISC Rating System<sup>™</sup>",
        eyebrow: "Healthcare · Supply chain",
        tagline: "Supply-chain analytics for critical pharmaceuticals",
        summary:
            "The first platform to use non-public, manufacturer-reported data to rate how resilient the supply of each critical drug really is.",
        metrics: [
            { label: "Granularity", value: "NDC-level" },
            { label: "Users", value: "Makers · GPOs · Hospitals" },
        ],
        cardImage: risc,
        cardAlt: "RISC Ratings portal homepage",
        detailImage: risc,
        detailAlt: "RISC Ratings portal",
        details: [
            "The first and only platform that uses non-public, manufacturer-reported data to provide supply-chain analytics at the NDC level.",
            "The portal lets pharmaceutical manufacturers and professionals from group purchasing organisations and health systems submit, edit and view supply-chain data for critical drugs. Each drug is rated by a computation that weighs the number of raw-material suppliers, geographic distribution, stock, shelf life and more, so buyers know how resilient their supply is.",
        ],
        featured: true,
    },
    {
        id: "fpd",
        title: "Field Pros Direct",
        eyebrow: "Insurance",
        tagline: "Real-time claims assignment, end to end",
        cardImage: fpd,
        detailImage: fpd,
        detailAlt: "Field Pros Direct website",
        details: [
            "An automated assignment platform that matches experienced field and desk adjusters and service providers with claims based on expertise and preferences, improving indemnity accuracy and cutting litigation costs.",
            "It covers the claim end to end: automated assignment, appointment scheduling, email and SMS communication, report generation, settlement and invoicing.",
        ],
        wide: true,
    },
    {
        id: "hbk",
        title: "HBK Capital",
        eyebrow: "Finance",
        tagline: "Data engine behind trading decisions",
        cardImage: hbk,
        detailImage: hbk,
        detailAlt: "HBK Capital website",
        details: [
            "Designed and built DImE, a data-processing engine for a US investment firm. It connects to many free and paid third-party providers, each with its own file and data formats, then processes, normalises and analyses the data used to make trades.",
        ],
    },
    {
        id: "zonar",
        title: "Zonar Systems",
        eyebrow: "Fleet",
        tagline: "Air-traffic control for trucks",
        cardImage: zonarCard,
        detailImage: zonarDetail,
        detailAlt: "Zonar Systems fleet dashboard",
        tags: ["Python", "Pyramid"],
        details: [
            "Built a web application from scratch in Python and Pyramid to control and monitor live traffic for ground-based vehicle fleets. It's like air-traffic control, but for trucks. The role included design discussions and data modelling.",
        ],
    },
    {
        id: "flask",
        title: "Flask API Starter Scaffold",
        eyebrow: "Open source",
        tagline: "New service in minutes",
        cardImage: flask,
        detailImage: flask,
        detailAlt: "Flask scaffold API documentation",
        details: [
            "A starter kit with everything configured, so a new project or proof of concept can start in minutes and every project follows the same standards and structure.",
            "Ships with user management, authentication and authorisation, security and encryption, caching, logging, Swagger, Celery and Celery Beat, Alembic migrations, Docker, a layered architecture and custom database seeding.",
        ],
        link: { label: "View on GitLab", href: "https://gitlab.com/vivek.keshore/python-flask-scaffold-template" },
    },
    {
        id: "aspire",
        title: "SG Aspire",
        eyebrow: "Internal tool",
        tagline: "Résumé parsing and candidate tracking",
        cardImage: aspire,
        detailImage: aspire,
        detailAlt: "SG Aspire profile search screen",
        details: [
            "Talent-acquisition teams spent hours manually searching and shortlisting résumés from many sources. SG Aspire reads incoming email, downloads résumés into a secure central OneDrive, and parses out phone, email, skills and experience so shortlisting is fast.",
            "It also acknowledges every candidate automatically and tracks each one through the interview process.",
        ],
    },
];

export interface Job {
    org: string;
    location?: string;
    /** Newest first. Dates are "YYYY-MM"; omit `end` for the current role. */
    roles: { title: string; start: string; end?: string }[];
    summary?: string;
    /** Contributions beyond client work, shown as tags. */
    contributions?: string[];
}

// Newest first. Tenures are computed from the dates at build time.
export const experience: Job[] = [
    {
        org: "EPAM Systems",
        location: "Hyderabad, India",
        roles: [{ title: "Software Architect - Python and Open Source", start: "2024-11" }],
        summary:
            "Architect of Topaz Delta, an AI-enabled hardware test platform with LLM root-cause analysis, an MCP server for AI assistants and codebase-aware agents.",
        contributions: ["Mentoring engineers", "Technical interviews", "Leading internal initiatives"],
    },
    {
        org: "SenecaGlobal",
        location: "Hyderabad, India",
        roles: [
            { title: "Architect - Python and Open Source", start: "2022-04", end: "2024-11" },
            { title: "Lead Python Developer", start: "2019-07", end: "2022-04" },
        ],
        summary:
            "Led end-to-end development of enterprise web products, data platforms and cloud-native pipelines for clients including Green Street.",
    },
    {
        org: "CES",
        location: "Hyderabad, India",
        roles: [
            { title: "Technical Lead", start: "2018-04", end: "2019-07" },
            { title: "Sr. Python Developer", start: "2017-03", end: "2018-04" },
        ],
        summary:
            "Collected, enriched and normalised financial data from many sources for trading desks placing trades in markets around the globe.",
    },
    {
        org: "GlobalLogic · Onsite at Google India",
        location: "Hyderabad, India",
        roles: [{ title: "Python Developer", start: "2015-06", end: "2017-03" }],
        summary:
            "Built and maintained web applications on Python frameworks and Google in-house technologies, including internal tools around ad revenue and the revenue impact of outages.",
    },
    {
        org: "Symphony Teleca",
        location: "Bangalore, India",
        roles: [{ title: "Python Development Engineer", start: "2013-10", end: "2015-06" }],
        summary:
            "Built a fleet management and tracking system from scratch for Zonar Systems, one of the largest fleet management firms in the USA.",
    },
    {
        org: "IBM",
        location: "Bangalore, India",
        roles: [{ title: "Application Developer", start: "2012-06", end: "2013-09" }],
        summary: "Supported General Motors' global warranty-claims web application.",
    },
];

export const marqueeRows = [
    ["Python", "FastAPI", "GenAI", "LLMs", "LangChain", "Flask", "Pydantic", "SQLAlchemy", "RAG", "Apache Airflow", "Celery", "AWS", "Docker", "PostgreSQL", "Redis", "Cassandra", "gRPC", "Great Expectations"],
    ["AI Agents", "MCP", "LangGraph", "MySQL", "MongoDB", "Agentic RAG", "MSSQL", "RabbitMQ", "FastMCP", "Protobuf", "Pandas", "pytest", "Swagger", "JWT", "OAuth", "CircuitPython", "Alembic", "CI/CD", "Linux"],
];

export const skillGroups = [
    { title: "Language & Frameworks", items: "Python · FastAPI · Flask · Pydantic · SQLAlchemy · CircuitPython" },
    { title: "Generative AI", items: "GenAI · LLMs · RAG · Prompt Engineering · LLM-based root-cause analysis" },
    { title: "Agentic AI", items: "AI Agents · Agentic RAG · LangChain · LangGraph · MCP · FastMCP · Agentic architecture patterns" },
    { title: "Data & Pipelines", items: "Apache Airflow · Celery · Great Expectations · Pandas · RabbitMQ · Redis" },
    { title: "Cloud & Infrastructure", items: "AWS (MWAA, Lambda, ECS, ECR, S3) · Docker · CI/CD · gRPC · REST · JWT · OAuth" },
    { title: "Databases", items: "PostgreSQL · MySQL · MSSQL · Cassandra · MongoDB" },
];

export interface Award {
    title: string;
    issuer: string;
    /** "Mon YYYY" or "YYYY", newest first. Recurring awards list one date per award received. */
    dates: string[];
    program?: string;
    /** Badge artwork; shown on a white medallion, so a white background is fine. */
    image?: ImageMetadata;
}

// Headline awards get their own card; recurring ones are shown as a tally.
export const awards: { highlights: Award[]; recurring: Award[] } = {
    highlights: [
        {
            title: "EPAM Impact Award - Value Creator",
            program: "CEO Awards",
            issuer: "EPAM India",
            dates: ["2025"],
            image: epamAward,
        },
        {
            title: "Best Kaizen for Productivity Development",
            program: "National Kaizen Circle",
            issuer: "Confederation of Indian Industry",
            dates: ["Feb 2022"],
            image: ciiKaizenAward,
        },
        {
            title: "Kaizen Championship Award - Productivity",
            program: "Kaizen Championship · Gold",
            issuer: "Confederation of Indian Industry",
            dates: ["Nov 2021"],
            image: ciiKaizenAward,
        },
    ],
    recurring: [
        {
            title: "RISE Instant Recognition",
            issuer: "SenecaGlobal",
            dates: ["Oct 2023", "Dec 2022", "Sep 2022", "Jul 2022", "Oct 2021", "Oct 2020"],
        },
        {
            title: "Bravo Instant Recognition",
            issuer: "SenecaGlobal",
            dates: ["Nov 2023", "Aug 2023", "Sep 2022", "Jul 2022", "Apr 2021"],
        },
        {
            title: "Pursuit of Excellence - Kaizen Award",
            issuer: "SenecaGlobal",
            dates: ["Mar 2024", "Mar 2024", "Aug 2022", "Sep 2021"],
        },
        {
            title: "Trumpet Award",
            issuer: "SenecaGlobal",
            dates: ["Sep 2021"],
        },
    ],
};

// Defined after `awards` so the award tally can be computed from it.
export const stats = [
    { value: 14, label: "Years with Python" },
    { value: talks.length, label: "Talks & workshops in 2 years" },
    { value: 750, label: "Interviews conducted in 2 years" },
    {
        value: [...awards.highlights, ...awards.recurring].reduce((n, a) => n + a.dates.length, 0),
        label: "Awards & recognitions",
    },
];

export interface Testimonial {
    id: string;
    name: string;
    title: string;
    relationship: string;
    /** "YYYY-MM-DD" */
    date: string;
    photo: ImageMetadata;
    /** Zoom into a face that isn't centred: face position in the photo ("x% y%") and zoom factor. */
    photoFocus?: string;
    photoZoom?: number;
    /** Verbatim sentence from the recommendation, shown large. */
    highlight: string;
    /** Full recommendation, verbatim, one entry per paragraph. */
    text: string[];
}

export const recommendationsUrl = "https://www.linkedin.com/in/vivek-keshore/details/recommendations/";

// LinkedIn recommendations, newest first. Quotes are verbatim.
export const testimonials: Testimonial[] = [
    {
        id: "jerry-thomas",
        name: "Jerry Thomas",
        title: "Vice President, Technology Advisory at SenecaGlobal",
        relationship: "Mentor",
        date: "2024-11-21",
        photo: photoJerry,
        highlight: "…one of the most inspiring leaders I’ve encountered.",
        text: [
            "I have had the privilege of working closely with Vivek Keshore, and I can confidently say he is one of the most inspiring leaders I’ve encountered. His ability to build a close-knit team and foster a collaborative, supportive environment is truly remarkable. Vivek not only brings people together but ensures they remain motivated and aligned toward a shared vision.",
            "What sets Vivek apart is his openness to exploration and innovation. He and his team are always ready to embrace new challenges, whether it’s participating in internal initiatives or representing the organization at external events like PyConf. This willingness to step out of their comfort zones speaks volumes about the culture of curiosity and excellence he cultivates.",
            "Vivek’s technical acumen is equally impressive. As an expert in Python, his depth of knowledge is unmatched, and he leads by example. Instead of merely directing from the sidelines, he rolls up his sleeves and works alongside his team, ensuring the best outcomes while mentoring others in the process.",
            "Any organization or team would be fortunate to have Vivek Keshore at the helm. He’s a leader who inspires, innovates, and delivers.",
        ],
    },
    {
        id: "todd-young",
        name: "Todd Young",
        title: "Financial Strategist · Analytics · Risk Management",
        relationship: "Client",
        date: "2022-07-01",
        photo: photoTodd,
        highlight: "Vivek does a great job of translating business needs and business processes to actions/technical needs.",
        text: [
            "I had the opportunity to work with Vivek on a SQL database and frontend for a startup that we needed help developing. Our internal team was illiterate in SQL, database architecture, etc, and it was great to have Vivek help guide us as we navigated that project.",
            "Vivek does a great job of translating business needs and business processes to actions/technical needs. From helping us install Postgres on our own computers, to writing views that he thought we would need (before we knew we would need them), he was there to help us along our journey. In a world of things we did not understand (SQL, APIs, Views, etc), it was great having Vivek know what we needed and help explain why we needed those things. It was an absolute pleasure working with Vivek and I look forward to hopefully working with him on another project sometime in the future.",
        ],
    },
    {
        id: "michael-hearn",
        name: "Michael Hearn",
        title: "AI-Driven Innovation Leader · USMC Veteran",
        relationship: "Client",
        date: "2021-06-30",
        photo: photoMichael,
        highlight: "Vivek is a tremendous engineer well versed in Python and other programming languages.",
        text: [
            "Vivek is a tremendous engineer well versed in Python and other programming languages. Working with him is a wonderful experience. I wouldn't hesitate to work with him on other projects.",
        ],
    },
    {
        id: "venkata-reddy-mulam",
        name: "Venkata Reddy Mulam",
        title: "AI & Machine Learning Leader · Manager, Data Science at RELX",
        relationship: "Managed Vivek directly",
        date: "2016-05-15",
        photo: photoVenkata,
        highlight: "I have only optimistic predictions for his career trajectory.",
        text: [
            "I've worked alongside Vivek for close to two years. In those two years, I've seen him not only excel at the core elements of his job -- like development using Python and geo spatial related tasks -- but also learn other tasks that extend well beyond the scope of his role, like design discussions, tasks planning, and even dealing with clients. I certainly miss working and having fun with him every day. I have only optimistic predictions for his career trajectory.",
        ],
    },
    {
        id: "vasanthi-annamalai",
        name: "Vasanthi Annamalai",
        title: "PhD Research Scholar · Founder & Director, Cloudintuit Technology Solutions",
        relationship: "Managed Vivek directly",
        date: "2015-02-18",
        photo: photoVasanthi,
        photoFocus: "33% 35%",
        photoZoom: 2.6,
        highlight: "…very successful in developing and deploying complicated tasks in short duration of time.",
        text: [
            "Vivek is very detail oriented, hard working guy. His thinking abilities are unique and is very successful in developing and deploying complicated tasks in short duration of time. I wish Vivek all the very best and I am sure he would grow up in ladder in a very shorter pace.",
        ],
    },
];

export const community = [
    {
        title: "Tech Speaker",
        text: "Talks and hands-on workshops at PyCons, meetups and tech events.",
        icon: "mic",
        href: "#talks",
        cta: "See talks",
    },
    {
        title: "Be A Pythonista",
        text: "A YouTube channel making Python approachable.",
        icon: "video",
        href: "https://www.youtube.com/c/BeAPythonista",
        cta: "Watch",
    },
    {
        title: "Writing",
        text: "Articles on Python and engineering on Medium and Quora.",
        icon: "pen",
        href: "https://vivek-keshore.medium.com/",
        cta: "Read",
    },
    {
        title: "Open Source",
        text: "Contributions to open-source projects and PyPI libraries.",
        icon: "code",
        href: "https://github.com/vivekkeshore/",
        cta: "GitHub",
    },
] as const;
