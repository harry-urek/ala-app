
import React, { useState } from 'react';
import Image from 'next/image';

const Services = ({ id }) => {
    const [hoveredService, setHoveredService] = useState(null);

    // Comprehensive service categories with detailed services from the provided list
    const serviceCategories = [
        {
            id: 'taxes',
            name: 'TAXATION',
            title: 'Taxes',
            icon: '/taxes.png',
            color: 'from-emerald-100 to-emerald-200',
            hoverColor: 'from-emerald-200 to-emerald-300',
            textColor: 'text-emerald-800',
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
            color: 'from-blue-100 to-blue-200',
            hoverColor: 'from-blue-200 to-blue-300',
            textColor: 'text-blue-800',
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
            color: 'from-red-100 to-red-200',
            hoverColor: 'from-red-200 to-red-300',
            textColor: 'text-red-800',
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
            color: 'from-green-100 to-green-200',
            hoverColor: 'from-green-200 to-green-300',
            textColor: 'text-green-800',
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
            color: 'from-amber-100 to-amber-200',
            hoverColor: 'from-amber-200 to-amber-300',
            textColor: 'text-amber-800',
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
            color: 'from-purple-100 to-purple-200',
            hoverColor: 'from-purple-200 to-purple-300',
            textColor: 'text-purple-800',
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
            color: 'from-indigo-100 to-indigo-200',
            hoverColor: 'from-indigo-200 to-indigo-300',
            textColor: 'text-indigo-800',
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
        <section id={id} className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden py-20">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-5xl font-semibold text-gray-800 mb-6 tracking-tight dm-serif-text-regular">
                        Our Legal Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
                                className={`relative rounded-3xl shadow-lg transition-all duration-700 ease-in-out bg-gradient-to-br group overflow-hidden border border-white/20 cursor-pointer hover:shadow-2xl hover:-translate-y-2 ${
                                    (isHovered ? category.hoverColor : category.color)
                                } ${isHovered ? 'p-6 min-h-[500px]' : 'p-8 h-64'}`}
                                onMouseEnter={() => setHoveredService(category.id)}
                                onMouseLeave={() => setHoveredService(null)}
                            >
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-5">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
                                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full transform -translate-x-4 translate-y-4"></div>
                                </div>

                                {/* Number */}
                                <div className={`absolute top-4 left-4 text-6xl font-bold opacity-10 ${category.textColor}`}>
                                    {category.number}
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="flex justify-center mb-6">
                                        <div className="w-20 h-20 relative group-hover:scale-110 transition-transform duration-300">
                                            <Image
                                                src={category.icon}
                                                alt={category.name}
                                                fill
                                                className="object-contain filter drop-shadow-lg"
                                            />
                                        </div>
                                    </div>

                                    {/* Category Name */}
                                    <h3 className={`text-2xl font-bold text-center mb-4 dm-serif-text-regular ${category.textColor}`}>
                                        {category.title}
                                    </h3>

                                    {/* Expanded Content on Hover */}
                                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                        (isHovered ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0')
                                    }`}>
                                        <div className="space-y-3 mt-6 max-h-[500px] overflow-y-auto">
                                            {category.services.map((service, serviceIndex) => (
                                                <div key={serviceIndex} className="bg-white/90 rounded-lg p-3 backdrop-blur-sm shadow-sm">
                                                    <h4 className={`font-semibold mb-2 text-sm ${category.textColor}`}>
                                                        {service.name}
                                                    </h4>
                                                    <ul className="space-y-1">
                                                        {service.details.map((detail, detailIndex) => (
                                                            <li key={detailIndex} className="text-xs text-gray-700 flex items-start leading-relaxed">
                                                                <span className="mr-2 mt-1 text-xs flex-shrink-0">•</span>
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
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Hover over each service category to explore our comprehensive offerings and expertise in each practice area.
                    </p>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"></div>
        </section>
    );
};

export default Services;
