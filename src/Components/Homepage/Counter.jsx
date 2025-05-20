import { useState, useEffect } from 'react';

const Counter = () => {
  // Initial counter values
  const [counters, setCounters] = useState([
    { id: 1, value: 0, target: 50, title: 'Projects', subtitle: 'completed as far' },
    { id: 2, value: 0, target: 3, title: 'Office locations', subtitle: 'worldwide' },
    { id: 3, value: 0, target: 10, title: 'Years of digital', subtitle: 'experience' },
    { id: 4, value: 0, target: 30, title: 'Dedicated team', subtitle: 'member' },
  ]);

  useEffect(() => {
    // Start the counter animation when component mounts
    const duration = 5000; // 2 seconds for the animation
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
    <div className="py-6 bg-[#F7F7F7]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter) => (
            <div key={counter.id} className="text-center">
              <h3 className="md:text-5xl text-4xl font-bold text-black mb-2">
                <span className='text-blue-500'>+</span>
                {counter.value.toFixed(0) >= 1000 ? `${(counter.value/1000).toFixed(0)}k` : counter.value.toFixed(0)}
              </h3>
              <p className="text-sm text-gray-500">
                {counter.title}
                <br />
                {counter.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;