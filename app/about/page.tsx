import { AnimatedSection } from '../../components/ui/AnimatedSection';
import { Card } from '../../components/ui/Card';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Flywings International</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              22+ glorious years of excellence in aviation, hospitality, logistics and shipping
              education
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection direction="left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Flywings International College of Management Studies is a quintessential
                educational institution situated at the heart of Cochin – the queen of the Arabian
                Sea, in Kerala, the southern-most state of India.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The college can be reached within 30 minutes of driving from the Cochin
                International Airport. Since 2003 (formerly known as Easy Institute), we have been
                dedicated to training and providing competent candidates for placement in global
                aviation, hospitality, logistics and shipping industries and ports.
              </p>
              <p className="text-lg text-gray-700">
                Our mission is to train and provide competent candidates for placement in global
                aviation, hospitality, logistics and shipping industries and ports.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="h-96 bg-gray-200 rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Flywings International Campus"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection>
              <Card className="h-full">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 text-lg">
                  To train and provide competent candidates for placement in global aviation,
                  hospitality, logistics and shipping industries and ports.
                </p>
              </Card>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <Card className="h-full">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 text-lg">
                  To be the leading institution in aviation, hospitality, logistics and shipping
                  education, recognized globally for excellence and innovation.
                </p>
              </Card>
            </AnimatedSection>
          </div>

          {/* Achievements */}
          <AnimatedSection>
            <div className="bg-primary-600 rounded-3xl p-12 text-white">
              <h2 className="text-4xl font-bold mb-8 text-center">Our Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">22+</div>
                  <div className="text-xl">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">00+</div>
                  <div className="text-xl">Students Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">2</div>
                  <div className="text-xl">Campuses</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

