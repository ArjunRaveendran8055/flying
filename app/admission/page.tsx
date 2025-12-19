import { AnimatedSection } from '../../components/ui/AnimatedSection';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { CheckCircle, FileText, Calendar, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function AdmissionPage() {
  return (
    <div className="min-h-screen pt-20 w-full overflow-x-hidden">
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Admission Process</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Start your journey with Flywings International
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: FileText, title: 'Fill Application', step: 'Step 1' },
              { icon: CheckCircle, title: 'Submit Documents', step: 'Step 2' },
              { icon: Calendar, title: 'Interview', step: 'Step 3' },
              { icon: GraduationCap, title: 'Enrollment', step: 'Step 4' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.step} delay={index * 0.1}>
                  <Card className="text-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm text-primary-600 font-semibold mb-2">{item.step}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <Card>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Requirements</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Completed application form</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Educational certificates and transcripts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Identity proof</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Passport size photographs</span>
                  </li>
                </ul>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <Card>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Dates</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <div className="font-semibold text-gray-900">Application Deadline</div>
                    <div className="text-gray-600">March 31, 2025</div>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-4">
                    <div className="font-semibold text-gray-900">Interview Dates</div>
                    <div className="text-gray-600">April 15-20, 2025</div>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-4">
                    <div className="font-semibold text-gray-900">Classes Begin</div>
                    <div className="text-gray-600">June 1, 2025</div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg">Apply Now</Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

