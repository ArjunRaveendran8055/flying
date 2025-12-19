import { AnimatedSection } from '../../components/ui/AnimatedSection';
import { Card } from '../../components/ui/Card';
import { Building2, Users, TrendingUp } from 'lucide-react';
import { PlacementPartners } from '../../components/sections/PlacementPartners';

const placements = [
  { 
    name: 'Priya Noble',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
    company: 'Indigo Airlines', 
    role: 'Cabin Crew' 
  },
  { 
    name: 'Sneha',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    company: 'Calicut International Airport', 
    role: 'CSA' 
  },
  { 
    name: 'Abhijith',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    company: 'Hammad International Airport, Qatar', 
    role: 'CSA' 
  },
  { 
    name: 'Fathima Sharier',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1288&q=80',
    company: 'Bangalore International Airport', 
    role: 'Employee' 
  },
  { 
    name: 'Ashley',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1364&q=80',
    company: 'Caravan Logistics Middle East, Dubai', 
    role: 'Logistics Executive' 
  },
  { 
    name: 'Sanoj Scaria',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    company: 'Kosta Shipping LLP', 
    role: 'Shipping Executive' 
  },
  { 
    name: 'Clairen Rodrigues',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    company: 'Cochin International Airport, Kerala', 
    role: 'Trainee' 
  },
  { 
    name: 'Rahul Kumar',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    company: 'Emirates Airlines', 
    role: 'Ground Staff' 
  },
  { 
    name: 'Meera Nair',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1288&q=80',
    company: 'Qatar Airways', 
    role: 'Customer Service Agent' 
  },
];

export default function PlacementPage() {
  return (
    <div className="min-h-screen pt-20 w-full overflow-x-hidden">
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Placement Support</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              We provide dedicated placement assistance to help you achieve your career goals
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <AnimatedSection>
              <div className="bg-primary-600 text-white rounded-2xl p-8 text-center shadow-xl">
                <Building2 className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-white mb-2">50+</h3>
                <p className="text-white/90 text-lg">Partner Companies</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-primary-700 text-white rounded-2xl p-8 text-center shadow-xl">
                <Users className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-white mb-2">85%</h3>
                <p className="text-white/90 text-lg">Placement Rate</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-primary-600 text-white rounded-2xl p-8 text-center shadow-xl">
                <TrendingUp className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-white mb-2">100+</h3>
                <p className="text-white/90 text-lg">Students Placed Annually</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Divider */}
          <div className="mb-16">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          <AnimatedSection className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {placements.map((placement, index) => (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white border-2 border-gray-100">
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-gray-200 shadow-md">
                      <img
                        src={placement.image}
                        alt={placement.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {placement.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{placement.role}</p>
                    <p className="text-sm font-medium text-gray-900">
                      {placement.company}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Placement Partners Section */}
      <PlacementPartners />
    </div>
  );
}

