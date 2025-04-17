import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Link } from "react-router-dom"

const StoriesThatInspire = () => {
  // Alumni success stories data
  const stories = [
    {
      id: "19",
      name: "Uche ThanGod",
      year: "'19",
      image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/stories%20imags/1673172960618.png?raw=true",
      description: "Learn how Uche leveraged tech to build innovative financial solutions across Sub-Saharan Africa.",
      slug: "uche-thangod",
      color: "bg-[#F9A826]"
    },
    {
      id: "99",
      name: "Ekene Ezeasor",
      year: "'99",
      image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/stories%20imags/1673172960618%20(1).png?raw=true",
      description: "How did BJ give Brian the tools to confidently navigate the real world?",
      slug: "ekene-ezeasor",
      color: "bg-[#F97316]"
    },
    {
      id: "99b",
      name: "Stephen Agbo",
      year: "'99",
      image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/stories%20imags/1673172960618%20(2).png?raw=true",
      description: "Learn how Uche leveraged tech to build innovative financial solutions across Sub-Saharan Africa.",
      slug: "stephen-agbo",
      color: "bg-[#DC2626]"
    },
    {
      id: "19b",
      name: "Uche ThanGod",
      year: "'19",
      image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/stories%20imags/1673172960618%20(3).png?raw=true",
      description: "Learn how Uche leveraged tech to build innovative financial solutions across Sub-Saharan Africa.",
      slug: "uche-thangod-2",
      color: "bg-[#F9A826]"
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleStories, setVisibleStories] = useState([])
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const sliderRef = useRef(null)
  const autoPlayRef = useRef(null)
  const pauseRef = useRef(false)

  // Calculate how many stories to show based on screen size
  const calculateVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3 // Large screens
      if (window.innerWidth >= 768) return 2 // Medium screens
    }
    return 1 // Small screens
  }

  // Update visible stories
  const updateVisibleStories = () => {
    const visibleCount = calculateVisibleCount()
    let newVisibleStories = []
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % stories.length
      newVisibleStories.push(stories[index])
    }
    
    setVisibleStories(newVisibleStories)
  }

  // Initialize and handle resize
  useEffect(() => {
    updateVisibleStories()
    
    const handleResize = () => {
      updateVisibleStories()
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [currentIndex])

  // Auto-play functionality
  useEffect(() => {
    const play = () => {
      if (!pauseRef.current) {
        goToNext()
      }
    }
    
    autoPlayRef.current = setInterval(play, 5000) // Change slide every 5 seconds
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [currentIndex])

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1))
  }

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    pauseRef.current = true
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    pauseRef.current = false
    
    if (touchStart - touchEnd > 75) {
      // Swipe left
      goToNext()
    }
    
    if (touchStart - touchEnd < -75) {
      // Swipe right
      goToPrevious()
    }
  }

  // Mouse handlers for pause on hover
  const handleMouseEnter = () => {
    pauseRef.current = true
  }

  const handleMouseLeave = () => {
    pauseRef.current = false
  }

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">Stories That Inspire</h2>
            <p className="text-gray-600 max-w-xl">
              Discover the remarkable journeys, testimonials, and accomplishments of our alumni.
            </p>
          </div>
          
          <Link to="/stories" className="flex items-center text-[#D85E00] font-medium group">
            <span>SHARE YOUR STORY</span>
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Stories Slider */}
        <div 
          className="relative" 
          ref={sliderRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div 
              className="flex space-x-6 transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(0px)` }}
            >
              {visibleStories.map((story, index) => (
                <div 
                  key={story.id} 
                  className="flex-none w-full sm:w-1/2 lg:w-1/3 p-2"
                >
                  <div className="bg-white overflow-hidden border border-gray-200 h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={story.image || "/placeholder.svg"} 
                        alt={story.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute top-2 right-2 ${story.color} text-white text-xs font-bold px-2 py-1 rounded`}>
                        {story.year}
                      </div>
                    </div>
                    
                    <div className="p-4 flex-grow flex flex-col">
                      <h3 className="font-bold text-lg mb-2">{story.name} {story.year}</h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2 leading-6">{story.description}</p>
                      <Link 
                        to={`/stories/${story.slug}`} 
                        className="text-[#D85E00] text-sm mb-3 inline-block p-1 font-medium hover:underline"
                      >
                        Read {story.name.split(' ')[0]}'s story
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none">
            <button 
              onClick={goToPrevious}
              className="w-8 h-8 bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors pointer-events-auto"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button 
              onClick={goToNext}
              className="w-8 h-8 bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors pointer-events-auto"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Indicator dots */}
          <div className="flex mt-6">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-1 mx-1 transition-colors ${
                  index === currentIndex ? 'bg-[#D85E00] w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoriesThatInspire
