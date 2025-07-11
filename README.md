# The Doors Agency - Digital Marketing Website

A modern, responsive website for The Doors Agency, a digital marketing company specializing in social media management, paid advertising, and marketplace optimization.

## Features

- **Modern Design**: Clean, professional design with gradient animations and hover effects
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Blog System**: Easy-to-manage blog with categorization and search functionality
- **Portfolio Showcase**: Interactive portfolio with project details and results
- **Contact Forms**: Professional contact forms with validation
- **SEO Optimized**: Meta tags and structured content for better search visibility

## Blog Management

### Adding New Blog Posts

To add a new blog post, edit the `src/data/blogPosts.ts` file and add a new post object to the `blogPosts` array:

```typescript
{
  id: 9, // Increment the ID
  title: 'Your Blog Post Title',
  excerpt: 'A brief summary of your blog post that appears in listings.',
  content: `
    <p>Your full blog post content in HTML format.</p>
    
    <h2>Section Heading</h2>
    <p>More content here...</p>
    
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
  `,
  image: 'https://images.pexels.com/photos/your-image-url.jpeg',
  category: 'social-media', // or 'paid-ads', 'marketplace', 'content-marketing', 'seo'
  author: 'Author Name',
  date: '2024-01-20', // YYYY-MM-DD format
  readTime: '5 min read',
  featured: false, // Set to true for featured posts
  tags: ['Tag1', 'Tag2', 'Tag3']
}
```

### Blog Categories

Available categories:
- `social-media`: Social Media
- `paid-ads`: Paid Ads
- `marketplace`: Marketplace
- `content-marketing`: Content Marketing
- `seo`: SEO

### Content Formatting

The blog content supports HTML formatting:
- `<h2>`, `<h3>` for headings
- `<p>` for paragraphs
- `<ul>`, `<ol>`, `<li>` for lists
- `<strong>`, `<em>` for emphasis
- `<a>` for links

### Images

Use high-quality images from Pexels or other stock photo services. Ensure images are:
- At least 800px wide
- Relevant to the blog post content
- Properly compressed for web use

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx
│   └── Footer.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Blog.tsx
│   ├── BlogPost.tsx
│   └── Contact.tsx
├── data/               # Data files
│   └── blogPosts.ts    # Blog posts data
└── App.tsx             # Main app component
```

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Technologies Used

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Lucide React** for icons
- **Vite** for build tooling

## Color Palette

- **Primary**: Electric Violet (#8550ff to #7f39fb)
- **Text**: Custom black scale for optimal readability
- **Backgrounds**: White with subtle violet gradients

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 The Doors Agency. All rights reserved.# project_cms
