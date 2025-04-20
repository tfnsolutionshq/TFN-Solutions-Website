"use client"

import { X } from "lucide-react"
import { useState } from "react"

const FilterSidebar = ({ onClose }) => {
  const [graduationYear, setGraduationYear] = useState("2019")
  const [chapter, setChapter] = useState("All Chapters")
  const [searchTerm, setSearchTerm] = useState("")

  const handleApplyFilter = () => {
    // In a real app, this would apply the filters and update results
    console.log("Applying filters:", { graduationYear, chapter, searchTerm })
    onClose()
  }

  return (
    <div className="h-full flex flex-col bg-white p-4 md:p-2 border-r">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Filters</h3>
        <button onClick={onClose} className="">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
          Search
        </label>
        <div className="relative">
          <input
            type="text"
            id="search"
            placeholder="Daniel Okeke"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 pl-8 pr-3 text-sm"
          />
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <svg
              className="h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Graduation Year */}
      <div className="mb-6">
        <label htmlFor="graduation-year" className="block text-sm font-medium text-gray-700 mb-1">
          Graduation year
        </label>
        <select
          id="graduation-year"
          value={graduationYear}
          onChange={(e) => setGraduationYear(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm"
        >
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
        </select>
      </div>

      {/* Chapter */}
      <div className="mb-6">
        <label htmlFor="chapter" className="block text-sm font-medium text-gray-700 mb-1">
          Chapter
        </label>
        <select
          id="chapter"
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm"
        >
          <option value="All Chapters">All Chapters</option>
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
          <option value="Port Harcourt">Port Harcourt</option>
          <option value="Enugu">Enugu</option>
        </select>
      </div>

      {/* Apply Filter Button */}
      <button
        onClick={handleApplyFilter}
        className="w-full bg-[#D85E00] text-white py-3 rounded-md hover:bg-[#FF6900] transition-colors"
      >
        Apply Filter
      </button>
    </div>
  )
}

export default FilterSidebar
