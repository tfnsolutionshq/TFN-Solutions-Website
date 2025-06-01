// import { Link } from "react-router-dom";

// const WorkDetails = () => {
//   // Sample project data - replace with actual data or API call
//   const projectData = {
//     title: 'Crystal Bricks Portal & Website',
//     image: '/src/assets/works/crystalbanner.png', // Using actual image from assets
//     description: 'Experience the power of Mobile App Project Management and unlock the potential of your projects.',
//     client: 'Crystalbricks',
//     service: 'UI/UX, Software Development',
//     tools: 'Illustrator, Figma',
//     year: '2024',
//     liveUrl: 'https://crystalbricks.ng/',
//     detailedDescription: 'Crystal Bricks is a fast-growing company with diverse services in real estate and financial sectors. TFN Solutions developed both their corporate website and a backend portal to manage client services across loans, savings, and investment portfolios.',
//     secondaryDescription: 'Cursus felis eget pulvinar aliquam ut laoreet nunc mattis sagittis urna lobortep diam et morbi vel eget arcu magna vel justo viverra a ante. Sagittis vitae vitae ultricies quis eu adipiscing fringillam volutpat massa maecenas ac urna sed elementum amet pharetra nisi tellus sodales sagittae sed elit. Ornare malesuada vel congue felis eget amet a lorem sed sed cursus elementum lectus vulputate.',
//     projectHighlights: [
//       "Dynamic corporate website with service highlights",
//       "Secure customer onboarding and financial service access",
//       "Admin dashboard for loan, savings, and investment management"
//     ],
//     achievements: [
//       'Designed and deployed a mobile-first website showcasing financial service offerings and real estate projects',
//       'Built a secure web-based portal for managing customer financial services including applications, payments, and balances',
//       'Developed user dashboards with real-time transaction history, savings tracker, and loan repayment plans',
//       'Enabled document upload, verification workflows, and automated alerts to enhance operational efficiency',
//     ]
//   };

//   return (
//     <div className="max-w-5xl mx-auto px-4 pt-40 pb-8">
//       {/* Project Header */}
//       <div className="mb-10">
//         <div className="flex items-center mb-4">
//           <div className="h-3 w-3 rounded-full bg-orange-500 mr-3"></div>
//           <span className="text-sm font-medium uppercase tracking-wider">Project</span>
//         </div>
//         <h1 className="text-4xl md:text-5xl font-bold mb-8">{projectData.title}</h1>
//       </div>
 
//       {/* Project Content */}
//       <div className="grid bg-white items-center p-2 rounded-xl grid-cols-1 lg:grid-cols-2 gap-3 mb-8">
//         {/* Project Image */}
//         <div className="">
//           <div className="rounded-lg overflow-hidden bg-gray-100 h-[250px] md:h-[350px]">
//             {/* Fallback div with gradient if image is not available */}
//             <div
//               className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300"
//               style={{
//                 backgroundImage: `url(${projectData.image})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//               }}
//             ></div>
//           </div>
//         </div>

//         {/* Project Info */}
//         <div className="">
//           <div className="px-6 rounded-lg h-full">
//             {/* <p className="text-gray-600 mb-4">{projectData.description}</p> */}

//             <div className="space-y-6">
//               <div className="flex justify-between items-center border-b border-gray-200 pb-2">
//                 <span className="font-medium">Client</span>
//                 <span className="text-gray-600">{projectData.client}</span>
//               </div>

//               <div className="flex justify-between items-center border-b border-gray-200 pb-2">
//                 <span className="font-medium">Service</span>
//                 <span className="text-gray-600">{projectData.service}</span>
//               </div>

//               {/* <div className="flex justify-between items-center border-b border-gray-200 pb-2">
//                 <span className="font-medium">Tools</span>
//                 <span className="text-gray-600">{projectData.tools}</span>
//               </div> */}

//               <div className="flex justify-between items-center border-b border-gray-200 pb-2">
//                 <span className="font-medium">Year</span>
//                 <span className="text-gray-600">{projectData.year}</span>
//               </div>
//             </div>

//             <Link
//               to={projectData.liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-8 inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-white font-medium hover:bg-orange-600 transition-colors duration-300"
//             >
//               <span>View Live</span>
//               <div className="ml-2 h-6 w-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-3 w-3"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Project Description */}
//       <div className="mb-16">
//         <p className="text-gray-600 mb-8">{projectData.detailedDescription}</p>

//         {/* Project Image - Secondary */}
//         <div className="rounded-lg overflow-hidden bg-gray-100 h-[250px] md:h-[300px] mb-8">
//           <div
//             className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300"
//             style={{
//               backgroundImage: `url('/src/assets/works/crystalone.png')`, // Using actual image from assets
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           ></div>
//         </div>

//         {/* Project Highlights as bullet points */}
//         <h3 className="text-2xl font-bold mb-3">Project Highlights</h3>
//         <ul className="list-disc pl-6 text-gray-600 space-y-2">
//           {projectData.projectHighlights.map((highlight, idx) => (
//             <li key={idx}>{highlight}</li>
//           ))}
//         </ul>
//       </div>

