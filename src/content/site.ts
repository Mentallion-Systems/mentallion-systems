export type NavItem = {
  href: string;
  label: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  metric: string;
  outcome: string;
  category: "Automation" | "AI Agents" | "SaaS" | "Healthcare" | "Data";
  engagement: "Greenfield build" | "Legacy rescue" | "AI layer";
  client?: string;
  timeline?: string;
  tags?: string[];
  filterTags?: CaseStudyFilterTag[];
  problem?: string;
  build?: string;
  results?: string;
  metrics?: { value: string; label: string }[];
  imageUrl?: string;
};

export type CaseStudyFilterTag = "ai" | "saas" | "local" | "enterprise";

export type Service = {
  title: string;
  audience: string;
  build: string;
  outcome: string;
  bullets: string[];
  tags: string[];
};

const caseStudyImages: Record<string, string> = {
  "legaltech-research-pipeline":
    "https://images.pexels.com/photos/4968561/pexels-photo-4968561.jpeg?cs=srgb&dl=pexels-karola-g-4968561.jpg&fm=jpg",
  "retail-record-digitization":
    "https://images.pexels.com/photos/7731373/pexels-photo-7731373.jpeg?cs=srgb&dl=pexels-mikhail-nilov-7731373.jpg&fm=jpg",
  "edtech-grading-automation":
    "https://images.pexels.com/photos/5831662/pexels-photo-5831662.jpeg?cs=srgb&dl=pexels-alphatradezone-5831662.jpg&fm=jpg",
  "healthcare-hipaa-platform":
    "https://images.pexels.com/photos/5407252/pexels-photo-5407252.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5407252.jpg&fm=jpg",
  "hotel-booking-optimization":
    "https://images.pexels.com/photos/29502375/pexels-photo-29502375.jpeg?cs=srgb&dl=pexels-julio-lopez-75309646-29502375.jpg&fm=jpg",
  "personality-saas-rescue":
    "https://images.pexels.com/photos/12899158/pexels-photo-12899158.jpeg?cs=srgb&dl=pexels-mizunokozuki-12899158.jpg&fm=jpg",
  "document-automation-prism":
    "https://images.pexels.com/photos/7731402/pexels-photo-7731402.jpeg?cs=srgb&dl=pexels-mikhail-nilov-7731402.jpg&fm=jpg",
  "operations-ai-manager":
    "https://images.pexels.com/photos/16094042/pexels-photo-16094042.jpeg?cs=srgb&dl=pexels-bertellifotografia-16094042.jpg&fm=jpg",
  "founder-workflow-saas":
    "https://images.pexels.com/photos/12899158/pexels-photo-12899158.jpeg?cs=srgb&dl=pexels-mizunokozuki-12899158.jpg&fm=jpg",
  "autonomous-brand-audit-platform":
    "https://images.pexels.com/photos/5831662/pexels-photo-5831662.jpeg?cs=srgb&dl=pexels-alphatradezone-5831662.jpg&fm=jpg",
  "visual-marketplace-listing-tool":
    "https://images.pexels.com/photos/7667442/pexels-photo-7667442.jpeg?cs=srgb&dl=pexels-mart-production-7667442.jpg&fm=jpg",
  "estate-sales-resale-marketplace":
    "https://images.pexels.com/photos/7621355/pexels-photo-7621355.jpeg?cs=srgb&dl=pexels-ivan-s-7621355.jpg&fm=jpg",
  "used-item-price-identification":
    "https://images.pexels.com/photos/5831662/pexels-photo-5831662.jpeg?cs=srgb&dl=pexels-alphatradezone-5831662.jpg&fm=jpg",
  "marketplace-item-upload-automation":
    "https://images.pexels.com/photos/7621352/pexels-photo-7621352.jpeg?cs=srgb&dl=pexels-ivan-s-7621352.jpg&fm=jpg",
  "subscription-lifecycle-management":
    "https://images.pexels.com/photos/7887822/pexels-photo-7887822.jpeg?cs=srgb&dl=pexels-leeloothefirst-7887822.jpg&fm=jpg",
  "digital-twin-persona-system":
    "https://images.pexels.com/photos/16094042/pexels-photo-16094042.jpeg?cs=srgb&dl=pexels-bertellifotografia-16094042.jpg&fm=jpg",
  "enterprise-document-directory-platform":
    "https://images.pexels.com/photos/8428063/pexels-photo-8428063.jpeg?cs=srgb&dl=pexels-kampus-8428063.jpg&fm=jpg",
  "quranic-reference-chatbot":
    "https://images.pexels.com/photos/16094042/pexels-photo-16094042.jpeg?cs=srgb&dl=pexels-bertellifotografia-16094042.jpg&fm=jpg",
  "crypto-prediction-community-platform":
    "https://images.pexels.com/photos/5831662/pexels-photo-5831662.jpeg?cs=srgb&dl=pexels-alphatradezone-5831662.jpg&fm=jpg",
  "doctor-booking-marketplace":
    "https://images.pexels.com/photos/7800532/pexels-photo-7800532.jpeg?cs=srgb&dl=pexels-nadezhda-moryak-7800532.jpg&fm=jpg",
  "property-price-prediction-engine":
    "https://images.pexels.com/photos/5831662/pexels-photo-5831662.jpeg?cs=srgb&dl=pexels-alphatradezone-5831662.jpg&fm=jpg"
};

