import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, MessageSquare, Mail, Share2 } from 'lucide-react';
import Approach from '../../Components/Homepage/Approach';
import ServiceImage from '../../assets/Images/image 7.png';
import ServiceImage2 from '../../assets/Images/image 6.png';
import ServiceImage3 from '../../assets/Images/image 8.png';
import ServiceImage4 from '../../assets/Images/image 9.png';

const serviceIcons = {
    voip: <Phone className="w-6 h-6" />,
    ucaas: <MessageSquare className="w-6 h-6" />,
    workspace: <Mail className="w-6 h-6" />,
    collaboration: <Share2 className="w-6 h-6" />
};

function CommunicationCollaboration() {
    const [activeAccordion, setActiveAccordion] = useState(1);
    const [activeFilter, setActiveFilter] = useState('all');

    const services = [
        {
            id: 1,
            title: 'VoIP Setup & Support',
            description: 'Scalable, cost-effective VoIP phone systems for teams of all sizes.',
            details: [
                'Cloud-based phone system implementation',
                'Call routing and IVR configuration',
                'Mobile integration for remote teams',
                'Call analytics and reporting setup'
            ],
            icon: 'voip'
        },
        {
            id: 2,
            title: 'Unified Communications (UCaaS)',
            description: 'Consolidate calls, messages, and conferencing under a single cloud-based platform.',
            details: [
                'Integrated voice, video, and messaging',
                'Presence management and status updates',
                'Cross-platform accessibility',
                'Workflow automation integration'
            ],
            icon: 'ucaas'
        },
        {
            id: 3,
            title: 'Microsoft 365 / Google Workspace Management',
            description: 'Full administration and support for your productivity cloud suite.',
            details: [
                'User account management and security',
                'Email and calendar configuration',
                'Document sharing and collaboration setup',
                'Training and adoption support'
            ],
            icon: 'workspace'
        },
        {
            id: 4,
            title: 'Collaboration Tool Integration',
            description: 'Set up and integrate tools like Slack, Zoom, and Microsoft Teams into your workflows.',
            details: [
                'Cross-platform tool integration',
                'Custom workflow automation',
                'Single sign-on implementation',
                'Data synchronization between platforms'
            ],
            icon: 'collaboration'
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Communication & Collaboration Tools</h2>
                    <p className="text-[var(--text-secondary)] w-full">
                        Empower seamless communication and teamwork from anywhere.
                    </p>
                </div>

                {/* Introduction */}
                <div className="mb-10">
                    <p className="text-[var(--text-secondary)]">
                        We enable your team to stay connected, productive, and engaged with modern collaboration platforms.
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

export default CommunicationCollaboration;