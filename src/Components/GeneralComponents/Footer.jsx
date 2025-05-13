import { ArrowRight, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const handleBookCallClick = (e) => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setShowCalendly(true);
    }, 500);
  };
  return (
    <>
    <footer className="bg-[#00081C] text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Section - CTA and Back to Top */}
        {/* Middle Section - Logo and Links */}
        <div className="grid md:grid-cols-4 lg:grid-cols-8 grid-cols-2 gap-4 mb-16">
          <div className="mb-8 md:col-span-2">
            <div>
              <h2 className="text-xl md:text-2xl font-medium mb-2">Let's work together and<br />make cool things!</h2>
              <button
                className={`mt-4 flex items-center bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 group relative overflow-hidden px-6 py-3`}
                style={{ minWidth: '180px' }}
                onClick={handleBookCallClick}
              >
                <span
                  className={`flex items-center justify-center rounded-full transition-all duration-500 ease-in-out absolute ${isAnimating ? 'left-full -translate-x-12' : 'left-4 bg-white'} `}
                  style={{ width: '2rem', height: '2rem' }}
                >
                  <ArrowRight className={`w-4 h-4 transition-colors duration-500 ${isAnimating ? 'text-white' : 'text-blue-600'}`} />
                </span>
                <span
                  className={`transition-transform duration-500 ease-in-out ${isAnimating ? '-translate-x-8' : 'translate-x-0'} pl-10 text-sm`}
                >
                  Book a call
                </span>
              </button>
            </div>
            
            <button className="mt-6 md:mt-6 flex items-center text-sm hover:text-blue-400 transition-colors">
              <ArrowUp size={16} className="mr-2" />
              <span>back to top</span>
            </button>
          </div>
          {/* Navigation Links Column 1 */}
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white hover:text-blue-400">Home</a></li>
              <li><a href="#" className="text-sm text-white hover:text-blue-400">About</a></li>
              <li><a href="#" className="text-sm text-white hover:text-blue-400">Works</a></li>
              <li><a href="#" className="text-sm text-white hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Navigation Links Column 2 */}
          <div>
            <h3 className="font-medium mb-4">Others</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white hover:text-blue-400">Career</a></li>
              <li><a href="#" className="text-sm text-white hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="text-sm text-white hover:text-blue-400">Quote</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Locations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white hover:text-blue-400">United States</a></li>
              <li><a href="#" className="text-sm text-white hover:text-blue-400">Africa</a></li>
              <li><a href="#" className="text-sm text-white hover:text-blue-400">Europe</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className='md:col-span-2'>
            <h3 className="font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@tfnsoln.com" className="text-sm text-white hover:text-blue-400">
                  Email: <span className='font-bold underline'>hello@tfnsoln.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+14052973833" className="text-sm text-white hover:text-blue-400">
                  Phone: <span className='font-bold underline'>+1(405)297-3833</span>
                </a>
              </li>
              {/* <li className="text-sm text-white">
                Address:<span className='font-bold'><br />USA -<br />Lawton, Oklahoma, Texas</span>
              </li>
              <li className="text-sm text-white">
                Nigeria: <br /><span className='font-bold'>Plot 107 Prisons Estate, Behind<br />Ikoyi Prisons, Ikoyi-Adelabu,<br />Lagos FCT, Abuja</span>
              </li> */}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-medium mb-4">Social</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white hover:text-blue-400">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-white hover:text-blue-400">Instagram</a></li>
              <li><a href="#" className="text-sm text-white hover:text-blue-400">Facebook</a></li>
              <li><a href="#" className="text-sm text-white hover:text-blue-400">X</a></li>
              <li><a href="#" className="text-sm text-white hover:text-blue-400">YouTube</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright and Policies */}
        <div className="flex flex-col pb-6 md:flex-row justify-between items-start md:items-center pt-2 border-t border-gray-800">
          <div className="text-xs text-white">
            <span>All Rights Reserved © 2025</span>
            <div className="mt-1">Powered by TFN Solutions</div>
          </div>
          <div className="mt-4 md:mt-0 space-x-4 text-xs text-white">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
    {showCalendly && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-xl w-full relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
            onClick={() => setShowCalendly(false)}
            aria-label="Close"
          >
            &times;
          </button>
          <iframe
            src="https://calendly.com/ebenezernwolisa100" // Replace with your Calendly link
            width="100%"
            height="400" // Reduced height from 600 to 400
            frameBorder="0"
            title="Book a call"
            className="rounded-lg"
            allow="fullscreen"
          ></iframe>
        </div>
      </div>
    )}
    <Link
      to="https://wa.me/2349111086777"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center px-4 py-2 bg-white border-2 border-green-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 group"
      style={{ boxShadow: '0 0 8px 2px #00FFB2' }}
      aria-label="Send WhatsApp Message"
    >
      <span className="text-xs font-medium text-black mr-2">Send a DM</span>
      <span className="flex items-center justify-center w-6 h-6 bg-black rounded-full">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="8" fill="black"/>
          <path d="M5 7L8 10L11 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </Link>
    </>
  );
}