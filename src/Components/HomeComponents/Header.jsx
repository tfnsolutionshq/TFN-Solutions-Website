"use client"

import { useState, useEffect, useCallback } from "react"
import { ArrowRight } from "lucide-react"
import Bg1 from "../../assets/Images/bg1.jpg"
import Bg2 from "../../assets/Images/bg2.jpg"

const slides = [
  {
    id: 1,
    image: Bg1,
    title: "Alumni Reunion 2.0 Activated",
    subtitle: "Empowering Connections, Celebrating Success",
    cta: "Explore Event",
    ctaLink: "#",
  },
  {
    id: 2,
    image: Bg2,
    title: "Induction of New Alumni Members",
    subtitle: "Celebrating Success of all new members.",
    cta: "Learn More",
    ctaLink: "#",
  },
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }, [isTransitioning])

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Image Slider with Gradient Overlay */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image with Gradient Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-top"
              style={{ backgroundImage: `url(${slide.image || "/placeholder.svg"})` }}
            >
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4 md:px-16 flex justify-between items-center">
          <div className="max-w-xl overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-500 ease-in-out transform ${
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 absolute"
                }`}
                style={{ display: index === currentSlide ? "block" : "none" }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl text-white/90 mb-6">{slide.subtitle}</p>
                <a
                  href={slide.ctaLink}
                  className="inline-flex items-center text-white hover:text-orange-300 transition-colors"
                >
                  <span className="mr-2">{slide.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          {/* Slide Indicators - Moved to right side */}
          <div className="flex flex-col space-y-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-1 h-4 transition-colors ${
                  index === currentSlide ? "bg-[#D15300]" : "bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSlider