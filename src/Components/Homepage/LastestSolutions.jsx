import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LatestSolutions() {

    const solutions = [
        {
            id: 1,
            category: 'software',
            title: 'Unizik Alumni Website',
            image: "https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/works/Alumni_banner.png",
            link: '/projects/unizik-alumni'
        },
        {
            id: 2,
            category: 'software',
            title: 'Afriwok',
            image: "https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/works/afriwokbanner.jpg",
            link: '/projects/afriwok'
        },
        // {
        //     id: 3,
        //     category: 'software',
        //     title: 'Unizik',
        //     image: '/api/placeholder/280/160'
        // },
        {
            id: 3,
            category: 'software',
            title: 'CrystalBricks',
            image: "https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/works/crystalbanner.png",
            link: '/projects/crystalbricks'
        },
        {
            id: 4,
            category: 'network',
            title: 'Infrastructure Service',
            image: "https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/infra1.jpg",
            link: '/projects/infrastructure-service'
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
        { id: 'software', name: 'Software' },
        { id: 'network', name: 'Network Solution' },
    ];

    // Map solution categories to filter ids for filtering
    const getSolutionCategoryId = (solution) => {
        // You can adjust this logic as needed for your real data
        if (solution.category.toLowerCase().includes('software')) return 'software';
        if (solution.category.toLowerCase().includes('network')) return 'network';
        // if (solution.category.toLowerCase().includes('app')) return 'app';
        // if (solution.category.toLowerCase().includes('portal')) return 'portal';
        return 'other';
    };

    const [activeFilter, setActiveFilter] = useState('all');

    const filteredSolutions = activeFilter === 'all'
        ? solutions
        : solutions.filter(sol => getSolutionCategoryId(sol) === activeFilter);

    return (
        <section className="bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background-primary)] py-16 px-4">
            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-12">
                    <div className="inline-flex items-center mb-3">
                        <div className="h-px w-8 bg-blue-600 mr-3"></div>
                        <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">What We've Done</span>
                        <div className="h-px w-8 bg-blue-600 ml-3"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                        Our Creative Solutions
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We have consistently delivered innovative software solutions that have significantly contributed to our clients' success.
                    </p>
                </div>

                {/* Filter buttons */}
                <div className="flex flex-wrap justify-start gap-3 mb-10">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-5 py-2 rounded-full text-sm transition-all ${activeFilter === filter.id
                                    ? 'border-blue-600 border text-[var(--text-primary)] bg-white'
                                    : 'bg-white border border-gray-200 text-[var(--text-primary)] hover:bg-gray-100'
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
                                <div
                                    className="bg-white rounded-lg h-full p-2 relative cursor-pointer hover:shadow-md transition-shadow"
                                    onClick={() => window.location.href = solution.link}
                                >
                                    <img
                                        src={solution.image}
                                        alt={solution.title}
                                        className="w-full h-56 object-cover bg-[#EAEAEA] rounded-lg"
                                    />
                                    <div className='flex my-3 justify-between items-center px-2'>
                                        <div>
                                            <p className="text-xs text-gray-500">{solution.category.charAt(0).toUpperCase() + solution.category.slice(1)}</p>
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