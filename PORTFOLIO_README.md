# Modern Professional Portfolio Website

A beautifully designed, fully responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Features a dark/light theme toggle, smooth animations, and interactive components.

## Features

- ✨ **Responsive Design**: Mobile-first approach optimized for all screen sizes
- 🌙 **Dark/Light Theme**: Automatic theme detection with manual toggle
- 🎬 **Smooth Animations**: Intersection observer-based scroll reveals and micro-interactions
- 📱 **Mobile Navigation**: Sticky header with hamburger menu for mobile devices
- 🎨 **Modern Color Palette**: Professional blues and neutrals with accent colors
- ⚡ **Performance Optimized**: Built with Next.js App Router and server components
- ♿ **Accessible**: Semantic HTML and ARIA labels throughout
- 📧 **Contact Form**: Fully functional contact form with success feedback

## Project Structure

```
components/
├── navigation.tsx      # Sticky navigation with theme toggle
├── hero.tsx           # Hero section with CTA buttons
├── about.tsx          # About section with experience timeline
├── skills.tsx         # Skills grid with icons and tags
├── projects.tsx       # Project showcase with featured project
├── project-card.tsx   # Reusable project card component
├── contact.tsx        # Contact form with social links
├── footer.tsx         # Footer with links and social icons
└── theme-provider.tsx # Next-themes configuration

hooks/
└── use-scroll-reveal.ts  # Custom hook for scroll animations

app/
├── layout.tsx         # Root layout with theme provider
├── page.tsx           # Main page combining all components
├── globals.css        # Global styles and animations
└── (other Next.js files)
```

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Animations**: CSS animations & Intersection Observer API
- **Icons**: Lucide React
- **Theme**: next-themes for light/dark mode
- **Fonts**: Google Fonts (Inter)

## Color System

The portfolio uses a modern, professional color palette:

**Light Mode:**
- Background: Pure white
- Foreground: Deep charcoal (8% gray)
- Primary Accent: Bright blue (210° hue)
- Secondary: Light gray (88%)

**Dark Mode:**
- Background: Deep navy (217° hue, 8% lightness)
- Foreground: Off-white (95%)
- Primary Accent: Bright blue (210° hue, 60%)
- Secondary: Navy (217° hue, 20%)

## Key Components

### Navigation
- Sticky header that activates on scroll
- Smooth navigation links with scroll behavior
- Mobile hamburger menu
- Theme toggle button with icons

### Hero Section
- Large, impactful headline with gradient text
- Animated entrance on page load
- Call-to-action buttons (View Work, Get In Touch)
- Animated scroll hint with floating animation

### About Section
- Profile image with gradient border effect
- Professional background and approach sections
- Experience timeline with visual indicators
- Links to action items

### Skills Section
- 8-card grid showcasing key skills
- Icon representation for each skill
- Tag-based technology lists
- Staggered animation on scroll reveal
- Additional proficiencies section

### Projects Section
- Featured project with larger card design
- 6-project grid with images and descriptions
- Technology tags and project links
- GitHub and live demo links
- Call-to-action section

### Contact Section
- Multi-field contact form
- Form validation and submission feedback
- Social media links (Email, GitHub, LinkedIn, Twitter)
- Response time and availability info
- Success message animation

### Footer
- Quick navigation links
- Social media icons
- Copyright information
- Legal links (Privacy, Terms)

## Animation Details

### Scroll Reveal Animations
- Uses Intersection Observer API for performance
- Staggered animations for card grids
- Smooth fade-in and slide-up effects

### Micro-interactions
- Hover states with color and scale changes
- Button hover scale transforms
- Icon hover animations
- Border color transitions on focus

### Built-in Animations (Tailwind)
- `animate-fade-in`: Fade in effect over 0.6s
- `animate-slide-up`: Slide up from below
- `animate-float`: Floating motion for scroll hint
- Smooth transitions on all interactive elements

## Customization Guide

### Updating Content

1. **Hero Section**: Edit `components/hero.tsx`
   - Change headline and tagline
   - Modify CTA button text and links

2. **About Section**: Edit `components/about.tsx`
   - Update profile image and bio
   - Modify experience timeline entries

3. **Skills**: Edit `components/skills.tsx`
   - Add/remove skill cards
   - Update tags and descriptions
   - Change icons from Lucide React

4. **Projects**: Edit `components/projects.tsx`
   - Add/remove projects
   - Update project details and links
   - Modify featured project

5. **Contact**: Edit `components/contact.tsx`
   - Update social media links
   - Customize form fields
   - Change contact information

### Modifying Colors

Edit `/app/globals.css` CSS variables in `:root` and `.dark` sections:

```css
:root {
  --accent: 210 100% 50%;      /* Change accent color */
  --primary: 0 0% 8%;           /* Change primary text */
  --background: 0 0% 100%;      /* Change background */
}
```

### Adjusting Animations

- Modify animation duration in `tailwind.config.ts`
- Adjust scroll reveal thresholds in component files
- Change animation delays for staggered effects

## Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

Mobile-first approach ensures optimal mobile experience.

## SEO Optimization

- Semantic HTML elements
- Meta tags in layout.tsx
- Proper heading hierarchy
- Alt text for images (where applicable)
- Open Graph ready (can be extended)

## Accessibility Features

- ARIA labels on interactive elements
- Screen reader friendly navigation
- Keyboard navigation support
- Focus visible states
- Color contrast compliance
- Semantic HTML structure

## Browser Support

- Chrome/Edge 120+
- Firefox 121+
- Safari 17+
- Mobile browsers (iOS Safari 17+, Chrome Android)

## Performance Optimizations

- Next.js App Router for better code splitting
- Server components by default
- CSS animations (no JavaScript for basic interactions)
- Efficient Intersection Observer usage
- Smooth scroll behavior
- Optimized animations with transform/opacity

## Environment Variables

No environment variables required for basic functionality. Optional additions:

```env
NEXT_PUBLIC_PORTFOLIO_OWNER_NAME=Your Name
NEXT_PUBLIC_CONTACT_EMAIL=your.email@example.com
```

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
```bash
npm run build
npm run start
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Component File Sizes

- Navigation: ~4KB
- Hero: ~3KB
- About: ~6KB
- Skills: ~7KB
- Projects: ~10KB
- Contact: ~8KB
- Footer: ~3KB

## Future Enhancement Ideas

- Add blog section with MDX support
- Implement project detail pages
- Add testimonials/reviews section
- Integrate with email service (SendGrid, Mailgun)
- Add analytics (Vercel Analytics, Google Analytics)
- Create admin dashboard for content management
- Add case studies section
- Implement newsletter signup
- Add dark/light theme scheduling

## Support & Customization

This portfolio is built to be customizable and extensible. All components use Tailwind CSS classes and are fully typed with TypeScript for better development experience.

For specific customizations or extensions, all components follow a consistent structure and can be easily modified or combined with additional components.

## License

Free to use for personal and commercial projects.
