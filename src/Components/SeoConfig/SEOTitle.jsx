import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SEOTitle = ({ 
  title, 
  description, 
  keywords, 
  image, 
  type = 'website',
  author,
  publishedTime,
  modifiedTime 
}) => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentUrl = `${window.location.origin}${location.pathname}`;

  useEffect(() => {
    // Title
    document.title = title ? `${t(title)} | TFN Solutions` : 'TFN Solutions - Technology Solutions Provider';
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]') || 
                           document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 
      description ? t(description) : 'TFN Solutions - Leading technology solutions provider specializing in software development, cloud services, cybersecurity, and IT consulting.'
    );
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]') || 
                          document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords);
      if (!document.querySelector('meta[name="keywords"]')) {
        document.head.appendChild(metaKeywords);
      }
    }

    // Canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]') || 
                         document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', currentUrl);
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonicalLink);
    }

    // Open Graph Tags
    const ogTags = [
      { property: 'og:title', content: title ? `${t(title)} | TFN Solutions` : 'TFN Solutions' },
      { property: 'og:description', content: description ? t(description) : 'Leading technology solutions provider' },
      { property: 'og:type', content: type },
      { property: 'og:url', content: currentUrl },
      { property: 'og:site_name', content: 'TFN Solutions' },
      { property: 'og:image', content: image || 'https://www.tfnsolutions.us/logo.png' }
    ];

    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', tag.content);
    });

    // Twitter Cards
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title ? `${t(title)} | TFN Solutions` : 'TFN Solutions' },
      { name: 'twitter:description', content: description ? t(description) : 'Leading technology solutions provider' },
      { name: 'twitter:image', content: image || 'https://www.tfnsolutions.us/logo.png' }
    ];

    twitterTags.forEach(tag => {
      let twitterTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', tag.name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', tag.content);
    });

    // Article specific tags
    if (type === 'article' && (publishedTime || modifiedTime || author)) {
      if (publishedTime) {
        const publishedTag = document.querySelector('meta[property="article:published_time"]') || 
                           document.createElement('meta');
        publishedTag.setAttribute('property', 'article:published_time');
        publishedTag.setAttribute('content', publishedTime);
        if (!document.querySelector('meta[property="article:published_time"]')) {
          document.head.appendChild(publishedTag);
        }
      }

      if (modifiedTime) {
        const modifiedTag = document.querySelector('meta[property="article:modified_time"]') || 
                          document.createElement('meta');
        modifiedTag.setAttribute('property', 'article:modified_time');
        modifiedTag.setAttribute('content', modifiedTime);
        if (!document.querySelector('meta[property="article:modified_time"]')) {
          document.head.appendChild(modifiedTag);
        }
      }

      if (author) {
        const authorTag = document.querySelector('meta[property="article:author"]') || 
                        document.createElement('meta');
        authorTag.setAttribute('property', 'article:author');
        authorTag.setAttribute('content', author);
        if (!document.querySelector('meta[property="article:author"]')) {
          document.head.appendChild(authorTag);
        }
      }
    }

    // Robots meta
    const robotsTag = document.querySelector('meta[name="robots"]') || 
                     document.createElement('meta');
    robotsTag.setAttribute('name', 'robots');
    robotsTag.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    if (!document.querySelector('meta[name="robots"]')) {
      document.head.appendChild(robotsTag);
    }

  }, [location.pathname, title, description, keywords, image, type, author, publishedTime, modifiedTime, t]);

  return null;
};

export default SEOTitle;