"use client";
import React, {useRef} from 'react';
import {useTheme} from '@/context/ThemeContext';

interface HeaderProps {
    mobileMenuOpen: boolean;
    onToggleMobileMenu: () => void;
}

function ThemeDropdown() {
    const {theme, setTheme, themes, menuOpen, setMenuOpen} = useTheme();
    const btnRef = useRef<HTMLButtonElement | null>(null);

    return (
        <div className="relative">
            <button
                ref={btnRef}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-haspopup="listbox"
                aria-expanded={menuOpen}
                className="p-2 rounded-lg hover:bg-foreground/10 transition-all flex items-center gap-2"
            >
                <span className="text-lg" aria-hidden>🎨</span>
                <span className="hidden sm:inline">Theme</span>
            </button>
            {menuOpen && (
                <div role="listbox" aria-label="Select theme"
                     className="absolute right-0 mt-2 w-56 rounded-lg border border-foreground/10 bg-background shadow-lg z-50">
                    <ul className="py-1 max-h-80 overflow-auto">
                        {themes.map((t) => (
                            <li key={t.key}>
                                <button
                                    role="option"
                                    aria-selected={theme === t.key}
                                    onClick={() => {
                                        setTheme(t.key);
                                        setMenuOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-foreground/10 ${theme === t.key ? 'bg-foreground/10' : ''}`}
                                >
                  <span className="flex -space-x-1">
                    <span className="inline-block w-3 h-3 rounded-full border" style={{background: t.preview.bg}}/>
                    <span className="inline-block w-3 h-3 rounded-full border" style={{background: t.preview.primary}}/>
                    <span className="inline-block w-3 h-3 rounded-full border" style={{background: t.preview.text}}/>
                  </span>
                                    <span className="flex-1">{t.name}</span>
                                    {theme === t.key && <span aria-hidden>✓</span>}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default function Header({mobileMenuOpen, onToggleMobileMenu}: HeaderProps) {
    return (
        <header
            className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md z-50 border-b border-foreground/10">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold">Portfolio</h1>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {[
                                {href: '#home', label: 'Home'},
                                {href: '#about', label: 'About'},
                                {href: '#work', label: 'Work'},
                                {href: '#contact', label: 'Contact'},
                            ].map((item) => (
                                <a key={item.href} href={item.href}
                                   className="hover:text-foreground/70 transition-colors relative group">
                                    {item.label}
                                    <span
                                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <ThemeDropdown/>
                        <button onClick={onToggleMobileMenu} className="md:hidden p-2 rounded-lg hover:bg-foreground/10"
                                aria-expanded={mobileMenuOpen} aria-controls="mobile-menu">
                            ☰
                        </button>
                    </div>
                </div>
                {mobileMenuOpen && (
                    <div id="mobile-menu" className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-foreground/10">
                            {[
                                {href: '#home', label: 'Home'},
                                {href: '#about', label: 'About'},
                                {href: '#work', label: 'Work'},
                                {href: '#contact', label: 'Contact'},
                            ].map((item) => (
                                <a key={item.href} href={item.href}
                                   className="block px-3 py-2 hover:bg-foreground/10 rounded">
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
