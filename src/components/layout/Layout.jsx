import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Button from '../ui/Button';
import { FaXTwitter } from "react-icons/fa6";
import { SERVICES_DATA } from '../../data/content';

const LOGO_IMG_SRC = "/assets/transparent_main_logo_(2).png";

const Layout = ({ children, setPage, page }) => {
    const { isDark, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'contact', label: 'Contact' },
    ];
    const socialIcons = [
        Facebook,
        Linkedin,
        FaXTwitter,
        Instagram
    ];


    return (
        <div className={`min-h-screen font-sans selection:bg-blue-500/30 ${isDark ? 'bg-[#050A18] text-slate-200' : 'bg-[#F8FAFC] text-slate-800'}`}>
            {/* Header */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                ? (isDark ? 'bg-[#050A18]/90 border-slate-800' : 'bg-white/90 border-slate-200 shadow-sm') + ' backdrop-blur-xl border-b py-4'
                : 'bg-transparent py-6'
                }`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div
                        className="flex items-center gap-3 cursor-pointer group select-none"
                        onClick={() => setPage('home')}
                    >
                        <div className="relative">
                            <img
                                src={LOGO_IMG_SRC}
                                alt="Insyver Technologies"
                                className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        </div>

                        {/* <div className="flex flex-col items-start justify-center -space-y-0.5">
                            <span className={`text-lg md:text-xl font-extrabold tracking-tight leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                Insyver
                            </span>
                            <span className={`text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                Technologies
                            </span>
                        </div> */}

                        <div className={`flex flex-col items-center justify-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            <h1 className="text-lg md:text-2xl font-bold leading-none tracking-tight font-old-standard">
                                Insyver Technologies
                            </h1>
                            {/* <div className="flex flex-col leading-none mt-1"> */}
                            <span className={`text-[10px] md:text-xs font-bold tracking-wide font-joly-text ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                (OPC) Pvt. Ltd.
                            </span>
                            {/* <span className={`text-[9px] md:text-[10px] font-bold tracking-widest uppercase font-old-standard ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                    An ICT Infrastructure Company
                                </span> */}

                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-10">
                        {navLinks.map(link => (
                            <button
                                key={link.id}
                                onClick={() => setPage(link.id)}
                                className={`text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${page === link.id
                                    ? 'text-blue-600 font-semibold'
                                    : (isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-blue-600')
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}

                        <div className="h-6 w-px bg-gray-700/50 mx-2"></div>

                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${isDark
                                ? 'bg-slate-800 text-yellow-400'
                                : 'bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-100'
                                }`}
                        >
                            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>

                        <Button onClick={() => setPage('contact')} className="py-2.5 px-6 text-xs uppercase tracking-wider">Get Consultation</Button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button className={`md:hidden ${isDark ? 'text-white' : 'text-slate-900'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Nav Overlay */}
                {isMenuOpen && (
                    <div className={`fixed inset-0 top-[70px] z-40 p-6 md:hidden animate-fade-in ${isDark ? 'bg-[#050A18]' : 'bg-white'}`}>
                        <div className="flex flex-col gap-6 text-center">
                            {navLinks.map(link => (
                                <button
                                    key={link.id}
                                    onClick={() => { setPage(link.id); setIsMenuOpen(false); }}
                                    className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}
                                >
                                    {link.label}
                                </button>
                            ))}
                            <Button onClick={() => { setPage('contact'); setIsMenuOpen(false); }} className="w-full mt-8">Get Started</Button>
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="min-h-screen">
                {children}
            </main>

            {/* Footer */}
            <footer className={`border-t pt-20 pb-12 text-sm transition-colors duration-700 ${isDark ? 'bg-[#020617] border-slate-900' : 'bg-white border-slate-200'}`}>
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12 mb-16">
                        <div className="">
                            <div className="flex items-center gap-3 mb-6">
                                <img src={LOGO_IMG_SRC} alt="Insyver Logo" className="h-10 md:h-12 w-auto" onError={(e) => { e.target.style.display = 'none'; }} />
                                {/* <div className="flex flex-col items-start justify-center -space-y-0.5">
                                    <span className={`text-lg font-extrabold tracking-tight leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        Insyver
                                    </span>
                                    <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                        Technologies
                                    </span>
                                </div> */}

                                <div className={`flex flex-col items-center justify-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    <span className="text-lg md:text-2xl font-bold leading-none tracking-tight font-old-standard mb-1">
                                        Insyver Technologies
                                    </span>
                                    <div className="flex flex-col leading-none mt-0.5">
                                        <span className={`text-[10px] md:text-xs font-bold tracking-wide font-joly-text ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                            (OPC) Pvt. Ltd.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className={`mb-8 max-w-sm leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>Delivering integrated, intelligent, and secure digital solutions for modern enterprises. Intelligent Systems. Ever Evolving.</p>
                            <div className="flex space-x-6">
                                {/* {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                                    <a key={i} href="/" className={`transition-all duration-300 hover:-translate-y-1 ${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-blue-600'}`}><Icon className="w-5 h-5" /></a>
                                ))} */}
                                {socialIcons.map((Icon, i) => (
                                    <a key={i} href="/" className="transition-all duration-300 hover:-translate-y-1">
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}

                            </div>
                        </div>

                        {/* <div>
                            <h4 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Services</h4>
                            <ul className={`space-y-4 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                                {['Enterprise Network', 'Cloud Solutions', 'Cybersecurity', 'Web Development', 'Managed IT'].map((item, i) => (
                                    <li key={i} className="hover:text-blue-600 cursor-pointer transition-colors" onClick={() => setPage('services')}>{item}</li>
                                ))}
                            </ul>
                        </div> */}

                        <div className="flex flex-col items-center">
                            <h4 className={`text-center font-bold  mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Services</h4>
                            <ul className={`grid grid-cols-2 gap-y-3 gap-x-3 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                                {SERVICES_DATA.map((service, i) => (
                                    <li key={i} className="hover:text-blue-600 cursor-pointer transition-colors" onClick={() => setPage('services')}>{service.title}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Contact</h4>
                            <ul className={`space-y-4 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                                <li className="flex items-start">
                                    <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-blue-500" />
                                    <span>P. NO-02, Laxman Vihar, Phase II, New Colony, Gurgaon – 122001</span>
                                </li>
                                <li className="flex items-center">
                                    <Phone className="w-4 h-4 mr-3 text-blue-500" /> +91 98992 13865
                                </li>
                                <li className="flex items-center">
                                    <Mail className="w-4 h-4 mr-3 text-blue-500" /> info@insyvertechnologies.com
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center ${isDark ? 'border-slate-800 text-slate-600' : 'border-slate-200 text-slate-500'}`}>
                        <p>&copy; 2025 Insyver Technologies, (OPC) Pvt. Ltd. All rights reserved.</p>
                        <div className="flex gap-8 mt-4 md:mt-0">
                            <button onClick={() => setPage('privacy')} className="hover:text-blue-600 transition-colors">Privacy</button>
                            <button onClick={() => setPage('terms')} className="hover:text-blue-600 transition-colors">Terms</button>
                            <button onClick={() => setPage('cookies')} className="hover:text-blue-600 transition-colors">Cookies</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;