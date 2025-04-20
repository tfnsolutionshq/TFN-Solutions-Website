"use client"

import { useState } from "react"
import { Home, Grid, List, Filter } from "lucide-react"
import FilterSidebar from "./FilterSidebar"

const AlumniExecutivesPage = () => {
  const [activeTab, setActiveTab] = useState("executives")
  const [viewMode, setViewMode] = useState("grid")
  const [showFilter, setShowFilter] = useState(false)

  // Sample members data
  const members = [
    {
      id: 1,
      name: "Uche ThankGod",
      position: "Senior Product Engineer",
      image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/programs/image%20(3).png?raw=true",
    },
    {
      id: 2,
      name: "Prewell Ejiofor",
      position: "Senior Software Engineer",
      image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/programs/image%20(4).png?raw=true",
    },
    {
      id: 3,
      name: "Dr. Obioma Uyemwinma",
      position: "Vice President (East), Nigeria",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Dr. Obioma Uyemwinma",
      position: "Vice President (East), Nigeria",
      image: "/placeholder.svg",
    },
  ]

  // Sample executives data
  const executives = [
    {
      id: 1,
      name: "Dr. Ikechukwu I. Umeh",
      position: "President (National and Global)",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Engr. Francis Ochomma",
      position: "Vice President (East), Nigeria",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Mr. Cajetan Okachi",
      position: "Vice President (West), Nigeria",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Dr. Obioma Uyemwinma",
      position: "Vice President (North), Nigeria",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      name: "ESV Chinua Kenneth Anigbo",
      position: "Vice President (South), Nigeria",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Christy C. Agim",
      position: "Secretary General",
      image: "/placeholder.svg",
    },
    {
      id: 7,
      name: "Mrs Ogo Grace Daminiye",
      position: "Assistant Secretary General",
      image: "/placeholder.svg",
    },
    {
      id: 8,
      name: "Mr. Obi Okeke",
      position: "Financial Secretary",
      image: "/placeholder.svg",
    },
  ]

  // Toggle filter sidebar
  const toggleFilter = () => {
    setShowFilter(!showFilter)
  }

  // Get data based on active tab
  const displayData = activeTab === "members" ? members : executives

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center text-sm text-gray-500">
          <a href="#" className="flex items-center hover:text-gray-700">
            <Home className="h-4 w-4 mr-1" />
            <span>Home</span>
          </a>
          <span className="mx-2">&gt;</span>
          <a href="#" className="hover:text-gray-700">
            Directory
          </a>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-900">Alumni Executives</span>
        </nav>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Alumni Executives</h1>
          <p className="text-gray-600 text-sm">
            A glance on all alumni executives playing all activities within the association
          </p>
        </div>

        {/* Banner Image */}
        <div className="w-full h-48 md:h-64 lg:h-80 mb-6 overflow-hidden rounded-md">
          <img
            src="https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/programs/image%20(3).png?raw=true"
            alt="Alumni Executives"
            className="w-full h-full object-cover sepia"
          />
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("members")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "members"
                  ? "border-[#D85E00] text-[#D85E00]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Alumni Members
            </button>
            <button
              onClick={() => setActiveTab("executives")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "executives"
                  ? "border-[#D85E00] text-[#D85E00]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              National Executives
            </button>
          </div>
        </div>

        {/* Results and Controls */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-500">{displayData.length} results</p>
          <div className="flex items-center space-x-2">
          <button
              onClick={toggleFilter}
              className="flex items-center text-sm hover:bg-gray-200 px-3 py-1.5 border"
            >
              <Filter className="h-4 w-4 mr-1" />
              <span>Filter by</span>
            </button>
            <div className="flex gap-2 overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 ${viewMode === "grid" ? "bg-gray-100 border text-[#FF6900] border-[#D15300]" : ""}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 ${viewMode === "list" ? "bg-gray-100" : " border"}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Sidebar and Main Content */}
        <div className="relative flex">
          {/* Filter Sidebar (conditionally rendered) */}
          {showFilter && (
            <div className="fixed inset-0 z-40 lg:relative lg:inset-auto">
              <div className="absolute inset-0 bg-black/20 lg:hidden" onClick={toggleFilter}></div>
              <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-lg lg:relative lg:shadow-none z-50">
                <FilterSidebar onClose={toggleFilter} />
              </div>
            </div>
          )}

          {/* Executives Grid */}
          <div className={`w-full ${showFilter ? "lg:ml-6" : ""}`}>
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                  : "space-y-4"
              }
            >
              {displayData.map((person) => (
                <div
                  key={person.id}
                  className={`border border-gray-200 rounded-md overflow-hidden ${
                    viewMode === "list" ? "flex items-center" : ""
                  }`}
                >
                  <div
                    className={`${
                      viewMode === "grid" ? "aspect-square" : "w-24 h-24"
                    } bg-gray-100 relative overflow-hidden`}
                  >
                    <img
                      src={person.image || "/placeholder.svg"}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                    <h3 className="font-medium text-gray-900">{person.name}</h3>
                    <p className="text-sm text-gray-500">{person.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlumniExecutivesPage
