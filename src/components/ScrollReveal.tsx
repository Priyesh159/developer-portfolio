'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export default function ScrollReveal({ 
  children, 
  className = '', 
  direction = 'up', 
  delay = 0 
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0 translate-y-8';
    
    switch (direction) {
      case 'up':
        return 'opacity-100 translate-y-0';
      case 'down':
        return 'opacity-100 translate-y-0';
      case 'left':
        return 'opacity-100 translate-x-0';
      case 'right':
        return 'opacity-100 translate-x-0';
      default:
        return 'opacity-100 translate-y-0';
    }
  };

  const getInitialClass = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-8';
      case 'down':
        return '-translate-y-8';
      case 'left':
        return 'translate-x-8';
      case 'right':
        return '-translate-x-8';
      default:
        return 'translate-y-8';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? getAnimationClass() : `opacity-0 ${getInitialClass()}`
      } ${className}`}
    >
      {children}
    </div>
  );
}