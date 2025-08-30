'use client';

import {useEffect, useState} from 'react';

interface TypewriterTextProps {
    text: string;
    icon?: string
    delay?: number;
    speed?: number;
    className?: string;
}

export default function TypewriterText({text, delay = 0, speed = 100, className = ''}: TypewriterTextProps) {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            let i = 0;
            const typeTimer = setInterval(() => {
                if (i < text.length) {
                    // Ensure cursor is visible while typing
                    setShowCursor(true);
                    setDisplayText(text.slice(0, i + 1));
                    i++;
                } else {
                    clearInterval(typeTimer);
                    // Hide cursor after typing is complete
                    setTimeout(() => setShowCursor(false), 1000);
                }
            }, speed);

            return () => clearInterval(typeTimer);
        }, delay);

        return () => clearTimeout(timer);
    }, [text, delay, speed]);

    useEffect(() => {
        // Cursor blinking effect while typing; stops when showCursor is set to false
        if (!showCursor) return; // stop blinking once we hide the cursor
        const cursorTimer = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => clearInterval(cursorTimer);
    }, [showCursor]);

    return (
        <span className={className}>
      {displayText}
            {showCursor && <span className="animate-pulse">|</span>}
    </span>
    );
}