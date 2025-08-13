import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const TeamMember = ({ id, teamMembers = [] }) => {
    return (
        <section id={id} className="min-h-screen   bg-gradient-to-br from-[#f5ebe0] via-[#e8dcc6] to-[#d6ccc2] relative overflow-hidden">
            <div className='flex flex-col max-w-7xl mx-auto px-6 py-20 gap-2 items-start'>
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-[#2c2c2c]/5 rounded-full blur-3xl animate-pulse-subtle"></div>
                    <div className="absolute bottom-32 right-16 w-96 h-96 bg-[#f1faee]/30 rounded-full blur-3xl animate-pulse-subtle animation-delay-400"></div>
                    <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[#d6ccc2]/20 rounded-full blur-2xl animate-pulse-subtle animation-delay-600"></div>
                </div>
                {/* Section Heading */}
                <div className=" mx-auto px-15 pt-24 pb-16 max-[760px]:px-4 max-[760px]:pt-16 max-[760px]:pb-12 animate-fade-in-up relative z-10">
                    <div className="text-center">
                        {/* Subtitle */}
                        <p className="text-2xl eb-garamond-600-italic text-[#666] font-medium tracking-wide mb-8 pb-8 animate-fade-in animation-delay-200 max-[760px]:text-base">
                            Excellence in Legal Practice
                        </p>
                
                        {/* Main Title */}
                        <h1 className="text-7xl font-semibold text-[#2c2c2c] leading-tight tracking-tight mb-4 pb-8 max-[760px]:text-4xl max-[760px]:mb-4 animate-slide-in-down">
                            MEET OUR TEAM
                        </h1>
                
                        {/* Enhanced Decorative Line */}
                        <div className="flex items-center justify-center mb-8 animate-fade-in animation-delay-400">
                            <div className="w-16 h-0.5 bg-[#2c2c2c]/30"></div>
                            <div className="w-8 h-8 mx-4 bg-gradient-to-br from-[#2c2c2c] to-[#555] rounded-full flex items-center justify-center">
                                <div className="w-3 h-3 bg-[#f5ebe0] rounded-full"></div>
                            </div>
                            <div className="w-16 h-0.5 bg-[#2c2c2c]/30"></div>
                        </div>
                
                        {/* Description */}
                        <p className="text-xl text-[#666] max-w-4xl mx-auto leading-relaxed font-normal animate-fade-in animation-delay-500 max-[760px]:text-lg max-[760px]:px-4">
                            Our distinguished team of legal professionals brings decades of combined experience
                            across diverse practice areas, committed to delivering exceptional legal solutions.
                        </p>
                    </div>
                </div>
                {/* Team Members Grid */}
                <div className="pb-28 max-[760px]:pb-20 relative z-10">
                    <div className="max-w-8xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div
                                key={member.id || index}
                                className="animate-fade-in-up relative"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Background accent for each card */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"></div>
                
                                <TeamMemberCard
                                    name={member.name}
                                    position={member.position}
                                    qualifications={member.qualifications}
                                    description={member.description}
                                    image={member.image}
                                    reverse={index % 2 === 1}
                                />
                
                                {/* Separator between team members (except last) */}
                                {index < teamMembers.length - 1 && (
                                    <div className="flex justify-center my-14 max-[760px]:my-8">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-[#2c2c2c]/20 rounded-full"></div>
                                            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#2c2c2c]/20 to-transparent"></div>
                                            <div className="w-2 h-2 bg-[#2c2c2c]/20 rounded-full"></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Bottom Decorative Element */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#d6ccc2] to-transparent pointer-events-none"></div>
            </div>
        </section>
    );
};

export default TeamMember;
