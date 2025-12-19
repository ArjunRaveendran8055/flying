import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Courses } from '../components/sections/Courses';
import { Testimonials } from '../components/sections/Testimonials';
import { Campuses } from '../components/sections/Campuses';
import { News } from '../components/sections/News';
import { ContactForm } from '../components/sections/ContactForm';
import { PlacementPartners } from '../components/sections/PlacementPartners';

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <About />
      <Courses />
      <Testimonials />
      <Campuses />
      <PlacementPartners />
      <News />
      <ContactForm />
    </div>
  );
}

