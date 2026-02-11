
import { User, Job, UserRole } from '../types';

export const INITIAL_USERS: User[] = [
  {
    id: 'u1',
    name: 'Aarav Sharma',
    email: 'aarav@example.com',
    role: UserRole.SEEKER,
    skills: ['React', 'Node.js', 'MongoDB'],
    experience: '4 years of full-stack development',
    profilePic: 'https://picsum.photos/200?random=10'
  },
  {
    id: 'u2',
    name: 'Flipkart Careers',
    email: 'employer@techcorp.com',
    role: UserRole.EMPLOYER,
    companyName: 'Flipkart',
    companyBio: 'India\'s leading e-commerce marketplace.',
    profilePic: 'https://picsum.photos/200?random=11'
  },
  {
    id: 'u3',
    name: 'HireHub Admin',
    email: 'admin@hirehub.com',
    role: UserRole.ADMIN
  }
];

export const INITIAL_JOBS: Job[] = [
  {
    id: 'j1',
    title: 'Senior Software Engineer',
    company: 'Flipkart',
    location: 'Bengaluru, KA',
    salary: '₹24 LPA - ₹35 LPA',
    type: 'Full-time',
    description: 'We are looking for a Senior Engineer to join our supply chain tech team. You will be responsible for scaling high-throughput systems that power millions of deliveries daily.',
    requirements: ['5+ years experience in Java/Node.js', 'Strong problem solving and DS/Algo', 'Experience with distributed systems'],
    postedBy: 'u2',
    createdAt: new Date().toISOString(),
    applicantsCount: 42
  },
  {
    id: 'j2',
    title: 'Product Manager',
    company: 'Zomato',
    location: 'Gurugram, HR',
    salary: '₹18 LPA - ₹28 LPA',
    type: 'Remote',
    description: 'Join Zomato to redefine how India eats. You will lead the "Loyalty" squad and build features that increase customer retention.',
    requirements: ['3+ years in Product Management', 'Data-driven decision making', 'Experience in B2C apps'],
    postedBy: 'u2',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    applicantsCount: 156
  },
  {
    id: 'j3',
    title: 'Data Scientist',
    company: 'TCS',
    location: 'Mumbai, MH',
    salary: '₹12 LPA - ₹20 LPA',
    type: 'Full-time',
    description: 'Work with one of India\'s largest IT services companies on cutting-edge AI projects for global clients.',
    requirements: ['Python, R, SQL expertise', 'Machine Learning certification', 'Strong statistical foundation'],
    postedBy: 'u2',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    applicantsCount: 89
  },
  {
    id: 'j4',
    title: 'Frontend Developer (React)',
    company: 'Swiggy',
    location: 'Bengaluru, KA',
    salary: '₹15 LPA - ₹22 LPA',
    type: 'Hybrid',
    description: 'Join the Swiggy Instamart team to build lightning-fast grocery delivery interfaces.',
    requirements: ['Strong React & Redux skills', 'Pixel-perfect UI implementation', 'Performance optimization experience'],
    postedBy: 'u2',
    createdAt: new Date(Date.now() - 259200000).toISOString(),
    applicantsCount: 64
  },
  {
    id: 'j5',
    title: 'DevOps Engineer',
    company: 'Reliance Jio',
    location: 'Navi Mumbai, MH',
    salary: '₹20 LPA - ₹30 LPA',
    type: 'Full-time',
    description: 'Manage the infrastructure for India\'s largest 4G/5G network. Focus on automation and site reliability.',
    requirements: ['AWS/Azure expertise', 'Kubernetes & Docker', 'CI/CD pipeline management'],
    postedBy: 'u2',
    createdAt: new Date(Date.now() - 345600000).toISOString(),
    applicantsCount: 28
  },
  {
    id: 'j6',
    title: 'UX/UI Designer',
    company: 'Byju\'s',
    location: 'Bengaluru, KA',
    salary: '₹10 LPA - ₹16 LPA',
    type: 'Full-time',
    description: 'Help us design the future of education. Create engaging interfaces for millions of students worldwide.',
    requirements: ['Proficiency in Figma/Adobe XD', 'Strong portfolio of mobile apps', 'Understanding of user psychology'],
    postedBy: 'u2',
    createdAt: new Date(Date.now() - 432000000).toISOString(),
    applicantsCount: 52
  },
  {
    id: 'j7',
    title: 'Backend Engineer (Go)',
    company: 'Razorpay',
    location: 'Bengaluru, KA',
    salary: '₹22 LPA - ₹32 LPA',
    type: 'Full-time',
    description: 'Join our payments core team. Build high-availability APIs that process billions of transactions securely.',
    requirements: ['Golang or C++ proficiency', 'Experience with MySQL/PostgreSQL', 'Microservices architecture knowledge'],
    postedBy: 'u2',
    createdAt: new Date(Date.now() - 518400000).toISOString(),
    applicantsCount: 37
  },
  {
    id: 'j8',
    title: 'Marketing Specialist',
    company: 'Nykaa',
    location: 'Mumbai, MH',
    salary: '₹8 LPA - ₹14 LPA',
    type: 'Full-time',
    description: 'Drive growth for India\'s biggest beauty platform. Manage digital campaigns and social media strategy.',
    requirements: ['Experience with Google Ads/Meta Ads', 'Excellent copywriting skills', 'Knowledge of e-commerce trends'],
    postedBy: 'u2',
    createdAt: new Date(Date.now() - 604800000).toISOString(),
    applicantsCount: 110
  },
  {
    id: 'j9',
    title: 'iOS Developer',
    company: 'PhonePe',
    location: 'Hyderabad, TS',
    salary: '₹18 LPA - ₹26 LPA',
    type: 'Hybrid',
    description: 'Build features for India\'s most used UPI payment app. Focus on performance and seamless UI animations.',
    requirements: ['Swift & UIKit/SwiftUI', 'Experience with CoreData', 'Publishing apps on App Store'],
    postedBy: 'u2',
    createdAt: new Date(Date.now() - 691200000).toISOString(),
    applicantsCount: 45
  },
  {
    id: 'j10',
    title: 'Human Resources Manager',
    company: 'Infosys',
    location: 'Pune, MH',
    salary: '₹14 LPA - ₹22 LPA',
    type: 'Full-time',
    description: 'Lead talent acquisition and employee engagement for our Pune development center.',
    requirements: ['MBA in HR', '5+ years corporate experience', 'Strong interpersonal skills'],
    postedBy: 'u2',
    createdAt: new Date(Date.now() - 777600000).toISOString(),
    applicantsCount: 92
  },
  {
    id: 'j11',
    title: 'Content Strategist',
    company: 'OYO Rooms',
    location: 'Gurugram, HR',
    salary: '₹7 LPA - ₹12 LPA',
    type: 'Remote',
    description: 'Shape the narrative for OYO\'s global footprint. Create compelling stories across web and print.',
    requirements: ['Degree in Communications/Journalism', 'SEO writing experience', 'Creative storytelling ability'],
    postedBy: 'u2',
    createdAt: new Date(Date.now() - 864000000).toISOString(),
    applicantsCount: 78
  },
  {
    id: 'j12',
    title: 'Security Analyst',
    company: 'Wipro',
    location: 'Chennai, TN',
    salary: '₹10 LPA - ₹18 LPA',
    type: 'Full-time',
    description: 'Protect global enterprise clients from cyber threats. Monitor SOC alerts and perform vulnerability assessments.',
    requirements: ['CEH or CISSP certification', 'Experience with SIEM tools', 'Understanding of network protocols'],
    postedBy: 'u2',
    createdAt: new Date(Date.now() - 950400000).toISOString(),
    applicantsCount: 31
  }
];
