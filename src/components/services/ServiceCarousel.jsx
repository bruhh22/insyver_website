import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import ServiceCard from './ServiceCard';

const ServiceCarousel = ({ services, setServiceId, setPage }) => {
    const { isDark } = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        let interval;
        if (!isPaused && !isDragging) {
            interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % services.length);
            }, 7000);
        }
        return () => clearInterval(interval);
    }, [isPaused, isDragging, services.length]);

    const handleStart = (clientX) => { setIsDragging(true); setTouchStart(clientX); setIsPaused(true); };
    const handleMove = (clientX) => { if (!isDragging) return; setDragOffset(clientX - touchStart); };
    const handleEnd = () => {
        setIsDragging(false); setIsPaused(false);
        if (Math.abs(dragOffset) > 50) {
            if (dragOffset > 0 && currentIndex > 0) setCurrentIndex((prev) => prev - 1);
            else if (dragOffset < 0 && currentIndex < services.length - 1) setCurrentIndex((prev) => prev + 1);
        }
        setDragOffset(0);
    };

    const containerWidth = containerRef.current ? containerRef.current.clientWidth : 0;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const cardWidth = isMobile ? containerWidth * 0.85 : 400;
    const centerOffset = (containerWidth / 2) - (cardWidth / 2);
    const finalTranslate = -(currentIndex * (cardWidth + 24)) + centerOffset + dragOffset;

    return (
        <div className="w-full relative py-12 group overflow-hidden" ref={containerRef} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <div
                className={`flex items-center ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                onTouchStart={(e) => handleStart(e.touches[0].clientX)} onTouchMove={(e) => handleMove(e.touches[0].clientX)} onTouchEnd={handleEnd}
                onMouseDown={(e) => handleStart(e.clientX)} onMouseMove={(e) => handleMove(e.clientX)} onMouseUp={handleEnd} onMouseLeave={() => { if (isDragging) handleEnd(); setIsPaused(false); }}
                style={{ transform: `translateX(${finalTranslate}px)`, transition: isDragging ? 'none' : 'transform 1.2s cubic-bezier(0.23, 1, 0.32, 1)', width: 'max-content' }}
            >
                {services.map((service, index) => {
                    const isActive = index === currentIndex;
                    return (
                        <div key={service.id} className="px-3" style={{ width: `${cardWidth}px`, transform: isActive ? 'scale(1)' : 'scale(0.92)', opacity: isActive ? 1 : 0.6, transition: 'all 1.2s cubic-bezier(0.23, 1, 0.32, 1)' }}>
                            <ServiceCard service={service} onClick={(id) => { if (!isDragging) { setServiceId(id); setPage('service-detail'); } }} isActive={isActive} />
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center gap-3 mt-8">
                {services.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`transition-all duration-500 rounded-full ${idx === currentIndex
                                ? 'w-8 h-2 bg-blue-600 shadow-lg shadow-blue-500/40'
                                : `w-2 h-2 ${isDark ? 'bg-slate-700' : 'bg-slate-300'}`
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServiceCarousel;