// import { useState, useEffect } from 'react';
// import Image from '../../assets/Images/image 3.png'

// export default function ApproachSection() {
//     // Remove all sliding-related state and effects
//     const steps = [
//         {
//             id: 1,
//             number: "01",
//             title: "Analysis",
//             description: "We begin by thoroughly analyzing your project requirements to understand your unique needs and challenges, laying the groundwork for success."
//         },
//         {
//             id: 2,
//             number: "02",
//             title: "Custom Design",
//             description: "Leveraging our expertise, we craft tailored solutions designed to meet your specific goals, ensuring optimal results."
//         },
//         {
//             id: 3,
//             number: "03",
//             title: "Implementation",
//             description: "Our team executes with precision, utilizing industry best practices to deliver flawless installations and integrations."
//         },
//         {
//             id: 4,
//             number: "04",
//             title: "Support",
//             description: "Proactive maintenance and dedicated assistance to ensure your systems remain operational, strengthening your operational satisfaction."
//         },
//     ];

//     const [textState, setTextState] = useState({
//         part1: true, // "Our Approach to"
//         part2: false, // "delivering"
//         part3: false  // "Excellence"
//     });

//     useEffect(() => {
//         const animationInterval = setInterval(() => {
//             setTextState(prev => {
//                 if (prev.part1) return { part1: false, part2: true, part3: false };
//                 if (prev.part2) return { part1: false, part2: false, part3: true };
//                 return { part1: true, part2: false, part3: false };
//             });
//         }, 2000);
//         return () => clearInterval(animationInterval);
//     }, []);

//     return (
//         <section className="py-10 px-4 bg-[var(--background-primary)]">
//             <div className="max-w-5xl mx-auto">
//                 {/* Header section - now animated and styled like ServiceSection */}
//                 <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
//                     <div className="flex flex-col items-start w-full md:w-1/3 mb-6 md:mb-0">
//                         <div className="flex items-center">
//                             <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2 animate-blink"></span>
//                             <span className="text-sm md:text-lg font-medium text-gray-700">Approach</span>
//                         </div>
//                     </div>
//                     <div className="w-full md:w-1/2 flex flex-col items-start md:items-end">
//                         {/* Animated heading */}
//                         <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight">
//                             <span className={textState.part1 ? 'font-bold text-black' : 'font-normal text-gray-400'}>
//                                 Our Approach to
//                             </span>{' '}
//                             <span className={textState.part2 ? 'font-bold text-black' : 'font-normal text-gray-400'}>
//                                 delivering
//                             </span>{' '}
//                             <span className={textState.part3 ? 'font-bold text-black' : 'font-normal text-gray-400'}>
//                                 Excellence
//                             </span>
//                         </h2>
//                     </div>
//                 </div>
//                 {/* Main image - single static image with rounded corners */}
//                 <div className="mb-10">
//                     <div className="w-full overflow-hidden rounded-2xl">
//                         <img
//                             src={Image}
//                             alt="Team collaboration"
//                             className="w-full h-56 md:h-64 object-cover"
//                         />
//                     </div>
//                 </div>

//                 {/* Replace slider with static grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {steps.map((step) => (
//                         <div 
//                             key={step.id}
//                             className="cursor-pointer transition-all duration-300 opacity-80 hover:opacity-100"
//                         >
//                             <p className="text-sm text-gray-400 mb-1">({step.number})</p>
//                             <h3 className="text-xl font-medium mb-3 text-blue-700">
//                                 {step.title}
//                             </h3>
//                             <hr />
//                             <p className="text-sm mt-3 text-gray-600">
//                                 {step.description}
//                             </p>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Remove the entire slider container section */}
//             </div>
//         </section>
//     );
// }









"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "../../assets/Images/image 3.png"

