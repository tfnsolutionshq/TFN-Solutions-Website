// import { useState } from 'react';
// import ServiceImage from '../../assets/Images/image 7.png';
// import ServiceImage2 from '../../assets/Images/image 6.png';
// import ServiceImage3 from '../../assets/Images/image 8.png';
// import ServiceImage4 from '../../assets/Images/image 9.png';
// import Approach from '../../Components/Homepage/Approach';

// function SoftwareDevelopment() {
//     const [activeFilter, setActiveFilter] = useState('all');


//     const projects = [
//         {
//             id: 1,
//             title: 'E-commerce Platform',
//             category: 'website',
//             image: '/api/placeholder/400/300'
//         },
//         {
//             id: 2,
//             title: 'CRM System',
//             category: 'systems',
//             image: '/api/placeholder/400/300'
//         },
//         {
//             id: 3,
//             title: 'Brand Identity',
//             category: 'branding',
//             image: '/api/placeholder/400/300'
//         },
//         {
//             id: 4,
//             title: 'Corporate Website',
//             category: 'website',
//             image: '/api/placeholder/400/300'
//         },
//     ];

//     const filteredProjects = activeFilter === 'all'
//         ? projects
//         : projects.filter(project => project.category === activeFilter);
//     return (
//         <>
//             <main className=''>
//                 <section className="pb-16 pt-36 px-4 bg-[var(--background-primary)]">
//                     <div className="max-w-5xl mx-auto">
//                         <div className="mb-8">
//                             <p className="text-orange-500 font-medium mb-2">Service</p>
//                             <h2 className="text-3xl md:text-6xl font-bold mb-4">Managed IT Services</h2>
//                             <p className="text-gray-900 w-full">
//                             Reliable, end-to-end IT operations — managed for performance, security, and scalability.
//                             </p>
//                         </div>
//                         <div className='flex mt-24 flex-col md:flex-row justify-between items-start gap-4'>
//                         <div className="flex items-center mb-6">
//                             <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
//                             <span className="text-sm font-medium">Core Service</span>
//                         </div>
//                         <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                             Our Service to <span className="text-gray-400">delivering<br />Excellence</span>
//                         </h2>
//                         </div>

//                         {/* Introduction Text */}
//                         <div className="mb-10">
//                             <p className="text-sm text-gray-800">
//                             We take the complexity out of IT management with proactive, round-the-clock services designed to keep your systems running efficiently, securely, and without interruption. Our Managed IT Services empower your business to scale with confidence, backed by expert oversight and a responsive support model.
//                             </p>
//                         </div>

//                         {/* Service Cards */}
//                         <div className="space-y-6">
//                             {/* Custom Software Development Card */}
//                             <div className="bg-[#85858512] p-4 rounded-xl items-center overflow-hidden shadow-sm flex flex-col md:flex-row">
//                                 {/* Image on the left */}
//                                 <div className="md:w-1/3 h-72 md:h-auto">
//                                     <img
//                                         src={ServiceImage}
//                                         alt="Software Developer"
//                                         className="w-full h-full rounded-xl object-cover"
//                                         style={{ objectPosition: 'center top' }}
//                                     />
//                                 </div>

//                                 {/* Text content on the right */}
//                                 <div className="md:w-2/3 py-4 md:py-0 md:p-4">
//                                     <h3 className="text-xl font-bold mb-1">Remote Monitoring & Management (RMM)</h3>
//                                     <p className="text-sm text-gray-700">
//                                     We provide 24/7 monitoring of your servers, networks, and workstations. This enables us to proactively identify and resolve issues before they escalate, minimizing downtime and maintaining optimal performance. Our RMM tools ensure systems are patched, secured, and performing as expected without interfering with your daily operations.
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* Web Development Card */}
//                             <div className="bg-[#85858512] rounded-xl p-4 items-center overflow-hidden shadow-sm flex flex-col md:flex-row">
//                                 {/* Text content on the left */}
//                                 <div className="md:w-2/3 py-4 md:py-0 md:p-4 order-2 md:order-1">
//                                     <h3 className="text-xl font-bold mb-3">Help Desk & Technical Support</h3>
//                                     <p className="text-sm text-gray-700">
//                                     Our skilled support team delivers fast, reliable technical assistance for end-users and business-critical systems. From password resets and connectivity issues to software glitches and complex IT errors, we provide multi-channel support through phone, email, chat, or on-site visits. We also offer service level agreements (SLAs) and reporting tools to ensure accountability and performance.                                    </p>
//                                 </div>

