import {
  caseStudies,
  getCaseStudyVisual,
  getCaseStudyBySlug,
  getRelatedCaseStudies,
  type CaseStudy,
  type CaseStudyFilterTag
} from "@/content/case-studies";

export type NavItem = {
  href: string;
  label: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type Service = {
  title: string;
  audience: string;
  build: string;
  outcome: string;
  bullets: string[];
  tags: string[];
};

export type SiteEmails = {
  hello: string;
  inquiry: string;
  support: string;
  careers: string;
};

export type { CaseStudy, CaseStudyFilterTag };
export { caseStudies, getCaseStudyBySlug, getRelatedCaseStudies, getCaseStudyVisual };

const emails = {
  hello: "hello@mentallionsystems.com",
  inquiry: "inquiry@mentallionsystems.com",
  support: "support@mentallionsystems.com",
  careers: "careers@mentallionsystems.com"
} satisfies SiteEmails;

export const site = {
  name: "Mentallion Systems",
  tagline: "We automate the work. You run the business.",
  description:
    "Mentallion Systems builds AI automation systems, workflow software, and production-grade platforms for businesses that want real results, not demos.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mentallionsystems.com",
  ogImage: "/opengraph-image",
  location: "Remote",
  email: emails.hello,
  emails,
  whatsapp: "https://wa.me/923001234567",
  availability: "Taking new projects - May 2026",
  heroImageUrl:
    "https://images.pexels.com/photos/4623354/pexels-photo-4623354.jpeg?cs=srgb&dl=pexels-ketut-subiyanto-4623354.jpg&fm=jpg",
  nav: [
    { href: "/case-studies", label: "Case Studies" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ] satisfies NavItem[],
  trustStrip: "Serving businesses globally across industries, including the US, UK, and Gulf.",
  hero: {
    title: "Your team is spending hours every week on work that software could handle in seconds.",
    body:
      "We build AI-powered automation systems and production-grade software that take that work off your plate for good. From business workflows to full-scale SaaS platforms, we engineer things that work in the real world, not just in demos."
  },
  stats: [
    { value: "19+", label: "Production systems live" },
    { value: "$10M+", label: "Funded clients served" },
    { value: "7+", label: "Industries automated" },
    { value: "95%", label: "Average manual work reduced" }
  ] satisfies Stat[],
  caseStudies,
  services: [
    {
      title: "Business Process Automation",
      audience:
        "For teams buried in data entry, document processing, approvals, and repetitive work that should not depend on a person doing the same task all day.",
      build:
        "We build AI-powered workflows and automation pipelines that process documents, sync data, trigger actions, and keep humans in the loop where judgment still matters.",
      outcome:
        "Work gets done faster, with fewer errors, and your team spends its time on the parts of the business that actually need people.",
      bullets: [
        "Workflow mapping before we touch the tech",
        "Document and data processing pipelines",
        "Human review checkpoints where accuracy matters"
      ],
      tags: ["Legacy rescue", "Greenfield automation", "AI layer on existing system"]
    },
    {
      title: "AI Agent Systems",
      audience:
        "For teams that need software to research, analyze, summarize, or support decisions instead of just following fixed rules.",
      build:
        "We design multi-step AI systems using the right models for the job, then wrap them in production-ready backends that can handle real data, real users, and real failure cases.",
      outcome:
        "Work that used to take hours takes minutes, and decisions happen with better context instead of guesswork.",
      bullets: [
        "Agent orchestration around real business tasks",
        "Prompt, retrieval, and evaluation design",
        "Guardrails for latency, cost, and reliability"
      ],
      tags: ["Greenfield build", "AI layer on existing product"]
    },
    {
      title: "Custom SaaS and Software Products",
      audience:
        "For founders and operators who need a product that matches their exact workflow or who inherited a codebase they no longer trust.",
      build:
        "We handle architecture, backend, frontend, data, and infrastructure for products that need to survive real usage from day one.",
      outcome:
        "You get software that works, that you own, and that your users can rely on after launch.",
      bullets: [
        "Product architecture and delivery planning",
        "Frontend, backend, and infrastructure buildout",
        "Production hardening and launch support"
      ],
      tags: ["Greenfield build", "Legacy rescue", "SaaS product"]
    },
    {
      title: "Adding AI to Existing Systems",
      audience:
        "For teams with a working product that needs smarter search, automation, recommendations, or processing without a six-month rebuild.",
      build:
        "We add a focused AI layer to what you already have, choose the model based on the actual constraints, and integrate carefully so the core system keeps working.",
      outcome:
        "Your product becomes meaningfully more capable without wrecking what already works.",
      bullets: [
        "Targeted model selection for the problem",
        "Clean integration with current architecture",
        "Measured rollout with testing and fallbacks"
      ],
      tags: ["AI layer on existing product"]
    }
  ] satisfies Service[],
  testimonials: [
    {
      quote:
        "They understood our business before they wrote a single line of code. Most teams build first and correct later. Mentallion Systems did the opposite.",
      source: "Founder, Series A LegalTech startup"
    },
    {
      quote:
        "What we thought would take a dedicated person weeks is now handled in hours of processing time. We have not looked back.",
      source: "Operations Manager, retail business"
    },
    {
      quote:
        "They gave us a realistic scope, stuck to it, and the system has been running without issues since launch.",
      source: "CTO, EdTech platform"
    }
  ]
};
