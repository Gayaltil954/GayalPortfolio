# Portfolio Design System

## Visual Design Overview

This portfolio follows a modern, clean aesthetic with professional typography and a sophisticated color system. All design decisions are optimized for readability, accessibility, and visual hierarchy.

## Color Palette

### Primary Colors
- **Accent (Blue)**: `#3B82F6` (210° 100% 50%)
  - Used for CTAs, highlights, and interactive elements
  - Maintains 4.5:1 contrast ratio in both themes

- **Foreground (Text)**: 
  - Light: `#141414` (0° 0% 8%)
  - Dark: `#F2F2F2` (0° 0% 95%)

- **Background**:
  - Light: `#FFFFFF` (0° 0% 100%)
  - Dark: `#0F1A2E` (217° 33% 8%)

### Secondary Colors
- **Secondary Background**:
  - Light: `#E0E0E0` (0° 0% 88%)
  - Dark: `#1E2D47` (217° 25% 20%)

- **Border/Muted**:
  - Light: `#E8E8E8` (0° 0% 92%)
  - Dark: `#2A3E5F` (217° 25% 22%)

## Typography

### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

### Font Sizes & Weights
```
Display (Hero):
- Size: 5rem (80px) on mobile, 7rem (112px) on desktop
- Weight: 700 (Bold)
- Line Height: 1.2

Heading 1 (Section titles):
- Size: 2.25rem (36px) → 3rem (48px)
- Weight: 700
- Line Height: 1.3

Heading 2 (Component titles):
- Size: 1.25rem (20px) → 1.5rem (24px)
- Weight: 600
- Line Height: 1.4

Heading 3 (Subsections):
- Size: 1.125rem (18px)
- Weight: 600
- Line Height: 1.4

Body Text:
- Size: 1rem (16px) for desktop, 0.95rem (15px) for mobile
- Weight: 400
- Line Height: 1.6 (leading-relaxed)

Small Text (captions, labels):
- Size: 0.875rem (14px) or 0.75rem (12px)
- Weight: 500
- Line Height: 1.5

```

## Spacing System

Tailwind spacing scale used throughout:
```
px-4  = 1rem (16px)    - Standard padding
px-6  = 1.5rem (24px)  - Large padding
px-8  = 2rem (32px)    - Extra large padding

gap-4 = 1rem (16px)    - Standard gap
gap-6 = 1.5rem (24px)  - Large gap
gap-8 = 2rem (32px)    - Extra large gap

py-20 = 5rem (80px)    - Section padding (vertical)
px-4 sm:px-6 lg:px-8   - Responsive padding

Section height: min-h-screen (100vh)
Max width: 6rem (1536px)
```

## Border Radius

- **Default**: `0.5rem` (8px)
- **Large**: `1rem` (16px)
- **Rounded Full**: `9999px` (Pills, fully rounded)

Used consistently for cards, buttons, and input fields.

## Shadow System

```
Tailwind Shadows:
- hover:shadow-lg      - Lifted effect on hover
- shadow-md            - Subtle elevation
- No shadow by default - Clean, flat aesthetic
```

## Component Specifications

### Buttons

**Primary CTA Button**
- Background: Accent color
- Text: White/Accent-foreground
- Padding: `px-8 py-3` (32px x 12px)
- Border Radius: 8px
- Font Weight: 600
- Hover: 90% opacity + scale-105
- Transition: 200ms ease-out

**Secondary Button**
- Background: Transparent
- Border: 1px border-border
- Padding: `px-8 py-3`
- Hover: bg-secondary
- Font Weight: 600

**Icon Button**
- Size: 40px x 40px
- Background: Secondary
- Hover: Background changes to accent, text to accent-foreground
- Padding: `p-2` (8px)

### Input Fields

- **Background**: Card color
- **Border**: 1px border-border
- **Padding**: `px-4 py-3` (16px x 12px)
- **Border Radius**: 8px
- **Focus**: border-accent + ring-1 ring-accent
- **Text Color**: Foreground
- **Placeholder**: Muted-foreground

### Cards

- **Background**: Card color (slightly lighter in light mode, darker in dark mode)
- **Border**: 1px border-border
- **Border Radius**: 12px
- **Padding**: `p-6` (24px) standard
- **Hover**: border-accent + shadow-lg
- **Transition**: 300ms ease-out

## Responsive Design

### Breakpoints
- **Mobile**: < 640px (default mobile styles)
- **Small**: 640px+ (sm:)
- **Medium**: 768px+ (md:)
- **Large**: 1024px+ (lg:)
- **Extra Large**: 1280px+ (xl:)

### Mobile-First Approach
All components start with mobile styles, enhanced with responsive prefixes:

```tsx
// Mobile: 1 column, Medium: 2 columns, Large: 4 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" />

// Mobile: Full width, Tablet: Half width, Desktop: 40%
<div className="w-full md:w-1/2 lg:w-2/5" />

// Mobile: 16px padding, Tablet: 24px, Desktop: 32px
<div className="px-4 sm:px-6 lg:px-8" />
```

