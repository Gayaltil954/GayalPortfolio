'use client'

import { HeroBackground } from '@/components/hero-background'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: index * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const progress = maxScroll <= 0 ? 0 : window.scrollY / maxScroll
      setScrollProgress(Number(progress.toFixed(4)))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0">
        <HeroBackground scrollProgress={scrollProgress} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(236,72,153,0.25),_transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          className="text-sm uppercase tracking-[0.4em] text-cyan-300/80"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Creative Developer
        </motion.p>

        <motion.h1
          className="mt-6 text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <span className="text-white/80">Gayal Thilakarathna</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-500 bg-clip-text text-transparent">
            I'm a MERN stack developer.
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-3xl text-lg text-white/70 sm:text-xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
         Passionate about building scalable, maintainable web applications with clean code and modern development practices.
        </motion.p>

        <motion.div
          className="mt-10 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-base btn-primary w-full sm:w-auto"
          >
            Explore Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-base btn-secondary w-full sm:w-auto"
          >
            Collaborate With Me
          </button>
          <a
            href="/images/Gayal Thilakarathna SE Resume.pdf"
            download="Gayal_Thilakarathna_SE_Resume.pdf"
            className="btn-base btn-secondary w-full sm:w-auto"
          >
            Download CV
          </a>
        </motion.div>

        <motion.div
          className="mt-14 grid w-full gap-6 rounded-2xl border border-white/5 bg-white/5 px-6 py-4 backdrop-blur"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/50">
            Currently seeking an internship opportunity in software engineering and web development.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
