import React from 'react';

export default function Experience() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl sm:text-4xl font-bold text-center mb-16">Experience Timeline</h3>
                <div className="space-y-8">
                    {[
                        {
                            year: '2022',
                            title: 'Intermediate Developer @ Discovery',
                            description: 'Built responsive web apps with React ecosystem'
                        },
                        {
                            year: '2020',
                            title: 'Junior Developer @ Discovery',
                            description: 'Learned modern web development practices'
                        },
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
    );
}
