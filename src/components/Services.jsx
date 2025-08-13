
import React, { useEffect } from 'react';
import services from '../assets/services';

const Services = ({ id }) => {
    // Enhanced smooth scrolling setup
    useEffect(() => {
        // Add custom smooth scrolling behavior for better performance
        const smoothScrollToElement = (element) => {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        };

        // Enhance existing scroll links if any
        const scrollLinks = document.querySelectorAll('a[href^="#"]');
        scrollLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    smoothScrollToElement(target);
                }
            });
        });

        // Intersection Observer for scroll-triggered animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = `${Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100}ms`;
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, observerOptions);

        // Observe service cards for staggered animation
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => observer.observe(card));

        return () => {
            scrollLinks.forEach(link => {
                link.removeEventListener('click', smoothScrollToElement);
            });
            observer.disconnect();
        };
    }, []);



    const getCategoryColor = (category) => {
        const colors = {
            "TAXATION": "bg-[#d6ccc2] text-[#2c2c2c]",
            "COMPLIANCE": "bg-[#e9c46a] text-[#2c2c2c]", 
            "LITIGATION": "bg-[#a8dadc] text-[#2c2c2c]",
            "CORPORATE": "bg-[#f1faee] text-[#2c2c2c]",
            "COMMERCIAL": "bg-[#f4a261] text-[#2c2c2c]",
            "IP & TECH": "bg-[#e76f51] text-white",
            "REGULATORY": "bg-[#2a9d8f] text-white"
        };
        return colors[category] || "bg-[#d6ccc2] text-[#2c2c2c]";
    };

    return (
        <section id={id} className="min-h-screen bg-gradient-to-br from-[#f1faee] to-[#d6ccc2] relative overflow-hidden py-20">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="mb-20 flex flex-col  justify-between items-center text-center animate-fade-in-up">
                    <h2 className="text-5xl font-semibold text-[#2c2c2c] mb-6 tracking-tight animate-slide-in-down dm-serif-text-regular">
                        Our Services
                    </h2>
                    <p className="text-xl text-[#666] max-w-5xl mx-auto p-6 font-normal  text-center animate-fade-in animation-delay-300">
                        Comprehensive legal solutions across multiple practice areas with dedication and expertise
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="service-card bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-white/30 hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-xl animate-fade-in-up group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Category Tag */}
                            <div className={`inline-block px-4 py-2 rounded-lg text-sm font-medium mb-6 transition-transform duration-300 group-hover:scale-105 ${getCategoryColor(service.category)}`}>
                                {service.category}
                            </div>

                            {/* Service Title */}
                            <h3 className="text-2xl font-semibold text-[#2c2c2c] mb-6 leading-tight tracking-tight transition-colors duration-300 group-hover:text-[#1a1a1a] dm-serif-text-regular">
                                {service.name}
                            </h3>

                            {/* Service Details */}
                            <div className="space-y-3">
                                {service.details.map((detail, detailIndex) => (
                                    <p key={detailIndex} className="text-[#666] text-sm leading-relaxed font-normal flex items-start transition-colors duration-300 group-hover:text-[#555]">
                                        <span className="text-[#d6ccc2] mr-3 mt-1 text-lg transition-colors duration-300 group-hover:text-[#2c2c2c]">•</span>
                                        <span>{detail}</span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
