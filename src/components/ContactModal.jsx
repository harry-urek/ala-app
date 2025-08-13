import React, { useState, useEffect } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear any previous status when user starts typing
        if (submitStatus) {
            setSubmitStatus(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.fullName || !formData.email || !formData.message) {
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Use relative URL for API calls - works in both development and production
            const apiUrl = '/api/contact';
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    fullName: '',
                    email: '',
                    company: '',
                    message: ''
                });
                // Close modal after a brief delay to show success message
                setTimeout(() => {
                    onClose();
                    setSubmitStatus(null);
                }, 2000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Close modal on Escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-[#2c2c2c]/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={handleOverlayClick}
        >
            <div className="bg-gradient-to-br from-[#f1faee] to-[#f5ebe0] rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-fade-in-up shadow-2xl border border-[#d6ccc2]/20">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#e76f51] rounded-full mr-3"></div>
                        <h2 className="text-xl font-medium text-[#2c2c2c] dm-serif-text-regular">Get in Touch</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full border-2 border-[#d6ccc2] bg-white/50 flex items-center justify-center hover:bg-[#e76f51] hover:border-[#e76f51] hover:text-white transition-all duration-300 group"
                        aria-label="Close modal"
                    >
                        <span className="text-[#2c2c2c] text-2xl font-bold pb-0.5 group-hover:text-white transition-colors duration-300">×</span>
                    </button>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl font-normal text-[#2c2c2c] mb-2 leading-tight dm-serif-text-regular">
                    Have a legal matter 
                    <em className="italic dm-serif-text-regular-italic">   you'd like to discuss ?</em>
                </h1>
                
                <p className="text-[#666] text-xl pt-4 mb-8  leading-relaxed eb-garamond-400-reg">
                    We're here to provide you with expert legal guidance and personalized solutions.
                </p>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <p className="text-green-800 font-medium eb-garamond-600-reg">
                                Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                            </p>
                        </div>
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            <p className="text-red-800 font-medium eb-garamond-600-reg">
                                There was an error sending your message. Please try again or contact us directly.
                            </p>
                        </div>
                    </div>
                )}

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d6ccc2] to-transparent mb-8"></div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6 text-lg eb-garamond-600-reg">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-[#2c2c2c]  mb-2  pl-1 ">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                className="w-full px-4 py-3 bg-white/70 border-2 border-[#d6ccc2]/30 rounded-lg text-[#2c2c2c] placeholder-[#999] focus:outline-none focus:border-[#e76f51] focus:bg-white transition-all duration-300 eb-garamond-400-reg"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div>
                            <label className="block text-[#2c2c2c]  mb-2  pl-1">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 bg-white/70 border-2 border-[#d6ccc2]/30 rounded-lg text-[#2c2c2c] placeholder-[#999] focus:outline-none focus:border-[#e76f51] focus:bg-white transition-all duration-300 eb-garamond-400-reg"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <label className="block text-[#2c2c2c]  mb-2 pl-1 eb-garamond-600-reg">
                            Company/Organization
                        </label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Enter company name (optional)"
                            className="w-full px-4 py-3 bg-white/70 border-2 border-[#d6ccc2]/30 rounded-lg text-[#2c2c2c] placeholder-[#999] focus:outline-none focus:border-[#e76f51] focus:bg-white transition-all duration-300 eb-garamond-400-reg"
                            disabled={isSubmitting}
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-[#2c2c2c] pl-1 mb-2 ">
                            Tell us about your legal matter *
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Please describe your legal matter in detail so we can better assist you..."
                            rows={5}
                            className="w-full px-4 py-3 bg-white/70 border-2 border-[#d6ccc2]/30 rounded-lg text-[#2c2c2c] placeholder-[#999] focus:outline-none focus:border-[#e76f51] focus:bg-white transition-all duration-300 resize-none eb-garamond-400-reg"
                            required
                            disabled={isSubmitting}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="relative px-10 py-4 bg-gradient-to-r from-[#2c2c2c] to-[#1a1a1a] text-white rounded-xl font-medium group shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden dm-serif-text-regular text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            {/* Background animation overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            
                            {/* Button content */}
                            <div className="relative flex items-center justify-center">
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-2.5 h-2.5 bg-[#d6ccc2] rounded-full mr-3 group-hover:bg-white group-hover:animate-pulse transition-colors duration-300"></div>
                                        <span>Send Message</span>
                                        <svg 
                                            className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </>
                                )}
                            </div>
                            
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </button>
                        
                        <p className="text-sm text-[#666] mt-4 eb-garamond-400-reg flex items-center pt-4">
                            <svg className="w-4 h-4 mr-2 text-[#2c2c2c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            We'll get back to you within 24 hours during business days.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
