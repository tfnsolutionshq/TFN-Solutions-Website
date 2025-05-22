// import { useState, useEffect } from 'react';
// import ExperienceImg from '../../assets/Images/Image 5.png';

// const AboutSection = () => {
//   // Initial counter values
//   const [counters, setCounters] = useState([
//     { id: 1, value: 0, target: 5000, prefix: '+', display: '5K', title: 'Completed Projects' },
//     { id: 2, value: 0, target: 300, prefix: '+', display: '300', title: 'Happy Clients' },
//     { id: 3, value: 0, target: 10, prefix: '+', display: '10', title: 'Years of digital experience' },
//     { id: 4, value: 0, target: 30, prefix: '+', display: '30', title: 'Dedicated team member' },
//   ]);

//   useEffect(() => {
//     // Start the counter animation when component mounts
//     const duration = 2000; // 2 seconds for the animation
//     const interval = 20; // Update every 20ms for smooth animation
    
//     const timer = setInterval(() => {
//       setCounters(prevCounters => {
//         // Check if all counters have reached their targets
//         const allDone = prevCounters.every(counter => counter.value >= counter.target);
        
//         if (allDone) {
//           clearInterval(timer);
//           return prevCounters;
//         }
        
//         // Update each counter with a smooth increment
//         return prevCounters.map(counter => {
//           if (counter.value >= counter.target) {
//             return counter; // Already reached target
//           }
          
//           // Calculate increment based on target value and remaining time
//           const increment = counter.target / (duration / interval);
//           const newValue = Math.min(counter.value + increment, counter.target);
          
//           return {
//             ...counter,
//             value: newValue,
//           };
//         });
//       });
//     }, interval);
    
//     // Clean up the interval on component unmount
//     return () => clearInterval(timer);
//   }, []); // Empty dependency array ensures this runs only once on mount

//   return (
//     <div className="py-12">
//       <div className="max-w-5xl mx-auto px-4 ">
//         {/* About Header with Orange Dot */}
//         <div className="flex items-center mb-0">
//           <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
//           <span className="text-sm font-medium">About</span>
//         </div>
        
//         {/* Main About Content */}
//         <div className="flex flex-col justify-between md:flex-row items-start mb-16 gap-16">
//           {/* Placeholder Circle/Image */}
//           <div className="w-full md:w-1/3 mt-8 relative">
//             <div className="bg-gray-200 rounded-full aspect-[2/1] w-full"></div>
//             <img src={ExperienceImg} className='rounded-full w-full h-full absolute bottom-0 top-3 left-3' alt="" />
//           </div>
          
//           {/* Text Content */}
//           <div className="w-full md:w-2/3 ">
//             <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
//               With 10 years of experience and a passion for creativity, our team of experts specializes in <span className="text-gray-400">crafting unique brand experiences that resonate with audiences and drive results.</span>
//             </h2>
//           </div>
//         </div>
        
//         {/* Counters Section */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//           {counters.map((counter) => (
//             <div key={counter.id} className="text-center">
//               <h3 className="text-3xl md:text-4xl font-bold text-black mb-1">
//                 <span className="text-blue-500">{counter.prefix}</span>
//                 {counter.value >= counter.target ? counter.display : Math.floor(counter.value)}
//               </h3>
//               <p className="text-xs text-gray-500">
//                 {counter.title}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;







// import { useState, useEffect, useRef } from "react"
// import { motion, useInView } from "framer-motion"

// const AboutSection = () => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.3 })

//   // Counter data
//   const counters = [
//     { id: 1, target: 5000, display: "5K", title: "Completed Projects" },
//     { id: 2, target: 300, display: "300", title: "Happy Clients" },
//     { id: 3, target: 10, display: "10", title: "Years Experience" },
//     { id: 4, target: 30, display: "30", title: "Team Members" },
//   ]

//   return (
//     <section className="py-16 bg-[#F7F7F7]" ref={ref}>
//       <div className="max-w-5xl mx-auto px-4">
//         {/* Section Header */}
//         <div className="flex items-center mb-4">
//           <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
//           <span className="text-sm font-medium text-gray-600">About Us</span>
//         </div>

