export type CaseStudyFilterTag = "ai" | "saas" | "local" | "enterprise";

export type CaseStudyCategory =
  | "Automation"
  | "AI Agents"
  | "SaaS"
  | "Healthcare"
  | "Data";

export type CaseStudyEngagement =
  | "Greenfield build"
  | "Legacy rescue"
  | "AI layer";

export type CaseStudyMetric = {
  value: string;
  label: string;
};

type SourceCaseStudy = {
  slug: string;
  title: string;
  summary: string;
  metric: string;
  outcome: string;
  category: CaseStudyCategory;
  engagement: CaseStudyEngagement;
  client?: string;
  timeline?: string;
  tags?: string[];
  filterTags?: CaseStudyFilterTag[];
  problem?: string;
  build?: string;
  results?: string;
  metrics?: CaseStudyMetric[];
  imagePosition?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  domain: string;
  industry: string;
  timeline: string;
  clientType: string;
  summary: string;
  imageUrl: string;
  imagePosition: string;
  bannerImageUrl: string;
  services: string[];
  techStack: string[];
  metrics: CaseStudyMetric[];
  mainPoints: string[];
  overview: string;
  challenge: string;
  solution: string;
  result: string;
  quote?: string;
  quoteBy?: string;
  relatedSlugs: string[];

  /**
   * These fields are kept so your older sections/components can still use
   * the original site.ts structure if needed.
   */
  metric: string;
  outcome: string;
  category: CaseStudyCategory;
  engagement: CaseStudyEngagement;
  client?: string;
  tags?: string[];
  filterTags?: CaseStudyFilterTag[];
  problem?: string;
  build?: string;
  results?: string;
};

const caseStudyImageBasePath = "/images";

