import React, { useEffect } from 'react';
import { ChevronRight, Zap, CheckCircle, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SectionHeader from '../components/ui/SectionHeader';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import { DEFAULT_SERVICE_IMG, SERVICES_DATA } from '../data/content';

const ServiceDetail = ({ serviceId, setPage }) => {
    const { isDark } = useTheme();
    const service = SERVICES_DATA.find(s => s.id === serviceId);
    useEffect(() => window.scrollTo(0, 0), []);

    if (!service) return null;

    return (
        <div className="min-h-screen animate-page-enter page-container">
            {/* 1. CINEMATIC HERO (Updated Structure f or Alignment) */}

            {/* <div className="relative min-h-[60vh] w-full overflow-hidden flex flex-col justify-center"> */}
            {/* Background Image - Absolute */}
            {/* <img src={service.image} className="absolute inset-0 w-full h-full object-cover" alt={service.title} />
                <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-[#050A18] via-[#050A18]/80 to-transparent' : 'bg-gradient-to-t from-white via-white/80 to-transparent'}`} /> */}

            {/* Content Container - Padded Top to Clear Header */}
            {/* <div className="container mx-auto px-4 relative z-10 pt-32 pb-16">
                    <button onClick={() => setPage('services')} className={`mb-8 flex items-center group text-sm font-semibold tracking-wide uppercase w-fit ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        <ChevronRight className="w-4 h-4 rotate-180 mr-2 transition-transform group-hover:-translate-x-1" /> Back to Services
                    </button>
                    <Reveal>
                        <h1 className={`text-5xl md:text-7xl font-bold mb-6 max-w-4xl tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{service.title}</h1>
                        <p className={`text-xl md:text-2xl max-w-2xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{service.overview}</p>
                    </Reveal>
                </div> */}
            {/* </div> */}

            <div className="w-full px-4 md:px-8 pb-12 pt-8">
                <div className={`relative rounded-[2.5rem] overflow-hidden min-h-[50vh] flex flex-col justify-end p-8 md:p-16 ${isDark ? 'bg-slate-900' : 'bg-slate-100'}`}>
                    {/* Background Image - Absolute relative to this rounded container */}
                    <img src={service.image || DEFAULT_SERVICE_IMG}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt={service.title}
                        onError={(e) => { e.target.src = DEFAULT_SERVICE_IMG; }}
                    />
                    <div className={`absolute inset-0 ${isDark ? 'bg-[#050A18]/60 mix-blend-multiply' : 'bg-slate-900/40 mix-blend-multiply'}`} />
                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-[#050A18] via-transparent' : 'from-black/60 via-transparent'}`} />

                    {/* Content */}
                    <div className="relative z-10">
                        <button onClick={() => setPage('services')} className={`mb-6 flex items-center group text-sm font-bold tracking-widest uppercase w-fit px-4 py-2 rounded-full backdrop-blur-md bg-white/10 text-white hover:bg-white/20 transition-all`}>
                            <ChevronRight className="w-4 h-4 rotate-180 mr-2 transition-transform group-hover:-translate-x-1" /> Back to Services
                        </button>
                        <Reveal>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl tracking-tight leading-[1.1] text-white drop-shadow-lg">{service.title}</h1>
                            <p className="text-xl md:text-2xl max-w-2xl leading-relaxed font-light text-white/90 drop-shadow-md">{service.overview}</p>
                        </Reveal>

                        {/* NEW: View Brochure Button */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Button onClick={() => setPage('contact')}>
                                Get Started
                            </Button>
                            <button
                                onClick={() => window.open(service.brochureUrl || "/assets/Company_Profile.pdf", '_blank')}
                                className={`group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 rounded-xl focus:outline-none overflow-hidden select-none border-2 backdrop-blur-md ${isDark
                                    ? "border-white/30 text-white hover:bg-white/10 hover:border-white"
                                    : "border-white/50 text-white hover:bg-white/20 hover:border-white"
                                    }`}
                            >
                                <Download className="w-4 h-4 mr-2" />
                                View Brochure
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 ">

                {service.technologies && (
                    <div className="mb-20">
                        <p className={`text-sm font-bold uppercase tracking-widest mb-6 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Powered By Best-in-Class Tech</p>
                        <div className="flex flex-wrap gap-4">
                            {service.technologies.map((tech, i) => (
                                <Reveal key={i} delay={i * 50}>
                                    <span className={`px-5 py-2 rounded-full text-sm font-medium border ${isDark
                                        ? 'bg-slate-900 border-slate-700 text-slate-300'
                                        : 'bg-white border-slate-200 text-slate-600 shadow-sm'
                                        }`}>
                                        {tech}
                                    </span>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                )}
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
                                {step.deliverable && (
                                    <div className={`mt-3 text-xs font-semibold px-3 py-1.5 rounded-lg inline-block ${isDark ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-50 text-blue-700'}`}>
                                        {step.deliverable}
                                    </div>
                                )}
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* 4. BUSINESS IMPACT & CTA */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
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