"use client"
import { motion } from "framer-motion"

const CeoMessage = () => {
  return (
    <div className="bg-[#F7F7F7] pt-16 px-4 md:px-16 relative">
      <div className="max-w-5xl mx-auto">
        <div className="relative mb-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-500">From The</span> <span className="text-black">CEO's Desk</span>
          </h2>

          {/* Orange square accent */}
          
        </div>

        <motion.div
          className="bg-[#4175FC] text-white relative p-6 md:p-10 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
            <motion.div
            className="absolute -right-2 -top-6 w-12 h-12 bg-[#FE992D]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
          <p className="italic mb-6">Greetings from the CEO's desk,</p>

          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              I am honored to lead our prestigious IT firm as the CEO. Innovation, tenacity, and a steadfast dedication
              to pushing the boundaries of what's possible have characterized our journey thus far. As I reflect on our
              achievements, I am reminded of the profound impact we've had on the global landscape and the limitless
              possibilities that lie ahead.
            </p>

            <p>
              Our company's philosophy is centered on the relentless pursuit of innovation. We understand that
              stagnation is not an option in the ever-evolving field of technology. This drive has fueled our creation
              of groundbreaking products and solutions that have transformed industries and empowered our clients.
            </p>

            <p>
              The key to our success is our workforce – the creative minds and sharp minds that bring our vision to life
              daily. Their passion, creativity, and collaborative spirit propel our business forward and empower us to
              tackle even the most challenging tasks. Investing in our people will always be our top priority as we grow
              and evolve, ensuring we remain at the forefront of innovation.
            </p>

            <p>
              As we continue to grow, our commitment to our clients remains unwavering. We are here to support you every
              step of the way, providing expert guidance and personalized solutions to help you achieve your goals.
            </p>

            <p>
              Thank you for choosing TFN Solutions as your trusted technology partner. Together, we will shape the
              future of businesses and create lasting success.
            </p>

            <div className="mt-8">
              <p>Best regards,</p>
              <p>Engr. Martins Olowonjoyin</p>
              <p>CEO, TFN Solutions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CeoMessage
