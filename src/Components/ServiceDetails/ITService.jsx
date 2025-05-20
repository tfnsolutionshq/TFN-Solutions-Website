import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Headphones, Smartphone, Download, Database } from 'lucide-react';
import Approach from '../../Components/Homepage/Approach';
import ServiceImage from '../../assets/Images/image 7.png';
import ServiceImage2 from '../../assets/Images/image 6.png';
import ServiceImage3 from '../../assets/Images/image 8.png';
import ServiceImage4 from '../../assets/Images/image 9.png';

const serviceIcons = {
    onsite: <Headphones className="w-6 h-6" />,
    device: <Smartphone className="w-6 h-6" />,
    software: <Download className="w-6 h-6" />,
    asset: <Database className="w-6 h-6" />
};

function ITSupportHelpdesk() {
    const [activeAccordion, setActiveAccordion] = useState(1);
    const [activeFilter, setActiveFilter] = useState('all');

    const services = [
        {
            id: 1,
            title: 'Onsite & Remote Support',
            description: 'Access qualified IT experts when needed — at your premises or remotely.',
            details: [
                'Scheduled onsite technical visits',
                '24/7 remote helpdesk availability',
                'Rapid response for critical issues',
                'Proactive system monitoring'
            ],
            icon: 'onsite'
        },
        {
            id: 2,
            title: 'End-user Device Support',
            description: 'From desktops to mobile, we troubleshoot and optimize device performance for every user.',
            details: [
                'Hardware diagnostics and repair',
                'Operating system optimization',
                'Mobile device management',
                'Peripheral setup and configuration'
            ],
            icon: 'device'
        },
        {
            id: 3,
            title: 'Software Installation & Troubleshooting',
            description: 'Reliable configuration, updates, and maintenance of business-critical applications.',
            details: [
                'Application deployment and updates',
                'Software conflict resolution',
                'Performance optimization',
                'License management and compliance'
            ],
            icon: 'software'
        },
        {
            id: 4,
            title: 'IT Asset Management',
            description: 'Track, manage, and optimize your hardware and software inventory from purchase to retirement.',
            details: [
                'Comprehensive IT inventory tracking',
                'Lifecycle management and planning',
                'Warranty and maintenance tracking',
                'Asset performance reporting'
            ],
            icon: 'asset'
        }
    ];

    const projects = [
        {
            id: 1,
            title: 'E-commerce Platform',
            category: 'website',
            image: '/api/placeholder/400/300'
        },
        {
            id: 2,
            title: 'CRM System',
            category: 'systems',
            image: '/api/placeholder/400/300'
        },
        {
            id: 3,
            title: 'Brand Identity',
            category: 'branding',
            image: '/api/placeholder/400/300'
        },
        {
            id: 4,
            title: 'Corporate Website',
            category: 'website',
            image: '/api/placeholder/400/300'
        },
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    return (
        <main className="bg-[#F7F7F7]">
            <section className="pt-36 px-4 max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <p className="text-orange-500 font-medium mb-2">Service</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">IT Support & Helpdesk</h2>
                    <p className="text-gray-900 w-full">
                        Fast, friendly, and expert IT support whenever you need it.
                    </p>
                </div>

                {/* Core Service Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                    <div className="flex items-center mb-6">
                        <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
                        <span className="text-sm font-medium">Core Service</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Our Service to <span className="text-gray-400">delivering<br />Excellence</span>
                    </h2>
                </div>

                {/* Introduction */}
                <div className="mb-10">
                    <p className="text-gray-800">
                        Ensure business continuity with responsive support for users, devices, and systems — onsite or remote.
                    </p>
                </div>

                {/* Accordion Services */}
                <div className="mb-24 space-y-4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                        >
                            <button
                                onClick={() => toggleAccordion(service.id)}
                                className={`w-full p-6 text-left flex justify-between items-center transition-colors ${activeAccordion === service.id ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
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
                                    <ChevronDown className="w-5 h-5 text-gray-500" />
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
                                            <p className="text-gray-600 mb-6">{service.description}</p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {service.details.map((detail, index) => (
                                                    <div key={index} className="flex items-start">
                                                        <div className="mt-1 mr-3 w-2 h-2 rounded-full bg-blue-500"></div>
                                                        <span className="text-gray-700">{detail}</span>
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

export default ITSupportHelpdesk;