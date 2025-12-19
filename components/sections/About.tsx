'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedSection } from '../ui/AnimatedSection';
import { GraduationCap, Users, Award, Target } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    icon: GraduationCap,
    title: 'Highly Qualified Faculties',
    description:
      'Team of highly efficient, qualified, competent and committed lecturers in all subjects.',
  },
  {
    icon: Users,
    title: '22+ Years of Excellence',
    description:
      'Since 2003, we have been training and providing competent candidates for global industries.',
  },
  {
    icon: Award,
    title: 'World Class Affiliation',
    description:
      'Approved collaborative institution of Government University with recognized programs.',
  },
  {
    icon: Target,
    title: 'Placement Support',
    description:
      'Dedicated placement assistance to help students achieve their career goals.',
  },
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('.feature-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        force3D: true,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
          once: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flywings International College of Management Studies is a quintessential educational
            institution situated at the heart of Cochin – the queen of the Arabian Sea.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="feature-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <AnimatedSection direction="up" className="mt-16">
          <div className="bg-primary-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              Our mission is to train and provide competent candidates for placement in global
              aviation, hospitality, logistics and shipping industries and ports.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

