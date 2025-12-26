export const ITservicesData = [
  // ======================================================
  // 1. WEBSITE & WEB APPLICATION SERVICES
  // ======================================================
  {
    categoryId: "website-web-application-services",
    categoryTitle: "Website & Web Application Services",
    categoryDescription:
      "Scalable, secure, and high-performance web solutions tailored to modern business needs.",
    services: [
      {
        id: "website-design-development", 
        title: "Website Design & Development",
        shortValue:
          "Modern, responsive, and SEO-optimized websites built for growth.",
        heroImage: "/itservices/wdhero.jpg",
        overviewImage: "/itservices/wdover.jpg",
        overview: `
We design and develop visually compelling, responsive, and performance-driven websites that act as a strong digital foundation for businesses. Our focus is on usability, scalability, and search engine visibility to ensure long-term success.

Every website is built with clean architecture, modern UI/UX principles, and optimized performance to support branding, engagement, and conversions.
        `,
        capabilities: [
          "UI/UX Design",
          "Responsive Development",
          "SEO-Friendly Architecture",
          "Performance Optimization",
          "CMS Integration"
        ],
        tools: ["react", "nextjs", "wordpress", "node", "aws"],
        outcomes: [
          "Improved brand credibility",
          "Higher user engagement",
          "Fast load speeds",
          "Scalable web presence"
        ],
        industries: ["Technology", "Retail", "Healthcare", "Education"]
      },

      {
        id: "web-application-development",
        title: "Web Application Development",
        shortValue:
          "Secure and scalable web applications for business operations.",
        heroImage: "/itservices/wahero.jpg",
        overviewImage: "/itservices/wadover.jpg",
        overview: `
We build custom web applications designed to streamline workflows, automate processes, and enhance digital experiences. Our applications are secure, scalable, and optimized for performance.

From dashboards to enterprise platforms, we deliver solutions that integrate seamlessly with existing systems.
        `,
        capabilities: [
          "Custom Web App Development",
          "API Integration",
          "Authentication & Authorization",
          "Scalable Architecture",
          "Performance Optimization"
        ],
        tools: ["react", "node", "express", "postgresql", "aws"],
        outcomes: [
          "Operational efficiency",
          "Secure user access",
          "Reliable system performance"
        ],
        industries: ["Finance", "Healthcare", "SaaS"]
      },

      {
        id: "ecommerce-platform-development",
        title: "E-Commerce Platform Development",
        shortValue:
          "Conversion-focused and secure e-commerce platforms.",
        heroImage: "/itservices/ecomhero.jpg",
        overviewImage: "/itservices/ecomover.jpg",
        overview: `
We develop robust e-commerce platforms that enable seamless online selling, inventory management, and customer engagement. Our solutions are optimized for speed, security, and scalability.

From B2C to B2B marketplaces, we help businesses grow digital revenue streams.
        `,
        capabilities: [
          "Custom Storefront Development",
          "Payment Gateway Integration",
          "Order & Inventory Management",
          "Security & Compliance",
          "Performance Optimization"
        ],
        tools: ["shopify", "woocommerce", "react", "node"],
        outcomes: [
          "Higher conversion rates",
          "Secure transactions",
          "Scalable online sales"
        ],
        industries: ["Retail", "B2B", "B2C"]
      },

      {
        id: "saas-application-development",
        title: "SaaS Application Development",
        shortValue:
          "Cloud-native SaaS platforms engineered for scale.",
        heroImage: "/itservices/saashero.jpg",
        overviewImage: "/itservices/saasover.jpg",
        overview: `
We design and develop SaaS applications using cloud-native architectures that support scalability, reliability, and multi-tenancy. Our SaaS solutions are built for rapid growth and continuous deployment.

From MVPs to enterprise SaaS platforms, we ensure performance and security.
        `,
        capabilities: [
          "Multi-Tenant Architecture",
          "Subscription & Billing Systems",
          "Cloud-Native Design",
          "Security & Compliance",
          "CI/CD Pipelines"
        ],
        tools: ["react", "node", "aws", "docker", "kubernetes"],
        outcomes: [
          "Rapid product scaling",
          "Reduced infrastructure costs",
          "High availability"
        ],
        industries: ["Startups", "Technology", "Enterprise"]
      }
    ]
  },

  // ======================================================
  // 2. MOBILE APPLICATION DEVELOPMENT
  // ======================================================
  {
    categoryId: "mobile-application-development",
    categoryTitle: "Mobile Application Development",
    categoryDescription:
      "High-performance mobile applications for Android, iOS, and cross-platform environments.",
    services: [
      {
        id: "android-app-development",
        title: "Android App Development",
        shortValue: "Scalable Android applications with superior performance.",
        heroImage: "/itservices/andhero.jpg",
        overviewImage: "/itservices/andover.jpg",
        overview: `
We develop secure and scalable Android applications optimized for performance and usability. Our apps follow best practices to ensure reliability across devices and OS versions.

From consumer apps to enterprise mobility solutions, we deliver high-quality Android experiences.
        `,
        capabilities: [
          "Native Android Development",
          "API Integration",
          "Performance Optimization",
          "Play Store Deployment",
          "App Security"
        ],
        tools: ["kotlin", "java", "firebase"],
        outcomes: [
          "Improved mobile engagement",
          "Stable application performance"
        ],
        industries: ["Fintech", "Healthcare", "Retail"]
      },

      {
        id: "ios-app-development",
        title: "iOS App Development",
        shortValue: "Premium iOS applications for Apple devices.",
        heroImage: "/itservices/ioshero.jpg",
        overviewImage: "/itservices/iosover.jpg",
        overview: `
We design and develop iOS applications that deliver smooth performance, elegant UI, and strong security. Our apps align with Apple’s design standards and ecosystem.

We help businesses reach high-value Apple users with reliable solutions.
        `,
        capabilities: [
          "Native iOS Development",
          "App Store Deployment",
          "Performance Optimization",
          "Security Best Practices",
          "API Integration"
        ],
        tools: ["swift", "xcode", "firebase"],
        outcomes: [
          "Premium user experience",
          "Reliable App Store approval"
        ],
        industries: ["Technology", "Healthcare"]
      },

      {
        id: "cross-platform-app-development",
        title: "Cross-Platform App Development",
        shortValue: "Single codebase apps for iOS and Android.",
        heroImage: "/itservices/crosshero.jpg",
        overviewImage: "/itservices/crossover.jpg",
        overview: `
We build cross-platform mobile applications that run seamlessly on both Android and iOS. This approach reduces development time while maintaining performance and scalability.

Ideal for startups and fast-growing businesses.
        `,
        capabilities: [
          "Cross-Platform Architecture",
          "Reusable Components",
          "API Integration",
          "Performance Optimization",
          "App Store Deployment"
        ],
        tools: ["reactnative", "flutter"],
        outcomes: [
          "Reduced development cost",
          "Faster time-to-market"
        ],
        industries: ["Startups", "SaaS"]
      }
    ]
  },

  // ======================================================
  // 3. AI & AUTOMATION SOLUTIONS
  // ======================================================
  {
    categoryId: "ai-automation-solutions",
    categoryTitle: "AI & Automation Solutions",
    categoryDescription:
      "Intelligent systems that automate processes and enable data-driven decisions.",
    services: [
      {
        id: "chatbot-development",
        title: "Chatbot Development",
        shortValue: "Conversational AI for customer engagement.",
        heroImage: "/itservices/chathero.jpg",
        overviewImage: "/itservices/chatover.jpg",
        overview: `
We build AI-powered chatbots that automate customer support, sales interactions, and internal processes. Our chatbots integrate with existing platforms for seamless operations.

They improve response times and reduce operational costs.
        `,
        capabilities: [
          "Natural Language Processing",
          "Omnichannel Deployment",
          "CRM Integration",
          "Analytics & Insights",
          "Custom Training"
        ],
        tools: ["openai", "python", "dialogflow"],
        outcomes: [
          "24/7 customer support",
          "Reduced support workload"
        ],
        industries: ["E-commerce", "Healthcare", "Finance"]
      },

      {
        id: "workflow-automation-rpa",
        title: "Workflow Automation & RPA",
        shortValue: "Automated workflows for operational efficiency.",
        heroImage: "/itservices/workhero.jpg",
        overviewImage: "/itservices/workover.jpg",
        overview: `
We implement workflow automation and robotic process automation (RPA) solutions to reduce manual effort and improve efficiency.

Our automation solutions help businesses scale operations with minimal friction.
        `,
        capabilities: [
          "Process Automation",
          "Bot Development",
          "System Integration",
          "Monitoring & Optimization",
          "Compliance Handling"
        ],
        tools: ["uiPath", "automationAnywhere", "python"],
        outcomes: [
          "Reduced operational costs",
          "Faster process execution"
        ],
        industries: ["Finance", "Manufacturing"]
      },

      {
        id: "recommendation-engine",
        title: "Recommendation Engine Development",
        shortValue: "Personalized recommendation systems.",
        heroImage: "/itservices/recomhero.jpg",
        overviewImage: "/itservices/recomover.jpg",
        overview: `
We develop intelligent recommendation engines that personalize user experiences and increase engagement. These systems analyze user behavior and data patterns in real time.

Ideal for e-commerce, media, and content platforms.
        `,
        capabilities: [
          "Data Modeling",
          "Behavioral Analysis",
          "Algorithm Design",
          "Real-Time Processing",
          "Scalable Deployment"
        ],
        tools: ["python", "tensorflow", "aws"],
        outcomes: [
          "Higher engagement",
          "Increased conversions"
        ],
        industries: ["Retail", "Media"]
      },

      {
        id: "machine-learning-solutions",
        title: "Machine Learning Solutions",
        shortValue: "Predictive and intelligent ML systems.",
        heroImage: "/itservices/mlhero.jpg",
        overviewImage: "/itservices/mlover.jpg",
        overview: `
We build machine learning solutions that transform data into actionable insights. Our models are designed for accuracy, scalability, and real-world deployment.

These solutions empower smarter business decisions.
        `,
        capabilities: [
          "Predictive Modeling",
          "Model Training",
          "Data Engineering",
          "Deployment & Monitoring",
          "Optimization"
        ],
        tools: ["python", "pytorch", "tensorflow"],
        outcomes: [
          "Accurate predictions",
          "Improved decision-making"
        ],
        industries: ["Finance", "Healthcare"]
      },

      {
        id: "computer-vision-solutions",
        title: "Computer Vision Solutions",
        shortValue: "Visual intelligence for automation.",
        heroImage: "/itservices/cvhero.jpg",
        overviewImage: "/itservices/cvover.jpg",
        overview: `
We develop computer vision systems that analyze images and videos to extract meaningful insights. These solutions support automation, monitoring, and quality control.

Used across industrial and smart systems.
        `,
        capabilities: [
          "Image Recognition",
          "Object Detection",
          "Video Analytics",
          "Model Training",
          "Edge Deployment"
        ],
        tools: ["opencv", "python", "tensorflow"],
        outcomes: [
          "Automated visual inspection",
          "Improved accuracy"
        ],
        industries: ["Manufacturing", "Smart Cities"]
      },

      {
        id: "aiot-solutions",
        title: "AIoT Solutions",
        shortValue: "AI-powered IoT intelligence.",
        heroImage: "/itservices/iothero.jpg",
        overviewImage: "/itservices/iotover.jpg",
        overview: `
We combine AI and IoT to create intelligent systems that monitor, analyze, and optimize connected devices. Our AIoT solutions enable real-time decision-making.

Ideal for smart infrastructure and industrial automation.
        `,
        capabilities: [
          "IoT Integration",
          "AI Analytics",
          "Real-Time Monitoring",
          "Edge Computing",
          "Scalable Architecture"
        ],
        tools: ["iotCore", "python", "aws"],
        outcomes: [
          "Smart automation",
          "Real-time insights"
        ],
        industries: ["Manufacturing", "Energy"]
      }
    ]
  },

  // ======================================================
  // 4. CUSTOM ENTERPRISE SOFTWARE
  // ======================================================
  {
    categoryId: "custom-enterprise-software",
    categoryTitle: "Custom Enterprise Software",
    categoryDescription:
      "Enterprise-grade software solutions built for complex business needs.",
    services: [
      {
        id: "custom-software-development",
        title: "Custom Software Development",
        shortValue: "Tailored enterprise software solutions.",
        heroImage: "/itservices/cshero.jpg",
        overviewImage: "/itservices/csover.jpg",
        overview: `
We design and develop custom software solutions tailored to unique business processes. Our solutions are secure, scalable, and future-ready.

They integrate seamlessly with existing enterprise systems.
        `,
        capabilities: [
          "Requirement Analysis",
          "Custom Architecture",
          "Enterprise Integration",
          "Security Implementation",
          "Scalable Development"
        ],
        tools: ["node", "python", "java"],
        outcomes: [
          "Operational efficiency",
          "System reliability"
        ],
        industries: ["Manufacturing", "Healthcare"]
      },

      {
        id: "crm-systems",
        title: "CRM Systems",
        shortValue: "Customer relationship management platforms.",
        heroImage: "/itservices/crmhero.jpg",
        overviewImage: "/itservices/crmover.jpg",
        overview: `
We build CRM systems that centralize customer data and improve sales and support workflows.

Our CRM platforms enhance customer engagement and business intelligence.
        `,
        capabilities: [
          "Customer Data Management",
          "Sales Automation",
          "Reporting & Analytics",
          "Integration",
          "Customization"
        ],
        tools: ["salesforce", "customCRM"],
        outcomes: [
          "Improved customer relationships",
          "Better sales insights"
        ],
        industries: ["Sales", "Services"]
      },

      {
        id: "erp-systems",
        title: "ERP Systems",
        shortValue: "Integrated enterprise resource planning systems.",
        heroImage: "/itservices/erphero.jpg",
        overviewImage: "/itservices/erpover.jpg",
        overview: `
We develop ERP systems that unify business operations across departments. Our ERP solutions improve visibility, efficiency, and decision-making.

Designed for scalability and compliance.
        `,
        capabilities: [
          "Finance Management",
          "Supply Chain",
          "Reporting",
          "System Integration",
          "Security"
        ],
        tools: ["sap", "oracle", "customERP"],
        outcomes: [
          "Operational transparency",
          "Process optimization"
        ],
        industries: ["Manufacturing", "Enterprise"]
      },

      {
        id: "hrms-platforms",
        title: "HRMS Platforms",
        shortValue: "Human resource management systems.",
        heroImage: "/itservices/hrmshero.jpg",
        overviewImage: "/itservices/hrmsover.jpg",
        overview: `
We build HRMS platforms that manage employee data, payroll, and performance efficiently.

Our systems support compliance and workforce productivity.
        `,
        capabilities: [
          "Employee Management",
          "Payroll Processing",
          "Performance Tracking",
          "Compliance",
          "Reporting"
        ],
        tools: ["customHRMS"],
        outcomes: [
          "Efficient HR operations",
          "Improved workforce management"
        ],
        industries: ["Enterprise"]
      },

      {
        id: "inventory-asset-management",
        title: "Inventory & Asset Management Systems",
        shortValue: "Track and manage enterprise assets.",
        heroImage: "/itservices/invenhero.jpg",
        overviewImage: "/itservices/invenover.jpg",
        overview: `
We build inventory and asset management systems that provide real-time visibility and control over enterprise assets.

These systems reduce losses and improve operational efficiency.
        `,
        capabilities: [
          "Asset Tracking",
          "Inventory Control",
          "Reporting",
          "Integration",
          "Scalability"
        ],
        tools: ["customInventory"],
        outcomes: [
          "Reduced asset loss",
          "Optimized inventory"
        ],
        industries: ["Manufacturing", "Retail"]
      }
    ]
  },

  // ======================================================
  // 5. CLOUD & INFRASTRUCTURE SERVICES
  // ======================================================
  {
    categoryId: "cloud-infrastructure-services",
    categoryTitle: "Cloud & Infrastructure Services",
    categoryDescription:
      "Secure, scalable, and cost-optimized cloud solutions.",
    services: [
      {
        id: "cloud-migration",
        title: "Cloud Migration",
        shortValue: "Seamless migration to the cloud.",
        heroImage: "/itservices/cloudhero.jpg",
        overviewImage: "/itservices/cloudover.jpg",
        overview: `
We migrate applications and infrastructure to the cloud with minimal downtime. Our approach ensures security, performance, and cost efficiency.

We support hybrid and multi-cloud environments.
        `,
        capabilities: [
          "Assessment & Planning",
          "Data Migration",
          "Application Migration",
          "Security Configuration",
          "Post-Migration Support"
        ],
        tools: ["aws", "azure", "gcp"],
        outcomes: [
          "Reduced infrastructure costs",
          "Improved scalability"
        ],
        industries: ["Technology", "Enterprise"]
      },

      {
        id: "cloud-architecture-setup",
        title: "Cloud Architecture Setup",
        shortValue: "Robust cloud architecture design.",
        heroImage: "/itservices/clarhero.jpg",
        overviewImage: "/itservices/clarover.jpg",
        overview: `
We design cloud architectures optimized for performance, security, and scalability. Our architectures support modern application workloads.

Built for reliability and future growth.
        `,
        capabilities: [
          "Architecture Design",
          "Security & Governance",
          "Scalability Planning",
          "Cost Optimization",
          "Monitoring"
        ],
        tools: ["aws", "azure"],
        outcomes: [
          "Reliable cloud infrastructure",
          "Optimized costs"
        ],
        industries: ["SaaS", "Enterprise"]
      },

      {
        id: "application-integrations",
        title: "Application Integrations",
        shortValue: "Seamless system integrations.",
        heroImage: "/itservices/aihero.jpg",
        overviewImage: "/itservices/aiover.jpg",
        overview: `
We integrate applications and systems to ensure seamless data flow across platforms. Our integration solutions improve operational efficiency.

Supports cloud and on-premise systems.
        `,
        capabilities: [
          "API Integration",
          "Middleware Development",
          "Data Synchronization",
          "Security",
          "Monitoring"
        ],
        tools: ["node", "mulesoft"],
        outcomes: [
          "Connected systems",
          "Improved efficiency"
        ],
        industries: ["Enterprise"]
      },

      {
        id: "infrastructure-optimization",
        title: "Infrastructure Optimization",
        shortValue: "Optimize infrastructure performance and cost.",
        heroImage: "/itservices/infrahero.jpg",
        overviewImage: "/itservices/infraover.jpg",
        overview: `
We optimize IT infrastructure to improve performance, reliability, and cost efficiency. Our solutions enhance system availability.

Focused on long-term sustainability.
        `,
        capabilities: [
          "Performance Tuning",
          "Cost Optimization",
          "Monitoring",
          "Security Enhancements",
          "Scalability"
        ],
        tools: ["aws", "azure"],
        outcomes: [
          "Lower operational costs",
          "Improved system performance"
        ],
        industries: ["Enterprise"]
      },

      {
        id: "ucaas",
        title: "Unified Communications (UCaaS)",
        shortValue: "Cloud-based communication platforms.",
        heroImage: "/itservices/ucaashero.jpg",
        overviewImage: "/itservices/ucaasover.jpg",
        overview: `
We deliver UCaaS solutions that unify voice, video, messaging, and collaboration tools. Our solutions improve productivity and connectivity.

Designed for modern distributed teams.
        `,
        capabilities: [
          "VoIP Solutions",
          "Video Conferencing",
          "Collaboration Tools",
          "Security",
          "Scalability"
        ],
        tools: ["zoom", "teams", "twilio"],
        outcomes: [
          "Improved collaboration",
          "Reduced communication costs"
        ],
        industries: ["Enterprise", "Remote Teams"]
      }
    ]
  },

  // ======================================================
  // 6. CYBERSECURITY SOLUTIONS
  // ======================================================
  {
    categoryId: "cybersecurity-solutions",
    categoryTitle: "Cybersecurity Solutions",
    categoryDescription:
      "Comprehensive security strategies to protect digital assets.",
    services: [
      {
        id: "security-audits",
        title: "Security Audits",
        shortValue: "Comprehensive security assessments.",
        heroImage: "/itservices/sahero.jpg",
        overviewImage: "/itservices/saover.jpg",
        overview: `
We conduct in-depth security audits to identify vulnerabilities and compliance gaps. Our audits help organizations strengthen security posture.

Ensures regulatory compliance and risk reduction.
        `,
        capabilities: [
          "Security Assessment",
          "Compliance Review",
          "Risk Analysis",
          "Reporting",
          "Recommendations"
        ],
        tools: ["nessus", "burpsuite"],
        outcomes: [
          "Improved security posture",
          "Compliance readiness"
        ],
        industries: ["Finance", "Healthcare"]
      },

      {
        id: "vulnerability-assessment",
        title: "Vulnerability Assessment",
        shortValue: "Identify and mitigate vulnerabilities.",
        heroImage: "/itservices/vulhero.jpg",
        overviewImage: "/itservices/vulover.jpg",
        overview: `
We identify system vulnerabilities through continuous testing and analysis. Our assessments reduce exposure to cyber threats.

Designed for proactive risk management.
        `,
        capabilities: [
          "Vulnerability Scanning",
          "Penetration Testing",
          "Risk Analysis",
          "Reporting",
          "Mitigation Planning"
        ],
        tools: ["nessus", "metasploit"],
        outcomes: [
          "Reduced attack surface",
          "Improved resilience"
        ],
        industries: ["Enterprise"]
      },

      {
        id: "threat-monitoring",
        title: "Threat Monitoring",
        shortValue: "24/7 threat detection and response.",
        heroImage: "/itservices/tmhero.jpg",
        overviewImage: "/itservices/tmover.jpg",
        overview: `
We provide continuous threat monitoring to detect and respond to security incidents in real time. Our solutions ensure business continuity.

Proactive defense against cyber threats.
        `,
        capabilities: [
          "SOC Monitoring",
          "Incident Response",
          "Log Analysis",
          "Threat Intelligence",
          "Reporting"
        ],
        tools: ["splunk", "siem"],
        outcomes: [
          "Faster threat response",
          "Reduced downtime"
        ],
        industries: ["Finance", "Enterprise"]
      },

      {
        id: "data-protection-compliance",
        title: "Data Protection & Compliance",
        shortValue: "Protect sensitive data and ensure compliance.",
        heroImage: "/itservices/dphero.jpg",
        overviewImage: "/itservices/dpover.jpg",
        overview: `
We implement data protection strategies that ensure confidentiality, integrity, and compliance with regulations. Our solutions safeguard critical business data.

Designed for regulatory compliance and risk mitigation.
        `,
        capabilities: [
          "Data Encryption",
          "Access Control",
          "Compliance Management",
          "Monitoring",
          "Audit Support"
        ],
        tools: ["iam", "encryptionTools"],
        outcomes: [
          "Regulatory compliance",
          "Data security"
        ],
        industries: ["Healthcare", "Finance"]
      }
    ]
  }
];
