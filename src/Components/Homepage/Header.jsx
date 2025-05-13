import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Mail, ArrowRight } from 'lucide-react'
import { Link } from "react-router-dom"
import { TypeAnimation } from "react-type-animation"
import ChainBg from "../../assets/Images/BG.jpg"
import Img from '../../assets/Images/image 10.png'

const HeroSection = () => {
    const [textToggle, setTextToggle] = useState(false)

    // Toggle text styling every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setTextToggle(prev => !prev)
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-col min-h-screen mt-24">
            {/* Top bar */}
            <div className="bg-[#E3E9F8] py-4 px-4 flex flex-col md:flex-row justify-center items-start md:items-center text-sm text-gray-700 md:gap-6 gap-2">
                <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>Email Us: <a href="mailto:support@itsolutions.us" className="hover:underline text-[#4175FC]">support@itsolutions.us</a></span>
                </div>
                <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-black" />
                    <span className="text-[#4175FC]">Phone: US (+02 098 0381) NG (+234 708 098 0381)</span>
                </div>
            </div>

            {/* Hero section */}
            <div
                className="text-white flex-1 flex flex-col items-center justify-center py-36 px-4 text-center relative overflow-hidden"
            >
                {/* Background Image with Gradient Overlay */}
                <div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center z-10"
                    style={{ 
                        backgroundImage: `url(${ChainBg})`,
                        opacity: 1 // Adjust opacity to make image more visible
                    }}
                />
                <div 
                    className="absolute inset-0 w-full h-full z-0"
                    style={{
                        background: "linear-gradient(to right, rgba(4, 28, 88, 0.01) 0%, rgba(4, 28, 88, 0) 25%, rgba(4, 28, 88, 0) 50%, rgba(4, 28, 88, 0) 75%, rgba(4, 28, 88, 0) 100%)"
                    }}
                />

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
                <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Powering Your Digital Future
                    </motion.h1>
                    <div className="text-3xl md:text-6xl font-bold mb-12 flex flex-wrap justify-center w-full">
                        <span className="text-yellow-300 mr-2"></span>
                        <span className="text-yellow-300 italic mr-2 inline-block min-w-[120px]">
                            <TypeAnimation
                                sequence={[
                                    'one solution',
                                    2000,
                                    'one product',
                                    2000,
                                    ' one support',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={20}
                                repeat={Infinity}
                            />
                        </span>
                        <span className="text-white italic">at a time</span>
                    </div>

                    <div className="flex space-x-3 mb-12 justify-center w-full">
                        {["Design", "Build", "Deploy", "Support"].map((item, idx, arr) => (
                            <span key={item} className="flex items-center">
                                <Link
                                    to={`/${item.toLowerCase()}`}
                                    className="hover:text-yellow-300 transition-colors"
                                >
                                    We {item}
                                </Link>
                                {idx < arr.length - 1 && (
                                    <span className="ml-2 text-gray-500 text-xl font-light select-none">|</span>
                                )}
                            </span>
                        ))}
                    </div>
                </div>

                <motion.button
                    className="z-30 bg-blue-700 hover:bg-blue-600 text-white rounded-full px-6 py-3 flex items-center transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get in touch with us
                    <div className="ml-2 bg-white rounded-full p-1">
                        <ArrowRight className="h-4 w-4 text-blue-800" />
                    </div>
                </motion.button>
            </div>

            {/* About section */}
            <div className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-start gap-12">
                    <div className="md:w-1/3">
                        <div className="relative">
                            <div className="flex items-center">
                                <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                                <span className="text-sm md:text-lg font-medium text-gray-700">About</span>
                            </div>
                            <div className='w-72 h-44 bg-[#FE992D] mt-4 rounded-full'></div>
                            <img src={Img} alt="" className="rounded-full w-72 h-44 absolute -bottom-3 left-2" />
                        </div>
                    </div>

                    <div className="md:w-2/3">
                        <motion.p className="text-xl md:text-3xl leading-relaxed">
                            <AnimatePresence mode="wait">
                                {textToggle ? (
                                    <motion.span
                                        key="version1"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <span className="font-bold">With 10 years of experience, we drive innovation and excellence in everything we do.</span>{" "}
                                        <span className="text-gray-500 font-semibold">We strive to be a trusted partner for businesses seeking to thrive in today's digital world.</span>
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="version2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <span className="text-gray-500 font-semibold">With 10 years of experience, we drive innovation and excellence in everything we do.</span>{" "}
                                        <span className="font-bold">We strive to be a trusted partner for businesses seeking to thrive in today's digital world.</span>
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection