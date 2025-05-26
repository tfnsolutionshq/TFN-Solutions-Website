import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

const AboutUs = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [showCalendly, setShowCalendly] = useState(false)
  const navigate = useNavigate()

  const handleStartProject = (e) => {
    e.preventDefault()
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
      setShowCalendly(true)
    }, 500)
  }

  return (
    <section className="relative py-20 px-4 overflow-hidden mt-24 from-[var(--background-primary)] via-blue-50 to-[var(--background-primary)]">
      {/* Simple background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-yellow-300 opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-300 opacity-20 blur-3xl -z-10"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-blue/[0.03] bg-[length:30px_30px] -z-10"></div>

      <div className="container mx-auto max-w-3xl text-center">
        {/* Centered Content */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
            About Our Company
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            We're a dedicated{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital
              </span>
              <span className="absolute -inset-1 rounded-lg bg-blue-100" style={{ zIndex: 0 }}></span>
            </span>{" "}
            <br />
            IT Experts
          </h1>

          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            With over a decade of experience, we blend innovation and expertise to deliver cutting-edge solutions that
            transform businesses and drive growth in the digital landscape.
          </p>

          <div className="flex justify-center mb-12">
            <button
              className="relative overflow-hidden flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-md"
              onClick={handleStartProject}
              style={{ minWidth: "200px" }}
            >
              <span
                className={`flex items-center justify-center rounded-full transition-all duration-500 ease-in-out absolute ${isAnimating ? "left-full -translate-x-12" : "left-4 bg-white"
                  }`}
                style={{ width: "2rem", height: "2rem" }}
              >
                <ArrowRight
                  className={`w-4 h-4 transition-colors duration-500 ${isAnimating ? "text-white" : "text-blue-600"}`}
                />
              </span>
              <span
                className={`transition-transform duration-500 ease-in-out ${isAnimating ? "-translate-x-8" : "translate-x-0"
                  } pl-10 font-medium`}
              >
                Start a project
              </span>
            </button>
          </div>

          {/* Centered Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md border border-gray-100 px-8 py-6 max-w-xl mx-auto"
          >
            <div className="flex justify-between items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div className="h-14 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-gray-500">Projects Completed</div>
              </div>
              <div className="h-14 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-500">Team Members</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

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
              src="https://calendly.com/ezeasorekene/30min"
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

export default AboutUs
