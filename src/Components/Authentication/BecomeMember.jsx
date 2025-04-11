"use client"

import { useState } from "react"
// import { Calendar, ChevronDown, Book, Briefcase, MapPin, Users, Heart } from "lucide-react"
import BG from "../../assets/Images/formbg.png"
import Logo from "../../assets/Images/logo.png"
import { Home } from "lucide-react"
import { Link } from "react-router-dom"

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    courseOfStudy: "",
    programme: "",
    graduationYear: "",
    location: "",
    chapter: "",
    employed: "",
    workplace: "",
    maritalStatus: "",
    birthDate: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission - would connect to payment gateway
    console.log("Form submitted:", formData)
  }

  return (
    <div className="w-full min-h-screen py-12 px-4">
      {/* Breadcrumb */}
      <div className="container mx-auto max-w-6xl mb-6">
        <div className="flex items-center text-sm text-gray-500">
          <span className="mx-2"><Home className="h-4 w-4" /></span>
          <a href="#" className="hover:text-blue-700">
            Home
          </a>
          <span className="mx-2">›</span>
          <span className="font-medium">Become a Member</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-xl">
          {/* Background Image */}
          <div className="absolute h-96 inset-0 z-0">
            <img
              src={BG}
              alt="Graduates celebrating"
              className="w-full h-96 rounded-xl object-cover object-center"
            />
            <div className=""></div>
          </div>

          {/* Form Card */}
          <div className="relative z-10 flex flex-col md:flex-row justify-center px-6 md:px-0 pt-12">
            {/* Form Container */}
            <div className="w-full md:w-2/3 lg:w-3/5 bg-white border p-6 md:p-8 rounded-lg my-8 md:my-16 mx-auto">
              {/* Logo and Title */}
              <div className="flex flex-col items-center mb-6">
                <img src={Logo} alt="Unizik Logo" />
                <h1 className="md:text-3xl text-2xl font-bold text-center">Become a Member</h1>
                <p className="text-base text-gray-500 mt-1">
                  Already a member?{" "}
                  <Link to={`/login`} className="text-blue-600 font-medium hover:underline">
                    Login
                  </Link>
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Name - Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                </div>

                {/* Course of Study */}
                <div>
                  <label htmlFor="courseOfStudy" className="block text-sm font-medium text-gray-700 mb-1">
                    Course of Study
                  </label>
                  <input
                    type="text"
                    id="courseOfStudy"
                    name="courseOfStudy"
                    value={formData.courseOfStudy}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="e.g. Computer Science"
                  />
                </div>

                {/* Programme */}
                <div>
                  <label htmlFor="programme" className="block text-sm font-medium text-gray-700 mb-1">
                    Programme
                  </label>
                  <select
                    id="programme"
                    name="programme"
                    value={formData.programme}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                  >
                    <option value="">Select programme</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="postgraduate">Postgraduate</option>
                    <option value="doctorate">Doctorate</option>
                  </select>
                </div>

                {/* Graduation Year */}
                <div>
                  <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700 mb-1">
                    Graduation year
                  </label>
                  <select
                    id="graduationYear"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                  >
                    <option value="">Select year</option>
                    {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="e.g. Lagos, Nigeria"
                  />
                </div>

                {/* Chapter */}
                <div>
                  <label htmlFor="chapter" className="block text-sm font-medium text-gray-700 mb-1">
                    Chapter
                  </label>
                  <select
                    id="chapter"
                    name="chapter"
                    value={formData.chapter}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                  >
                    <option value="">Select chapter</option>
                    <option value="lagos">Lagos Chapter</option>
                    <option value="abuja">Abuja Chapter</option>
                    <option value="ph">Port Harcourt Chapter</option>
                    <option value="diaspora">Diaspora Chapter</option>
                  </select>
                </div>

                {/* Employment Status */}
                <div>
                  <label htmlFor="employed" className="block text-sm font-medium text-gray-700 mb-1">
                    Are you currently employed?
                  </label>
                  <select
                    id="employed"
                    name="employed"
                    value={formData.employed}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                  >
                    <option value="">Select option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="self-employed">Self-employed</option>
                  </select>
                </div>

                {/* Workplace */}
                <div>
                  <label htmlFor="workplace" className="block text-sm font-medium text-gray-700 mb-1">
                    Where do you work?
                  </label>
                  <input
                    type="text"
                    id="workplace"
                    name="workplace"
                    value={formData.workplace}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter workplace"
                  />
                </div>

                {/* Marital Status */}
                <div>
                  <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700 mb-1">
                    Marital Status
                  </label>
                  <select
                    id="maritalStatus"
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                  >
                    <option value="">Select status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>

                {/* Birth Date */}
                <div>
                  <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Birth date
                  </label>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md transition-colors font-medium mt-4"
                >
                  Proceed to Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MembershipForm
