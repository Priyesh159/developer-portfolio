# Professional Developer Portfolio

A modern, responsive, and feature-rich portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Perfect for showcasing your skills, projects, and professional experience.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and Twitter Card support
- **Accessible**: WCAG compliance with proper ARIA labels and keyboard navigation
- **Performance**: Optimized for Core Web Vitals with lazy loading and efficient bundling
- **Interactive Components**: 
  - Smooth scrolling navigation
  - Project filtering and modal views
  - Contact form with validation
  - Animated skill progress bars
  - Responsive mobile menu

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd developer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/app/
├── components/          # React components
│   ├── Navigation.tsx   # Header navigation with theme toggle
│   ├── Hero.tsx        # Hero section with introduction
│   ├── Skills.tsx      # Skills and technologies showcase
│   ├── Projects.tsx    # Featured projects with filtering
│   ├── Experience.tsx  # Work experience and education
│   └── Contact.tsx     # Contact form and information
├── hooks/
│   └── useTheme.tsx    # Custom hook for theme management
├── globals.css         # Global styles and custom CSS
├── layout.tsx          # Root layout with metadata
└── page.tsx            # Main page component
```

## 🎨 Customization Guide

### 1. Personal Information

**Update META tags and SEO** (`src/app/layout.tsx`):
```typescript
export const metadata: Metadata = {
  title: "Your Name - Software Developer Portfolio",
  description: "Your custom description",
  // ... update all metadata fields
};
```

**Hero Section** (`src/app/components/Hero.tsx`):
- Replace "Your Name" with your actual name
- Update the professional title
- Customize the introduction paragraph
- Add your actual profile image (replace the placeholder)
- Update social media links

### 2. Skills & Technologies

**Edit skills** (`src/app/components/Skills.tsx`):
```typescript
const skillCategories = [
  {
    title: "Your Category",
    skills: [
      { name: "Technology", level: 90, icon: "🚀" },
      // Add your skills with proficiency levels
    ]
  }
];
```

### 3. Featured Projects

**Update projects** (`src/app/components/Projects.tsx`):
```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Brief description",
    longDescription: "Detailed description",
    technologies: ["React", "Node.js"], // Your tech stack
    category: "fullstack", // fullstack, frontend, backend, mobile
    github: "https://github.com/yourusername/project",
    demo: "https://your-demo-url.com",
    challenges: ["Challenge 1", "Challenge 2"],
    features: ["Feature 1", "Feature 2"]
  }
];
```

### 4. Work Experience

**Update experience** (`src/app/components/Experience.tsx`):
```typescript
const experiences = [
  {
    company: "Your Company",
    position: "Your Position",
    duration: "Start - End Date",
    type: "Full-time", // Full-time, Part-time, Freelance, Contract
    location: "City, State",
    description: "Role description",
    achievements: ["Achievement 1", "Achievement 2"],
    technologies: ["Tech 1", "Tech 2"]
  }
];
```

**Update education and certifications** in the same file.

### 5. Contact Information

**Update contact details** (`src/app/components/Contact.tsx`):
```typescript
const contactInfo = [
  {
    label: 'Email',
    value: 'your-email@domain.com',
    href: 'mailto:your-email@domain.com'
  },
  // Update phone, location, etc.
];
```

### 6. Color Scheme & Styling

**Primary Colors**: The portfolio uses a blue and purple gradient theme. To change:

1. **Update Tailwind classes**: Replace `blue-600`, `purple-600` etc. with your preferred colors
2. **Custom CSS variables** (`src/app/globals.css`):
   ```css
   :root {
     --primary-color: #your-color;
     --secondary-color: #your-secondary-color;
   }
   ```

### 7. Theme Configuration

The portfolio includes both light and dark modes. Customize in `src/app/hooks/useTheme.tsx` if needed.

### 8. Adding New Sections

1. Create a new component in `src/app/components/`
2. Add it to the main page (`src/app/page.tsx`)
3. Update navigation links in `Navigation.tsx`

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with optimizations
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- High contrast mode support
- Reduced motion preferences

## 🌐 SEO Optimization

- Comprehensive meta tags
- Open Graph protocol
- Twitter Card support
- Structured data markup
- Optimized images and fonts
- Fast loading times

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: `npm run build` → Deploy `out` folder
- **GitHub Pages**: Use `gh-pages` package
- **Custom Server**: `npm run build` → `npm run start`

## 🔒 Environment Variables

For contact form functionality, you may want to add:
```env
NEXT_PUBLIC_CONTACT_ENDPOINT=your-api-endpoint
NEXT_PUBLIC_GA_TRACKING_ID=your-google-analytics-id
```

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🛠️ Built With

- **Framework**: Next.js 15.5.0 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Heroicons
- **Build Tool**: Turbopack
- **Fonts**: Geist Sans & Geist Mono

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💡 Additional Features to Consider

- **Blog Section**: Add a blog with MDX support
- **Resume Download**: PDF generation and download
- **Analytics**: Google Analytics or alternative
- **Contact Form Backend**: Implement with Vercel Functions or external service
- **CMS Integration**: Use Sanity, Contentful, or similar
- **Internationalization**: Multi-language support
- **Animation Library**: Framer Motion for advanced animations

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or contact me.

---

⭐ If you found this helpful, please give it a star!
