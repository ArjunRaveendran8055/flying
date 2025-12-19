'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { courses } from '../../lib/constants';
import Link from 'next/link';
import { ArrowRight, Clock, Users } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Courses() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const onCampusCourses = courses.filter((c) => c.type === 'on-campus').slice(0, 6);
  const onlineCourses = courses.filter((c) => c.type === 'online').slice(0, 4);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('.course-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
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
    <section ref={sectionRef} className="py-20 bg-white w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our wide range of on-campus and online programs designed to launch your
            career in aviation, logistics, and hospitality.
          </p>
        </AnimatedSection>

        {/* On Campus Courses */}
        <div className="mb-16">
          <AnimatedSection direction="left" className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">On Campus Courses</h3>
            <p className="text-gray-600">Study at our state-of-the-art campuses in Kochi and Oddanchatram</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onCampusCourses.map((course) => (
              <Card
                key={course.id}
                className="course-card group cursor-pointer overflow-hidden"
              >
                <div className="relative h-48 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                  <img
                    src={course.image || 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900">
                      {course.category}
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {course.title}
                </h4>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {course.eligibility}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                <Link href={`/courses/${course.id}`}>
                  <Button variant="ghost" className="w-full group-hover:bg-primary-50">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Online Courses */}
        <div>
          <AnimatedSection direction="right" className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Online Courses</h3>
            <p className="text-gray-600">Study from anywhere with our flexible online programs</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onlineCourses.map((course) => (
              <Card
                key={course.id}
                className="course-card group cursor-pointer overflow-hidden"
              >
                <div className="relative h-32 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                  <img
                    src={course.image || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute top-2 right-2">
                    <span className="inline-block px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
                      Online
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {course.title}
                </h4>
                <div className="flex items-center text-xs text-gray-600 mb-3">
                  <Clock className="w-3 h-3 mr-1" />
                  {course.duration}
                </div>
                <Link href={`/courses/${course.id}`}>
                  <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary-50">
                    Learn More
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link href="/courses">
            <Button size="lg">
              View All Courses
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

