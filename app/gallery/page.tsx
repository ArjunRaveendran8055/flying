'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatedSection } from '../../components/ui/AnimatedSection';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const galleryImages = [
  {
    id: 1,
    alt: 'Aviation students in classroom',
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 2,
    alt: 'Airport management training',
    src: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 3,
    alt: 'Cabin crew training session',
    src: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 4,
    alt: 'Aviation students graduation',
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 5,
    alt: 'Logistics training workshop',
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 6,
    alt: 'Campus facilities',
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 7,
    alt: 'Aviation industry visit',
    src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
  },
  {
    id: 8,
    alt: 'Student presentation',
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 9,
    alt: 'Airport simulation training',
    src: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 10,
    alt: 'Campus event',
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 11,
    alt: 'Industry expert session',
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 12,
    alt: 'Student achievement ceremony',
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
];

export default function GalleryPage() {
  const pathname = usePathname();

  useEffect(() => {
    // Refresh ScrollTrigger when page loads or route changes
    const refreshScrollTrigger = () => {
      // Small delay to ensure DOM is fully rendered
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };

    refreshScrollTrigger();

    // Also refresh after images load
    const images = document.querySelectorAll('img');
    let loadedCount = 0;
    const totalImages = images.length;

    if (totalImages > 0) {
      images.forEach((img) => {
        if (img.complete) {
          loadedCount++;
        } else {
          img.addEventListener('load', () => {
            loadedCount++;
            if (loadedCount === totalImages) {
              ScrollTrigger.refresh();
            }
          });
        }
      });

      if (loadedCount === totalImages) {
        ScrollTrigger.refresh();
      }
    }

    // Refresh on window resize
    window.addEventListener('resize', refreshScrollTrigger);

    return () => {
      window.removeEventListener('resize', refreshScrollTrigger);
    };
  }, [pathname]);
  return (
    <div className="min-h-screen pt-20 w-full overflow-x-hidden">
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Explore our campuses, events, and student life
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <AnimatedSection key={image.id} delay={index * 0.05}>
                <div className="aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

