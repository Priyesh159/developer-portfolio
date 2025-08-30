import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Work Together</h3>
                <p className="text-xl text-foreground/80 mb-8">Ready to bring your ideas to life?</p>
                <button
                    className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl mb-12">
                    Start a Conversation
                </button>
                <div className="bg-background p-8 rounded-lg border border-foreground/10 mb-8">
                    <h4 className="text-xl font-semibold mb-6">Contact Form</h4>
                    <form className="space-y-4">
                        <input type="text" placeholder="Name"
                               className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent"/>
                        <input type="email" placeholder="Email"
                               className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent"/>
                        <input type="text" placeholder="Subject"
                               className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent"/>
                        <textarea rows={4} placeholder="Message"
                                  className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent resize-none"></textarea>
                        <button type="submit"
                                className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Send
                            Message
                        </button>
                    </form>
                </div>
                <div className="flex justify-center space-x-8 text-sm">
                    <a href="mailto:hello@developer.com"
                       className="flex items-center space-x-2 hover:text-blue-600 transition-colors transform hover:-translate-y-1">
                        <span>📧</span>
                        <span>hello@developer.com</span>
                    </a>
                    <a href="https://www.linkedin.com/in/dev" target="_blank" rel="noopener noreferrer"
                       className="flex items-center space-x-2 hover:text-blue-600 transition-colors transform hover:-translate-y-1">
                        <span>💼</span>
                        <span>linkedin.com/in/dev</span>
                    </a>
                    <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer"
                       className="flex items-center space-x-2 hover:text-blue-600 transition-colors transform hover:-translate-y-1">
                        <span>🐙</span>
                        <span>github.com/your-username</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
