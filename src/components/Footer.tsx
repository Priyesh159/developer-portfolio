import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-foreground/60 mb-4">© 2025 Your Name. Crafted with ❤️ and ☕</p>
        <div className="flex justify-center space-x-6 text-sm">
          <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
          <span className="text-foreground/40">|</span>
          <a href="#" className="hover:text-blue-600 transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