//                                 {/* Image on the right */}
//                                 <div className="md:w-1/3 h-72 md:h-auto order-1 md:order-2">
//                                     <img
//                                         src={ServiceImage2}
//                                         alt="Web Development Diagram"
//                                         className="w-full h-full rounded-xl object-cover"
//                                     />
//                                 </div>
//                             </div>
//                             <div className="bg-[#85858512] p-4 rounded-xl items-center overflow-hidden shadow-sm flex flex-col md:flex-row">
//                                 {/* Image on the left */}
//                                 <div className="md:w-1/3 h-72 md:h-auto">
//                                     <img
//                                         src={ServiceImage3}
//                                         alt="Software Developer"
//                                         className="w-full h-full rounded-xl object-cover"
//                                         style={{ objectPosition: 'center top' }}
//                                     />
//                                 </div>

//                                 {/* Text content on the right */}
//                                 <div className="md:w-2/3 py-4 md:py-0 md:p-4">
//                                     <h3 className="text-xl font-bold mb-1">Network Management</h3>
//                                     <p className="text-sm text-gray-700">
//                                     We design, implement, and manage robust network infrastructures. Our services include bandwidth monitoring, performance optimization, firewall configuration, VPN setup, load balancing, and intrusion prevention. We ensure your network is secure, scalable, and tailored to support your specific business needs.
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* Web Development Card */}
//                             <div className="bg-[#85858512] rounded-xl p-4 items-center overflow-hidden shadow-sm flex flex-col md:flex-row">
//                                 {/* Text content on the left */}
//                                 <div className="md:w-2/3 py-4 md:py-0 md:p-4 order-2 md:order-1">
//                                     <h3 className="text-xl font-bold mb-3">Patch Management</h3>
//                                     <p className="text-sm text-gray-700">
//                                     Keeping software updated is critical to maintaining security. We automate patch deployment across all systems and applications, ensuring compliance with security policies and minimizing exposure to vulnerabilities. Our service includes reporting tools, rollback capabilities, and policy enforcement.
//                                     </p>
//                                 </div>

//                                 {/* Image on the right */}
//                                 <div className="md:w-1/3 h-72 md:h-auto order-1 md:order-2">
//                                     <img
//                                         src={ServiceImage4}
//                                         alt="Web Development Diagram"
//                                         className="w-full h-full rounded-xl object-cover"
//                                     />
//                                 </div>
//                             </div>
//                             <div className="bg-[#85858512] p-4 rounded-xl items-center overflow-hidden shadow-sm flex flex-col md:flex-row">
//                                 {/* Image on the left */}
//                                 <div className="md:w-1/3 h-72 md:h-auto">
//                                     <img
//                                         src={ServiceImage}
//                                         alt="Software Developer"
//                                         className="w-full h-full rounded-xl object-cover"
//                                         style={{ objectPosition: 'center top' }}
//                                     />
//                                 </div>

//                                 {/* Text content on the right */}
//                                 <div className="md:w-2/3 py-4 md:py-0 md:p-4">
//                                     <h3 className="text-xl font-bold mb-1">IT Infrastructure Management</h3>
//                                     <p className="text-sm text-gray-700">
//                                     Comprehensive management of your physical and virtual IT infrastructure. We oversee performance, capacity planning, updates, system health, and lifecycle management. Whether your infrastructure is on-premises, cloud-based, or hybrid, we ensure maximum uptime and cost efficiency.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <Approach />
//                         <div className="mb-4 mt-16">
//                             <p className="text-orange-500 font-medium mb-2">Related</p>
//                             <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects Delivered on Software Development</h2>
//                         </div>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             {filteredProjects.map(project => (
//                                 <div key={project.id} className="group relative bg-white rounded-lg overflow-hidden shadow-sm">
//                                     <div className="aspect-w-16 p-2 rounded-lg aspect-h-10 w-full">
//                                         <img
//                                             src={project.image}
//                                             alt={project.title}
//                                             className="w-full rounded-lg h-64 bg-[#EAEAEA] object-cover"
//                                         />
//                                     </div>
//                                     <div className="px-3 py-2 flex justify-between items-center">
//                                         <div>
//                                             <p className="text-sm font-medium text-gray-500">{project.category}</p>
//                                             <p className="font-medium">{project.title}</p>
//                                         </div>
//                                         <button className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
//                                             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                 <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                             </svg>
//                                         </button>
//                                     </div>
//                                 </div>
                                
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//             </main>
//         </>
//     )
// }

