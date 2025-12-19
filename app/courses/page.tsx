'use client';

import { useState } from 'react';
import { courses } from '../../lib/constants';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { AnimatedSection } from '../../components/ui/AnimatedSection';
import Link from 'next/link';
import { Clock, Users, ArrowRight } from 'lucide-react';

export default function CoursesPage() {
  const [filter, setFilter] = useState<'all' | 'on-campus' | 'online'>('all');

  const filteredCourses =
    filter === 'all'
      ? courses
      : courses.filter((course) => course.type === filter);

  const onCampusCourses = courses.filter((c) => c.type === 'on-campus');
  const onlineCourses = courses.filter((c) => c.type === 'online');

  return (
    <div className="min-h-screen pt-20 w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Choose from our wide range of programs designed to launch your career
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                filter === 'all'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Courses
            </button>
            <button
              onClick={() => setFilter('on-campus')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                filter === 'on-campus'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              On Campus
            </button>
            <button
              onClick={() => setFilter('online')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                filter === 'online'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Online
            </button>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filter === 'all' ? (
            <>
              {/* On Campus Courses */}
              <div className="mb-16">
                <AnimatedSection className="mb-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">On Campus Courses</h2>
                  <p className="text-gray-600">Study at our state-of-the-art campuses</p>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {onCampusCourses.map((course) => (
                    <Card key={course.id} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <div className="h-48 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                        <img
                          src={course.image || 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{course.title}</h3>
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
                      <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                      <Link href={`/courses/${course.id}`}>
                        <Button variant="ghost" className="w-full">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Online Courses */}
              <div>
                <AnimatedSection className="mb-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">Online Courses</h2>
                  <p className="text-gray-600">Study from anywhere with our flexible online programs</p>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {onlineCourses.map((course) => (
                    <Card key={course.id} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <div className="h-32 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                        <img
                          src={course.image || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                      <div className="flex items-center text-xs text-gray-600 mb-3">
                        <Clock className="w-3 h-3 mr-1" />
                        {course.duration}
                      </div>
                      <Link href={`/courses/${course.id}`}>
                        <Button variant="ghost" size="sm" className="w-full">
                          Learn More
                        </Button>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-48 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                    <img
                      src={course.image || 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{course.title}</h3>
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
                  <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                  <Link href={`/courses/${course.id}`}>
                    <Button variant="ghost" className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