export default function ApproachSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [activeStep, setActiveStep] = useState(1)

  // Steps data - keeping the exact same content
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Analysis",
      description:
        "We begin by thoroughly analyzing your project requirements to understand your unique needs and challenges, laying the groundwork for success.",
    },
    {
      id: 2,
      number: "02",
      title: "Custom Design",
      description:
        "Leveraging our expertise, we craft tailored solutions designed to meet your specific goals, ensuring optimal results.",
    },
    {
      id: 3,
      number: "03",
      title: "Implementation",
      description:
        "Our team executes with precision, utilizing industry best practices to deliver flawless installations and integrations.",
    },
    {
      id: 4,
      number: "04",
      title: "Support",
      description:
        "Proactive maintenance and dedicated assistance to ensure your systems remain operational, strengthening your operational satisfaction.",
    },
  ]

  // Animated text state
  const [textState, setTextState] = useState({
    part1: true, // "Our Approach to"
    part2: false, // "delivering"
    part3: false, // "Excellence"
  })

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setTextState((prev) => {
        if (prev.part1) return { part1: false, part2: true, part3: false }
        if (prev.part2) return { part1: false, part2: false, part3: true }
        return { part1: true, part2: false, part3: false }
      })
    }, 2000)
    return () => clearInterval(animationInterval)
  }, [])

  // Auto-rotate through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === 4 ? 1 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-12 relative overflow-hidden bg-gradient-to-b from-[var(--background-primary)] to-[var(--background-primary)]"
    >
      {/* Background elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAzNGgtMnYtNGgydjR6bTAtNnYtNGgtMnY0aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      </div> */}

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header with animated text */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center mb-4"
          >
            <div className="h-px w-8 bg-blue-700 mr-3"></div>
            <span className="text-blue-700 font-medium text-sm uppercase tracking-widest">Our Process</span>
            <div className="h-px w-8 bg-blue-700 ml-3"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="block text-[var(--text-primary)]">Our Approach to Delivery Excellence</span>
            {/* {textState.part2 && <span className="block text-blue-400">Delivering</span>}
            {textState.part3 && (
              <span className="block bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Excellence
              </span>
            )} */}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            A systematic methodology that ensures consistent quality and exceptional results for every project we
            undertake.
          </motion.p>
        </div>

        {/* Main content - Image and interactive steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with overlay */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 mix-blend-multiply"></div>
            <img
              src={Image}
              alt="Team collaboration"
              className="w-full h-auto object-cover"
              style={{ minHeight: "400px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-20 h-20 rounded-full bg-blue-100/20 backdrop-blur-sm flex items-center justify-center"
            >
              <div className="text-white font-bold text-xl">10+</div>
              <div className="text-white/80 text-xs absolute -bottom-6 w-24 text-center">Years Experience</div>
            </motion.div>
          </motion.div>

          {/* Right side - Interactive steps */}
          <div>
            <div className="space-y-8">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                  transition={{ duration: 0.6, delay: 0.2 + step.id * 0.1 }}
                  className={`relative cursor-pointer group ${activeStep === step.id ? "" : "opacity-70"}`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="flex items-start">
                    {/* Step number with animated border */}
                    <div className="relative mr-6">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                          activeStep === step.id
                            ? "border-blue-500 text-blue-500"
                            : "border-gray-700 text-gray-400 group-hover:border-gray-500 group-hover:text-gray-300"
                        }`}
                      >
                        <span className="text-lg font-bold">{step.number}</span>
                      </div>
                      {/* Connecting line */}
                      {step.id !== 4 && (
                        <div
                          className={`absolute top-14 left-1/2 w-px h-12 -translate-x-1/2 transition-all duration-500 ${
                            activeStep === step.id || activeStep === step.id + 1
                              ? "bg-blue-500"
                              : "bg-gray-700 group-hover:bg-gray-500"
                          }`}
                        ></div>
                      )}
                    </div>

                    {/* Step content */}
                    <div className="flex-1 pt-2">
                      <h3
                        className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                          activeStep === step.id ? "text-[var(--text-primary)]" : "text-gray-300 group-hover:text-[var(--text-secondary)]"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`transition-all duration-500 ${
                          activeStep === step.id
                            ? "text-[var(--text-primary)] max-h-40 opacity-100"
                            : "text-gray-400 max-h-0 opacity-0 md:max-h-40 md:opacity-100"
                        } overflow-hidden`}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Indicator dot */}
                    <div
                      className={`absolute top-3 left-7 w-0 h-0 transition-all duration-500 ${
                        activeStep === step.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="relative">
                        <div className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-blue-500 animate-ping opacity-75"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Step navigation dots */}
            <div className="flex justify-center mt-12 space-x-2">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeStep === step.id ? "bg-blue-500 w-6" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to step ${step.id}: ${step.title}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
