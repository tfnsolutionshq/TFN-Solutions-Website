import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Server, Network, HardDrive, Layers, MoveIcon as TruckMoving } from 'lucide-react';
import Approach from '../../Components/Homepage/Approach';

const serviceIcons = {
    server: <Server className="w-6 h-6" />,
    network: <Network className="w-6 h-6" />,
    storage: <HardDrive className="w-6 h-6" />,
    virtualization: <Layers className="w-6 h-6" />,
    relocation: <TruckMoving className="w-6 h-6" />
};

function InfrastructureServices() {
    const [activeAccordion, setActiveAccordion] = useState(1);
    const [activeFilter, setActiveFilter] = useState('all');

    const services = [
        {
            id: 1,
            title: 'Server Management',
            description: 'We expertly provision, configure, and maintain physical and virtual servers to ensure optimal performance, maximum uptime, and uncompromised security',
            details: [
                'Server deployment and configuration',
                'Performance monitoring and optimization',
                'Security patching and updates',
                'Backup and disaster recovery planning'
            ],
            icon: 'server'
        },
        {
            id: 2,
            title: 'Network Design & Implementation',
            description: 'End-to-end wired and wireless infrastructure design, tailored to your scale, industry, and goals.',
            details: [
                'Network architecture planning',
                'Wireless access point deployment',
                'Router and switch configuration',
                'Network security implementation'
            ],
            icon: 'network'
        },
        {
            id: 3,
            title: 'Storage Solutions',
            description: 'Deploy scalable and secure SAN, NAS, or cloud storage systems for enterprise-grade file and backup management.',
            details: [
                'Storage needs assessment',
                'SAN/NAS implementation',
                'Cloud storage integration',
                'Data migration and management'
            ],
            icon: 'storage'
        },
        {
            id: 4,
            title: 'Virtualization (VMware, Hyper-V)',
            description: 'Increase agility and reduce hardware costs with robust virtual machine and container orchestration.',
            details: [
                'Hypervisor deployment and configuration',
                'Virtual machine management',
                'Resource allocation optimization',
                'High availability setup'
            ],
            icon: 'virtualization'
        },
        {
            id: 5,
            title: 'IT Relocation Services',
            description: 'End-to-end management of server room or office IT relocation with minimal business disruption.',
            details: [
                'Relocation planning and risk assessment',
                'Equipment decommissioning and transport',
                'Infrastructure setup at new location',
                'System testing and verification'
            ],
            icon: 'relocation'
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Infrastructure Services (Onsite/Remote)</h2>
                    <p className="text-[var(--text-secondary)] w-full">
                        Robust, scalable, and secure infrastructure to support your business operations.
                    </p>
                </div>

                {/* Introduction */}
                <div className="mb-10">
                    <p className="text-[var(--text-secondary)]">
                        Whether on-premises, remote, or hybrid, we design, deploy, and manage IT infrastructure that meets today's demands and prepares you for tomorrow.
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

export default InfrastructureServices;