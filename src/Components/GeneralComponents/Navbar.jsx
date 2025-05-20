// import { useState, useEffect } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { ChevronDown, ArrowRight, Menu, X } from "lucide-react"
// import CountryFlag from "react-country-flag"
// import { motion, AnimatePresence } from "framer-motion"

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false)
//   const [isAnimating, setIsAnimating] = useState(false)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)
//   const navigate = useNavigate()

//   // Custom breakpoint - 992px (larger than Tailwind's md:768px)
//   const BREAKPOINT = 992

//   // Check if screen is mobile on initial load and when resized
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < BREAKPOINT)
//     }

//     // Check on initial load
//     checkIfMobile()

//     // Add resize listener
//     window.addEventListener("resize", checkIfMobile)

//     // Cleanup
//     return () => window.removeEventListener("resize", checkIfMobile)
//   }, [])

//   const handleContactClick = (e) => {
//     e.preventDefault()
//     setIsAnimating(true)
//     setTimeout(() => {
//       navigate("/contactus")
//       setIsAnimating(false)
//     }, 500) // Matches the 500ms animation duration
//   }

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen)
//   }

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true)
//       } else {
//         setScrolled(false)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     if (mobileMenuOpen) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = "auto"
//     }
//     return () => {
//       document.body.style.overflow = "auto"
//     }
//   }, [mobileMenuOpen])

//   return (
//     <nav
//       className={`fixed top-0 left-0 py-4 w-full z-50 transition-all duration-300
//         ${scrolled ? "bg-[#F7F7F7]/90 shadow-md py-4" : "bg-[#F7F7F7]/100 py-6"}`}
//     >
//       <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
//         {/* Logo - Left on mobile, centered on desktop */}
//         <div className={`${!isMobile ? "absolute left-1/2 transform -translate-x-1/2" : ""} z-10`}>
//           <Link to="/">
//             <img src="/logo.png" className="w-28" alt="Logo" />
//           </Link>
//         </div>

//         {/* Left Navigation Links - Hidden on mobile */}
//         {!isMobile && (
//           <div className="flex items-center space-x-8">
//             <Link to="/" className="text-gray-800 hover:text-blue-600 transition-colors">
//               Home
//             </Link>

//             <Link to="/about" className="text-gray-800 hover:text-blue-600 transition-colors">
//               About Us
//             </Link>
//             <Link to="/services/software-development" className="text-gray-800 hover:text-blue-600 transition-colors">
//               Services
//             </Link>
//             <Link to="/works" className="text-gray-800 hover:text-blue-600 transition-colors">
//               Works
//             </Link>
//             <Link to="/latest-news" className="text-gray-800 hover:text-blue-600 transition-colors">
//               News
//             </Link>
//           </div>
//         )}

//         {/* Right Side - Contact Button & Language */}
//         <div className="flex items-center space-x-4">
//           {!isMobile && (
//             <Link
//               to="/contactus"
//               className="flex items-center bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 group relative overflow-hidden"
//               onClick={handleContactClick}
//             >
//               {/* Arrow icon that starts on the left and moves to far right */}
//               <span
//                 className={`flex items-center justify-center rounded-full transition-all duration-500 ease-in-out absolute
//                   ${isAnimating ? "left-full -translate-x-12" : "left-4 bg-white"}`}
//                 style={{ width: "2rem", height: "2rem" }}
//               >
//                 <ArrowRight
//                   className={`w-4 h-4 transition-colors duration-500 ${isAnimating ? "text-white" : "text-blue-600"}`}
//                 />
//               </span>

//               {/* Text that starts centered and moves to far left */}
//               <span
//                 className={`transition-transform duration-500 ease-in-out
//                   ${isAnimating ? "-translate-x-8" : "translate-x-0"} pl-10`}
//               >
//                 Contact us
//               </span>
//             </Link>
//           )}

