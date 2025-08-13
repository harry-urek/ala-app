import React, { useState } from 'react';
import ContactModal from './ContactModal';

const Footer = ({ id }) => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openContactModal = () => {
        setIsContactModalOpen(true);
    };

    const closeContactModal = () => {
        setIsContactModalOpen(false);
    };
    return (
        <footer id={id} className="bg-black text-white py-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-xl"></div>
                <div className="absolute bottom-0 right-1/3 w-24 h-24 bg-white rounded-full blur-lg"></div>
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-16">
                    {/* Company Info - Takes 2 columns */}
                    <div className="lg:col-span-2">
                        {/* Logo Section */}
                        <div className="mb-12">
                            <div className="text-5xl font-black text-white mb-4 dm-serif-text-regular tracking-tight">
                                ALA
                            </div>
                            <div className="text-gray-300 space-y-2 mb-8">
                                <p className="text-lg font-medium dm-serif-text-regular">Alka Law Associates</p>
                                <p className="text-sm dm-serif-text-regular-italic text-gray-400">Legal Excellence, Delivered</p>
                                <p className="text-sm text-gray-400">New Delhi, India</p>
                            </div>
                        </div>
                        
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                            Alka Law Associates (ALA) is a boutique law firm specializing in Direct and
                            Indirect Taxation, with a strong pan-India presence across all Courts and
                            Tribunals. ALA also provides solicitor services, including briefing senior
                            advocates for seamless representation.
                        </p>

                        {/* Call to Action Button */}
                        <div className="mb-8">
                            <button 
                                onClick={openContactModal}
                                className="bg-[#c4ff61] text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-[#b8ff4d] transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                            >
                                Get Legal Consultation
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="lg:col-span-1">
                        <h4 className="text-lg font-semibold mb-8 text-white dm-serif-text-regular">Services</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform transition-all duration-200">
                                Corporate & Allied Law
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform transition-all duration-200">
                                Taxation Laws
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform transition-all duration-200">
                                Dispute Resolution
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform transition-all duration-200">
                                Mergers & Acquisitions
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform transition-all duration-200">
                                IP & Technology Law
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform transition-all duration-200">
                                Regulatory Compliance
                            </li>
                        </ul>
                    </div>

                    {/* Practice Areas Column */}
                    <div className="lg:col-span-1">
                        <h4 className="text-lg font-semibold mb-8 text-white dm-serif-text-regular">Practice Areas</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform transition-all duration-200">
                                Direct Tax
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform transition-all duration-200">
                                Indirect Tax
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform transition-all duration-200">
                                Commercial Law
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform transition-all duration-200">
                                Litigation
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform transition-all duration-200">
                                Compliance
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-1">
                        <h4 className="text-lg font-semibold mb-8 text-white dm-serif-text-regular">Contact</h4>
                        <div className="space-y-4 text-gray-400 text-sm">
                            <div className="hover:text-white transition-colors cursor-pointer group">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs">📞</span>
                                    <span>+91 93543 76719</span>
                                </div>
                            </div>
                            <div className="hover:text-white transition-colors cursor-pointer group">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs">📞</span>
                                    <span>+91 83406 39137</span>
                                </div>
                            </div>
                            <div className="hover:text-white transition-colors cursor-pointer group">
                                <a href="mailto:alkalawassociates@outlook.com" className="flex items-center gap-2">
                                    <span className="text-xs">📧</span>
                                    <span>alkalawassociates@outlook.com</span>
                                </a>
                            </div>
                        </div>

                        {/* Call to Action */}
                        {/* <div className="mt-8 pt-6 border-t border-gray-800">
                            <p className="text-gray-300 text-sm mb-4">Let's work together</p>
                            <p className="text-white font-semibold text-lg dm-serif-text-regular">
                                Call ALA
                                <span className="inline-block ml-2 w-8 h-8 bg-[#c4ff61] rounded-full text-center text-black text-sm leading-8">→</span>
                            </p>
                        </div> */}
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="flex flex-wrap gap-6 mb-12">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        LinkedIn
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Twitter
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Facebook
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Instagram
                    </a>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-gray-500 text-sm">
                        <p>ALA © 2025</p>
                        <p>Alka Law Associates is a limited liability law firm based in 🇮🇳 New Delhi</p>
                    </div>
                    
                    {/* Team Photos Placeholder */}
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 bg-gray-700 rounded-full border-2 border-black"></div>
                        <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-black"></div>
                        <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-black"></div>
                        <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-black flex items-center justify-center text-xs text-black">
                            +
                        </div>
                    </div>
                </div>
            </div>

            {/* Large Brand Name at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
                <div className="text-[12rem] md:text-[16rem] font-black text-white/5 leading-none tracking-tighter dm-serif-text-regular">
                    ALA
                </div>
            </div>

            {/* Contact Modal */}
            <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
        </footer>
    );
};

export default Footer;
