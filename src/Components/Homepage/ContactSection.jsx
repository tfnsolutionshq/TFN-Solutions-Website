import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone } from "lucide-react"
import BG from '../../assets/Images/image 11.png'

const ContactSection = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [showCalendly, setShowCalendly] = useState(false)

  const handleButtonClick = (e) => {
    e.preventDefault()
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
      setShowCalendly(true)
    }, 500)
  }

  const closeModal = () => {
    setShowCalendly(false)
  }

  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG}
          alt="Office environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 via-blue-800/80 to-blue-900/70"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-lg text-white"
        >
          <h2 className="text-4xl font-bold mb-6">
            We're ready to <span className="text-blue-300">help</span>
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Have a project in mind or just need expert advice? Our team is ready to answer your questions and discuss
            how we can help your business grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-10">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                <Mail className="h-5 w-5 text-blue-300" />
              </div>
              <div>
                <p className="text-sm text-blue-200">Email Us</p>
                <a href="mailto:support@itsolutions.us" className="text-white hover:text-blue-300 transition-colors">
                  support@tfnsolutions.us
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                <Phone className="h-5 w-5 text-blue-300" />
              </div>
              <div>
                <p className="text-sm text-blue-200">Call Us</p>
                <a href="tel:++02 098 0381" className="text-white hover:text-blue-300 transition-colors">
                  US (+02 098 0381)
                </a>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center bg-white text-blue-900 rounded-full py-3 px-8 w-fit hover:bg-blue-50 transition-colors duration-300 group overflow-hidden font-medium"
            onClick={handleButtonClick}
          >
            {/* Arrow icon that animates from left to right */}
            <span
              className={`flex items-center justify-center rounded-full transition-all duration-500 ease-in-out absolute ${isAnimating ? "left-full -translate-x-12" : "left-4 bg-blue-600"
                }`}
              style={{ width: "2rem", height: "2rem" }}
            >
              <ArrowRight
                className={`w-4 h-4 transition-colors duration-500 ${isAnimating ? "text-blue-900" : "text-white"}`}
              />
            </span>
            {/* Text that animates left */}
            <span
              className={`transition-transform duration-500 ease-in-out ${isAnimating ? "-translate-x-8" : "translate-x-0"} pl-6`}>
              Talk to Us
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Modal */}
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
    </section>
  )
}

export default ContactSection