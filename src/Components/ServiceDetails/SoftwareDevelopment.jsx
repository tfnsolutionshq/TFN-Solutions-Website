import { useState } from 'react';
import ServiceImage from '../../assets/Images/image 7.png';
import ServiceImage2 from '../../assets/Images/image 6.png';
import ServiceImage3 from '../../assets/Images/image 8.png';
import ServiceImage4 from '../../assets/Images/image 9.png';
import Approach from '../../Components/Homepage/Approach';

function SoftwareDevelopment() {
    const [activeFilter, setActiveFilter] = useState('all');


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
    return (
        <>
            <main className=''>
                <section className="pb-16 pt-36 px-4 bg-[#F7F7F7]">
                    <div className="max-w-5xl mx-auto">
                        <div className="md:mb-12 mb-6">
                            <div className='flex items-center'>
                                <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
                                <p className="text-orange-500 font-medium">Service</p>
                            </div>

                            <h2 className="text-3xl md:text-6xl font-bold mb-4">Software Development & Integration</h2>
                            <p className="text-gray-900 w-full">
                                Custom software solutions tailored to business challenges.
                            </p>
                        </div>
                        {/* <div className='flex mt-24 flex-col md:flex-row justify-between items-start gap-4'>
                            <div className="flex items-center mb-6">
                                <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
                                <span className="text-sm font-medium">Core Service</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Our Service to <span className="text-gray-400">delivering<br />Excellence</span>
                            </h2>
                        </div> */}

                        {/* Introduction Text */}
                        <div className="mb-6">
                            <p className="text-base text-gray-800">
                                We build powerful, scalable, and user-centric applications that simplify processes, enhance performance, and increase productivity.
                            </p>
                        </div>

                        {/* Service Cards */}
                        <div className="space-y-6">
                            {/* Custom Software Development Card */}
                            <section className="bg-[#85858512] rounded-xl">
                                <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-stretch">
                                    {/* Image Container - Absolutely Filled */}
                                    <div className=" w-full">
                                        <img
                                            src={ServiceImage}
                                            alt="Business Consulting Meeting"
                                            className="w-full h-full object-cover object-center rounded-t-xl md:rounded-t-0 md:rounded-l-xl"
                                        />
                                    </div>

                                    {/* Text Content Container */}
                                    <div className="flex flex-col justify-center space-y-4 md:py-6 px-4 md:pb-0 pb-6">
                                        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                                        Custom Software Development
                                        </h2>

                                        <p className="text-sm md:text-base text-gray-900 ">
                                        Full-cycle development of bespoke software solutions using agile methods. We specialize in business process automation, customer portals, data management tools, and specialized enterprise platforms.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Web Development Card */}
                            <div className="bg-[#85858512] rounded-xl p-4 items-center overflow-hidden shadow-sm flex flex-col md:flex-row">
                                {/* Text content on the left */}
                                <div className="md:w-2/3 py-4 md:py-0 md:p-4 order-2 md:order-1">
                                    <h3 className="text-xl font-bold mb-3">API Development & Integration</h3>
                                    <p className="text-sm text-gray-700">
                                        Create secure, high-performance APIs to connect disparate systems and enable seamless data exchange. We integrate third-party services and internal systems for cohesive application ecosystems.
                                    </p>
                                </div>

                                {/* Image on the right */}
                                <div className="md:w-1/3 h-72 md:h-auto order-1 md:order-2">
                                    <img
                                        src={ServiceImage2}
                                        alt="Web Development Diagram"
                                        className="w-full h-full rounded-xl object-cover"
                                    />
                                </div>
                            </div>
                            <div className="bg-[#85858512] p-4 rounded-xl items-center overflow-hidden shadow-sm flex flex-col md:flex-row">
                                {/* Image on the left */}
                                <div className="md:w-1/3 h-72 md:h-auto">
                                    <img
                                        src={ServiceImage3}
                                        alt="Software Developer"
                                        className="w-full h-full rounded-xl object-cover"
                                        style={{ objectPosition: 'center top' }}
                                    />
                                </div>

                                {/* Text content on the right */}
                                <div className="md:w-2/3 py-4 md:py-0 md:p-4">
                                    <h3 className="text-xl font-bold mb-1">Mobile & Web App Development</h3>
                                    <p className="text-sm text-gray-700">
                                        We design and develop intuitive apps optimized for Android, iOS, and the web. From MVPs to full-scale platforms, our apps are responsive, secure, and user-friendly.
                                    </p>
                                </div>
                            </div>

                            {/* Web Development Card */}
                            <div className="bg-[#85858512] rounded-xl p-4 items-center overflow-hidden shadow-sm flex flex-col md:flex-row">
                                {/* Text content on the left */}
                                <div className="md:w-2/3 py-4 md:py-0 md:p-4 order-2 md:order-1">
                                    <h3 className="text-xl font-bold mb-3">CRM & ERP Integration (Salesforce, SAP, etc.)</h3>
                                    <p className="text-sm text-gray-700">
                                        Connect and customize enterprise platforms to fit your business processes. We offer end-to-end integration, configuration, data migration, and user training for Salesforce, SAP, Microsoft Dynamics, and others.
                                    </p>
                                </div>

                                {/* Image on the right */}
                                <div className="md:w-1/3 h-72 md:h-auto order-1 md:order-2">
                                    <img
                                        src={ServiceImage4}
                                        alt="Web Development Diagram"
                                        className="w-full h-full rounded-xl object-cover"
                                    />
                                </div>
                            </div>
                            <div className="bg-[#85858512] p-4 rounded-xl items-center overflow-hidden shadow-sm flex flex-col md:flex-row">
                                {/* Image on the left */}
                                <div className="md:w-1/3 h-72 md:h-auto">
                                    <img
                                        src={ServiceImage}
                                        alt="Software Developer"
                                        className="w-full h-full rounded-xl object-cover"
                                        style={{ objectPosition: 'center top' }}
                                    />
                                </div>

                                {/* Text content on the right */}
                                <div className="md:w-2/3 py-4 md:py-0 md:p-4">
                                    <h3 className="text-xl font-bold mb-1">DevOps Services</h3>
                                    <p className="text-sm text-gray-700">
                                        Accelerate software delivery through CI/CD pipelines, containerization, automated testing, and continuous monitoring. Our DevOps practices foster agility, quality, and faster time-to-market.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Approach />
                        <div className="mb-4 mt-16">
                            <p className="text-orange-500 font-medium mb-2">Related</p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects Delivered on Software Development</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredProjects.map(project => (
                                <div key={project.id} className="group relative bg-white rounded-lg overflow-hidden shadow-sm">
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
                                        <button className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default SoftwareDevelopment