const sourceCaseStudies = [
  {
    slug: "legaltech-research-pipeline",
    title: "LegalTech research pipeline",
    summary:
      "Built an AI-assisted research workflow that cut manual case analysis and citation gathering from hours to minutes.",
    metric: "80% faster research",
    outcome:
      "Analysts moved from repetitive search loops to higher-value review work.",
    category: "AI Agents",
    engagement: "AI layer",
    client: "Series A LegalTech startup | $10M funded",
    timeline: "16 weeks",
    tags: ["LangChain", "Claude", "GPT-4o", "FastAPI", "Next.js"],
    filterTags: ["ai", "enterprise"],
    problem:
      "Legal teams were spending most of a day cross-referencing court records, statutes, and case law across disconnected sources.",
    build:
      "We built a multi-agent research workflow with model orchestration, legal-source integrations, and a production-ready backend that could survive real usage.",
    results:
      "Research time dropped sharply and the team spent more of its time on analysis and argument quality instead of search loops.",
    metrics: [
      { value: "80%", label: "Faster research" },
      { value: "5+", label: "Models orchestrated" }
    ]
  },
  {
    slug: "retail-record-digitization",
    title: "Retail paper record digitization",
    summary:
      "Turned months of handwritten inventory and sales records into a searchable system with human review checkpoints.",
    metric: "100% of paper records digitized",
    outcome:
      "The client replaced weeks of back-office cleanup with a reliable daily pipeline.",
    category: "Data",
    engagement: "Greenfield build",
    client: "Multi-branch retail business | Urdu + English operations",
    timeline: "10 weeks",
    tags: ["Data platform", "Branch sync", "Multilingual AI"],
    filterTags: ["ai", "local"],
    problem:
      "Orders, customer history, and business data were trapped in bill books and paper ledgers, which made search and reporting almost impossible.",
    build:
      "We replaced paper-heavy workflows with a custom platform and an assistant that could interpret business data in the team's working language.",
    results:
      "The business moved away from manual record-keeping and finally had a live, searchable view across branches.",
    metrics: [
      { value: "100%", label: "Paper records removed" },
      { value: "Real-time", label: "Branch visibility" }
    ]
  },
  {
    slug: "edtech-grading-automation",
    title: "EdTech grading dashboard",
    summary:
      "Created an automated grading and review workflow for a learning platform handling high student volume.",
    metric: "95% less grading time",
    outcome:
      "Teachers spent their time on feedback quality instead of repetitive scoring.",
    category: "Automation",
    engagement: "AI layer",
    client: "EdTech platform | High-volume assessment workflow",
    timeline: "7 weeks",
    tags: ["Assessment AI", "Teacher workflow", "Review dashboard"],
    filterTags: ["ai", "enterprise"],
    problem:
      "Manual grading was eating teacher time and slowing feedback loops for students.",
    build:
      "We built an automated grading and review workflow that handled repetitive scoring while preserving space for teacher oversight.",
    results:
      "Most grading time disappeared, and teachers could focus on better feedback instead of repetitive marking.",
    metrics: [
      { value: "95%", label: "Grading time removed" },
      { value: "Faster", label: "Student feedback cycles" }
    ]
  },
  {
    slug: "healthcare-hipaa-platform",
    title: "HIPAA-compliant patient operations platform",
    summary:
      "Engineered a secure healthcare workflow platform with protected records, audit trails, and role-based access.",
    metric: "98% uptime at scale",
    outcome:
      "The team got a platform they could trust in production, not just a fragile prototype.",
    category: "Healthcare",
    engagement: "Greenfield build",
    client: "Healthcare operations team | Secure patient workflows",
    timeline: "12 weeks",
    tags: ["HIPAA", "RBAC", "Audit trails", "Analytics"],
    filterTags: ["enterprise"],
    problem:
      "The client needed a compliant, reliable way to manage healthcare operations without relying on brittle internal tools.",
    build:
      "We engineered a secure workflow platform with access controls, auditability, and production-minded infrastructure from the start.",
    results:
      "They got a system strong enough for real operations instead of a prototype that would need replacing later.",
    metrics: [
      { value: "98%", label: "Uptime at scale" },
      { value: "Secure", label: "Protected record access" }
    ]
  },
  {
    slug: "hotel-booking-optimization",
    title: "Hotel booking optimization layer",
    summary:
      "Added smarter recommendations and booking workflow automation to an existing hospitality product.",
    metric: "35% booking conversion increase",
    outcome:
      "The client improved revenue without rebuilding the product from scratch.",
    category: "AI Agents",
    engagement: "AI layer",
    client: "Hospitality platform | High-traffic booking flow",
    timeline: "8 weeks",
    tags: ["Recommendation engine", "Booking UX", "Revenue optimization"],
    filterTags: ["ai", "enterprise"],
    problem:
      "The booking flow was losing intent because it was not smart enough about recommendations and timing.",
    build:
      "We layered AI-guided recommendations and booking automation onto the existing product without forcing a full rebuild.",
    results:
      "Conversion improved and the business captured more value from traffic it already had.",
    metrics: [
      { value: "35%", label: "Booking lift" },
      { value: "No rebuild", label: "Existing system preserved" }
    ]
  },
  {
    slug: "personality-saas-rescue",
    title: "Personality SaaS infrastructure rescue",
    summary:
      "Stabilized a shaky production codebase, cleaned deployment issues, and rebuilt the critical workflow path.",
    metric: "98% uptime maintained",
    outcome:
      "A product that was slipping became dependable enough to keep growing users.",
    category: "SaaS",
    engagement: "Legacy rescue",
    client: "Consumer SaaS | Thousands of active users",
    timeline: "12 weeks",
    tags: ["AWS Lambda", "Python", "React", "Billing"],
    filterTags: ["ai", "saas"],
    problem:
      "The product was suffering from infrastructure and workflow instability that made growth risky.",
    build:
      "We stabilized the architecture, cleaned the backend path, and restored confidence in the product's production setup.",
    results:
      "The SaaS became dependable enough to keep scaling instead of forcing the team into constant firefighting.",
    metrics: [
      { value: "98%", label: "Uptime" },
      { value: "70%", label: "Faster time-to-insight" }
    ]
  },
  {
    slug: "document-automation-prism",
    title: "PRISM document automation pipeline",
    summary:
      "Built a document ingestion pipeline that classified, extracted, and routed high-volume records automatically.",
    metric: "8 minutes instead of 3 weeks",
    outcome:
      "Operations teams got searchable outputs and cleaner downstream decisions.",
    category: "Automation",
    engagement: "Greenfield build",
    client: "Operations-heavy business | Hundreds of docs per week",
    timeline: "6 weeks",
    tags: ["Document AI", "OCR", "Pipeline automation"],
    filterTags: ["ai", "enterprise", "local"],
    problem:
      "A full-time person was manually transferring data from physical documents into a digital system just to keep two workflows in sync.",
    build:
      "We built an automated scanning and extraction pipeline that pushed structured data into the existing dashboard without a human in the middle.",
    results:
      "Backlogs cleared, ongoing manual entry disappeared, and the team could use that capacity elsewhere.",
    metrics: [
      { value: "Weeks", label: "Backlog cleared fast" },
      { value: "Zero", label: "Manual entry ongoing" }
    ]
  },
  {
    slug: "operations-ai-manager",
    title: "Local business AI manager",
    summary:
      "Developed an internal assistant for routine operational questions, document lookups, and daily summaries.",
    metric: "70% fewer manual status checks",
    outcome:
      "Managers stopped chasing routine updates and focused on the exceptions that mattered.",
    category: "AI Agents",
    engagement: "AI layer",
    client: "Physical retail operators | Local market",
    timeline: "10 weeks",
    tags: ["AI assistant", "Multilingual", "Operations"],
    filterTags: ["ai", "local"],
    problem:
      "Managers were wasting time on repetitive lookups, updates, and operational checks that could have been handled automatically.",
    build:
      "We created an internal assistant that could answer routine business questions, surface data, and summarize what needed attention.",
    results:
      "Leaders spent less time chasing status and more time making decisions where their judgment mattered.",
    metrics: [
      { value: "70%", label: "Fewer status checks" },
      { value: "Daily", label: "Operational summaries" }
    ]
  },
  {
    slug: "founder-workflow-saas",
    title: "Founder workflow SaaS launch",
    summary:
      "Designed and shipped a full-stack product from zero with admin tooling, billing logic, and a polished user flow.",
    metric: "Launched in 10 weeks",
    outcome:
      "The founders shipped with a stable foundation instead of a rushed MVP rewrite later.",
    category: "SaaS",
    engagement: "Greenfield build",
    client: "Founder-led product team | New SaaS launch",
    timeline: "10 weeks",
    tags: ["Full-stack", "Admin tooling", "Launch architecture"],
    filterTags: ["saas"],
    problem:
      "The founders needed to get to market quickly without creating a foundation they would regret later.",
    build:
      "We handled architecture, delivery, admin tooling, and product flow with launch-readiness in mind from day one.",
    results:
      "They launched fast, but with a platform that could keep growing instead of demanding an immediate rewrite.",
    metrics: [
      { value: "10 weeks", label: "Launch timeline" },
      { value: "Stable", label: "Foundation from day one" }
    ]
  },
  {
    slug: "autonomous-brand-audit-platform",
    title: "Autonomous brand audit platform",
    summary:
      "Built a multi-step AI system that turns a single URL into a structured brand audit, audience breakdown, and growth plan.",
    metric: "8 minutes for a full audit",
    outcome:
      "Strategy work that used to take weeks became repeatable, affordable, and fast enough to use in sales and delivery.",
    category: "AI Agents",
    engagement: "Greenfield build",
    client: "Agency tool | Replaces weeks of manual strategy work",
    timeline: "8 weeks",
    tags: ["FastAPI", "Claude", "Gemini", "Docker"],
    filterTags: ["ai", "saas"],
    problem:
      "Brand audits were expensive, inconsistent, and tied to weeks of consultant time.",
    build:
      "We built a layered autonomous pipeline that takes one URL and returns a structured strategy output with clear growth priorities.",
    results:
      "An expensive consulting workflow became fast enough to use repeatedly and cheap enough to scale.",
    metrics: [
      { value: "8 min", label: "Full audit time" },
      { value: "100%", label: "Automated output" }
    ]
  },
  {
    slug: "visual-marketplace-listing-tool",
    title: "AI-powered visual marketplace listing tool",
    summary:
      "Created a listing assistant that transforms product photos and rough inputs into cleaner, faster marketplace-ready listings.",
    metric: "Minutes instead of manual listing prep",
    outcome:
      "Sellers reduced repetitive listing work and published inventory more consistently across channels.",
    category: "AI Agents",
    engagement: "AI layer",
    client: "Marketplace sellers | Visual listing workflow",
    timeline: "6 weeks",
    tags: ["Image understanding", "Listing assistant", "Marketplace ops"],
    filterTags: ["ai", "local"],
    problem:
      "Preparing marketplace listings by hand was slow, repetitive, and hard to keep consistent at volume.",
    build:
      "We built a listing assistant that uses product photos and rough inputs to generate cleaner listings faster.",
    results:
      "Sellers published more inventory with less repetitive prep work and more consistent listing quality.",
    metrics: [
      { value: "Minutes", label: "Listing prep time" },
      { value: "Higher", label: "Listing consistency" }
    ]
  },
  {
    slug: "estate-sales-resale-marketplace",
    title: "Digital resale marketplace for estate sales",
    summary:
      "Moved a physical estate-sales workflow into a searchable digital resale experience with structured inventory and buyer access.",
    metric: "Offline inventory moved online",
    outcome:
      "The business expanded beyond in-person sales and gained a usable system for managing resale operations digitally.",
    category: "SaaS",
    engagement: "Greenfield build",
    client: "Resale business | Physical-to-digital transition",
    timeline: "9 weeks",
    tags: ["Marketplace", "Inventory system", "Buyer discovery"],
    filterTags: ["saas", "local"],
    problem:
      "The business depended on physical estate-sale workflows that limited scale and discoverability.",
    build:
      "We digitized the resale flow into a searchable marketplace with structured inventory and buyer-facing access.",
    results:
      "The team could operate beyond in-person events and manage inventory through a proper digital system.",
    metrics: [
      { value: "Digital", label: "Resale workflow" },
      { value: "Broader", label: "Buyer reach" }
    ]
  },
  {
    slug: "used-item-price-identification",
    title: "AI-powered price identification for used marketplace items",
    summary:
      "Built an AI-assisted valuation flow to estimate fair prices for second-hand items before they hit the marketplace.",
    metric: "Faster pricing decisions",
    outcome:
      "Sellers got a clearer pricing baseline, reducing guesswork and improving listing confidence.",
    category: "AI Agents",
    engagement: "AI layer",
    client: "Marketplace resale workflow | Used-item pricing",
    timeline: "5 weeks",
    tags: ["Valuation AI", "Marketplace pricing", "Seller tooling"],
    filterTags: ["ai", "local"],
    problem:
      "Sellers had no reliable baseline for pricing second-hand items and were losing time to guesswork.",
    build:
      "We built an AI-supported pricing workflow that estimates likely value before an item is listed.",
    results:
      "Pricing became faster and more defensible, which helped sellers move inventory with more confidence.",
    metrics: [
      { value: "Faster", label: "Pricing decisions" },
      { value: "Better", label: "Listing confidence" }
    ]
  },
  {
    slug: "marketplace-item-upload-automation",
    title: "RPA-based marketplace item upload automation",
    summary:
      "Automated repetitive inventory upload work for marketplace listings with an RPA-style submission pipeline.",
    metric: "Bulk uploads without manual re-entry",
    outcome:
      "Teams stopped spending hours on repetitive listing operations and kept catalog updates moving reliably.",
    category: "Automation",
    engagement: "Legacy rescue",
    client: "Marketplace operations | Listing upload workflow",
    timeline: "6 weeks",
    tags: ["RPA", "Upload automation", "Catalog ops"],
    filterTags: ["local", "enterprise"],
    problem:
      "Teams were manually entering the same marketplace item data over and over again across listing workflows.",
    build:
      "We automated the upload path so structured item data could move into listings without repetitive manual entry.",
    results:
      "Catalog operations sped up and staff stopped burning hours on repetitive submission tasks.",
    metrics: [
      { value: "Bulk", label: "Upload workflow" },
      { value: "Less", label: "Manual re-entry" }
    ]
  },
  {
    slug: "subscription-lifecycle-management",
    title: "Subscription lifecycle management platform",
    summary:
      "Built a dashboard for tracking plans, renewals, usage, and spend so teams could act before subscriptions quietly renewed.",
    metric: "Real-time spend visibility",
    outcome:
      "Finance and operations teams gained control over renewals, cancellations, and wasted software spend.",
    category: "SaaS",
    engagement: "Greenfield build",
    client: "Finance and operations teams | Subscription control",
    timeline: "7 weeks",
    tags: ["SaaS dashboard", "Usage analytics", "Renewal alerts"],
    filterTags: ["saas", "enterprise"],
    problem:
      "Subscriptions were being tracked across inboxes, spreadsheets, and memory, which meant missed renewal windows and wasted spend.",
    build:
      "We created a unified dashboard for plan tracking, usage visibility, and alerts before billing events hit.",
    results:
      "Teams got control over renewal timing and recovered budget by acting before tools quietly renewed.",
    metrics: [
      { value: "Live", label: "Spend visibility" },
      { value: "Smarter", label: "Renewal actions" }
    ]
  },
  {
    slug: "digital-twin-persona-system",
    title: "Autonomous digital twin AI persona system",
    summary:
      "Designed a personalized AI assistant that mirrors a leader's tone, preferences, and communication style for continuity.",
    metric: "24/7 communication layer",
    outcome:
      "Stakeholders got faster responses while preserving the individual's voice and decision style.",
    category: "AI Agents",
    engagement: "Greenfield build",
    client: "Executive communication workflow | Continuity layer",
    timeline: "8 weeks",
    tags: ["AI agents", "Tone modeling", "Meeting support"],
    filterTags: ["ai", "enterprise", "saas"],
    problem:
      "Executives needed a way to stay present in routine communication without losing their own tone and judgment style.",
    build:
      "We built a personalized persona system that learns voice, preferences, and communication patterns from historical data.",
    results:
      "Communication continuity improved without flattening everything into a generic assistant tone.",
    metrics: [
      { value: "24/7", label: "Availability layer" },
      { value: "Seconds", label: "Response latency" }
    ]
  },
  {
    slug: "enterprise-document-directory-platform",
    title: "Enterprise document and department directory platform",
    summary:
      "Built a secure internal knowledge platform with department-level permissions, document libraries, and AI-assisted retrieval.",
    metric: "Minutes to seconds for knowledge lookup",
    outcome:
      "Employees found answers faster, admins controlled access cleanly, and internal support load dropped.",
    category: "Data",
    engagement: "Greenfield build",
    client: "Multi-department enterprise | Secure internal knowledge",
    timeline: "10 weeks",
    tags: ["RAG", "RBAC", "Document management", "AI retrieval"],
    filterTags: ["ai", "enterprise"],
    problem:
      "Documents were scattered across departments, access was messy, and employees had no fast path to accurate internal information.",
    build:
      "We created a workspace-based document and directory platform with role permissions and an AI layer for source-aware answers.",
    results:
      "Knowledge lookup dropped from a slow support burden to a fast self-serve workflow.",
    metrics: [
      { value: "Seconds", label: "Document retrieval" },
      { value: "RBAC", label: "Secure access" }
    ]
  },
  {
    slug: "crypto-prediction-community-platform",
    title: "Crypto prediction and community ranking platform",
    summary:
      "Shipped a gamified Web3 product where users submit predictions, earn scores, and build reputation through accuracy.",
    metric: "Live leaderboard scoring",
    outcome:
      "The community gained a repeatable engagement loop driven by transparent performance instead of noise.",
    category: "SaaS",
    engagement: "Greenfield build",
    client: "Web3 community product | Reputation scoring",
    timeline: "7 weeks",
    tags: ["Community platform", "Gamification", "Leaderboard engine"],
    filterTags: ["saas"],
    problem:
      "Community influence was driven more by volume than accuracy, with no transparent way to build reputation through performance.",
    build:
      "We built a prediction platform with scoring, ranking, and repeat participation loops tied to real outcomes.",
    results:
      "The product created an incentive structure where accuracy drove recognition and ongoing engagement.",
    metrics: [
      { value: "Daily", label: "Engagement loop" },
      { value: "Live", label: "Leaderboard scoring" }
    ]
  },
  {
    slug: "doctor-booking-marketplace",
    title: "Doctor discovery and appointment booking platform",
    summary:
      "Built a healthcare marketplace for browsing doctors, comparing profiles, and booking available appointments in real time.",
    metric: "Real-time doctor availability",
    outcome:
      "Patients faced less booking friction and providers reduced admin-heavy scheduling work.",
    category: "Healthcare",
    engagement: "Greenfield build",
    client: "Provider marketplace | Healthcare booking flow",
    timeline: "8 weeks",
    tags: ["Healthcare marketplace", "Scheduling engine", "Booking workflow"],
    filterTags: ["enterprise"],
    problem:
      "Patients had no streamlined way to find available doctors and complete bookings without phone-based coordination.",
    build:
      "We built a doctor marketplace with profiles, availability windows, and real-time booking workflows.",
    results:
      "Discovery and scheduling became much easier for patients and less admin-heavy for providers.",
    metrics: [
      { value: "Real-time", label: "Availability" },
      { value: "Less", label: "Booking friction" }
    ]
  },
  {
    slug: "property-price-prediction-engine",
    title: "ML-based property price prediction engine",
    summary:
      "Developed a valuation model using historical property and location data to guide pricing decisions.",
    metric: "Data-backed valuation guidance",
    outcome:
      "Buyers, sellers, and investors got a more reliable reference point before negotiating or listing.",
    category: "Data",
    engagement: "Greenfield build",
    client: "Real estate platform | Valuation guidance",
    timeline: "9 weeks",
    tags: ["ML modeling", "Predictive analytics", "Valuation engine"],
    filterTags: ["ai", "enterprise"],
    problem:
      "Property pricing decisions were being made with incomplete context, which increased mispricing and uncertainty.",
    build:
      "We trained a valuation model on historical transaction, location, and property attributes to estimate likely prices.",
    results:
      "Users got a more objective baseline before negotiating or listing property.",
    metrics: [
      { value: "ML", label: "Price estimates" },
      { value: "Better", label: "Negotiation confidence" }
    ]
  }
] satisfies SourceCaseStudy[];

