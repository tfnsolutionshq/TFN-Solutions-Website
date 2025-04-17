import { Phone } from "lucide-react"
import { Link } from "react-router-dom"

const TopBar = () => {
  return (
    <div className="w-full bg-[#20608B] text-white px-8 md:px-24">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Phone className="h-4 w-4 mr-1" />
          <span className="text-sm md:text-base font-rethink">Talk to Us</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to={`/become-a-member`}
            className="bg-[#D15300] text-white text-sm md:text-sm px-2 py-4 md:px-4 hover:bg-orange-600 transition-colors"
          >
            Become a Member
          </Link>
          <Link to={`/alumni-directory`} className="text-sm md:text-sm hover:underline">
            Alumni Directory
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopBar
