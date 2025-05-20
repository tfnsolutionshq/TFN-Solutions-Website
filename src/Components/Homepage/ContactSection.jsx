// import BG from '../../assets/Images/Rectangle 3.png';
// import vector1 from '../../assets/Images/Vector 1.png';
// import { ArrowRight } from 'lucide-react';
// import { useState } from 'react';

// const ContactSection = () => {
//   const [isAnimating, setIsAnimating] = useState(false);

//   const handleButtonClick = (e) => {
//     e.preventDefault();
//     setIsAnimating(true);
//     setTimeout(() => {
//       setIsAnimating(false);
//       // Optionally, navigate or trigger modal here
//     }, 500);
//   };

//   return (
//     <section className="relative overflow-hidden h-[70vh]">
//       {/* Main container with background image and gradient overlay */}
//       <div className="absolute inset-0 z-0">
//         <div className="relative w-full h-full">
//           {/* Background image */}
//           <div className="absolute inset-0">
//             <img 
//               src={BG}
//               alt="Professional consultant" 
//               className="w-full h-full object-cover"
//             />
//           </div>
//           {/* Gradient overlay - starts at 1/3, full at 2/3 */}
//           <div 
//             className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-r from-blue-800/90 via-blue-800/100 to-blue-900/100"
//             style={{ 
//               maskImage: 'linear-gradient(to right, transparent 0%, black 33.33%)',
//               WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 33.33%)'
//             }}
//           ></div>
//         </div>
//       </div>

//       {/* Content container - unchanged */}
//       <div className="relative z-1 flex items-center justify-end h-full">
//         {/* Content area - positioned on the right side */}
//         <div className="w-full md:w-1/2 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
//           <p className="text-sm md:text-base opacity-80 mb-2">Have a project in mind or just need expert advice?</p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">We're ready to help</h2>
//           {/* Animated Button */}
//           <button
//             className="relative flex items-center bg-blue-600 text-white rounded-full py-3 px-8 w-fit hover:bg-blue-700 transition-colors duration-300 group overflow-hidden mt-6 font-medium"
//             style={{ minWidth: '180px' }}
//             onClick={handleButtonClick}
//           >
//             {/* Arrow icon that animates from left to right */}
//             <span
//               className={`flex items-center justify-center rounded-full transition-all duration-500 ease-in-out absolute ${isAnimating ? 'left-full -translate-x-12' : 'left-4 bg-white'}`}
//               style={{ width: '2rem', height: '2rem' }}
//             >
//               <ArrowRight className={`w-4 h-4 transition-colors duration-500 ${isAnimating ? 'text-white' : 'text-blue-600'}`} />
//             </span>
//             {/* Text that animates left */}
//             <span
//               className={`transition-transform duration-500 ease-in-out ${isAnimating ? '-translate-x-8' : 'translate-x-0'} pl-6`}
//             >
//               Talk to Us
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Yellow curved vector - unchanged */}
//       <div className="absolute w-[190%] -left-[25%] lg:top-48 md:top-72 top-72 z-20">
//         <img 
//           src={vector1} 
//           alt="" 
//           className="w-full h-auto object-cover"
//         />
//       </div>
//     </section>
//   );
// };

// export default ContactSection;








// "use client"

// import { useState, useRef } from "react"
// import { motion, useInView, useAnimation } from "framer-motion"
// import { ArrowRight, MessageSquare, Phone, Mail, Clock } from "lucide-react"

// const ContactSection = () => {
//   const [isAnimating, setIsAnimating] = useState(false)
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })

//   const sectionRef = useRef(null)
//   const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
//   const controls = useAnimation()

//   if (isInView) {
//     controls.start("visible")
//   }

//   const handleButtonClick = (e) => {
//     e.preventDefault()
//     setIsAnimating(true)
//     setTimeout(() => {
//       setIsAnimating(false)
//       // Optionally, navigate or trigger modal here
//     }, 500)
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormState((prev) => ({ ...prev, [name]: value }))
//   }

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12,
//       },
//     },
//   }

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//       },
//     },
//   }

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-20 overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900"
//     >
//       {/* Decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Animated circles */}
//         <motion.div
//           className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-400 opacity-10 blur-3xl"
//           animate={{
//             x: [0, 50, 0],
//             y: [0, 30, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "reverse",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-purple-400 opacity-10 blur-3xl"
//           animate={{
//             x: [0, -40, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{
//             duration: 18,
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "reverse",
//           }}
//         />

