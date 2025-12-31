import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';

const Contact = () => {
    const { isDark } = useTheme();
    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: 'ICT Infrastructure', // Default
        message: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => window.scrollTo(0, 0), []);

    // Validation Logic
    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Full Name is required.";
        if (!formData.email) {
            tempErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid.";
        }
        if (!formData.phone) {
            tempErrors.phone = "Phone Number is required.";
        } else if (!/^\+?[0-9\s-]{10,}$/.test(formData.phone)) {
            tempErrors.phone = "Phone number is invalid (min 10 digits).";
        }
        if (!formData.message) tempErrors.message = "Message is required.";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error on type
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('sending');

        // EmailJS REST API payload
        const data = {
            service_id: process.env.REACT_APP_EMAILJS_SERVICE_ID,
            template_id: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            user_id: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
            template_params: {
                from_name: formData.name,
                company_name: formData.company || "Not Provided",
                from_email: formData.email,
                phone: formData.phone,
                service: formData.service,
                message: formData.message
            }
        };

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', company: '', email: '', phone: '', service: 'ICT Infrastructure', message: '' }); // Reset
                setTimeout(() => setStatus('idle'), 5000); // Clear success msg after 5s
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const inputStyle = `w-full rounded-xl p-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none border transition-all duration-300 ${isDark ? 'bg-[#0F172A] border-slate-800 text-white placeholder-slate-600' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-600'
        }`;

    const labelStyle = `block text-sm font-medium mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`;
    const errorStyle = "text-red-500 text-xs mt-1";

    return (
        <div className="page-container container mx-auto px-4 min-h-screen animate-page-enter !pt-32">
            <div className="grid lg:grid-cols-2 gap-16">
                <Reveal>
                    <h1 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Get in Touch</h1>
                    <p className={`mb-10 text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Whether you’re exploring a new digital transformation project, need a consultation, or require technical support — our team is ready to assist.
                    </p>

                    <div className="space-y-6 mb-12">
                        {[
                            { icon: MapPin, title: "Office Address", desc: "P. NO-02, Laxman Vihar, Phase II, New Colony, Gurgaon – 122001" },
                            { icon: Phone, title: "Phone", desc: "+91 98992 13865" },
                            { icon: Mail, title: "Email", desc: "info@insyvertechnologies.com" }
                        ].map((item, i) => (
                            <div key={i} className={`flex items-start p-6 rounded-2xl border transition-colors ${isDark
                                ? 'bg-slate-900/50 border-slate-800'
                                : 'bg-white border-slate-200 shadow-sm'
                                }`}>
                                <div className="p-3 rounded-xl mr-5 bg-blue-500/10 text-blue-600 shrink-0">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className={`font-bold text-lg mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={200} className={`p-8 md:p-12 rounded-[2.5rem] border shadow-2xl ${isDark
                    ? 'bg-[#0B1120] border-slate-800'
                    : 'bg-white border-slate-200 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)]'
                    }`}>
                    <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>Let’s Discuss Your Next Project</h2>

                    <form onSubmit={sendEmail} className="space-y-6">
                        {/* Service Selection */}
                        <div>
                            <label className={labelStyle}>Service of Interest</label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className={inputStyle}
                            >
                                <option>ICT Infrastructure</option>
                                <option>Cloud Solutions</option>
                                <option>Cybersecurity</option>
                                <option>Web & App Development</option>
                                <option>Data Analytics</option>
                                <option>Managed IT Services</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`${inputStyle} ${errors.name ? 'border-red-500' : ''}`}
                                    placeholder="Full Name *"
                                />
                                {errors.name && <p className={errorStyle}>{errors.name}</p>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className={inputStyle}
                                    placeholder="Company Name"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`${inputStyle} ${errors.email ? 'border-red-500' : ''}`}
                                    placeholder="Email Address *"
                                />
                                {errors.email && <p className={errorStyle}>{errors.email}</p>}
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`${inputStyle} ${errors.phone ? 'border-red-500' : ''}`}
                                    placeholder="Phone Number *"
                                />
                                {errors.phone && <p className={errorStyle}>{errors.phone}</p>}
                            </div>
                        </div>

                        <div>
                            <textarea
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className={`${inputStyle} ${errors.message ? 'border-red-500' : ''}`}
                                placeholder="How can we help you? *"
                            ></textarea>
                            {errors.message && <p className={errorStyle}>{errors.message}</p>}
                        </div>

                        <Button type="submit" className="w-full text-lg h-14" disabled={status === 'sending'}>
                            {status === 'sending' ? (
                                <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</span>
                            ) : 'Send Message'}
                        </Button>

                        {/* Feedback Messages */}
                        {/* {status === 'success' && (
                            <div className="p-4 bg-emerald-900/30 text-emerald-400 rounded-xl border border-emerald-900/50 flex items-center justify-center gap-3 animate-fade-in">
                                <CheckCircle2 className="w-5 h-5" />
                                <span>Inquiry sent successfully! We'll contact you within 24 hours.</span>
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="p-4 bg-red-900/30 text-red-400 rounded-xl border border-red-900/50 flex items-center justify-center gap-3 animate-fade-in">
                                <AlertCircle className="w-5 h-5" />
                                <span>Unable to send message. Please try again later.</span>
                            </div>
                        )} */}

                        {/* --- Feedback Messages (Updated for Light/Dark Mode) --- */}
                        {status === 'success' && (
                            <div className={`p-4 rounded-xl border flex items-center justify-center gap-3 animate-fade-in ${isDark
                                ? 'bg-emerald-900/30 text-emerald-400 border-emerald-900/50'
                                : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                }`}>
                                <CheckCircle2 className="w-5 h-5" />
                                <span>Inquiry sent successfully! We'll contact you within 24 hours.</span>
                            </div>
                        )}
                        {status === 'error' && (
                            <div className={`p-4 rounded-xl border flex items-center justify-center gap-3 animate-fade-in ${isDark
                                ? 'bg-red-900/30 text-red-400 border-red-900/50'
                                : 'bg-red-50 text-red-700 border-red-200'
                                }`}>
                                <AlertCircle className="w-5 h-5" />
                                <span>Unable to send message. Please try again later.</span>
                            </div>
                        )}
                    </form>
                </Reveal>
            </div>
            {/* Map Embed */}
            {/* <div className="mt-20 rounded-2xl overflow-hidden shadow-lg h-96 bg-slate-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.877607730996!2d77.0134!3d28.4601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM2LjQiTiA3N8KwMDAnNDguMiJF!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Insyver Location"
                ></iframe>
            </div> */}

            {/* Map Embed Section - Optimized for Dark Mode */}
            <Reveal delay={300}>
                <div className={`mt-20 mb-12 rounded-[2.5rem] overflow-hidden shadow-2xl h-96 transition-all duration-500 border relative group ${isDark
                    ? 'border-slate-800 bg-[#0B1120]'
                    : 'border-slate-200 bg-white'
                    }`}>

                    {/* The Map Iframe*/}
                    <iframe
                        //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.877607730996!2d77.0134!3d28.4601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM2LjQiTiA3N8KwMDAnNDguMiJF!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
                        //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.1953685159874!2d77.01080499999999!3d28.484446799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e1a87b22d9%3A0x552bb413767d2fae!2sInsyver%20Technologies%20(OPC)%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1767176175085!5m2!1sen!2sin"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.837120216608!2d77.0082300745976!3d28.48445149079155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e1a87b22d9%3A0x552bb413767d2fae!2sInsyver%20Technologies%20(OPC)%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1767176547620!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Insyver Technologies Location"
                        // This class trick makes the map look dark in dark mode
                        className={`w-full h-full transition-all duration-700 ${isDark
                            ? 'grayscale invert-[.92] contrast-[.83] opacity-80 group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-100 group-hover:opacity-100'
                            : ''
                            }`}
                    ></iframe>

                    {/* Overlay Label (Optional, for style) */}
                    <div className={`absolute bottom-6 right-6 px-6 py-3 rounded-xl backdrop-blur-md border shadow-lg pointer-events-none transition-opacity duration-300 group-hover:opacity-0 ${isDark ? 'bg-black/70 text-white border-white/10' : 'bg-white/90 text-slate-800 border-white/50'
                        }`}>
                        <div className="flex items-center gap-2 text-sm font-bold">
                            <MapPin className="w-4 h-4 text-blue-500" />
                            Visit Our HQ
                        </div>
                    </div>
                </div>
            </Reveal >
        </div >
    );
};

export default Contact;