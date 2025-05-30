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













// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// export default function BlogSection() {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchBlogPosts = async () => {
//       try {
//         setLoading(true); // Set loading to true before fetching
//         setError(null);   // Clear previous errors

//         // Add a cache-buster parameter to the API URL
//         const response = await fetch(`https://shop.afriwok.com/wp-json/wp/v2/posts?_embed&cacheBuster=${new Date().getTime()}`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();

//         // Map over the posts and process them
//         const processedPosts = data.map(post => {
//           let imageUrl = "/placeholder.svg"; // Default placeholder

//           // Try to get featured image from _embedded if available (more efficient)
//           if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
//             const media = post._embedded['wp:featuredmedia'][0];
//             imageUrl = media.media_details.sizes.full?.source_url ||
//                        media.media_details.sizes.large?.source_url ||
//                        media.media_details.sizes.medium?.source_url ||
//                        media.media_details.sizes.thumbnail?.source_url ||
//                        imageUrl;
//           } else if (post.featured_media) {
//              // Fallback to separate media fetch if _embed is not used or fails
//              // This logic was in the previous version and is less efficient if _embed works
//              // For this example, I'm prioritizing _embed. If you need this fallback
//              // to actively fetch, it would need a separate async call like before.
//              // Given the current API response has 'featured_media: 0' for the new post,
//              // it means no featured image is set via WordPress's "Set featured image" option.
//              // If you expect images to be embedded in content and need to extract them,
//              // that's a more complex parsing task.
//           }


//           return {
//             id: post.id,
//             // Check if imageUrl is from a valid source or use a placeholder
//             image: imageUrl,
//             date: new Date(post.date).toLocaleDateString('en-US', {
//               year: 'numeric',
//               month: 'long',
//               day: 'numeric',
//             }),
//             title: post.title.rendered,
//             // Remove HTML tags from excerpt for display
//             description: post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ""),
//             link: post.link,
//             content: post.content.rendered,
//           };
//         });
//         setBlogPosts(processedPosts);
//       } catch (e) {
//         console.error("Failed to fetch blog posts:", e);
//         setError(e);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogPosts();
//   }, []); // Empty dependency array means it runs once on mount

//   const handlePostClick = (postId) => {
//     navigate(`/news-details/${postId}`);
//   };

//   if (loading) {
//     return (
//       <section className="pt-36 bg-[var(--background-primary)] pb-16 text-center">
//         <p className="text-[var(--text-secondary)]">Loading blog posts...</p>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="pt-36 bg-[var(--background-primary)] pb-16 text-center">
//         <p className="text-red-500">Error loading blog posts: {error.message}</p>
//       </section>
//     );
//   }

//   return (
//     <section className="pt-16 bg-[var(--background-primary)] pb-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
//           <div className="mb-">
//             <p className="text-orange-500 font-medium mb-2">Insights</p>
//             <h2 className="text-3xl md:text-6xl font-bold mb-4">Explore our insights</h2>
//             <p className="text-[var(--text-secondary)] max-w-3xl">
//               Stay ahead in the delivery industry with our insightful blog. We provide a deep dive into the latest trends, technologies, and strategies that shape the future of logistics and delivery services. From innovative solutions to industry challenges, our articles are designed to keep you informed and inspired.
//             </p>
//           </div>
//         </div>

//         {/* Blog Posts Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post) => (
//             <motion.div
//               key={post.id}
//               className="group p-1.5 cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               onClick={() => handlePostClick(post.id)}
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={post.image}
//                   alt={post.title.rendered} // Use rendered title for alt text
//                   className="w-full h-52 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>
//               <div className="py-6 px-2 space-y-3">
//                 <p className="text-sm text-[var(--text-secondary)] font-semimedium">{post.date}</p>
//                 {/* Use dangerouslySetInnerHTML for titles that might contain HTML entities */}
//                 <h3 className="font-semibold text-xl group-hover:text-blue-600 transition-colors" dangerouslySetInnerHTML={{ __html: post.title }}></h3>
//                 {/* Use dangerouslySetInnerHTML for descriptions (excerpts) that might contain HTML */}
//                 <p className="text-[var(--text-secondary)] line-clamp-3" dangerouslySetInnerHTML={{ __html: post.description }}></p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
