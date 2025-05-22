// import "../../styles/AboutHero.css";
// import Vector from "../../assets/Images/Vector 1.png";
// import { ArrowRight } from "lucide-react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AboutUs = () => {
//   const [isAnimating, setIsAnimating] = useState(false);
//   const navigate = useNavigate();

//   const handleStartProject = (e) => {
//     e.preventDefault();
//     setIsAnimating(true);
//     setTimeout(() => {
//       // Replace with your desired navigation or action
//       navigate("/contact");
//       setIsAnimating(false);
//     }, 500);
//   };

//   return (
//     <section className="about-hero-section mt-32">
//       <div className="about-hero-bg absolute inset-0 overflow-visible">
//         <img
//           src={Vector}
//           alt="Yellow Curve"
//           className="absolute left-1/2  -translate-x-1/2 w-[220vw] max-w-[1800px] min-w-[600px] h-auto object-cover"
//         />
//       </div>
//       <div className="about-hero-content">
//         <h1 className="about-hero-title">
//           We’re a dedicated <br />
//           <span className="about-hero-digital-pill">Digital</span>
//           <br />
//           IT Experts
//         </h1>
//         <button
//           className="relative overflow-hidden flex items-center bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 group"
//           onClick={handleStartProject}
//           style={{ minWidth: "180px" }}
//         >
//           <span
//             className={`flex items-center justify-center rounded-full transition-all duration-500 ease-in-out absolute
//               ${isAnimating ? "left-full -translate-x-12" : "left-4 bg-white"}`}
//             style={{ width: "2rem", height: "2rem" }}
//           >
//             <ArrowRight
//               className={`w-4 h-4 transition-colors duration-500 ${isAnimating ? "text-white" : "text-blue-600"}`}
//             />
//           </span>
//           <span
//             className={`transition-transform duration-500 ease-in-out
//               ${isAnimating ? "-translate-x-8" : "translate-x-0"} pl-10`}
//           >
//             Start a project
//           </span>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;











// "use client"

// import { useState, useRef, useEffect } from "react"
// import { motion, useScroll, useTransform, useMotionTemplate, useSpring } from "framer-motion"
// import { ArrowRight, Code, Lightbulb, Zap, Layers } from "lucide-react"
// import { useNavigate } from "react-router-dom"

// const AboutUs = () => {
//   const [isAnimating, setIsAnimating] = useState(false)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const sectionRef = useRef(null)
//   const navigate = useNavigate()

//   // Parallax scroll effect
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   })

//   const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
//   const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, 10])
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8], [0, 1, 1, 0])

//   // Smooth spring for better animations
//   const smoothY1 = useSpring(y1, { stiffness: 100, damping: 30 })
//   const smoothY2 = useSpring(y2, { stiffness: 100, damping: 30 })
//   const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 30 })
//   const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 })

//   // Handle mouse movement for interactive elements
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const section = sectionRef.current
//       if (!section) return

//       const rect = section.getBoundingClientRect()
//       const x = e.clientX - rect.left
//       const y = e.clientY - rect.top

//       setMousePosition({ x, y })
//     }

//     window.addEventListener("mousemove", handleMouseMove)
//     return () => window.removeEventListener("mousemove", handleMouseMove)
//   }, [])

//   // Calculate mouse position for gradient effect
//   const mouseX = useMotionTemplate`${useTransform(useSpring(mousePosition.x), [0, 1000], [0, 100])}%`
//   const mouseY = useMotionTemplate`${useTransform(useSpring(mousePosition.y), [0, 1000], [0, 100])}%`

//   const handleStartProject = (e) => {
//     e.preventDefault()
//     setIsAnimating(true)
//     setTimeout(() => {
//       navigate("/contact")
//       setIsAnimating(false)
//     }, 500)
//   }

//   // Floating icons with different animation patterns
//   const FloatingIcon = ({ icon: Icon, delay, x, y, rotate, scale }) => (
//     <motion.div
//       className="absolute text-blue-500/20"
//       style={{ fontSize: scale }}
//       animate={{
//         y: [y, y + 20, y],
//         x: [x, x + 10, x],
//         rotate: [rotate, rotate + 10, rotate],
//         opacity: [0.7, 1, 0.7],
//       }}
//       transition={{
//         duration: 5,
//         delay: delay,
//         repeat: Number.POSITIVE_INFINITY,
//         repeatType: "reverse",
//       }}
//     >
//       <Icon size={scale} strokeWidth={1} />
//     </motion.div>
//   )

