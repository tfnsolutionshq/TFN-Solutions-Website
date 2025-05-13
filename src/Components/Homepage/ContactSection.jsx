import BG from '../../assets/Images/Rectangle 3.png';
import vector1 from '../../assets/Images/Vector 1.png';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      // Optionally, navigate or trigger modal here
    }, 500);
  };

  return (
    <section className="relative overflow-hidden h-[70vh]">
      {/* Main container with background image and gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Background image */}
          <div className="absolute inset-0">
            <img 
              src={BG}
              alt="Professional consultant" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Gradient overlay - starts at 1/3, full at 2/3 */}
          <div 
            className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-r from-blue-800/90 via-blue-800/100 to-blue-900/100"
            style={{ 
              maskImage: 'linear-gradient(to right, transparent 0%, black 33.33%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 33.33%)'
            }}
          ></div>
        </div>
      </div>

      {/* Content container - unchanged */}
      <div className="relative z-1 flex items-center justify-end h-full">
        {/* Content area - positioned on the right side */}
        <div className="w-full md:w-1/2 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <p className="text-sm md:text-base opacity-80 mb-2">Have a project in mind or just need expert advice?</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">We're ready to help</h2>
          {/* Animated Button */}
          <button
            className="relative flex items-center bg-blue-600 text-white rounded-full py-3 px-8 w-fit hover:bg-blue-700 transition-colors duration-300 group overflow-hidden mt-6 font-medium"
            style={{ minWidth: '180px' }}
            onClick={handleButtonClick}
          >
            {/* Arrow icon that animates from left to right */}
            <span
              className={`flex items-center justify-center rounded-full transition-all duration-500 ease-in-out absolute ${isAnimating ? 'left-full -translate-x-12' : 'left-4 bg-white'}`}
              style={{ width: '2rem', height: '2rem' }}
            >
              <ArrowRight className={`w-4 h-4 transition-colors duration-500 ${isAnimating ? 'text-white' : 'text-blue-600'}`} />
            </span>
            {/* Text that animates left */}
            <span
              className={`transition-transform duration-500 ease-in-out ${isAnimating ? '-translate-x-8' : 'translate-x-0'} pl-6`}
            >
              Talk to Us
            </span>
          </button>
        </div>
      </div>

      {/* Yellow curved vector - unchanged */}
      <div className="absolute w-[190%] -left-[25%] lg:top-48 md:top-72 top-72 z-20">
        <img 
          src={vector1} 
          alt="" 
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default ContactSection;