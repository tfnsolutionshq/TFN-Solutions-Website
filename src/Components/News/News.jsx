import { motion } from 'framer-motion';
import BlogImg from "../../assets/Images/bajad.png";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      image: BlogImg,
      date: "August 17, 2024",
      title: "The Future of Software Development: Trends to Watch in 2025 and Beyond",
      description: "The software development landscape is evolving at an unprecedented pace. As businesses strive to stay competitive in 2025 and beyond, emerging technologies...",
      link: "/news/future-of-software-development"
    },
    {
      id: 2,
      image: BlogImg,
      date: "September 2, 2024",
      title: "AI is Transforming Business Operations Across Industries",
      description: "Artificial Intelligence (AI) is no longer a futuristic concept—it’s a transformative force reshaping business operations across industries. From predictive analytics to intelligent automation, AI is enabling organizations to optimize processes, ",
      link: "/news/ai-business-transformation"
    },
    {
      id: 3,
      image: BlogImg,
      date: "November 9, 2024",
      title: "Building Scalable Network Infrastructure: Best Practices for Growing Businesses",
      description: "As businesses grow, their network infrastructure must keep pace to support increasing data demands, ensure security, and enable seamless operations. A scalable, secure, and cloud-ready network is no longer a luxury—it’s a necessity for staying competitive. ",
      link: "/news/building-scalable-network-infrastructure"
    },
    {
        id: 4,
        image: BlogImg,
        date: "August 17, 2024",
        title: "The Power of Storytelling in UI/UX Design",
        description: "Stay ahead of the curve with the latest web design trends for 2024. From minimalist designs to interactive elements, find out what's hot in the world of web design.",
        link: "/power-of-storytelling-ui-ux"
      },
      {
        id: 5,
        image: BlogImg,
        date: "September 2, 2024",
        title: "The Impact of User-Centric Design on Business Success",
        description: "Stay ahead of the curve with the latest web design trends for 2024. From minimalist designs to interactive elements, find out what's hot in the world of web design.",
        link: "/user-centric-design-impact"
      },
      {
        id: 6,
        image: BlogImg,
        date: "November 9, 2024",
        title: "Skeuomorphism vs. Flat Design: Design Evolution",
        description: "Stay ahead of the curve with the latest web design trends for 2024. From minimalist designs to interactive elements, find out what's hot in the world of web design.",
        link: "/skeuomorphism-vs-flat-design"
      },
      {
        id: 7,
        image: BlogImg,
        date: "August 17, 2024",
        title: "The Power of Storytelling in UI/UX Design",
        description: "Stay ahead of the curve with the latest web design trends for 2024. From minimalist designs to interactive elements, find out what's hot in the world of web design.",
        link: "/power-of-storytelling-ui-ux"
      },
      {
        id: 8,
        image: BlogImg,
        date: "September 2, 2024",
        title: "The Impact of User-Centric Design on Business Success",
        description: "Stay ahead of the curve with the latest web design trends for 2024. From minimalist designs to interactive elements, find out what's hot in the world of web design.",
        link: "/user-centric-design-impact"
      },
      {
        id: 9,
        image: BlogImg,
        date: "November 9, 2024",
        title: "Skeuomorphism vs. Flat Design: Design Evolution",
        description: "Stay ahead of the curve with the latest web design trends for 2024. From minimalist designs to interactive elements, find out what's hot in the world of web design.",
        link: "/skeuomorphism-vs-flat-design"
      }
  ];


  return (
    <section className="pt-36 bg-[#F7F7F7] pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div className="mb-">
          <p className="text-orange-500 font-medium mb-2">Insights</p>
          <h2 className="text-3xl md:text-6xl font-bold mb-4">Explore our insights</h2>
          <p className="text-gray-900 max-w-3xl">
          Stay ahead in the delivery industry with our insightful blog. We provide a deep dive into user research, problem-solving, and innovative design solutions
          </p>
        </div>
          
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id} 
              className="group p-1.5 cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => window.location.href = post.link}
            >
              <div className="overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-52 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="py-6 px-2 space-y-3">
                <p className="text-sm text-gray-500 font-medium">{post.date}</p>
                <h3 className="font-bold text-xl group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <p className="text-gray-600 line-clamp-3 text-sm">{post.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}