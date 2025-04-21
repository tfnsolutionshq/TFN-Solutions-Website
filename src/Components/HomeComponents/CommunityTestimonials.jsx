import { useState, useEffect, useCallback, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import TestimonialQuote from "../../assets/Icons/Testimonial.svg"

const CommunityTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Joining the UNIZIK Alumni Network was a turning point for me. The connections and mentorship I received helped me launch my career as an entrepreneur.",
      author: "Jane Doe",
      year: "'15",
      position: "Tech Entrepreneur",
      image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(17).png?raw=true"
    },
    {
      id: 2,
      quote: "The alumni network has been instrumental in rekindling old friendships and fostering new professional relationships. It's amazing to see how far we've all come and to celebrate each other's achievements.",
      author: "John Smith",
      year: "'12",
      position: "Tech Entrepreneur",
      image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(17).png?raw=true"
    },
    {
      id: 3,
      quote: "As a proud alumna of UNIZIK, I appreciate the opportunities to give back through mentorship programs. It's fulfilling to see the next generation benefit from our shared experiences.",
      author: "Dr. Ada Umeh",
      year: "'05",
      position: "Tech Entrepreneur",
      image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(17).png?raw=true"
    },
    {
      id: 4,
      quote: "As a proud alumna of UNIZIK, I appreciate the opportunities to give back through mentorship programs. It's fulfilling to see the next generation benefit from our shared experiences.",
      author: "Dr. Ada Umeh",
      year: "'05",
      position: "Tech Entrepreneur",
      image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(17).png?raw=true"
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState([])
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const sliderRef = useRef(null)
  const [slideTransition, setSlideTransition] = useState(true)
  const autoSlideInterval = useRef(null)

  const calculateVisibleCount = useCallback(() => {
    if (window.innerWidth >= 1024) return 3
    if (window.innerWidth >= 768) return 2
    return 1
  }, [])

  const updateVisibleTestimonials = useCallback(() => {
    const visibleCount = calculateVisibleCount()
    const startIndex = currentIndex
    const endIndex = (startIndex + visibleCount) % testimonials.length
    
    let newVisibleTestimonials = []
    if (endIndex > startIndex) {
      newVisibleTestimonials = testimonials.slice(startIndex, endIndex)
    } else {
      newVisibleTestimonials = [...testimonials.slice(startIndex), ...testimonials.slice(0, endIndex)]
    }
    
    while (newVisibleTestimonials.length < visibleCount && testimonials.length > 0) {
      newVisibleTestimonials.push(testimonials[(endIndex + newVisibleTestimonials.length) % testimonials.length])
    }
    
    setVisibleTestimonials(newVisibleTestimonials)
  }, [currentIndex, testimonials, calculateVisibleCount])

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))
    resetAutoSlide()
  }

  const goToNext = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))
    resetAutoSlide()
  }

  const startAutoSlide = () => {
    autoSlideInterval.current = setInterval(goToNext, 5000)
  }

  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval.current)
    startAutoSlide()
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const difference = touchStart - touchEnd
    if (difference > 50) goToNext()
    if (difference < -50) goToPrevious()
    setTouchStart(null)
    setTouchEnd(null)
  }

  useEffect(() => {
    updateVisibleTestimonials()
    startAutoSlide()
    
    const handleResize = () => {
      updateVisibleTestimonials()
    }
    
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearInterval(autoSlideInterval.current)
    }
  }, [updateVisibleTestimonials])

  // Auto-slide effect
  useEffect(() => {
    // Clear any previous interval
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);

    autoSlideInterval.current = setInterval(() => {
      setSlideTransition(true);
      setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000); // 4 seconds per slide

    return () => clearInterval(autoSlideInterval.current);
  }, [testimonials.length]);

  return (
    <section className="w-full bg-[#066AAB] py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center font-instrument">What Our community have to say about us</h2>

        {/* Testimonials Slider */}
        <div className="relative">
          <div 
            className="overflow-hidden"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex space-x-6 transition-all duration-300 ease-in-out">
              {visibleTestimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="flex-none w-full sm:w-1/2 lg:w-1/3 p-2"
                >
                  <div className="bg-[#3083B9] p-6 h-full flex flex-col">
                    <div className="text-4xl text-white opacity-70 mb-4">
                        <img src={TestimonialQuote} alt="" />
                    </div>
                    <p className="text-white mb-6 flex-grow">{testimonial.quote}</p>
                    <div className="flex items-center mt-10">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.author} {testimonial.year}</p>
                        <p className="text-sm text-white/80">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          {/* <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={goToPrevious}
              className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={goToNext}
              className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div> */}

          {/* Indicator dots */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  resetAutoSlide()
                }}
                className={`w-4 h-1 mx-1 transition-colors ${index === currentIndex ? 'bg-[#D15300]' : 'bg-white/60'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunityTestimonials