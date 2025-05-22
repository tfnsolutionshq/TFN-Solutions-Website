import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HardDrive, FileCheck, Clock, Cloud } from 'lucide-react';
import Approach from '../../Components/Homepage/Approach';
import ServiceImage from '../../assets/Images/image 7.png';
import ServiceImage2 from '../../assets/Images/image 6.png';
import ServiceImage3 from '../../assets/Images/image 8.png';
import ServiceImage4 from '../../assets/Images/image 9.png';

const serviceIcons = {
    backup: <HardDrive className="w-6 h-6" />,
    recovery: <FileCheck className="w-6 h-6" />,
    continuity: <Clock className="w-6 h-6" />,
    cloud: <Cloud className="w-6 h-6" />
};

function Backup() {
    const [activeAccordion, setActiveAccordion] = useState(1);
    const [activeFilter, setActiveFilter] = useState('all');

    const services = [
        {
            id: 1,
            title: 'Automated Backups',
            description: 'Set-and-forget scheduled backups for data protection across cloud and local systems.',
            details: [
                'Scheduled automated backup processes',
                'Incremental and full backup options',
                'Data verification and validation',
                'Secure encryption of backup data'
            ],
            icon: 'backup'
        },
        {
            id: 2,
            title: 'Disaster Recovery Planning',
            description: 'Develop and test recovery plans to restore operations after data loss or system failure.',
            details: [
                'Recovery time objective (RTO) planning',
                'Recovery point objective (RPO) assessment',
                'Disaster recovery testing and simulation',
                'Documentation and procedure development'
            ],
            icon: 'recovery'
        },
        {
            id: 3,
            title: 'Business Continuity Solutions',
            description: 'Ensure critical business processes remain operational in the face of disruptions.',
            details: [
                'Business impact analysis',
                'Critical process identification',
                'Alternative operation procedures',
                'Staff training and preparedness'
            ],
            icon: 'continuity'
        },
        {
            id: 4,
            title: 'Cloud & On-prem Backup Solutions',
            description: 'Hybrid solutions combining local and cloud-based protection for optimal data security.',
            details: [
                'Hybrid backup architecture design',
                'Cloud storage integration',
                'On-premises backup infrastructure',
                'Cross-platform data protection'
            ],
            icon: 'cloud'
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
        <main className="bg-[var(--background-primary)]">
            <section className="pt-36 px-4 max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <p className="text-orange-500 font-medium mb-2">Service</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Backup & Disaster Recovery (BDR)</h2>
                    <p className="text-gray-900 w-full">
                        Ensure resilience with secure backup and rapid recovery solutions.
                    </p>
                </div>

                {/* Introduction */}
                <div className="mb-10">
                    <p className="text-gray-800">
                        We provide multi-layered protection to minimize data loss and keep your operations running during outages, disasters, or cyber incidents.
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

export default Backup;