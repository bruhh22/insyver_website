import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button', disabled = false }) => {
    const { isDark } = useTheme();

    const baseStyle = "group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 rounded-xl focus:outline-none overflow-hidden select-none disabled:opacity-50 disabled:cursor-not-allowed";
    const focusRing = isDark ? "focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900" : "focus:ring-2 focus:ring-blue-600 focus:ring-offset-2";

    const variants = {
        primary: "bg-blue-600 text-white shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_25px_rgba(37,99,235,0.6)] hover:translate-y-[-2px] hover:bg-blue-700",
        secondary: isDark
            ? "bg-slate-800/80 backdrop-blur-md text-white border border-slate-700 hover:bg-slate-700 hover:border-blue-500/50"
            : "bg-white text-slate-800 border border-slate-200 hover:border-blue-400 hover:text-blue-700 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] hover:translate-y-[-1px]",
        outline: "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500/10"
    };

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyle} ${focusRing} ${variants[variant]} ${className}`}>
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </button>
    );
};

export default Button;