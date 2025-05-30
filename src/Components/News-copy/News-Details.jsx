// // src/components/News-Details.jsx
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// function NewsDetails() {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // Fetch post by ID - WordPress API supports fetching by ID directly
//         // Add cacheBuster for good measure here too, in case of direct access or deep linking
//         const response = await fetch(`https://shop.afriwok.com/wp-json/wp/v2/posts/${id}?_embed&cacheBuster=${new Date().getTime()}`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const fetchedPost = await response.json();

//         // Process featured image
//         let imageUrl = "/placeholder.svg";

//         if (fetchedPost._embedded && fetchedPost._embedded['wp:featuredmedia'] && fetchedPost._embedded['wp:featuredmedia'][0]) {
//           const media = fetchedPost._embedded['wp:featuredmedia'][0];
//           imageUrl = media.media_details.sizes.full?.source_url ||
//                      media.media_details.sizes.large?.source_url ||
//                      media.media_details.sizes.medium?.source_url ||
//                      media.media_details.sizes.thumbnail?.source_url ||
//                      imageUrl;
//         }

//         setPost({ ...fetchedPost, image: imageUrl });
//       } catch (e) {
//         console.error("Failed to fetch post details:", e);
//         setError(e);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchPost();
//     }
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="pt-36 bg-[var(--background-primary)] pb-6 text-center">
//         <p className="text-[var(--text-secondary)]">Loading post...</p>
//       </div>
//     );
//   }

//   if (error || !post) {
//     return (
//       <div className="pt-36 bg-[var(--background-primary)] pb-6 text-center">
//         <p className="text-[var(--text-secondary)]">Post not found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="pt-36 bg-[var(--background-primary)] pb-6">
//       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Article Header */}
//         <div className="mb-8 text-center">
//           <div className="flex items-center justify-center text-center mb-4">
//             <p className="text-sm text-center font-medium text-gray-500">{new Date(post.date).toLocaleDateString('en-US', {
//               year: 'numeric',
//               month: 'long',
//               day: 'numeric',
//             })}</p> {/* Format the date */}
//             <span className="mx-2"> • </span>
//             <p className="text-sm font-medium text-orange-500">Blog</p>
//           </div>
//           <h1 className="text-3xl md:text-5xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: post.title.rendered }}>
//           </h1>
//         </div>
//       </div>

//       {/* Featured Image */}
//       <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="mb-10 rounded-xl overflow-hidden bg-gray-100 h-[250px] md:h-[400px]">
//           <img
//             src={post.image}
//             alt={post.title.rendered}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Article Content */}
//         {/* Apply the 'prose' class here */}
//         <div
//           className="prose prose-lg max-w-none text-[var(--text-primary)] [&_h1]:text-[var(--text-primary)] [&_h2]:text-[var(--text-primary)] [&_h3]:text-[var(--text-primary)] [&_h4]:text-[var(--text-primary)] [&_h5]:text-[var(--text-primary)] [&_h6]:text-[var(--text-primary)] [&_p]:text-[var(--text-primary)] [&_li]:text-[var(--text-primary)] [&_span]:text-[var(--text-primary)]"
//           dangerouslySetInnerHTML={{ __html: post.content.rendered }}
//         ></div>
//       </div>
//     </div>
//   );
// }

// export default NewsDetails;







import React from 'react'

function NewsDetails() {
  return (
    <div>
      Hey
    </div>
  )
}

export default NewsDetails
