import { Link } from "react-router-dom"
import { Home } from "lucide-react"
import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const GalleryDetailPage = () => {
  // Generate array of 11 identical images for the grid
  const images = Array(11).fill("https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/galleryplaceholder.png?raw=true")

  // Popup state
  const [popupOpen, setPopupOpen] = useState(false)
  const [popupIndex, setPopupIndex] = useState(0)

  const openPopup = (index) => {
    setPopupIndex(index)
    setPopupOpen(true)
  }

  const closePopup = () => setPopupOpen(false)

  const showPrev = () => setPopupIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  const showNext = () => setPopupIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))

  return (
    <div className="min-h-screen bg-white mb-24">
      {/* Navigation */}
      <div className="max-w-6xl mt-2 mx-auto px-6 sm:px-0 lg:px-0 py-4">
        <nav className="flex items-center text-sm text-gray-500">
          <Link to="/" className="flex items-center hover:text-gray-700">
            <Home className="h-4 w-4 mr-1" />
            <span>Home</span>
          </Link>
          <span className="mx-2">&gt;</span>
          <Link to="/gallery" className="hover:text-gray-700">
            Gallery
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-900">Alumni Reunion (Lagos Chapter)</span>
        </nav>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 sm:px-0 lg:px-0 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Alumni Reunion (Lagos Chapter)</h1>
        <p className="text-gray-500">January 1st, 2024</p>
      </div>

      {/* Image Grid */}
      <div className="max-w-6xl mx-auto mt-6 px-6 sm:px-0 lg:px-0">
        <div className="space-y-2 border p-4 rounded-sm">
          {/* First four rows with 2 images each */}
          {[0, 2, 4, 6].map((startIndex) => (
            <div key={`row-${startIndex}`} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {images.slice(startIndex, startIndex + 2).map((image, index) => (
                <div key={`img-${startIndex + index}`}>
                  <img
                    src={image}
                    alt={`Alumni Reunion - Image ${startIndex + index + 1}`}
                    className="cursor-pointer transition-transform hover:scale-105"
                    onClick={() => openPopup(startIndex + index)}
                  />
                </div>
              ))}
            </div>
          ))}

          {/* Fifth row with 3 images */}
          <div className="grid grid-cols-3 gap-2">
            {images.slice(8, 11).map((image, index) => (
              <div key={`img-${8 + index}`}>
                <img
                  src={image}
                  alt={`Alumni Reunion - Image ${8 + index + 1}`}
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openPopup(8 + index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {popupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <button
            className="absolute top-6 right-6 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 transition"
            onClick={closePopup}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 transition"
            onClick={showPrev}
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <img
            src={images[popupIndex]}
            alt={`Gallery Image ${popupIndex + 1}`}
            className="max-h-[80vh] max-w-[90vw] rounded shadow-lg object-contain"
          />
          <button
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 transition"
            onClick={showNext}
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}

      {/* Pagination */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-sm text-gray-500 mb-4 sm:mb-0">Page 1 of 5</div>

        <div className="flex items-center space-x-1">
          <button
            disabled
            className="w-8 h-8 flex items-center justify-center rounded text-gray-300 cursor-not-allowed"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 flex items-center justify-center rounded ${
                page === 1 ? "bg-[#D85E00] text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
              aria-label={`Page ${page}`}
              aria-current={page === 1 ? "page" : undefined}
            >
              {page}
            </button>
          ))}

          <button
            className="w-8 h-8 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100"
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default GalleryDetailPage