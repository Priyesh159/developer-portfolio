'use client';

import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, secure payments, and admin dashboard. Built with modern technologies for optimal performance and user experience.",
      longDescription: "This comprehensive e-commerce platform handles everything from product catalog management to order processing. Features include user authentication, shopping cart functionality, payment integration with Stripe, inventory tracking, and a powerful admin dashboard for managing products, orders, and analytics.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS", "Prisma"],
      category: "fullstack",
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://ecommerce-demo.yourdomain.com",
      challenges: [
        "Implementing real-time inventory updates across multiple user sessions",
        "Designing a scalable database schema for products with variants",
        "Integrating secure payment processing with multiple payment methods"
      ],
      features: [
        "Real-time inventory management",
        "Secure payment processing",
        "Admin dashboard with analytics",
        "Responsive design",
        "SEO optimization"
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features. Designed for modern teams and agile workflows.",
      longDescription: "This task management application enables teams to organize, track, and collaborate on projects efficiently. Built with React and Firebase, it features real-time synchronization, customizable workflows, time tracking, and comprehensive reporting tools.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Firebase", "Material-UI", "Node.js", "Express", "WebSocket"],
      category: "frontend",
      github: "https://github.com/yourusername/task-manager",
      demo: "https://taskmanager-demo.yourdomain.com",
      challenges: [
        "Implementing real-time collaboration without conflicts",
        "Designing an intuitive drag-and-drop interface",
        "Optimizing performance with large datasets"
      ],
      features: [
        "Drag-and-drop task management",
        "Real-time collaboration",
        "Time tracking",
        "Custom workflows",
        "Progress analytics"
      ]
    },
    {
      id: 3,
      title: "Weather Analytics API",
      description: "A RESTful API service that aggregates weather data from multiple sources, provides forecasting capabilities, and offers detailed analytics for weather patterns and trends.",
      longDescription: "This robust API service processes weather data from various sources, applies machine learning algorithms for predictions, and provides comprehensive analytics. Built with Python and FastAPI, it handles high traffic with efficient caching and rate limiting.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "AWS"],
      category: "backend",
      github: "https://github.com/yourusername/weather-api",
      demo: "https://weather-api-docs.yourdomain.com",
      challenges: [
        "Aggregating data from multiple weather service APIs",
        "Implementing efficient caching strategies for high-volume requests",
        "Designing ML models for accurate weather prediction"
      ],
      features: [
        "Multi-source data aggregation",
        "ML-powered forecasting",
        "Comprehensive API documentation",
        "Rate limiting and caching",
        "Scalable architecture"
      ]
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "A comprehensive analytics dashboard for social media managers to track performance across multiple platforms with automated reporting and insights generation.",
      longDescription: "This dashboard aggregates social media metrics from various platforms, providing unified analytics and insights. Features include automated report generation, sentiment analysis, and performance tracking with customizable dashboards and scheduling tools.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Express", "Chart.js"],
      category: "fullstack",
      github: "https://github.com/yourusername/social-dashboard",
      demo: "https://social-dashboard-demo.yourdomain.com",
      challenges: [
        "Integrating multiple social media APIs with different rate limits",
        "Creating responsive data visualizations",
        "Implementing automated sentiment analysis"
      ],
      features: [
        "Multi-platform integration",
        "Automated reporting",
        "Sentiment analysis",
        "Custom dashboards",
        "Performance tracking"
      ]
    },
    {
      id: 5,
      title: "Mobile Fitness Tracker",
      description: "A React Native mobile application for fitness tracking with workout plans, progress monitoring, and social features to connect with fitness communities.",
      longDescription: "This comprehensive fitness application helps users track workouts, monitor progress, and stay motivated through social features. Built with React Native and Firebase, it includes workout planning, nutrition tracking, and integration with popular fitness devices.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Firebase", "Redux", "Expo", "Node.js"],
      category: "mobile",
      github: "https://github.com/yourusername/fitness-tracker",
      demo: "https://fitness-app-demo.yourdomain.com",
      challenges: [
        "Ensuring cross-platform compatibility",
        "Integrating with various fitness device APIs",
        "Designing an intuitive mobile UX"
      ],
      features: [
        "Workout planning and tracking",
        "Progress analytics",
        "Social features",
        "Device integration",
        "Nutrition tracking"
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'mobile', name: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise across different technologies and domains
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{project.title.charAt(0)}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 space-x-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                    {categories.find(cat => cat.id === project.category)?.name}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {selectedProject.longDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Challenges & Solutions</h4>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="text-orange-500 mr-2 mt-1">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}