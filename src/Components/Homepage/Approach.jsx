import { useState, useEffect } from 'react';
import Image from '../../assets/Images/image 3.png'

export default function ApproachSection() {
    // Remove all sliding-related state and effects
    const steps = [
        {
            id: 1,
            number: "01",
            title: "Analysis",
            description: "We begin by thoroughly analyzing your project requirements to understand your unique needs and challenges, laying the groundwork for success."
        },
        {
            id: 2,
            number: "02",
            title: "Custom Design",
            description: "Leveraging our expertise, we craft tailored solutions designed to meet your specific goals, ensuring optimal results."
        },
        {
            id: 3,
            number: "03",
            title: "Implementation",
            description: "Our team executes with precision, utilizing industry best practices to deliver flawless installations and integrations."
        },
        {
            id: 4,
            number: "04",
            title: "Support",
            description: "Proactive maintenance and dedicated assistance to ensure your systems remain operational, strengthening your operational satisfaction."
        },
    ];


    // Remove all useEffect hooks related to sliding/resizing
    // Remove visibleCount state and related code
    // Remove extendedSteps, visibleSlides, and currentIndex-related code

    // Keep animated text state and effect for header
    const [textState, setTextState] = useState({
        part1: true, // "Our Approach to"
        part2: false, // "delivering"
        part3: false  // "Excellence"
    });

    useEffect(() => {
        const animationInterval = setInterval(() => {
            setTextState(prev => {
                if (prev.part1) return { part1: false, part2: true, part3: false };
                if (prev.part2) return { part1: false, part2: false, part3: true };
                return { part1: true, part2: false, part3: false };
            });
        }, 2000);
        return () => clearInterval(animationInterval);
    }, []);

    return (
        <section className="py-10 px-4 bg-[#F7F7F7]">
            <div className="max-w-5xl mx-auto">
                {/* Header section - now animated and styled like ServiceSection */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                    <div className="flex flex-col items-start w-full md:w-1/3 mb-6 md:mb-0">
                        <div className="flex items-center">
                            <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2 animate-blink"></span>
                            <span className="text-sm md:text-lg font-medium text-gray-700">Approach</span>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-start md:items-end">
                        {/* Animated heading */}
                        <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight">
                            <span className={textState.part1 ? 'font-bold text-black' : 'font-normal text-gray-400'}>
                                Our Approach to
                            </span>{' '}
                            <span className={textState.part2 ? 'font-bold text-black' : 'font-normal text-gray-400'}>
                                delivering
                            </span>{' '}
                            <span className={textState.part3 ? 'font-bold text-black' : 'font-normal text-gray-400'}>
                                Excellence
                            </span>
                        </h2>
                    </div>
                </div>
                {/* Main image - single static image with rounded corners */}
                <div className="mb-10">
                    <div className="w-full overflow-hidden rounded-2xl">
                        <img
                            src={Image}
                            alt="Team collaboration"
                            className="w-full h-56 md:h-64 object-cover"
                        />
                    </div>
                </div>

                {/* Replace slider with static grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step) => (
                        <div 
                            key={step.id}
                            className="cursor-pointer transition-all duration-300 opacity-80 hover:opacity-100"
                        >
                            <p className="text-sm text-gray-400 mb-1">({step.number})</p>
                            <h3 className="text-xl font-medium mb-3 text-blue-700">
                                {step.title}
                            </h3>
                            <hr />
                            <p className="text-sm mt-3 text-gray-600">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Remove the entire slider container section */}
            </div>
        </section>
    );
}