//   return (
//     <motion.section
//       ref={sectionRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4"
//       style={{
//         background: `radial-gradient(circle at ${mouseX} ${mouseY}, rgba(59, 130, 246, 0.1) 0%, rgba(255, 255, 255, 0) 50%)`,
//       }}
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 -z-10">
//         {/* Gradient background */}
//         <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white"></div>

//         {/* Animated shapes */}
//         <motion.div
//           className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-300 mix-blend-multiply opacity-30 blur-3xl"
//           style={{ y: smoothY1, rotate: smoothRotate, scale: smoothScale }}
//         ></motion.div>
//         <motion.div
//           className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-300 mix-blend-multiply opacity-30 blur-3xl"
//           style={{ y: smoothY2, rotate: smoothRotate, scale: smoothScale }}
//         ></motion.div>

//         {/* Grid pattern */}
//         <div className="absolute inset-0 bg-grid-blue/[0.03] bg-[length:30px_30px]"></div>

//         {/* Floating icons */}
//         <FloatingIcon icon={Code} delay={0} x={100} y={100} rotate={-10} scale={40} />
//         <FloatingIcon icon={Lightbulb} delay={1} x={window.innerWidth - 200} y={150} rotate={15} scale={50} />
//         <FloatingIcon
//           icon={Zap}
//           delay={2}
//           x={window.innerWidth / 2 - 100}
//           y={window.innerHeight - 200}
//           rotate={-5}
//           scale={45}
//         />
//         <FloatingIcon icon={Layers} delay={1.5} x={200} y={window.innerHeight - 150} rotate={10} scale={35} />
//       </div>

//       {/* Content Container */}
//       <div className="container mx-auto max-w-6xl relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Column - Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-center lg:text-left"
//           >
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.5 }}
//               className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6"
//             >
//               About Our Company
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
//             >
//               We're a dedicated{" "}
//               <motion.span
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
//                 className="relative inline-block"
//               >
//                 <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   Digital
//                 </span>
//                 <motion.span
//                   className="absolute -inset-1 rounded-lg bg-blue-100"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3, delay: 0.8 }}
//                   style={{ zIndex: 0 }}
//                 ></motion.span>
//               </motion.span>{" "}
//               <br />
//               IT Experts
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               className="text-gray-600 text-lg mb-8 max-w-lg mx-auto lg:mx-0"
//             >
//               With over a decade of experience, we blend innovation and expertise to deliver cutting-edge solutions that
//               transform businesses and drive growth in the digital landscape.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.7 }}
//             >
//               <button
//                 className="relative overflow-hidden flex items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full hover:from-blue-500 hover:to-blue-400 transition-all duration-300 group shadow-lg shadow-blue-500/20"
//                 onClick={handleStartProject}
//                 style={{ minWidth: "200px" }}
//               >
//                 <span
//                   className={`flex items-center justify-center rounded-full transition-all duration-500 ease-in-out absolute ${
//                     isAnimating ? "left-full -translate-x-12" : "left-4 bg-white"
//                   }`}
//                   style={{ width: "2rem", height: "2rem" }}
//                 >
//                   <ArrowRight
//                     className={`w-4 h-4 transition-colors duration-500 ${isAnimating ? "text-white" : "text-blue-600"}`}
//                   />
//                 </span>
//                 <span
//                   className={`transition-transform duration-500 ease-in-out ${
//                     isAnimating ? "-translate-x-8" : "translate-x-0"
//                   } pl-10 font-medium`}
//                 >
//                   Start a project
//                 </span>
//               </button>
//             </motion.div>
//           </motion.div>

