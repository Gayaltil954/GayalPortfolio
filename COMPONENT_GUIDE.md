# Component Documentation & Usage Guide

## Overview

This guide provides detailed documentation for all components in the portfolio, including their purpose, props, and usage examples.

## Components Directory Structure

```
components/
├── navigation.tsx      # Main navigation with theme toggle
├── hero.tsx           # Hero section with animations
├── about.tsx          # About section with experience
├── skills.tsx         # Skills grid showcase
├── projects.tsx       # Projects section
├── project-card.tsx   # Reusable project card
├── contact.tsx        # Contact form section
├── footer.tsx         # Footer component
└── theme-provider.tsx # Theme configuration wrapper
```

## Core Components

### 1. Navigation Component
**File**: `components/navigation.tsx`

**Purpose**: Sticky navigation header with smooth scroll, theme toggle, and mobile menu.

**Features**:
- Sticky positioning on scroll (activates after 50px)
- Smooth scroll to section navigation
- Mobile hamburger menu with animations
- Theme toggle (light/dark)
- Responsive design

**Usage**:
```tsx
import { Navigation } from '@/components/navigation'

export default function Page() {
  return (
    <>
      <Navigation />
      {/* Page content */}
    </>
  )
}
```

**Props**: None required (uses hooks internally)

**Key Classes**:
- `fixed top-0 left-0 right-0 z-40` - Sticky positioning
- `transition-all duration-300` - Smooth transitions
- `backdrop-blur-md` - Glassmorphism effect

---

### 2. Hero Component
**File**: `components/hero.tsx`

**Purpose**: Eye-catching hero section with headline, tagline, and CTA buttons.

**Features**:
- Large, responsive typography
- Animated gradient text
- Staggered entrance animations
- CTA button with scroll linking
- Animated scroll hint with float effect
- Background decorative orbs

**Usage**:
```tsx
import { Hero } from '@/components/hero'

export default function Page() {
  return <Hero />
}
```

**Key Animations**:
- Fade-in entrance (1s total)
- Staggered delays (200ms, 300ms)
- Float animation on scroll hint

**Key Classes**:
- `text-5xl sm:text-6xl lg:text-7xl` - Responsive heading
- `bg-gradient-to-r from-accent to-accent/60` - Gradient text
- `min-h-screen` - Full viewport height

---

### 3. About Component
**File**: `components/about.tsx`

**Purpose**: Professional profile section with biography and experience timeline.

**Features**:
- Profile image placeholder with gradient border
- Multiple content sections
- Experience timeline with visual indicators
- Smooth scroll reveal animations
- Responsive two-column layout

**Usage**:
```tsx
import { About } from '@/components/about'

export default function Page() {
  return <About />
}
```

**Customization**:
```tsx
// Edit the content sections in the component
const bioSections = [
  {
    title: 'Professional Background',
    content: 'Your bio here...'
  },
  // Add more sections
]

// Modify experience timeline
const experiences = [
  {
    title: 'Role',
    company: 'Company',
    date: '2024 - Present',
    description: 'Description'
  }
]
```

**Key Classes**:
- `grid grid-cols-1 md:grid-cols-2 gap-12` - Two-column layout
- `animate-slide-up delay-200` - Staggered animations
- `bg-secondary/30` - Subtle background

---

### 4. Skills Component
**File**: `components/skills.tsx`

**Purpose**: Grid showcase of technical skills with icons and categories.

**Features**:
- 8-skill card grid with icons from Lucide React
- Staggered scroll-based animations
- Tag-based skill categorization
- Hover state interactions
- Additional skills summary section

**Usage**:
```tsx
import { Skills } from '@/components/skills'

export default function Page() {
  return <Skills />
}
```

**Adding New Skills**:
```tsx
const skills: SkillCard[] = [
  {
    icon: Code2,
    title: 'New Skill',
    description: 'Description here',
    tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
  },
  // Add more skills
]
```

**Key Classes**:
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6` - Responsive grid
- `group p-6 hover:border-accent` - Interactive cards
- `bg-accent/10 group-hover:bg-accent/20` - Icon backgrounds

---

### 5. Projects Component
**File**: `components/projects.tsx`

**Purpose**: Showcase of featured and regular projects with descriptions and links.

**Features**:
- Featured project large card
- Grid of 6 regular projects
- Project tags and descriptions
- Links to live demos and GitHub
- Staggered animations on scroll

**Usage**:
```tsx
import { Projects } from '@/components/projects'

