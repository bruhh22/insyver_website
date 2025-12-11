import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import SectionHeader from '../components/ui/SectionHeader';
import Reveal from '../components/ui/Reveal';
import ServiceCard from '../components/services/ServiceCard';
import { SERVICES_DATA } from '../data/content';

const ServicesList = ({ setPage, setServiceId }) => {
    const { isDark } = useTheme();
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="page-container container mx-auto px-4 min-h-screen animate-page-enter !py-32">
            <SectionHeader title="Our Services" subtitle="Empowering organizations with secure, scalable, and intelligent technology ecosystems." />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES_DATA.map((service, index) => (
                    <Reveal key={service.id} delay={index * 50} className="h-full">
                        <ServiceCard service={service} onClick={(id) => { setServiceId(id); setPage('service-detail'); }} isActive={false} />
                    </Reveal>
                ))}
            </div>
        </div>
    );
};

export default ServicesList;