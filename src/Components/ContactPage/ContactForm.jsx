
import { useState } from "react"
import { MapPin, Mail, MessageCircle, Send, Twitter } from "lucide-react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
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
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null })

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null })

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus({ isSubmitting: false, isSubmitted: false, error: null })
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          service: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  const services = [
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Technical Support" },
    { value: "partnership", label: "Partnership" },
    { value: "other", label: "Other" },
  ]

  return (
    <section className="w-full min-h-screen bg-white p-0 m-0">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Contact Form and Details */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get in touch</h1>
            <p className="text-gray-600 mb-8">
              We're here to help. Chat to our friendly team 24/7 and get set up and ready to go in just 5 minutes.
            </p>

            {/* Quick Contact Options */}
            <div className="space-y-4 mb-8">
              <a
                href="#"
                className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Start a live chat
              </a>
              <a
                href="mailto:support@tfnsolutions.us"
                className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
              >
                <Mail className="h-5 w-5 mr-2" />
                Send an email
              </a>
              <a
                href="#"
                className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
              >
                <Twitter className="h-5 w-5 mr-2" />
                Message us on Twitter
              </a>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    US
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Services
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service) => (
                    <label key={service.value} className="flex items-center">
                      <input
                        type="radio"
                        name="service"
                        value={service.value}
                        checked={formData.service === service.value}
                        onChange={handleChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">{service.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  {formStatus.isSubmitting ? (
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
                      Sending...
                    </>
                  ) : formStatus.isSubmitted ? (
                    <>
                      <svg
                        className="-ml-1 mr-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Message sent!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send message
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Contact Details */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Email</h3>
                  <a
                    href="mailto:support@tfnsolutions.us"
                    className="text-gray-900 hover:text-indigo-600 transition-colors"
                  >
                    support@tfnsolutions.us
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Phone</h3>
                  <div>
                    <p className="mb-1 text-gray-900">
                      <span className="text-gray-500 text-sm">US:</span> (+02 098 0381)
                    </p>
                    <p className="text-gray-900">
                      <span className="text-gray-500 text-sm">NG:</span> (+234 708 098 0381)
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Global Offices</h3>
                <p className="text-gray-900">
                  <span className="font-medium block">United States</span>
                  <span className="font-medium block">Europe</span>
                  <span className="font-medium block">Africa</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="lg:col-span-3 relative h-full min-h-[600px]">
            <div className="absolute inset-0 w-full h-full grayscale-[80%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1626710777499!5m2!1sen!2sca"
                className="w-full h-full"
                frameBorder="0"
                style={{ border: 0, filter: 'grayscale(100%)', minHeight: '600px' }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                loading="lazy"
                title="Office Location Map"
              ></iframe>
              <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>
            </div>
            {/* Location markers */}
            <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-md z-10 max-w-xs">
              <h3 className="font-medium text-gray-900 flex items-center">
                <MapPin className="h-5 w-5 text-indigo-600 mr-2" />
                Our Locations
              </h3>
              <div className="mt-2 space-y-2 text-sm text-gray-600">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  United States Office
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  European Office
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                  African Office
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
