// import { Link } from "react-router-dom"
// import { Home, ArrowRight } from "lucide-react"

// const GalleriaLandingPage = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <div className="max-w-6xl mx-auto px-6 mt-2 sm:px-0 lg:px-0 py-4">
//         <nav className="flex items-center text-sm text-gray-500">
//           <Link to="/" className="flex items-center hover:text-gray-700">
//             <Home className="h-4 w-4 mr-1" />
//             <span>Home</span>
//           </Link>
//           <span className="mx-2">&gt;</span>
//           <span className="text-gray-900">Gallery</span>
//         </nav>
//       </div>

//       {/* Header */}
//       <div className="max-w-6xl mx-auto px-6 sm:px-0 lg:px-0 py-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Galleria</h1>
//           <div className="flex flex-col space-y-2">
//             <p className="text-gray-600 mb-2">Discover Captured Moments that stand the test of Time</p>
//             <div className="w-full h-0.5 bg-[#D15300]"></div>
//             <div className="flex justify-between items-center">
//               <Link to="/submit-media" className="text-[#D15300] mt-2 font-medium">
//                 SUBMIT YOUR MEDIA HERE
//               </Link>
//               <ArrowRight className="text-[#D85E00] h-4 w-4" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Featured Gallery */}
//       <div className="max-w-6xl mx-auto px-6 sm:px-0 lg:px-0 py-8">
//         <div className="border border-gray-200 overflow-hidden p-4 rounded-sm">
//           <div className="grid grid-cols-2 gap-1">
//             {/* First row with 2 images */}
//             {[...Array(2)].map((_, index) => (
//               <div key={`top-${index}`} className="">
//                 <img
//                   src="https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/galleryplaceholder.png?raw=true"
//                   alt={`Alumni Reunion - Image ${index + 1}`}
//                   className=""
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="grid grid-cols-3 gap-1">
//             {/* Second row with 3 images */}
//             {[...Array(3)].map((_, index) => (
//               <div key={`bottom-${index}`} className="">
//                 <img
//                   src="https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/galleryplaceholder.png?raw=true"
//                   alt={`Alumni Reunion - Image ${index + 3}`}
//                   className=""
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <h2 className="text-xl font-bold">Alumni Reunion (Lagos Chapter)</h2>
//               <p className="text-gray-500 text-sm mt-4">January 1st, 2024</p>
//             </div>
//             <div className="mt-4 sm:mt-0">
//                 <div className="w-96 h-0.5 bg-[#D15300]"></div>
//               <Link to="/gallery/lagos-reunion" className="flex mt-3 items-center justify-between text-[#D85E00] font-medium group">
//                 <span>VIEW ALL IMAGES</span>
//                 <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 sm:px-0 lg:px-0 py-8">
//         <div className="border border-gray-200 overflow-hidden p-4 rounded-sm">
//           <div className="grid grid-cols-2 gap-1">
//             {/* First row with 2 images */}
//             {[...Array(2)].map((_, index) => (
//               <div key={`top-${index}`} className="">
//                 <img
//                   src="https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/galleryplaceholder.png?raw=true"
//                   alt={`Alumni Reunion - Image ${index + 1}`}
//                   className=""
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="grid grid-cols-3 gap-1">
//             {/* Second row with 3 images */}
//             {[...Array(3)].map((_, index) => (
//               <div key={`bottom-${index}`} className="">
//                 <img
//                   src="https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/galleryplaceholder.png?raw=true"
//                   alt={`Alumni Reunion - Image ${index + 3}`}
//                   className=""
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <h2 className="text-xl font-bold">Tech Webinar (Abuja Chapter)</h2>
//               <p className="text-gray-500 text-sm mt-4">January 1st, 2024</p>
//             </div>
//             <div className="mt-4 sm:mt-0">
//                 <div className="w-96 h-0.5 bg-[#D15300]"></div>
//               <Link to="/gallery/lagos-reunion" className="flex mt-3 items-center justify-between text-[#D85E00] font-medium group">
//                 <span>VIEW ALL IMAGES</span>
//                 <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default GalleriaLandingPage






import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const GalleriaLandingPage = () => {
  const galleryEvents = [
    {
      title: "Alumni Reunion (Lagos Chapter)",
      date: "January 1st, 2024",
      images: [
        "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/galleryplaceholder.png?raw=true",
        "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/galleryplaceholder.png?raw=true",
        "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/galleryplaceholder.png?raw=true",
        "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/galleryplaceholder.png?raw=true",
        "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/galleryplaceholder.png?raw=true"
      ],
      link: "/gallery/lagos-reunion"
    },
    {
      title: "Tech Webinar (Abuja Chapter)",
      date: "January 1st, 2024",
      images: [
        "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/galleryplaceholder.png?raw=true",
        "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/galleryplaceholder.png?raw=true",
        "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/galleryplaceholder.png?raw=true",
        "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/galleryplaceholder.png?raw=true",
        "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/galleryplaceholder.png?raw=true"
      ],
      link: "/gallery/abuja-webinar"
    }
  ];

  return (
    <div className="min-h-screen bg-white mb-24">
      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 mt-2 sm:px-0 lg:px-0 py-4">
        <nav className="flex items-center text-sm text-gray-500">
          <Link to="/" className="flex items-center hover:text-gray-700">
            <Home className="h-4 w-4 mr-1" />
            <span>Home</span>
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-900">Gallery</span>
        </nav>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 sm:px-0 lg:px-0 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Galleria</h1>
          <div className="flex flex-col space-y-2">
            <p className="text-gray-600 mb-2">Discover Captured Moments that stand the test of Time</p>
            <div className="w-full h-0.5 bg-[#D15300]"></div>
            <div className="flex justify-between items-center">
              <Link to="/submit-media" className="text-[#D15300] mt-2 font-medium">
                SUBMIT YOUR MEDIA HERE
              </Link>
              <ArrowRight className="text-[#D85E00] h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Sections */}
      {galleryEvents.map((event, eventIndex) => (
        <div key={eventIndex} className="max-w-6xl mx-auto px-6 sm:px-0 lg:px-0 py-8">
          <div className="border border-gray-200 overflow-hidden p-4 rounded-sm">
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {event.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${event.title} - Image ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-1">
                {/* First row with 2 images */}
                {event.images.slice(0, 2).map((image, index) => (
                  <div key={`top-${index}`}>
                    <img
                      src={image}
                      alt={`${event.title} - Image ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-1 mt-1">
                {/* Second row with 3 images */}
                {event.images.slice(2, 5).map((image, index) => (
                  <div key={`bottom-${index}`}>
                    <img
                      src={image}
                      alt={`${event.title} - Image ${index + 3}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold">{event.title}</h2>
                <p className="text-gray-500 text-sm mt-4">{event.date}</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <div className="w-96 h-0.5 bg-[#D15300]"></div>
                <Link to={`/view-gallery`} className="flex mt-3 items-center justify-between text-[#D85E00] font-medium group">
                  <span>VIEW ALL IMAGES</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleriaLandingPage;