export interface Course {
  id: string;
  title: string;
  type: 'on-campus' | 'online';
  duration: string;
  eligibility: string;
  description: string;
  category: string;
  image?: string;
}

export interface Campus {
  id: string;
  name: string;
  location: string;
  address: string;
  phone: string;
  email?: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  quote: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  link: string;
}

export const courses: Course[] = [
  // On Campus Courses
  {
    id: 'mba-airline',
    title: 'MBA Airline & Airport Management',
    type: 'on-campus',
    duration: '2 Years',
    eligibility: 'Any Bachelor Degree',
    category: 'MBA',
    description: 'Comprehensive MBA program focusing on airline and airport management.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
  },
  {
    id: 'mba-shipping',
    title: 'MBA Shipping & Logistics Management',
    type: 'on-campus',
    duration: '2 Years',
    eligibility: 'Any Bachelor Degree',
    category: 'MBA',
    description: 'Advanced MBA program in shipping and logistics management.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 'bba-airline',
    title: 'BBA Airline & Airport Management',
    type: 'on-campus',
    duration: '3 Years',
    eligibility: 'Plus Two or equivalent',
    category: 'BBA',
    description: 'Bachelor program in airline and airport management.',
    image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 'bba-shipping',
    title: 'BBA Shipping & Logistics Management',
    type: 'on-campus',
    duration: '3 Years',
    eligibility: 'Plus Two or equivalent',
    category: 'BBA',
    description: 'Bachelor program in shipping and logistics management.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 'bcom-shipping',
    title: 'B.Com Shipping & Logistics',
    type: 'on-campus',
    duration: '3 Years',
    eligibility: 'Plus Two or equivalent',
    category: 'B.Com',
    description: 'Commerce degree with specialization in shipping and logistics.',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
  },
  {
    id: 'bsc-catering',
    title: 'BSc Catering & Hotel Administration',
    type: 'on-campus',
    duration: '3 Years',
    eligibility: 'Plus Two or equivalent',
    category: 'BSc',
    description: 'Science degree in catering and hotel administration.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
  },
  {
    id: 'bcom-banking',
    title: 'B.Com Banking, Financial Service & Insurance',
    type: 'on-campus',
    duration: '3 Years',
    eligibility: 'Plus Two or equivalent',
    category: 'B.Com',
    description: 'Commerce degree in banking, financial services, and insurance.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2011&q=80',
  },
  {
    id: 'diploma-airline',
    title: 'Diploma in Airline & Airport Management',
    type: 'on-campus',
    duration: '1 Year',
    eligibility: 'Plus Two or equivalent',
    category: 'Diploma',
    description: 'One-year diploma program in airline and airport management.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
  },
  {
    id: 'diploma-logistics',
    title: 'Diploma in Logistics & Shipping',
    type: 'on-campus',
    duration: '1 Year',
    eligibility: 'Plus Two or equivalent',
    category: 'Diploma',
    description: 'One-year diploma program in logistics and shipping.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  // Online Courses
  {
    id: 'online-bba-airline',
    title: 'BBA Airline & Airport Management',
    type: 'online',
    duration: '3 Years',
    eligibility: 'Plus Two or equivalent',
    category: 'BBA',
    description: 'Online bachelor program in airline and airport management.',
    image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 'online-bba-logistics',
    title: 'BBA Logistics & Supply Chain Management',
    type: 'online',
    duration: '3 Years',
    eligibility: 'Plus Two or equivalent',
    category: 'BBA',
    description: 'Online bachelor program in logistics and supply chain management.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 'online-mba-airline',
    title: 'MBA Airline & Airport Management',
    type: 'online',
    duration: '2 Years',
    eligibility: 'Any Bachelor Degree',
    category: 'MBA',
    description: 'Online MBA program in airline and airport management.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
  },
  {
    id: 'online-mba-logistics',
    title: 'MBA Logistics & Supply Chain Management',
    type: 'online',
    duration: '2 Years',
    eligibility: 'Any Bachelor Degree',
    category: 'MBA',
    description: 'Online MBA program in logistics and supply chain management.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
];

export const campuses: Campus[] = [
  {
    id: 'cochin',
    name: 'Cochin Campus',
    location: 'Kochi, Kerala',
    address: 'Flywings International College of Management Studies, Kalabhavan Road, Kochi, Pin: 682018',
    phone: '+91 9048499972',
    email: 'info@flywingsinternational.org',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 'oddanchatram',
    name: 'Oddanchatram Campus',
    location: 'Dindigul, Tamil Nadu',
    address: 'Flywings International Institute of Aviation & Logistics, Gandhinagar East, Oddanchatram, Dindigul, Tamil Nadu - 624619',
    phone: '+91 9946507776',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sneha',
    role: 'CSA',
    company: 'Calicut International Airport',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    quote: 'My dream was also to get a job in this field. With Flywings, I learned how to improve my communication skills, interview skills and overall personality. A dream came true when I was selected as a CSA at Calicut International. I would like to thank all my experienced instructors for being my guiding light.',
  },
  {
    id: '2',
    name: 'Abhijith',
    role: 'CSA',
    company: 'Hammad International Airport, Qatar',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    quote: 'I want to convey my heartfelt thanks to Flywings International College of Management Studies. They have helped me a lot in enhancing my skills and knowledge. Because of Flywings International College of Management Studies, I am working as a CSA at Hammad International Airport, Qatar. Thank you for projecting me in such a progressive career.',
  },
  {
    id: '3',
    name: 'Clairen Rodrigues',
    role: 'Trainee',
    company: 'Cochin International Airport, Kerala',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    quote: 'I am from Kodagu Karnataka. I have studied Diploma in Airline and airport management in flywings Cochin campus. Now I am working as a trainee in Cochin international airport. Thank you flywings team for the wonderful guidance to achieve my dream.',
  },
  {
    id: '4',
    name: 'Fathima Sharier',
    role: 'Employee',
    company: 'Bangalore International Airport',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80',
    quote: "I'm a student of flywings international. I completed my exams last week and today I got selected at Bangalore international airport. My sincere thanks to flywings international. Thank you.",
  },
  {
    id: '5',
    name: 'Ashley',
    role: 'Employee',
    company: 'Caravan Logistics Middle East, Dubai',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
    quote: 'I have studied BBA Logistics and Shipping from Flywings International. I have been working in Kerala in logistics industry. Currently I am working in Caravan Logistics Middle East, Dubai. I got this job by placement assistance from Flywings International. From my experience this is a highly recommended course especially for girls.',
  },
  {
    id: '6',
    name: 'Sanoj Scaria',
    role: 'Employee',
    company: 'Kosta Shipping LLP',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    quote: 'I studied regular BBA Logistics and Shipping. There was a campus interview at Flywings and I got selected. Now I am working in Kosta Shipping LLP. With job, I am studying MBA Logistics distance mode as this course is best for my future career in Logistics and Shipping Industry.',
  },
  {
    id: '7',
    name: 'Priya Noble',
    role: 'Cabin Crew',
    company: 'Indigo Airlines',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    quote: "Flywings has been a place of learning's in my life. I had attended an interview on 10th of may with indigo airlines which consisted of more than 300 candidates. Out of these 300 candidates only four got selected and I was one among these. Thankful to each of you for being there for me and giving me the confidence to achieve my dream. Flywings would be a perfect place for the young people out there looking forward to achieve your goal and be successful in life.",
  },
];

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'A U Arrear Examination Fee Payment – November 2025',
    date: '2025-01-15',
    excerpt: 'Important notice regarding arrear examination fee payment.',
    link: '/news/arrear-examination-nov-2025',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '2',
    title: 'Distribution of Provisional Certificates and Mark Statements – April 2025',
    date: '2025-01-10',
    excerpt: 'Information about certificate distribution.',
    link: '/news/certificate-distribution-april-2025',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '3',
    title: 'Result Published April 2025',
    date: '2025-01-05',
    excerpt: 'April 2025 examination results are now available.',
    link: '/news/result-april-2025',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '4',
    title: 'SEAT BOOKING HAS STARTED FOR THE ACADEMIC YEAR 2025-26',
    date: '2024-12-20',
    excerpt: 'Book your seats now for the upcoming academic year.',
    link: '/news/seat-booking-2025-26',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '5',
    title: 'Attention Flywingtians! Cabin Crew Interview Screening',
    date: '2024-12-15',
    excerpt: 'Cabin crew interview screening scheduled.',
    link: '/news/cabin-crew-interview',
    image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '6',
    title: 'Airline Internship',
    date: '2024-12-10',
    excerpt: 'Opportunities for airline internships available.',
    link: '/news/airline-internship',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
  },
];

export const contactInfo = {
  phone: '+91 9048 499 972',
  email: 'info@flywingsinternational.org',
  address: 'Flywings International College of Management Studies, Kalabhavan Road, Kochi, Pin: 682018',
};

