import React from 'react';

const Footer = ({ id }) => {
    return (
        <footer id={id} className="bg-[#1a1a1a] text-white py-16">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Company Info with Logo */}
                    <div className="flex flex-col items-start">
                        {/* Logo Section */}
                        <div className="mb-8">
                            <div className="text-6xl font-black text-white mb-4 dm-serif-text-regular">
                                ALA
                            </div>
                            <div className="text-gray-300 space-y-1">
                                <p className="font-medium dm-serif-text-regular">Alka Law Associates</p>
                                <p className="text-sm dm-serif-text-regular-italic">Legal Excellence, Delivered</p>
                                <p className="text-sm underline">New Delhi, India</p>
                            </div>
                        </div>
                        
                        <p className="text-gray-400 text-sm leading-relaxed text-justify">
                            Alka Law Associates (ALA) is a boutique law firm specializing in Direct and
                            Indirect Taxation, with a strong pan-India presence across all Courts and
                            Tribunals. ALA also provides solicitor services, including briefing senior
                            advocates for seamless representation.
                        </p>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6 dm-serif-text-regular">Solutions</h4>
                        <ul className="space-y-3 text-gray-300">
                            <li className="hover:text-white transition-colors cursor-pointer">CORPORATE & ALLIED LAW</li>
                            <li className="hover:text-white transition-colors cursor-pointer">TAXATION LAWS</li>
                            <li className="hover:text-white transition-colors cursor-pointer">DISPUTE RESOLUTION</li>
                            <li className="hover:text-white transition-colors cursor-pointer">MERGERS & ACQUISITIONS</li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6 dm-serif-text-regular">Contact Details</h4>
                        <div className="space-y-3 text-gray-300">
                            <p className="hover:text-white transition-colors">📞 +91 93543 76719</p>
                            <p className="hover:text-white transition-colors">📞 +91 83406 39137</p>
                            <p className="hover:text-white transition-colors">📧 alkalawassociates@outlook.com</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 Alka Law Associates. All rights reserved.
                    </p>
                    {/* <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            LinkedIn
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Twitter
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Facebook
                        </a>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