export default function Page() {
  return <Projects />
}
```

**Project Data Structure**:
```tsx
interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string              // Emoji or image path
  featured?: boolean         // Makes it featured
  link?: string             // Live demo link
  github?: string           // GitHub repo link
}
```

**Adding Projects**:
```tsx
const newProject: Project = {
  id: 7,
  title: 'Your Project Title',
  description: 'Brief description...',
  tags: ['React', 'Next.js', 'TypeScript'],
  image: '🎨',  // Use emoji or image path
  featured: false,
  link: 'https://project.com',
  github: 'https://github.com/user/project',
}
```

**Key Classes**:
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` - Project grid
- `group h-full hover:border-accent hover:shadow-lg` - Card hover effects
- `group-hover:scale-110` - Image zoom on hover

---

### 6. Project Card Component
**File**: `components/project-card.tsx`

**Purpose**: Reusable card component for displaying individual projects.

**Props**:
```tsx
interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link?: string
  github?: string
  featured?: boolean
  isVisible?: boolean
}
```

**Usage - Regular Card**:
```tsx
<ProjectCard
  title="E-Commerce Store"
  description="Modern online shopping platform"
  tags={['React', 'Stripe', 'PostgreSQL']}
  image="🛍️"
  link="https://store.com"
  github="https://github.com/user/store"
/>
```

**Usage - Featured Card**:
```tsx
<ProjectCard
  title="SaaS Dashboard"
  description="Analytics platform..."
  tags={['React', 'TypeScript', 'Node.js']}
  image="📊"
  featured={true}
  link="https://dashboard.com"
  github="https://github.com/user/dashboard"
  isVisible={true}
/>
```

---

### 7. Contact Component
**File**: `components/contact.tsx`

**Purpose**: Contact form with validation and social media links.

**Features**:
- Multi-field contact form (name, email, subject, message)
- Form validation
- Success feedback message
- Social media links
- Response time information
- Loading state on submit

**Usage**:
```tsx
import { Contact } from '@/components/contact'

export default function Page() {
  return <Contact />
}
```

**Customizing Social Links**:
```tsx
const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:your.email@example.com',
    color: 'text-accent',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/yourprofile',
    color: 'text-foreground',
  },
  // Add more social links
]
```

**Form Handling**:
```tsx
// The contact form currently simulates submission
// To integrate with email service:
// 1. Create API route: /app/api/contact/route.ts
// 2. Use service like SendGrid, Mailgun, or Resend
// 3. Update handleSubmit function to call API
```

**Key Classes**:
- `grid grid-cols-1 lg:grid-cols-3 gap-12` - Three-column layout
- `focus:border-accent focus:ring-1 focus:ring-accent` - Focus states
- `disabled:opacity-50` - Loading state styles

---

### 8. Footer Component
**File**: `components/footer.tsx`

**Purpose**: Footer with navigation, social links, and copyright.

**Features**:
- Branded footer section
- Quick navigation links
- Social media icons
- Copyright notice
- Links to policies

**Usage**:
```tsx
import { Footer } from '@/components/footer'

export default function Page() {
  return <Footer />
}
```

**Customization**:
```tsx
// Update footer links
const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
  // Add more links
]

// Update company name
<h3 className="text-lg font-bold">Your Company Name</h3>
```

---

### 9. Theme Provider
**File**: `components/theme-provider.tsx`

**Purpose**: Wrapper component for next-themes configuration.

**Usage**:
```tsx
import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  )
}
```

**Props**:
- `attribute`: HTML attribute to set ("class", "data-theme", etc.)
- `defaultTheme`: Default theme on first load
- `enableSystem`: Use system preference detection
- `storageKey`: localStorage key for theme preference

---

## Hooks

### useScrollReveal Hook
**File**: `hooks/use-scroll-reveal.ts`

**Purpose**: Custom hook for scroll-triggered reveal animations.

