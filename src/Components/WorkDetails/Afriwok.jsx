
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

const WorkDetails = () => {
  // Animation state
  const [isVisible, setIsVisible] = useState(false)

  // Set visibility after component mounts for animations
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Sample project data - replace with actual data or API call
  const projectData = {
    title: "Afriwok Digital Marketplace",
    image: "https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/works/afriwokbanner.jpg", // Using actual image from assets
    client: "TFN Solutions Limited",
    service: "UI/UX, Product Design, Software Development",
    year: "2024",
    liveUrl: "https://afriwok.com",
    detailedDescription:
      "Afriwok is a digital marketplace platform that connects users with skilled and unskilled service providers across multiple industries in Africa. It facilitates job postings, service discovery, secure payments, and verified ratings — empowering small businesses and freelancers alike.",
    projectHighlights: [
      "Multi-user role access: Clients and service providers",
      "Geo-targeted service listings and search filters",
      "Integrated wallet system and escrow payments for secure transactions",
    ],
    achievements: [
      "Engineered a scalable web platform with authentication and role-based access",
      "Built service provider profiles, job posting workflows, and secure communication channels",
      "Integrated payment gateways, wallet systems, and escrow features for transaction safety",
      "Delivered a seamless UX focused on simplicity, trust, and reliability for users on both mobile and desktop",
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
          <span className="text-sm font-medium uppercase tracking-wider text-orange-500">Software Project</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{projectData.title}</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          A digital marketplace connecting skilled professionals with clients across Africa
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
                afriwok.com
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
              The platform was designed with a focus on accessibility and ease of use, ensuring that even users with
              limited technical knowledge can navigate and utilize the service effectively. Our team worked closely with
              stakeholders to understand the unique challenges of the African market and develop solutions that address
              local needs.
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
                backgroundImage: `url('https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/works/afriwoktwo.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          <div className="rounded-xl overflow-hidden">
            <div
              className="w-full h-[300px] bg-gray-100"
              style={{
                backgroundImage: `url('https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/works/afriwokone.png')`,
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
              className="flex items-start item-center p-5 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
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
              <p className="text-[var(--text-secondary)]">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default WorkDetails
