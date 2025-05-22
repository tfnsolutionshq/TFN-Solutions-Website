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
    <section className="py-16 bg-[var(--background-primary)]" ref={ref}>
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