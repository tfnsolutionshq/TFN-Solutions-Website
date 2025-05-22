import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight, ArrowUp, Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter, Youtube } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [showCalendly, setShowCalendly] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: false, amount: 0.3 })
  const controls = useAnimation()

  // Handle mouse movement for the gradient effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const footer = footerRef.current
      if (!footer) return

      const rect = footer.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animate elements when they come into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const handleBookCallClick = (e) => {
    e.preventDefault()
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
      setShowCalendly(true)
    }, 500)
  }

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  // Social media icons with hover effects
  const SocialIcon = ({ icon: Icon, href, label }) => (
    <motion.a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
    >
      <Icon size={18} />
    </motion.a>
  )

  return (
    <>
      <footer
        ref={footerRef}
        className="relative bg-[#00081C] text-white py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, rgba(0, 8, 28, 0) 50%)`,
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Top Section - CTA and Back to Top */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid md:grid-cols-4 lg:grid-cols-8 grid-cols-1 gap-8 mb-16"
          >
            {/* CTA Section */}
            <motion.div variants={itemVariants} className="mb-8 md:col-span-2">
              <div className="relative">
                <motion.h2
                  className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  Let's work together and
                  <br />
                  make cool things!
                </motion.h2>
                <motion.button
                  className="mt-4 flex items-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-full transition-all duration-300 group relative overflow-hidden px-6 py-3 shadow-lg shadow-blue-900/20"
                  style={{ minWidth: "180px" }}
                  onClick={handleBookCallClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span
                    className={`flex items-center justify-center rounded-full transition-all duration-500 ease-in-out absolute ${
                      isAnimating ? "left-full -translate-x-12" : "left-4 bg-white"
                    } `}
                    style={{ width: "2rem", height: "2rem" }}
                  >
                    <ArrowRight
                      className={`w-4 h-4 transition-colors duration-500 ${
                        isAnimating ? "text-white" : "text-blue-600"
                      }`}
                    />
                  </span>
                  <span
                    className={`transition-transform duration-500 ease-in-out ${
                      isAnimating ? "-translate-x-8" : "translate-x-0"
                    } pl-10 text-sm font-medium`}
                  >
                    Book a call
                  </span>
                </motion.button>
              </div>

              <motion.button
                className="mt-8 flex items-center text-sm text-blue-300 hover:text-blue-400 transition-colors group"
                onClick={handleBackToTop}
                whileHover={{ y: -2 }}
              >
                <ArrowUp size={16} className="mr-2 group-hover:animate-bounce transition-transform" />
                <span>Back to top</span>
              </motion.button>
            </motion.div>

            {/* Navigation Links Column 1 */}
            <motion.div variants={itemVariants}>
              <h3 className="font-medium mb-4 text-blue-300">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About" },
                  { to: "/works", label: "Works" },
                  { to: "/contactus", label: "Contact Us" },
                ].map((item) => (
                  <motion.li key={item.to} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link to={item.to} className="text-sm text-white hover:text-blue-400 transition-colors flex items-center">
                      <span className="w-0 h-px bg-blue-400 mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Navigation Links Column 2 */}
            <motion.div variants={itemVariants}>
              <h3 className="font-medium mb-4 text-blue-300">Works</h3>
              <ul className="space-y-3">
                {[
                  { to: "/works/afriwok", label: "Afriwok" },
                  { to: "/works/unizik-alumni", label: "Unizik Alumni" },
                  { to: "/works/crystalbricks", label: "Crystalbricks" },
                ].map((item) => (
                  <motion.li key={item.to} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link to={item.to} className="text-sm text-white hover:text-blue-400 transition-colors flex items-center">
                      <span className="w-0 h-px bg-blue-400 mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-medium mb-4 text-blue-300">Locations</h3>
              <ul className="space-y-3">
                {["United States", "Africa", "Europe"].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <div className="text-sm text-white hover:text-blue-400 transition-colors flex items-center">
                      <span className="w-0 h-px bg-blue-400 mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                      {item}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <h3 className="font-medium mb-4 text-blue-300">Contact Us</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:support@tfnsolutions.us"
                    className="text-sm text-white hover:text-blue-400 transition-colors flex items-start"
                  >
                    <Mail size={16} className="mr-2 mt-1 text-blue-400" />
                    <div>
                      <span className="text-blue-200">Email:</span>
                      <br />
                      <span className="font-bold hover:underline">support@tfnsolutions.us</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+02 098 0381"
                    className="text-sm text-white hover:text-blue-400 transition-colors flex items-start"
                  >
                    <Phone size={16} className="mr-2 mt-1 text-blue-400" />
                    <div>
                      <span className="text-blue-200">Phone:</span>
                      <br />
                      <span className="font-bold hover:underline">US (+02 098 0381)</span>
                    </div>
                  </a>
                </li>
                <li className="text-sm text-white flex items-start">
                  <MapPin size={16} className="mr-2 mt-1 text-blue-400" />
                  <div>
                    <span className="text-blue-200">Global Offices:</span>
                    <br />
                    <span className="text-white/80">USA • Africa • Europe</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="font-medium mb-4 text-blue-300">Social</h3>
              <div className="flex flex-wrap gap-3 mt-4">
                <SocialIcon icon={Linkedin} href="https://www.linkedin.com/company/tfnsolutionshq/" label="LinkedIn" />
                <SocialIcon icon={Instagram} href="https://www.instagram.com/tfnsolutionshq?igsh=YzR6bGJncjNpbnJr" label="Instagram" />
                <SocialIcon icon={Facebook} href="https://www.facebook.com/share/18zjsHrP4a/" label="Facebook" />
                <SocialIcon icon={Twitter} href="https://x.com/tfnsolutionshq?t=IZzbCy8cpcp6TjjTWR_NEQ&s=09" label="Twitter" />
                {/* <SocialIcon icon={Youtube} href="#" label="YouTube" /> */}
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Section - Copyright and Policies */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            className="flex flex-col pb-6 md:flex-row justify-between items-start md:items-center pt-6 border-t border-blue-900/50"
          >
            <div className="text-xs text-white/70">
              <span>All Rights Reserved © 2025</span>
              <div className="mt-1">
                Powered by{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
                  TFN Solutions
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 space-x-4 text-xs text-white/70">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms & Conditions
              </a>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Calendly Modal */}
      {showCalendly && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-white rounded-xl shadow-2xl p-4 max-w-xl w-full relative"
          >
            <button
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-red-500 transition-colors"
              onClick={() => setShowCalendly(false)}
              aria-label="Close"
            >
              ✕
            </button>
            <iframe
              src="https://calendly.com/ebenezernwolisa100" // Replace with your Calendly link
              width="100%"
              height="400"
              frameBorder="0"
              title="Book a call"
              className="rounded-lg mt-2"
              allow="fullscreen"
            ></iframe>
          </motion.div>
        </motion.div>
      )}

      {/* WhatsApp Button */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 100 }}
      >
        <Link
          to="https://wa.me/2348063961963"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50 flex items-center px-4 py-2 bg-white border-2 border-green-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 group"
          style={{
            boxShadow: "0 0 8px 2px rgba(0, 255, 178, 0.5)",
          }}
          aria-label="Send WhatsApp Message"
        >
          <span className="text-xs font-medium text-black mr-2">Send a DM</span>
          <motion.span
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="flex items-center justify-center w-6 h-6 bg-black rounded-full"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="8" fill="black" />
              <path d="M5 7L8 10L11 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.span>
        </Link>
      </motion.div>
    </>
  )
}
