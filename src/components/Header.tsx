import React from 'react';

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

export default function Header({ darkMode, onToggleDarkMode, mobileMenuOpen, onToggleMobileMenu }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md z-50 border-b border-foreground/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Portfolio</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#work', label: 'Work' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <a key={item.href} href={item.href} className="hover:text-foreground/70 transition-colors relative group">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={onToggleDarkMode} className="p-2 rounded-lg hover:bg-foreground/10 transition-all transform hover:scale-105" aria-label="Toggle theme">
              <div className="w-5 h-5 transition-transform duration-300" style={{ transform: darkMode ? 'rotate(180deg)' as const : 'rotate(0deg)' }}>
                {darkMode ? '☀️' : '🌙'}
              </div>
            </button>
            <button onClick={onToggleMobileMenu} className="md:hidden p-2 rounded-lg hover:bg-foreground/10" aria-expanded={mobileMenuOpen} aria-controls="mobile-menu">
              ☰
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-foreground/10">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#work', label: 'Work' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <a key={item.href} href={item.href} className="block px-3 py-2 hover:bg-foreground/10 rounded">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
