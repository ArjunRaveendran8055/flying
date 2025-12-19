'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../../lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const directions = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
  fade: { y: 0, x: 0 },
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  direction = 'up',
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      ref.current.style.opacity = '1';
      ref.current.style.transform = 'translate(0, 0)';
      return;
    }

    const from = directions[direction];
    
    // Set initial state immediately to prevent flickering
    gsap.set(ref.current, {
      opacity: 0,
      ...from,
    });

    const to = { opacity: 1, x: 0, y: 0 };

    let scrollTrigger: gsap.core.Tween | null = null;

    // Use requestAnimationFrame to ensure DOM is ready and ScrollTrigger can calculate positions
    const rafId = requestAnimationFrame(() => {
      if (!ref.current) return;

      scrollTrigger = gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          ...from,
        },
        {
          ...to,
          duration: 0.6,
          delay,
          ease: 'power2.out',
          force3D: true,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            once: true,
            markers: false,
          },
        }
      );

      // Refresh ScrollTrigger after animation is set up to ensure proper calculations
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === ref.current) {
          trigger.kill();
        }
      });
    };
  }, [direction, delay]);

  const initialTransform = directions[direction];
  const transformValue = `translate(${initialTransform.x}px, ${initialTransform.y}px)`;

  return (
    <div 
      ref={ref} 
      className={cn('will-change-transform', className)}
      style={{ 
        opacity: 0,
        transform: transformValue,
      }}
    >
      {children}
    </div>
  );
}