//         {/* Grid pattern */}
//         <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:40px_40px]"></div>

//         {/* Gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={controls}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//         >
//           {/* Left side - Content */}
//           <motion.div variants={containerVariants} className="space-y-8">
//             <motion.div variants={itemVariants} className="space-y-2">
//               <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
//                 Get in Touch
//               </span>
//               <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
//                 Let's Build Something <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
//                   Amazing Together
//                 </span>
//               </h2>
//               <p className="text-blue-200 max-w-md">
//                 Have a project in mind or just need expert advice? Our team is ready to help you transform your ideas
//                 into reality.
//               </p>
//             </motion.div>

//             <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <motion.div
//                 variants={cardVariants}
//                 whileHover={{ y: -5, transition: { duration: 0.2 } }}
//                 className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
//               >
//                 <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
//                   <Phone className="w-5 h-5 text-blue-300" />
//                 </div>
//                 <h3 className="text-white font-semibold mb-2">Call Us</h3>
//                 <p className="text-blue-200 text-sm">
//                   US: (+02 098 0381)
//                   <br />
//                   NG: (+234 708 098 0381)
//                 </p>
//               </motion.div>

//               <motion.div
//                 variants={cardVariants}
//                 whileHover={{ y: -5, transition: { duration: 0.2 } }}
//                 className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
//               >
//                 <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
//                   <Mail className="w-5 h-5 text-blue-300" />
//                 </div>
//                 <h3 className="text-white font-semibold mb-2">Email Us</h3>
//                 <p className="text-blue-200 text-sm">
//                   support@itsolutions.us
//                   <br />
//                   info@itsolutions.us
//                 </p>
//               </motion.div>

//               <motion.div
//                 variants={cardVariants}
//                 whileHover={{ y: -5, transition: { duration: 0.2 } }}
//                 className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
//               >
//                 <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
//                   <Clock className="w-5 h-5 text-blue-300" />
//                 </div>
//                 <h3 className="text-white font-semibold mb-2">Working Hours</h3>
//                 <p className="text-blue-200 text-sm">
//                   Monday - Friday: 9am - 5pm
//                   <br />
//                   Weekend: By appointment
//                 </p>
//               </motion.div>

//               <motion.div
//                 variants={cardVariants}
//                 whileHover={{ y: -5, transition: { duration: 0.2 } }}
//                 className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
//               >
//                 <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
//                   <MessageSquare className="w-5 h-5 text-blue-300" />
//                 </div>
//                 <h3 className="text-white font-semibold mb-2">Live Chat</h3>
//                 <p className="text-blue-200 text-sm">
//                   Available 24/7
//                   <br />
//                   Response time: ~5 minutes
//                 </p>
//               </motion.div>
//             </motion.div>
//           </motion.div>

//           {/* Right side - Form */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl"
//           >
//             <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
//             <form className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-1">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formState.name}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
//                   placeholder="John Doe"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-1">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formState.email}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
//                   placeholder="john@example.com"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-1">
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formState.message}
//                   onChange={handleInputChange}
//                   rows="4"
//                   className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
//                   placeholder="Tell us about your project..."
//                 ></textarea>
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="relative flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full py-3 px-8 w-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group overflow-hidden font-medium"
//                 onClick={handleButtonClick}
//               >
//                 {/* Arrow icon that animates from left to right */}
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
//                 {/* Text that animates left */}
//                 <span
//                   className={`transition-transform duration-500 ease-in-out ${
//                     isAnimating ? "-translate-x-8" : "translate-x-0"
//                   } pl-6`}
//                 >
//                   Send Message
//                 </span>
//               </motion.button>

//               <p className="text-xs text-blue-200/70 text-center mt-4">
//                 We'll get back to you within 24 hours. Your information is protected by our privacy policy.
//               </p>
//             </form>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Curved shape at bottom */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
//           <path
//             d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V115.5H0V51.4091Z"
//             fill="white"
//           />
//         </svg>
//       </div>
//     </section>
//   )
// }

