import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ServiceCard = ({ service, onClick, isActive }) => {
    const { isDark } = useTheme();
    return (
        <div
            onClick={() => onClick(service.id)}
            className={`group relative h-full w-full rounded-3xl cursor-pointer transition-all duration-700 overflow-hidden select-none flex flex-col ${isActive
                ? (isDark ? 'shadow-2xl translate-y-[-5px]' : 'shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] translate-y-[-5px] border-blue-200 ring-1 ring-blue-100')
                : 'shadow-sm border-transparent'
                } ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}
            style={{ borderStyle: 'solid', borderWidth: '1px' }}
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className={`absolute inset-0 transition-opacity duration-300 ${isDark ? 'bg-slate-900/60' : 'bg-gradient-to-t from-slate-900/20 to-transparent'}`} />
                <div className={`absolute top-4 right-4 p-2 backdrop-blur-md rounded-xl border transition-colors shadow-sm ${isDark
                    ? 'bg-white/10 border-white/20 text-white'
                    : 'bg-white/90 border-white/50 text-blue-600'
                    }`}>
                    {service.icon}
                </div>
            </div>

            <div className={`flex-1 p-8 flex flex-col items-start text-left border-t transition-colors duration-300 ${isDark
                ? `border-slate-800 ${isActive ? 'bg-slate-800/50' : 'bg-slate-900'}`
                : `border-slate-100 ${isActive ? 'bg-slate-50/50' : 'bg-white'}`
                }`}>
                <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'
                    }`}>{service.title}</h3>

                <p className={`text-sm mb-6 flex-grow leading-relaxed line-clamp-3 transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {service.shortDesc}
                </p>

                <div className={`mt-auto flex items-center text-sm font-bold tracking-wide uppercase transition-all duration-300 group-hover:translate-x-1 ${isActive ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-600'}`}>
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1" />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;