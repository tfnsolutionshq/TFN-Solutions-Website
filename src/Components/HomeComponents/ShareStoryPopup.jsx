"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

const ShareStoryPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    countryCode: "+234",
    isMember: "",
    storyInfo: "",
  })

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    // After successful submission, close the popup
    onClose()
  }

  // Close popup when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscKey)
    return () => {
      window.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen, onClose])

  // Stop scrolling on body when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2 sm:p-4">
      <div
        className="
          relative w-full
          max-w-xs sm:max-w-md md:max-w-lg
          bg-white rounded-lg shadow-xl
          flex flex-col
          max-h-[90vh] sm:max-h-[90vh] md:max-h-[90vh]
          overflow-y-auto 
        "
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="p-4 sm:p-6">
          {/* Form header */}
          <h2 className="text-lg sm:text-xl font-bold mb-1">Share your Story</h2>
          <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">
            Proceed to fill in the below information
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-3 sm:mb-4">
              <label htmlFor="fullName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                What's your Full Name?
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D85E00]"
                placeholder="Enter"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3 sm:mb-4">
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Your email address?
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D85E00]"
                placeholder="Enter"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="mb-3 sm:mb-4">
              <label htmlFor="phoneNumber" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                What number can we reach you on? (Preferably active on whatsapp)
              </label>
              <div className="flex">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="px-2 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#D85E00] bg-white text-xs sm:text-sm"
                >
                  <option value="+234">+234</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+27">+27</option>
                  <option value="+254">+254</option>
                </select>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-1 focus:ring-[#D85E00] text-xs sm:text-sm"
                  placeholder="80 0000 0000"
                  required
                />
              </div>
            </div>

            {/* Alumni Member */}
            <div className="mb-3 sm:mb-4">
              <label htmlFor="isMember" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Are you a member of the Alumni body?
              </label>
              <select
                id="isMember"
                name="isMember"
                value={formData.isMember}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D85E00] bg-white text-xs sm:text-sm"
                required
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Story Information */}
            <div className="mb-4 sm:mb-6">
              <label htmlFor="storyInfo" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                A short Information about the story?
              </label>
              <textarea
                id="storyInfo"
                name="storyInfo"
                value={formData.storyInfo}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D85E00] text-xs sm:text-sm"
                placeholder="Enter"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#D85E00] text-white py-2 sm:py-3 rounded-md hover:bg-[#C04D00] transition-colors text-sm sm:text-base"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ShareStoryPopup
