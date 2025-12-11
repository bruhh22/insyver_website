import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Reveal from './Reveal';

const SectionHeader = ({ title, subtitle, center = true }) => {
    const { isDark } = useTheme();
    return (
        <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
            <Reveal>
                <div className={`inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase transition-colors ${isDark
                        ? 'bg-blue-900/30 text-blue-300'
                        : 'bg-blue-50 text-blue-600 border border-blue-100 shadow-sm'
                    }`}>
                    Excellence in IT
                </div>
                <h2 className={`text-3xl md:text-5xl font-bold mb-6 tracking-tight transition-colors duration-700 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {title}
                </h2>
            </Reveal>
            {subtitle && (
                <Reveal delay={100}>
                    <p className={`max-w-2xl mx-auto text-lg leading-relaxed font-light transition-colors duration-700 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {subtitle}
                    </p>
                </Reveal>
            )}
        </div>
    );
};

export default SectionHeader;