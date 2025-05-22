import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BlogImg from "../../assets/Images/blog1.jpg";
import BlogImg2 from "../../assets/Images/blog2.jpg";
import BlogImg3 from "../../assets/Images/blog3.jpg";

export default function BlogSection() {
  const { t } = useTranslation();
  const blogPosts = [
    {
      id: 1,
      image: BlogImg2,
      date: "May 17, 2025",
      title: t('blog.futureTitle'),
      description: t('blog.futureDescription'),
      link: "/news/future-of-software-development"
    },
    {
      id: 2,
      image: BlogImg3,
      date: "April 11, 2025",
      title: t('blog.aiTitle'),
      description: t('blog.aiDescription'),
      link: "/news/ai-business-transformation"
    },
    {
      id: 3,
      image: BlogImg,
      date: "March 9, 2025",
      title: t('blog.networkTitle'),
      description: t('blog.networkDescription'),
      link: "/news/building-scalable-network-infrastructure"
    }
  ];

  // Animated text state for heading
  const [textState, setTextState] = useState({
    part1: true, // "Read our latest"
    part2: false, // "Articles &"
    part3: false  // "Blogs"
  });

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setTextState(prev => {
        if (prev.part1) return { part1: false, part2: true, part3: false };
        if (prev.part2) return { part1: false, part2: false, part3: true };
        return { part1: true, part2: false, part3: false };
      });
    }, 2000);
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <section className="py-16 bg-[var(--background-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex flex-col items-start w-full mb-6 md:mb-0">
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              <span className="text-sm font-medium text-[var(text-primary)]">{t('blog.insights')}</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start mt-3">
            {/* Animated heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight">
              <span className={textState.part1 ? 'font-bold text-[var(--text-primary)]' : 'font-bold text-[var(--text-secondary)]'}>
                {t('blog.readLatest')}
              </span>{' '}
              <span className={textState.part2 ? 'font-bold text-[var(--text-primary)]' : 'font-bold text-[var(--text-secondary)]'}>
                {t('blog.articlesAnd')}
              </span>{' '}
              <span className={textState.part3 ? 'font-bold text-[var(--text-primary)]' : 'font-bold text-[var(--text-secondary)]'}>
                {t('blog.blogs')}
              </span>
            </h2>
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