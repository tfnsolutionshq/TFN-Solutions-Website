"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MapPin, Phone, Mail, Clock, Send, CheckCircle, Globe, Calendar, ArrowRight } from "lucide-react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeField, setActiveField] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  // Set visibility after component mounts for animations
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--background-primary)] to-[var(--background-primary)]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-1/5 h-1/5 bg-orange-50 rounded-full opacity-30 blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-36 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full text-blue-600 text-sm font-medium mb-1">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
              Let's start a project
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl">
              Ready to transform your business? Get in touch with our team of experts and discover how we can help you
              achieve your goals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">Email Us</h3>
                <p className="text-[var(--text-primary)] text-sm mb-3">Send us an email anytime</p>
                <a
                  href="mailto:support@tfnsolutions.us"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
                >
                  support@tfnsolutions.us
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-green-100 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm mb-3">Mon-Fri from 8am to 5pm</p>
                <div className="space-y-1">
                  <p className="text-gray-900 font-medium">
                    <span className="text-gray-500 text-sm">US:</span> (+02 098 0381)
                  </p>
                  <p className="text-gray-900 font-medium">
                    <span className="text-gray-500 text-sm">NG:</span> (+234 708 098 0381)
                  </p>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Global Offices</h3>
                  <p className="text-gray-600 text-sm">Visit us at our locations worldwide</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="group text-center p-5 bg-gradient-to-b from-gray-50 to-white rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-sm transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">United States</h4>
                  {/* <p className="text-gray-600 text-sm">North America HQ</p> */}
                </div>
                <div className="group text-center p-5 bg-gradient-to-b from-gray-50 to-white rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-sm transition-all duration-300">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Europe</h4>
                  {/* <p className="text-gray-600 text-sm">European Operations</p> */}
                </div>
                <div className="group text-center p-5 bg-gradient-to-b from-gray-50 to-white rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-sm transition-all duration-300">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Africa</h4>
                  {/* <p className="text-gray-600 text-sm">Regional Office</p> */}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="relative h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987368715491!3d40.697670063539654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1703123456789!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/10 pointer-events-none"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 text-sm">Our Locations</h4>
                  <p className="text-gray-600 text-xs">Hover to explore the map</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:sticky lg:top-8 lg:self-start"
          >
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 backdrop-blur-sm">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Message sent!</h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            onFocus={() => setActiveField("firstName")}
                            onBlur={() => setActiveField(null)}
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-all duration-200 ${
                              activeField === "firstName"
                                ? "border-blue-500 ring-2 ring-blue-100"
                                : "border-gray-300 hover:border-gray-400"
                            }`}
                            required
                          />
                          {activeField === "firstName" && (
                            <motion.div
                              layoutId="activeFieldHighlight"
                              className="absolute -bottom-px left-0 w-full h-0.5 bg-blue-600"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            onFocus={() => setActiveField("lastName")}
                            onBlur={() => setActiveField(null)}
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-all duration-200 ${
                              activeField === "lastName"
                                ? "border-blue-500 ring-2 ring-blue-100"
                                : "border-gray-300 hover:border-gray-400"
                            }`}
                            required
                          />
                          {activeField === "lastName" && (
                            <motion.div
                              layoutId="activeFieldHighlight"
                              className="absolute -bottom-px left-0 w-full h-0.5 bg-blue-600"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setActiveField("email")}
                          onBlur={() => setActiveField(null)}
                          className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-all duration-200 ${
                            activeField === "email"
                              ? "border-blue-500 ring-2 ring-blue-100"
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                          required
                        />
                        {activeField === "email" && (
                          <motion.div
                            layoutId="activeFieldHighlight"
                            className="absolute -bottom-px left-0 w-full h-0.5 bg-blue-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          onFocus={() => setActiveField("service")}
                          onBlur={() => setActiveField(null)}
                          className={`w-full px-4 py-3 border rounded-xl focus:outline-none appearance-none bg-white transition-all duration-200 ${
                            activeField === "service"
                              ? "border-blue-500 ring-2 ring-blue-100"
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                          required
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          <option value="general">General Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">Partnership</option>
                          <option value="infrastructure">Infrastructure Services</option>
                          <option value="software">Software Development</option>
                          <option value="other">Other</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                        {activeField === "service" && (
                          <motion.div
                            layoutId="activeFieldHighlight"
                            className="absolute -bottom-px left-0 w-full h-0.5 bg-blue-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setActiveField("message")}
                          onBlur={() => setActiveField(null)}
                          rows="5"
                          className={`w-full px-4 py-3 border rounded-xl focus:outline-none resize-none transition-all duration-200 ${
                            activeField === "message"
                              ? "border-blue-500 ring-2 ring-blue-100"
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                          placeholder="Tell us about your project or inquiry..."
                          required
                        ></textarea>
                        {activeField === "message" && (
                          <motion.div
                            layoutId="activeFieldHighlight"
                            className="absolute -bottom-px left-0 w-full h-0.5 bg-blue-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative overflow-hidden group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-4 rounded-xl font-semibold transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Response Time Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 flex items-center"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4 shadow-sm">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900">Quick Response</p>
                <p className="text-xs text-blue-700">We typically respond within 2-4 hours during business days</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
