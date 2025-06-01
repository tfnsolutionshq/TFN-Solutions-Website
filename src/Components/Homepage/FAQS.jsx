import { useState, useRef, useEffect } from "react" // Import useEffect
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react" // Remove Search, ArrowRight as they are no longer needed

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)
  // Removed searchQuery and activeCategory states
  // const [searchQuery, setSearchQuery] = useState("");
  // const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState(null)
  // Removed searchRef as it's no longer needed
  // const searchRef = useRef(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Categories are no longer needed for filtering, but can be kept for display if desired, though removed here for simplicity.
  // const categories = [
  //   { id: "all", name: "All Questions" },
  //   { id: "services", name: "Services" },
  //   { id: "pricing", name: "Pricing" },
  //   { id: "timeline", name: "Timeline" },
  //   { id: "support", name: "Support" },
  // ];

  const faqItems = [
    {
      id: "01",
      category: "services",
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of design and development services including UI/UX design, web development, mobile app development, branding, and digital marketing strategies tailored to your specific business needs.",
    },
    {
      id: "02",
      category: "pricing",
      question: "How do you price your services?",
      answer:
        "Our pricing is based on project scope, complexity, and timeline. We offer flexible pricing models including fixed-price quotes, hourly rates, and retainer packages. We provide detailed estimates after an initial consultation to understand your requirements.",
    },
    {
      id: "03",
      category: "timeline",
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. Simple websites might take 2-4 weeks, while complex web applications can take 2-6 months. During our initial discussion, we will provide a realistic timeline based on your specific project requirements.",
    },
    {
      id: "04",
      category: "support",
      question: "What support do you offer after launch?",
      answer:
        "We provide ongoing support and maintenance packages to ensure your product continues to function optimally. This includes bug fixes, security updates, performance optimization, and technical support. We also offer training to help your team manage the platform independently.",
    },
    {
      id: "05",
      category: "services",
      question: "How do I begin a project?",
      answer:
        "Starting a project is simple. Contact us through our website form, email, or phone. We will schedule an initial consultation to discuss your goals, requirements, and vision. After that, we will provide a proposal outlining scope, timeline, and cost before proceeding with the development process.",
    },
  ]

  // The filteredFaqs is now just faqItems since there's no filtering.
  // const filteredFaqs = faqItems.filter(
  //   (item) =>
  //     (activeCategory === "all" || item.category === activeCategory) &&
  //     (item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       item.answer.toLowerCase().includes(searchQuery.toLowerCase())),
  // );
  const filteredFaqs = faqItems; // All items are displayed

  // Removed focusSearch as it's no longer needed
  // const focusSearch = () => {
  //   if (searchRef.current) {
  //     searchRef.current.focus();
  //   }
  // };

  // Animation variants remain the same as they are for the FAQ items themselves
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  const backgroundVariants = {
    default: { scale: 1 },
    hover: { scale: 1.01, transition: { duration: 0.3 } },
  }

  // Add the useEffect hook to scroll to the top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[var(background-primary)] opacity-30 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-purple-100 opacity-30 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-orange-100 opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center mb-4"
          >
            {/* <span className="text-orange-600 text-sm font-medium px-4 py-1.5 rounded-full">Do you have any questions?</span> */}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#4175FC] to-[#4175FC] bg-clip-text text-transparent"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Find answers to common questions about our services, process, and support. Can't find what you're looking
            for? Reach out to our team directly.
          </motion.p>
        </div>

        {/* Removed Search and Filter Section */}
        {/*
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="relative w-full md:w-auto md:min-w-[320px]">
              <input
                ref={searchRef}
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              />
              <div
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={focusSearch}
              >
                <Search size={18} />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-500"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        */}

        {/* FAQ Items */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 gap-6">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative"
              >
                <motion.div
                  variants={backgroundVariants}
                  animate={hoveredIndex === index ? "hover" : "default"}
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl -z-10"
                ></motion.div>

                <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white bg-opacity-80 backdrop-blur-sm shadow-sm">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-start justify-between px-6 py-5 text-left focus:outline-none"
                  >
                    <div className="flex items-start">
                      <span className="text-blue-400 font-mono text-sm mr-4 mt-1 opacity-90">{item.id}</span>
                      <h3 className="text-xl font-semibold text-[var(--text-primary)]">{item.question}</h3>
                    </div>
                    <div
                      className={`flex-shrink-0 ml-4 p-2 rounded-full ${
                        openIndex === index ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2">
                          <div className="w-full h-px bg-gray-100 mb-6"></div>
                          <p className="text-gray-600 pl-10">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))
          ) : (
            // This 'No questions found' message will now never be displayed
            // as filteredFaqs will always contain all faqItems.
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 bg-gray-50 rounded-2xl"
            >
              <p className="text-gray-500 mb-4">No questions found matching your criteria.</p>
              <button
                onClick={() => {
                  // setSearchQuery(""); // Removed as searchQuery state is gone
                  // setActiveCategory("all"); // Removed as activeCategory state is gone
                }}
                className="text-blue-600 font-medium hover:underline"
              >
                Reset filters
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}