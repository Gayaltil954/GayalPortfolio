'use client'

import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { useState } from 'react'

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

export function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  github,
  featured = false,
  isVisible = true,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  if (featured) {
    return (
      <div
        className={`transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center glass-card border border-border rounded-2xl overflow-hidden hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 hover:scale-[1.01]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image */}
          <div className={`h-64 md:h-96 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-8xl transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            {image}
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3">
                Featured
              </span>
              <h3 className="text-3xl font-bold text-foreground mb-3">
                {title}
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-secondary text-foreground rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {link && (
                <a
                  href={link}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 transform hover:scale-105"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
              {github && (
                <a
                  href={github}
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
    )
  }

  return (
    <div
      className={`transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div
        className="group h-full glass-card border border-border rounded-xl overflow-hidden hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 flex flex-col cursor-pointer hover:scale-[1.02]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Image */}
        <div className={`h-48 bg-gradient-to-br from-accent/10 to-secondary/50 flex items-center justify-center text-6xl transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
          {image}
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 flex-grow">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-secondary text-foreground rounded group-hover:bg-accent/20 transition-colors"
              >
                {tag}
              </span>
            ))}
            {tags.length > 2 && (
              <span className="px-2 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded">
                +{tags.length - 2}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-4 border-t border-border">
            {link && (
              <a
                href={link}
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live
              </a>
            )}
            {github && (
              <a
                href={github}
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
  )
}
