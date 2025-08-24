export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Senior Full-Stack Developer",
      duration: "2022 - Present",
      type: "Full-time",
      location: "San Francisco, CA (Remote)",
      description: "Lead development of scalable web applications serving 100K+ users. Architect and implement microservices using Node.js and React, resulting in 40% performance improvement.",
      achievements: [
        "Led a team of 5 developers in migrating legacy monolith to microservices architecture",
        "Reduced application load time by 40% through code optimization and caching strategies",
        "Implemented CI/CD pipeline that decreased deployment time from 2 hours to 15 minutes",
        "Mentored junior developers and conducted code reviews, improving team code quality by 30%"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes", "TypeScript"],
      logo: "🚀"
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Full-Stack Developer",
      duration: "2020 - 2022",
      type: "Full-time",
      location: "New York, NY",
      description: "Developed and maintained multiple client-facing applications using React and Django. Collaborated with product and design teams to deliver user-centric solutions.",
      achievements: [
        "Built 3 customer-facing applications from scratch, serving 50K+ daily active users",
        "Integrated 15+ third-party APIs including payment gateways and social media platforms",
        "Implemented real-time features using WebSocket, increasing user engagement by 25%",
        "Collaborated with UX/UI team to improve user satisfaction scores from 3.2 to 4.6/5"
      ],
      technologies: ["React", "Django", "Python", "PostgreSQL", "Redis", "Heroku", "JavaScript"],
      logo: "💡"
    },
    {
      id: 3,
      company: "Digital Agency Pro",
      position: "Frontend Developer",
      duration: "2019 - 2020",
      type: "Full-time",
      location: "Austin, TX",
      description: "Specialized in creating responsive, high-performance websites and web applications for various clients across different industries.",
      achievements: [
        "Delivered 20+ responsive websites with 98%+ lighthouse performance scores",
        "Reduced client website bounce rates by average of 35% through UX improvements",
        "Established frontend development best practices and component library for the team",
        "Worked directly with clients to gather requirements and provide technical consulting"
      ],
      technologies: ["React", "Vue.js", "Sass", "WordPress", "PHP", "MySQL", "JavaScript"],
      logo: "🎨"
    },
    {
      id: 4,
      company: "FreelanceHub",
      position: "Freelance Web Developer",
      duration: "2018 - 2019",
      type: "Freelance",
      location: "Remote",
      description: "Provided custom web development services to small businesses and startups, focusing on modern, mobile-first solutions.",
      achievements: [
        "Completed 15+ client projects with 100% satisfaction rate",
        "Developed e-commerce solutions that increased client sales by average of 60%",
        "Created custom CMS solutions tailored to specific business needs",
        "Built long-term relationships with clients, resulting in 80% repeat business rate"
      ],
      technologies: ["JavaScript", "PHP", "MySQL", "WordPress", "Bootstrap", "jQuery"],
      logo: "💼"
    }
  ];

  const education = [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      duration: "2014 - 2018",
      gpa: "3.8/4.0",
      achievements: [
        "Graduated Magna Cum Laude",
        "President of Computer Science Student Association",
        "Winner of Annual Programming Competition (2017, 2018)",
        "Teaching Assistant for Data Structures and Algorithms"
      ]
    },
    {
      institution: "Tech Bootcamp Intensive",
      degree: "Full-Stack Web Development Certificate",
      duration: "2018",
      achievements: [
        "Top 5% of cohort (500+ students)",
        "Built 10+ full-stack applications during the program",
        "Collaborated on team projects using Agile methodology"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-ASA-123456"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PD-789012"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-345678"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and continuous learning path in software development
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Work Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800 last:border-l-0 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {index + 1}
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-center mb-2 md:mb-0">
                      <span className="text-2xl mr-3">{exp.logo}</span>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {exp.position}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        {exp.duration}
                      </p>
                      <div className="flex flex-col md:items-end mt-1">
                        <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                          {exp.type}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {edu.duration}
                    </span>
                  </div>
                  
                  {edu.gpa && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      GPA: {edu.gpa}
                    </p>
                  )}

                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 text-sm mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        Credential ID: {cert.credentialId}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-xs font-medium">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Learning */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Continuous Learning
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                I believe in continuous learning and staying updated with the latest technologies. 
                Currently exploring:
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">
                  Web3 Development
                </span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded text-xs">
                  Machine Learning
                </span>
                <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-xs">
                  Rust Programming
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}