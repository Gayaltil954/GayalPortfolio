'use client'

import React from "react"
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Linkedin, Github, Send, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
      console.log('EmailJS initialized')
    } else {
      console.warn('EmailJS public key not found in environment variables')
    }
  }, [])

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      console.log('Attempting to send email with:', {
        serviceId: SERVICE_ID,
        templateId: TEMPLATE_ID,
        hasPublicKey: !!PUBLIC_KEY,
        hasFormRef: !!formRef.current
      })

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error('EmailJS credentials are missing. Check .env.local file and restart the dev server.')
      }

      if (!formRef.current) {
        throw new Error('Form reference is null')
      }

      // Send email using EmailJS (already initialized with public key)
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current
      )
      
      console.log('✅ Email sent successfully:', result)

      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error: any) {
      console.error('❌ Email send error:', error)
      console.error('Error details:', {
        message: error?.message,
        text: error?.text,
        status: error?.status,
        name: error?.name
      })
      
      const errorMessage = error?.text || error?.message || 'Unknown error occurred'
      alert(`Failed to send message: ${errorMessage}\n\nPlease try again or contact directly at thilakarathnagayal@gmail.com`)
    } finally {
      setIsLoading(false)
    }
  }

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:thilakarathnagayal@gmail.com',
      color: 'text-accent',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/gayaltil954',
      color: 'text-foreground',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gayaltil55/',
      color: 'text-foreground',
    },
    {
      icon: Phone,
      label: 'Call',
      href: 'tel:+94741542747',
      color: 'text-foreground',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/94741542747',
      color: 'text-green-400',
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="about-starfield" aria-hidden="true" />
      <div className="about-starfield-overlay" aria-hidden="true" />
      <div className="contact-constellation" aria-hidden="true" />
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 -z-10" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-l from-purple-500/15 to-pink-500/15 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 animate-slide-up">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Have a project in mind? I'd love to hear about it. Get in touch and let's create
            something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 lg:col-span-1 transform ${
              isVisible ? 'opacity-100 translate-x-0 animate-slide-in-left' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="space-y-8">
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-bold text-foreground mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out via email or connect with me on social media. I typically
                  respond within 24 hours.
                </p>
              </div>

              {/* Social Links */}
              <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                  Follow Me
                </h4>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        className="flex items-center gap-3 text-muted-foreground hover:text-accent hover:translate-x-2 transition-all duration-200 group"
                        style={{
                          animation: isVisible ? `slide-in-left 0.5s ease-out ${0.35 + index * 0.1}s forwards` : 'none',
                        }}
                      >
                        <Icon className={`w-5 h-5 ${link.color} group-hover:scale-125 transition-transform duration-300 group-hover:animate-rotate-in`} />
                        <span>{link.label}</span>
                      </a>
                    )
                  })}
                </div>
              </div>

              

              {/* Quick Info */}
              <div className="p-4 glass-card rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.5s' }}>
                <p className="text-sm text-muted-foreground">
                  <strong>Response Time:</strong> 24 hours
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Availability:</strong> Open for freelance & full-time
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-200 lg:col-span-2 transform ${
              isVisible ? 'opacity-100 translate-x-0 animate-slide-in-right' : 'opacity-0 translate-x-10'
            }`}
          >
            {isSubmitted ? (
              <div className="p-8 bg-accent/10 border border-accent rounded-xl text-center animate-slide-up">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-200 hover:border-accent/50"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-200 hover:border-accent/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject Field */}
                <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-200 hover:border-accent/50"
                    placeholder="Project inquiry"
                  />
                </div>

                {/* Message Field */}
                <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 glass-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-200 hover:border-accent/50 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-base btn-primary w-full gap-2 justify-center animate-scale-in"
                  style={{ animationDelay: '0.6s' }}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
