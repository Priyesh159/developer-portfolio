'use client';

import { useState, useEffect } from 'react';
import TypewriterText from '../components/TypewriterText';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md z-50 border-b border-foreground/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">Portfolio</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-foreground/70 transition-colors relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
                </a>
                <a href="#about" className="hover:text-foreground/70 transition-colors relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
                </a>
                <a href="#work" className="hover:text-foreground/70 transition-colors relative group">
                  Work
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
                </a>
                <a href="#contact" className="hover:text-foreground/70 transition-colors relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-foreground/10 transition-all transform hover:scale-105"
                aria-label="Toggle theme"
              >
                <div className="w-5 h-5 transition-transform duration-300" style={{ transform: darkMode ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  {darkMode ? '☀️' : '🌙'}
                </div>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-foreground/10"
              >
                ☰
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-foreground/10">
                <a href="#home" className="block px-3 py-2 hover:bg-foreground/10 rounded">Home</a>
                <a href="#about" className="block px-3 py-2 hover:bg-foreground/10 rounded">About</a>
                <a href="#work" className="block px-3 py-2 hover:bg-foreground/10 rounded">Work</a>
                <a href="#contact" className="block px-3 py-2 hover:bg-foreground/10 rounded">Contact</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
                <TypewriterText text="Hi, I'm Your Name 📍" speed={80} className="text-blue-600" />
              </h2>
              <div className="animate-slide-up" style={{ animationDelay: '2s', animationFillMode: 'both' }}>
                <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 font-medium">
                  Full-Stack Developer & Problem Solver
                </p>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '2.5s', animationFillMode: 'both' }}>
                <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto">
                  I craft digital experiences that matter
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#work"
                className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 animate-pulse"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex justify-center space-x-8 mt-12">
              {[
                { name: 'JS', emoji: '⚡' },
                { name: 'React', emoji: '⚛️' },
                { name: 'Node', emoji: '🟢' },
                { name: 'CSS', emoji: '🎨' }
              ].map((tech, index) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center space-y-2 p-4 bg-foreground/5 rounded-lg hover:bg-foreground/10 transition-all transform hover:scale-105"
                  style={{
                    animation: `float 3s ease-in-out infinite ${index * 0.5}s`
                  }}
                >
                  <div className="text-2xl">{tech.emoji}</div>
                  <div className="text-sm font-medium">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center lg:text-left">
              <div className="w-64 h-64 mx-auto lg:mx-0 bg-foreground/10 rounded-2xl flex items-center justify-center text-6xl hover:scale-105 transition-transform">
                📸
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold">About Me</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Brief personal story and what drives me as a developer. I&apos;m passionate about creating 
                meaningful digital experiences that solve real-world problems and make a positive impact.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Key principles and approach: clean code, user-centered design, continuous learning, 
                and collaborative problem-solving.
              </p>
            </div>
          </div>

          <ScrollReveal className="space-y-8">
            <h4 className="text-2xl sm:text-3xl font-bold text-center">Skills & Expertise</h4>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { category: 'Frontend', skills: ['React', 'TypeScript', 'Next.js'] },
                { category: 'Backend', skills: ['Node.js', 'Python', 'Express'] },
                { category: 'Database', skills: ['PostgreSQL', 'MongoDB', 'Redis'] },
                { category: 'DevOps', skills: ['Docker', 'AWS', 'CI/CD'] },
                { category: 'Design', skills: ['Figma', 'UI/UX', 'Responsive'] }
              ].map((skillGroup) => (
                <div key={skillGroup.category} className="bg-background p-6 rounded-lg border border-foreground/10 hover:border-foreground/20 transition-all">
                  <h5 className="font-semibold mb-4 text-center">{skillGroup.category}</h5>
                  <ul className="space-y-2">
                    {skillGroup.skills.map((skill) => (
                      <li key={skill} className="text-sm text-foreground/70 text-center">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'E-Commerce App',
                description: 'React • Node • DB',
                emoji: '📱',
                demoUrl: '#',
                codeUrl: '#'
              },
              {
                title: 'Portfolio Website',
                description: 'Next.js • Tailwind',
                emoji: '💻',
                demoUrl: '#',
                codeUrl: '#'
              },
              {
                title: 'Weather Dashboard',
                description: 'Vue • API',
                emoji: '🌐',
                demoUrl: '#',
                codeUrl: '#'
              }
            ].map((project) => (
              <div
                key={project.title}
                className="bg-foreground/5 rounded-lg p-6 hover:bg-foreground/10 transition-all transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="bg-background rounded-lg p-8 mb-4 text-center">
                  <div className="text-4xl mb-2">{project.emoji}</div>
                </div>
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-16">Experience Timeline</h3>
          
          <div className="space-y-8">
            {[
              {
                year: '2024',
                title: 'Senior Full-Stack Developer @ TechCorp',
                description: 'Leading development of customer-facing applications'
              },
              {
                year: '2022',
                title: 'Frontend Developer @ StartupXYZ',
                description: 'Built responsive web apps with React ecosystem'
              },
              {
                year: '2020',
                title: 'Junior Developer @ CodeAgency',
                description: 'Learned modern web development practices'
              }
            ].map((experience) => (
              <div key={experience.year} className="flex items-start space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="w-0.5 h-16 bg-blue-600/30 mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="text-sm text-blue-600 font-semibold mb-1">{experience.year}</div>
                  <h4 className="text-lg font-semibold mb-2">{experience.title}</h4>
                  <p className="text-foreground/70">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-16">Testimonials</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Outstanding work on our mobile application.",
                author: "Sarah Chen",
                title: "Product Lead",
                direction: 'left'
              },
              {
                quote: "Delivered beyond expectations and ahead of schedule",
                author: "Mike Rodriguez",
                title: "CTO",
                direction: 'up'
              },
              {
                quote: "Great team player with solid skills",
                author: "Alex Kim",
                title: "Dev Manager",
                direction: 'right'
              }
            ].map((testimonial, index) => (
              <ScrollReveal key={testimonial.author} direction={testimonial.direction as 'up' | 'down' | 'left' | 'right'} delay={index * 200}>
                <div className="bg-foreground/5 p-6 rounded-lg hover:bg-foreground/10 transition-all">
                  <p className="text-foreground/80 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="border-t border-foreground/10 pt-4">
                    <p className="font-semibold">- {testimonial.author}</p>
                    <p className="text-sm text-foreground/60">{testimonial.title}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Work Together</h3>
          <p className="text-xl text-foreground/80 mb-8">Ready to bring your ideas to life?</p>
          
          <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl mb-12">
            Start a Conversation
          </button>

          <div className="bg-background p-8 rounded-lg border border-foreground/10 mb-8">
            <h4 className="text-xl font-semibold mb-6">Contact Form</h4>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex justify-center space-x-8 text-sm">
            <a href="mailto:hello@developer.com" className="flex items-center space-x-2 hover:text-blue-600 transition-colors transform hover:-translate-y-1">
              <span>📧</span>
              <span>hello@developer.com</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-blue-600 transition-colors transform hover:-translate-y-1">
              <span>💼</span>
              <span>linkedin.com/in/dev</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-blue-600 transition-colors transform hover:-translate-y-1">
              <span>🐙</span>
              <span>github.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-foreground/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-foreground/60 mb-4">
            © 2025 Your Name. Crafted with ❤️ and ☕
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <span className="text-foreground/40">|</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