## Animation Specifications

### Entrance Animations

**Fade In**
- Duration: 600ms
- Easing: ease-out
- Opacity: 0 → 1

**Slide Up**
- Duration: 600ms
- Easing: ease-out
- Transform: translateY(10px) → translateY(0)
- Opacity: 0 → 1

**Staggered Entrance** (Grid items)
- Individual delays: 100ms per item
- Creates cascade effect for visual interest

### Interaction Animations

**Hover Scale**
- Duration: 200ms
- Transform: scale(1) → scale(1.05)
- Applies to buttons and links

**Border Transition**
- Duration: 300ms
- Color change on hover
- Applies to card borders

**Float Animation** (Scroll hint)
- Duration: 3s
- Infinite loop
- Transform: translateY(0) → translateY(-10px) → translateY(0)

## Layout Patterns

### Section Layout
```tsx
<section className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    {/* Content */}
  </div>
</section>
```

### Grid Layout (Skills/Projects)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Items */}
</div>
```

### Hero Section
```tsx
<section className="min-h-screen flex items-center justify-center">
  {/* Centered content */}
</section>
```

## Accessibility Standards

### Color Contrast
- Text on background: 4.5:1 (WCAG AA)
- Large text: 3:1 (WCAG AA)
- Interactive elements: Clearly distinguishable

### Focus States
- All interactive elements have visible focus states
- Focus ring color: Accent color
- Focus ring offset: 2px

### Screen Reader Compatibility
- Semantic HTML (`main`, `nav`, `section`, `header`, `footer`)
- ARIA labels on icon buttons
- Form labels properly associated
- Alt text for decorative content described

## Icon System

**Icon Library**: Lucide React
**Sizes**: 16px, 20px, 24px, 32px
**Stroke Width**: 2px (default)

### Icon Usage
- Navigation: 20px
- Buttons: 16-20px
- Section headers: 24px
- Large displays: 32px+

## Text Styles

### Accent Text
```tsx
<span className="text-accent">Highlighted Text</span>
```

### Muted Text
```tsx
<p className="text-muted-foreground">Secondary info</p>
```

### Gradient Text (Hero)
```tsx
<span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
  Gradient Text
</span>
```

## Dark Mode Implementation

### Strategy
- Uses `prefers-color-scheme` media query
- Stored in localStorage for persistence
- Next-themes handles automatic detection

### Color Adjustments
- Dark mode colors are more saturated than light mode
- Accent is brighter in dark mode (60% vs 50%)
- Better contrast for readability

## Micro-interactions

### Hover States
- **Buttons**: Scale to 1.05 + color change
- **Links**: Color transition to accent
- **Cards**: Border color change + shadow lift
- **Icons**: Scale to 1.1

### Form Interactions
- **Focus**: Border + ring appearance
- **Valid**: Subtle green indicator
- **Error**: Subtle red indicator

### Success State
- Animated icon appearance
- Fade in message
- Auto-dismiss after 5 seconds

## Mobile Optimization

### Touch Targets
- Minimum 44px x 44px for buttons
- 10px padding minimum around interactive elements

### Mobile Navigation
- Hamburger menu for screens < 768px
- Slide-up animation on open
- Dismisses on link click

### Responsive Images
- Emoji placeholders scale with container
- Images use `object-cover` for consistency

## Performance Considerations

### CSS
- Only Tailwind utilities used
- No custom CSS except animations
- Minimal specificity conflicts

### Animations
- Use transform and opacity (GPU-accelerated)
- Avoid animating height/width
- Debounce scroll events

### Images
- Use placeholder emojis for portfolio demo
- Ready for replacement with actual images

## Design Token System

All design values are derived from CSS custom properties:

```css
--foreground: Text color
--background: Page background
--card: Card surfaces
--accent: Interactive elements and highlights
--secondary: Secondary surfaces
--border: Border colors
--input: Form input styling
--muted: Muted text
--destructive: Error/delete actions
--ring: Focus ring color
--radius: Border radius base value
```

## Figma Integration

**Ready for Figma Export:**
- Component library structure matches file organization
- Tailwind tokens map to design tokens
- Spacing, color, and typography guidelines included
- Responsive component variants documented

## Extended Customization

### Brand Color Override
Replace accent color by modifying:
1. CSS variables in `globals.css`
2. Update Tailwind theme in `tailwind.config.ts`
3. Adjust both light and dark modes for consistency

### Typography Custom
Add custom fonts by:
1. Importing from Google Fonts in `layout.tsx`
2. Updating `tailwind.config.ts` fontFamily
3. Applying with `font-sans` or custom classes

### Animation Custom
Extend animations by:
1. Adding keyframes to `tailwind.config.ts`
2. Creating animation in keyframes object
3. Applying with `animate-*` classes
