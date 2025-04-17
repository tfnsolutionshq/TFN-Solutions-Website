import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import AboutBg from "../../assets/Images/aboutbgg.png"

const AboutUs = () => {
    return (
        <>
        <main className="relative">
            {/* Background split into three parts */}
            <div className="absolute inset-0 w-full h-full">
                <div className="flex h-full">
                    {/* First third - white background */}
                    <div className="w-1/3 bg-white"></div>
                    {/* Second third - white background */}
                    <div className="w-1/3 bg-white"></div>
                    {/* Last third - image with gradient overlay */}
                    <div className="w-1/3 relative">
                        <img 
                            src={AboutBg} 
                            alt="Campus background" 
                            className="absolute inset-0 w-full h-full cover right"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
                    </div>
                </div>
            </div>

            <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="relative rounded-lg overflow-hidden">
                    {/* Content */}
                    <div className="relative z-20 p-6 md:p-10 ">
                        <div className="inline-block px-3 py-1 text-sm text-[#D85E00] bg-[#FFF5F0] font-medium mb-4">ABOUT US</div>

                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            The Great Unizik Alumni Association draws its membership from graduates and associates of Nnamdi Azikiwe
                            University, Awka, Nigeria.
                        </h2>

                        <p className="text-gray-700 mb-8">
                            Founded in 1991, Nnamdi Azikiwe University has, for over three decades, provided qualitative and
                            research-oriented education to Nigerians and all those who have entered its domain in search of knowledge.
                            The University has built a legacy of excellence and has been instrumental in the production of top-range
                            graduates and academia who have had tremendous impact, directly or indirectly, on growth and development in
                            Nigeria.
                        </p>

                        <div className="space-y-4">
                            <div className="border-t border-gray-300 pt-4">
                                <div className="flex justify-between items-center">
                                    <Link to="/history" className="text-[#D85E00] font-medium">
                                        Read about our History
                                    </Link>
                                    <ArrowRight className="text-[#D85E00] h-4 w-4" />
                                </div>
                            </div>

                            <div className="border-t border-gray-300 pt-4">
                                <div className="flex justify-between items-center">
                                    <Link to="/gallery" className="text-[#D85E00] font-medium">
                                        View our Galleria
                                    </Link>
                                    <ArrowRight className="text-[#D85E00] h-4 w-4" />
                                </div>
                            </div>

                            <div className="border-t border-gray-300 pt-4">
                                <div className="flex justify-between items-center">
                                    <Link to="/committees" className="text-[#D85E00] font-medium">
                                        Our Executive Committees
                                    </Link>
                                    <ArrowRight className="text-[#D85E00] h-4 w-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </main>
        </>
    )
}

export default AboutUs