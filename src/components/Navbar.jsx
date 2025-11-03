import React, { useState, useEffect } from 'react';
import ContactModal from './ContactModal';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [displayText, setDisplayText] = useState('ALA');
    const [isAnimating, setIsAnimating] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        // Start animation after initial load
        const timer = setTimeout(() => {
            const targetText = ' | ALKA LAW ASSOCIATES';
            let currentIndex = 0;

            const typeInterval = setInterval(() => {
                if (currentIndex < targetText.length) {
                    setDisplayText('ALA' + targetText.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(typeInterval);
                    setIsAnimating(false);
                }
            }, 100); // 100ms delay between each character

            return () => clearInterval(typeInterval);
        }, 1500); // Wait 1.5 seconds before starting the typewriter effect

        return () => clearTimeout(timer);
    }, []);

    // Handle scroll behavior for navbar visibility
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show navbar when scrolling up or at the top
            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                setIsVisible(true);
            }
            // Hide navbar when scrolling down and past initial threshold
            else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
                setIsVisible(false);
                setIsMobileMenuOpen(false); // Close mobile menu when hiding navbar
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const openContactModal = () => {
        setIsContactModalOpen(true);
        setIsMobileMenuOpen(false); // Close mobile menu if open
    };

    const closeContactModal = () => {
        setIsContactModalOpen(false);
    };

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (targetId === 'contact') {
            openContactModal();
            return;
        }

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#f1faee]/95 backdrop-blur-md shadow-sm py-3 px-4 md:px-10 max-[760px]:py-2 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}>
                <div className="max-w-7xl h-xl mx-auto p-3 max-[760px]:p-2 flex items-center justify-between">
                    {/* Logo/Brand */}
                    <div className="flex items-center">
                        <h1 className="text-4xl max-[760px]:text-2xl font-black text-[#2c2c2c] tracking-tight cursor-pointer dm-serif-text-regular" onClick={(e) => handleNavClick(e, 'home')}>
                            {/* Desktop version with full animation */}
                            <span className="hidden min-[760px]:inline">
                                {displayText}
                                {isAnimating && <span className="animate-pulse-cursor">|</span>}
                            </span>
                            {/* Mobile version - just ALA */}
                            <span className="min-[760px]:hidden text-2xl">
                                ALA
                            </span>
                        </h1>
                    </div>

                    {/* Desktop Navigation Links */}
                    <ul className="hidden min-[760px]:flex items-center space-x-8 text-2xl max-[760px]:text-lg">
                        <li>
                            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-[#2c2c2c] font-medium transition-all duration-200 px-4 py-2 hover:shadow-md dm-serif-text-regular">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#team" onClick={(e) => handleNavClick(e, 'team')} className="text-[#2c2c2c] font-medium transition-all duration-200 px-4 py-2 rounded-md hover:shadow-md dm-serif-text-regular">
                                Team
                            </a>
                        </li>
                        <li>
                            <a href="#footer" onClick={(e) => handleNavClick(e, 'footer')} className="text-[#2c2c2c] font-medium transition-all duration-200 px-4 py-2 rounded-md hover:shadow-md dm-serif-text-regular">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-[#2c2c2c] font-medium transition-all duration-200 px-4 py-2 rounded-md hover:shadow-md dm-serif-text-regular cursor-pointer">
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="min-[760px]:hidden flex flex-col justify-center items-center w-7 h-7 space-y-1"
                        aria-label="Toggle mobile menu"
                    >
                        <span className={`block w-5 h-0.5 bg-[#2c2c2c] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block w-5 h-0.5 bg-[#2c2c2c] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-5 h-0.5 bg-[#2c2c2c] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`min-[760px]:hidden absolute top-full left-0 right-0 bg-[#f1faee]/98 backdrop-blur-md shadow-lg transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <ul className="flex flex-col py-2">
                        <li>
                            <a
                                href="#services"
                                onClick={(e) => handleNavClick(e, 'services')}
                                className="block text-[#2c2c2c] font-medium py-2.5 px-6 text-base hover:bg-[#2c2c2c]/10 transition-colors duration-200 dm-serif-text-regular"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#team"
                                onClick={(e) => handleNavClick(e, 'team')}
                                className="block text-[#2c2c2c] font-medium py-2.5 px-6 text-base hover:bg-[#2c2c2c]/10 transition-colors duration-200 dm-serif-text-regular"
                            >
                                Team
                            </a>
                        </li>
                        <li>
                            <a
                                href="#footer"
                                onClick={(e) => handleNavClick(e, 'footer')}
                                className="block text-[#2c2c2c] font-medium py-2.5 px-6 text-base hover:bg-[#2c2c2c]/10 transition-colors duration-200 dm-serif-text-regular"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <button
                                onClick={openContactModal}
                                className="block w-full text-left text-[#2c2c2c] font-medium py-2.5 px-6 text-base hover:bg-[#2c2c2c]/10 transition-colors duration-200 dm-serif-text-regular"
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Contact Modal */}
            <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
        </>
    );
};

export default Navbar;
