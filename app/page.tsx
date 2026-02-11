import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Timeline } from '@/components/timeline'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}
