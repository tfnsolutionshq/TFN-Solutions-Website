import { useRef, useEffect, useState } from "react"
import { motion, useAnimationControls, useDragControls } from "framer-motion";
import Martins from '../../assets/Team/Team Image.png'
import Prevail from '../../assets/Team/DSC_5536.png'
import Ekene from '../../assets/Team/Team Image (1).png'
import Chinyelu from '../../assets/Team/DSC_5536 (2).png'
import Uche from '../../assets/Team/Team Image (2).png'

// Animated text component properly placed before main component
const AnimatedTeamText = () => {
    const [textState, setTextState] = useState({
        part1: true,
        part2: false,
    })

    useEffect(() => {
        const animationInterval = setInterval(() => {
            setTextState((prev) => {
                if (prev.part1) return { part1: false, part2: true }
                return { part1: true, part2: false }
            })
        }, 4500)
        return () => clearInterval(animationInterval)
    }, [])

    return (
        <div className="text-right w-full">
            <h2 className="block text-2xl md:text-3xl leading-tight">
                <span className={textState.part1 ? "font-extrabold text-black" : "font-normal text-gray-400"}>
                    Our team is prepared to
                </span>{" "}
                <span className={textState.part2 ? "font-extrabold text-black" : "font-normal text-gray-400"}>
                    handle challenging tasks.
                </span>
            </h2>
        </div>
    )
}

const TeamSection = () => {
    // Refs for scroll containers
    const containerRef = useRef(null)
    const categoriesRef = useRef(null)
    const teamContainerRef = useRef(null)
    const boardContainerRef = useRef(null)

    // Animation controls
    const controls = useAnimationControls()
    const teamControls = useAnimationControls()
    const boardControls = useAnimationControls()

    // Drag controls
    const teamDragControls = useDragControls()
    const boardDragControls = useDragControls()

    // State to track container widths
    const [teamWidth, setTeamWidth] = useState(0)
    const [boardWidth, setBoardWidth] = useState(0)
    const [categoryWidth, setCategoryWidth] = useState(0)

    // State to track if user is currently dragging
    const [isDraggingTeam, setIsDraggingTeam] = useState(false)
    const [isDraggingBoard, setIsDraggingBoard] = useState(false)

    // State to track current scroll position
    const [teamScrollX, setTeamScrollX] = useState(0)
    const [boardScrollX, setBoardScrollX] = useState(0)

    // Categories with auto-scrolling animation
    const categories = ["development", "design", "growth", "strategy", "marketing", "innovation"]

    // Team members data
    const teamMembers = [
        {
            id: 1,
            name: "Prevail Ejimadu",
            role: "Founder & CEO",
            image: "/placeholder.svg?height=300&width=300&text=Prevail",
            bgColor: "bg-orange-400",
        },
        {
            id: 2,
            name: "Prevail Ejimadu",
            role: "Lead Developer",
            image: "/placeholder.svg?height=300&width=300&text=Prevail",
            bgColor: "bg-orange-400",
        },
        {
            id: 3,
            name: "Prevail Ejimadu",
            role: "Designer",
            image: "/placeholder.svg?height=300&width=300&text=Prevail",
            bgColor: "bg-orange-400",
        },
        {
            id: 4,
            name: "Prevail Ejimadu",
            role: "Product Manager",
            image: "/placeholder.svg?height=300&width=300&text=Prevail",
            bgColor: "bg-orange-400",
        },
        {
            id: 5,
            name: "Prevail Ejimadu",
            role: "Marketing Specialist",
            image: "/placeholder.svg?height=300&width=300&text=Prevail",
            bgColor: "bg-orange-400",
        },
        {
            id: 6,
            name: "Prevail Ejimadu",
            role: "UX Researcher",
            image: "/placeholder.svg?height=300&width=300&text=Prevail",
            bgColor: "bg-orange-400",
        },
    ]

    // Board members data
    const boardMembers = [
        {
            id: 1,
            name: "Martins Okolojigwu",
            role: "Non-Executive Director",
            image: Martins,
            bgColor: "bg-[#FE992D]",
        },
        {
            id: 2,
            name: "Ekene Ezeasor",
            role: "Board Member",
            image: Ekene,
            bgColor: "bg-[#FE992D]",
        },
        {
            id: 3,
            name: "Chinyelu Emechieta",
            role: "Board Member",
            image: Chinyelu,
            bgColor: "bg-[#FE992D]",
        },
        {
            id: 4,
            name: "Uche ThankGod",
            role: "Board Member",
            image: Uche,
            bgColor: "bg-[#FE992D]",
        },
        {
            id: 5,
            name: "Prevail Ejimadu",
            role: "Board Member",
            image: Prevail,
            bgColor: "bg-[#FE992D]",
        },
    ]

    // Calculate widths on mount and window resize
    useEffect(() => {
        const calculateWidths = () => {
            if (teamContainerRef.current) {
                // Get width of a single set of team members
                const teamItemWidth = teamMembers.length * (224 + 16) // 224px for card width + 16px for gap
                setTeamWidth(teamItemWidth)
            }

            if (boardContainerRef.current) {
                // Get width of a single set of board members
                const boardItemWidth = boardMembers.length * (224 + 16) // 224px for card width + 16px for gap
                setBoardWidth(boardItemWidth)
            }

            if (categoriesRef.current) {
                // Calculate the width of one set of categories
                const categoryItems = categoriesRef.current.children
                let width = 0
                for (let i = 0; i < categories.length; i++) {
                    if (categoryItems[i]) {
                        width += categoryItems[i].offsetWidth
                    }
                }
                setCategoryWidth(width)
            }
        }

        // Initial calculation with a longer delay to ensure DOM is ready
        setTimeout(calculateWidths, 1000)

        // Recalculate on window resize
        window.addEventListener("resize", calculateWidths)
        return () => window.removeEventListener("resize", calculateWidths)
    }, [])

    // Seamless infinite scrolling for categories
    useEffect(() => {
        if (!categoryWidth || categoryWidth === 0) return

        const infiniteScroll = async () => {
            await controls.start({
                x: -categoryWidth,
                transition: {
                    duration: 20,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                },
            })
        }

        infiniteScroll()
    }, [controls, categoryWidth])

    // Seamless infinite scrolling for team members
    useEffect(() => {
        if (!teamWidth || teamWidth === 0 || isDraggingTeam) return

        const startTeamAnimation = async () => {
            // Start from current position
            await teamControls.start({
                x: -teamWidth + teamScrollX,
                transition: {
                    duration: 30 * (1 - Math.abs(teamScrollX) / teamWidth), // Adjust duration based on current position
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                },
            })
        }

        startTeamAnimation()

        return () => {
            teamControls.stop()
        }
    }, [teamControls, teamWidth, isDraggingTeam, teamScrollX])

    // Seamless infinite scrolling for board members
    useEffect(() => {
        if (!boardWidth || boardWidth === 0 || isDraggingBoard) return

        const startBoardAnimation = async () => {
            // Start from current position
            await boardControls.start({
                x: -boardWidth + boardScrollX,
                transition: {
                    duration: 40 * (1 - Math.abs(boardScrollX) / boardWidth), // Adjust duration based on current position
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                },
            })
        }

        startBoardAnimation()

        return () => {
            boardControls.stop()
        }
    }, [boardControls, boardWidth, isDraggingBoard, boardScrollX])

    // Handle team drag start
    const handleTeamDragStart = () => {
        teamControls.stop()
        setIsDraggingTeam(true)
    }

    // Handle team drag end
    const handleTeamDragEnd = (event, info) => {
        setIsDraggingTeam(false)

        // Calculate new position within bounds
        let newX = info.offset.x + teamScrollX

        // Normalize the position to be within the range of -teamWidth to 0
        newX = newX % teamWidth
        if (newX > 0) newX -= teamWidth

        setTeamScrollX(newX)
    }

    // Handle board drag start
    const handleBoardDragStart = () => {
        boardControls.stop()
        setIsDraggingBoard(true)
    }

    // Handle board drag end
    const handleBoardDragEnd = (event, info) => {
        setIsDraggingBoard(false)

        // Calculate new position within bounds
        let newX = info.offset.x + boardScrollX

        // Normalize the position to be within the range of -boardWidth to 0
        newX = newX % boardWidth
        if (newX > 0) newX -= boardWidth

        setBoardScrollX(newX)
    }

    // Smooth spring physics for hover effects
    const springConfig = { damping: 30, stiffness: 200 }

    return (
        <section className="py-16 overflow-hidden bg-[#F7F7F7]">

            <div className="px-4 max-w-6xl mx-auto" ref={containerRef}>
                {/* Team Section with animated text */}
                <div className="mb-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-24 py-10">
                        <div className="flex flex-col items-start w-full md:w-1/3 mb-6 md:mb-0">
                            <div className="flex items-center">
                                <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
                                <span className="text-sm md:text-lg font-medium text-gray-700">Driving Team</span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-start md:items-end">
                            <AnimatedTeamText />
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full pl-32">
                <div className="overflow-hidden cursor-grab">
                    <motion.div
                        ref={boardContainerRef}
                        className="flex space-x-4 py-4"
                        animate={isDraggingBoard ? undefined : boardControls}
                        drag="x"
                        dragControls={boardDragControls}
                        dragConstraints={{ left: -boardWidth * 2, right: boardWidth }}
                        dragElastic={0.1}
                        dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
                        onDragStart={handleBoardDragStart}
                        onDragEnd={handleBoardDragEnd}
                        style={{ width: "max-content", touchAction: "none" }}
                        whileTap={{ cursor: "grabbing" }}
                    >
                        {/* First set of board members */}
                        {boardMembers.map((member) => (
                            <motion.div
                                key={`board-${member.id}`}
                                className={`flex-shrink-0 w-64 p-2 rounded-lg overflow-hidden bg-white shadow-lg`}
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", ...springConfig }}
                            >
                                <div className="aspect-square relative ">
                                    <img
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        className={`flex-shrink-0 w-64 rounded-lg overflow-hidden ${member.bgColor}`}
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold">{member.name}</h3>
                                    <p className="text-sm opacity-80">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Duplicate set for seamless looping */}
                        {boardMembers.map((member) => (
                            <motion.div
                                key={`board-${member.id}`}
                                className={`flex-shrink-0 w-64 p-2 rounded-lg overflow-hidden bg-white shadow-lg`}
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", ...springConfig }}
                            >
                                <div className="aspect-square relative ">
                                    <img
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        className={`flex-shrink-0 w-64 rounded-lg overflow-hidden ${member.bgColor}`}
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold">{member.name}</h3>
                                    <p className="text-sm opacity-80">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Third set for extra smooth looping when dragging */}
                        {boardMembers.map((member) => (
                            <motion.div
                                key={`board-${member.id}`}
                                className={`flex-shrink-0 w-64 p-2 rounded-lg overflow-hidden bg-white shadow-lg`}
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", ...springConfig }}
                            >
                                <div className="aspect-square relative ">
                                    <img
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        className={`flex-shrink-0 w-64 rounded-lg overflow-hidden ${member.bgColor}`}
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold">{member.name}</h3>
                                    <p className="text-sm opacity-80">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* CSS for hiding scrollbars */}
            <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .overflow-hidden::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .overflow-hidden {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
        </section>
    )
}

export default TeamSection
