import { useState, useEffect } from 'react';
import ExperienceImg from '../../assets/Images/Image 5.png';

const AboutSection = () => {
  // Initial counter values
  const [counters, setCounters] = useState([
    { id: 1, value: 0, target: 5000, prefix: '+', display: '5K', title: 'Completed Projects' },
    { id: 2, value: 0, target: 300, prefix: '+', display: '300', title: 'Happy Clients' },
    { id: 3, value: 0, target: 10, prefix: '+', display: '10', title: 'Years of digital experience' },
    { id: 4, value: 0, target: 30, prefix: '+', display: '30', title: 'Dedicated team member' },
  ]);

  useEffect(() => {
    // Start the counter animation when component mounts
    const duration = 2000; // 2 seconds for the animation
    const interval = 20; // Update every 20ms for smooth animation
    
    const timer = setInterval(() => {
      setCounters(prevCounters => {
        // Check if all counters have reached their targets
        const allDone = prevCounters.every(counter => counter.value >= counter.target);
        
        if (allDone) {
          clearInterval(timer);
          return prevCounters;
        }
        
        // Update each counter with a smooth increment
        return prevCounters.map(counter => {
          if (counter.value >= counter.target) {
            return counter; // Already reached target
          }
          
          // Calculate increment based on target value and remaining time
          const increment = counter.target / (duration / interval);
          const newValue = Math.min(counter.value + increment, counter.target);
          
          return {
            ...counter,
            value: newValue,
          };
        });
      });
    }, interval);
    
    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-4 ">
        {/* About Header with Orange Dot */}
        <div className="flex items-center mb-0">
          <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
          <span className="text-sm font-medium">About</span>
        </div>
        
        {/* Main About Content */}
        <div className="flex flex-col justify-between md:flex-row items-start mb-16 gap-16">
          {/* Placeholder Circle/Image */}
          <div className="w-full md:w-1/3 mt-8 relative">
            <div className="bg-gray-200 rounded-full aspect-[2/1] w-full"></div>
            <img src={ExperienceImg} className='rounded-full w-full h-full absolute bottom-0 top-3 left-3' alt="" />
          </div>
          
          {/* Text Content */}
          <div className="w-full md:w-2/3 ">
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              With 10 years of experience and a passion for creativity, our team of experts specializes in <span className="text-gray-400">crafting unique brand experiences that resonate with audiences and drive results.</span>
            </h2>
          </div>
        </div>
        
        {/* Counters Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {counters.map((counter) => (
            <div key={counter.id} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-1">
                <span className="text-blue-500">{counter.prefix}</span>
                {counter.value >= counter.target ? counter.display : Math.floor(counter.value)}
              </h3>
              <p className="text-xs text-gray-500">
                {counter.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;