//       <div className="rounded-lg overflow-hidden bg-gray-100 h-[250px] md:h-[300px] mb-8">
//           <div
//             className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300"
//             style={{
//               backgroundImage: `url('/src/assets/works/crystaltwo.png')`, // Using actual image from assets
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           ></div>
//         </div>

//       {/* What We Did Section */}
//       <div className="mb-16">
//         <h2 className="text-2xl font-bold mb-6">What we did</h2>
//         <ul className="space-y-4">
//           {projectData.achievements.map((achievement, index) => (
//             <li key={index} className="flex items-start">
//               <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4 text-orange-500"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <span className="text-gray-600">{achievement}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default WorkDetails;








"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowUpRight, ChevronRight } from "lucide-react"

const WorkDetails = () => {
  // Animation state
  const [isVisible, setIsVisible] = useState(false)

  // Set visibility after component mounts for animations
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Sample project data - replace with actual data or API call
  const projectData = {
    title: "Crystal Bricks Portal & Website",
    image: "https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/works/crystalbanner.png", // Using actual image from assets
    description: "Experience the power of Mobile App Project Management and unlock the potential of your projects.",
    client: "Crystalbricks",
    service: "UI/UX, Software Development",
    year: "2024",
    liveUrl: "https://crystalbricks.ng/",
    detailedDescription:
      "Crystal Bricks is a fast-growing company with diverse services in real estate and financial sectors. TFN Solutions developed both their corporate website and a backend portal to manage client services across loans, savings, and investment portfolios.",
    secondaryDescription:
      "Cursus felis eget pulvinar aliquam ut laoreet nunc mattis sagittis urna lobortep diam et morbi vel eget arcu magna vel justo viverra a ante. Sagittis vitae vitae ultricies quis eu adipiscing fringillam volutpat massa maecenas ac urna sed elementum amet pharetra nisi tellus sodales sagittae sed elit. Ornare malesuada vel congue felis eget amet a lorem sed sed cursus elementum lectus vulputate.",
    projectHighlights: [
      "Dynamic corporate website with service highlights",
      "Secure customer onboarding and financial service access",
      "Admin dashboard for loan, savings, and investment management",
    ],
    achievements: [
      "Designed and deployed a mobile-first website showcasing financial service offerings and real estate projects",
      "Built a secure web-based portal for managing customer financial services including applications, payments, and balances",
      "Developed user dashboards with real-time transaction history, savings tracker, and loan repayment plans",
      "Enabled document upload, verification workflows, and automated alerts to enhance operational efficiency",
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
          to="/projects"
          className="inline-flex items-center text-sm text-gray-500 hover:text-orange-500 transition-colors"
        >
          <ChevronRight className="mr-1 h-4 w-4 rotate-180" />
          <span>Back to Projects</span>
        </Link>
      </motion.div>

      {/* Project Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10"
      >
        <div className="flex items-center mb-4">
          <div className="h-1 w-12 bg-orange-500 mr-3"></div>
          <span className="text-sm font-medium uppercase tracking-wider text-orange-500">Loans And Money Management</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{projectData.title}</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Comprehensive digital solutions for real estate and financial service management
        </p>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-20"
      >
        <div className="relative rounded-2xl overflow-hidden">
          <div
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-100"
            style={{
              backgroundImage: `url(${projectData.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            {/* Floating CTA on hero image */}
            <div className="absolute bottom-8 right-8">
              <Link
                to={projectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white px-6 py-3 rounded-full text-orange-500 font-medium hover:bg-orange-50 transition-colors group shadow-lg"
              >
                <span>Visit Website</span>
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Overview & Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
        {/* Project Info - Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-1"
        >
          <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-200">Project Details</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Client</h3>
              <p className="font-medium">{projectData.client}</p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Services</h3>
              <p className="font-medium">{projectData.service}</p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Tools</h3>
              <p className="font-medium">{projectData.tools}</p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Year</h3>
              <p className="font-medium">{projectData.year}</p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Website</h3>
              <Link
                to={projectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-orange-500 hover:text-orange-600 transition-colors inline-flex items-center"
              >
                crystalbricks.ng
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Project Description - Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-200">Project Overview</h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8 leading-relaxed">{projectData.detailedDescription}</p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              The platform was designed to streamline customer interactions across multiple financial services while
              providing administrators with powerful tools to manage applications, track payments, and monitor portfolio
              performance. The public-facing website showcases their real estate projects and financial offerings with a
              modern, responsive design.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Project Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-200">Project Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden">
            <div
              className="w-full h-[300px] bg-gray-100"
              style={{
                backgroundImage: `url('https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/works/crystalone.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          <div className="rounded-xl overflow-hidden">
            <div
              className="w-full h-[300px] bg-gray-100"
              style={{
                backgroundImage: `url('https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/works/crystaltwo.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </motion.div>

      {/* Project Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-200">Project Highlights</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectData.projectHighlights.map((highlight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <span className="text-orange-500 font-bold">{idx + 1}</span>
              </div>
              <p className="text-gray-700">{highlight}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* What We Did Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-200">What We Did</h2>

        <div className="space-y-4">
          {projectData.achievements.map((achievement, index) => (
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

export default WorkDetails
