import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import ServiceCarousel from '../components/services/ServiceCarousel';
import FAQAccordion from '../components/FAQAccordion';
import { SERVICES_DATA } from '../data/content';

const Home = ({ setPage, setServiceId }) => {
    const { isDark } = useTheme();

    return (
        <div className="overflow-x-hidden animate-page-enter page-container">
            {/* Hero Section */}
            <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src={
                            isDark
                                ? "assets/home/home-main.jpg"
                                : "assets/home/home-main-light.jpg"
                        } className="w-full h-full object-cover transition-transform duration-[20s] animate-[pulseSoft_10s_infinite_alternate]"
                        alt="Technology Background"
                    />
                    <div className={`absolute inset-0 ${isDark
                        ? 'bg-gradient-to-b from-[#0B1120]/90 via-[#0B1120]/80 to-[#0B1120]'
                        : 'bg-gradient-to-b from-white/95 via-white/80 to-white'
                        }`} />
                </div>

                {!isDark && (
                    <>
                        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[100px] animate-[heroFloat_8s_ease-in-out_infinite]" />
                        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-300/20 rounded-full blur-[100px] animate-[heroFloat_10s_ease-in-out_infinite_reverse]" />
                    </>
                )}

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Reveal delay={100}>
                        <div className={`inline-flex items-center px-6 py-2 rounded-full border text-sm font-bold tracking-widest mb-8 uppercase backdrop-blur-md transition-colors duration-700 ${isDark ? 'border-blue-500/30 bg-blue-900/20 text-blue-300' : 'border-blue-200 bg-white/70 text-blue-700 shadow-sm ring-1 ring-blue-50'
                            }`}>
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-3" />
                            Insyver Technologies
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.1] transition-colors duration-700 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            Intelligent Systems. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 animate-gradient-text">Ever Evolving.</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={300}>
                        <p className={`text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light transition-colors duration-700 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                            Transforming businesses through intelligent technology solutions. Your trusted partner for digital excellence, infrastructure modernization, and enterprise innovation.
                        </p>
                    </Reveal>

                    <Reveal delay={400}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button onClick={() => setPage('contact')} className="w-full sm:w-auto min-w-[200px]">Get a Free Consultation</Button>
                            <Button variant="secondary" onClick={() => setPage('services')} className="w-full sm:w-auto min-w-[200px]">Explore Our Services</Button>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Brief About */}
            <section className={`py-32 relative ${isDark ? 'bg-[#0F172A]' : 'bg-[#F8FAFC]'}`}>
                <div className={`absolute top-0 left-0 w-full h-px ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`} />
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-20 items-center">
                    <Reveal>
                        <h2 className={`text-3xl md:text-4xl font-bold mb-8 transition-colors duration-700 ${isDark ? 'text-white' : 'text-slate-900'}`}>About Insyver Technologies</h2>
                        <div className="h-1 w-20 bg-blue-600 mb-8 rounded-full shadow-sm" />
                        <p className={`mb-6 leading-relaxed text-lg transition-colors duration-700 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            Founded in Gurgaon, Insyver Technologies is redefining how businesses evolve through intelligent, secure, and scalable digital systems. We specialize in ICT infrastructure, cybersecurity, cloud solutions, and enterprise-grade software.
                        </p>
                        <Button variant="outline" onClick={() => setPage('about')}>Learn More About Us <ArrowRight className="ml-2 w-4 h-4" /></Button>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className={`relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group ${!isDark ? 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] ring-1 ring-slate-200' : ''}`}>
                            <img
                                src="assets/home/home-about.jpg"
                                alt="Team working"
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <h3 className="text-2xl font-bold mb-2">Engineered for Growth</h3>
                                    <p className="opacity-80">Our team ensures every project aligns technology with real business value.</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Core Services Preview - SLIDER */}
            <section className={`py-32 relative ${isDark ? 'bg-[#0B1120]' : 'bg-white'}`}>
                <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none ${isDark ? 'bg-blue-600/5' : 'bg-blue-100/40'}`} />
                <div className="container mx-auto px-4 overflow-hidden relative z-10">
                    <SectionHeader title="Comprehensive Digital Solutions" subtitle="From infrastructure to innovation — we provide end-to-end ICT and digital transformation services built for scalability, performance, and security." />
                    <ServiceCarousel services={SERVICES_DATA.slice(0, 6)} setServiceId={setServiceId} setPage={setPage} />
                    <Reveal className="text-center mt-12">
                        <Button variant="secondary" onClick={() => setPage('services')}>View All Services</Button>
                    </Reveal>
                </div>
            </section>

            {/* Purpose & Why Choose Us */}
            <section className={`py-32 relative ${isDark ? 'bg-[#0F172A]' : 'bg-[#F1F5F9]'}`}>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-24">
                        <Reveal>
                            <h2 className={`text-3xl font-bold mb-10 ${isDark ? 'text-white' : 'text-slate-900'}`}>Purpose & Direction</h2>
                            <div className="space-y-6">
                                <div className={`p-8 rounded-3xl border border-l-8 border-blue-600 transition-all duration-500 hover:translate-x-2 ${isDark
                                    ? 'bg-slate-900/50 '
                                    : 'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-200'
                                    }`}>
                                    <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Our Mission</h3>
                                    <p className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>To deliver future-proof, customized digital solutions that drive efficiency, innovation, and security in an ever-evolving technological world.</p>
                                </div>
                                <div className={`p-8 rounded-3xl border border-l-8 border-cyan-500 transition-all duration-500 hover:translate-x-2 ${isDark
                                    ? 'bg-slate-900/50 '
                                    : 'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-200'
                                    }`}>
                                    <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Our Vision</h3>
                                    <p className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>To become a leading force in building India’s digital backbone and expanding globally with trustworthy, scalable, and intelligent ICT solutions.</p>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={200}>
                            <h2 className={`text-3xl font-bold mb-10 ${isDark ? 'text-white' : 'text-slate-900'}`}>Why Choose Insyver</h2>
                            <div className="grid gap-4">
                                {[
                                    "Certified experts in ICT, Cloud, and Cybersecurity",
                                    "End-to-end digital transformation partner",
                                    "Scalable and secure technology frameworks",
                                    "24/7 support and proactive management",
                                    "Proven track record across industries"
                                ].map((item, idx) => (
                                    <div key={idx} className={`flex items-center p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${isDark
                                        ? 'bg-slate-900/60 border-slate-800'
                                        : 'bg-white border-slate-200 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
                                        }`}>
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-5 text-blue-600 font-bold shrink-0 shadow-sm">✓</div>
                                        <span className={`font-medium text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={`py-32 ${isDark ? 'bg-[#0B1120]' : 'bg-white'}`}>
                <div className="container mx-auto px-4 max-w-4xl">
                    <SectionHeader title="Frequently Asked Questions" center={true} />
                    <FAQAccordion />
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <div className={`relative rounded-[3rem] overflow-hidden p-10 md:p-24 text-center border transition-all duration-500 ${isDark
                            ? 'bg-[#050A18] border-slate-800'
                            : 'bg-white border-slate-200 shadow-2xl'
                            }`}>
                            {/* Background Image & Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="assets/home/home-bottom.jpg"
                                    alt="Abstract Tech"
                                    className="w-full h-full object-cover opacity-60"
                                />
                                <div className={`absolute inset-0 ${isDark
                                    ? 'bg-gradient-to-r from-blue-950/90 to-slate-950/90'
                                    : 'bg-gradient-to-r from-blue-700/90 to-indigo-800/90'
                                    }`} />
                            </div>

                            {/* Decorative Glows */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] bg-blue-500/30 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] bg-purple-500/20 pointer-events-none" />

                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight leading-tight">
                                    Ready to Transform Your Business?
                                </h2>
                                <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed text-blue-50 opacity-90">
                                    Partner with Insyver Technologies — your trusted ally for digital excellence. Get a detailed project proposal within 24 hours.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <Button
                                        className="h-16 px-10 text-lg shadow-xl bg-white !text-blue-800 hover:bg-blue-50 hover:!text-white border-none transform hover:-translate-y-1 transition-transform"
                                        onClick={() => setPage('contact')}
                                    >
                                        Start Your Digital Transformation
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="h-16 px-10 text-lg border-2 border-white/30 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm"
                                        onClick={() => setPage('contact')}
                                    >
                                        Talk to an Expert
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default Home;