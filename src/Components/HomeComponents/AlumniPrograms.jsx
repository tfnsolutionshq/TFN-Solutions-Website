import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"

const NewsEvents = () => {
    // News items data
    const newsItems = [
        {
            title: "Tips: How to secure Transcript for Int'l Purpose",
            image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/programs/image%20(3).png?raw=true",
            date: "17 JUNE 2020",
            slug: "transcript-tips",
        },
        {
            title: "Post Graduate Studies: The Important factor to bear in mind",
            image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/programs/image%20(4).png?raw=true",
            date: "17 JUNE 2020",
            slug: "post-graduate-studies",
        },
        {
            title: "Unizik Renovation Project on the Library unit",
            image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/programs/image%20(5).png?raw=true",
            date: "17 JUNE 2020",
            slug: "library-renovation",
        },
        {
            title: "Masters Application is now open for all interested candidates",
            image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/programs/image%20(6).png?raw=true",
            date: "17 JUNE 2020",
            slug: "masters-application",
        },
        {
            title: "New Vice Chancellor Inaugurated on the new session",
            image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/programs/image%20(7).png?raw=true",
            date: "17 JUNE 2020",
            slug: "new-vice-chancellor",
        },
    ]

    return (
        <>
            <main className="border-b">
                <section className="w-full max-w-6xl mx-auto px-4 font-instrument sm:px-6 lg:px-8 py-12">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* News Column */}
                        <div>
                            <h2 className="text-lg font-bold border-b border-[#D85E00] pb-2 mb-6">NEWS FOR ALUMNI</h2>

                            <div className="space-y-6">
                                {newsItems.map((item, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-shrink-0 w-20 h-20 relative">
                                            <img
                                                src={item.image || "/placeholder.svg"}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div>
                                            <h3 className="font-medium hover:text-[#D85E00] transition-colors">
                                                <Link to={`/news/${item.slug}`}>{item.title}</Link>
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Events Column */}
                        <div>
                            <h2 className="text-lg font-bold border-b border-[#D85E00] pb-2 mb-6">ALUMNI PROGRAMS & EVENTS</h2>

                            <div className="mb-6">
                                <div className="relative h-60 overflow-hidden">
                                    <img src="https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/programs/image%20(2).png?raw=true" alt="Alumni Programs" className="w-full h-full object-cover" />
                                    <div className="absolute w-32 bottom-0 left-0 right-0 bg-[#D85E00] text-white p-2">
                                        <Link to="/programs" className="font-medium">
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-medium text-lg">Alumni Reunion Reboot 2.0 (Lagos Chapter)</h3>
                                    <p className="text-gray-700 my-2 line-clamp-2">
                                        Post Graduate Studies: The Important factor to bear in mind Post Graduate Studies: The Important factor
                                        to bear in mind
                                    </p>
                                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600">
                                        <span>Lagos, Nigeria</span>
                                        <span>17 Jan, 2024 | 12:00PM</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 mt-6">
                                <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
                                    <ChevronLeft className="h-4 w-4" />
                                    <span className="sr-only">Previous</span>
                                </button>
                                <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
                                    <ChevronRight className="h-4 w-4" />
                                    <span className="sr-only">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default NewsEvents
