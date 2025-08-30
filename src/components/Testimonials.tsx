import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Testimonials() {
    const data = [
        {
            quote: 'Outstanding work on our mobile application.',
            author: 'Sarah Chen',
            title: 'Product Lead',
            direction: 'left' as const
        },
        {
            quote: 'Delivered beyond expectations and ahead of schedule',
            author: 'Mike Rodriguez',
            title: 'CTO',
            direction: 'up' as const
        },
        {
            quote: 'Great team player with solid skills',
            author: 'Alex Kim',
            title: 'Dev Manager',
            direction: 'right' as const
        },
    ];
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-3xl sm:text-4xl font-bold text-center mb-16">Testimonials</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.map((testimonial, index) => (
                        <ScrollReveal key={testimonial.author} direction={testimonial.direction} delay={index * 200}>
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
    );
}