const domainByCategory: Record<CaseStudyCategory, string> = {
  Automation: "Workflow Automation",
  "AI Agents": "AI Agents & Intelligent Automation",
  SaaS: "SaaS Platforms",
  Healthcare: "Healthcare Technology",
  Data: "Data & Knowledge Systems"
};

const eyebrowByEngagement: Record<CaseStudyEngagement, string> = {
  "Greenfield build": "Greenfield Build",
  "Legacy rescue": "Legacy Rescue",
  "AI layer": "AI Layer"
};

const serviceByCategory: Record<CaseStudyCategory, string[]> = {
  Automation: [
    "Workflow Automation",
    "Process Engineering",
    "Document Processing",
    "Operational Systems"
  ],
  "AI Agents": [
    "AI Agent Systems",
    "Model Orchestration",
    "AI Workflow Design",
    "Production AI Integration"
  ],
  SaaS: [
    "SaaS Product Development",
    "Dashboard Engineering",
    "Product Architecture",
    "Launch Systems"
  ],
  Healthcare: [
    "Healthcare Platform Development",
    "Secure Workflow Engineering",
    "Role-Based Access",
    "Operational Dashboards"
  ],
  Data: [
    "Data Platforms",
    "Knowledge Systems",
    "AI Retrieval",
    "Business Intelligence Workflows"
  ]
};

