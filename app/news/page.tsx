'use client';

import { newsItems } from '../../lib/constants';
import { Card } from '../../components/ui/Card';
import { AnimatedSection } from '../../components/ui/AnimatedSection';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NewsPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen pt-20 w-full overflow-x-hidden">
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Latest News</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Stay updated with the latest announcements and news
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((news, index) => (
              <AnimatedSection key={news.id} delay={index * 0.1}>
                <Link href={news.link}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                    <div className="h-48 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                      <img
                        src={news.image || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'}
                        alt={news.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(news.date)}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.excerpt}</p>
                    <div className="flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

