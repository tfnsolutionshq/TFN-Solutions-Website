"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import TestImage from "../../assets/Images/man.jpg"
import TestImage2 from "../../assets/Images/man2.jpg"
import TestImage3 from "../../assets/Images/man3.jpg"
import TestImage4 from "../../assets/Images/woman.jpg"
import TestImage5 from "../../assets/Images/woman2.jpg"
import Unizik from  '../../assets/sponsors/unizik.png'
import Flutterwave from  '../../assets/sponsors/flutterwave.png'
import Crystal from  '../../assets/sponsors/crystal.png'
import Afriwok from  '../../assets/sponsors/afriwok.png'
import Google from  '../../assets/sponsors/google.png'
import Credo from  '../../assets/sponsors/credo.png'

const testimonials = [
  {
    id: 1,
    quote: "Our business has seen incredible growth since partnering with this team. They really know their stuff!",
    name: "Kathryn Murphy",
    position: "Content Writer",
    image: TestImage5,
  },
  {
    id: 2,
    quote: "Our business has seen incredible growth since partnering with this team. They really know their stuff!",
    name: "Harry Russell",
    position: "Web Developer",
    image: TestImage,
  },
  {
    id: 3,
    quote: "Our business has seen incredible growth since partnering with this team. They really know their stuff!",
    name: "Holiday Hasan",
    position: "CEO, Remote Digital",
    image: TestImage2,
  },
  {
    id: 4,
    quote: "The team delivered our project ahead of schedule and exceeded all our expectations. Highly recommended!",
    name: "James Wilson",
    position: "Marketing Director",
    image: TestImage3,
  },
  {
    id: 5,
    quote: "Working with this team transformed our digital presence completely. Our conversion rates have doubled!",
    name: "Sarah Chen",
    position: "Product Manager",
    image: TestImage4,
  },
]

const clientLogos = [
  {
    id: 1,
    name: "University",
    logo: Unizik,
  },
  {
    id: 2,
    name: "CrystalBricks",
    logo: Crystal,
  },
  {
    id: 3,
    name: "Flutterwave",
    logo: Flutterwave,
  },
  {
    id: 4,
    name: "Afriwok",
    logo: Afriwok,
  },
  {
    id: 5,
    name: "Google",
    logo: Google,
  },
  {
    id: 6,
    name: "Credo",
    logo: Credo,
  },
]

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [visibleCount, setVisibleCount] = useState(3)
  const containerRef = useRef(null)

  // Update visible testimonials count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)
    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext()
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex, isAnimating])

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - visibleCount : prevIndex - 1))
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - visibleCount ? 0 : prevIndex + 1))
  }

  // Get visible testimonials
  const getVisibleTestimonials = () => {
    const visibleItems = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length
      visibleItems.push(testimonials[index])
    }
    return visibleItems
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    }),
  }

  return (
    <section className="pt-16 pb-10 bg-[var(--background-primary)]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-sm font-medium">Testimonial</span>
              <div className="w-2 h-2 rounded-full bg-orange-500 ml-2"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Hear What Our Clients
              <br />
              <span className="text-gray-400">Have to Say.</span>
            </h2>
          </div>

          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <button
              onClick={handlePrev}
              className="p-2 border bg-white rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 border bg-white rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div ref={containerRef} className="relative overflow-hidden">
          <AnimatePresence initial={false} mode="wait" custom={direction} onExitComplete={() => setIsAnimating(false)}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pr-16 md:pr-48"
            >
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  custom={direction}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm"
                >
                  <div className="mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div className="mb-4 text-gray-500">
                    <span className="text-3xl font-serif text-gray-300">"</span>
                    <p className="mt-1 text-[var(--text-secondary)]">{testimonial.quote}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Client Logos Section - Redesigned */}
        <div className="mt-28 max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
              <span className="text-sm font-medium text-[var(--text-primary)]">Clients/Partners</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-center">
              We build for <span className="text-[var(--text-secondary)]">Startup and</span> <span className="text-black font-normal"></span> <span className="text-gray-400 font-normal">enterprise businesses</span>
            </h3>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {clientLogos.map((client) => (
              <motion.div
                key={client.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className=" hover:grayscale-0 transition-all duration-300"
              >
                <img src={client.logo || "/placeholder.svg"} alt={client.name} className="h-10 md:h-12 w-auto" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
