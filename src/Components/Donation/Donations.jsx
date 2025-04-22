import { Home, Filter, Grid, List } from "lucide-react"
import { useState } from "react"
import DonationModal from "./DonationModal"
import { Link } from "react-router-dom"

const DonationListPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  // Sample donation projects data
  const donationProjects = [
    {
      id: 1,
      title: "Udemba School Renovation",
      date: "23-06-23",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Udemba School Renovation",
      date: "23-06-23",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Udemba School Renovation",
      date: "23-06-23",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Udemba School Renovation",
      date: "23-06-23",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      title: "Udemba School Renovation",
      date: "23-06-23",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      title: "Udemba School Renovation",
      date: "23-06-23",
      image: "/placeholder.svg",
    },
  ]

  return (
    <div className="max-w-6xl mb-12 mx-auto px-6 sm:px-0 lg:px-0 py-8">
      {/* Navigation */}
      <nav className="flex items-center text-sm text-gray-500 mb-4">
        <a href="#" className="flex items-center hover:text-gray-700">
          <Home className="h-4 w-4 mr-1" />
          <span>Home</span>
        </a>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-900">Donate</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Donate to a cause</h1>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-gray-600 text-sm">
            Support the driven effort to rise drive excellence within the alumni society
          </p>
        </div>
      </div>

      <hr />

      {/* Filter Controls */}
      <div className="flex justify-between mt-6 items-center mb-6">
      <p className="text-gray-500 text-sm">120 results</p>
        <div className="flex items-center space-x-2">
          <button className="flex items-center border py-1 px-3 text-sm text-gray-600 hover:text-gray-900">
            <Filter className="h-4 w-4 mr-1" />
            <span>Filter by</span>
          </button>
          <div className="flex gap-2 overflow-hidden">
            <button className="bg-gray-100 p-1 border border-[#FF6900] bg-[#D15300]">
              <Grid className="h-4 w-4 text-[#FF6900]" />
            </button>
            <button className="p-1 border">
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Donation Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {donationProjects.map((project) => (
          <div key={project.id} className="border border-gray-200 p-3 overflow-hidden">
            <div className="aspect-video bg-gray-200">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="py-4">
              <h3 className="font-bold text-xl mb-1">{project.title}</h3>
              <p className="text-gray-500 text-xs mb-3 bg-[#EDEBEE] font-medium rounded w-fit p-1">{project.date}</p>
              <p className="text-sm text-gray-700 mb-4">
                Dr. Rita Oji is a Nigerian and interestingly, one of Nnamdi Azikiwe University alumni who has attained
                success in her career as a in the department of computer science at Dartmouth...
              </p>
              <Link to={`/donation-details`} className="text-xs text-[#20608B]">
                See More
              </Link>
              <div className="w-full h-0.5 bg-[#D15300] mt-4"></div>
              <div className="pt-2 border-gray-100 flex justify-between items-center">
                <button 
                  onClick={() => setIsModalOpen(true)} 
                  className="text-[#D15300] text-sm font-medium"
                >
                  DONATE HERE
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#D15300]"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Donation Modal */}
      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default DonationListPage
