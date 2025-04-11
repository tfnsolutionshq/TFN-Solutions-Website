import { Music, Heart, Building } from "lucide-react"

const SecondaryNav = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row">
      {/* Unizik Anthem Link */}
      <a
        href="#"
        className="flex-1 flex items-start justify-between px-10 py-6 sm:py-6 sm:px-8 md:px-12 lg:px-24 bg-orange-100 text-orange-800 hover:bg-orange-200 transition-colors"
      >
        <span className="font-medium text-base sm:text-lg">Unizik Anthem</span>
        <Music className="h-10 w-10 sm:h-16 sm:w-16" />
      </a>

      {/* Donate Link */}
      <a
        href="#"
        className="flex-1 flex items-start justify-between px-10 py-6 sm:py-6 sm:px-8 md:px-12 lg:px-24 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
      >
        <span className="font-medium text-base sm:text-lg">Donate</span>
        <Heart className="h-10 w-10 sm:h-16 sm:w-16" />
      </a>

      {/* Campus Tour Link */}
      <a
        href="#"
        className="flex-1 flex items-start justify-between px-10 py-6 sm:py-6 sm:px-8 md:px-12 lg:px-24 bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
      >
        <span className="font-medium text-base sm:text-lg">Campus Tour</span>
        <Building className="h-10 w-10 sm:h-16 sm:w-16" />
      </a>
    </div>
  )
}

export default SecondaryNav