//           {/* Mobile Menu Button & Country Flag - Right aligned on mobile */}
//           <div className="flex items-center space-x-3">
//             <div className="flex items-center space-x-1 border border-gray-300 rounded-full px-3 py-1">
//               <CountryFlag countryCode="NG" svg style={{ width: "1em", height: "1em" }} />
//               <span className="text-sm font-medium">ENG</span>
//               <ChevronDown className="w-4 h-4" />
//             </div>

//             {/* Mobile Menu Button - Show as soon as screen is below breakpoint */}
//             {isMobile && (
//               <button
//                 className="text-gray-800 focus:outline-none"
//                 onClick={toggleMobileMenu}
//                 aria-label="Toggle mobile menu"
//               >
//                 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu - Animated slide-in from right */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 bg-black/50 z-40"
//               onClick={() => setMobileMenuOpen(false)}
//             />

//             {/* Menu Panel */}
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//               className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-xl z-50 overflow-y-auto"
//             >
//               <div className="flex flex-col h-full">
//                 {/* Header with Logo and Close Button */}
//                 <div className="flex justify-between items-center p-4 border-b border-gray-100">
//                   <Link to="/" onClick={() => setMobileMenuOpen(false)}>
//                     <img src="/logo.png" className="w-24" alt="Logo" />
//                   </Link>
//                   <button
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="text-gray-800 focus:outline-none"
//                     aria-label="Close menu"
//                   >
//                     <X className="w-6 h-6" />
//                   </button>
//                 </div>

//                 <div className="flex-1 px-4 py-2 flex flex-col space-y-4">
//                   <Link
//                     to="/"
//                     className="text-gray-800 py-3 border-b border-gray-100"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     Home
//                   </Link>
//                   <Link
//                     to="/about"
//                     className="text-gray-800 py-3 border-b border-gray-100"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     About Us
//                   </Link>
//                   <Link
//                     to="/services"
//                     className="text-gray-800 py-3 border-b border-gray-100"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     Services
//                   </Link>
//                   <Link
//                     to="/works"
//                     className="text-gray-800 py-3 border-b border-gray-100"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     Works
//                   </Link>
//                   <Link
//                     to="/news"
//                     className="text-gray-800 py-3 border-b border-gray-100"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     News
//                   </Link>
//                 </div>

//                 <div className="p-4 mt-auto">
//                   <Link
//                     to="/contactus"
//                     className="flex items-center justify-center bg-blue-600 text-white px-4 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 w-full"
//                     onClick={() => {
//                       setMobileMenuOpen(false)
//                       navigate("/contactus")
//                     }}
//                   >
//                     <span>Contact us</span>
//                     <ArrowRight className="ml-2 w-4 h-4" />
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </nav>
//   )
// }

// export default Navbar








"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ChevronDown, ArrowRight, Menu, X, Server, Code, Shield, Cloud, Database, Smartphone } from 'lucide-react'
import CountryFlag from "react-country-flag"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const servicesRef = useRef(null)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()

  // Custom breakpoint - 992px (larger than Tailwind's md:768px)
  const BREAKPOINT = 992

  // Services data
  const services = [
    {
      category: "Infrastructure",
      items: [
        { name: "Infrastructure Services", path: "/services/infrastructure", icon: <Server className="w-5 h-5" /> },
        { name: "Cloud Services", path: "/services/cloud-services", icon: <Cloud className="w-5 h-5" /> },
        { name: "Backup Solutions", path: "/services/backup", icon: <Database className="w-5 h-5" /> },
      ],
    },
    {
      category: "Development",
      items: [
        { name: "Software Development", path: "/services/software-development", icon: <Code className="w-5 h-5" /> },
        { name: "Mobile App Development", path: "/services/mobile-development", icon: <Smartphone className="w-5 h-5" /> },
        { name: "Web Development", path: "/services/web-development", icon: <Code className="w-5 h-5" /> },
      ],
    },
    {
      category: "Security",
      items: [
        { name: "Cybersecurity", path: "/services/cybersecurity", icon: <Shield className="w-5 h-5" /> },
        { name: "Network Security", path: "/services/network-security", icon: <Shield className="w-5 h-5" /> },
        { name: "Security Audits", path: "/services/security-audits", icon: <Shield className="w-5 h-5" /> },
      ],
    },
  ]

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

  // Handle clicks outside of dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesDropdownOpen &&
        servicesRef.current &&
        dropdownRef.current &&
        !servicesRef.current.contains(event.target) &&
        !dropdownRef.current.contains(event.target)
      ) {
        setServicesDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [servicesDropdownOpen])

  const handleContactClick = (e) => {
    e.preventDefault()
    setIsAnimating(true)
    setTimeout(() => {
      navigate("/contactus")
      setIsAnimating(false)
    }, 500) // Matches the 500ms animation duration
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleServicesDropdown = () => {
    if (isMobile) {
      setServicesDropdownOpen(!servicesDropdownOpen)
    }
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
        ${scrolled ? "bg-[#F7F7F7]/90 backdrop-blur-sm shadow-md py-4" : "bg-[#F7F7F7]/100 py-6"}`}
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
            
            {/* Services with dropdown */}
            <div 
              className="relative" 
              ref={servicesRef}
              onMouseEnter={() => !isMobile && setServicesDropdownOpen(true)}
              onMouseLeave={() => !isMobile && setServicesDropdownOpen(false)}
            >
              <button 
                className="flex items-center text-gray-800 hover:text-blue-600 transition-colors focus:outline-none"
                onClick={toggleServicesDropdown}
              >
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mega dropdown menu */}
              <AnimatePresence>
                {servicesDropdownOpen && !isMobile && (
                  <motion.div
                    ref={dropdownRef}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 mt-10 w-[800px] bg-white shadow-xl border border-gray-100 z-50"
                  >
                    <div className="grid grid-cols-3 gap-0 p-6">
                      {services.map((category, idx) => (
                        <div key={idx} className="px-4">
                          <h3 className="font-semibold text-gray-900 mb-3">{category.category}</h3>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link 
                                  to={item.path}
                                  className="flex items-center py-2 px-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                                  onClick={() => setServicesDropdownOpen(false)}
                                >
                                  <span className="mr-3 text-gray-400 group-hover:text-blue-500">{item.icon}</span>
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {/* <div className="bg-gray-50 p-4 rounded-b-xl border-t border-gray-100">
                      <Link 
                        to="/services" 
                        className="flex items-center justify-center text-blue-600 hover:text-blue-700 font-medium"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        View all services
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div> */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
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

                <div className="flex-1 px-4 py-2 flex flex-col">
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
                  
                  {/* Mobile Services Dropdown */}
                  <div className="border-b border-gray-100">
                    <button
                      className="flex items-center justify-between w-full text-left text-gray-800 py-3"
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    >
                      <span>Services</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden bg-gray-50 rounded-lg mb-3"
                        >
                          {services.map((category, idx) => (
                            <div key={idx} className="py-2 px-3">
                              <h4 className="font-medium text-sm text-gray-500 mb-1">{category.category}</h4>
                              {category.items.map((item, itemIdx) => (
                                <Link
                                  key={itemIdx}
                                  to={item.path}
                                  className="flex items-center py-2 pl-3 text-gray-700 hover:text-blue-600"
                                  onClick={() => {
                                    setMobileMenuOpen(false)
                                    setServicesDropdownOpen(false)
                                  }}
                                >
                                  <span className="mr-2 text-gray-400">{item.icon}</span>
                                  <span className="text-sm">{item.name}</span>
                                </Link>
                              ))}
                            </div>
                          ))}
                          <div className="py-2 px-3 border-t border-gray-200">
                            <Link
                              to="/services"
                              className="flex items-center py-2 text-blue-600 font-medium"
                              onClick={() => {
                                setMobileMenuOpen(false)
                                setServicesDropdownOpen(false)
                              }}
                            >
                              View all services
                              <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
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
                      navigate("/contactus")
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