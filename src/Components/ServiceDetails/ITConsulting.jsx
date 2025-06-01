import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ClipboardList, Lightbulb, Map, Cloud, ShieldAlert } from 'lucide-react';
import Approach from '../../Components/Homepage/Approach';

const serviceIcons = {
    assessment: <ClipboardList className="w-6 h-6" />,
    transformation: <Lightbulb className="w-6 h-6" />,
    roadmap: <Map className="w-6 h-6" />,
    cloud: <Cloud className="w-6 h-6" />,
    continuity: <ShieldAlert className="w-6 h-6" />
};

function ITConsulting() {
    const [activeAccordion, setActiveAccordion] = useState(1);
    const [activeFilter, setActiveFilter] = useState('all');

    const services = [
        {
            id: 1,
            title: 'IT Assessment & Planning',
            description: 'Conduct a full audit of your current IT environment to understand gaps, inefficiencies, and areas of improvement. We provide recommendations, roadmaps, and a strategic IT blueprint aligned with your business goals.',
            details: [
                'Comprehensive IT infrastructure assessment',
                'Gap analysis and improvement recommendations',
                'Strategic IT planning and alignment',
                'Technology stack evaluation'
            ],
            icon: 'assessment'
        },
        {
            id: 2,
            title: 'Digital Transformation Consulting',
            description: 'Support your shift from legacy systems to digital-first operations. We guide technology change management, automation strategies, and innovation adoption to boost competitiveness and customer experience.',
            details: [
                'Legacy system modernization',
                'Process automation strategies',
                'Change management and adoption',
                'Digital innovation roadmaps'
            ],
            icon: 'transformation'
        },
        {
            id: 3,
            title: 'Technology Roadmaps',
            description: 'We design multi-year roadmaps that forecast technology investments, upgrades, and innovations. Our approach ensures alignment with business priorities, budget control, and measurable milestones.',
            details: [
                'Multi-year technology planning',
                'Investment forecasting and budgeting',
                'Milestone-based implementation plans',
                'Business-aligned technology strategy'
            ],
            icon: 'roadmap'
        },
        {
            id: 4,
            title: 'Cloud & Infrastructure Consulting',
            description: 'Gain expert insights into your hybrid, cloud, or on-prem infrastructure. We assess workload suitability, optimize architecture, and recommend solutions for cost efficiency, performance, and scalability.',
            details: [
                'Cloud migration strategy',
                'Hybrid infrastructure optimization',
                'Workload assessment and placement',
                'Cost optimization and management'
            ],
            icon: 'cloud'
        },
        {
            id: 5,
            title: 'Business Continuity Planning',
            description: 'Prepare for operational disruptions with comprehensive plans that include risk assessment, recovery strategies, crisis communication protocols, and testing procedures.',
            details: [
                'Disaster recovery planning',
                'Business impact analysis',
                'Crisis management protocols',
                'Recovery testing and validation'
            ],
            icon: 'continuity'
        }
    ];

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    useEffect(() => {
    const scrollToTop = () => {
        // Try multiple methods to ensure it works
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
    };
    
    // Immediate scroll
    scrollToTop();
    
    // Delayed scroll as backup
    const timer = setTimeout(scrollToTop, 50);
    
    return () => clearTimeout(timer);
}, []);


    return (
        <main className="bg-[var(--background-primary)]">
            <section className="pt-36 px-4 max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <p className="text-orange-500 font-medium mb-2">Service</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">IT Consulting & Strategy</h2>
                    <p className="text-[var(--text-secondary)] w-full">
                        Strategic advisory to align IT with business growth.
                    </p>
                </div>

                {/* Accordion Services */}
                <div className="mb-10 space-y-4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                        >
                            <button
                                onClick={() => toggleAccordion(service.id)}
                                className={`w-full p-6 text-left flex justify-between items-center transition-colors ${activeAccordion === service.id ? 'bg-[var(--background-secondary)]' : 'hover:bg-[var(--background-primary)]'}`}
                            >
                                <div className="flex items-center">
                                    <div className="mr-4 p-3 rounded-lg bg-blue-100 text-blue-600">
                                        {serviceIcons[service.icon]}
                                    </div>
                                    <h3 className="text-xl font-bold">{service.title}</h3>
                                </div>
                                <motion.div
                                    animate={{ rotate: activeAccordion === service.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-5 h-5 text-[var(--text-primary)]" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {activeAccordion === service.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-8 pt-2">
                                            <p className="text-[var(--text-secondary)] mb-6">{service.description}</p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {service.details.map((detail, index) => (
                                                    <div key={index} className="flex items-start items-center">
                                                        <div className="mr-2 w-2 h-2 rounded-full bg-blue-500"></div>
                                                        <span className="text-[var(--text-secondary)]">{detail}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <Approach />
            </section>
        </main>
    )
}

export default ITConsulting;