const caseStudies = [
    {
      slug: "legaltech-research-pipeline",
      title: "LegalTech research pipeline",
      summary: "Built an AI-assisted research workflow that cut manual case analysis and citation gathering from hours to minutes.",
      metric: "80% faster research",
      outcome: "Analysts moved from repetitive search loops to higher-value review work.",
      category: "AI Agents",
      engagement: "AI layer",
      client: "Series A LegalTech startup | $10M funded",
      timeline: "16 weeks",
      tags: ["LangChain", "Claude", "GPT-4o", "FastAPI", "Next.js"],
      filterTags: ["ai", "enterprise"],
      problem: "Legal teams were spending most of a day cross-referencing court records, statutes, and case law across disconnected sources.",
      build: "We built a multi-agent research workflow with model orchestration, legal-source integrations, and a production-ready backend that could survive real usage.",
      results: "Research time dropped sharply and the team spent more of its time on analysis and argument quality instead of search loops.",
      imageUrl:
        "https://images.pexels.com/photos/7988087/pexels-photo-7988087.jpeg?cs=srgb&dl=pexels-mikhail-nilov-7988087.jpg&fm=jpg",
      metrics: [
        { value: "80%", label: "Faster research" },
        { value: "5+", label: "Models orchestrated" }
      ]
    },
    {
      slug: "retail-record-digitization",
      title: "Retail paper record digitization",
      summary: "Turned months of handwritten inventory and sales records into a searchable system with human review checkpoints.",
      metric: "100% of paper records digitized",
      outcome: "The client replaced weeks of back-office cleanup with a reliable daily pipeline.",
      category: "Data",
      engagement: "Greenfield build",
      client: "Multi-branch retail business | Urdu + English operations",
      timeline: "10 weeks",
      tags: ["Data platform", "Branch sync", "Multilingual AI"],
      filterTags: ["ai", "local"],
      problem: "Orders, customer history, and business data were trapped in bill books and paper ledgers, which made search and reporting almost impossible.",
      build: "We replaced paper-heavy workflows with a custom platform and an assistant that could interpret business data in the team's working language.",
      results: "The business moved away from manual record-keeping and finally had a live, searchable view across branches.",
      imageUrl:
        "https://images.pexels.com/photos/5882592/pexels-photo-5882592.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5882592.jpg&fm=jpg",
      metrics: [
        { value: "100%", label: "Paper records removed" },
        { value: "Real-time", label: "Branch visibility" }
      ]
    },
    {
      slug: "edtech-grading-automation",
      title: "EdTech grading dashboard",
      summary: "Created an automated grading and review workflow for a learning platform handling high student volume.",
      metric: "95% less grading time",
      outcome: "Teachers spent their time on feedback quality instead of repetitive scoring.",
      category: "Automation",
      engagement: "AI layer",
      client: "EdTech platform | High-volume assessment workflow",
      timeline: "7 weeks",
      tags: ["Assessment AI", "Teacher workflow", "Review dashboard"],
      filterTags: ["ai", "enterprise"],
      problem: "Manual grading was eating teacher time and slowing feedback loops for students.",
      build: "We built an automated grading and review workflow that handled repetitive scoring while preserving space for teacher oversight.",
      results: "Most grading time disappeared, and teachers could focus on better feedback instead of repetitive marking.",
      imageUrl:
        "https://images.pexels.com/photos/4623354/pexels-photo-4623354.jpeg?cs=srgb&dl=pexels-ketut-subiyanto-4623354.jpg&fm=jpg",
      metrics: [
        { value: "95%", label: "Grading time removed" },
        { value: "Faster", label: "Student feedback cycles" }
      ]
    },
    {
      slug: "healthcare-hipaa-platform",
      title: "HIPAA-compliant patient operations platform",
      summary: "Engineered a secure healthcare workflow platform with protected records, audit trails, and role-based access.",
      metric: "98% uptime at scale",
      outcome: "The team got a platform they could trust in production, not just a fragile prototype.",
      category: "Healthcare",
      engagement: "Greenfield build",
      client: "Healthcare operations team | Secure patient workflows",
      timeline: "12 weeks",
      tags: ["HIPAA", "RBAC", "Audit trails", "Analytics"],
      filterTags: ["enterprise"],
      problem: "The client needed a compliant, reliable way to manage healthcare operations without relying on brittle internal tools.",
      build: "We engineered a secure workflow platform with access controls, auditability, and production-minded infrastructure from the start.",
      results: "They got a system strong enough for real operations instead of a prototype that would need replacing later.",
      metrics: [
        { value: "98%", label: "Uptime at scale" },
        { value: "Secure", label: "Protected record access" }
      ]
    },
    {
      slug: "hotel-booking-optimization",
      title: "Hotel booking optimization layer",
      summary: "Added smarter recommendations and booking workflow automation to an existing hospitality product.",
      metric: "35% booking conversion increase",
      outcome: "The client improved revenue without rebuilding the product from scratch.",
      category: "AI Agents",
      engagement: "AI layer",
      client: "Hospitality platform | High-traffic booking flow",
      timeline: "8 weeks",
      tags: ["Recommendation engine", "Booking UX", "Revenue optimization"],
      filterTags: ["ai", "enterprise"],
      problem: "The booking flow was losing intent because it was not smart enough about recommendations and timing.",
      build: "We layered AI-guided recommendations and booking automation onto the existing product without forcing a full rebuild.",
      results: "Conversion improved and the business captured more value from traffic it already had.",
      metrics: [
        { value: "35%", label: "Booking lift" },
        { value: "No rebuild", label: "Existing system preserved" }
      ]
    },
    {
      slug: "personality-saas-rescue",
      title: "Personality SaaS infrastructure rescue",
      summary: "Stabilized a shaky production codebase, cleaned deployment issues, and rebuilt the critical workflow path.",
      metric: "98% uptime maintained",
      outcome: "A product that was slipping became dependable enough to keep growing users.",
      category: "SaaS",
      engagement: "Legacy rescue",
      client: "Consumer SaaS | Thousands of active users",
      timeline: "12 weeks",
      tags: ["AWS Lambda", "Python", "React", "Billing"],
      filterTags: ["ai", "saas"],
      problem: "The product was suffering from infrastructure and workflow instability that made growth risky.",
      build: "We stabilized the architecture, cleaned the backend path, and restored confidence in the product's production setup.",
      results: "The SaaS became dependable enough to keep scaling instead of forcing the team into constant firefighting.",
      metrics: [
        { value: "98%", label: "Uptime" },
        { value: "70%", label: "Faster time-to-insight" }
      ]
    },
    {
      slug: "document-automation-prism",
      title: "PRISM document automation pipeline",
      summary: "Built a document ingestion pipeline that classified, extracted, and routed high-volume records automatically.",
      metric: "8 minutes instead of 3 weeks",
      outcome: "Operations teams got searchable outputs and cleaner downstream decisions.",
      category: "Automation",
      engagement: "Greenfield build",
      client: "Operations-heavy business | Hundreds of docs per week",
      timeline: "6 weeks",
      tags: ["Document AI", "OCR", "Pipeline automation"],
      filterTags: ["ai", "enterprise", "local"],
      problem: "A full-time person was manually transferring data from physical documents into a digital system just to keep two workflows in sync.",
      build: "We built an automated scanning and extraction pipeline that pushed structured data into the existing dashboard without a human in the middle.",
      results: "Backlogs cleared, ongoing manual entry disappeared, and the team could use that capacity elsewhere.",
      metrics: [
        { value: "Weeks", label: "Backlog cleared fast" },
        { value: "Zero", label: "Manual entry ongoing" }
      ]
    },
    {
      slug: "operations-ai-manager",
      title: "Local business AI manager",
      summary: "Developed an internal assistant for routine operational questions, document lookups, and daily summaries.",
      metric: "70% fewer manual status checks",
      outcome: "Managers stopped chasing routine updates and focused on the exceptions that mattered.",
      category: "AI Agents",
      engagement: "AI layer",
      client: "Physical retail operators | Local market",
      timeline: "10 weeks",
      tags: ["AI assistant", "Multilingual", "Operations"],
      filterTags: ["ai", "local"],
      problem: "Managers were wasting time on repetitive lookups, updates, and operational checks that could have been handled automatically.",
      build: "We created an internal assistant that could answer routine business questions, surface data, and summarize what needed attention.",
      results: "Leaders spent less time chasing status and more time making decisions where their judgment mattered.",
      metrics: [
        { value: "70%", label: "Fewer status checks" },
        { value: "Daily", label: "Operational summaries" }
      ]
    },
    {
      slug: "founder-workflow-saas",
      title: "Founder workflow SaaS launch",
      summary: "Designed and shipped a full-stack product from zero with admin tooling, billing logic, and a polished user flow.",
      metric: "Launched in 10 weeks",
      outcome: "The founders shipped with a stable foundation instead of a rushed MVP rewrite later.",
      category: "SaaS",
      engagement: "Greenfield build",
      client: "Founder-led product team | New SaaS launch",
      timeline: "10 weeks",
      tags: ["Full-stack", "Admin tooling", "Launch architecture"],
      filterTags: ["saas"],
      problem: "The founders needed to get to market quickly without creating a foundation they would regret later.",
      build: "We handled architecture, delivery, admin tooling, and product flow with launch-readiness in mind from day one.",
      results: "They launched fast, but with a platform that could keep growing instead of demanding an immediate rewrite.",
      metrics: [
        { value: "10 weeks", label: "Launch timeline" },
        { value: "Stable", label: "Foundation from day one" }
      ]
    },
    {
      slug: "autonomous-brand-audit-platform",
      title: "Autonomous brand audit platform",
      summary: "Built a multi-step AI system that turns a single URL into a structured brand audit, audience breakdown, and growth plan.",
      metric: "8 minutes for a full audit",
      outcome: "Strategy work that used to take weeks became repeatable, affordable, and fast enough to use in sales and delivery.",
      category: "AI Agents",
      engagement: "Greenfield build",
      client: "Agency tool | Replaces weeks of manual strategy work",
      timeline: "8 weeks",
      tags: ["FastAPI", "Claude", "Gemini", "Docker"],
      filterTags: ["ai", "saas"],
      problem: "Brand audits were expensive, inconsistent, and tied to weeks of consultant time.",
      build: "We built a layered autonomous pipeline that takes one URL and returns a structured strategy output with clear growth priorities.",
      results: "An expensive consulting workflow became fast enough to use repeatedly and cheap enough to scale.",
      metrics: [
        { value: "8 min", label: "Full audit time" },
        { value: "100%", label: "Automated output" }
      ]
    },
    {
      slug: "visual-marketplace-listing-tool",
      title: "AI-powered visual marketplace listing tool",
      summary: "Created a listing assistant that transforms product photos and rough inputs into cleaner, faster marketplace-ready listings.",
      metric: "Minutes instead of manual listing prep",
      outcome: "Sellers reduced repetitive listing work and published inventory more consistently across channels.",
      category: "AI Agents",
      engagement: "AI layer",
      client: "Marketplace sellers | Visual listing workflow",
      timeline: "6 weeks",
      tags: ["Image understanding", "Listing assistant", "Marketplace ops"],
      filterTags: ["ai", "local"],
      problem: "Preparing marketplace listings by hand was slow, repetitive, and hard to keep consistent at volume.",
      build: "We built a listing assistant that uses product photos and rough inputs to generate cleaner listings faster.",
      results: "Sellers published more inventory with less repetitive prep work and more consistent listing quality.",
      metrics: [
        { value: "Minutes", label: "Listing prep time" },
        { value: "Higher", label: "Listing consistency" }
      ]
    },
    {
      slug: "estate-sales-resale-marketplace",
      title: "Digital resale marketplace for estate sales",
      summary: "Moved a physical estate-sales workflow into a searchable digital resale experience with structured inventory and buyer access.",
      metric: "Offline inventory moved online",
      outcome: "The business expanded beyond in-person sales and gained a usable system for managing resale operations digitally.",
      category: "SaaS",
      engagement: "Greenfield build",
      client: "Resale business | Physical-to-digital transition",
      timeline: "9 weeks",
      tags: ["Marketplace", "Inventory system", "Buyer discovery"],
      filterTags: ["saas", "local"],
      problem: "The business depended on physical estate-sale workflows that limited scale and discoverability.",
      build: "We digitized the resale flow into a searchable marketplace with structured inventory and buyer-facing access.",
      results: "The team could operate beyond in-person events and manage inventory through a proper digital system.",
      metrics: [
        { value: "Digital", label: "Resale workflow" },
        { value: "Broader", label: "Buyer reach" }
      ]
    },
    {
      slug: "used-item-price-identification",
      title: "AI-powered price identification for used marketplace items",
      summary: "Built an AI-assisted valuation flow to estimate fair prices for second-hand items before they hit the marketplace.",
      metric: "Faster pricing decisions",
      outcome: "Sellers got a clearer pricing baseline, reducing guesswork and improving listing confidence.",
      category: "AI Agents",
      engagement: "AI layer",
      client: "Marketplace resale workflow | Used-item pricing",
      timeline: "5 weeks",
      tags: ["Valuation AI", "Marketplace pricing", "Seller tooling"],
      filterTags: ["ai", "local"],
      problem: "Sellers had no reliable baseline for pricing second-hand items and were losing time to guesswork.",
      build: "We built an AI-supported pricing workflow that estimates likely value before an item is listed.",
      results: "Pricing became faster and more defensible, which helped sellers move inventory with more confidence.",
      metrics: [
        { value: "Faster", label: "Pricing decisions" },
        { value: "Better", label: "Listing confidence" }
      ]
    },
    {
      slug: "marketplace-item-upload-automation",
      title: "RPA-based marketplace item upload automation",
      summary: "Automated repetitive inventory upload work for marketplace listings with an RPA-style submission pipeline.",
      metric: "Bulk uploads without manual re-entry",
      outcome: "Teams stopped spending hours on repetitive listing operations and kept catalog updates moving reliably.",
      category: "Automation",
      engagement: "Legacy rescue",
      client: "Marketplace operations | Listing upload workflow",
      timeline: "6 weeks",
      tags: ["RPA", "Upload automation", "Catalog ops"],
      filterTags: ["local", "enterprise"],
      problem: "Teams were manually entering the same marketplace item data over and over again across listing workflows.",
      build: "We automated the upload path so structured item data could move into listings without repetitive manual entry.",
      results: "Catalog operations sped up and staff stopped burning hours on repetitive submission tasks.",
      metrics: [
        { value: "Bulk", label: "Upload workflow" },
        { value: "Less", label: "Manual re-entry" }
      ]
    },
    {
      slug: "subscription-lifecycle-management",
      title: "Subscription lifecycle management platform",
      summary: "Built a dashboard for tracking plans, renewals, usage, and spend so teams could act before subscriptions quietly renewed.",
      metric: "Real-time spend visibility",
      outcome: "Finance and operations teams gained control over renewals, cancellations, and wasted software spend.",
      category: "SaaS",
      engagement: "Greenfield build",
      client: "Finance and operations teams | Subscription control",
      timeline: "7 weeks",
      tags: ["SaaS dashboard", "Usage analytics", "Renewal alerts"],
      filterTags: ["saas", "enterprise"],
      problem: "Subscriptions were being tracked across inboxes, spreadsheets, and memory, which meant missed renewal windows and wasted spend.",
      build: "We created a unified dashboard for plan tracking, usage visibility, and alerts before billing events hit.",
      results: "Teams got control over renewal timing and recovered budget by acting before tools quietly renewed.",
      metrics: [
        { value: "Live", label: "Spend visibility" },
        { value: "Smarter", label: "Renewal actions" }
      ]
    },
    {
      slug: "digital-twin-persona-system",
      title: "Autonomous digital twin AI persona system",
      summary: "Designed a personalized AI assistant that mirrors a leader's tone, preferences, and communication style for continuity.",
      metric: "24/7 communication layer",
      outcome: "Stakeholders got faster responses while preserving the individual's voice and decision style.",
      category: "AI Agents",
      engagement: "Greenfield build",
      client: "Executive communication workflow | Continuity layer",
      timeline: "8 weeks",
      tags: ["AI agents", "Tone modeling", "Meeting support"],
      filterTags: ["ai", "enterprise", "saas"],
      problem: "Executives needed a way to stay present in routine communication without losing their own tone and judgment style.",
      build: "We built a personalized persona system that learns voice, preferences, and communication patterns from historical data.",
      results: "Communication continuity improved without flattening everything into a generic assistant tone.",
      metrics: [
        { value: "24/7", label: "Availability layer" },
        { value: "Seconds", label: "Response latency" }
      ]
    },
    {
      slug: "enterprise-document-directory-platform",
      title: "Enterprise document and department directory platform",
      summary: "Built a secure internal knowledge platform with department-level permissions, document libraries, and AI-assisted retrieval.",
      metric: "Minutes to seconds for knowledge lookup",
      outcome: "Employees found answers faster, admins controlled access cleanly, and internal support load dropped.",
      category: "Data",
      engagement: "Greenfield build",
      client: "Multi-department enterprise | Secure internal knowledge",
      timeline: "10 weeks",
      tags: ["RAG", "RBAC", "Document management", "AI retrieval"],
      filterTags: ["ai", "enterprise"],
      problem: "Documents were scattered across departments, access was messy, and employees had no fast path to accurate internal information.",
      build: "We created a workspace-based document and directory platform with role permissions and an AI layer for source-aware answers.",
      results: "Knowledge lookup dropped from a slow support burden to a fast self-serve workflow.",
      metrics: [
        { value: "Seconds", label: "Document retrieval" },
        { value: "RBAC", label: "Secure access" }
      ]
    },
    {
      slug: "quranic-reference-chatbot",
      title: "AI-powered Quranic reference chatbot",
      summary: "Created a citation-backed chatbot that answers natural-language questions with grounded Quranic references.",
      metric: "Instant source-cited answers",
      outcome: "Users could access guidance faster while preserving trust through traceable references.",
      category: "AI Agents",
      engagement: "Greenfield build",
      client: "Islamic education platform | Source-cited answers",
      timeline: "6 weeks",
      tags: ["RAG", "NLP", "Citation engine", "Conversational AI"],
      filterTags: ["ai", "saas"],
      problem: "Users needed trustworthy Quranic references for specific questions without spending long periods manually cross-referencing texts.",
      build: "We built a grounded chatbot that responds in natural language while returning precise source citations for verification.",
      results: "The platform made guidance faster to access without asking users to sacrifice trust.",
      metrics: [
        { value: "Instant", label: "Cited answers" },
        { value: "Trusted", label: "Source traceability" }
      ]
    },
    {
      slug: "crypto-prediction-community-platform",
      title: "Crypto prediction and community ranking platform",
      summary: "Shipped a gamified Web3 product where users submit predictions, earn scores, and build reputation through accuracy.",
      metric: "Live leaderboard scoring",
      outcome: "The community gained a repeatable engagement loop driven by transparent performance instead of noise.",
      category: "SaaS",
      engagement: "Greenfield build",
      client: "Web3 community product | Reputation scoring",
      timeline: "7 weeks",
      tags: ["Community platform", "Gamification", "Leaderboard engine"],
      filterTags: ["saas"],
      problem: "Community influence was driven more by volume than accuracy, with no transparent way to build reputation through performance.",
      build: "We built a prediction platform with scoring, ranking, and repeat participation loops tied to real outcomes.",
      results: "The product created an incentive structure where accuracy drove recognition and ongoing engagement.",
      metrics: [
        { value: "Daily", label: "Engagement loop" },
        { value: "Live", label: "Leaderboard scoring" }
      ]
    },
    {
      slug: "doctor-booking-marketplace",
      title: "Doctor discovery and appointment booking platform",
      summary: "Built a healthcare marketplace for browsing doctors, comparing profiles, and booking available appointments in real time.",
      metric: "Real-time doctor availability",
      outcome: "Patients faced less booking friction and providers reduced admin-heavy scheduling work.",
      category: "Healthcare",
      engagement: "Greenfield build",
      client: "Provider marketplace | Healthcare booking flow",
      timeline: "8 weeks",
      tags: ["Healthcare marketplace", "Scheduling engine", "Booking workflow"],
      filterTags: ["enterprise"],
      problem: "Patients had no streamlined way to find available doctors and complete bookings without phone-based coordination.",
      build: "We built a doctor marketplace with profiles, availability windows, and real-time booking workflows.",
      results: "Discovery and scheduling became much easier for patients and less admin-heavy for providers.",
      metrics: [
        { value: "Real-time", label: "Availability" },
        { value: "Less", label: "Booking friction" }
      ]
    },
    {
      slug: "property-price-prediction-engine",
      title: "ML-based property price prediction engine",
      summary: "Developed a valuation model using historical property and location data to guide pricing decisions.",
      metric: "Data-backed valuation guidance",
      outcome: "Buyers, sellers, and investors got a more reliable reference point before negotiating or listing.",
      category: "Data",
      engagement: "Greenfield build",
      client: "Real estate platform | Valuation guidance",
      timeline: "9 weeks",
      tags: ["ML modeling", "Predictive analytics", "Valuation engine"],
      filterTags: ["ai", "enterprise"],
      problem: "Property pricing decisions were being made with incomplete context, which increased mispricing and uncertainty.",
      build: "We trained a valuation model on historical transaction, location, and property attributes to estimate likely prices.",
      results: "Users got a more objective baseline before negotiating or listing property.",
      metrics: [
        { value: "ML", label: "Price estimates" },
        { value: "Better", label: "Negotiation confidence" }
      ]
    }
  ] satisfies CaseStudy[];

export const site = {
  name: "Mentallion Systems",
  tagline: "We automate the work. You run the business.",
  location: "Islamabad, Pakistan",
  email: "hello@mentallionsystems.com",
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
  trustStrip: "Trusted by founders and business owners across Pakistan, the United States, the United Kingdom, and the Gulf.",
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
  caseStudies: caseStudies.map((study) => ({
    ...study,
    imageUrl: caseStudyImages[study.slug] ?? study.imageUrl
  })),
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
      source: "Operations Manager, Islamabad retail business"
    },
    {
      quote:
        "They gave us a realistic scope, stuck to it, and the system has been running without issues since launch.",
      source: "CTO, EdTech platform"
    }
  ]
};
