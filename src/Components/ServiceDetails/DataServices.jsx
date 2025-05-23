import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BarChart, Database, Warehouse, MoveRight, Shield } from 'lucide-react';
import Approach from '../../Components/Homepage/Approach';
import ServiceImage from '../../assets/Images/image 7.png';
import ServiceImage2 from '../../assets/Images/image 6.png';
import ServiceImage3 from '../../assets/Images/image 8.png';
import ServiceImage4 from '../../assets/Images/image 9.png';

const serviceIcons = {
    analytics: <BarChart className="w-6 h-6" />,
    bigdata: <Database className="w-6 h-6" />,
    warehouse: <Warehouse className="w-6 h-6" />,
    migration: <MoveRight className="w-6 h-6" />,
    governance: <Shield className="w-6 h-6" />
};

function DataServices() {
    const [activeAccordion, setActiveAccordion] = useState(1);
    const [activeFilter, setActiveFilter] = useState('all');

    const services = [
        {
            id: 1,
            title: 'Data Analytics & Business Intelligence (BI)',
            description: 'Build data pipelines and dashboards that deliver actionable insights. We integrate multiple data sources to power reports, forecasts, and real-time analytics.',
            details: [
                'Custom dashboard development',
                'Data pipeline engineering',
                'Predictive analytics models',
                'Real-time reporting solutions'
            ],
            icon: 'analytics'
        },
        {
            id: 2,
            title: 'Big Data Solutions',
            description: 'Design and deploy big data architectures using technologies like Hadoop, Spark, and NoSQL databases. We manage ingestion, processing, storage, and analytics at scale.',
            details: [
                'Hadoop and Spark implementations',
                'NoSQL database architecture',
                'Data lake design and management',
                'Scalable processing frameworks'
            ],
            icon: 'bigdata'
        },
        {
            id: 3,
            title: 'Data Warehousing',
            description: 'Implement centralized data warehouses that consolidate business information and support reporting. We design schemas, optimize queries, and ensure scalability and data consistency.',
            details: [
                'Data warehouse architecture',
                'Schema design and optimization',
                'ETL/ELT process development',
                'Query performance tuning'
            ],
            icon: 'warehouse'
        },
        {
            id: 4,
            title: 'Data Migration',
            description: 'Safely transfer large volumes of data between environments with zero data loss and minimal downtime. We manage source validation, transformation, cleansing, and testing.',
            details: [
                'Migration planning and strategy',
                'Data validation and cleansing',
                'Transformation mapping',
                'Cutover management and testing'
            ],
            icon: 'migration'
        },
        {
            id: 5,
            title: 'Data Governance & Quality',
            description: 'Establish policies, controls, and tools to ensure your data is accurate, secure, and compliant. Our solutions cover metadata management, data lineage, and quality auditing.',
            details: [
                'Data governance frameworks',
                'Metadata management',
                'Data quality monitoring',
                'Compliance and security controls'
            ],
            icon: 'governance'
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Data Services</h2>
                    <p className="text-[var(--text-secondary)] w-full">
                        Turn data into insight and competitive advantage.
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

export default DataServices;