'use client'

import { useEffect, useState, useRef } from 'react'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { ConstellationOverlay } from '@/components/ui/constellation-overlay'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  featured?: boolean
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'DW Science',
    description:
      'DW Science is a client educational website developed by Inficode Solutions, designed to support science learning for students in grades 6–11 through clear explanations, structured content, and a modern, student-friendly interface.',
    tags: ['React', 'TypeScript', 'Node.js'],
    image: '/images/dwscience.png',
    featured: true,
    link: 'https://www.dwscience.com/',
    github: 'https://github.com/Gayaltil954/dwscience',
  },
  {
    id: 2,
    title: 'InfiCode Solutions',
    description:
      'Inficode Solutions is our startup’s official website, built using Next.js and TypeScript, showcasing our services, vision, and modern approach to building high-quality web solutions.',
    tags: ['Next.js', 'TypeScript', 'HTML', 'CSS'],
    image: '/images/inficode2.png',
    link: 'https://infi-code-opal.vercel.app/',
    github: 'https://github.com/Gayaltil954/InfiCode',
  },
  {
    id: 3,
    title: 'Gemini Clone',
    description:
      'A Gemini AI clone built using JavaScript, HTML, and CSS, replicating the core chat interface and user experience with a clean, responsive design',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/gemini clone.png',
    link: 'https://lnkd.in/daVykFvb',
    github: 'https://github.com/Gayaltil954/gemini_clone',
  },
  {
    id: 4,
    title: 'WatchWave',
    description:
      'A movie discovery web app built using HTML, CSS, and JavaScript, allowing users to browse movies with a clean UI and interactive experience.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/monvie.png',
    link: 'https://lnkd.in/gkwKfRZq',
    github: 'https://github.com/Gayaltil954/watch_wave',
  },
  {
    id: 5,
    title: 'EventEscape',
    description:
      'EventEscape is a campus event booking system where I served as the project lead, developed using Java and CSS to manage event listings, bookings, and user interactions.',
    tags: ['Java', 'CSS',],
    image: '/images/event.png',
    github: 'https://github.com/Gayaltil954/event_escape'
  },
  {
    id: 6,
    title: 'CafePos',
    description:
      'CafePOS is a campus project developed using the MERN stack, designed to manage café operations including orders, billing, and basic inventory through a modern web interface.',
    tags: ['React', 'HTML', 'MongoDB', 'Express.js', 'Node.js'],
    image: '/images/pos.png',
    github: 'https://github.com/Gayaltil954/pos-system'
  },
  {
    id: 7,
    title: 'Figma Design 1',
    description:
      'Creative UI/UX design created in Figma showcasing modern design principles and user-centered approach.',
    tags: ['Figma', 'UI/UX', 'Design', 'Prototyping'],
    image: '/images/figma1.png',
    link: 'https://lnkd.in/gj5nzVPX',
  },
  {
    id: 8,
    title: 'Figma Design 2',
    description:
      'Innovative interface design in Figma featuring contemporary layouts and engaging visual elements.',
    tags: ['Figma', 'UI Design', 'Prototyping'],
    image: '/images/figma2.png',
    link: 'https://lnkd.in/g9SfsYGM',
  },
]

export function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>(
    new Array(projects.length).fill(false)
  )
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projects.forEach((_, index) => {
            setTimeout(() => {
              setVisibleProjects((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 100)
          })
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const featuredProject = projects.find((p) => p.featured)
  const regularProjects = projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Constellation Overlay */}
      <ConstellationOverlay 
        particleCount={280}
        particleColor="rgba(168, 85, 247, 0.9)"
        lineColor="rgba(168, 85, 247, 0.3)"
        maxDistance={180}
        speed={0.25}
      />
      
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5" style={{ zIndex: 0 }} />
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-l from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse-glow" style={{ zIndex: 0 }} />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-float" style={{ zIndex: 0 }} />
      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 10 }}>
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div
            className={`mb-16 transition-all duration-700 transform ${
              visibleProjects[0] ? 'opacity-100 translate-y-0 animate-scale-in' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center glass-card border border-border rounded-2xl overflow-hidden hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 hover:scale-[1.01]">
              {/* Image */}
              <div className="h-64 md:h-96 bg-gradient-to-br from-accent/20 to-accent/5 relative">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-contain p-6"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3">
                    Featured
                  </span>
                  <h3 className="text-3xl font-bold text-foreground mb-3">
                    {featuredProject.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-secondary text-foreground rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {featuredProject.link && (
                    <a
                      href={featuredProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 transform hover:scale-105"
                    >
                      View Live
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2 border border-border rounded-lg font-semibold text-foreground hover:bg-secondary transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 transform ${
                visibleProjects[index + 1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animation: visibleProjects[index + 1] ? `slide-up 0.6s ease-out ${(index + 1) * 0.1}s forwards` : 'none',
              }}
            >
              <div className="group h-full glass-card border border-border rounded-xl overflow-hidden hover:border-accent hover:shadow-2xl hover:shadow-accent/20 hover:scale-[1.02] transition-all duration-300 flex flex-col">
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-accent/10 to-secondary/50 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-shimmer" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-secondary text-foreground rounded group-hover:bg-accent/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-foreground hover:text-accent transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more? Check out my complete portfolio.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 transform hover:scale-105"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
