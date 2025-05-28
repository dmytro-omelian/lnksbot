// This file is used as the entry point for Vercel serverless functions
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
  // For static assets
  const publicPath = path.join(__dirname, '..', 'public');
  const viewsPath = path.join(__dirname, '..', 'views');
  
  // Check if this is a request for a static file
  const url = req.url.split('?')[0];
  
  // Serve static files from public directory
  if (url.startsWith('/css/') || url.startsWith('/js/') || url.startsWith('/images/')) {
    const filePath = path.join(publicPath, url);
    
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath);
      
      // Set appropriate content type
      if (url.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
      } else if (url.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/javascript');
      } else if (url.endsWith('.png')) {
        res.setHeader('Content-Type', 'image/png');
      } else if (url.endsWith('.jpg') || url.endsWith('.jpeg')) {
        res.setHeader('Content-Type', 'image/jpeg');
      } else if (url.endsWith('.svg')) {
        res.setHeader('Content-Type', 'image/svg+xml');
      }
      
      return res.end(content);
    }
  }
  
  // Serve HTML pages
  let page = 'index';
  
  if (url === '/') {
    page = 'index';
  } else if (url === '/about') {
    page = 'about';
  } else if (url === '/terms') {
    page = 'terms';
  } else if (url === '/privacy') {
    page = 'privacy';
  } else if (url === '/refund') {
    page = 'refund';
  } else if (url === '/blog') {
    page = 'blog';
  } else if (url === '/careers') {
    page = 'careers';
  } else if (url === '/security') {
    page = 'security';
  }
  
  // Check if the page exists
  const pagePath = path.join(viewsPath, `${page}.hbs`);
  
  if (fs.existsSync(pagePath)) {
    // Simple template rendering
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Basic template variable replacement
    content = content.replace(/{{title}}/g, getTitle(page));
    content = content.replace(/{{description}}/g, getDescription(page));
    
    res.setHeader('Content-Type', 'text/html');
    return res.end(content);
  }
  
  // If we get here, return 404
  res.statusCode = 404;
  return res.end('Not Found');
};

// Helper functions for template variables
function getTitle(page) {
  switch (page) {
    case 'index':
      return 'lnksbot - Your Tailored Newsletter on What You Read';
    case 'about':
      return 'About Us - lnksbot';
    case 'terms':
      return 'Terms of Service - lnksbot';
    case 'privacy':
      return 'Privacy Policy - lnksbot';
    case 'refund':
      return 'Refund Policy - lnksbot';
    case 'blog':
      return 'Blog - lnksbot';
    case 'careers':
      return 'Careers - lnksbot';
    case 'security':
      return 'Security - lnksbot';
    default:
      return 'lnksbot';
  }
}

function getDescription(page) {
  switch (page) {
    case 'index':
      return 'Just add links, receive your daily dose of insights';
    case 'about':
      return 'Learn about lnksbot, our mission, and our team';
    case 'terms':
      return 'Terms and conditions for using lnksbot services';
    case 'privacy':
      return 'How lnksbot collects, uses, and protects your information';
    case 'refund':
      return 'Our refund policy and procedures for subscription cancellations';
    case 'blog':
      return 'News, tips, and insights from the lnksbot team';
    case 'careers':
      return 'Join our team and help build the future of content discovery';
    case 'security':
      return 'How lnksbot protects your data and ensures the security of our service';
    default:
      return 'lnksbot - Your Tailored Newsletter on What You Read';
  }
}
