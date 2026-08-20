export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceUseCase = {
  title: string;
  description: string;
};

export type ServiceStep = {
  title: string;
  description: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  answer: string;
  problem: string;
  audience: string[];
  outcomes: string[];
  deliverables: string[];
  useCases: ServiceUseCase[];
  process: ServiceStep[];
  goodFit: string;
  notFit: string;
  relatedCaseStudySlugs: string[];
  keywords: string[];
  faqs: ServiceFaq[];
};

export const serviceDetails = [
  {
    slug: "business-process-automation",
    title: "Business Process Automation",
    shortTitle: "Process Automation",
    eyebrow: "AI automation services",
    metaTitle: "Business Process Automation Services",
    metaDescription:
      "Replace repetitive data entry, document processing, approvals, and handoffs with reliable AI-powered business process automation.",
    headline: "Automate repetitive business processes without losing control.",
    answer:
      "Business process automation replaces repeatable manual steps with software-driven workflows. We map the current process, connect the right systems, add AI where judgment or unstructured data is involved, and keep human review wherever risk demands it.",
    problem:
      "Manual operations usually grow one spreadsheet, inbox, and workaround at a time. The result is slow delivery, inconsistent data, hidden bottlenecks, and capable people spending their day moving information between systems.",
    audience: [
      "Operations teams handling repetitive data entry or status updates",
      "Businesses processing forms, invoices, PDFs, scans, or email attachments",
      "Teams coordinating approvals across disconnected tools",
      "Leaders who need a reliable workflow before hiring more people"
    ],
    outcomes: [
      "Shorter processing cycles and fewer manual handoffs",
      "Consistent data with visible exceptions and audit trails",
      "More team capacity for customer, decision, and growth work"
    ],
    deliverables: [
      "Current-state workflow and bottleneck map",
      "Automation architecture and integration plan",
      "Document extraction, validation, and routing pipelines",
      "Human review queues, alerts, and exception handling",
      "Monitoring, handover documentation, and launch support"
    ],
    useCases: [
      {
        title: "Document processing",
        description:
          "Classify, extract, validate, and route information from invoices, forms, contracts, scans, and other business documents."
      },
      {
        title: "Data entry and system sync",
        description:
          "Move structured information between dashboards, CRMs, internal tools, and legacy systems without repetitive re-entry."
      },
      {
        title: "Approvals and exception handling",
        description:
          "Route routine cases automatically while sending uncertain, sensitive, or high-value cases to the right person."
      },
      {
        title: "Operational reporting",
        description:
          "Create live status views and scheduled summaries so managers can see delays and exceptions without chasing updates."
      }
    ],
    process: [
      {
        title: "Map the real workflow",
        description:
          "We document inputs, decisions, systems, edge cases, and the people involved before choosing technology."
      },
      {
        title: "Prioritize the automation",
        description:
          "We identify the highest-value steps and define what should be automated, assisted, or kept manual."
      },
      {
        title: "Build with controls",
        description:
          "The workflow is implemented with validation, review checkpoints, fallbacks, and visible failure states."
      },
      {
        title: "Launch and improve",
        description:
          "We test against real cases, monitor production behavior, and refine the system around actual usage."
      }
    ],
    goodFit:
      "A strong fit has a repeated workflow, identifiable inputs and outputs, meaningful volume, and a clear operational cost when work is slow or wrong.",
    notFit:
      "Automation is a poor fit when the process changes every time, the source data is inaccessible, or the task depends almost entirely on unrecorded human judgment. We will say so during discovery.",
    relatedCaseStudySlugs: [
      "document-automation-prism",
      "retail-record-digitization",
      "marketplace-item-upload-automation"
    ],
    keywords: [
      "business process automation services",
      "AI workflow automation",
      "document process automation",
      "operations automation company"
    ],
    faqs: [
      {
        question: "What business processes can be automated?",
        answer:
          "Good candidates are frequent, rule-based or document-heavy workflows with clear inputs and outputs. Examples include data entry, document extraction, approvals, system updates, reporting, onboarding, and routine status communication."
      },
      {
        question: "Do you automate our existing tools or replace them?",
        answer:
          "Usually we integrate with the systems that already work and replace only the fragile manual steps. A new platform is recommended only when the current tools cannot support a reliable workflow."
      },
      {
        question: "Where does AI fit into process automation?",
        answer:
          "AI is useful when the workflow includes unstructured text, images, documents, classification, summarization, or judgment-like decisions. Deterministic rules remain the better choice for predictable steps."
      },
      {
        question: "How do you handle errors and uncertain AI outputs?",
        answer:
          "We design validation rules, confidence thresholds, audit logs, retry paths, and human review queues. The system should surface uncertainty instead of silently turning it into a business error."
      },
      {
        question: "How long does an automation project take?",
        answer:
          "It depends on workflow complexity, integrations, data quality, and compliance needs. The automation case studies on this site span focused builds of roughly five to ten weeks, while larger systems can take longer."
      }
    ]
  },
  {
    slug: "ai-agent-development",
    title: "AI Agent Development",
    shortTitle: "AI Agents",
    eyebrow: "Production AI agent systems",
    metaTitle: "AI Agent Development Services",
    metaDescription:
      "Design and build reliable AI agents for research, knowledge retrieval, analysis, operations, and multi-step business workflows.",
    headline: "AI agents designed for real business work, not scripted demos.",
    answer:
      "An AI agent is software that can interpret a goal, use approved data and tools, complete multiple steps, and return a useful result. We build agents around a defined business task, then add retrieval, evaluations, permissions, observability, and human oversight so the system can operate reliably.",
    problem:
      "A conversational prototype can look convincing while failing on real data, edge cases, permissions, cost, and latency. Production agent systems need a constrained job, trustworthy context, measured quality, and a safe path when the model is uncertain.",
    audience: [
      "Teams that need faster research, analysis, or knowledge retrieval",
      "Product companies adding agentic features to an existing platform",
      "Operations leaders coordinating complex multi-step work",
      "Businesses with proprietary knowledge that generic chat tools cannot use safely"
    ],
    outcomes: [
      "Faster decisions with the relevant context assembled automatically",
      "Repeatable multi-step work with traceable sources and actions",
      "A measurable AI system with cost, quality, and latency controls"
    ],
    deliverables: [
      "Agent task definition and system architecture",
      "Model, retrieval, tool-use, and orchestration layer",
      "Evaluation datasets and quality checks",
      "Permissions, guardrails, fallbacks, and human escalation",
      "Production monitoring and usage documentation"
    ],
    useCases: [
      {
        title: "Research agents",
        description:
          "Search approved sources, assemble evidence, compare findings, and produce a structured output with traceable context."
      },
      {
        title: "Knowledge assistants",
        description:
          "Answer questions over internal documents and data while respecting permissions and showing the sources behind an answer."
      },
      {
        title: "Operations agents",
        description:
          "Review incoming work, gather missing information, update systems, and escalate exceptions across a defined process."
      },
      {
        title: "Decision-support systems",
        description:
          "Analyze cases against business criteria and prepare recommendations while leaving consequential decisions with people."
      }
    ],
    process: [
      {
        title: "Define the job",
        description:
          "We turn a broad AI idea into a specific task with clear inputs, tools, outputs, constraints, and success criteria."
      },
      {
        title: "Build the evaluation",
        description:
          "Representative cases and failure modes become a test set before the agent is trusted with production work."
      },
      {
        title: "Engineer the system",
        description:
          "We connect models, data, tools, permissions, and human review in a production-ready application."
      },
      {
        title: "Measure and refine",
        description:
          "Quality, latency, cost, and escalations are observed so improvements are based on evidence rather than anecdotes."
      }
    ],
    goodFit:
      "A strong fit has a valuable knowledge task, accessible source material, examples of good output, and a clear boundary around what the agent may do.",
    notFit:
      "An agent is not the right answer when deterministic automation can solve the task more cheaply, when required data cannot be accessed, or when there is no safe way to review consequential actions.",
    relatedCaseStudySlugs: [
      "legaltech-research-pipeline",
      "autonomous-brand-audit-platform",
      "enterprise-document-directory-platform"
    ],
    keywords: [
      "AI agent development services",
      "custom AI agents",
      "agentic AI development company",
      "enterprise AI agent development"
    ],
    faqs: [
      {
        question: "What is the difference between an AI agent and a chatbot?",
        answer:
          "A chatbot mainly exchanges messages. An AI agent is designed to complete a defined job by retrieving context, using tools, following multiple steps, and returning or recording an outcome."
      },
      {
        question: "Can an AI agent use our private business data?",
        answer:
          "Yes, when the data can be accessed with appropriate permissions. We design retrieval and access controls so users and agents only receive information they are authorized to use."
      },
      {
        question: "How do you measure whether an AI agent is reliable?",
        answer:
          "We test representative tasks and known failure cases, then track measures such as answer quality, task completion, source accuracy, latency, cost, and human escalation rate."
      },
      {
        question: "Which AI model do you use?",
        answer:
          "Model choice follows the task. We compare capability, privacy, latency, cost, context limits, and deployment requirements instead of forcing every system onto one provider."
      },
      {
        question: "Can you add an AI agent to an existing product?",
        answer:
          "Yes. The agent can be introduced as a focused service or feature behind the current interface, which avoids rebuilding the parts of the product that already work."
      }
    ]
  },
  {
    slug: "custom-saas-development",
    title: "Custom SaaS Development",
    shortTitle: "Custom SaaS",
    eyebrow: "End-to-end product engineering",
    metaTitle: "Custom SaaS Development Company",
    metaDescription:
      "Plan, build, launch, and stabilize custom SaaS products with production-ready architecture, dashboards, billing, and admin workflows.",
    headline: "Custom SaaS built to launch cleanly and keep working after launch.",
    answer:
      "Custom SaaS development turns a specific product or operating model into software your business owns. We handle product architecture, frontend, backend, data, integrations, administration, infrastructure, and launch readiness as one connected system.",
    problem:
      "Rushed MVPs often hide the decisions that become expensive later: unclear permissions, fragile data models, missing admin tools, unreliable billing, and no practical way to support users. A good first release is focused, but its foundation should still be deliberate.",
    audience: [
      "Founders taking a validated product from concept to launch",
      "Operators replacing spreadsheets or generic tools with a purpose-built platform",
      "Teams rescuing a SaaS codebase that has become difficult to ship",
      "Businesses turning an internal workflow into a customer-facing product"
    ],
    outcomes: [
      "A focused product that can be used and supported in production",
      "Clear ownership of the codebase and technical decisions",
      "A maintainable foundation for new users, workflows, and integrations"
    ],
    deliverables: [
      "Product scope, user flows, and delivery roadmap",
      "Application architecture and data model",
      "Responsive frontend, backend APIs, and integrations",
      "Authentication, roles, admin tooling, and billing where needed",
      "Deployment, monitoring, documentation, and launch support"
    ],
    useCases: [
      {
        title: "Vertical SaaS",
        description:
          "Purpose-built software for a specific industry workflow where broad off-the-shelf products create too much compromise."
      },
      {
        title: "B2B workflow platforms",
        description:
          "Multi-user applications with dashboards, roles, approvals, reporting, and integrations around a repeatable business process."
      },
      {
        title: "Marketplaces and portals",
        description:
          "Products that coordinate discovery, profiles, inventory, scheduling, transactions, or communication between distinct user groups."
      },
      {
        title: "SaaS rescue and modernization",
        description:
          "Stabilize critical workflows, improve architecture, and restore a reliable path to shipping without discarding useful product work."
      }
    ],
    process: [
      {
        title: "Shape the product",
        description:
          "We align the audience, problem, must-have workflow, operating model, and constraints into a buildable first scope."
      },
      {
        title: "Design the foundation",
        description:
          "User flows, data, permissions, integrations, and architecture are planned together so the product works as one system."
      },
      {
        title: "Build in working slices",
        description:
          "The product is delivered through usable flows, with regular review and real progress visible throughout the engagement."
      },
      {
        title: "Harden and launch",
        description:
          "We test critical paths, prepare monitoring and support, document the system, and stay involved through release."
      }
    ],
    goodFit:
      "A strong fit has a clear user, a painful workflow, a decision-maker close to the project, and enough evidence to prioritize a focused first release.",
    notFit:
      "Custom software is usually the wrong investment when a standard product already solves the workflow well or when the product has no defined user or problem yet.",
    relatedCaseStudySlugs: [
      "founder-workflow-saas",
      "subscription-lifecycle-management",
      "doctor-booking-marketplace"
    ],
    keywords: [
      "custom SaaS development company",
      "SaaS product development services",
      "B2B SaaS development",
      "SaaS MVP development"
    ],
    faqs: [
      {
        question: "What does custom SaaS development include?",
        answer:
          "It can include product scoping, UX flows, architecture, frontend, backend, databases, authentication, permissions, billing, integrations, admin tools, infrastructure, monitoring, and launch support."
      },
      {
        question: "Do you build MVPs?",
        answer:
          "Yes. We treat an MVP as the smallest credible version of a product, not disposable code. The scope stays focused while the critical data, security, and operating decisions are handled deliberately."
      },
      {
        question: "Can you take over an existing SaaS product?",
        answer:
          "Yes. We first assess the codebase, deployment path, data, and critical workflows, then recommend whether to stabilize, refactor, replace selected parts, or rebuild."
      },
      {
        question: "Who owns the code and product?",
        answer:
          "The client owns the custom software delivered for the engagement, subject to the final agreement and any clearly identified third-party or open-source components."
      },
      {
        question: "How long does a SaaS build take?",
        answer:
          "Scope and complexity determine the schedule. The SaaS case studies on this site include focused launches and platforms delivered in roughly seven to twelve weeks; larger products are planned in stages."
      }
    ]
  },
  {
    slug: "ai-integration",
    title: "AI Integration for Existing Software",
    shortTitle: "AI Integration",
    eyebrow: "Add AI without a full rebuild",
    metaTitle: "AI Integration Services for Existing Software",
    metaDescription:
      "Add AI search, document processing, recommendations, copilots, and automation to an existing product without rebuilding the core system.",
    headline: "Add useful AI to the product you already have.",
    answer:
      "AI integration adds a focused intelligence layer to existing software. We identify the workflow where AI can create measurable value, connect the appropriate model and data, and introduce the feature behind stable interfaces so the core product can keep operating.",
    problem:
      "Teams often know their product should become smarter but do not need—or cannot risk—a ground-up rewrite. The challenge is choosing a use case that matters, fitting it into the current architecture, and controlling quality, privacy, latency, and cost.",
    audience: [
      "Product teams adding search, extraction, recommendations, or copilots",
      "SaaS companies with a valuable workflow but no internal AI platform team",
      "Businesses that need to connect private knowledge to an existing application",
      "Teams with an AI prototype that must be made production-ready"
    ],
    outcomes: [
      "A valuable AI capability delivered without destabilizing the core product",
      "Clear quality, cost, latency, and privacy boundaries",
      "A measured rollout with fallbacks and a practical path to expansion"
    ],
    deliverables: [
      "Use-case and architecture assessment",
      "Model and provider evaluation",
      "AI service layer, APIs, retrieval, and data connections",
      "Evaluations, guardrails, monitoring, and fallback behavior",
      "Staged rollout plan and technical documentation"
    ],
    useCases: [
      {
        title: "Semantic search and knowledge retrieval",
        description:
          "Help users find the right document, record, product, or answer even when their wording does not match stored keywords."
      },
      {
        title: "Document and content intelligence",
        description:
          "Extract, classify, summarize, compare, or generate structured information inside an existing workflow."
      },
      {
        title: "Recommendations and prediction",
        description:
          "Use product, user, or operational data to improve ranking, matching, forecasting, and next-best-action decisions."
      },
      {
        title: "Embedded copilots",
        description:
          "Give users contextual assistance inside the current product instead of sending them to a disconnected general-purpose chat tool."
      }
    ],
    process: [
      {
        title: "Choose the narrow win",
        description:
          "We identify one high-value workflow with enough data and a measurable result before expanding the surface area."
      },
      {
        title: "Inspect the current system",
        description:
          "Architecture, data access, permissions, deployment, and product constraints shape the integration plan."
      },
      {
        title: "Build behind a boundary",
        description:
          "The AI capability is isolated behind stable interfaces with evaluations, observability, and fallback behavior."
      },
      {
        title: "Roll out with evidence",
        description:
          "We compare performance on real cases, release gradually, and use production signals to decide what to improve next."
      }
    ],
    goodFit:
      "A strong fit has an existing product and user workflow, accessible data, a specific capability to improve, and a baseline against which the new feature can be measured.",
    notFit:
      "AI integration is premature when the core workflow is still undefined, the data cannot support the use case, or a simple search, rules engine, or interface improvement would solve the problem better.",
    relatedCaseStudySlugs: [
      "hotel-booking-optimization",
      "edtech-grading-automation",
      "personality-saas-rescue"
    ],
    keywords: [
      "AI integration services",
      "add AI to existing software",
      "AI product development",
      "generative AI integration company"
    ],
    faqs: [
      {
        question: "Can AI be added without rebuilding our application?",
        answer:
          "Usually, yes. A focused AI capability can sit behind an API or service boundary and connect to the current product, data, and permissions without replacing the stable core."
      },
      {
        question: "How do you choose the right AI use case?",
        answer:
          "We compare business value, task frequency, available data, acceptable error, integration effort, and the cost of the current workflow. The best first use case is narrow enough to measure and valuable enough to matter."
      },
      {
        question: "Can you make our existing AI prototype production-ready?",
        answer:
          "Yes. Typical work includes architecture, evaluations, retrieval quality, access control, observability, latency, cost controls, failure handling, and integration with the real product workflow."
      },
      {
        question: "How do you protect private data?",
        answer:
          "We minimize the data sent to models, enforce application permissions, select appropriate provider settings or deployment options, protect secrets, and define retention and logging behavior around the system's risk."
      },
      {
        question: "What if the model provider changes?",
        answer:
          "We avoid unnecessary provider coupling and isolate model access where practical. That makes it easier to test or switch models when capability, price, latency, or policy changes."
      }
    ]
  }
] satisfies ServiceDetail[];

export function getServiceDetail(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
