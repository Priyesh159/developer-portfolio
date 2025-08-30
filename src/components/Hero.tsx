import React from 'react';
import TypewriterText from './TypewriterText';

export default function Hero() {
    return (
        <section id="home" className="pt-16 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
                            <TypewriterText text="Hi, I'm Priyesh" speed={80} className="text-blue-600"/>
                        </h2>
                        <div className="animate-slide-up" style={{animationDelay: '2s', animationFillMode: 'both'}}>
                            <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 font-medium">
                                Full-Stack Developer
                            </p>
                        </div>
                        {/*<div className="animate-slide-up" style={{animationDelay: '2.5s', animationFillMode: 'both'}}>*/}
                        {/*    <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto">*/}
                        {/*        I craft digital experiences that matter*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#work"
                           className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105">
                            View My Work
                        </a>
                        <a href="#contact"
                           className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105">
                            Get In Touch
                        </a>
                    </div>
                    <div className="flex justify-center space-x-8 mt-12">
                        {[
                            {name: 'JS', emoji: '⚡'},
                            {name: 'React', emoji: '⚛️'},
                            {name: 'Node', emoji: '🟢'},
                            {name: 'CSS', emoji: '🎨'},
                        ].map((tech, index) => (
                            <div
                                key={tech.name}
                                className="flex flex-col items-center space-y-2 p-4 bg-foreground/5 rounded-lg hover:bg-foreground/10 transition-all transform hover:scale-105"
                                style={{animation: `float 3s ease-in-out infinite ${index * 0.5}s`}}
                            >
                                <div className="text-2xl">{tech.emoji}</div>
                                <div className="text-sm font-medium">{tech.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
