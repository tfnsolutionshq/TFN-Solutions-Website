"use client"

import { useState } from "react"
import { Home, Rss, Facebook, Twitter, Instagram, MapPin, Calendar } from "lucide-react"

const EventDetailPage = () => {
  const [attendingOption, setAttendingOption] = useState("yes")

  // Sample event data
  const event = {
    title: "Alumni Reunion Reboot 2.0 (Lagos Chapter)",
    image:
      "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/Frame%204.png?raw=true",
    description:
      "Post Graduate Studies: The Important factor to bear in mind Post Graduate Studies: The Important factor to bear in mind Post Graduate Studies: The Important factor to bear in mind Post Graduate Studies: The Important factor to bear in mind Post Graduate Studies: The Important factor to bear in mind Post Graduate Studies.",
    date: "17 Jan, 2024",
    time: "12:00PM - 04:00PM",
    venue: "Radisson Blu Hotel",
    location: "Lagos, Nigeria",
    mapUrl: "https://maps.google.com/?q=Ikeja,Lagos",
  }

  return (
    <div className="min-h-screen bg-white mb-24">
      {/* Banner Image - Full Width */}
      <div className="w-full relative left-1/2 right-1/2 -mx-[50vw] left-[50%] right-[50%] max-w-none" style={{position:'relative',width:'100vw',left:'50%',right:'50%',transform:'translateX(-50%)'}}>
        
      </div>
      {/* Navigation and Main Content */}
      <div className="max-w-6xl mx-auto px-6 mt-3 sm:px-0 lg:px-0 py-4">
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
          <span className="text-gray-900">Info</span>
        </nav>
      </div>
      <div className="max-w-6xl mx-auto px-6 sm:px-0 lg:px-0 mt-3">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-0">{event.title}</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 mr-2">Follow to stay updated:</span>
            <a href="#" className="bg-[#F26522] text-white p-1.5 rounded-sm hover:opacity-90" aria-label="RSS Feed">
              <Rss className="h-4 w-4" />
            </a>
            <a href="#" className="bg-[#3b5998] text-white p-1.5 rounded-sm hover:opacity-90" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="bg-[#1DA1F2] text-white p-1.5 rounded-sm hover:opacity-90" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="bg-[#E4405F] text-white p-1.5 rounded-sm hover:opacity-90" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Event Details */}
          <div className="lg:col-span-2">
            {/* Event Image */}
            <div className="w-full aspect-video mb-6 overflow-hidden">
              <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
            </div>

            {/* Posted Date */}
            <div className="flex items-center mb-4">
              <Calendar className="h-4 w-4 mr-2 text-gray-500" />
              <span className="text-sm text-gray-500">Posted on: June 17, 2024</span>
            </div>

            {/* About the Event */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">About the Event</h2>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>

            {/* Date/Time */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Date/Time</h2>
              <div className="flex items-start">
                <Calendar className="h-5 w-5 mr-2 text-gray-700 mt-0.5" />
                <div>
                  <p className="text-gray-700">{event.date}</p>
                  <p className="text-gray-700">{event.time}</p>
                </div>
              </div>
            </div>

            {/* Venue */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Venue</h2>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-700 mt-0.5" />
                <p className="text-gray-700">
                  {event.venue}
                  <br />
                  {event.location}
                </p>
              </div>
            </div>

            {/* Map Location */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Map Location</h2>
              <div className="w-full h-64 bg-gray-200 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46312651567!2d3.1191195!3d6.5244031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1650000000000!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Event Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column - Registration */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-md p-6 sticky top-6">
              <h2 className="text-lg font-bold mb-4 text-center">
                To participate in this activity or alumni engagement
              </h2>
              <a
                href="#"
                className="block w-full bg-[#D85E00] text-white text-center py-3 rounded-md hover:bg-[#C04D00] transition-colors mb-8"
              >
                REGISTER HERE
              </a>

              {/* Why you be attending? */}
              <div className="mb-6">
                <h3 className="text-md font-bold mb-4">Why you be attending?</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={attendingOption === "yes"}
                      onChange={() => setAttendingOption("yes")}
                      className="mr-2"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={attendingOption === "no"}
                      onChange={() => setAttendingOption("no")}
                      className="mr-2"
                    />
                    <span>No</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attending"
                      value="maybe"
                      checked={attendingOption === "maybe"}
                      onChange={() => setAttendingOption("maybe")}
                      className="mr-2"
                    />
                    <span>Maybe</span>
                  </label>
                </div>
              </div>

              {/* Add to Calendar */}
              <div>
                <h3 className="text-md font-bold mb-4">ADD TO CALENDAR</h3>
                <button className="w-full border border-gray-300 rounded-md py-2 px-4 flex items-center justify-between hover:bg-gray-50">
                  <span>Google Calendar</span>
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
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default EventDetailPage
