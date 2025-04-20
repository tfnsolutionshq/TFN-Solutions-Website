"use client"

import { useState } from "react"
import { Home, Grid, List, Filter } from "lucide-react"
import FilterPanel from "./FilterPanel"

const EventsListingPage = () => {
    const [showFilter, setShowFilter] = useState(false)
    const [viewMode, setViewMode] = useState("grid")

    // Sample events data
    const events = [
        {
            id: 1,
            title: "Alumni Reunion Reboot 2.0 (Lagos Chapter)",
            description:
                "Post Graduate Studies: The Important factor to bear in mind Post Graduate Studies: The Important factor to bear in mind...",
            image:
                "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/Frame%204.png?raw=true",
            date: "17 Jan, 2024",
            time: "12:00PM",
            location: "Lagos, Nigeria",
        },
        {
            id: 2,
            title: "Alumni Reunion Reboot 2.0 (Lagos Chapter)",
            description:
                "Post Graduate Studies: The Important factor to bear in mind Post Graduate Studies: The Important factor to bear in mind...",
            image:
                "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/Frame%204.png?raw=true",
            date: "17 Jan, 2024",
            time: "12:00PM",
            location: "Lagos, Nigeria",
        },
        {
            id: 3,
            title: "Alumni Reunion Reboot 2.0 (Lagos Chapter)",
            description:
                "Post Graduate Studies: The Important factor to bear in mind Post Graduate Studies: The Important factor to bear in mind...",
            image:
                "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/Frame%204.png?raw=true",
            date: "17 Jan, 2024",
            time: "12:00PM",
            location: "Lagos, Nigeria",
        },
        {
            id: 4,
            title: "Alumni Reunion Reboot 2.0 (Lagos Chapter)",
            description:
                "Post Graduate Studies: The Important factor to bear in mind Post Graduate Studies: The Important factor to bear in mind...",
            image:
                "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/Frame%204.png?raw=true",
            date: "17 Jan, 2024",
            time: "12:00PM",
            location: "Lagos, Nigeria",
        },
    ]

    // Toggle filter panel
    const toggleFilter = () => {
        setShowFilter(!showFilter)
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <div className="max-w-6xl mx-auto px-6 mt-4 sm:px-0 lg:px-0 py-4">
                <nav className="flex items-center text-sm text-gray-500">
                    <a href="#" className="flex items-center hover:text-gray-700">
                        <Home className="h-4 w-4 mr-1" />
                        <span>Home</span>
                    </a>
                    <span className="mx-2">&gt;</span>
                    <span className="text-gray-900">Activity</span>
                </nav>
            </div>

            {/* Header */}
            <div className="max-w-6xl mx-auto px-6 sm:px-0 lg:px-0">
                <div className="flex mt-2 flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-0">Events Close to You</h1>
                    <p className="text-gray-600 text-sm">
                        Stay informed on all activities within the Alumni Association of all chapters.
                    </p>
                </div>

                {/* Filter and Content */}
                    {/* Filter Panel (conditionally rendered) */}
                    <div className="flex flex-col md:flex-row">
                    {/* Filter Panel (conditionally rendered) */}
                    {showFilter && (
                        <div className="md:w-72 md:mr-8">
                            <FilterPanel type="news" onClose={() => setShowFilter(false)} />
                        </div>
                    )}

                    {/* Main Content */}
                    <div className="flex-1 mt-8 md:mt-0">
                        {/* Results and Controls */}
                        <div className="flex justify-between items-center  mb-6">
                            <p className="text-sm text-gray-500">{events.length} results</p>
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

                        {/* News Grid */}
                        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-6"}>
                            {events.map((item) => (
                                <div
                                    key={item.id}
                                    className={`border border-gray-200 p-2.5 overflow-hidden ${viewMode === "list" ? "flex flex-col md:flex-row" : ""
                                        }`}
                                >
                                    <div
                                        className={`${viewMode === "grid" ? "aspect-video" : "md:w-1/3 aspect-video md:aspect-auto"
                                            } bg-gray-100 relative overflow-hidden`}
                                    >
                                        <img
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className={`py-4 px-2 ${viewMode === "list" ? "md:w-2/3" : ""}`}>
                                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                        <p className="text-gray-700 mb-4 line-clamp-2">{item.excerpt}</p>
                                        <a href="#" className="text-[#D85E00] font-medium hover:underline">
                                            Read More
                                        </a>
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

export default EventsListingPage
