'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation presets
export const fadeInUp = {
  opacity: 0,
  y: 60,
  duration: 1,
  ease: 'power3.out',
};

export const fadeIn = {
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
};

export const scaleIn = {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
};

// Custom hook for GSAP animations
export function useGSAP(callback: (ctx: gsap.Context) => void, deps: React.DependencyList = []) {
  const container = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(ctx);
    }, container);

    return () => ctx.revert();
  }, deps);

  return container;
}

// Scroll-triggered animation hook
export function useScrollAnimation(
  selector: string | React.RefObject<HTMLElement>,
  animation: gsap.TweenVars,
  options?: ScrollTrigger.Vars
) {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const element = typeof selector === 'string' 
      ? document.querySelectorAll(selector)
      : selector.current;

    if (!element) return;

    const defaultOptions: ScrollTrigger.Vars = {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...options,
    };

    const anim = gsap.to(element, {
      ...animation,
      scrollTrigger: defaultOptions,
    });

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [selector, animation, options]);
}

// Stagger animation for multiple elements
export function staggerAnimation(
  selector: string,
  animation: gsap.TweenVars,
  stagger: number = 0.2,
  scrollTrigger?: ScrollTrigger.Vars
) {
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return;

  const tl = gsap.timeline({
    scrollTrigger: scrollTrigger
      ? {
          trigger: elements[0],
          start: 'top 80%',
          ...scrollTrigger,
        }
      : undefined,
  });

  tl.to(elements, {
    ...animation,
    stagger,
  });

  return tl;
}

// Parallax effect
export function useParallax(element: React.RefObject<HTMLElement>, speed: number = 0.5) {
  useEffect(() => {
    if (!element.current) return;

    const handleScroll = () => {
      if (!element.current) return;
      const yPos = window.scrollY * speed;
      gsap.set(element.current, { y: yPos });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [element, speed]);
}

// Text reveal animation
export function animateTextReveal(element: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!element.current) return;

    const text = element.current.textContent || '';
    element.current.innerHTML = '';

    const words = text.split(' ');
    words.forEach((word, i) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      element.current?.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: i * 0.1,
        ease: 'power2.out',
      });
    });
  }, [element]);
}

// Counter animation
export function animateCounter(
  element: React.RefObject<HTMLElement>,
  targetValue: number,
  duration: number = 2
) {
  useEffect(() => {
    if (!element.current) return;

    const obj = { value: 0 };
    gsap.to(obj, {
      value: targetValue,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element.current,
        start: 'top 80%',
      },
      onUpdate: () => {
        if (element.current) {
          element.current.textContent = Math.round(obj.value).toString();
        }
      },
    });
  }, [element, targetValue, duration]);
}

