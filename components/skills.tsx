'use client'

import React from "react"
import { useEffect, useState, useRef } from 'react'
import {
  Layout,
  Database,
  Server,
  Wrench,
} from 'lucide-react'
import { IconType } from 'react-icons'
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiOpenjdk,
  SiSpringboot,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiNextdotjs,
  SiVite,
  SiKotlin,
  SiLaravel,
  SiHtml5,
  SiCss3,
} from 'react-icons/si'

interface SkillCategory {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  skills: string[]
  iconColor: string
  iconBgColor: string
  borderColor: string
}

interface TechBadge {
  name: string
  short: string
  accent: string
  badgeBg: string
  ring: string
  icon: IconType
}

const skillCategories: SkillCategory[] = [
  {
    icon: Layout,
    title: 'Frontend',
    description: 'Building beautiful, responsive user interfaces',
    skills: ['React', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Next.js'],
    iconColor: 'text-emerald-400',
    iconBgColor: 'bg-emerald-500/20',
    borderColor: 'border-emerald-500/30',
  },
  {
    icon: Server,
    title: 'Backend',
    description: 'Creating robust server-side applications',
    skills: ['Node.js', 'Express.js', 'Laravel', 'Spring Boot', 'Python', 'REST APIs', 'GraphQL', 'JWT Auth'],
    iconColor: 'text-amber-400',
    iconBgColor: 'bg-amber-500/20',
    borderColor: 'border-amber-500/30',
  },
  {
    icon: Database,
    title: 'Database',
    description: 'Managing and optimizing data storage',
    skills: ['MongoDB', 'MySQL','Mongoose'],
    iconColor: 'text-blue-400',
    iconBgColor: 'bg-blue-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    icon: Wrench,
    title: 'Tools',
    description: 'Development tools and environments',
    skills: ['Git & GitHub', 'VS Code', 'Android Studio'],
    iconColor: 'text-purple-400',
    iconBgColor: 'bg-purple-500/20',
    borderColor: 'border-purple-500/30',
  },
]

const mernStack: TechBadge[] = [
  {
    name: 'MongoDB',
    short: 'M',
    accent: 'text-emerald-300',
    badgeBg: 'bg-emerald-500/10',
    ring: 'ring-emerald-400/40',
    icon: SiMongodb,
  },
  {
    name: 'Express.js',
    short: 'Ex',
    accent: 'text-cyan-200',
    badgeBg: 'bg-cyan-500/10',
    ring: 'ring-cyan-400/30',
    icon: SiExpress,
  },
  {
    name: 'React',
    short: 'R',
    accent: 'text-sky-200',
    badgeBg: 'bg-sky-500/10',
    ring: 'ring-sky-400/30',
    icon: SiReact,
  },
  {
    name: 'Node.js',
    short: 'N',
    accent: 'text-lime-200',
    badgeBg: 'bg-lime-500/10',
    ring: 'ring-lime-400/30',
    icon: SiNodedotjs,
  },
]

const otherTechnologies: TechBadge[] = [
  { name: 'TypeScript', short: 'TS', accent: 'text-sky-200', badgeBg: 'bg-sky-500/10', ring: 'ring-sky-400/30', icon: SiTypescript },
  { name: 'JavaScript', short: 'JS', accent: 'text-amber-200', badgeBg: 'bg-amber-500/10', ring: 'ring-amber-400/30', icon: SiJavascript },
  { name: 'Python', short: 'Py', accent: 'text-yellow-200', badgeBg: 'bg-yellow-500/10', ring: 'ring-yellow-400/30', icon: SiPython },
  { name: 'Java', short: 'Ja', accent: 'text-orange-200', badgeBg: 'bg-orange-500/10', ring: 'ring-orange-400/30', icon: SiOpenjdk },
  { name: 'Spring Boot', short: 'SB', accent: 'text-emerald-200', badgeBg: 'bg-emerald-500/10', ring: 'ring-emerald-400/30', icon: SiSpringboot },
  { name: 'Laravel', short: 'La', accent: 'text-red-200', badgeBg: 'bg-red-500/10', ring: 'ring-red-400/30', icon: SiLaravel },
  { name: 'HTML', short: 'Html', accent: 'text-orange-200', badgeBg: 'bg-orange-500/10', ring: 'ring-orange-400/30', icon: SiHtml5 },
  { name: 'CSS', short: 'Css', accent: 'text-blue-200', badgeBg: 'bg-blue-500/10', ring: 'ring-blue-400/30', icon: SiCss3 },
  { name: 'MySQL', short: 'My', accent: 'text-blue-200', badgeBg: 'bg-blue-500/10', ring: 'ring-blue-400/30', icon: SiMysql },
  { name: 'Docker', short: 'Do', accent: 'text-cyan-200', badgeBg: 'bg-cyan-500/10', ring: 'ring-cyan-400/30', icon: SiDocker },
  { name: 'Git', short: 'Gi', accent: 'text-red-200', badgeBg: 'bg-red-500/10', ring: 'ring-red-400/30', icon: SiGit },
  { name: 'GitHub', short: 'GH', accent: 'text-slate-100', badgeBg: 'bg-slate-500/10', ring: 'ring-slate-200/30', icon: SiGithub },
  { name: 'Tailwind CSS', short: 'TW', accent: 'text-teal-200', badgeBg: 'bg-teal-500/10', ring: 'ring-teal-400/30', icon: SiTailwindcss },
  { name: 'Next.js', short: 'Nx', accent: 'text-white', badgeBg: 'bg-white/5', ring: 'ring-white/20', icon: SiNextdotjs },
  { name: 'Vite', short: 'Vi', accent: 'text-purple-200', badgeBg: 'bg-purple-500/10', ring: 'ring-purple-400/30', icon: SiVite },
  { name: 'Kotlin', short: 'Kt', accent: 'text-fuchsia-200', badgeBg: 'bg-fuchsia-500/10', ring: 'ring-fuchsia-400/30', icon: SiKotlin },
]

export function Skills() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(skillCategories.length).fill(false))
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the animation of each card
          skillCategories.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 150)
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

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 -z-10" />
      <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10 animate-bounce-soft" />
      
      {/* Decorative dots */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100" />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200" />
      <div className="absolute bottom-20 right-40 w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-300" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-20 space-y-10">
          <div className="relative rounded-[36px] border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/60 to-slate-900/20 p-8 sm:p-12 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-16 -left-12 w-64 h-64 bg-emerald-500/20 blur-3xl" />
              <div className="absolute -bottom-16 -right-10 w-72 h-72 bg-cyan-500/20 blur-3xl" />
            </div>

            <div className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="text-center lg:text-left max-w-xl">
                <p className="text-emerald-300 uppercase tracking-[0.4em] text-sm font-semibold mb-3">MERN Stack</p>
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Full-stack foundations I rely on</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  End-to-end applications powered by MongoDB, Express, React, and Node keep my builds fast, scalable, and maintainable.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 w-full lg:w-auto">
                {mernStack.map((tech, index) => {
                  const Icon = tech.icon
                  return (
                    <div
                      key={tech.name}
                      className={`flex flex-col items-center gap-2 px-6 py-6 rounded-3xl border border-white/10 ${tech.badgeBg} ring-2 ${tech.ring} backdrop-blur-md transition-transform duration-200 hover:-translate-y-1 animate-mern-card`}
                      style={{ animationDelay: `${index * 0.18}s` }}
                    >
                      <Icon className={`w-10 h-10 ${tech.accent}`} />
                      <span className={`text-2xl font-black tracking-wide ${tech.accent}`}>{tech.short}</span>
                      <span className="text-sm text-muted-foreground">{tech.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="relative rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0B132B]/90 via-[#0B162F]/60 to-[#0C1A33]/30 p-8 sm:p-12 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-6 right-10 w-40 h-40 bg-indigo-500/10 blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-500/10 blur-[120px]" />
            </div>

            <div className="relative flex flex-col gap-6">
              <div className="text-center">
                <p className="text-cyan-300 uppercase tracking-[0.5em] text-sm font-semibold mb-3">Other Technologies</p>
                <h4 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">Tools and platforms I lean on</h4>
                <p className="text-muted-foreground text-base">
                  From infrastructure and orchestration to UI polish, these are the ecosystems I stack alongside MERN builds.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {otherTechnologies.map((tech) => {
                  const Icon = tech.icon
                  return (
                    <div
                      key={tech.name}
                      className={`flex flex-col items-center justify-center gap-2 py-5 px-4 rounded-3xl border border-white/10 ${tech.badgeBg} ring-1 ${tech.ring} backdrop-blur text-center transition-transform duration-200 hover:-translate-y-1`}
                    >
                      <Icon className={`w-8 h-8 ${tech.accent}`} />
                      <span className={`text-lg sm:text-xl font-semibold tracking-wide ${tech.accent}`}>{tech.short}</span>
                      <span className="text-sm text-muted-foreground">{tech.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-emerald-400 tracking-[0.2em] uppercase mb-4 animate-slide-up">
            What I Do Best
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Skills & Expertise
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className={`transition-all duration-700 transform ${
                  visibleCards[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className={`group relative p-6 glass-card border ${category.borderColor} rounded-2xl hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 h-full hover:scale-[1.02]`}>
                  {/* Icon */}
                  <div className={`inline-flex p-4 ${category.iconBgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${category.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6">
                    {category.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1.5 text-xs font-medium border ${category.borderColor} ${category.iconColor} bg-transparent rounded-lg hover:${category.iconBgColor} transition-all duration-200`}
                        style={{
                          animation: visibleCards[index] ? `scale-in 0.5s ease-out ${0.2 + skillIndex * 0.05}s forwards` : 'none',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
