import { Facebook, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#030F27] text-white py-10 px-4 sm:px-8 md:px-12 lg:px-24 relative">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-wrap lg:flex-nowrap gap-6 md:gap-8">
          {/* Quick Links */}
          <div className="w-full sm:w-auto flex-1 min-w-[150px]">
            <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-xs sm:text-sm">
                  Event
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-xs sm:text-sm">
                  Alumni Directory
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">
                  Campus Tour
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="w-full sm:w-auto flex-1 min-w-[150px]">
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">
                  Videos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">
                  Brochure
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="w-full sm:w-auto flex-1 min-w-[150px]">
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">
                  Call us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">
                  Email us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="w-full sm:w-auto flex-1 min-w-[150px]">
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter (takes more width) */}
          <div className="w-full lg:w-2/5 min-w-[250px]">
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Subscribe to our newsletter</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              The latest news, articles, and resources, sent to your inbox weekly
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-transparent text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-[#D15300] hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm sm:text-base text-gray-400 mb-4 md:mb-0">
            © 2024 Zik Alumni Association, Inc. All rights reserved
          </div>
          <div className="text-center">
          <span className="text-sm sm:text-base text-gray-300 mr-2">Built with love by</span><br />
            <a href="#" className="text-blue-400 font-bold">
              TFN
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex ml-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer