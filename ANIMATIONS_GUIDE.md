# Portfolio Animations Guide

## Overview

This portfolio features comprehensive micro-animations and transitions throughout the entire application. All animations are GPU-accelerated and optimized for performance.

## Animation Keyframes

### 1. **Fade In**
- **Duration**: 0.6s
- **Easing**: ease-out
- **Description**: Fades elements from opacity 0 to 1
- **Usage**: Initial page loads, component reveals

```tailwind
animate-fade-in
```

### 2. **Slide Up**
- **Duration**: 0.6s
- **Easing**: ease-out
- **Description**: Slides elements up from translateY(10px)
- **Usage**: Content reveals on scroll, staggered animations

```tailwind
animate-slide-up
```

### 3. **Slide Down**
- **Duration**: 0.6s
- **Easing**: ease-out
- **Description**: Slides elements down from translateY(-10px)
- **Usage**: Navigation appearance, dropdown menus

```tailwind
animate-slide-down
```

### 4. **Slide In Left**
- **Duration**: 0.6s
- **Easing**: ease-out
- **Description**: Slides elements from left (translateX(-20px))
- **Usage**: Left-aligned content entry

```tailwind
animate-slide-in-left
```

### 5. **Slide In Right**
- **Duration**: 0.6s
- **Easing**: ease-out
- **Description**: Slides elements from right (translateX(20px))
- **Usage**: Right-aligned content entry

```tailwind
animate-slide-in-right
```

### 6. **Scale In**
- **Duration**: 0.5s
- **Easing**: ease-out
- **Description**: Scales elements from 0.9 to 1 with fade
- **Usage**: Button clicks, card reveals, emphasis effects

```tailwind
animate-scale-in
```

### 7. **Float**
- **Duration**: 3s
- **Easing**: ease-in-out (infinite)
- **Description**: Gentle bobbing motion (±10px vertical)
- **Usage**: Scroll hints, decorative elements

```tailwind
animate-float
```

### 8. **Bounce Soft**
- **Duration**: 2s
- **Easing**: ease-in-out (infinite)
- **Description**: Subtle bounce motion (±5px vertical)
- **Usage**: Interactive elements, hover states

```tailwind
animate-bounce-soft
```

### 9. **Pulse Glow**
- **Duration**: 2s
- **Easing**: ease-in-out (infinite)
- **Description**: Pulsing glow effect with opacity changes
- **Usage**: Background orbs, accent highlights

```tailwind
animate-pulse-glow
```

### 10. **Rotate In**
- **Duration**: 0.6s
- **Easing**: ease-out
- **Description**: Rotates elements from -5deg with scale from 0.95
- **Usage**: Icon animations, emphasis effects

```tailwind
animate-rotate-in
```

### 11. **Glow**
- **Duration**: 2s
- **Easing**: ease-in-out (infinite)
- **Description**: Text glow effect via text-shadow
- **Usage**: Highlighted headings, accent text

```tailwind
animate-glow
```

### 12. **Shimmer**
- **Duration**: 2s
- **Easing**: linear (infinite)
- **Description**: Shimmer effect across elements
- **Usage**: Image overlays, loading states, special effects

```tailwind
animate-shimmer
```

### 13. **Shake**
- **Duration**: 0.5s
- **Easing**: ease-in-out
- **Description**: Quick shake motion (±5px horizontal)
- **Usage**: Error states, attention-grabbing

```tailwind
animate-shake
```

## Animation Delays

Staggered animations use inline styles with animation delays:

```jsx
style={{ animationDelay: '0.1s' }}
style={{ animationDelay: '0.2s' }}
```

Common delay patterns:
- Navigation items: 0s, 0.1s, 0.2s, 0.3s
- Card grids: index * 0.08s, index * 0.1s
- Form fields: 0.2s, 0.3s, 0.4s, 0.5s, 0.6s
- Timeline items: 0s, 0.1s, 0.2s

## Component Animation Patterns

### Navigation
- Logo: hover scale (1.1x)
- Nav links: bottom border accent on hover + slide-in-left on sticky
- Theme toggle: rotate (12deg) + scale (1.1x) on hover
- Mobile menu: slide-up on open, staggered child animation

### Hero Section
- Title: fade-in + slide-up
- Subtitle: fade-in + slide-up (delayed)
- CTA buttons: scale-in (staggered delays)
- Scroll hint: float + bounce-soft on hover
- Background orbs: pulse-glow + bounce-soft + float

### About Section
- Profile image: slide-in-left with transform on hover
- Bio content: slide-in-right with staggered paragraphs
- Timeline dots: pulse-glow continuous
- Timeline items: slide-in-left with staggered delays

### Skills Section
- Section title: slide-up + scale-in underline
- Skill cards: scale-in with staggered delays (index * 0.08s)
- Skill icons: rotate-in with scale on hover
- Skill tags: scale-in with staggered delays

### Projects Section
- Featured project: scale-in + hover scale (1.05x)
- Project cards: slide-up with staggered delays
- Project images: scale (1.1x) on hover + shimmer overlay
- Project emojis: rotate-in on hover

### Contact Section
- Form fields: slide-up with 0.2s-0.5s delays
- Social links: slide-in-left with icon rotation
- Submit button: scale-in + active scale-down
- Success message: slide-up animation

### Footer
- Brand: fade-in
- Quick links: slide-up with hover translate-x
- Social icons: scale-in with staggered delays
- Bottom text: fade-in with delayed animation

## Transition Classes

All interactive elements use smooth transitions:

```tailwind
transition-all duration-200
transition-colors duration-300
transition-transform duration-300
```

## Hover Effects

Enhanced hover interactions across components:

- **Buttons**: `hover:scale-105 active:scale-95`
- **Cards**: `hover:scale-105 hover:shadow-xl`
- **Links**: `hover:text-accent hover:translate-x-1`
- **Icons**: `hover:scale-125 hover:animate-rotate-in`

## Performance Tips

1. **Use GPU-accelerated properties**: transform, opacity
2. **Avoid animating**: width, height, left/right (use transform instead)
3. **Stagger animations**: Prevents overwhelming the browser
4. **Respect prefers-reduced-motion**: Important for accessibility

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
  }
}
```

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 12+)
- Mobile: Optimized with reduced animation duration

## Customization

To customize animations globally, edit `tailwind.config.ts`:

```ts
animation: {
  'custom': 'custom 1s ease-out',
}
```

To modify specific component animations, edit the component files directly and adjust:
- `animationDelay`
- `transition-all duration-*`
- `hover:` classes

## Best Practices

1. Keep animations under 1s for micro-interactions
2. Use ease-out for entrance animations
3. Use ease-in-out for looping animations
4. Group related animations together
5. Test on different devices and connection speeds
