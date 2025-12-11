import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Reveal from '../components/ui/Reveal';
import SectionHeader from '../components/ui/SectionHeader';
// import Button from '../components/ui/Button';
// import { ArrowRight } from 'lucide-react';

const About = ({ setPage }) => {
    const { isDark } = useTheme();
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="page-container container mx-auto px-4 min-h-screen animate-page-enter !pt-32">
            <Reveal className="text-center mb-20">
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
                            <p>Founded in Gurgaon, India, Insyver Technologies was established with a singular goal — to redefine the standards of ICT, cloud, and cybersecurity solutions.</p>
                            <p>From humble beginnings as a specialized IT consultancy, we’ve grown into a multidisciplinary ICT powerhouse serving clients worldwide.</p>
                        </div>
                    </div>
                    <div className={`h-[500px] rounded-3xl overflow-hidden ${!isDark ? 'shadow-2xl shadow-blue-500/10' : 'shadow-2xl'}`}>
                        <img src="assets/about-photo.jpg" className="w-full h-full object-cover" alt="Office Culture" />
                    </div>
                </div>
            </Reveal>

            {/* Values Grid - UPDATED */}
            <div className="mb-20">
                <SectionHeader title="Our Core Values" center={true} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {[
                        { title: "Integrity", icon: "🔒", desc: "Trust through transparency and ethics." },
                        { title: "Innovation", icon: "🚀", desc: "Redefining what’s possible with tech." },
                        { title: "Partnership", icon: "🤝", desc: "Long-term collaboration for mutual success." },
                        { title: "Excellence", icon: "💡", desc: "Precision and quality in every delivery." },
                        { title: "Sustainability", icon: "🌍", desc: "Environmentally responsible progress." }
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
        </div>
    );
};

export default About;