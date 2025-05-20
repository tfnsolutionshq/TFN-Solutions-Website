// import { useState, useEffect } from 'react';
// import { Map } from 'lucide-react';

// // Main Map Component
// export default function InteractiveMap() {
//   const [isLoading, setIsLoading] = useState(true);
  
//   // Simulate map loading
//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden relative">
//       {/* Map Container */}
//       <div className="w-full h-full relative">
//         {isLoading ? (
//           <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//           </div>
//         ) : (
//           <>
//             {/* Map Image */}
//             <div className="w-full h-full bg-gray-300 relative overflow-hidden">
//               <div 
//                 className="w-full h-full bg-cover bg-center" 
                
//                 style={{ 
//                   backgroundImage: "url('/api/placeholder/800/600')",
//                   filter: "grayscale(0.8)"
//                 }}
//               />
              
              
//               {/* Marker for Kawab HQ */}
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                 <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md space-x-3">
//                   <div className="flex flex-col text-left">
//                     <span className="font-semibold text-black leading-tight">Kawab HQ</span>
//                     <span className="text-gray-500 text-xs leading-tight">Texas, USA</span>
//                   </div>
//                   <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white shadow-lg">
//                     <Map size={18} />
//                   </div>
//                 </div>
//               </div>
//               <div className="relative">
//                 <div className="bg-blue-500 rounded-full h-6 w-6 flex items-center justify-center text-white shadow-lg">
//                   <Map size={14} />
//                 </div>
//                 <div className="absolute -bottom-12 -left-16 bg-white px-3 py-1 rounded-lg shadow-md text-sm whitespace-nowrap">
//                   Kandali HQ <span className="text-gray-500 text-xs">Dhaka, BD</span>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }







import { useState, useEffect } from 'react';
import { Map } from 'lucide-react';

// Main Map Component
export default function InteractiveMap() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate map loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-96 bg-gray-200 overflow-hidden relative">
      {/* Map Container */}
      <div className="w-full h-full relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {/* Map Image with Dark Overlay */}
            <div className="w-full h-full bg-gray-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <iframe
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11547.83791821811!2d-79.387015!3d43.6534813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                style={{ filter: "grayscale(0.8)" }}
              ></iframe>
              
              {/* Marker for Kawab HQ */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md space-x-3">
                  <div className="flex flex-col text-left">
                    <span className="font-semibold text-black leading-tight">Kawab HQ</span>
                    <span className="text-gray-500 text-xs leading-tight">Toronto, USA</span>
                  </div>
                  <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white shadow-lg">
                    <Map size={18} />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}