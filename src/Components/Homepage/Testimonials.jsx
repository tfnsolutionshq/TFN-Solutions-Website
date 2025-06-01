import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "Our business has seen incredible growth since partnering with this team. They really know their stuff!",
    name: "Kathryn Murphy",
    position: "Content Writer",
    image: "https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/woman.jpg",
  },
  {
    id: 2,
    quote: "We were impressed with the level of expertise and professionalism. The results speak for themselves!",
    name: "Harry Russell",
    position: "Web Developer",
    image: "https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/man.jpg",
  },
  {
    id: 3,
    quote: "All we wanted was a simple website, and they delivered beyond our expectations. A true partner!",
    name: "Holiday Hasan",
    position: "CEO, Remote Digital",
    image: "https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/man2.jpg",
  },
  {
    id: 4,
    quote: "The team delivered our project ahead of schedule and exceeded all our expectations. Highly recommended!",
    name: "James Wilson",
    position: "Marketing Director",
    image: "https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/man3.jpg",
  },
  {
    id: 5,
    quote: "Working with this team transformed our digital presence completely. Our conversion rates have doubled!",
    name: "Sarah Chen",
    position: "Product Manager",
    image: "https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/woman2.jpg",
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
      </div>
    </section>
  )
}

export default TestimonialSection
