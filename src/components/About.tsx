import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
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
              { category: 'Design', skills: ['Figma', 'UI/UX', 'Responsive'] },
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
  );
}
