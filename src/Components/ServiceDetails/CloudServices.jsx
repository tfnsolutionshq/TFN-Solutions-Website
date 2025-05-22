import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CloudUpload, Server, Database, AppWindow, Monitor } from 'lucide-react';
import Approach from '../../Components/Homepage/Approach';
import ServiceImage from '../../assets/Images/image 7.png';
import ServiceImage2 from '../../assets/Images/image 6.png';
import ServiceImage3 from '../../assets/Images/image 8.png';
import ServiceImage4 from '../../assets/Images/image 9.png';

const serviceIcons = {
    migration: <CloudUpload className="w-6 h-6" />,
    hosting: <Server className="w-6 h-6" />,
    storage: <Database className="w-6 h-6" />,
    saas: <AppWindow className="w-6 h-6" />,
    vdi: <Monitor className="w-6 h-6" />
};

function CloudServices() {
    const [activeAccordion, setActiveAccordion] = useState(1);
    const [activeFilter, setActiveFilter] = useState('all');

    const services = [
        {
            id: 1,
            title: 'Cloud Migration & Integration',
            description: 'We simplify the transition to the cloud by assessing your current infrastructure, identifying suitable cloud platforms, and executing a seamless migration. Our integration services ensure that your cloud and on-premises systems work cohesively, minimizing disruptions and data loss. We manage the full migration lifecycle including backups, synchronization, and testing.',
            details: [
                'Infrastructure assessment and planning',
                'Workload migration strategy',
                'Data transfer and synchronization',
                'Hybrid cloud integration'
            ],
            icon: 'migration'
        },
        {
            id: 2,
            title: 'Cloud Hosting (AWS, Azure, Google Cloud)',
            description: 'We host your applications and services on reliable, high-performance platforms like AWS, Microsoft Azure, and Google Cloud. Our managed hosting solutions are designed to provide optimal availability, flexibility, and cost efficiency. We help configure virtual machines, storage, databases, and networking tailored to your business needs.',
            details: [
                'Multi-cloud platform management',
                'Infrastructure as a Service (IaaS)',
                'Performance optimization',
                'Cost management and scaling'
            ],
            icon: 'hosting'
        },
        {
            id: 3,
            title: 'Cloud Storage & Backup',
            description: 'We offer secure cloud storage solutions with automatic backup features to ensure your data is always protected and easily retrievable. This includes file versioning, encryption, geographic redundancy, scheduled backup jobs, and disaster recovery integration to meet compliance and performance goals.',
            details: [
                'Secure data encryption and storage',
                'Automated backup scheduling',
                'Geographic redundancy',
                'Disaster recovery integration'
            ],
            icon: 'storage'
        },
        {
            id: 4,
            title: 'SaaS Management',
            description: 'Streamline operations and optimize licensing with centralized management of your Software-as-a-Service tools. We handle procurement, onboarding, access control, compliance, usage monitoring, and vendor relationship management for all major SaaS platforms.',
            details: [
                'License optimization and management',
                'User provisioning and access control',
                'SaaS spend monitoring',
                'Vendor relationship management'
            ],
            icon: 'saas'
        },
        {
            id: 5,
            title: 'Virtual Desktop Infrastructure (VDI)',
            description: 'Deploy virtual desktops that provide users with consistent, secure access to their work environments from any device, anywhere. Our VDI solutions support remote workforces, increase security, and reduce hardware dependencies. We provide desktop pooling, profile management, session monitoring, and backup solutions for high availability.',
            details: [
                'Remote workforce enablement',
                'Desktop pooling and management',
                'User profile management',
                'Session monitoring and security'
            ],
            icon: 'vdi'
        }
    ];

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    return (
        <main className="bg-[var(--background-primary)]">
            <section className="pt-36 px-4 max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <p className="text-orange-500 font-medium mb-2">Service</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Cloud Services</h2>
                    <p className="text-gray-900 w-full">
                        Flexible, scalable cloud solutions to modernize your business infrastructure.
                    </p>
                </div>

                {/* Introduction */}
                <div className="mb-10">
                    <p className="text-gray-800">
                        Our cloud services provide the agility and power needed to operate in today's digital economy. Whether you are migrating legacy systems, adopting cloud-first strategies, or enhancing business continuity, we tailor secure and scalable cloud solutions to fit your objectives.
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

export default CloudServices;