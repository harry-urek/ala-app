import React from 'react';

const TeamMemberCard = ({ name, position, qualifications, description, image, reverse = false }) => {
    return (
        <div className={`flex max-w-7xl mx-auto px-10 py-18 gap-15 justify-between items-start max-[760px]:flex-col-reverse max-[760px]:px-4 max-[760px]:py-8 max-[760px]:gap-6 ${reverse ? 'flex-row-reverse max-[760px]:flex-col-reverse' : ''}`}>
            {/* Content Side */}
            <div className="flex-1 max-w-4xl py-10 px-11 pb-6 max-[760px]:max-w-full max-[760px]:py-6 max-[760px]:px-5 max-[760px]:text-left animate-fade-in-left bg-[#f5f5dc]/60 backdrop-blur-sm rounded-2xl border border-[#f5f5dc]/80 shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-[#f5f5dc]/70">
                <div className="mb-16 max-[760px]:mb-6">
                    {/* Name with enhanced styling */}
                    <h2 className="text-5xl font-normal pt-5 text-[#2c2c2c] leading-tight mb-2.5 tracking-tight max-[760px]:text-3xl max-[760px]:mb-2 max-[760px]:pt-2 transition-colors duration-300 p-2 max-[760px]:p-0 hover:text-[#1a1a1a] relative newsreader-medium">
                        {name}
                        {/* <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#2c2c2c] to-transparent max-[760px]:mx-auto max-[760px]:left-1/2 max-[760px]:-translate-x-1/2"></div> */}
                    </h2>

                    {/* Position with icon */}
                    <div className="flex items-center pl-2 max-[760px]:justify-start mb-8 max-[760px]:mb-4 max-[760px]:pl-0">
                        <div className="w-2 h-2 bg-[#d6ccc2] rounded-full mr-2 max-[760px]:hidden"></div>
                        <h3 className="text-2xl p-1.5 text-[#666] eb-garamond-600-italic max-[760px]:text-xl max-[760px]:p-0 transition-colors duration-300 hover:text-[#555']">
                            {position}
                        </h3>
                    </div>

                    {/* Qualifications Section with enhanced styling */}
                    {qualifications && (
                        <div className="mb-8 max-[760px]:mb-4 animate-fade-in animation-delay-200 bg-[#f5ebe0]/50 rounded-xl p-4 pt-2 max-[760px]:p-3">
                            <h4 className="text-[22px] eb-garamond-600-reg font- text-[#2c2c2c] pb-2 p-1.5 mb-3 max-[760px]:text-xl max-[760px]:mb-2 max-[760px]:pb-1 max-[760px]:p-0 flex items-center">
                                {/* <span className="w-1.5 h-1.5 bg-[#2c2c2c] rounded-full mr-2"></span> */}
                                Qualifications
                            </h4>
                            <div className="space-y-2 max-[760px]:space-y-1.5">
                                {qualifications.map((qual, index) => (
                                    <p key={index} className="text-base text-[#666] newsreader-medium leading-relaxed max-[760px]:text-base max-[760px]:leading-relaxed transition-colors duration-300 hover:text-[#555] flex items-start">
                                        <span className="text-[#d6ccc2] mr-2 mt-0.5 text-sm flex-shrink-0">•</span>
                                        <span className='pl-1 pb-0.5 max-[760px]:pl-0 flex-1'>{qual}</span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Description with enhanced styling */}
                    <div className="relative">
                        <p className="text-xl text-[#666] leading-relaxed eb-garamond-400-reg max-[760px]:text-base max-[760px]:leading-normal animate-fade-in animation-delay-400 transition-colors text-balance text-justify duration-300 hover:text-[#555] pl-5 max-[760px]:pl-0 border-l-2 max-[760px]:border-l-0 p-2 max-[760px]:p-0 border-[#d6ccc2]/50">
                            {description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Image Side with enhanced styling */}
            <div className="flex-1 relative h-[500px] pl-4 flex justify-center items-center max-[760px]:h-auto max-[760px]:flex-none max-[760px]:pl-0 max-[760px]:justify-center animate-fade-in-right animation-delay-300">
                <div className="relative group">
                    {/* Decorative background circle */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5dc]/30 to-[#e6d7c3]/30 rounded-full scale-110 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                    {/* Main image container */}
                    <div className="w-[450px] h-[450px] rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-[#f5f5dc] to-[#e6d7c3] transition-all duration-500 hover:-translate-y-3 hover:shadow-3xl border-4 border-[#f5f5dc]/80 max-[760px]:w-[280px] max-[760px]:h-[280px] max-[760px]:border-2 group-hover:border-[#f5f5dc] relative z-10">
                        <img
                            src={image}
                            alt={`${name} - ${position}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Enhanced decorative elements */}
                    <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#2c2c2c] to-[#555] rounded-full flex items-center justify-center max-[760px]:w-12 max-[760px]:h-12 max-[760px]:-bottom-3 max-[760px]:-right-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg z-20">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#f5ebe0] to-white rounded-full max-[760px]:w-6 max-[760px]:h-6 transition-all duration-300 group-hover:bg-white flex items-center justify-center">
                            <div className="w-2 h-2 bg-[#2c2c2c] rounded-full max-[760px]:w-1.5 max-[760px]:h-1.5"></div>
                        </div>
                    </div>

                    {/* Additional floating elements */}
                    <div className="absolute top-8 -left-4 w-3 h-3 bg-[#d6ccc2] rounded-full opacity-60 animate-pulse-subtle"></div>
                    <div className="absolute -top-2 right-12 w-2 h-2 bg-[#f1faee] rounded-full opacity-80 animate-pulse-subtle animation-delay-300"></div>
                    <div className="absolute bottom-12 -left-6 w-4 h-4 bg-[#e8f4fd]/60 rounded-full opacity-50 animate-pulse-subtle animation-delay-500"></div>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCard;