// export default ContactSection











// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { ArrowRight } from "lucide-react"

// const ContactSection = () => {
//   const [isAnimating, setIsAnimating] = useState(false)
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })

//   const handleButtonClick = (e) => {
//     e.preventDefault()
//     setIsAnimating(true)
//     setTimeout(() => {
//       setIsAnimating(false)
//       // Optionally, navigate or trigger modal here
//     }, 500)
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormState((prev) => ({ ...prev, [name]: value }))
//   }

//   return (
//     <section className="relative py-24 overflow-hidden">
//       {/* Background with subtle gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>

//       {/* Decorative elements */}
//       <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600 opacity-90"></div>
//       <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden">
//         <motion.div
//           className="absolute -right-24 top-1/4 w-96 h-96 rounded-full bg-blue-500 mix-blend-multiply opacity-70 blur-3xl"
//           animate={{
//             y: [0, 50, 0],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "reverse",
//           }}
//         />
//         <motion.div
//           className="absolute -right-24 bottom-1/4 w-80 h-80 rounded-full bg-indigo-600 mix-blend-multiply opacity-70 blur-3xl"
//           animate={{
//             y: [0, -30, 0],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "reverse",
//           }}
//         />
//       </div>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Left side - Simple content */}
//           <div className="flex flex-col justify-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="max-w-md"
//             >
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">
//                 Let's start a<span className="text-blue-600"> conversation</span>
//               </h2>
//               <p className="text-gray-600 mb-8">
//                 Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you as soon
//                 as possible.
//               </p>

//               <div className="flex items-center space-x-6 text-gray-500">
//                 <span>support@itsolutions.us</span>
//                 <span className="h-4 w-px bg-gray-300"></span>
//                 <span>+1 (234) 567-8901</span>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right side - Simple form */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-xl shadow-lg p-8 relative z-10"
//           >
//             <form className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formState.name}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
//                   placeholder="Your name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formState.email}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
//                   placeholder="Your email"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formState.message}
//                   onChange={handleInputChange}
//                   rows="4"
//                   className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
//                   placeholder="How can we help you?"
//                 ></textarea>
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="relative flex items-center justify-center bg-blue-600 text-white rounded-lg py-3 px-8 w-full hover:bg-blue-700 transition-all duration-300 group overflow-hidden font-medium"
//                 onClick={handleButtonClick}
//               >
//                 {/* Arrow icon that animates from left to right */}
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
//                 {/* Text that animates left */}
//                 <span
//                   className={`transition-transform duration-500 ease-in-out ${
//                     isAnimating ? "-translate-x-8" : "translate-x-0"
//                   } pl-6`}
//                 >
//                   Send Message
//                 </span>
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ContactSection









"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone } from "lucide-react"
import BG from '../../assets/Images/image 11.png'

const ContactSection = () => {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleButtonClick = (e) => {
    e.preventDefault()
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
      // Optionally, navigate or trigger modal here
    }, 500)
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
                  support@itsolutions.us
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                <Phone className="h-5 w-5 text-blue-300" />
              </div>
              <div>
                <p className="text-sm text-blue-200">Call Us</p>
                <a href="tel:+12345678901" className="text-white hover:text-blue-300 transition-colors">
                  +1 (234) 567-8901
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
              className={`flex items-center justify-center rounded-full transition-all duration-500 ease-in-out absolute ${
                isAnimating ? "left-full -translate-x-12" : "left-4 bg-blue-600"
              }`}
              style={{ width: "2rem", height: "2rem" }}
            >
              <ArrowRight
                className={`w-4 h-4 transition-colors duration-500 ${isAnimating ? "text-blue-900" : "text-white"}`}
              />
            </span>
            {/* Text that animates left */}
            <span
              className={`transition-transform duration-500 ease-in-out ${
                isAnimating ? "-translate-x-8" : "translate-x-0"
              } pl-6`}
            >
              Talk to Us
            </span>
          </motion.button>
        </motion.div>
      </div>

    </section>
  )
}

export default ContactSection
