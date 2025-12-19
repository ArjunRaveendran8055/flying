"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/Button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [loaderComplete, setLoaderComplete] = React.useState(false);

  useEffect(() => {
    // Check if loader is already complete (in case component mounts after loader)
    const checkLoader = () => {
      const loader = document.querySelector('.loader-container') as HTMLElement | null;
      if (!loader || loader.style.display === 'none') {
        // Small delay to ensure DOM is ready and prevent flicker
        setTimeout(() => {
          setLoaderComplete(true);
        }, 50);
      }
    };

    // Listen for loader complete event
    const handleLoaderComplete = () => {
      setLoaderComplete(true);
    };

    checkLoader();
    window.addEventListener('loaderComplete', handleLoaderComplete);

    return () => {
      window.removeEventListener('loaderComplete', handleLoaderComplete);
    };
  }, []);

  useEffect(() => {
    if (!heroRef.current || !loaderComplete) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      // Set initial states immediately to prevent flicker
      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 0 });
      }
      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { opacity: 0, y: 30 });
      }
      if (ctaRef.current) {
        gsap.set(ctaRef.current.children, { opacity: 0, y: 30 });
      }

      if (prefersReducedMotion) {
        // Simple fade-in for reduced motion
        gsap.to([titleRef.current, subtitleRef.current, ctaRef.current], {
          opacity: 1,
          duration: 0.5,
        });
        return;
      }
      // Background parallax - optimized for performance
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          y: 100,
          force3D: true,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            markers: false,
          },
        });
      }

      // Title animation
      if (titleRef.current) {
        const words = titleRef.current.textContent?.split(" ") || [];
        titleRef.current.innerHTML = "";
        words.forEach((word) => {
          const span = document.createElement("span");
          span.textContent = word + " ";
          span.style.display = "inline-block";
          span.style.opacity = "0";
          span.style.transform = "translateY(100px)";
          titleRef.current?.appendChild(span);
        });

        gsap.to(titleRef.current.children, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.3,
          onStart: () => {
            // Ensure title container is visible when animation starts
            if (titleRef.current) {
              gsap.set(titleRef.current, { opacity: 1 });
            }
          },
        });
      }

      // Subtitle animation
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.8,
            ease: "power3.out",
          }
        );
      }

      // CTA buttons animation
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            delay: 1.2,
            ease: "power3.out",
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, [loaderComplete]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full"
    >
      {/* Animated Background */}
      <div ref={bgRef} className="absolute inset-0 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          style={{ opacity: 0 }}
        >
          Here Dreams Take Wings
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
          style={{ opacity: 0 }}
        >
          Ready to fly? Join Flywings International and soar high in aviation,
          hospitality, logistics, and shipping industries.
        </p>
        <div
          ref={ctaRef}
          className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ opacity: 0 }}
        >
          <Link href="/admission">
            <Button size="lg" className="group">
              Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/prospectus">
            <Button
              variant="outline"
              size="lg"
              className="bg-white border-white text-gray-900 hover:bg-gray-100"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Prospectus
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
          {[
            { label: "Years of Excellence", value: "22+" },
            { label: "Students Helped", value: "00+" },
            { label: "Campuses", value: "2" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-200 text-xs sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
