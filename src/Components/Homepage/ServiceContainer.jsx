import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import image2 from "../../assets/Images/image 2.png"
import image3 from "../../assets/Images/image 3.png"
import image5 from "../../assets/Images/image 5.png"
import image6 from "../../assets/Images/image 6.png"
import image7 from "../../assets/Images/image 7.png"
import image8 from "../../assets/Images/image 8.png"
import image9 from "../../assets/Images/image 9.png"
import image10 from "../../assets/Images/image 10.png"
import image11 from "../../assets/Images/image 11.png"
import diverse from "../../assets/Images/diverse.png"

const ServicesSection = () => {
  const scrollContainerRef = useRef(null)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const [visibleCount, setVisibleCount] = useState(6) // Initial display count
  const navigate = useNavigate()

  // Array of 11 service items for the grid layout - keeping the exact same content
  const services = [
    {
        id: 1,
        title: "Managed IT Services",
        image: diverse,
        path: "/services/managed-it-services"
    },
    {
        id: 2,
        title: "Cloud Services",
        image: image2,
        path: "/services/cloud-services"
    },
    {
        id: 3,
        title: "Cybersecurity Services",
        image: image3,
        path: "/services/cybersecurity-services"
    },
    {
        id: 4,
        title: "IT Consulting & Strategy",
        image: image5,
        path: "/services/it-consulting-and-strategy"
    },
    {
        id: 5,
        title: "Software Development & Integration",
        image: image6,
        path: "/services/software-development"
    },
    {
        id: 6,
        title: "Data Services",
        image: image7,
        path: "/services/data-services"
    },
    {
        id: 7,
        title: "Infrastructure Services -(onsite/Remote)",
        image: image8,
        path: "/services/infrastructure-services"
    },
    {
        id: 8,
        title: "IT Support & Helpdesk",
        image: image9,
        path: "/services/it-support-and-helpdesk"
    },
    {
        id: 9,
        title: "Communication & Collaboration Tools",
        image: image10,
        path: "/services/communication-and-collaboration-tools"
    },
    {
        id: 10,
        title: "Backup & Disaster Recovery (BDR)",
        image: diverse,
        path: "/services/backup-and-disaster-recovery"
    },
    {
        id: 11,
        title: "Hardware & Software Procurement",
        image: image2,
        path: "/services/hardware-and-software-procurement"
    },
  ]

  // Handle scroll events to hide/show scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current
      if (!container) return

      const isAtBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 50
      setShowScrollIndicator(!isAtBottom)

      // Load more when near bottom
      if (isAtBottom && visibleCount < services.length) {
        setVisibleCount((prev) => Math.min(prev + 3, services.length))
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      handleScroll() // Initial check
    }

    return () => {
      if (container) container.removeEventListener("scroll", handleScroll)
    }
  }, [visibleCount, services.length])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  const handleServiceClick = (path) => {
  navigate(path);
  // Force immediate scroll to top
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
};

  return (
    <section className="py-16 bg-gradient-to-b from-[var(--background-primary)] to-[var(--background-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center mb-3">
            <div className="h-px w-8 bg-blue-600 mr-3"></div>
            <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">Our Services</span>
            <div className="h-px w-8 bg-blue-600 ml-3"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Comprehensive IT Solutions for Your Business
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our range of specialized services designed to optimize your technology infrastructure and drive
            business growth.
          </p>
        </div>

        {/* Services grid with scroll container */}
        <div
          ref={scrollContainerRef}
          className="relative max-h-[600px] overflow-y-auto pr-2 hide-scrollbar"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(203, 213, 225, 0.4) transparent",
          }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.slice(0, visibleCount).map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
                onClick={() => handleServiceClick(service.path)}
                whileHover={{ y: -5 }}
              >
                {/* Background image */}
                <div className="absolute inset-0 w-full h-full bg-gray-900">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                  <div className="absolute top-4 right-4 w-12 h-12 border border-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-20 h-1 bg-blue-500/50 rounded-full group-hover:w-32 transition-all duration-700"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-semibold mb-2 group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <div className="flex items-center opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-white/80 text-sm mr-2">Learn more</span>
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-all duration-500">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        {showScrollIndicator && visibleCount < services.length && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center mt-8"
          >
            <span className="text-sm text-gray-500 mb-2">Scroll for more services</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
            >
              <ChevronDown className="w-5 h-5 text-blue-600" />
            </motion.div>
          </motion.div>
        )}

        {/* CSS for hiding scrollbar on some browsers */}
        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .hide-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .hide-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(203, 213, 225, 0.4);
            border-radius: 20px;
          }
          .hide-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: rgba(203, 213, 225, 0.7);
          }
        `}</style>
      </div>
    </section>
  )
}

export default ServicesSection
