import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, Cpu, Smartphone, Server, GitMerge } from 'lucide-react';
import Approach from '../../Components/Homepage/Approach';
import Afriwok from '../../assets/works/afriwokbanner.jpg';
import Crystalbricks from '../../assets/works/crystalbanner.png';
import UnizikAlumni from '../../assets/works/Alumni_Banner.png';
import { Link } from 'react-router-dom';

const serviceIcons = {
    development: <Code className="w-6 h-6" />,
    api: <Cpu className="w-6 h-6" />,
    mobile: <Smartphone className="w-6 h-6" />,
    crm: <Server className="w-6 h-6" />,
    devops: <GitMerge className="w-6 h-6" />
};

function SoftwareDevelopment() {
    const [activeAccordion, setActiveAccordion] = useState(1);
    const [activeFilter, setActiveFilter] = useState('all');

    const services = [
        {
            id: 1,
            title: 'Custom Software Development',
            description: 'Full-cycle development of bespoke software solutions using agile methods. We specialize in business process automation, customer portals, data management tools, and specialized enterprise platforms.',
            details: [
                'End-to-end custom application development',
                'Business process automation',
                'Legacy system modernization',
                'Cloud-native solutions'
            ],
            icon: 'development'
        },
        {
            id: 2,
            title: 'API Development & Integration',
            description: 'Create secure, high-performance APIs to connect disparate systems and enable seamless data exchange.',
            details: [
                'RESTful API design & development',
                'Microservices architecture',
                'Third-party service integration',
                'Real-time data synchronization'
            ],
            icon: 'api'
        },
        {
            id: 3,
            title: 'Mobile & Web App Development',
            description: 'We design and develop intuitive apps optimized for Android, iOS, and the web.',
            details: [
                'Cross-platform mobile development',
                'Progressive Web Apps',
                'User-centered design',
                'Performance optimization'
            ],
            icon: 'mobile'
        },
        {
            id: 4,
            title: 'CRM & ERP Integration',
            description: 'Connect and customize enterprise platforms to fit your business processes.',
            details: [
                'Salesforce customization',
                'SAP integration',
                'Microsoft Dynamics implementation',
                'Data migration services'
            ],
            icon: 'crm'
        },
        {
            id: 5,
            title: 'DevOps Services',
            description: 'Accelerate software delivery through CI/CD pipelines and automated workflows.',
            details: [
                'CI/CD pipeline implementation',
                'Containerization & orchestration',
                'Infrastructure as Code',
                'Monitoring & logging'
            ],
            icon: 'devops'
        }
    ];

    const projects = [
        {
            id: 1,
            title: 'Afriwok',
            category: 'Software',
            image: Afriwok,
            slug: 'afriwok',
        },
        {
            id: 2,
            title: 'Crystalbricks',
            category: 'Software',
            image: Crystalbricks,
            slug: 'crystalbricks'
        },
        {
            id: 3,
            title: 'Unizik ALumni',
            category: 'Software',
            image: UnizikAlumni,
            slug: 'unizik-alumni'
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Software Development</h2>
                    <p className="text-[var(--text-secondary)] w-full">
                        Reliable, end-to-end IT operations — managed for performance, security, and scalability.
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

                <div className="mb-4 mt-10">
                    <p className="text-orange-500 font-medium mb-2">Related</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects Delivered on Software Development</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mb-20 gap-6">
                    {filteredProjects.map(project => (
                        <Link 
                            to={`/works/${project.slug}`}
                            key={project.id} 
                            className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="aspect-w-16 p-2 rounded-lg aspect-h-10 w-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full rounded-lg h-64 bg-[#EAEAEA] object-cover"
                                />
                            </div>
                            <div className="px-3 py-2 flex justify-between items-center">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">{project.category}</p>
                                    <p className="font-medium">{project.title}</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default SoftwareDevelopment;