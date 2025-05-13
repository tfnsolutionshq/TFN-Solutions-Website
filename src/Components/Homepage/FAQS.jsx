import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      id: '01',
      question: 'What services do you offer?',
      answer: 'We offer a comprehensive range of design and development services including UI/UX design, web development, mobile app development, branding, and digital marketing strategies tailored to your specific business needs.'
    },
    {
      id: '02',
      question: 'How do you price your services?',
      answer: 'Our pricing is based on project scope, complexity, and timeline. We offer flexible pricing models including fixed-price quotes, hourly rates, and retainer packages. We provide detailed estimates after an initial consultation to understand your requirements.'
    },
    {
      id: '03',
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. Simple websites might take 2-4 weeks, while complex web applications can take 2-6 months. During our initial discussion, we will provide a realistic timeline based on your specific project requirements.'
    },
    {
      id: '04',
      question: 'What support do you offer after launch?',
      answer: 'We provide ongoing support and maintenance packages to ensure your product continues to function optimally. This includes bug fixes, security updates, performance optimization, and technical support. We also offer training to help your team manage the platform independently.'
    },
    {
      id: '05',
      question: 'How do I begin a project?',
      answer: 'Starting a project is simple. Contact us through our website form, email, or phone. We will schedule an initial consultation to discuss your goals, requirements, and vision. After that, we will provide a proposal outlining scope, timeline, and cost before proceeding with the development process.'
    }
  ];

  // Animated text state for heading
  const [textState, setTextState] = useState({
    part1: true, // "Frequently Asked"
    part2: false, // "Questions"
    part3: false  // (not used, for consistency)
  });

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setTextState(prev => {
        if (prev.part1) return { part1: false, part2: true, part3: false };
        if (prev.part2) return { part1: true, part2: false, part3: false };
        return { part1: true, part2: false, part3: false };
      });
    }, 2000);
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <main className='bg-[#F7F7F7]'>
      <section className="max-w-4xl bg-[#F7F7F7] mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
          <div className="flex flex-col items-start w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2 animate-blink"></span>
              <span className="text-sm md:text-lg font-medium text-gray-700">FAQs</span>
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-col items-start md:items-end">
            {/* Animated heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight">
              <span className={textState.part1 ? 'font-bold text-black' : 'font-normal text-gray-400'}>
                Frequently Asked
              </span>{' '}
              <span className={textState.part2 ? 'font-bold text-black' : 'font-normal text-gray-400'}>
                Questions
              </span>
            </h2>
          </div>
      </div>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div 
            key={item.id} 
            className="border-b border-gray-100 pb-4"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between text-left focus:outline-none"
            >
              <div className="flex items-center">
                <span className="text-gray-900 text-sm mr-3">({item.id})</span>
                <h3 className="text-xl font-semibold">{item.question}</h3>
              </div>
              <div className={`bg-gray-100 p-2 rounded-lg transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                <ChevronDown size={16} />
              </div>
            </button>
            
            <div 
              className={`mt-2 pl-8 transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </main>
  );
}