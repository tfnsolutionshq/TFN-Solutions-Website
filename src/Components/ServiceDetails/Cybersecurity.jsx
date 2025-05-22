import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, Lock, FileSearch, Eye, Terminal, ClipboardCheck } from 'lucide-react';
import Approach from '../../Components/Homepage/Approach';
import ServiceImage from '../../assets/Images/image 7.png';
import ServiceImage2 from '../../assets/Images/image 6.png';
import ServiceImage3 from '../../assets/Images/image 8.png';
import ServiceImage4 from '../../assets/Images/image 9.png';

const serviceIcons = {
    threat: <Shield className="w-6 h-6" />,
    firewall: <Lock className="w-6 h-6" />,
    audit: <FileSearch className="w-6 h-6" />,
    soc: <Eye className="w-6 h-6" />,
    pentest: <Terminal className="w-6 h-6" />,
    compliance: <ClipboardCheck className="w-6 h-6" />
};

function Cybersecurity() {
    const [activeAccordion, setActiveAccordion] = useState(1);
    const [activeFilter, setActiveFilter] = useState('all');

    const services = [
        {
            id: 1,
            title: 'Threat Detection & Response (MDR/XDR)',
            description: 'With Managed and Extended Detection and Response, we leverage AI and machine learning to monitor your environment for anomalies, breaches, or malicious behavior. Our response team acts swiftly to neutralize threats before they cause damage. We correlate data from multiple sources, including endpoint, network, and cloud telemetry, to enhance threat visibility.',
            details: [
                'Real-time threat monitoring',
                'AI-powered anomaly detection',
                'Rapid incident response',
                'Cross-platform threat correlation'
            ],
            icon: 'threat'
        },
        {
            id: 2,
            title: 'Firewall & Antivirus Management',
            description: 'We deploy and manage enterprise-grade firewalls and antivirus software to ensure constant perimeter defense and endpoint protection. Regular updates, policy enforcement, and performance monitoring are included. Our services include threat intelligence integration, rule auditing, and device health management.',
            details: [
                'Next-generation firewall deployment',
                'Endpoint protection management',
                'Policy configuration and enforcement',
                'Threat intelligence integration'
            ],
            icon: 'firewall'
        },
        {
            id: 3,
            title: 'Security Audits & Risk Assessments',
            description: 'Identify vulnerabilities and assess your current security posture with comprehensive audits. We evaluate policies, technologies, and practices against industry benchmarks to deliver actionable insights. Our risk assessments include internal/external scans, phishing simulations, and remediation planning.',
            details: [
                'Vulnerability scanning and assessment',
                'Security policy evaluation',
                'Phishing simulation campaigns',
                'Remediation planning and prioritization'
            ],
            icon: 'audit'
        },
        {
            id: 4,
            title: 'Security Operations Center (SOC) as a Service',
            description: 'Our cloud-based SOC provides 24/7 monitoring, incident detection, and response coordination. We deliver real-time threat intelligence, log analysis, forensic support, compliance reporting, and automated alerts without the overhead of managing your own facility.',
            details: [
                '24/7 security monitoring',
                'Incident response coordination',
                'Threat intelligence integration',
                'Security log analysis and forensics'
            ],
            icon: 'soc'
        },
        {
            id: 5,
            title: 'Penetration Testing',
            description: 'Simulated cyberattacks are used to test your systems\' resilience and uncover exploitable weaknesses. Our certified ethical hackers deliver detailed reports and remediation strategies to harden your defenses. We cover network, application, wireless, and social engineering vectors.',
            details: [
                'Network penetration testing',
                'Web application security testing',
                'Social engineering simulations',
                'Detailed remediation guidance'
            ],
            icon: 'pentest'
        },
        {
            id: 6,
            title: 'Compliance Services (HIPAA, SOC 2, etc.)',
            description: 'Navigate complex regulatory environments with confidence. We help you align with standards such as HIPAA, GDPR, SOC 2, and ISO 27001 through tailored security controls, documentation, gap assessments, and ongoing audit support.',
            details: [
                'Regulatory compliance assessment',
                'Security control implementation',
                'Documentation and policy development',
                'Audit preparation and support'
            ],
            icon: 'compliance'
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Cybersecurity</h2>
                    <p className="text-gray-900 w-full">
                        Protect your digital assets with proactive, layered security solutions.
                    </p>
                </div>

                {/* Introduction */}
                <div className="mb-10">
                    <p className="text-gray-800">
                        We deliver end-to-end cybersecurity services that defend against evolving threats and strengthen your organization's resilience. Our multi-layered approach covers prevention, detection, and rapid incident response, supported by compliance-aligned strategies.
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

export default Cybersecurity;