import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Key, Users, BarChart3 } from 'lucide-react';
import Approach from '../../Components/Homepage/Approach';
import ServiceImage from '../../assets/Images/image 7.png';
import ServiceImage2 from '../../assets/Images/image 6.png';
import ServiceImage3 from '../../assets/Images/image 8.png';

const serviceIcons = {
    licensing: <Key className="w-6 h-6" />,
    vendor: <Users className="w-6 h-6" />,
    asset: <BarChart3 className="w-6 h-6" />
};

function HardwareSoftwareProcurement() {
    const [activeAccordion, setActiveAccordion] = useState(1);
    const [activeFilter, setActiveFilter] = useState('all');

    const services = [
        {
            id: 1,
            title: 'Licensing & Subscriptions Management',
            description: 'Maintain compliance, avoid overpayment, and streamline renewals.',
            details: [
                'Software license optimization and tracking',
                'Subscription renewal management',
                'Compliance auditing and reporting',
                'Cost optimization strategies'
            ],
            icon: 'licensing'
        },
        {
            id: 2,
            title: 'Vendor Management',
            description: 'Liaise with vendors to source high-quality products and services that fit your goals.',
            details: [
                'Vendor relationship coordination',
                'Contract negotiation and management',
                'Service level agreement monitoring',
                'Vendor performance evaluation'
            ],
            icon: 'vendor'
        },
        {
            id: 3,
            title: 'Asset Lifecycle Management',
            description: 'Track IT assets from acquisition to decommissioning to maximize return on investment.',
            details: [
                'Hardware and software inventory tracking',
                'Warranty and maintenance management',
                'Refresh cycle planning and budgeting',
                'Secure asset disposal and recycling'
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
        <main className="bg-[var(--background-primary)]">
            <section className="pt-36 px-4 max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <p className="text-orange-500 font-medium mb-2">Service</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Hardware & Software Procurement</h2>
                    <p className="text-[var(--text-secondary)] w-full">
                        Simplify your IT purchasing process with expert procurement services
                    </p>
                </div>

                {/* Introduction */}
                <div className="mb-10">
                    <p className="text-[var(--text-secondary)]">
                        We help you get the right technology — at the right time and price — with full lifecycle support.
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

export default HardwareSoftwareProcurement;