// export default SoftwareDevelopment











import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Monitor, HeadsetIcon, Network, Download, Server } from 'lucide-react';
import Approach from '../../Components/Homepage/Approach';
import ServiceImage from '../../assets/Images/image 7.png';
import ServiceImage2 from '../../assets/Images/image 6.png';
import ServiceImage3 from '../../assets/Images/image 8.png';
import ServiceImage4 from '../../assets/Images/image 9.png';

const serviceIcons = {
    monitoring: <Monitor className="w-6 h-6" />,
    helpdesk: <HeadsetIcon className="w-6 h-6" />,
    network: <Network className="w-6 h-6" />,
    patch: <Download className="w-6 h-6" />,
    infrastructure: <Server className="w-6 h-6" />
};

function ManagedIT() {
    const [activeAccordion, setActiveAccordion] = useState(1);
    const [activeFilter, setActiveFilter] = useState('all');

    const services = [
        {
            id: 1,
            title: 'Remote Monitoring & Management (RMM)',
            description: 'We provide 24/7 monitoring of your servers, networks, and workstations. This enables us to proactively identify and resolve issues before they escalate, minimizing downtime and maintaining optimal performance. Our RMM tools ensure systems are patched, secured, and performing as expected without interfering with your daily operations.',
            details: [
                'Proactive 24/7 system monitoring',
                'Automated alerts and notifications',
                'Performance optimization',
                'Security monitoring and management'
            ],
            icon: 'monitoring'
        },
        {
            id: 2,
            title: 'Help Desk & Technical Support',
            description: 'Our skilled support team delivers fast, reliable technical assistance for end-users and business-critical systems. From password resets and connectivity issues to software glitches and complex IT errors, we provide multi-channel support through phone, email, chat, or on-site visits. We also offer service level agreements (SLAs) and reporting tools to ensure accountability and performance.',
            details: [
                'Multi-channel support (phone, email, chat)',
                'Defined SLAs with performance metrics',
                'Escalation procedures for complex issues',
                'End-user and system-level support'
            ],
            icon: 'helpdesk'
        },
        {
            id: 3,
            title: 'Network Management',
            description: 'We design, implement, and manage robust network infrastructures. Our services include bandwidth monitoring, performance optimization, firewall configuration, VPN setup, load balancing, and intrusion prevention. We ensure your network is secure, scalable, and tailored to support your specific business needs.',
            details: [
                'Network design and implementation',
                'Bandwidth monitoring and optimization',
                'Firewall and security management',
                'VPN and remote access solutions'
            ],
            icon: 'network'
        },
        {
            id: 4,
            title: 'Patch Management',
            description: 'Keeping software updated is critical to maintaining security. We automate patch deployment across all systems and applications, ensuring compliance with security policies and minimizing exposure to vulnerabilities. Our service includes reporting tools, rollback capabilities, and policy enforcement.',
            details: [
                'Automated patch deployment',
                'Compliance reporting and tracking',
                'Rollback capabilities',
                'Policy-based management'
            ],
            icon: 'patch'
        },
        {
            id: 5,
            title: 'IT Infrastructure Management',
            description: 'Comprehensive management of your physical and virtual IT infrastructure. We oversee performance, capacity planning, updates, system health, and lifecycle management. Whether your infrastructure is on-premises, cloud-based, or hybrid, we ensure maximum uptime and cost efficiency.',
            details: [
                'Server and storage management',
                'Capacity planning and optimization',
                'Lifecycle management',
                'Hybrid infrastructure support'
            ],
            icon: 'infrastructure'
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Managed IT Services</h2>
                    <p className="text-gray-900 w-full">
                        Reliable, end-to-end IT operations — managed for performance, security, and scalability.
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

export default ManagedIT;