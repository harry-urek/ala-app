
import React, { useState } from 'react';
import Image from 'next/image';

const Services = ({ id }) => {
    const [hoveredService, setHoveredService] = useState(null);

    // Comprehensive service categories with subtle, theme-matching colors
    const serviceCategories = [
        {
            id: 'taxes',
            name: 'TAXATION',
            title: 'Taxes',
            icon: '/taxes.png',
            color: 'from-[#f5ebe0] to-[#f0e6d2]',
            hoverColor: 'from-[#f0e6d2] to-[#ede1d1]',
            textColor: 'text-[#2c2c2c]',
            number: '01',
            services: [
                {
                    name: 'Direct Tax',
                    details: [
                        'Litigation before all forums (Supreme Court, High Courts, Tribunals, Tax Authorities)',
                        'Domestic & international taxation advisory',
                        'Strategic tax planning & compliance',
                        'Assistance in assessments, re-assessments, investigations (search & seizure)'
                    ]
                },
                {
                    name: 'Indirect Tax',
                    details: [
                        'GST, Customs, Service Tax, VAT/CST, Excise',
                        'Representation before Supreme Court, High Courts, Tax Tribunals',
                        'Advice on ITC eligibility',
                        'Assistance in assessments & investigations'
                    ]
                }
            ]
        },
        {
            id: 'compliance',
            name: 'COMPLIANCE',
            title: 'Compliance',
            icon: '/Compliance.png',
            color: 'from-[#e8f4fd] to-[#ddeef8]',
            hoverColor: 'from-[#ddeef8] to-[#d4e7f2]',
            textColor: 'text-[#2c2c2c]',
            number: '02',
            services: [
                {
                    name: 'Benami Law & PMLA',
                    details: [
                        'Drafting/responding to notices',
                        'Representation before IO, ED, AA',
                        'Challenging attachments via High Court writs'
                    ]
                }
            ]
        },
        {
            id: 'litigation',
            name: 'LITIGATION',
            title: 'Litigation',
            icon: '/litigation.png',
            color: 'from-[#f8f3f0] to-[#f3ede8]',
            hoverColor: 'from-[#f3ede8] to-[#ede7e0]',
            textColor: 'text-[#2c2c2c]',
            number: '03',
            services: [
                {
                    name: 'Consumer Dispute Redressal',
                    details: [
                        'Representation before NCDRC, State Commissions, Supreme Court',
                        'Drafting complaints, appeals, petitions',
                        'Challenging execution proceedings in High Court'
                    ]
                }
            ]
        },
        {
            id: 'corporate',
            name: 'CORPORATE',
            title: 'Corporate',
            icon: '/corporate.png',
            color: 'from-[#f1f5f1] to-[#ecf0ec]',
            hoverColor: 'from-[#ecf0ec] to-[#e6eae6]',
            textColor: 'text-[#2c2c2c]',
            number: '04',
            services: [
                {
                    name: 'Insolvency & Bankruptcy',
                    details: [
                        'Resolution plans, settlements',
                        'Representation before NCLT, NCLAT, Supreme Court'
                    ]
                },
                {
                    name: 'Mergers, Acquisitions & Competition Law',
                    details: [
                        'Strategic counsel on merger control & compliance',
                        'Due diligence & regulatory approvals'
                    ]
                }
            ]
        },
        {
            id: 'commercial',
            name: 'COMMERCIAL',
            title: 'Commercial',
            icon: '/commercial.png',
            color: 'from-[#faf6f2] to-[#f5f1ed]',
            hoverColor: 'from-[#f5f1ed] to-[#f0ece8]',
            textColor: 'text-[#2c2c2c]',
            number: '05',
            services: [
                {
                    name: 'Commercial Arbitration',
                    details: [
                        'Disputes on compliance, quality, quantity',
                        'Enforcement of oral agreements, guarantor liabilities'
                    ]
                },
                {
                    name: 'Negotiable Instrument Act',
                    details: [
                        'Section 138 cases',
                        'Compounding offences under Section 147',
                        'Handling from Section 251 CrPc notice to cross-examination'
                    ]
                },
                {
                    name: 'Contract Drafting & Vetting',
                    details: [
                        'Pre-drafting to execution',
                        'Clauses to prevent misinterpretation while retaining flexibility'
                    ]
                }
            ]
        },
        {
            id: 'iptech',
            name: 'IP & TECH',
            title: 'IP Tech',
            icon: '/IPTECH.png',
            color: 'from-[#f6f4f8] to-[#f1eef3]',
            hoverColor: 'from-[#f1eef3] to-[#ece8ee]',
            textColor: 'text-[#2c2c2c]',
            number: '06',
            services: [
                {
                    name: 'Intellectual Property Rights',
                    details: [
                        'Registration, enforcement, licensing, dispute resolution'
                    ]
                }
            ]
        },
        {
            id: 'regulatory',
            name: 'REGULATORY',
            title: 'Regulatory',
            icon: '/regulatory.png',
            color: 'from-[#f4f6f8] to-[#eff1f3]',
            hoverColor: 'from-[#eff1f3] to-[#eaeced]',
            textColor: 'text-[#2c2c2c]',
            number: '07',
            services: [
                {
                    name: 'Legal Advisory on Building Laws & Civic Compliance',
                    details: [
                        'Urban development, zoning, and planning disputes',
                        'Delhi Development Act & municipal governance'
                    ]
                }
            ]
        }
    ];

    return (
        <section id={id} className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#f5ebe0] relative overflow-hidden py-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-5xl font-semibold text-[#2c2c2c] mb-6 tracking-tight dm-serif-text-regular">
                        Our Legal Services
                    </h2>
                    <p className="text-xl text-[#666] max-w-4xl mx-auto leading-relaxed">
                        Comprehensive legal solutions across all practice areas
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {serviceCategories.map((category, index) => {
                        const isHovered = hoveredService === category.id;

                        return (
                            <div
                                key={category.id}
                                className={`relative rounded-2xl shadow-md transition-all duration-700 ease-out bg-gradient-to-br group overflow-hidden border border-[#d6ccc2]/30 cursor-pointer hover:shadow-lg hover:-translate-y-1 ${(isHovered ? category.hoverColor : category.color)
                                    } ${isHovered ? 'p-6 min-h-[500px]' : 'p-8 h-64'}`}
                                onMouseEnter={() => setHoveredService(category.id)}
                                onMouseLeave={() => setHoveredService(null)}
                            >
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-5 transition-opacity duration-700 ease-out">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#2c2c2c] rounded-full transform translate-x-6 -translate-y-6 transition-transform duration-700 ease-out"></div>
                                    <div className="absolute bottom-0 left-0 w-12 h-12 bg-[#2c2c2c] rounded-full transform -translate-x-3 translate-y-3 transition-transform duration-700 ease-out"></div>
                                </div>

                                {/* Number */}
                                <div className={`absolute top-4 left-4 text-4xl font-light opacity-20 ${category.textColor} dm-serif-text-regular transition-all duration-700 ease-out ${isHovered ? 'scale-90 opacity-10' : 'scale-100 opacity-20'
                                    }`}>
                                    {category.number}
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="flex justify-center mb-6 transition-all duration-700 ease-out">
                                        <div className={`w-16 h-16 relative transition-all duration-700 ease-out ${isHovered ? 'scale-95 -translate-y-1' : 'scale-100 translate-y-0'
                                            }`}>
                                            <Image
                                                src={category.icon}
                                                alt={category.name}
                                                fill
                                                className="object-contain filter drop-shadow-sm transition-all duration-700 ease-out"
                                            />
                                        </div>
                                    </div>

                                    {/* Category Name */}
                                    <h3 className={`text-xl font-semibold text-center mb-4 dm-serif-text-regular ${category.textColor} transition-all duration-700 ease-out ${isHovered ? 'transform -translate-y-2 scale-95' : 'transform translate-y-0 scale-100'
                                        }`}>
                                        {category.title}
                                    </h3>

                                    {/* Expanded Content on Hover */}
                                    <div className={`transition-all duration-800 ease-in-out overflow-hidden ${(isHovered ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0')
                                        }`}>
                                        <div className="space-y-3 mt-6 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#d6ccc2] scrollbar-track-transparent">
                                            {category.services.map((service, serviceIndex) => (
                                                <div
                                                    key={serviceIndex}
                                                    className={`bg-white/70 rounded-lg p-3 backdrop-blur-sm shadow-sm border border-[#d6ccc2]/20 transition-all duration-700 ease-out ${isHovered ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'
                                                        }`}
                                                    style={{
                                                        transitionDelay: isHovered ? `${serviceIndex * 100}ms` : '0ms'
                                                    }}
                                                >
                                                    <h4 className={`font-medium mb-2 text-sm ${category.textColor} transition-colors duration-500 ease-out`}>
                                                        {service.name}
                                                    </h4>
                                                    <ul className="space-y-1">
                                                        {service.details.map((detail, detailIndex) => (
                                                            <li key={detailIndex} className="text-xs text-[#666] flex items-start leading-relaxed transition-colors duration-500 ease-out">
                                                                <span className="mr-2 mt-1 text-xs flex-shrink-0 text-[#2c2c2c] transition-colors duration-500 ease-out">•</span>
                                                                <span className="flex-1">{detail}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Service Count (hidden) */}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center">
                    <p className="text-[#666] text-lg">
                        Hover over each service category to explore our comprehensive offerings
                    </p>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#d6ccc2]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#f5ebe0]/20 rounded-full blur-3xl"></div>
        </section>
    );
};

export default Services;
