// import Infrastructure1 from '../../assets/Images/Infrastructure.png'
// import Infrastructure2 from '../../assets/Images/Infrastructure2.png'
// import Infrastructure3 from '../../assets/Images/Infrastructure3.png'

// const Infrastructure = () => {
//   return (
//     <div className="max-w-5xl mx-auto px-4 pt-40 pb-8">
//       <div className="mb-10">
//         <div className="flex items-center mb-4">
//           <div className="h-3 w-3 rounded-full bg-orange-500 mr-3"></div>
//           <span className="text-sm font-medium uppercase tracking-wider">Project</span>
//         </div>
//         <h1 className="text-4xl md:text-5xl font-bold mb-8">Infrastructure Service (Onsite)</h1>
//       </div>

//       <section className="mb-8">
//         <img src={Infrastructure1} alt="Main Infrastructure" className="w-full h-auto rounded-lg mb-4" />
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <img src={Infrastructure2} alt="Infrastructure Detail 1" className="w-full h-auto rounded-lg" />
//           <img src={Infrastructure3} alt="Infrastructure Detail 2" className="w-full h-auto rounded-lg" />
//         </div>
//       </section>

//       <section className="mb-16">
//         <h2 className="text-2xl font-bold mb-6">What we did</h2>
//         <ul className="space-y-4">
//           <li className="flex items-start">
//             <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4 text-orange-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//             </div>
//             <span className="text-gray-600">Design & Deploy: Provision, configure, and maintain physical and virtual servers for optimal performance, uptime, and security.</span>
//           </li>
//           <li className="flex items-start">
//             <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4 text-orange-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//             </div>
//             <span className="text-gray-600">Network Design & Implementation: End-to-end wired and wireless infrastructure design, tailored to your scale, industry, and goals.</span>
//           </li>
//           <li className="flex items-start">
//             <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4 text-orange-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//             </div>
//             <span className="text-gray-600">Storage Solutions: Deploy scalable and secure SAN, NAS, or cloud storage systems for enterprise-grade file and backup management.</span>
//           </li>
//           <li className="flex items-start">
//             <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4 text-orange-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//             </div>
//             <span className="text-gray-600">Virtualization (VMware, Hyper-V): Increase agility and reduce hardware costs with robust virtual machine and container orchestration.</span>
//           </li>
//           <li className="flex items-start">
//             <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4 text-orange-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//             </div>
//             <span className="text-gray-600">IT Relocation Services: End-to-end management of server room or office IT relocation with minimal business disruption.</span>
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Infrastructure;











"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowUpRight, ChevronRight, Server, Network, Database, Shield, Zap } from "lucide-react"
import Infrastructure1 from "../../assets/Images/Infrastructure.png"
import Infrastructure2 from "../../assets/Images/Infrastructure2.png"
import Infrastructure3 from "../../assets/Images/Infrastructure3.png"

const Infrastructure = () => {
  // Animation state
  const [isVisible, setIsVisible] = useState(false)

  // Set visibility after component mounts for animations
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Service data
  const serviceData = {
    title: "Infrastructure Service (Onsite)",
    subtitle: "Enterprise-grade infrastructure solutions tailored to your business needs",
    description:
      "We provide comprehensive on-site infrastructure services including server deployment, network design, storage solutions, and virtualization to ensure your business operates at peak performance.",
    services: [
      {
        icon: <Server className="w-6 h-6" />,
        title: "Server Design & Deployment",
        description:
          "Provision, configure, and maintain physical and virtual servers for optimal performance, uptime, and security.",
      },
      {
        icon: <Network className="w-6 h-6" />,
        title: "Network Design & Implementation",
        description:
          "End-to-end wired and wireless infrastructure design, tailored to your scale, industry, and goals.",
      },
      {
        icon: <Database className="w-6 h-6" />,
        title: "Storage Solutions",
        description:
          "Deploy scalable and secure SAN, NAS, or cloud storage systems for enterprise-grade file and backup management.",
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Virtualization Services",
        description:
          "Increase agility and reduce hardware costs with robust virtual machine and container orchestration using VMware and Hyper-V.",
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "IT Relocation Services",
        description: "End-to-end management of server room or office IT relocation with minimal business disruption.",
      },
    ],
    achievements: [
      "Design & Deploy: Provision, configure, and maintain physical and virtual servers for optimal performance, uptime, and security.",
      "Network Design & Implementation: End-to-end wired and wireless infrastructure design, tailored to your scale, industry, and goals.",
      "Storage Solutions: Deploy scalable and secure SAN, NAS, or cloud storage systems for enterprise-grade file and backup management.",
      "Virtualization (VMware, Hyper-V): Increase agility and reduce hardware costs with robust virtual machine and container orchestration.",
      "IT Relocation Services: End-to-end management of server room or office IT relocation with minimal business disruption.",
    ],
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <Link
          to="/works"
          className="inline-flex items-center text-sm text-gray-500 hover:text-orange-500 transition-colors"
        >
          <ChevronRight className="mr-1 h-4 w-4 rotate-180" />
          <span>Back to Projects</span>
        </Link>
      </motion.div>

      {/* Service Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10"
      >
        <div className="flex items-center mb-4">
          <div className="h-1 w-12 bg-orange-500 mr-3"></div>
          <span className="text-sm font-medium uppercase tracking-wider text-orange-500">Infrastructure Services</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{serviceData.title}</h1>
        <p className="text-lg text-gray-600 max-w-3xl">{serviceData.subtitle}</p>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-20"
      >
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={Infrastructure1 || "/placeholder.svg"}
            alt="Main Infrastructure"
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          {/* Floating CTA on hero image */}
          <div className="absolute bottom-8 right-8">
            <Link
              to="/contactus"
              className="inline-flex items-center bg-white px-6 py-3 rounded-full text-orange-500 font-medium hover:bg-orange-50 transition-colors group shadow-lg"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Service Overview & Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
        {/* Service Info - Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-1"
        >
          <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-200">Service Details</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Service Type</h3>
              <p className="font-medium">On-site Infrastructure</p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Specialization</h3>
              <p className="font-medium">Enterprise Solutions</p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Industries</h3>
              <p className="font-medium">Healthcare, Finance, Education, Manufacturing</p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Support</h3>
              <p className="font-medium">24/7 Monitoring & Maintenance</p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Contact</h3>
              <Link
                to="/contactus"
                className="font-medium text-orange-500 hover:text-orange-600 transition-colors inline-flex items-center"
              >
                Send Us a message
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Service Description - Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-200">Service Overview</h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8 leading-relaxed">{serviceData.description}</p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our infrastructure services are designed to provide businesses with reliable, scalable, and secure IT
              foundations. From initial planning and design to implementation and ongoing maintenance, we ensure your
              infrastructure supports your business objectives while maintaining the highest standards of performance
              and security.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Service Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-200">Infrastructure Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden">
            <img
              src={Infrastructure2 || "/placeholder.svg"}
              alt="Infrastructure Detail 1"
              className="w-full h-[300px] object-cover"
            />
          </div>

          <div className="rounded-xl overflow-hidden">
            <img
              src={Infrastructure3 || "/placeholder.svg"}
              alt="Infrastructure Detail 2"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Service Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-200">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <div className="text-orange-500">{service.icon}</div>
              </div>
              <h3 className="font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* What We Do Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-200">What We Do</h2>

        <div className="space-y-4">
          {serviceData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="flex items-start p-5 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-600">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Infrastructure
