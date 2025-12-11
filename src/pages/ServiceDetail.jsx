import React, { useEffect } from 'react';
import { ChevronRight, Zap, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SectionHeader from '../components/ui/SectionHeader';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import { SERVICES_DATA } from '../data/content';

const ServiceDetail = ({ serviceId, setPage }) => {
    const { isDark } = useTheme();
    const service = SERVICES_DATA.find(s => s.id === serviceId);
    useEffect(() => window.scrollTo(0, 0), []);

    if (!service) return null;

    return (
        <div className="min-h-screen animate-page-enter">
            {/* 1. CINEMATIC HERO (Updated Structure for Alignment) */}
            <div className="relative min-h-[60vh] w-full overflow-hidden flex flex-col justify-center">
                {/* Background Image - Absolute */}
                <img src={service.image} className="absolute inset-0 w-full h-full object-cover" alt={service.title} />
                <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-[#050A18] via-[#050A18]/80 to-transparent' : 'bg-gradient-to-t from-white via-white/80 to-transparent'}`} />

                {/* Content Container - Padded Top to Clear Header */}
                <div className="container mx-auto px-4 relative z-10 pt-32 pb-16">
                    <button onClick={() => setPage('services')} className={`mb-8 flex items-center group text-sm font-semibold tracking-wide uppercase w-fit ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        <ChevronRight className="w-4 h-4 rotate-180 mr-2 transition-transform group-hover:-translate-x-1" /> Back to Services
                    </button>
                    <Reveal>
                        <h1 className={`text-5xl md:text-7xl font-bold mb-6 max-w-4xl tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{service.title}</h1>
                        <p className={`text-xl md:text-2xl max-w-2xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{service.overview}</p>
                    </Reveal>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                {/* 2. CAPABILITIES GRID (Bento Style) */}
                <div className="mb-24">
                    <SectionHeader title="Core Capabilities" subtitle="Specialized modules designed for enterprise-grade performance." />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.expertise.map((item, idx) => (
                            <Reveal key={idx} delay={idx * 50}>
                                <div className={`p-8 rounded-3xl h-full border transition-all hover:-translate-y-1 hover:shadow-lg ${isDark
                                        ? 'bg-slate-900/50 border-slate-800'
                                        : 'bg-white border-slate-200 shadow-sm'
                                    }`}>
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item}</h3>
                                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Advanced implementation and optimization for maximum efficiency.</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* 3. STRATEGIC WORKFLOW (Step-by-Step) */}
                <div className={`mb-24 rounded-[3rem] p-12 md:p-20 ${isDark ? 'bg-slate-900/30 border border-slate-800' : 'bg-slate-50 border border-slate-100'}`}>
                    <SectionHeader title="Our Process" center={false} subtitle="A proven methodology for seamless execution." />
                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connector Line */}
                        <div className={`hidden md:block absolute top-12 left-0 w-full h-0.5 ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`} />

                        {service.workflow.map((step, idx) => (
                            <Reveal key={idx} delay={idx * 100} className="relative z-10">
                                <div className={`w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold mb-6 shadow-xl ${isDark ? 'bg-slate-800 text-blue-400 border border-slate-700' : 'bg-white text-blue-600 border border-slate-100'
                                    }`}>
                                    {step.step}
                                </div>
                                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>{step.title}</h3>
                                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{step.desc}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* 4. BUSINESS IMPACT & CTA */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>Why This Matters</h2>
                        <div className="space-y-6">
                            {service.benefits.map((benefit, idx) => (
                                <Reveal key={idx} delay={idx * 50}>
                                    <div className={`flex items-start p-6 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                                        }`}>
                                        <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0" />
                                        <span className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{benefit}</span>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <div className={`p-10 rounded-[2.5rem] text-center ${isDark ? 'bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-900/30' : 'bg-gradient-to-br from-blue-50 to-white border border-blue-100'}`}>
                        <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Ready to Evolve?</h3>
                        <p className={`mb-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{service.whyUs}</p>
                        <Button onClick={() => setPage('contact')} className="w-full">{service.cta}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;