// "use client"
// import { motion } from "framer-motion"

// const CeoMessage = () => {
//   return (
//     <div className="bg-[var(--background-primary)] pt-4 px-4 md:px-16 relative">
//       <div className="max-w-5xl mx-auto">
//         <div className="relative mb-8">
//           <h2 className="text-4xl md:text-5xl font-bold">
//             <span className="text-[var(text-primary)]">From The</span> <span className="text-[var(--text-secondary)]">CEO's Desk</span>
//           </h2>
//           {/* Orange square accent */}
          
//         </div>

//         <motion.div
//           className="bg-[#4175FC] text-white relative p-6 md:p-10 "
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//             <motion.div
//             className="absolute -right-2 -top-6 w-12 h-12 bg-[#FE992D]"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//           />
//           <p className="italic mb-6">Greetings from the CEO's desk,</p>

//           <div className="space-y-4 text-sm md:text-base leading-relaxed">
//             <p>
//               I am honored to lead our prestigious IT firm as the CEO. Innovation, tenacity, and a steadfast dedication
//               to pushing the boundaries of what's possible have characterized our journey thus far. As I reflect on our
//               achievements, I am reminded of the profound impact we've had on the global landscape and the limitless
//               possibilities that lie ahead.
//             </p>

//             <p>
//               Our company's philosophy is centered on the relentless pursuit of innovation. We understand that
//               stagnation is not an option in the ever-evolving field of technology. This drive has fueled our creation
//               of groundbreaking products and solutions that have transformed industries and empowered our clients.
//             </p>

//             <p>
//               The key to our success is our workforce – the creative minds and sharp minds that bring our vision to life
//               daily. Their passion, creativity, and collaborative spirit propel our business forward and empower us to
//               tackle even the most challenging tasks. Investing in our people will always be our top priority as we grow
//               and evolve, ensuring we remain at the forefront of innovation.
//             </p>

//             <p>
//               As we continue to grow, our commitment to our clients remains unwavering. We are here to support you every
//               step of the way, providing expert guidance and personalized solutions to help you achieve your goals.
//             </p>

//             <p>
//               Thank you for choosing TFN Solutions as your trusted technology partner. Together, we will shape the
//               future of businesses and create lasting success.
//             </p>

//             <div className="mt-8">
//               <p>Best regards,</p>
//               <p>Engr. Martins Olowonjoyin</p>
//               <p>CEO, TFN Solutions</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// export default CeoMessage






"use client"
import { motion } from "framer-motion"

const CompanyValues = () => {
  return (
    <div className="bg-[var(--background-primary)] px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Main Header */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-[var(--text-primary)]">Our</span>{' '}
            <span className="text-[var(--text-secondary)]">Core Values</span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-[#FE992D]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </motion.div>

        {/* Vision & Mission - Side by Side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20">
          {/* Vision Card */}
          <motion.div
            className="flex-1 bg-gradient-to-br from-[#4175FC] to-[#3A60CC] text-white rounded-xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-5 h-5 bg-[#FE992D] rounded-full mr-4"></div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-lg leading-relaxed">
              To become a globally recognized technology leader that builds accessible, impactful, and inclusive digital
              solutions — empowering individuals, businesses, and institutions of all sizes to thrive in a connected world.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="flex-1 bg-white rounded-xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-5 h-5 bg-[#FE992D] rounded-full mr-4"></div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-lg text-[var(--text-primary)] leading-relaxed">
              Our mission at TFN Solutions is to simplify technology and make it a powerful enabler of growth. We design
              scalable, secure, and affordable digital solutions that help our clients work smarter, connect better, and
              grow stronger — regardless of size or sector.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="text-[#4175FC]">Choose TFN Solutions?</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We build lasting partnerships grounded in innovation, integrity, and impact.
            </p>
          </motion.div>

          {/* Value Propositions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Client-Centric Approach",
                content: "We listen first, then build. Every solution is tailored to your unique goals and growth path."
              },
              {
                title: "End-to-End Expertise",
                content: "Full suite of services under one roof — from development to cybersecurity to cloud infrastructure."
              },
              {
                title: "Innovation-Driven",
                content: "We solve complex problems with smart, scalable solutions that keep you ahead of the curve."
              },
              {
                title: "Secure & Reliable",
                content: "Security and reliability are at the core of everything we design and deploy."
              },
              {
                title: "Scalable Solutions",
                content: "Solutions built to grow with your business, from startup to enterprise scale."
              },
              {
                title: "Proven Track Record",
                content: "Trusted by institutions and brands across diverse sectors with transformative results."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-[#4175FC]/10 rounded-full flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-[#FE992D] rounded-full"></div>
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyValues