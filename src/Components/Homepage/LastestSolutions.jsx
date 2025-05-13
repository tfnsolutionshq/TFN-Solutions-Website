import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LatestSolutions() {

    const solutions = [
        {
            id: 1,
            category: 'Website, Webapp',
            title: 'Unizik Alumni Website',
            image: '/api/placeholder/220/160'
        },
        {
            id: 2,
            category: 'App',
            title: 'Afriwok',
            image: '/api/placeholder/280/160'
        },
        {
            id: 3,
            category: 'Website, Portal',
            title: 'Unizik',
            image: '/api/placeholder/280/160'
        },
        {
            id: 4,
            category: 'Website, Web App',
            title: 'CrystalBricks',
            image: '/api/placeholder/160/160'
        }
    ];

    // Animated text state for heading
    const [textState, setTextState] = useState({
        part1: true, // "Explore our latest"
        part2: false, // "Solutions."
        part3: false  // (not used, but for consistency)
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

    // Add filter state and logic
    const filters = [
        { id: 'all', name: 'All' },
        { id: 'website', name: 'Website' },
        { id: 'webapp', name: 'Web App' },
        { id: 'app', name: 'App' },
        { id: 'portal', name: 'Portal' }
    ];

    // Map solution categories to filter ids for filtering
    const getSolutionCategoryId = (solution) => {
        // You can adjust this logic as needed for your real data
        if (solution.category.toLowerCase().includes('website')) return 'website';
        if (solution.category.toLowerCase().includes('webapp')) return 'webapp';
        if (solution.category.toLowerCase().includes('app')) return 'app';
        if (solution.category.toLowerCase().includes('portal')) return 'portal';
        return 'other';
    };

    const [activeFilter, setActiveFilter] = useState('all');

    const filteredSolutions = activeFilter === 'all'
        ? solutions
        : solutions.filter(sol => getSolutionCategoryId(sol) === activeFilter);

    return (
        <section className="bg-[#ECEFF7] py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <div className=" mb-8">
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                        <div className="flex items-center mb-2">
                            <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2 animate-blink"></span>
                            <span className="text-sm md:text-lg font-medium text-gray-700">Works</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            <span className={textState.part1 ? 'font-bold text-black' : 'font-normal text-gray-400'}>
                                Explore our latest
                            </span>
                            <br />
                            <span className={textState.part2 ? 'font-bold text-black' : 'font-normal text-gray-400'}>
                                Solutions.
                            </span>
                        </h2>
                    </div>
                </div>

                {/* Filter buttons */}
                <div className="flex flex-wrap justify-start gap-3 mb-10">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-5 py-2 rounded-full text-sm transition-all ${
                                activeFilter === filter.id
                                    ? 'border-blue-600 border text-blue-600 bg-white'
                                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {filter.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {filteredSolutions.map((solution, idx) => {
                        // Determine row and position in row
                        const row = Math.floor(idx / 2);
                        const isFirstInRow = idx % 2 === 0;
                        // Alternate which item is wider per row
                        let colSpan = "md:col-span-5";
                        if ((row % 2 === 0 && !isFirstInRow) || (row % 2 === 1 && isFirstInRow)) {
                            colSpan = "md:col-span-7";
                        }
                        return (
                            <div key={solution.id} className={`${colSpan}`}>
                                <div className="bg-white rounded-lg h-full p-2 relative">
                                    <img
                                        src={solution.image}
                                        alt={solution.title}
                                        className="w-full h-56 object-cover bg-[#EAEAEA] rounded-lg"
                                    />
                                    <div className='flex my-3 justify-between items-center'>
                                        <div>
                                            <p className="text-xs text-gray-500">{solution.category}</p>
                                            <h3 className="font-medium">{solution.title}</h3>
                                        </div>
                                        <div className="bg-orange-500 text-white p-2 rounded-full ml-4 flex-shrink-0">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}