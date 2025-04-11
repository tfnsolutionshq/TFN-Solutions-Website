import { Facebook, Twitter, Instagram, ChevronRight } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#030F27] text-white py-10 px-4 md:px-8 relative">

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* First column group (takes 1/4 of the width) */}
          <div className="lg:col-span-3 grid grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">
                    Event
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">
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
            <div>
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
            <div>
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
            <div>
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
          </div>

          {/* Newsletter (takes 3/4 of the width) */}
          <div className="lg:col-span-1">
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