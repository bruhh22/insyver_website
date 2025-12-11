// import React, { useEffect } from 'react';
// import { useTheme } from '../context/ThemeContext';

// const Legal = ({ type }) => {
//     const { isDark } = useTheme();
//     useEffect(() => window.scrollTo(0, 0), []);
//     return (
//         <div className="page-container container mx-auto px-4 max-w-3xl min-h-screen animate-page-enter">
//             <h1 className={`text-4xl font-bold mb-8 border-b pb-6 ${isDark ? 'text-white border-slate-800' : 'text-slate-900 border-slate-200'}`}>
//                 {type === 'privacy' ? 'Privacy Policy' : type === 'terms' ? 'Terms of Service' : 'Cookie Policy'}
//             </h1>
//             <div className={`space-y-6 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
//                 <p>This is a placeholder for the full legal text content. In a production environment, the detailed legal stipulations regarding data collection, user rights, and service agreements would appear here, formatted for readability.</p>
//             </div>
//         </div>
//     );
// };

// export default Legal;

import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Legal = ({ type }) => {
    const { isDark } = useTheme();

    // Scroll to top when the component mounts or when 'type' changes
    useEffect(() => window.scrollTo(0, 0), [type]);

    // Styling helpers to maintain readability
    const headingClass = `text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`;
    const subHeadingClass = `text-xl font-semibold mt-6 mb-3 ${isDark ? 'text-slate-200' : 'text-slate-700'}`;
    const listClass = "list-disc pl-6 mb-4 space-y-2";
    const linkClass = "text-blue-500 hover:text-blue-600 hover:underline transition-colors";
    const contactBoxClass = `p-6 rounded-lg border mt-6 ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`;

    const renderContent = () => {
        switch (type) {
            case 'privacy':
                return (
                    <>
                        <p className="italic mb-6">Last Updated: November 2025 | Effective From: Immediately</p>
                        <p>
                            At <strong>Insyver Technologies (OPC) Pvt. Ltd.</strong>, accessible from www.insyvertechnologies.com, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, store, and protect your information when you interact with our website, services, or communications.
                        </p>

                        <h2 className={headingClass}>1. Information We Collect</h2>

                        <h3 className={subHeadingClass}>a. Personal Information</h3>
                        <p>We may collect personal data when you fill out a contact form, subscribe to newsletters, or request a quote. This includes:</p>
                        <ul className={listClass}>
                            <li>Full name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Company name and designation</li>
                            <li>Business requirements or message content</li>
                        </ul>

                        <h3 className={subHeadingClass}>b. Technical Information</h3>
                        <p>Automatically collected when you use our site:</p>
                        <ul className={listClass}>
                            <li>IP address and browser details</li>
                            <li>Operating system and device information</li>
                            <li>Pages visited, time spent, and referring URLs</li>
                            <li>Cookies and similar technologies</li>
                        </ul>

                        <h3 className={subHeadingClass}>c. Business Information</h3>
                        <p>When you engage with our services, we collect company profiles, service preferences, and payment/invoicing data where applicable.</p>

                        <h2 className={headingClass}>2. How We Use Your Information</h2>
                        <ul className={listClass}>
                            <li>Service delivery and project execution</li>
                            <li>Communication and support</li>
                            <li>Improving our website and services</li>
                            <li>Marketing (only with your consent)</li>
                            <li>Legal and compliance obligations</li>
                        </ul>

                        <h2 className={headingClass}>3. How We Protect Your Data</h2>
                        <p>We implement industry-standard security measures:</p>
                        <ul className={listClass}>
                            <li>SSL encryption for all transmitted data</li>
                            <li>Firewall and access control systems</li>
                            <li>Periodic security audits and monitoring</li>
                            <li>Limited employee access to sensitive data</li>
                        </ul>

                        <h2 className={headingClass}>4. Cookies and Tracking</h2>
                        <p>
                            We use cookies to enhance user experience and analytics. You can manage or disable cookies in your browser settings. For details, refer to our Cookie Policy.
                        </p>

                        <h2 className={headingClass}>5. Data Sharing & Third Parties</h2>
                        <p>
                            We do not sell or rent your information. We may share limited data only with authorized service providers assisting in operations (e.g., hosting, analytics) or legal authorities when required by law. All third-party partners comply with our privacy standards.
                        </p>

                        <h2 className={headingClass}>6. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className={listClass}>
                            <li>Request a copy of your data</li>
                            <li>Ask for correction or deletion</li>
                            <li>Withdraw consent for marketing</li>
                            <li>File a complaint about data misuse</li>
                        </ul>

                        <h2 className={headingClass}>7. Contact Us</h2>
                        <div className={contactBoxClass}>
                            <p className="mb-2">For any request, contact us at:</p>
                            <p className="mb-1"><strong>Email:</strong> <a href="mailto:info@insyvertechnologies.com" className={linkClass}>info@insyvertechnologies.com</a></p>
                            <p className="mb-1"><strong>Phone:</strong> +91 98992 13865</p>
                            <p><strong>Address:</strong> P. NO-02, Laxman Vihar, Phase II, New Colony, Gurgaon-122001, Haryana</p>
                        </div>
                    </>
                );

            case 'terms':
                return (
                    <>
                        <p className="italic mb-6">Last Updated: November 2025</p>
                        <p>
                            Welcome to <strong>Insyver Technologies (OPC) Pvt. Ltd.</strong> By accessing or using our website, products, or services, you agree to the following terms and conditions. Please read carefully.
                        </p>

                        <h2 className={headingClass}>1. Acceptance of Terms</h2>
                        <p>
                            Your use of our website or services signifies your agreement to comply with these Terms of Service. If you do not agree, please discontinue use immediately.
                        </p>

                        <h2 className={headingClass}>2. Scope of Services</h2>
                        <p>
                            We offer ICT, Cloud, Cybersecurity, Web Development, and Consulting services as described on our official website. Each engagement or project is governed by a mutually signed Service Agreement or Proposal Document.
                        </p>

                        <h2 className={headingClass}>3. User Responsibilities</h2>
                        <p>When using our services, you agree to:</p>
                        <ul className={listClass}>
                            <li>Provide accurate and current information</li>
                            <li>Maintain confidentiality of login credentials (if applicable)</li>
                            <li>Refrain from any misuse, hacking, or illegal use of our platforms</li>
                        </ul>

                        <h2 className={headingClass}>4. Payment Terms</h2>
                        <ul className={listClass}>
                            <li>All payments must follow the agreed-upon milestone or billing schedule.</li>
                            <li>Invoices are payable within 30 days of issue unless otherwise stated.</li>
                            <li>Development or consulting fees are non-refundable once work begins.</li>
                            <li>Late payments may incur applicable interest charges.</li>
                        </ul>

                        <h2 className={headingClass}>5. Intellectual Property</h2>
                        <p>
                            All materials, designs, content, code, and intellectual assets produced or displayed by Insyver Technologies are protected under copyright and remain the property of the company unless explicitly transferred via contract. Clients retain ownership of their data and final deliverables upon full payment.
                        </p>

                        <h2 className={headingClass}>6. Limitation of Liability</h2>
                        <p>
                            Insyver Technologies shall not be liable for indirect, incidental, or consequential damages, or loss of data or profits due to system downtime, third-party failures, or misuse. Our total liability shall not exceed the amount paid for the specific service rendered.
                        </p>

                        <h2 className={headingClass}>7. Governing Law & Jurisdiction</h2>
                        <p>
                            These terms are governed by the laws of India, with jurisdiction in Gurgaon, Haryana.
                        </p>

                        <h2 className={headingClass}>8. Contact for Legal Queries</h2>
                        <div className={contactBoxClass}>
                            <p className="mb-1"><strong>Email:</strong> <a href="mailto:info@insyvertechnologies.com" className={linkClass}>info@insyvertechnologies.com</a></p>
                            <p><strong>Phone:</strong> +91 98992 13865</p>
                        </div>
                    </>
                );

            case 'cookies':
                return (
                    <>
                        <p className="italic mb-6">Last Updated: November 2025</p>
                        <p>
                            At <strong>Insyver Technologies (OPC) Pvt. Ltd.</strong>, we use cookies to improve website functionality, enhance user experience, and analyze traffic.
                        </p>

                        <h2 className={headingClass}>1. What Are Cookies?</h2>
                        <p>
                            Cookies are small text files stored on your browser when you visit our site. They help remember preferences, analyze traffic, and ensure smooth operation.
                        </p>

                        <h2 className={headingClass}>2. Types of Cookies We Use</h2>
                        <ul className={listClass}>
                            <li><strong>Essential Cookies:</strong> Required for core site functionality (e.g., navigation, security).</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand visitor behavior and website performance.</li>
                            <li><strong>Functional Cookies:</strong> Remember user preferences for improved usability.</li>
                            <li><strong>Third-Party Cookies:</strong> May include analytics tools (e.g., Google Analytics) or embedded content.</li>
                        </ul>

                        <h2 className={headingClass}>3. Managing Cookies</h2>
                        <p>
                            You can manage or disable cookies in your browser settings. However, disabling essential cookies may impact website functionality.
                        </p>

                        <h2 className={headingClass}>4. Third-Party Services</h2>
                        <p>
                            We may use Google Analytics for traffic monitoring, social media plugins, and CDN services. Each third party maintains its own privacy policy.
                        </p>

                        <h2 className={headingClass}>5. Consent</h2>
                        <p>
                            By using our website, you consent to our use of cookies in accordance with this policy. You may withdraw consent at any time through cookie preferences or browser settings.
                        </p>

                        <h2 className={headingClass}>6. Contact</h2>
                        <div className={contactBoxClass}>
                            <p className="mb-2">For any cookie or privacy concerns:</p>
                            <p className="mb-1"><strong>Email:</strong> <a href="mailto:info@insyvertechnologies.com" className={linkClass}>info@insyvertechnologies.com</a></p>
                            <p><strong>Phone:</strong> +91 98992 13865</p>
                        </div>
                    </>
                );

            default:
                return <p>Content not found.</p>;
        }
    };

    return (
        <div className="page-container container mx-auto px-4 max-w-3xl min-h-screen animate-page-enter !py-24">
            <h1 className={`text-4xl font-bold mb-8 border-b pb-6 ${isDark ? 'text-white border-slate-800' : 'text-slate-900 border-slate-200'}`}>
                {type === 'privacy' ? 'Privacy Policy' : type === 'terms' ? 'Terms of Service' : 'Cookie Policy'}
            </h1>
            <div className={`space-y-6 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {renderContent()}

                {/* Footer Copyright */}
                <div className={`mt-12 pt-6 border-t text-sm ${isDark ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-400'}`}>
                    <p>© {new Date().getFullYear()} Insyver Technologies (OPC) Pvt. Ltd. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Legal;