//           {/* Right Column - 3D Card Grid */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="relative"
//           >
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { title: "Web Development", icon: Code, color: "bg-blue-500" },
//                 { title: "UI/UX Design", icon: Layers, color: "bg-purple-500" },
//                 { title: "Digital Strategy", icon: Lightbulb, color: "bg-yellow-500" },
//                 { title: "Cloud Solutions", icon: Zap, color: "bg-green-500" },
//               ].map((card, index) => (
//                 <motion.div
//                   key={card.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
//                   whileHover={{
//                     y: -10,
//                     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                     transition: { type: "spring", stiffness: 300, damping: 15 },
//                   }}
//                   className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center"
//                 >
//                   <div className={`w-12 h-12 ${card.color} rounded-full flex items-center justify-center mb-4`}>
//                     <card.icon className="text-white" size={20} />
//                   </div>
//                   <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
//                   <p className="text-gray-500 text-sm">
//                     Delivering exceptional solutions tailored to your business needs.
//                   </p>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Stats overlay */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 1 }}
//               className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-xl border border-gray-100 px-8 py-4 w-[90%]"
//             >
//               <div className="flex justify-between items-center">
//                 <div className="text-center">
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 2, delay: 1.2 }}
//                     className="text-2xl font-bold text-blue-600"
//                   >
//                     10+
//                   </motion.div>
//                   <div className="text-xs text-gray-500">Years Experience</div>
//                 </div>
//                 <div className="h-10 w-px bg-gray-200"></div>
//                 <div className="text-center">
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 2, delay: 1.4 }}
//                     className="text-2xl font-bold text-blue-600"
//                   >
//                     200+
//                   </motion.div>
//                   <div className="text-xs text-gray-500">Projects Completed</div>
//                 </div>
//                 <div className="h-10 w-px bg-gray-200"></div>
//                 <div className="text-center">
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 2, delay: 1.6 }}
//                     className="text-2xl font-bold text-blue-600"
//                   >
//                     50+
//                   </motion.div>
//                   <div className="text-xs text-gray-500">Team Members</div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   )
// }

// export default AboutUs
// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { ArrowRight } from "lucide-react"
// import { useNavigate } from "react-router-dom"

// const AboutUs = () => {
//   const [isAnimating, setIsAnimating] = useState(false)
//   const navigate = useNavigate()

//   const handleStartProject = (e) => {
//     e.preventDefault()
//     setIsAnimating(true)
//     setTimeout(() => {
//       navigate("/contact")
//       setIsAnimating(false)
//     }, 500)
//   }

//   return (
//     <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">
//       {/* Simple background elements */}
//       <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-yellow-300 opacity-20 blur-3xl -z-10"></div>
//       <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-300 opacity-20 blur-3xl -z-10"></div>

//       {/* Grid pattern */}
//       <div className="absolute inset-0 bg-grid-blue/[0.03] bg-[length:30px_30px] -z-10"></div>

//       <div className="container mx-auto max-w-3xl text-center">
//         {/* Centered Content */}
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//           <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
//             About Our Company
//           </div>

//           <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//             We're a dedicated{" "}
//             <span className="relative inline-block">
//               <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Digital
//               </span>
//               <span className="absolute -inset-1 rounded-lg bg-blue-100" style={{ zIndex: 0 }}></span>
//             </span>{" "}
//             <br />
//             IT Experts
//           </h1>

//           <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
//             With over a decade of experience, we blend innovation and expertise to deliver cutting-edge solutions that
//             transform businesses and drive growth in the digital landscape.
//           </p>

//           <div className="flex justify-center mb-12">
//             <button
//               className="relative overflow-hidden flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-md"
//               onClick={handleStartProject}
//               style={{ minWidth: "200px" }}
//             >
//               <span
//                 className={`flex items-center justify-center rounded-full transition-all duration-500 ease-in-out absolute ${
//                   isAnimating ? "left-full -translate-x-12" : "left-4 bg-white"
//                 }`}
//                 style={{ width: "2rem", height: "2rem" }}
//               >
//                 <ArrowRight
//                   className={`w-4 h-4 transition-colors duration-500 ${isAnimating ? "text-white" : "text-blue-600"}`}
//                 />
//               </span>
//               <span
//                 className={`transition-transform duration-500 ease-in-out ${
//                   isAnimating ? "-translate-x-8" : "translate-x-0"
//                 } pl-10 font-medium`}
//               >
//                 Start a project
//               </span>
//             </button>
//           </div>

//           {/* Centered Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="bg-white rounded-xl shadow-md border border-gray-100 px-8 py-6 max-w-xl mx-auto"
//           >
//             <div className="flex justify-between items-center">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-blue-600">10+</div>
//                 <div className="text-sm text-gray-500">Years Experience</div>
//               </div>
//               <div className="h-14 w-px bg-gray-200"></div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-blue-600">200+</div>
//                 <div className="text-sm text-gray-500">Projects Completed</div>
//               </div>
//               <div className="h-14 w-px bg-gray-200"></div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-blue-600">50+</div>
//                 <div className="text-sm text-gray-500">Team Members</div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default AboutUs









"use client"

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
    <section className="relative py-20 px-4 overflow-hidden mt-24 bg-gradient-to-b from-[#F7F7F7] via-blue-50 to-[#F7F7F7]">
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
              src="https://calendly.com/ebenezernwolisa100"
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
