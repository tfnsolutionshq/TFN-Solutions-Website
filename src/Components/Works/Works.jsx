import { useState } from 'react';
import Afriwok from '../../assets/works/afriwokbanner.jpg';
import Crystalbricks from '../../assets/works/crystalbanner.png';
import UnizikAlumni from '../../assets/works/Alumni_Banner.png';
import Infrastructure from '../../assets/Images/infra1.jpg';
import { Link } from 'react-router-dom';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', name: 'All Work' },
    { id: 'software', name: 'Software Development' },
    { id: 'network', name: 'Network Solutions' },
    // { id: 'startup', name: 'Sta' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Afriwok',
      category: 'software',
      image: Afriwok,
      slug: 'afriwok' // Added slug for URL
    },
    {
      id: 2,
      title: 'Unizik Alumni Portal',
      category: 'software',
      image: UnizikAlumni,
      slug: 'unizik-alumni'
    },
    {
      id: 3,
      title: 'Crystalbricks',
      category: 'software',
      image: Crystalbricks,
      slug: 'crystalbricks'
    },
    {
      id: 4,
      title: 'Infrastructure Service',
      category: 'network',
      image: Infrastructure,
      slug: 'infrastructure-service'
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <main className='border-t border-red-900'>
      <section className="pb-16 pt-36 px-4 bg-[var(--background-primary)]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-orange-500 font-medium mb-2">WORKS</p>
            <h2 className="text-3xl md:text-6xl font-bold mb-4">Our latest works</h2>
            <p className="text-[var(text-secondary)] max-w-2xl">
              Deploy smart customized systems for firms, business, or enterprise quickly with expert 
              integration and support.
            </p>
          </div>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-start gap-3 mb-10">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full text-sm transition-all ${
                  activeFilter === filter.id
                    ? 'border-blue-600 border text-[var(--text-primary)] bg-[var(--background-primary)]'
                    : 'bg-white border border-gray-200 text-[var(--text-secondary)] hover:bg-gray-100'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
          
          {/* Portfolio grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map(project => (
              <Link 
                to={`/works/${project.slug}`} 
                key={project.id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-w-16 p-2 rounded-lg aspect-h-10 w-full">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full rounded-lg h-64 bg-[#EAEAEA] object-cover"
                  />
                </div>
                <div className="px-3 py-2 flex justify-between items-center">
                  <p className="font-medium">{project.title}</p>
                  <button className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}