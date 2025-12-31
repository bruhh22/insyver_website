import React from 'react';
import { Server, Cloud, Shield, Globe, Database, Cpu, Laptop, Key, PenTool, Rocket, TrendingUp, Lightbulb } from 'lucide-react';


export const DEFAULT_SERVICE_IMG = "https://images.unsplash.com/photo-1626785774573-4b799312c95d?q=80&w=2071&auto=format&fit=crop";

// export const SERVICES_DATA = [
//     {
//         id: 'network-ict',
//         title: 'Enterprise Network & ICT',
//         icon: <Server className="w-6 h-6" />,
//         image: "assets/services/network-ict.jpg",
//         shortDesc: 'Build robust, scalable, and secure network systems — the foundation of modern enterprise operations.',
//         overview: 'Build the foundation of digital success with our Enterprise Network and ICT Infrastructure Services. In an era where connectivity dictates productivity, we design, deploy, and manage high-performance networks that support the evolving needs of modern enterprises, ensuring 99.9% uptime and seamless scalability.',
//         expertise: [
//             'LAN/WAN Design & Implementation',
//             'SD-WAN & Hybrid Networking',
//             'Data Center Architecture',
//             'Structured Cabling & Fiber Optics',
//             'Network Optimization & Load Balancing'
//         ],
//         workflow: [
//             { step: "01", title: "Audit", desc: "We map your current infrastructure topology and identify bottlenecks." },
//             { step: "02", title: "Design", desc: "Architecting a scalable network blueprint tailored to your traffic needs." },
//             { step: "03", title: "Deploy", desc: "Seamless implementation with minimal operational disruption." },
//             { step: "04", title: "Manage", desc: "24/7 monitoring to ensure peak performance and security." }
//         ],
//         benefits: ['Reduced latency by up to 40%', 'Enhanced connectivity across global offices', 'Seamless communication & VoIP integration', 'Lower operational maintenance costs'],
//         whyUs: 'Our certified network architects bring a decade of combined experience, ensuring your digital backbone is built for speed, security, and growth.',
//         cta: 'Get a Network Assessment'
//     },
//     {
//         id: 'cloud-solutions',
//         title: 'Cloud Solutions & Hosting',
//         icon: <Cloud className="w-6 h-6" />,
//         image: "assets/services/cloud_sol_and_hosting.jpg",
//         shortDesc: 'Adopt the cloud with confidence. Migration, hosting, and multi-cloud management.',
//         overview: 'Accelerate transformation with our Cloud Solutions and Hosting Services. Whether you are looking for public, private, or hybrid cloud environments, we deliver migration, hosting, and management strategies that reduce cost, improve flexibility, and ensure zero-downtime scalability.',
//         expertise: [
//             'Cloud Migration Strategy (AWS/Azure/GCP)',
//             'Hybrid & Multi-Cloud Management',
//             'Cloud Cost Optimization (FinOps)',
//             'Serverless Architecture',
//             'Disaster Recovery as a Service (DRaaS)'
//         ],
//         workflow: [
//             { step: "01", title: "Assess", desc: "Evaluating workload readiness and dependency mapping." },
//             { step: "02", title: "Plan", desc: "Defining the migration path (Rehost, Refactor, or Replatform)." },
//             { step: "03", title: "Migrate", desc: "Secure data transfer and application deployment." },
//             { step: "04", title: "Optimize", desc: "Continuous tuning for performance and cost efficiency." }
//         ],
//         benefits: ['Reduced infrastructure cost by 30%', 'Greater agility and rapid deployment', 'Improved collaboration via cloud tools', 'Enterprise-grade security & compliance'],
//         whyUs: 'We ensure seamless migration and zero downtime, empowering businesses to focus on growth — not infrastructure management.',
//         cta: 'Explore Cloud Strategies'
//     },
//     {
//         id: 'cybersecurity',
//         title: 'Cybersecurity & Ethical Hacking',
//         icon: <Shield className="w-6 h-6" />,
//         image: "assets/services/cyber-security-ethical-hacking.jpg",
//         shortDesc: 'Stay ahead of cyber threats with advanced security auditing and ethical hacking.',
//         overview: 'In an age of constant digital threats, reactive security is not enough. Our Cybersecurity and Ethical Hacking services proactively identify vulnerabilities before attackers do. We safeguard your assets, data integrity, and brand reputation 24/7.',
//         expertise: [
//             'Vulnerability Assessment (VAPT)',
//             'Penetration Testing (Web/App/Network)',
//             'SOC & SIEM Implementation',
//             'Compliance Audits (ISO 27001/GDPR)',
//             'Endpoint Detection & Response (EDR)'
//         ],
//         workflow: [
//             { step: "01", title: "Scan", desc: "Automated and manual scanning for known vulnerabilities." },
//             { step: "02", title: "Attack", desc: "Controlled ethical hacking to exploit weak points." },
//             { step: "03", title: "Report", desc: "Detailed risk assessment and remediation roadmap." },
//             { step: "04", title: "Harden", desc: "Implementing patches and security layers." }
//         ],
//         benefits: ['Minimized data breach risks', 'Real-time threat visibility', 'Strengthened organizational compliance', 'Protection of intellectual property'],
//         whyUs: 'Our ethical hackers and security analysts use enterprise-grade tools and intelligence to keep your systems a step ahead of attackers.',
//         cta: 'Request Security Audit'
//     },
//     {
//         id: 'web-development',
//         title: 'Web & Mobile Development',
//         icon: <Globe className="w-6 h-6" />,
//         image: "assets/services/web-development.jpg",
//         shortDesc: 'Sleek websites and scalable enterprise apps crafted for speed and user experience.',
//         overview: 'Transform your digital presence with custom websites and mobile applications that deliver seamless user experiences. From React-based single page applications to complex enterprise portals, our development team crafts digital experiences that are powerful, fast, and user-focused.',
//         expertise: [
//             'Full-Stack Development (MERN/LAMP)',
//             'iOS & Android Native Apps',
//             'Progressive Web Apps (PWA)',
//             'UI/UX Design & Prototyping',
//             'API Development & Integration'
//         ],
//         workflow: [
//             { step: "01", title: "Discovery", desc: "Understanding user personas and business goals." },
//             { step: "02", title: "Design", desc: "Wireframing and high-fidelity UI creation." },
//             { step: "03", title: "Build", desc: "Agile development with regular sprint reviews." },
//             { step: "04", title: "Launch", desc: "Deployment, CI/CD setup, and post-launch support." }
//         ],
//         benefits: ['Modern, responsive designs', 'Optimized speed (Core Web Vitals)', 'Intuitive interfaces that boost engagement', 'Scalable backend architecture'],
//         whyUs: 'We combine creative design with enterprise-grade technology to build digital experiences that inspire, engage, and perform.',
//         cta: 'View Our Portfolio'
//     },
//     {
//         id: 'data-analytics',
//         title: 'Data Analytics & ERP/CRM',
//         icon: <Database className="w-6 h-6" />,
//         image: "assets/services/data-analytics.jpg",
//         shortDesc: 'Unlock insights and efficiency. Data-driven dashboards and predictive models.',
//         overview: 'Turn raw data into real business intelligence. Our ERP, CRM, and analytics solutions deliver actionable insights that drive smarter decisions. We design data-driven dashboards and predictive models that help organizations forecast trends and optimize operations.',
//         expertise: [
//             'Business Intelligence (Power BI/Tableau)',
//             'ERP System Implementation',
//             'CRM Customization & Integration',
//             'Predictive Analytics & Forecasting',
//             'Data Warehousing & ETL'
//         ],
//         workflow: [
//             { step: "01", title: "Collect", desc: "Aggregating data from siloed sources." },
//             { step: "02", title: "Clean", desc: "Data normalization and quality assurance." },
//             { step: "03", title: "Analyze", desc: "Applying statistical models and algorithms." },
//             { step: "04", title: "Visualize", desc: "Creating interactive dashboards for stakeholders." }
//         ],
//         benefits: ['Data-driven decision-making', 'Enhanced operational visibility', 'Improved ROI and forecasting', 'Automated reporting workflows'],
//         whyUs: 'We align your technology and strategy using real-time analytics, empowering you to make decisions that move your business forward.',
//         cta: 'Schedule Consultation'
//     },
//     {
//         id: 'managed-it',
//         title: 'Managed IT Services',
//         icon: <Cpu className="w-6 h-6" />,
//         image: "assets/services/managed-it-services.jpg",
//         shortDesc: 'Focus on your business — we’ll manage your technology. 24/7 monitoring and support.',
//         overview: 'Focus on what you do best — let us manage your IT operations. Our Managed IT Services provide end-to-end monitoring, maintenance, and technical support, ensuring your infrastructure is always on, always updated, and always secure.',
//         expertise: [
//             '24/7 Remote Monitoring & Management (RMM)',
//             'Helpdesk & Technical Support',
//             'Patch Management & Updates',
//             'Backup & Disaster Recovery',
//             'IT Asset Management'
//         ],
//         workflow: [
//             { step: "01", title: "Monitor", desc: "Continuous tracking of system health." },
//             { step: "02", title: "Detect", desc: "Proactive identification of potential issues." },
//             { step: "03", title: "Resolve", desc: "Rapid remediation before impact." },
//             { step: "04", title: "Optimize", desc: "Regular performance tuning and reporting." }
//         ],
//         benefits: ['Reduced downtime', 'Predictable IT costs', '24/7 system health monitoring', 'Access to enterprise-level expertise'],
//         whyUs: 'Our proactive approach ensures your systems never sleep — even when you do.',
//         cta: 'Talk to Our Experts'
//     }
// ];

// --- DATA CONSTANTS ---
export const SERVICES_DATA = [
    {
        id: 'network-ict',
        title: 'ICT Infrastructure',
        icon: <Server className="w-6 h-6" />,
        image: "assets/services/network-ict.jpg",
        shortDesc: 'High-performance enterprise networking with Wi-Fi 6, switching, and routing.',
        overview: 'As a next-generation ICT Solutions Provider, we build robust, scalable, and secure network systems that serve as the foundation of modern enterprise operations. From high-performance Wi-Fi 6 deployment to complex datacenter routing and structured cabling, we ensure your digital backbone is future-ready.',
        technologies: ['Cisco', 'Aruba', 'TP-Link Omada', 'D-Link', 'Fiber Optics'],
        expertise: ['Enterprise Wi-Fi', 'Switching & Routing', 'Structured Cabling', 'Datacenter Setup', 'Network Security & Segmentation', 'Performance Optimization & Audits'],
        workflow: [
            { step: "01", title: "Infrastructure Audit", desc: "We conduct a rigorous analysis of your existing network ecosystem to identify bottlenecks and security gaps.", deliverable: "Network Assessment Report" },
            { step: "02", title: "Strategic Design", desc: "Our architects design a scalable, high-performance network topology tailored to your specific traffic patterns.", deliverable: "Network Blueprint & LLD" },
            { step: "03", title: "Seamless Deployment", desc: "We execute a phased rollout of hardware and software configurations, ensuring zero disruption to operations.", deliverable: "Fully Commissioned Network" },
            { step: "04", title: "Proactive Monitoring", desc: "Continuous 24/7 surveillance allows us to detect anomalies instantly and optimize bandwidth.", deliverable: "Monthly Performance Analytics" }
        ],
        benefits: ['Reduced latency', 'Enhanced connectivity', 'Seamless communication', 'Lower maintenance costs'],
        whyUs: 'Certified architects building your digital backbone.',
        cta: 'Get Network Assessment'
    },
    {
        id: 'cloud-solutions',
        title: 'Cloud & Datacenter',
        icon: <Cloud className="w-6 h-6" />,
        image: "assets/services/cloud_sol_and_hosting.jpg",
        shortDesc: 'Cloud migration and modernization - Azure, AWS and GCP with architecture design.',
        overview: 'Adopt the cloud with confidence. We deliver end-to-end cloud migration and modernization strategies across Azure, AWS, and GCP. Our services include hybrid cloud architecture design, disaster recovery planning, and seamless Workspace/M365 deployment.',
        technologies: ['Microsoft Azure', 'AWS', 'Google Cloud', 'Microsoft 365', 'Google Workspace'],
        expertise: ['Cloud Migration', 'Architecture Design', 'Backup & DR', 'Hybrid Cloud Setups', 'M365 / Workspace Deployment', 'Cloud Cost & Security Optimization'],
        workflow: [
            { step: "01", title: "Readiness Assessment", desc: "We evaluate your applications and data dependencies to determine the most effective migration strategy.", deliverable: "Migration Readiness Report" },
            { step: "02", title: "Target Architecture", desc: "We architect a secure, compliant, and cost-efficient cloud environment tailored to your workload.", deliverable: "Cloud Architecture Diagram" },
            { step: "03", title: "Secure Migration", desc: "Our team executes the migration with minimal downtime, ensuring data integrity and secure transfer.", deliverable: "Live Cloud Environment" },
            { step: "04", title: "Continuous Optimization", desc: "We implement FinOps practices to monitor usage and optimize costs while maintaining strict security.", deliverable: "Cost & Compliance Dashboard" }
        ],
        benefits: ['Reduced infrastructure costs', 'Greater agility & scalability', 'Enterprise-grade security', '99.9% Uptime reliability'],
        whyUs: 'Expertise across all major cloud platforms ensuring a vendor-agnostic, best-fit solution.',
        cta: 'Explore Cloud Strategies'
    },
    {
        id: 'amc-managed-it',
        title: 'AMC & Managed IT',
        icon: <Cpu className="w-6 h-6" />,
        image: "assets/services/amc-managed-it.jpg",
        shortDesc: 'SLA-driven IT management with 24/7 helpdesk, proactive monitoring, patching and maintenance.',
        overview: 'Focus on your business while we manage your technology. Our SLA-driven Managed IT Services provide 24/7 helpdesk support, proactive monitoring, patch management, and complete hardware/software maintenance to ensure business continuity.',
        expertise: ['24/7 Helpdesk', 'Monitoring & Patching', 'Infra Optimization', 'Hardware Maintenance', 'Incident & Problem Management', 'Business Continuity Support'],
        technologies: ['Remote Monitoring (RMM)', 'Patch Management', 'Asset Tracking', 'Service Desk'],
        workflow: [
            { step: "01", title: "Asset Discovery", desc: "We catalogue all IT assets and establish baseline performance metrics to create a support framework.", deliverable: "Asset Inventory & SLA" },
            { step: "02", title: "Proactive Monitoring", desc: "We deploy advanced RMM tools to track system health in real-time, identifying failures before impact.", deliverable: "Monitoring Dashboard Setup" },
            { step: "03", title: "Incident Resolution", desc: "Our 24/7 helpdesk provides rapid response and remediation for issues based on defined SLAs.", deliverable: "Incident Resolution Logs" },
            { step: "04", title: "Performance Review", desc: "Regular audits and patch management ensure your infrastructure remains secure and optimized.", deliverable: "Quarterly Business Review" }
        ],
        benefits: ['Reduced downtime', 'Predictable IT costs', 'Proactive health checks', 'Dedicated support team'],
        whyUs: 'We don’t just fix problems; we prevent them through proactive monitoring.',
        cta: 'Get Managed Support'
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity Services',
        icon: <Shield className="w-6 h-6" />,
        image: "assets/services/cyber-security-ethical-hacking.jpg",
        shortDesc: 'Complete cybersecurity stack with EDR/XDR, NGFW, SOC monitoring, and VAPT.',
        overview: 'In an age of constant threats, we provide a complete cybersecurity stack. From EDR/XDR and Next-Gen Firewalls to 24/7 SOC monitoring and Vulnerability Assessment (VAPT), we safeguard your digital ecosystem against evolving attacks.',
        expertise: ['Endpoint Security (EDR/XDR)', 'Firewall & SOC Operations', 'VAPT & Risk Assessment', 'Identity & Access Management (IAM)', 'Compliance & Security Audits', 'Incident Response & Threat Handling'],
        technologies: ['Sophos', 'Quick Heal', 'Seqrite', 'McAfee', 'Bitdefender'],
        workflow: [
            { step: "01", title: "Vulnerability Assessment", desc: "We simulate sophisticated cyberattacks to uncover weaknesses in your network and applications.", deliverable: "VAPT Report & Risk Score" },
            { step: "02", title: "Defense Implementation", desc: "We deploy multi-layered security protocols, including Next-Gen Firewalls and EDR, to harden infrastructure.", deliverable: "Security Hardening Report" },
            { step: "03", title: "Continuous Monitoring", desc: "Our Security Operations Center (SOC) provides 24/7 surveillance to detect and neutralize threats.", deliverable: "Threat Intelligence Alerts" },
            { step: "04", title: "Incident Response", desc: "In the event of a breach, we execute immediate containment strategies and ensure compliance.", deliverable: "Compliance & Incident Report" }
        ],
        benefits: ['Data protection', 'Regulatory compliance', 'Real-time threat detection', 'Business continuity'],
        whyUs: 'A proactive, multi-layered defense strategy aligned with ISO 27001 standards.',
        cta: 'Request Security Audit'
    },
    {
        id: 'enterprise-devices',
        title: 'Enterprise Devices',
        icon: <Laptop className="w-6 h-6" />,
        image: "assets/services/enterprise.jpg",
        shortDesc: 'End-to-end supply, deployment and lifecycle management of hardware.',
        overview: 'We act as your Value-Added Reseller (VAR) for end-to-end hardware supply. From bulk rollout of laptops and servers to OS imaging and warranty handling, we manage the entire lifecycle of your enterprise devices.',
        technologies: ['HP', 'Dell', 'Lenovo', 'Apple', 'APC/UPS'],
        expertise: ['Bulk Hardware Procurement', 'OS Imaging & Configuration', 'Enterprise Device Deployment', 'Warranty & RMA Handling', 'Asset Tracking & Inventory', 'Lifecycle & Secure Disposal'],
        workflow: [
            { step: "01", title: "Procurement Strategy", desc: "We leverage OEM partnerships to source high-performance hardware tailored to your specific needs.", deliverable: "Hardware Procurement Plan" },
            { step: "02", title: "Staging & Imaging", desc: "Devices are pre-configured with your standard operating environment (SOE) and security policies.", deliverable: "Ready-to-Deploy Assets" },
            { step: "03", title: "Logistics & Deployment", desc: "We manage the secure delivery and installation of devices, ensuring Day-1 productivity.", deliverable: "Deployment Sign-off" },
            { step: "04", title: "Lifecycle Support", desc: "We handle warranty claims, repairs, and eventual secure disposal of assets.", deliverable: "Asset Lifecycle Report" }
        ],
        benefits: ['Streamlined procurement', 'Standardized configurations', 'Reduced setup time', 'Efficient asset tracking'],
        whyUs: 'Direct partnerships with global OEMs ensure best pricing and priority support.',
        cta: 'Request Hardware Quote'
    },
    {
        id: 'software-licensing',
        title: 'Software Licensing',
        icon: <Key className="w-6 h-6" />,
        image: "assets/services/software-licensing.jpg",
        shortDesc: 'Licensing solutions for M365, Workspace, Adobe, and endpoint security.',
        overview: 'Simplify compliance and procurement with our comprehensive software licensing solutions. We handle licensing for Microsoft 365, Google Workspace, Adobe Creative Cloud, and endpoint security tools, ensuring you stay compliant and cost-optimized.',
        technologies: ['Microsoft 365', 'Google Workspace', 'Adobe Creative Cloud', 'VMware'],
        expertise: ['M365 & Google Workspace Licensing', 'Security & Antivirus Licensing', 'Server OS & Virtualization', 'Backup & DR Licensing', 'Compliance & License Audits', 'Renewal & Cost Optimization'],
        workflow: [
            { step: "01", title: "Inventory Audit", desc: "We conduct a thorough audit of your current software assets to identify redundancy and non-compliance.", deliverable: "Licensing Gap Analysis" },
            { step: "02", title: "Strategy Optimization", desc: "We recommend the most cost-effective licensing models based on your actual usage patterns.", deliverable: "Optimization Roadmap" },
            { step: "03", title: "Provisioning", desc: "We facilitate the rapid acquisition and assignment of licenses for seamless access.", deliverable: "License Entitlement Cert" },
            { step: "04", title: "Renewal Management", desc: "We proactively track renewal dates and compliance requirements to prevent service interruptions.", deliverable: "Compliance Status Report" }
        ],
        benefits: ['Compliance assurance', 'Cost optimization', 'Simplified management', 'Vendor consolidation'],
        whyUs: 'We ensure you only pay for what you use, optimizing your software spend.',
        cta: 'Get Licensing Help'
    },
    {
        id: 'web-development',
        title: 'Web & Mobile Apps',
        icon: <Globe className="w-6 h-6" />,
        image: "assets/services/web-development.jpg",
        shortDesc: 'Custom web platforms and mobile apps powered by modern frameworks.',
        overview: 'We build digital experiences that engage and convert. Our development team creates custom web platforms and mobile applications using modern frameworks, ensuring high performance, responsive design, and intuitive user experiences tailored to your business goals.',
        technologies: ['React', 'Node.js', 'Flutter', 'React Native', 'AWS'],
        expertise: ['Custom Web Applications', 'Mobile App Development', 'Scalable Backend Systems', 'UI/UX Design & Prototyping', 'API & System Integrations', 'CI/CD & Cloud Deployment'
        ],
        workflow: [
            { step: "01", title: "Discovery & UX", desc: "We define user personas and business goals to create interactive wireframes mapping the user journey.", deliverable: "High-Fidelity Prototypes" },
            { step: "02", title: "Agile Development", desc: "Our full-stack team builds robust, scalable applications using modern frameworks and modular architecture.", deliverable: "Beta Application Build" },
            { step: "03", title: "QA & Security", desc: "We conduct rigorous functional, performance, and security testing to ensure a bug-free experience.", deliverable: "QA Validation Report" },
            { step: "04", title: "Deployment & CI/CD", desc: "We deploy the application using automated pipelines for seamless updates and high availability.", deliverable: "Live Production Release" }
        ],
        benefits: ['Scalable architecture', 'Modern UX', 'High performance', 'Cross-platform support'],
        whyUs: 'Bridging the gap between complex business logic and elegant user experience.',
        cta: 'View Portfolio'
    },
    {
        id: 'data-analytics',
        title: 'Data Analytics & ERP',
        icon: <Database className="w-6 h-6" />,
        image: "assets/services/data-analytics.jpg",
        shortDesc: 'Business intelligence, analytics pipelines and integrated ERP/CRM systems.',
        overview: 'Transform data into your most valuable asset. We implement Business Intelligence (BI) dashboards, data analytics pipelines, and integrated ERP/CRM systems that help organizations forecast trends, optimize operations, and make smarter decisions.',
        technologies: ['Power BI', 'Tableau', 'Salesforce', 'SAP', 'SQL'],
        expertise: ['BI Dashboards & Reporting', 'Data Analytics Pipelines', 'ERP System Implementation', 'CRM Integration', 'Predictive Analytics', 'Decision-Driven Automation'],
        workflow: [
            { step: "01", title: "Data Ingestion", desc: "We consolidate data from disparate sources into a unified warehouse, ensuring data integrity.", deliverable: "Unified Data Schema" },
            { step: "02", title: "Analytical Modeling", desc: "We apply advanced statistical models to extract meaningful patterns and trends from your raw data.", deliverable: "Data Analysis Model" },
            { step: "03", title: "Dashboard Design", desc: "We create interactive, real-time dashboards to present insights in an intuitive format.", deliverable: "BI Dashboard Access" },
            { step: "04", title: "ERP Integration", desc: "We integrate insights directly into your ERP/CRM workflows to automate decision-making.", deliverable: "Integrated Workflow System" }
        ],
        benefits: ['Actionable insights', 'Operational visibility', 'Automated reporting', 'Better forecasting'],
        whyUs: 'We make complex data simple, visual, and actionable.',
        cta: 'Consult Data Experts'
    },
    {
        id: 'consultancy',
        title: 'IT Consultancy',
        icon: <Lightbulb className="w-6 h-6" />,
        image: "assets/services/consultancy.jpg",
        shortDesc: 'Strategic advisory with full IT operations management and lifecycle planning.',
        overview: 'Navigate the complex technology landscape with confidence. Our IT consultancy services provide strategic advisory, infrastructure planning, and operations management to align your technology roadmap with your long-term business goals.',
        technologies: ['IT Strategy', 'Digital Transformation', 'Risk Management'],
        expertise: ['IT Strategy & Roadmapping', 'Digital Transformation Advisory', 'Infrastructure Planning', 'Operations & Cost Optimization', 'Risk & Compliance Management', 'Vendor & Technology Selection'],
        workflow: [
            { step: "01", title: "Strategic Assessment", desc: "We evaluate your current IT maturity, identifying gaps between capabilities and business objectives.", deliverable: "IT Maturity Scorecard" },
            { step: "02", title: "Roadmap Formulation", desc: "We define a phased strategy to modernize your infrastructure, detailing technology selection.", deliverable: "3-Year Strategic Roadmap" },
            { step: "03", title: "Program Execution", desc: "We oversee the implementation of critical initiatives, ensuring alignment with budget and scope.", deliverable: "Project Status Reports" },
            { step: "04", title: "Value Realization", desc: "We review solutions to ensure they deliver projected ROI and operational improvements.", deliverable: "Impact Assessment Report" }
        ],
        benefits: ['Strategic alignment', 'Cost efficiency', 'Risk reduction', 'Future-readiness'],
        whyUs: 'Experienced advisors who understand both business and technology.',
        cta: 'Talk to Consultants'
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        icon: <TrendingUp className="w-6 h-6" />,
        image: "assets/services/digital-marketing.jpg",
        shortDesc: 'Results-focused digital growth through SEO/SEM, social media, and ads.',
        overview: 'Grow your digital footprint. Our results-focused digital marketing services encompass SEO/SEM, social media strategy, performance advertising, and automation to drive traffic, leads, and brand awareness.',
        technologies: ['Google Ads', 'Facebook Ads', 'SEO Tools', 'Analytics'],
        expertise: ['SEO & SEM Strategy',
            'Paid Advertising Campaigns',
            'Social Media Management',
            'Marketing Automation',
            'Analytics & Performance Tracking',
            'Brand Growth Optimization'],
        workflow: [
            { step: "01", title: "SEO Audit", desc: "We perform a deep dive into your market position to identify growth opportunities.", deliverable: "Competitor Analysis Report" },
            { step: "02", title: "Strategy Formulation", desc: "We develop a comprehensive marketing plan tailored to your target audience and KPIs.", deliverable: "Digital Strategy Deck" },
            { step: "03", title: "Campaign Execution", desc: "We launch targeted PPC campaigns and engaging content to capture high-quality leads.", deliverable: "Live Campaign Assets" },
            { step: "04", title: "Performance Analytics", desc: "We continuously analyze campaign data to refine targeting and maximize Return on Ad Spend.", deliverable: "Monthly ROI Report" }
        ],
        benefits: ['Increased visibility', 'Quality lead generation', 'Brand authority', 'Measurable ROI'],
        whyUs: 'Data-driven marketing that delivers tangible results.',
        cta: 'Boost Your Growth'
    },
    {
        id: 'graphic-design',
        title: 'Graphic & Video',
        icon: <PenTool className="w-6 h-6" />,
        image: "assets/services/graphic-video.jpg",
        shortDesc: 'Brand-centric visual design and production using professional creative tools.',
        overview: 'Visuals that speak louder than words. We provide brand-centric graphic design and video editing services, creating professional marketing materials, brand assets, and digital content that captivate your audience.',
        technologies: ['Adobe Creative Cloud', 'Premiere Pro', 'After Effects', 'Figma'],
        expertise: [
            'Brand Identity Design',
            'Marketing Collateral Design',
            'Video Editing & Motion Graphics',
            'UI & Digital Creatives',
            'Social Media Visual Assets',
            'Professional Content Production'
        ],
        workflow: [
            { step: "01", title: "Creative Concept", desc: "We brainstorm and storyboard unique visual concepts that align with your brand identity.", deliverable: "Mood Boards" },
            { step: "02", title: "Design Production", desc: "Our designers bring concepts to life using industry-standard tools for high-fidelity assets.", deliverable: "Draft Creative Assets" },
            { step: "03", title: "Iterative Refinement", desc: "We incorporate your feedback through structured revision rounds to ensure perfect alignment.", deliverable: "Revised Asset Versions" },
            { step: "04", title: "Final Rendering", desc: "We export and package all creative assets in formats optimized for web and print.", deliverable: "Master Asset Library" }
        ],
        benefits: ['Consistent branding', 'Higher engagement', 'Professional aesthetic', 'Multi-channel assets'],
        whyUs: 'Creative professionals equipped with industry-standard tools.',
        cta: 'See Creative Work'
    },
    {
        id: 'startup-enablement',
        title: 'Startup Enablement',
        icon: <Rocket className="w-6 h-6" />,
        image: "assets/services/data-analytics.jpg",
        shortDesc: 'Business acceleration through branding, digital setup, and automation.',
        overview: 'Accelerate your startup journey. We provide a complete enablement package including branding support, digital setup, workflow automation, and scalable tech infrastructure to help new businesses launch and grow fast.',
        technologies: ['Branding', 'Automation', 'Cloud Infrastructure', 'Digital Tools'],
        expertise: [
            'Branding & Identity Setup',
            'Digital Infrastructure Setup',
            'Process & Workflow Automation',
            'Cloud & Tool Enablement',
            'Scalable Tech Architecture',
            'Growth & Acceleration Support'
        ],
        workflow: [
            { step: "01", title: "Foundation Setup", desc: "We establish your digital presence with domain, email, and brand identity setup.", deliverable: "Brand Identity Kit" },
            { step: "02", title: "Infrastructure Provision", desc: "We deploy essential cloud infrastructure and collaboration tools for immediate operations.", deliverable: "Cloud Environment Setup" },
            { step: "03", title: "Process Automation", desc: "We integrate CRM and project tools to automate workflows and streamline operations.", deliverable: "Automated Workflow System" },
            { step: "04", title: "Scaling Strategy", desc: "We provide a technology roadmap to scale your infrastructure as your startup expands.", deliverable: "Scaling Playbook" }
        ],
        benefits: ['Faster time-to-market', 'Scalable foundation', 'Cost efficiency', 'Professional launch'],
        whyUs: 'We handle the tech so you can focus on the vision.',
        cta: 'Start Your Journey'
    }
];
export const FAQS = [
    { q: "What industries do you serve?", a: "We serve clients across IT, finance, manufacturing, healthcare, education, logistics, and government sectors, providing tailor-made digital infrastructure." },
    { q: "Do you provide 24/7 technical support?", a: "Yes. Our round-the-clock managed IT support ensures uninterrupted business operations and rapid issue resolution." },
    { q: "How do you ensure data security?", a: "We follow ISO-compliant, multi-layered cybersecurity protocols — including encryption, access control, and threat detection systems." },
    { q: "Can you assist with complete digital transformation?", a: "Absolutely. From cloud migration to cybersecurity, we provide end-to-end modernization strategies for enterprises of all sizes." }
];