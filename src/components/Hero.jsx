import React from 'react';

const Hero = ({ id }) => {
    return (
        <section id={id} className="min-h-screen bg-gradient-to-br from-[#d6ccc2] to-[#f5ebe0] relative overflow-hidden">
            <div className="flex max-w-8xl mx-auto px-15 py-40 gap-15 items-start max-[760px]:flex-col max-[760px]:px-6 max-[760px]:py-24 max-[760px]:gap-6">
                {/* Left Content */}
                <div className="flex-1 max-w-2xl py-10 pl-11 ml-2 max-[760px]:max-w-full max-[760px]:py-0 max-[760px]:pl-0 max-[760px]:ml-0 max-[760px]:text-center animate-fade-in-up">
                    {/* Brand Name */}
                    <div className="flex flex-col mb-15 max-[760px]:mb-6">
                        <span className="text-5xl font-semibold text-[#2c2c2c] leading-tight tracking-tight max-[760px]:text-2xl max-[760px]:leading-snug animate-slide-in-left dm-serif-text-regular">
                            ALKA LAW ASSOCIATES 
                        </span>
                    </div>

                    {/* Main Content */}
                    <div className="mb-20 max-[760px]:mb-6">
                        <h1 className="text-6xl font-normal text-[#2c2c2c] leading-tight mb-6 tracking-tight max-[760px]:text-3xl max-[760px]:mb-4 max-[760px]:leading-tight animate-slide-in-left animation-delay-200 dm-serif-text-regular">
                            Your Justice <br />
                            <em className="italic font-light dm-serif-text-regular-italic">Our Commitment</em>
                        </h1>

                        <p className="text-lg text-[#666] leading-relaxed pt-4 mb-5 font-normal text-wrap max-[760px]:text-sm max-[760px]:pt-2 max-[760px]:mb-4 max-[760px]:leading-normal animate-fade-in animation-delay-400">
                            We're a certified legal firm that provides comprehensive
                            legal services to individuals and businesses across
                            multiple practice areas with dedication and expertise.
                        </p>
                    </div>
                </div>

                {/* Right Content - Single Large Image */}
                <div className="flex-1 relative h-[600px] flex justify-end max-[760px]:h-auto max-[760px]:justify-center max-[760px]:flex-none animate-fade-in-right animation-delay-300">
                    <div className="h-[400px] w-[800px] max-[760px]:h-[240px] max-[760px]:w-full max-[760px]:max-w-full">
                        <div className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[#e8f4fd] to-[#c3e9ff] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl max-[760px]:rounded-lg">
                            <img src="/hero.png" alt="Legal consultation" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                        </div>
                    </div>

                    {/* Circular Logo */}
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-20 h-20 max-[760px]:hidden animate-pulse-subtle">
                        {/* Existing logo code */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
