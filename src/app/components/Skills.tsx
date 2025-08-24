export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "▲" },
        { name: "TypeScript", level: 88, icon: "🔷" },
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 90, icon: "🎨" },
        { name: "Tailwind CSS", level: 85, icon: "💨" },
        { name: "Sass/SCSS", level: 80, icon: "💄" }
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", level: 88, icon: "🟢" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "Express.js", level: 85, icon: "🚂" },
        { name: "FastAPI", level: 80, icon: "⚡" },
        { name: "GraphQL", level: 75, icon: "📊" },
        { name: "REST APIs", level: 90, icon: "🔗" },
        { name: "Microservices", level: 75, icon: "🔧" },
        { name: "Serverless", level: 70, icon: "☁️" }
      ]
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "Redis", level: 75, icon: "🔴" },
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "Kubernetes", level: 70, icon: "⚓" },
        { name: "Firebase", level: 75, icon: "🔥" },
        { name: "Vercel", level: 90, icon: "△" }
      ]
    },
    {
      title: "Tools & Methodologies",
      skills: [
        { name: "Git", level: 95, icon: "📝" },
        { name: "GitHub Actions", level: 80, icon: "⚙️" },
        { name: "Jest", level: 85, icon: "🃏" },
        { name: "Cypress", level: 75, icon: "🌲" },
        { name: "Agile/Scrum", level: 85, icon: "🔄" },
        { name: "CI/CD", level: 80, icon: "🚀" },
        { name: "Linux", level: 80, icon: "🐧" },
        { name: "VS Code", level: 95, icon: "💻" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies, frameworks, and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-lg mr-2">{skill.icon}</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. I&apos;m constantly exploring new frameworks, 
              attending conferences, contributing to open source, and building side projects to 
              stay at the forefront of web development trends and best practices.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                Web3 & Blockchain
              </span>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                Machine Learning
              </span>
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                Mobile Development
              </span>
              <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
                DevOps & Infrastructure
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}