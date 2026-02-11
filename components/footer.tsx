'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/gayaltil954', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gayaltil55/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:thilakarathnagayal@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="border-t border-border glass-nav">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="animate-fade-in">
            <h3 className="text-lg font-bold text-foreground mb-2 hover:text-accent transition-colors duration-200">Portfolio</h3>
            <p className="text-muted-foreground text-sm">
              Building beautiful digital experiences with code and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="#about"
                className="text-sm text-muted-foreground hover:text-accent hover:translate-x-1 transition-all duration-200"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-sm text-muted-foreground hover:text-accent hover:translate-x-1 transition-all duration-200"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-sm text-muted-foreground hover:text-accent hover:translate-x-1 transition-all duration-200"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-accent hover:translate-x-1 transition-all duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
              Follow
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground text-foreground flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                    style={{
                      animation: `scale-in 0.5s ease-out ${0.25 + index * 0.1}s forwards`,
                    }}
                  >
                    <Icon className="w-5 h-5 hover:animate-rotate-in" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
            © {currentYear} Gayal Thilakarathna Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0" />
        </div>
      </div>
    </footer>
  )
}
