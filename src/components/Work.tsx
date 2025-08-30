import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Work() {
    return (
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
                            demoUrl: 'https://example.com/ecommerce',
                            codeUrl: 'https://github.com/your-username/ecommerce-app'
                        },
                        {
                            title: 'Portfolio Website',
                            description: 'Next.js • Tailwind',
                            emoji: '💻',
                            demoUrl: 'https://example.com/portfolio',
                            codeUrl: 'https://github.com/your-username/portfolio'
                        },
                        {
                            title: 'Weather Dashboard',
                            description: 'Vue • API',
                            emoji: '🌐',
                            demoUrl: 'https://example.com/weather',
                            codeUrl: 'https://github.com/your-username/weather-dashboard'
                        },
                    ].map((project) => (
                        <div key={project.title}
                             className="bg-foreground/5 rounded-lg p-6 hover:bg-foreground/10 transition-all transform hover:-translate-y-2 hover:shadow-xl">
                            <div className="bg-background rounded-lg p-8 mb-4 text-center">
                                <div className="text-4xl mb-2">{project.emoji}</div>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                            <p className="text-foreground/70 mb-4">{project.description}</p>
                            <div className="flex space-x-4">
                                <a href={project.demoUrl}
                                   className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">Live
                                    Demo</a>
                                <a href={project.codeUrl}
                                   className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors">Code</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <button
                        className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
}
