import { Link } from "react-router-dom"
import { ChevronRight, House, Music } from "lucide-react"
import { useState } from "react"
import UnizikAnthemPopup from "../HomeComponents/UnizikAnthemPopup"

const HistoryContent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }
  // News items data
  const newsItems = [
    {
      title: "Tips: How to secure Transcript for Int'l Purpose",
      image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/programs/image%20(3).png?raw=true",
      date: "17 JUNE 2020",
      slug: "transcript-tips",
    },
    {
      title: "Post Graduate Studies: The Important factor to bear in mind",
      image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/programs/image%20(4).png?raw=true",
      date: "17 JUNE 2020",
      slug: "post-graduate-studies",
    },
    {
      title: "Unizik Renovation Project on the Library unit",
      image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/programs/image%20(5).png?raw=true",
      date: "17 JUNE 2020",
      slug: "library-renovation",
    },
    {
      title: "New Vice Chancellor Inaugurated on the new session",
      image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/programs/image%20(6).png?raw=true",
      date: "17 JUNE 2020",
      slug: "new-vice-chancellor",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - Left Side */}
        <div className="lg:col-span-2">
          {/* Association Description */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              The Great Unizik Alumni Association draws its membership from graduates and associates of Nnamdi Azikiwe
              University, Awka, Nigeria.
            </h2>
            <p className="text-gray-700 mb-4 text-sm">
              Founded in 1991, Nnamdi Azikiwe University has, for over three decades, provided qualitative and
              research-oriented education to Nigerians and all those who have entered its domain in search of knowledge.
              The University has built a legacy of excellence and has been instrumental in the production of top-range
              graduates and academia who have had tremendous impact, directly or indirectly, on growth and development
              in Nigeria. Founded in 1991, Nnamdi Azikiwe University has, for over three decades, provided qualitative
              and research.
            </p>

            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-4">
              <li>
                oriented education to Nigerians and all those who have entered its domain in search of knowledge. The
                University has built a legacy of excellence and has been instrumental in the production of top-range
                graduates and academia who have had tremendous impact, directly or indirectly, on growth and development
                in Nigeria.
              </li>
              <li>
                Founded in 1991, Nnamdi Azikiwe University has, for over three decades, provided qualitative and
                research-oriented education to Nigerians and all those who have entered its domain in search of
                knowledge.
              </li>
              <li>
                The University has built a legacy of excellence and has been instrumental in the production of top-range
                graduates and academia who have had tremendous impact, directly or indirectly, on growth and development
                in Nigeria.
              </li>
            </ul>
          </div>

          {/* Quote Section */}
          <div className="mb-8 border-l-4 border-[#D85E00] pl-4 italic">
            <p className="text-lg font-medium mb-2">
              "The Great Unizik Alumni Association draws its membership from graduates and associates of Nnamdi Azikiwe
              University, Awka, Nigeria."
            </p>
            <p className="text-gray-600">Ahmed Musa</p>
          </div>

          <p className="text-gray-700 mb-8 text-sm">
            Founded in 1991, Nnamdi Azikiwe University has, for over three decades, provided qualitative and
            research-oriented education to Nigerians and all those who have entered its domain in search of knowledge.
            The University has built a legacy of excellence and has been instrumental in the production of top-range
            graduates and academia who have had tremendous impact, directly or indirectly, on growth and development in
            Nigeria. Founded in 1991, Nnamdi Azikiwe University has, for over three decades, provided qualitative and
            res
          </p>

          {/* Links */}
          <div className="space-y-4 mb-8">
            <div className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-center">
                <Link to="/gallery" className=" font-medium">
                  View our Galleria
                </Link>
                <ChevronRight className="text-[#D85E00] h-4 w-4" />
              </div>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-center">
                <Link to="/committees" className=" font-medium">
                  Our Executive Committees
                </Link>
                <ChevronRight className="text-[#D85E00] h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Right Side */}
        <div className="lg:col-span-1">
          {/* Mission Box */}
          <div className="bg-[#0A1E3C] text-white p-4 mb-6">
            <h3 className="font-bold mb-2">MISSION</h3>
            <p className="text-sm">
              Founded in 1991, Nnamdi Azikiwe University has, for over thriteen and academia who have had tremendous
              impact, directly or indirectly.
            </p>
          </div>

          {/* Vision Box */}
          <div className="bg-[#D85E00] text-white p-4 mb-6">
            <h3 className="font-bold mb-2">MISSION</h3>
            <p className="text-sm">
              Founded in 1991, Nnamdi Azikiwe University has, for over thriteen and academia who have had tremendous
              impact, directly or indirectly.
            </p>
          </div>

          {/* News Section */}
          <div className="mb-6">
            <h3 className="text-lg font-bold border-b border-[#D85E00] pb-2 mb-4">NEWS FOR ALUMNI</h3>
            <div className="space-y-4">
              {newsItems.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-16 h-16 relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium hover:text-[#D85E00] transition-colors">
                      <Link to={`/news/${item.slug}`}>{item.title}</Link>
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Campus Tour Box */}
          <Link onClick={openPopup}>
            <div className="bg-[#F8E5D9] px-6 py-6 flex items-center justify-between">
              <div>
                <h3 className="font-medium text-lg text-[#D15300]">Unizik Anthem</h3>
              </div>
              <Music className="h-10 w-10 text-[#D15300]" />
            </div>
          </Link>
          <Link to={`/galleria`}>
            <div className="bg-[#D9DBDF] px-6 py-6 flex items-center justify-between">
              <div>
                <h3 className="font-medium text-lg text-[#030F27]">Campus Tour</h3>
              </div>
              <House className="h-12 w-12 text-[#030F27]" />
            </div>
          </Link>

          {/* Unizik Alumni Box */}
          {/* <div className="mt-6 bg-[#D85E00]/10 p-4 ">
            <h3 className="text-[#D85E00] font-medium">Unizik Alumni</h3>
            <Music className="h-6 w-6 text-[#D85E00] mt-2" />
          </div> */}
        </div>
      </div>


      <UnizikAnthemPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  )
}

export default HistoryContent
