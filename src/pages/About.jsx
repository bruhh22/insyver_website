import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Reveal from '../components/ui/Reveal';
import SectionHeader from '../components/ui/SectionHeader';
import { Award, CheckCircle2, Leaf, Rocket, Shield, ShieldCheck, Users, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
// import Button from '../components/ui/Button';
// import { ArrowRight } from 'lucide-react';

// const About = ({ setPage }) => {
//     const { isDark } = useTheme();
//     useEffect(() => window.scrollTo(0, 0), []);

//     return (
//         <div className="page-container container mx-auto px-4 min-h-screen animate-page-enter !pt-32">
//             <Reveal className="text-center mb-20">
//                 <h1 className={`text-4xl md:text-6xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>Innovating the Future of Digital Infrastructure</h1>
//                 <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
//                     We’re more than a technology company — we’re your strategic partner in digital evolution.
//                 </p>
//             </Reveal>

//             <Reveal>
//                 <div className="grid md:grid-cols-2 gap-16 mb-20 items-center">
//                     <div className={`p-10 rounded-3xl ${isDark ? 'bg-slate-900/50' : 'bg-[#F8FAFC] border border-slate-200'}`}>
//                         <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Our Story</h2>
//                         <div className={`space-y-6 text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
//                             <p>Founded in Gurgaon, India, Insyver Technologies was established with a singular goal — to redefine the standards of ICT, cloud, and cybersecurity solutions.</p>
//                             <p>From humble beginnings as a specialized IT consultancy, we’ve grown into a multidisciplinary ICT powerhouse serving clients worldwide.</p>
//                         </div>
//                     </div>
//                     <div className={`h-[500px] rounded-3xl overflow-hidden ${!isDark ? 'shadow-2xl shadow-blue-500/10' : 'shadow-2xl'}`}>
//                         <img src="assets/about-photo.jpg" className="w-full h-full object-cover" alt="Office Culture" />
//                     </div>
//                 </div>
//             </Reveal>

//             {/* Values Grid - UPDATED */}
//             {/* <div className="mb-20">
//                 <SectionHeader title="Our Core Values" center={true} />
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//                     {[
//                         { title: "Integrity", icon: "🔒", desc: "Trust through transparency and ethics." },
//                         { title: "Innovation", icon: "🚀", desc: "Redefining what’s possible with tech." },
//                         { title: "Partnership", icon: "🤝", desc: "Long-term collaboration for mutual success." },
//                         { title: "Excellence", icon: "💡", desc: "Precision and quality in every delivery." },
//                         { title: "Sustainability", icon: "🌍", desc: "Environmentally responsible progress." }
//                     ].map((val, idx) => (
//                         <Reveal key={idx} delay={idx * 100}>
//                             <div className={`p-8 rounded-[2rem] border h-full transition-all duration-500 hover:-translate-y-2 hover-lift flex flex-col items-start ${isDark
//                                 ? 'bg-slate-900/60 border-slate-800'
//                                 : 'bg-white border-slate-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)]'
//                                 }`}>
//                                 <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-sm ${isDark ? 'bg-slate-800 text-blue-400' : 'bg-blue-50 text-blue-600'
//                                     }`}>
//                                     {val.icon}
//                                 </div>
//                                 <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>{val.title}</h3>
//                                 <p className={`leading-relaxed text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{val.desc}</p>
//                             </div>
//                         </Reveal>
//                     ))}
//                 </div>
//             </div> */}
//             <div className="mb-20">
//                 <SectionHeader title="Our Core Values" center={true} />
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//                     {[
//                         { title: "Integrity", icon: <Shield className="w-8 h-8" />, desc: "Trust through transparency and ethics. " },
//                         { title: "Innovation", icon: <Rocket className="w-8 h-8" />, desc: "Redefining what’s possible with tech." },
//                         { title: "Partnership", icon: <Users className="w-8 h-8" />, desc: "Long-term collaboration for mutual success." },
//                         { title: "Excellence", icon: <Award className="w-8 h-8" />, desc: "Precision and quality in every delivery." },
//                         { title: "Sustainability", icon: <Leaf className="w-8 h-8" />, desc: "Environmentally responsible progress." }
//                     ].map((val, idx) => (
//                         <Reveal key={idx} delay={idx * 100}>
//                             <div className={`p-8 rounded-[2rem] border h-full transition-all duration-500 hover:-translate-y-2 hover-lift flex flex-col items-start ${isDark
//                                 ? 'bg-slate-900/60 border-slate-800'
//                                 : 'bg-white border-slate-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)]'
//                                 }`}>
//                                 <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-sm ${isDark ? 'bg-slate-800 text-blue-400' : 'bg-blue-50 text-blue-600'
//                                     }`}>
//                                     {val.icon}
//                                 </div>
//                                 <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>{val.title}</h3>
//                                 <p className={`leading-relaxed text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{val.desc}</p>
//                             </div>
//                         </Reveal>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

const About = ({ setPage }) => {
    const { isDark } = useTheme();
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="page-container container mx-auto px-4 min-h-screen animate-page-enter">
            <Reveal className="text-center mb-20 pt-10">
                <h1 className={`text-4xl md:text-6xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>Innovating the Future of Digital Infrastructure</h1>
                <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    We’re more than a technology company — we’re your strategic partner in digital evolution.
                </p>
            </Reveal>

            <Reveal>
                <div className="grid md:grid-cols-2 gap-16 mb-20 items-center">
                    <div className={`p-10 rounded-3xl ${isDark ? 'bg-slate-900/50' : 'bg-[#F8FAFC] border border-slate-200'}`}>
                        <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Our Story</h2>
                        <div className={`space-y-6 text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            {/* <p>Founded in Gurgaon, India, Insyver Technologies was established with a singular goal — to redefine the standards of ICT, cloud, and cybersecurity solutions.</p> */}
                            {/* <p>From humble beginnings as a specialized IT consultancy, we’ve grown into a multidisciplinary ICT powerhouse serving clients worldwide.</p> */}
                            <p>
                                Founded in 2025 and headquartered in Gurgaon, India, <strong>Insyver Technologies (OPC) Pvt. Ltd.</strong> helps
                                organizations build secure, scalable, and future-ready digital infrastructure for a rapidly evolving
                                technology landscape.
                            </p>

                            <p>
                                What began as a focused ICT consultancy has grown into a full-scale
                                <strong> ICT Solutions and Managed Services company</strong>. We operate as a
                                <strong> Value-Added Reseller (VAR), System Integrator (SI), and Managed Services Provider (MSP)</strong>,
                                delivering end-to-end digital transformation across industries.
                            </p>

                            <p>
                                Our expertise spans enterprise networking, cloud and datacenter solutions, cybersecurity, managed IT
                                services, software licensing, and enterprise hardware deployment — backed by certified engineers and
                                trusted OEM partnerships.
                            </p>

                            <p>
                                We believe technology should enable growth, not slow it down. Our structured delivery approach ensures
                                seamless deployment, continuous optimization, and reliable business continuity at scale.
                            </p>

                        </div>
                    </div>
                    <div className={`h-[500px] rounded-3xl overflow-hidden ${!isDark ? 'shadow-2xl shadow-blue-500/10' : 'shadow-2xl'}`}>
                        <img src="assets/about-photo.jpg" className="w-full h-full object-cover" alt="Office Culture" />
                    </div>
                </div>
            </Reveal>

            {/* 3. Mission & Vision */}
            <div className="mb-24">
                <div className="grid md:grid-cols-2 gap-8">
                    <Reveal delay={100}>
                        <div className={`p-10 rounded-[2.5rem] h-full border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-100 shadow-lg'}`}>
                            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-600/30">
                                <Rocket className="w-7 h-7" />
                            </div>
                            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Our Mission</h3>
                            <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                To deliver secure, reliable, and future-ready ICT solutions that empower businesses to operate efficiently and scale confidently. We build resilient digital infrastructure through excellence in cloud, cybersecurity, and managed services.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={200}>
                        <div className={`p-10 rounded-[2.5rem] h-full border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-100 shadow-lg'}`}>
                            <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-purple-600/30">
                                <Award className="w-7 h-7" />
                            </div>
                            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Our Vision</h3>
                            <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                To be a globally trusted ICT and managed services company known for secure, intelligent, and scalable digital transformation solutions. We lead with innovation, service excellence, and long-term partnerships.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Values Grid - UPDATED */}
            <div className="mb-24">
                <SectionHeader title="Our Core Values" center={true} subtitle="The principles that drive our engineering and business decisions." />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {[
                        { title: "Integrity", icon: <Shield className="w-8 h-8" />, desc: "Trust through transparency and ethics." },
                        { title: "Innovation", icon: <Zap className="w-8 h-8" />, desc: "Redefining what’s possible with tech." },
                        { title: "Partnership", icon: <Users className="w-8 h-8" />, desc: "Long-term collaboration for mutual success." },
                        { title: "Excellence", icon: <Award className="w-8 h-8" />, desc: "Precision and quality in every delivery." },
                        { title: "Sustainability", icon: <Leaf className="w-8 h-8" />, desc: "Environmentally responsible progress." },
                        { title: "Trust & Security", icon: <ShieldCheck className="w-8 h-8" />, desc: "Secure, compliant and resilient systems built for business continuity." }

                    ].map((val, idx) => (
                        <Reveal key={idx} delay={idx * 100}>
                            <div className={`p-8 rounded-[2rem] border h-full transition-all duration-500 hover:-translate-y-2 hover-lift flex flex-col items-start ${isDark
                                ? 'bg-slate-900/60 border-slate-800'
                                : 'bg-white border-slate-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)]'
                                }`}>
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-sm ${isDark ? 'bg-slate-800 text-blue-400' : 'bg-blue-50 text-blue-600'
                                    }`}>
                                    {val.icon}
                                </div>
                                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>{val.title}</h3>
                                <p className={`leading-relaxed text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{val.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* 5. Industries We Serve */}
            <div className="mb-24">
                <SectionHeader title="Industries We Serve" center={true} subtitle="Tailored ICT solutions for diverse sectors." />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {['Corporate & Enterprise', 'Government & PSU', 'Retail & E-Commerce', 'BFSI & Consulting', 'Manufacturing', 'Hospitality'].map((ind, i) => (
                        <Reveal key={i} delay={i * 50}>
                            <div className={`p-6 rounded-2xl text-center border transition-all hover:scale-105 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100 shadow-sm'
                                }`}>
                                <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{ind}</span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* 6. Strategic Partnerships */}
            <div className={`mb-24 rounded-[3rem] p-10 md:p-16 text-center ${isDark ? 'bg-slate-900/30 border border-slate-800' : 'bg-blue-50 border border-blue-100'}`}>
                <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>Strategic Partnerships</h2>
                <p className={`max-w-2xl mx-auto mb-10 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    We partner with leading global OEMs to deliver reliable, scalable, and enterprise-grade ICT solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-80">
                    {['HP', 'Dell', 'Lenovo', 'Apple', 'Cisco', 'Aruba', 'Microsoft', 'AWS', 'Google Cloud', 'Sophos'].map((brand, i) => (
                        <span key={i} className={`px-6 py-3 rounded-full text-lg font-bold ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-white text-slate-600 shadow-sm'
                            }`}>
                            {brand}
                        </span>
                    ))}
                </div>
            </div>

            {/* 7. Leadership Philosophy */}
            <Reveal>
                <div className="grid md:grid-cols-2 gap-16 items-center pb-20">
                    <div>
                        <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Leadership Philosophy</h2>
                        <div className={`space-y-4 text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            <p>At Insyver, leadership means enabling innovation, not controlling it. Our management philosophy empowers every team member to think independently, collaborate fearlessly, and innovate boldly.</p>
                            <p>We foster a culture of Continuous Learning, Data-Driven Decision Making, Customer-Centric Design, and Technical Integrity.</p>
                        </div>
                        <div className="mt-8">
                            <Button onClick={() => setPage('contact')}>Work With Us</Button>
                        </div>
                    </div>
                    <div className={`p-8 rounded-[2.5rem] ${isDark ? 'bg-slate-900' : 'bg-white border border-slate-100'}`}>
                        <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Why Clients Trust Us</h3>
                        <ul className="space-y-4">
                            {[
                                "10+ years of combined technical expertise",
                                "Multi-industry experience (Finance, Manufacturing, Healthcare)",
                                "ISO-aligned cybersecurity and cloud protocols",
                                "24/7 Managed IT and Support Services",
                                "100% transparency and client-first communication"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-1 shrink-0" />
                                    <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Reveal>
        </div>
    );
};

export default About;