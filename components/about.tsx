'use client'

import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="about-starfield" aria-hidden="true" />
      <div className="about-starfield-overlay" aria-hidden="true" />
      <div className="about-constellation" aria-hidden="true" />
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-l from-blue-500/15 to-purple-500/15 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-pink-500/15 to-cyan-500/15 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground  animate-section-title">About Me</h2>
          <div className=" bg-accent  animate-underline" style={{ transformOrigin: 'left' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? 'opacity-100 translate-x-0 animate-slide-in-left'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-accent/10 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 blur-sm" />
              <div className="relative glass-card rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-square relative">
                  <Image
                    src="/images/Gayal1.jpeg"
                    alt="Gayal Thilakarathna portrait"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible
                ? 'opacity-100 translate-x-0 animate-slide-in-right'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-6">
              <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-2xl font-bold text-foreground mb-3">Professional Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I’m a BSc (Hons) Information Technology undergraduate specializing in Software Engineering at SLIIT, with hands-on experience in web and software development. I’ve worked as a junior developer, software engineer intern, and currently run my own web development venture, delivering real-world, production-ready solutions for clients and organizations.
                </p>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-2xl font-bold text-foreground mb-3">My Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in building clean, scalable, and user-focused solutions. I follow best development practices, apply object-oriented principles, and work comfortably within Agile environments while continuously learning and adapting to new technologies.
                </p>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-2xl font-bold text-foreground mb-3">What I Do</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I design and develop responsive web applications, create intuitive UI/UX designs, and build full-stack solutions using modern technologies. From planning and prototyping to deployment and maintenance, I focus on delivering reliable, efficient, and visually engaging digital products.
                </p>
              </div>

              <div className="pt-4 animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <a
                  href="#contact"
                  className="btn-base btn-primary"
                >
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
