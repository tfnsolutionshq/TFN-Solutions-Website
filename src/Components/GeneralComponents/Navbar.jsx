"use client"

import { useState } from "react"
import { Menu, Search } from "lucide-react"
import Logo from "../../assets/Images/unizik-logo.png"
import { Link } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white border-b py-3 px-8 md:px-24">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo - Left */}
        <div className="flex items-center">
          <img src={Logo} alt="" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex items-center justify-center flex-1 mx-4">
          <div className="flex space-x-6">
            <a href="#" className="text-black font-semibold font-medium hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-black font-semibold hover:text-blue-600">
              About Us
            </a>
            <a href="#" className="text-black font-semibold hover:text-blue-600">
              News/Events
            </a>
            <a href="#" className="text-black font-semibold hover:text-blue-600">
              Chapters
            </a>
            <a href="#" className="text-black font-semibold hover:text-blue-600">
              Resources
            </a>
          </div>
        </nav>

        {/* Search - Right */}
        <div className="hidden md:block relative">
          <input
            type="text"
            placeholder="Search for anything"
            className="pl-8 pr-4 py-1 rounded-full placeholder-black focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-48"
          />
          <Search className="h-4 w-4 black absolute left-2.5 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <nav className="flex flex-col space-y-3 px-4">
            <a href="#" className="text-blue-800 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700">
              About Us
            </a>
            <a href="#" className="text-gray-700">
              News/Events
            </a>
            <a href="#" className="text-gray-700">
              Chapters
            </a>
            <a href="#" className="text-gray-700">
              Resources
            </a>
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search for anything"
                className="pl-8 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-full"
              />
              <Search className="h-4 w-4 text-gray-400 absolute left-2.5 top-1/2 transform -translate-y-1/2" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
