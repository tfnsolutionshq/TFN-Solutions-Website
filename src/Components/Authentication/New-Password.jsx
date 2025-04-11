"use client"

import { useState } from "react"
import { Home, Eye, EyeOff } from "lucide-react"
import BG from "../../assets/Images/loginbg.png"
import Logo from "../../assets/Images/logo.png"
// import { Link } from "react-router-dom"

const NewPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  })
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("New password submitted:", formData)
    // Handle password reset logic here
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
          <span className="font-medium">Reset Password</span>
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
          <div className="relative z-10 flex flex-col md:flex-row justify-center px-6 md:px-0 pt-32">
            {/* Form Container */}
            <div className="w-full md:w-2/5 lg:w-2/5 bg-white border p-6 md:p-8 rounded-lg my-8 md:my-16 mx-auto">
              {/* Logo and Title */}
              <div className="flex flex-col items-center mb-6">
                <img src={Logo} alt="Unizik Logo" className="w-20 h-20 mb-4" />
                <h1 className="md:text-3xl text-2xl font-bold text-center">Reset Password</h1>
                {/* <p className="text-base text-gray-500 mt-1">
                  Not a member?{" "}
                  <Link to={`/become-a-member`} className="text-blue-600 font-medium hover:underline">
                    Become a Member
                  </Link>
                </p> */}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* New Password */}
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      id="newPassword"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={toggleNewPasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      {showNewPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md transition-colors font-medium mt-4"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPassword