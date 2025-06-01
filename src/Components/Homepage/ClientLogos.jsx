import { motion } from "framer-motion"

const clientLogos = [
    {
        id: 1,
        name: "University",
        logo: "https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/sponsors/unizik.png",
    },
    {
        id: 2,
        name: "Google",
        logo: "https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/sponsors/google.png",
    },
    {
        id: 3,
        name: "CrystalBricks",
        logo: "https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/sponsors/crystal.png",
    },
    {
        id: 4,
        name: "Flutterwave",
        logo: "https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/sponsors/flutterwave.png",
    },
    {
        id: 5,
        name: "Afriwok",
        logo: "https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/sponsors/afriwok.png",
    },
    {
        id: 6,
        name: "Credo",
        logo: "https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/sponsors/credo.png",
    },
    {
        id: 7,
        name: "eTranzact",
        logo: "https://cdn.jsdelivr.net/gh/tfnsolutionshq/TFN-Solutions-Website-Assets@main/etranzacttt.png",
    },
]

function ClientLogos() {
    return (
        <>
            <section className="py-10 bg-[var(--background-primary)] relative overflow-hidden">
                {/* Gradient at the center, flowing from left to right */}
                {/* This div acts as a container for the gradient, centered vertically */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* The actual gradient element, spanning full width and a specific height */}
                    <div className="w-full h-[400px] bg-gradient-to-r from-transparent via-gray-100/50 to-transparent"></div>
                </div>

                {/* Main content, ensure it's above the gradient with z-index */}
                <div className="mt-10 pb-10 max-w-6xl mx-auto px-3 relative z-10 ">
                    <div className="flex flex-col items-center mb-6">
                        <div className="flex items-center mb-2">
                            <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                            <span className="text-sm font-medium text-[var(--text-primary)]">Clients/Partners</span>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold text-center">
                            We build for <span className="text-[var(--text-secondary)]">Startup and</span> <span className="text-black font-normal"></span> <span className="text-gray-400 font-normal">enterprise businesses</span>
                        </h3>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 justify-items-center"
                    >
                        {clientLogos.map((client) => (
                            <motion.div
                                key={client.id}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className=" hover:grayscale-0 transition-all duration-300"
                            >
                                <img src={client.logo || "/placeholder.svg"} alt={client.name} className="h-10 md:h-12 w-auto" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default ClientLogos;