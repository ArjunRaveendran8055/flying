'use client';

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      gsap.to('.loader-container', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          const loader = document.querySelector('.loader-container') as HTMLElement | null;
          if (loader) {
            loader.style.display = 'none';
          }
          // Dispatch custom event when loader is completely done
          window.dispatchEvent(new CustomEvent('loaderComplete'));
        },
      });
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="loader-container fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <div className="relative w-24 h-24">
          <img
            src="/images/logos/flyIcon.webp"
            alt="Flywings International"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
        
        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary-600 mb-2">
            Flywings International
          </h2>
          <p className="text-gray-600">Here Dreams Take Wings</p>
        </div>

        {/* Loading Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-primary-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
      </div>
    </div>
  );
}

