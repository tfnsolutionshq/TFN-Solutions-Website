import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define your routes based on your App.jsx component
const routes = [
  // Main pages
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'weekly', priority: 0.7 },
  { url: '/latest-news', changefreq: 'daily', priority: 0.7 },
  { url: '/contactus', changefreq: 'monthly', priority: 0.6 },
  { url: '/careers', changefreq: 'weekly', priority: 0.7 },

  // Service pages
  { url: '/services/infrastructure-services', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/cloud-services', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/backup-and-disaster-recovery', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/cybersecurity-services', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/software-development', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/hardware-and-software-procurement', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/data-services', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/it-consulting-and-strategy', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/it-support-and-helpdesk', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/managed-it-services', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/communication-and-collaboration-tools', changefreq: 'monthly', priority: 0.8 },

  // News/Blog pages
  { url: '/news/future-of-software-development', changefreq: 'monthly', priority: 0.6 },
  { url: '/news/ai-business-transformation', changefreq: 'monthly', priority: 0.6 },
  { url: '/news/building-scalable-network-infrastructure', changefreq: 'monthly', priority: 0.6 },

  // Project detail pages
  { url: '/projects/crystalbricks', changefreq: 'monthly', priority: 0.6 },
  { url: '/projects/afriwok', changefreq: 'monthly', priority: 0.6 },
  { url: '/projects/unizik-alumni', changefreq: 'monthly', priority: 0.6 },
  { url: '/projects/unizik-portal', changefreq: 'monthly', priority: 0.6 },
  { url: '/projects/infrastructure-service', changefreq: 'monthly', priority: 0.6 },

  // Legal pages
  { url: '/legal/privacy-policy', changefreq: 'yearly', priority: 0.3 },
  { url: '/legal/terms-and-conditions', changefreq: 'yearly', priority: 0.3 },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ 
    hostname: 'https://tfnsolutions.com' // Replace with your actual domain
  });

  // Write to public folder from root directory
  const writeStream = createWriteStream(join(__dirname, 'public', 'sitemap.xml'));
  sitemap.pipe(writeStream);

  // Add each route to the sitemap
  routes.forEach(route => {
    sitemap.write({
      url: route.url,
      changefreq: route.changefreq,
      priority: route.priority,
      lastmod: new Date().toISOString().split('T')[0]
    });
  });

  sitemap.end();

  await streamToPromise(sitemap);
  console.log('Sitemap generated successfully at public/sitemap.xml');
  console.log(`Total pages: ${routes.length}`);
}

generateSitemap().catch(console.error);