function getImageUrl(study: SourceCaseStudy) {
  return `${caseStudyImageBasePath}/${study.slug}.webp`;
}

function getImagePosition(study: SourceCaseStudy) {
  return study.imagePosition ?? "center";
}

function getIndustry(study: SourceCaseStudy) {
  if (study.client?.includes("|")) {
    return study.client.split("|")[0].trim();
  }

  return study.client ?? domainByCategory[study.category];
}

function getTechStack(study: SourceCaseStudy) {
  const tags = study.tags ?? [];

  if (tags.length > 0) {
    return tags;
  }

  return [study.category, study.engagement];
}

function ensureSentence(value: string) {
  const trimmed = value.trim();

  if (!trimmed) return trimmed;

  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

function lowerFirst(value: string) {
  if (!value) return value;

  return value.charAt(0).toLowerCase() + value.slice(1);
}

function joinSentences(parts: Array<string | undefined>) {
  return parts
    .filter(Boolean)
    .map((part) => ensureSentence(part as string))
    .join(" ");
}

function getClientContext(study: SourceCaseStudy) {
  return study.client?.split("|")[0].trim() ?? "the client team";
}

function buildOverview(study: SourceCaseStudy) {
  return joinSentences([
    study.summary,
    `This ${study.engagement.toLowerCase()} for ${getClientContext(
      study
    )} focused on ${domainByCategory[study.category].toLowerCase()} and was delivered over ${
      study.timeline ?? "a production-focused engagement"
    }`,
    `The work was shaped around a clear operating goal: ${lowerFirst(
      study.outcome
    )}`
  ]);
}

function buildChallenge(study: SourceCaseStudy) {
  return joinSentences([
    study.problem ?? study.summary,
    `That friction was slowing the workflow down, increasing manual effort, and making the process harder to trust at scale`,
    `For ${getClientContext(
      study
    )}, the challenge was not only getting the work done, but doing it in a way that was repeatable and operationally reliable`
  ]);
}

function buildSolution(study: SourceCaseStudy) {
  return joinSentences([
    study.build ?? study.summary,
    `The implementation stayed close to the existing workflow so the system could reduce unnecessary steps without forcing the team into a disconnected process`,
    `The goal was to turn the underlying idea into a production-ready setup that fit the engagement shape, the business context, and the day-to-day reality of how the team already worked`
  ]);
}

function buildResult(study: SourceCaseStudy) {
  return joinSentences([
    study.results ?? study.outcome,
    `The measurable shift was ${lowerFirst(study.metric)}, and the broader outcome was that ${lowerFirst(
      study.outcome
    )}`,
    `In practice, that meant a workflow that was faster, easier to operate, and better aligned with the work the team actually needed to focus on`
  ]);
}

function getMainPoints(study: SourceCaseStudy) {
  return [study.problem, study.build, study.results ?? study.outcome].filter(
    Boolean
  ) as string[];
}

function getRelatedSlugs(study: SourceCaseStudy) {
  const related = sourceCaseStudies
    .filter((item) => {
      if (item.slug === study.slug) return false;

      const sameCategory = item.category === study.category;
      const sharedFilterTag = item.filterTags?.some((tag) =>
        study.filterTags?.includes(tag)
      );

      return sameCategory || sharedFilterTag;
    })
    .map((item) => item.slug);

  const fallback = sourceCaseStudies
    .filter(
      (item) => item.slug !== study.slug && !related.includes(item.slug)
    )
    .map((item) => item.slug);

  return [...related, ...fallback].slice(0, 3);
}

export const caseStudies: CaseStudy[] = sourceCaseStudies.map((study) => {
  const imageUrl = getImageUrl(study);
  const imagePosition = getImagePosition(study);

  return {
    ...study,
    eyebrow: eyebrowByEngagement[study.engagement],
    domain: domainByCategory[study.category],
    industry: getIndustry(study),
    timeline: study.timeline ?? "Production build",
    clientType: study.client ?? "Client project",
    imageUrl,
    imagePosition,
    bannerImageUrl: imageUrl,
    services: serviceByCategory[study.category],
    techStack: getTechStack(study),
    metrics:
      study.metrics && study.metrics.length > 0
        ? study.metrics
        : [{ value: study.metric, label: "Key outcome" }],
    mainPoints: getMainPoints(study),
    overview: buildOverview(study),
    challenge: buildChallenge(study),
    solution: buildSolution(study),
    result: buildResult(study),
    quote: study.outcome,
    quoteBy: "Project outcome",
    relatedSlugs: getRelatedSlugs(study)
  };
});

export function getCaseStudyVisual(study: Pick<CaseStudy, "imageUrl" | "imagePosition">) {
  return {
    src: study.imageUrl,
    position: study.imagePosition
  };
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getRelatedCaseStudies(slugs: string[]) {
  return slugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter(Boolean) as CaseStudy[];
}