//         {/* Main Content */}
//         <div className="flex flex-col md:flex-row gap-12 mb-16">
//           {/* Image */}
//           <motion.div
//             className="w-full md:w-2/5"
//             initial={{ opacity: 0, x: -20 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="relative">
//               <div className="w-full aspect-[4/3] rounded-2xl bg-blue-100"></div>
//               <div
//                 className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl overflow-hidden"
//                 style={{
//                   backgroundImage: `url('/image 10.png')`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               ></div>
//             </div>
//           </motion.div>

//           {/* Text Content */}
//           <motion.div
//             className="w-full md:w-3/5"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
//               With 10 years of experience and a passion for creativity
//             </h2>
//             <p className="text-gray-600 text-lg mb-6">
//               Our team of experts specializes in crafting unique brand experiences that resonate with audiences and
//               drive results.
//             </p>
//             <p className="text-gray-500">
//               We combine strategic thinking with technical expertise to deliver solutions that help businesses thrive in
//               the digital landscape. Our collaborative approach ensures that every project we undertake is tailored to
//               meet the specific needs and goals of our clients.
//             </p>
//           </motion.div>
//         </div>

//         {/* Counters */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {counters.map((counter, index) => (
//             <motion.div
//               key={counter.id}
//               className="text-center p-6 bg-gray-50 rounded-xl"
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
//             >
//               <CounterAnimation target={counter.target} display={counter.display} isInView={isInView} />
//               <p className="text-sm text-gray-500 mt-2">{counter.title}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// // Counter animation component
// const CounterAnimation = ({ target, display, isInView }) => {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     if (!isInView) return

//     let start = 0
//     const end = Math.min(target, 100) // Cap animation at 100 for smoother animation

//     // If target is large, we'll animate to a smaller number for smoothness
//     const duration = 2000
//     const increment = end / 40

//     // Don't start if already at target
//     if (count === end) return

//     const timer = setInterval(() => {
//       start += increment
//       setCount(Math.min(Math.floor(start), end))

//       if (start >= end) clearInterval(timer)
//     }, 50)

//     return () => clearInterval(timer)
//   }, [isInView, target, count])

//   return (
//     <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
//       {isInView ? display : "0"}
//       <span className="text-blue-600">+</span>
//     </h3>
//   )
// }

// export default AboutSection








"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Counter data
  const counters = [
    { id: 1, target: 5000, display: "5K", title: "Completed Projects" },
    { id: 2, target: 300, display: "300", title: "Happy Clients" },
    { id: 3, target: 10, display: "10", title: "Years Experience" },
    { id: 4, target: 30, display: "30", title: "Team Members" },
  ]

  return (
    <section className="py-16 bg-[#F7F7F7]" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center mb-4">
          <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
          <span className="text-sm font-medium text-gray-600">About Us</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          {/* Image */}
          <motion.div
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-2xl bg-blue-100"></div>
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: `url('/image 10.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full md:w-3/5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              With 10 years of experience and a passion for creativity
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Our team of experts specializes in crafting unique brand experiences that resonate with audiences and
              drive results.
            </p>
            <p className="text-gray-500">
              We combine strategic thinking with technical expertise to deliver solutions that help businesses thrive in
              the digital landscape. Our collaborative approach ensures that every project we undertake is tailored to
              meet the specific needs and goals of our clients.
            </p>
          </motion.div>
        </div>

        {/* Counters */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {counters.map((counter, index) => (
            <motion.div
              key={counter.id}
              className="text-center p-6 bg-gray-50 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <CounterAnimation target={counter.target} display={counter.display} isInView={isInView} />
              <p className="text-sm text-gray-500 mt-2">{counter.title}</p>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  )
}

// Updated Counter animation component
const CounterAnimation = ({ target, display, isInView }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounter()
          setHasAnimated(true)
        }
      },
      { threshold: 0.1 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [hasAnimated])

  const animateCounter = () => {
    const duration = 2000 // Animation duration in ms
    const start = 0
    const end = target > 100 ? 100 : target // Cap at 100 for smoother animation on large numbers
    const incrementTime = Math.max(10, duration / end) // Time between increments
    
    let current = start
    const timer = setInterval(() => {
      current += 1
      setCount(Math.min(current, end))
      if (current >= end) {
        clearInterval(timer)
      }
    }, incrementTime)

    return () => clearInterval(timer)
  }

  return (
    <div ref={counterRef}>
      <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
        {hasAnimated ? (target > 100 ? display : count) : "0"}
        <span className="text-blue-600">+</span>
      </h3>
    </div>
  )
}

export default AboutSection