**Usage**:
```tsx
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

export function MyComponent() {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.2,
    delay: 100,
  })

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      Content
    </div>
  )
}
```

**Options**:
```tsx
interface ScrollRevealOptions {
  threshold?: number      // 0-1, when to trigger (default: 0.1)
  rootMargin?: string    // Margin around viewport (default: "0px")
  delay?: number         // Delay in ms before animation (default: 0)
}
```

---

## Layout Patterns

### Hero Section Layout
```tsx
<section className="min-h-screen flex items-center justify-center pt-16 px-4">
  <div className="max-w-4xl mx-auto text-center">
    {/* Content */}
  </div>
</section>
```

### Standard Section Layout
```tsx
<section className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    <div className="mb-16">
      <h2 className="text-4xl font-bold mb-4">Section Title</h2>
      <div className="w-20 h-1 bg-accent rounded-full" />
    </div>
    {/* Content */}
  </div>
</section>
```

### Grid Layout Pattern
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Grid items */}
</div>
```

---

## Common Customizations

### Change Section Background Color
```tsx
// In component JSX
<section className="py-20 bg-secondary/30"> {/* Change color here */}
  {/* Content */}
</section>

// Or in globals.css
.section-name {
  @apply bg-accent/5;
}
```

### Modify Animation Duration
```tsx
// In component
className={`transition-all duration-1000`} {/* Change 1000 to desired ms */}

// Add custom animation in tailwind.config.ts
animation: {
  'custom': 'customName 2s ease-out',
}
```

### Update Font Sizes
```tsx
// Responsive sizing
<h1 className="text-5xl sm:text-6xl lg:text-7xl">
  Large Heading
</h1>

// Modify defaults in tailwind.config.ts
fontSize: {
  'custom': ['2.5rem', { lineHeight: '1.2' }],
}
```

### Adjust Spacing
```tsx
// Modify padding
<div className="p-4 sm:p-6 lg:p-8">
  {/* Content */}
</div>

// Modify gap
<div className="flex gap-4 md:gap-6 lg:gap-8">
  {/* Items */}
</div>
```

---

## Best Practices

1. **Use Semantic HTML**: Always use proper heading levels and semantic elements
2. **Maintain Color Contrast**: Ensure 4.5:1 ratio for text and interactive elements
3. **Optimize Images**: Use compressed images or SVGs where possible
4. **Mobile First**: Design for mobile, enhance for larger screens
5. **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
6. **Performance**: Minimize re-renders with proper hook dependencies
7. **Accessibility**: Use ARIA labels and alt text appropriately
8. **Consistent Spacing**: Follow Tailwind spacing scale consistently
9. **Theme Support**: Always test components in both light and dark modes
10. **Responsive Testing**: Test all breakpoints during development

---

## Troubleshooting

### Theme Toggle Not Working
- Ensure `next-themes` is installed: `npm install next-themes`
- Check that `ThemeProvider` wraps your entire app
- Verify `suppressHydrationWarning` is on `<html>` tag

### Animations Not Showing
- Check animation class names in `tailwind.config.ts`
- Verify animation duration values
- Ensure component has `transition-all` class
- Check for CSS conflicts in custom stylesheets

### Responsive Layout Breaking
- Use mobile-first approach (no prefix first, then `md:`, `lg:`)
- Test at actual breakpoints in DevTools
- Avoid fixed widths; use percentages or Tailwind classes
- Check max-width constraints

### Dark Mode Colors Wrong
- Verify CSS variables in `:root` and `.dark` sections
- Check HSL values are correct format (hue saturation% lightness%)
- Ensure dark mode is properly enabled in next-themes config

---

## Extension Ideas

1. **Add Blog Section**: Create blog grid component
2. **Create Testimonials**: Add client/team testimonials section
3. **Implement Dark Mode Scheduling**: Auto-switch based on time
4. **Add Search**: Implement project/blog search functionality
5. **Newsletter Signup**: Add email subscription form
6. **Analytics**: Integrate Vercel Analytics or Google Analytics
7. **Page Transitions**: Add animations between pages
8. **Customizable Theme**: Add theme color picker
9. **Multi-language**: Implement i18n for multiple languages
10. **CMS Integration**: Connect to headless CMS for content management
