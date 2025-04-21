import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const HallOfFame = () => {
  // Replace these with your actual CDN image URLs
  const alumniImages = [
    "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(2).png?raw=true",
    "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(3).png?raw=true",
    "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(4).png?raw=true",
    "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(5).png?raw=true",
    "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(6).png?raw=true",
    "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(7).png?raw=true",
    "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(8).png?raw=true",
    "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(9).png?raw=true",
    "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(10).png?raw=true",
    "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(11).png?raw=true",
    "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(12).png?raw=true",
    "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(13).png?raw=true",
    "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(14).png?raw=true",
    "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(15).png?raw=true",
    "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(16).png?raw=true",
    "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(17).png?raw=true",
    "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(18).png?raw=true",
    "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(19).png?raw=true",
  ]

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-12">
      <div className="overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7">
          {/* Orange box with years */}
          <div className="bg-[#D15300] text-white flex flex-col justify-center items-center p-4">
            <span className="text-7xl sm:text-7xl font-bold font-rethink">34</span>
            <span className="text-sm sm:text-sm text-center font-rethink">Years of Excellence</span>
          </div>

          {/* First 9 alumni photos */}
          {alumniImages.slice(0, 9).map((src, i) => (
            <div key={i} className="aspect-square relative">
              <img 
                src={src} 
                alt={`Alumni ${i + 1}`} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/placeholder.svg"; // fallback if image fails to load
                }}
              />
            </div>
          ))}

          {/* 60+ Charity Projects */}
          <div className="bg-[#030F27] text-white flex flex-col justify-center items-center p-4">
            <span className="text-7xl sm:text-7xl font-bold font-rethink">60+</span>
            <span className="text-sm sm:text-sm text-center font-rethink">Charity Projects</span>
          </div>

          {/* Next 9 alumni photos */}
          {alumniImages.slice(9, 18).map((src, i) => (
            <div key={i + 9} className="aspect-square relative">
              <img 
                src={src} 
                alt={`Alumni ${i + 10}`} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/placeholder.svg"; // fallback if image fails to load
                }}
              />
            </div>
          ))}

          {/* 2M+ Alumni */}
          <div className="bg-[#20608B] text-white flex flex-col justify-center items-center p-4">
            <span className="text-6xl sm:text-7xl font-bold font-rethink">2M+</span>
            <span className="text-xs sm:text-sm text-center font-rethink">Alumni</span>
          </div>
        </div>

        <div className="p-6 flex flex-col md:flex-row md:items-center mt-4 md:justify-between">
          <h2 className="text-2xl font-bold mb-4 md:mb-0 font-rethink">Unizik Alumni Hall of Fame</h2>
          <div className="flex flex-col space-y-2">
            <p className="text-gray-600 font-rethink">You too can be a part of the journey</p>
            <div className="h-px bg-[#D15300] w-full "></div>
            <div className="flex justify-between items-center">
              <Link to="/become-a-member" className="text-[#D15300] font-rethink font-medium">
                BECOME A MEMBER NOW
              </Link>
              <ArrowRight className="text-[#D15300] h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HallOfFame