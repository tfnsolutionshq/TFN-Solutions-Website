import { useState } from 'react';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'website',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'CRM System',
      category: 'systems',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Brand Identity',
      category: 'branding',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'Corporate Website',
      category: 'website',
      image: '/api/placeholder/400/300'
    },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <main className=''>
    <section className="px-4 sm:px-6 lg:px-8 pb-16 bg-[#F7F7F7]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-orange-500 font-medium mb-2">Related</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Similar Projects</h2>
        </div>
        

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className="group relative bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-w-16 p-2 rounded-lg aspect-h-10 w-full">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full rounded-lg h-64 bg-[#EAEAEA] object-cover"
                />
              </div>
              <div className="px-3 py-2 flex justify-between items-center">
                <div>
                <p className="text-sm font-medium text-gray-500">{project.category}</p>
                <p className="font-medium">{project.title}</p>
                </div>
                <button className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
  );
}