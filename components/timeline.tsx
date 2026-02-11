'use client'

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Calendar, GraduationCap, Briefcase, Rocket, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import { ConstellationOverlay } from '@/components/ui/constellation-overlay'

interface TimelineItem {
  id: number
  title: string
  institution: string
  date: string
  description: string
  image: string
  side: 'left' | 'right'
  icon: LucideIcon
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: 'Secondary Education',
    institution: 'Rahula College, Matara',
    date: '2010 - 2022',
    description: 'Completed secondary education with a strong foundation in mathematics and science.',
    image: '/images/Dutugemunu.png',
    side: 'left',
    icon: GraduationCap,
  },
  {
    id: 2,
    title: 'BSc in Information Technology',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    date: '2022 - Present',
    description: 'Pursuing degree in IT with focus on software engineering and modern technologies.',
    image: '/images/SLIIT.png',
    side: 'right',
    icon: GraduationCap,
  },
  {
    id: 3,
    title: 'Software Engineer Intern',
    institution: 'Tech Company',
    date: '2025',
    description: 'Gained hands-on experience in full-stack development, working with MERN stack and modern frameworks.',
    image: '/images/eyerax.jpg',
    side: 'left',
    icon: Briefcase,
  },
  {
    id: 4,
    title: 'Founder & Lead Developer Inficode Solutions',
    institution: 'Independent Projects',
    date: '2026 - Present',
    description: 'Building custom web applications and contributing to open-source projects.',
    image: '/images/inficode.png',
    side: 'right',
    icon: Rocket,
  },
]

export function Timeline() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({
    threshold: 0.1,
  })

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
    >
      {/* Constellation Overlay */}
      <ConstellationOverlay 
        particleCount={250}
        particleColor="rgba(96, 165, 250, 0.9)"
        lineColor="rgba(96, 165, 250, 0.35)"
        maxDistance={180}
        speed={0.2}
      />
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto" style={{ zIndex: 10 }}>
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            sectionVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-accent font-medium mb-2 text-sm uppercase tracking-wider">
            MY JOURNEY
          </p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
            Timeline
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Line with Gradient */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/20 via-accent/50 to-accent/20 transform -translate-x-1/2 hidden md:block" />
          {/* Dotted Tube Light Animation Overlay */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 timeline-dotted-line transform -translate-x-1/2 hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-24">
            {timelineData.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Journey Continues Button */}
        <div className="mt-20 flex justify-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-accent/30 bg-accent/10 backdrop-blur-sm hover:border-accent/60 hover:bg-accent/20 transition-all duration-300 cursor-default">
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
            <span className="text-accent font-medium tracking-wider">Journey continues...</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineCard({
  item,
  index,
}: {
  item: TimelineItem
  index: number
}) {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.3,
    delay: index * 100,
  })

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0'
      } ${item.side === 'left' ? '-translate-x-10' : 'translate-x-10'}`}
    >
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex items-start gap-4">
          {/* Timeline icon */}
          <div className="relative flex-shrink-0 mt-2">
            <div className="w-12 h-12 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-lg shadow-accent/30 backdrop-blur-sm">
              <item.icon className="w-6 h-6 text-accent animate-pulse" />
            </div>
            <div className="absolute top-12 left-1/2 w-0.5 h-24 bg-accent/20 transform -translate-x-1/2" />
          </div>

          {/* Card */}
          <div className="flex-1 group">
            <div className="p-6 rounded-xl border-2 border-border bg-card hover:border-accent transition-all duration-300 shadow-lg hover:shadow-accent/20">
              {/* Image */}
              <div className="mb-4 rounded-lg overflow-hidden p-4 aspect-video relative">
                <Image
                  src={item.image}
                  alt={item.institution}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 text-accent text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{item.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>

              {/* Institution */}
              <p className="text-accent font-medium mb-3">{item.institution}</p>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative">
        <div className="grid grid-cols-2 gap-8 items-center min-h-[300px]">
        {item.side === 'left' ? (
          <>
            {/* Left Card */}
            <div className="text-right pr-8">
              <div className="inline-block group">
                <div className="p-6 rounded-xl border-2 border-border bg-card hover:border-accent transition-all duration-300 shadow-lg hover:shadow-accent/20">
                  {/* Image */}
                  <div className="mb-4 rounded-lg overflow-hidden p-4 aspect-video relative h-40">
                    <Image
                      src={item.image}
                      alt={item.institution}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Date */}
                  <div className="flex items-center justify-start gap-2 text-accent text-sm mb-3 text-left">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{item.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 text-left">
                    {item.title}
                  </h3>

                  {/* Institution */}
                  <p className="text-accent font-medium mb-3 text-left">
                    {item.institution}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed text-left">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Empty space for center alignment */}
            <div></div>
          </>
        ) : (
          <>
            {/* Empty space for center alignment */}
            <div></div>

            {/* Right Card */}
            <div className="text-left pl-8">
              <div className="inline-block group">
                <div className="p-6 rounded-xl border-2 border-border bg-card hover:border-accent transition-all duration-300 shadow-lg hover:shadow-accent/20">
                  {/* Image */}
                  <div className="mb-4 rounded-lg overflow-hidden p-4 aspect-video relative h-40">
                    <Image
                      src={item.image}
                      alt={item.institution}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-accent text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{item.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>

                  {/* Institution */}
                  <p className="text-accent font-medium mb-3">
                    {item.institution}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        </div>
        
        {/* Centered Icon - positioned after grid to overlay it */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-16 h-16 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-lg shadow-accent/50 backdrop-blur-sm ring-4 ring-background">
            <item.icon className="w-8 h-8 text-accent animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
