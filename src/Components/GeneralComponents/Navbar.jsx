import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react"
import CountryFlag from "react-country-flag"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const navigate = useNavigate()

  // Custom breakpoint - 992px (larger than Tailwind's md:768px)
  const BREAKPOINT = 992

  // Check if screen is mobile on initial load and when resized
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < BREAKPOINT)
    }

    // Check on initial load
    checkIfMobile()

    // Add resize listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const handleContactClick = (e) => {
    e.preventDefault()
    setIsAnimating(true)
    setTimeout(() => {
      navigate("/contact")
      setIsAnimating(false)
    }, 500) // Matches the 500ms animation duration
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 py-4 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-[#F7F7F7]/90 shadow-md py-4" : "bg-[#F7F7F7]/100 py-6"}`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo - Left on mobile, centered on desktop */}
        <div className={`${!isMobile ? "absolute left-1/2 transform -translate-x-1/2" : ""} z-10`}>
          <Link to="/">
            <img src="/logo.png" className="w-28" alt="Logo" />
          </Link>
        </div>

        {/* Left Navigation Links - Hidden on mobile */}
        {!isMobile && (
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-blue-600 transition-colors">
              Home
            </Link>

            <Link to="/about" className="text-gray-800 hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link to="/services/software-development" className="text-gray-800 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link to="/works" className="text-gray-800 hover:text-blue-600 transition-colors">
              Works
            </Link>
            <Link to="/latest-news" className="text-gray-800 hover:text-blue-600 transition-colors">
              News
            </Link>
          </div>
        )}

        {/* Right Side - Contact Button & Language */}
        <div className="flex items-center space-x-4">
          {!isMobile && (
            <Link
              to="/contactus"
              className="flex items-center bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 group relative overflow-hidden"
              onClick={handleContactClick}
            >
              {/* Arrow icon that starts on the left and moves to far right */}
              <span
                className={`flex items-center justify-center rounded-full transition-all duration-500 ease-in-out absolute
                  ${isAnimating ? "left-full -translate-x-12" : "left-4 bg-white"}`}
                style={{ width: "2rem", height: "2rem" }}
              >
                <ArrowRight
                  className={`w-4 h-4 transition-colors duration-500 ${isAnimating ? "text-white" : "text-blue-600"}`}
                />
              </span>

              {/* Text that starts centered and moves to far left */}
              <span
                className={`transition-transform duration-500 ease-in-out
                  ${isAnimating ? "-translate-x-8" : "translate-x-0"} pl-10`}
              >
                Contact us
              </span>
            </Link>
          )}

          {/* Mobile Menu Button & Country Flag - Right aligned on mobile */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 border border-gray-300 rounded-full px-3 py-1">
              <CountryFlag countryCode="NG" svg style={{ width: "1em", height: "1em" }} />
              <span className="text-sm font-medium">ENG</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            {/* Mobile Menu Button - Show as soon as screen is below breakpoint */}
            {isMobile && (
              <button
                className="text-gray-800 focus:outline-none"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu - Animated slide-in from right */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-xl z-50 overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header with Logo and Close Button */}
                <div className="flex justify-between items-center p-4 border-b border-gray-100">
                  <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                    <img src="/logo.png" className="w-24" alt="Logo" />
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-800 focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-1 px-4 py-2 flex flex-col space-y-4">
                  <Link
                    to="/"
                    className="text-gray-800 py-3 border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-800 py-3 border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/services"
                    className="text-gray-800 py-3 border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    to="/works"
                    className="text-gray-800 py-3 border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Works
                  </Link>
                  <Link
                    to="/news"
                    className="text-gray-800 py-3 border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    News
                  </Link>
                </div>

                <div className="p-4 mt-auto">
                  <Link
                    to="/contactus"
                    className="flex items-center justify-center bg-blue-600 text-white px-4 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 w-full"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      navigate("/contact")
                    }}
                  >
                    <span>Contact us</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar