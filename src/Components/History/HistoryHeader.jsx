import { Link } from "react-router-dom"
import { Home } from "lucide-react"

const HistoryHeader = () => {
  return (
    <div className="w-full">
      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-6 sm:px-0 lg:px-0 py-6">
        <nav className="flex items-center text-sm text-gray-500">
          <Link to="/" className="flex items-center hover:text-gray-700">
            <Home className="h-4 w-4 mr-1" />
            <span>Home</span>
          </Link>
          <span className="mx-2">&gt;</span>
          <Link to="/about" className="hover:text-gray-700">
            About Us
          </Link>
        </nav>
      </div>

      {/* Page Title */}
      <div className="max-w-6xl mx-auto px-6 sm:px-0 lg:px-0 pb-8 pt-2">
        <h1 className="text-3xl font-bold text-gray-900">Our History</h1>
      </div>

      {/* Banner Image */}
      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] relative overflow-hidden">
        <img
          src="https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/image%20(2).png?raw=true"
          alt="UNIZIK Alumni Association Conference"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
    </div>
  )
}

export default HistoryHeader
