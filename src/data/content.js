import React from 'react';
import { Server, Cloud, Shield, Globe, Database, Cpu } from 'lucide-react';

export const SERVICES_DATA = [
    {
        id: 'network-ict',
        title: 'Enterprise Network & ICT',
        icon: <Server className="w-6 h-6" />,
        image: "assets/services/network-ict.jpg",
        shortDesc: 'Build robust, scalable, and secure network systems — the foundation of modern enterprise operations.',
        overview: 'Build the foundation of digital success with our Enterprise Network and ICT Infrastructure Services. In an era where connectivity dictates productivity, we design, deploy, and manage high-performance networks that support the evolving needs of modern enterprises, ensuring 99.9% uptime and seamless scalability.',
        expertise: [
            'LAN/WAN Design & Implementation',
            'SD-WAN & Hybrid Networking',
            'Data Center Architecture',
            'Structured Cabling & Fiber Optics',
            'Network Optimization & Load Balancing'
        ],
        workflow: [
            { step: "01", title: "Audit", desc: "We map your current infrastructure topology and identify bottlenecks." },
            { step: "02", title: "Design", desc: "Architecting a scalable network blueprint tailored to your traffic needs." },
            { step: "03", title: "Deploy", desc: "Seamless implementation with minimal operational disruption." },
            { step: "04", title: "Manage", desc: "24/7 monitoring to ensure peak performance and security." }
        ],
        benefits: ['Reduced latency by up to 40%', 'Enhanced connectivity across global offices', 'Seamless communication & VoIP integration', 'Lower operational maintenance costs'],
        whyUs: 'Our certified network architects bring a decade of combined experience, ensuring your digital backbone is built for speed, security, and growth.',
        cta: 'Get a Network Assessment'
    },
    {
        id: 'cloud-solutions',
        title: 'Cloud Solutions & Hosting',
        icon: <Cloud className="w-6 h-6" />,
        image: "assets/services/cloud_sol_and_hosting.jpg",
        shortDesc: 'Adopt the cloud with confidence. Migration, hosting, and multi-cloud management.',
        overview: 'Accelerate transformation with our Cloud Solutions and Hosting Services. Whether you are looking for public, private, or hybrid cloud environments, we deliver migration, hosting, and management strategies that reduce cost, improve flexibility, and ensure zero-downtime scalability.',
        expertise: [
            'Cloud Migration Strategy (AWS/Azure/GCP)',
            'Hybrid & Multi-Cloud Management',
            'Cloud Cost Optimization (FinOps)',
            'Serverless Architecture',
            'Disaster Recovery as a Service (DRaaS)'
        ],
        workflow: [
            { step: "01", title: "Assess", desc: "Evaluating workload readiness and dependency mapping." },
            { step: "02", title: "Plan", desc: "Defining the migration path (Rehost, Refactor, or Replatform)." },
            { step: "03", title: "Migrate", desc: "Secure data transfer and application deployment." },
            { step: "04", title: "Optimize", desc: "Continuous tuning for performance and cost efficiency." }
        ],
        benefits: ['Reduced infrastructure cost by 30%', 'Greater agility and rapid deployment', 'Improved collaboration via cloud tools', 'Enterprise-grade security & compliance'],
        whyUs: 'We ensure seamless migration and zero downtime, empowering businesses to focus on growth — not infrastructure management.',
        cta: 'Explore Cloud Strategies'
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity & Ethical Hacking',
        icon: <Shield className="w-6 h-6" />,
        image: "assets/services/cyber-security-ethical-hacking.jpg",
        shortDesc: 'Stay ahead of cyber threats with advanced security auditing and ethical hacking.',
        overview: 'In an age of constant digital threats, reactive security is not enough. Our Cybersecurity and Ethical Hacking services proactively identify vulnerabilities before attackers do. We safeguard your assets, data integrity, and brand reputation 24/7.',
        expertise: [
            'Vulnerability Assessment (VAPT)',
            'Penetration Testing (Web/App/Network)',
            'SOC & SIEM Implementation',
            'Compliance Audits (ISO 27001/GDPR)',
            'Endpoint Detection & Response (EDR)'
        ],
        workflow: [
            { step: "01", title: "Scan", desc: "Automated and manual scanning for known vulnerabilities." },
            { step: "02", title: "Attack", desc: "Controlled ethical hacking to exploit weak points." },
            { step: "03", title: "Report", desc: "Detailed risk assessment and remediation roadmap." },
            { step: "04", title: "Harden", desc: "Implementing patches and security layers." }
        ],
        benefits: ['Minimized data breach risks', 'Real-time threat visibility', 'Strengthened organizational compliance', 'Protection of intellectual property'],
        whyUs: 'Our ethical hackers and security analysts use enterprise-grade tools and intelligence to keep your systems a step ahead of attackers.',
        cta: 'Request Security Audit'
    },
    {
        id: 'web-development',
        title: 'Web & Mobile Development',
        icon: <Globe className="w-6 h-6" />,
        image: "assets/services/web-development.jpg",
        shortDesc: 'Sleek websites and scalable enterprise apps crafted for speed and user experience.',
        overview: 'Transform your digital presence with custom websites and mobile applications that deliver seamless user experiences. From React-based single page applications to complex enterprise portals, our development team crafts digital experiences that are powerful, fast, and user-focused.',
        expertise: [
            'Full-Stack Development (MERN/LAMP)',
            'iOS & Android Native Apps',
            'Progressive Web Apps (PWA)',
            'UI/UX Design & Prototyping',
            'API Development & Integration'
        ],
        workflow: [
            { step: "01", title: "Discovery", desc: "Understanding user personas and business goals." },
            { step: "02", title: "Design", desc: "Wireframing and high-fidelity UI creation." },
            { step: "03", title: "Build", desc: "Agile development with regular sprint reviews." },
            { step: "04", title: "Launch", desc: "Deployment, CI/CD setup, and post-launch support." }
        ],
        benefits: ['Modern, responsive designs', 'Optimized speed (Core Web Vitals)', 'Intuitive interfaces that boost engagement', 'Scalable backend architecture'],
        whyUs: 'We combine creative design with enterprise-grade technology to build digital experiences that inspire, engage, and perform.',
        cta: 'View Our Portfolio'
    },
    {
        id: 'data-analytics',
        title: 'Data Analytics & ERP/CRM',
        icon: <Database className="w-6 h-6" />,
        image: "assets/services/data-analytics.jpg",
        shortDesc: 'Unlock insights and efficiency. Data-driven dashboards and predictive models.',
        overview: 'Turn raw data into real business intelligence. Our ERP, CRM, and analytics solutions deliver actionable insights that drive smarter decisions. We design data-driven dashboards and predictive models that help organizations forecast trends and optimize operations.',
        expertise: [
            'Business Intelligence (Power BI/Tableau)',
            'ERP System Implementation',
            'CRM Customization & Integration',
            'Predictive Analytics & Forecasting',
            'Data Warehousing & ETL'
        ],
        workflow: [
            { step: "01", title: "Collect", desc: "Aggregating data from siloed sources." },
            { step: "02", title: "Clean", desc: "Data normalization and quality assurance." },
            { step: "03", title: "Analyze", desc: "Applying statistical models and algorithms." },
            { step: "04", title: "Visualize", desc: "Creating interactive dashboards for stakeholders." }
        ],
        benefits: ['Data-driven decision-making', 'Enhanced operational visibility', 'Improved ROI and forecasting', 'Automated reporting workflows'],
        whyUs: 'We align your technology and strategy using real-time analytics, empowering you to make decisions that move your business forward.',
        cta: 'Schedule Consultation'
    },
    {
        id: 'managed-it',
        title: 'Managed IT Services',
        icon: <Cpu className="w-6 h-6" />,
        image: "assets/services/managed-it-services.jpg",
        shortDesc: 'Focus on your business — we’ll manage your technology. 24/7 monitoring and support.',
        overview: 'Focus on what you do best — let us manage your IT operations. Our Managed IT Services provide end-to-end monitoring, maintenance, and technical support, ensuring your infrastructure is always on, always updated, and always secure.',
        expertise: [
            '24/7 Remote Monitoring & Management (RMM)',
            'Helpdesk & Technical Support',
            'Patch Management & Updates',
            'Backup & Disaster Recovery',
            'IT Asset Management'
        ],
        workflow: [
            { step: "01", title: "Monitor", desc: "Continuous tracking of system health." },
            { step: "02", title: "Detect", desc: "Proactive identification of potential issues." },
            { step: "03", title: "Resolve", desc: "Rapid remediation before impact." },
            { step: "04", title: "Optimize", desc: "Regular performance tuning and reporting." }
        ],
        benefits: ['Reduced downtime', 'Predictable IT costs', '24/7 system health monitoring', 'Access to enterprise-level expertise'],
        whyUs: 'Our proactive approach ensures your systems never sleep — even when you do.',
        cta: 'Talk to Our Experts'
    }
];

export const FAQS = [
    { q: "What industries do you serve?", a: "We serve clients across IT, finance, manufacturing, healthcare, education, logistics, and government sectors, providing tailor-made digital infrastructure." },
    { q: "Do you provide 24/7 technical support?", a: "Yes. Our round-the-clock managed IT support ensures uninterrupted business operations and rapid issue resolution." },
    { q: "How do you ensure data security?", a: "We follow ISO-compliant, multi-layered cybersecurity protocols — including encryption, access control, and threat detection systems." },
    { q: "Can you assist with complete digital transformation?", a: "Absolutely. From cloud migration to cybersecurity, we provide end-to-end modernization strategies for enterprises of all sizes." }
];