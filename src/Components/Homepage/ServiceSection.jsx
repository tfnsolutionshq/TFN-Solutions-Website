import { useState, useEffect } from 'react';

const ServiceSection = () => {
  // State to track which parts of the text should be bold
  const [textState, setTextState] = useState({
    part1: true, // "We provide Comprehensive Solutions"
    part2: false, // "to elevate"
    part3: false  // "businesses"
  });

  // Effect to animate the text styling
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setTextState(prev => {
        if (prev.part1) return { part1: false, part2: true, part3: false };
        if (prev.part2) return { part1: false, part2: false, part3: true };
        return { part1: true, part2: false, part3: false };
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <main className='bg-[#F7F7F7]'>
      <section className="max-w-6xl mx-auto bg-[#F7F7F7] flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-24 pt-8">
        <div className="flex flex-col items-start w-full md:w-1/3 mb-6 md:mb-0">
          <div className="flex items-center">
            <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2 animate-blink"></span>
            <span className="text-sm md:text-lg font-medium text-gray-700">Service</span>
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col items-start md:items-end">
          {/* Animated heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight">
            <span className={textState.part1 ? 'font-bold text-black' : 'font-normal text-gray-400'}>
              We provide Comprehensive Solutions
            </span>{' '}
            <span className={textState.part2 ? 'font-bold text-black' : 'font-normal text-gray-400'}>
              to elevate
            </span>{' '}
            <span className={textState.part3 ? 'font-bold text-black' : 'font-normal text-gray-400'}>
              businesses
            </span>
          </h2>
        </div>
      </section>
    </main>
  );
};

export default ServiceSection;