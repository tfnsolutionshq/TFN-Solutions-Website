"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
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
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="pb-16 mt-44">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:w-1/2">
            <div className="flex items-center mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
              <span className="text-blue-600 font-medium">Contact Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              Get in touch with us <span className="text-gray-400">at your convenience.</span>
            </h2>

            <div className="mt-8">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full font-medium transition-colors"
              >
                <span>Email Us</span>
                <ChevronRight className="ml-1 h-5 w-5" />
              </a>
            </div>


            <div className="mt-12 pt-8 border-t border-gray-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Email</h3>
                  <a href="mailto:hello@institution.us" className="text-black hover:text-blue-600 transition-colors">
                    hello@institution.us
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Phone</h3>
                  <div>
                    <p className="mb-1 font-medium">
                      <span className="text-gray-500 text-sm">US:</span> +1 (123) 456 7890
                    </p>
                    <p className="font-medium">
                      <span className="text-gray-500 text-sm">NG:</span> +1 (123) 456 7890
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Address</h3>
                <p className="text-sm">
                  USA - <br />
                  <span className="font-bold text-base">Lorem Ipsum, Texas</span> <br />
                  Nigeria <br />
                  <span className="font-bold text-base">Plot 107 Divine Estate, Behind Federal Housing, New Sauka, Lugbe, FCT, Abuja</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white md:p-6 p-3 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full px-3 py-3 border-b border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full px-3 py-3 border-b border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-3 py-3 border-b border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4 relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border-b border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white"
                  required
                >
                  <option value="" disabled>
                    Service needed
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>

              <div className="mb-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="5"
                  className="w-full px-3 py-3 border-b border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                  required
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full font-medium transition-colors"
                >
                  <span>Send Message</span>
                  <ChevronRight className="ml-1 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
