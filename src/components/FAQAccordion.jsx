import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Reveal from './ui/Reveal';
import { FAQS } from '../data/content';

const FAQAccordion = () => {
    const { isDark } = useTheme();
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleItem = (index) => setActiveIndex(activeIndex === index ? null : index);

    return (
        <div className="max-w-3xl mx-auto">
            {FAQS.map((faq, index) => (
                <Reveal key={index} delay={index * 50} className="mb-4">
                    <div className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${isDark
                            ? `bg-[#0F172A] border-slate-800 ${activeIndex === index ? 'border-blue-500/30 bg-slate-900' : 'hover:border-slate-700'}`
                            : `bg-white border-slate-200 ${activeIndex === index ? 'border-blue-300 shadow-[0_4px_20px_rgba(59,130,246,0.08)] ring-1 ring-blue-100' : 'hover:border-blue-300 hover:shadow-md'}`
                        }`}>
                        <button onClick={() => toggleItem(index)} className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                            <span className={`text-lg font-semibold transition-colors duration-300 ${isDark ? (activeIndex === index ? 'text-blue-400' : 'text-slate-200 group-hover:text-white') : (activeIndex === index ? 'text-blue-700' : 'text-slate-800 group-hover:text-blue-700')}`}>{faq.q}</span>
                            <span className={`ml-4 flex-shrink-0 transition-transform duration-300 transform ${activeIndex === index ? 'rotate-90' : 'rotate-0'}`}><ChevronRight className={`w-5 h-5 ${isDark ? 'text-slate-500 group-hover:text-white' : 'text-slate-400 group-hover:text-blue-600'}`} /></span>
                        </button>
                        <div className={`transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden ${activeIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className={`px-6 pb-6 pt-0 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{faq.a}</div>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
    );
};

export default FAQAccordion;