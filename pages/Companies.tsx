
import React from 'react';
import { Link } from 'react-router-dom';
import { useJobs } from '../App';

const COMPANIES_DATA = [
  { id: 'c1', name: 'Infosys', logo: 'I', industry: 'IT Services', location: 'Bengaluru, KA', description: 'A global leader in next-generation digital services and consulting.' },
  { id: 'c2', name: 'Flipkart', logo: 'F', industry: 'E-commerce', location: 'Bengaluru, KA', description: 'India\'s homegrown e-commerce marketplace.' },
  { id: 'c3', name: 'Wipro', logo: 'W', industry: 'IT Consulting', location: 'Bengaluru, KA', description: 'Empowering clients through digital transformation and technology services.' },
  { id: 'c4', name: 'Zomato', logo: 'Z', industry: 'Food Tech', location: 'Gurugram, HR', description: 'Better food for more people.' },
  { id: 'c5', name: 'Swiggy', logo: 'S', industry: 'Logistics/Delivery', location: 'Bengaluru, KA', description: 'The preferred app for food delivery and instant grocery.' },
  { id: 'c6', name: 'OYO Rooms', logo: 'O', industry: 'Hospitality', location: 'Gurugram, HR', description: 'The world\'s leading chain of hotels and homes.' },
  { id: 'c7', name: 'Reliance Jio', logo: 'J', industry: 'Telecommunications', location: 'Navi Mumbai, MH', description: 'India\'s leading 4G/5G data network.' },
  { id: 'c8', name: 'Razorpay', logo: 'R', industry: 'Fintech', location: 'Bengaluru, KA', description: 'The future of payments in India.' }
];

const Companies: React.FC = () => {
  const { jobs } = useJobs();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-brand-dark mb-4">Top Companies in India</h1>
        <p className="text-xl text-brand-dark/60 max-w-2xl mx-auto">Explore India's leading tech and business giants. Find your next workplace based on culture, location, and opportunity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COMPANIES_DATA.map((company) => {
          const dynamicJobsCount = jobs.filter(j => j.company.toLowerCase().includes(company.name.toLowerCase())).length;
          
          return (
            <div key={company.id} className="bg-white rounded-xl shadow-sm border border-brand-warm/30 overflow-hidden hover:shadow-lg transition group">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-xl bg-brand-primary text-white flex items-center justify-center text-3xl font-black shadow-inner">
                    {company.logo}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-brand-dark group-hover:text-brand-primary transition">{company.name}</h2>
                    <p className="text-sm text-brand-dark/50">{company.industry}</p>
                  </div>
                </div>
                <p className="text-brand-dark/70 text-sm mb-6 line-clamp-2">
                  {company.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-brand-dark/40 mb-6">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {company.location}
                </div>
                <div className="pt-6 border-t border-brand-warm/20 flex justify-between items-center">
                  <span className="text-sm font-bold text-brand-primary">{dynamicJobsCount} Open Roles</span>
                  <Link to="/jobs" className="text-sm font-bold text-brand-dark hover:text-brand-primary flex items-center gap-1">
                    View Jobs
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 bg-brand-dark rounded-2xl p-12 text-center text-white shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Want to see your company here?</h2>
        <p className="text-brand-warm mb-8 max-w-xl mx-auto">Join 10,000+ Indian employers hiring via HireHub. Post your first job today and reach qualified candidates.</p>
        <Link to="/register" className="inline-block bg-brand-primary text-white px-8 py-3 rounded-lg font-bold hover:brightness-110 shadow-lg transition">
          Register as Employer
        </Link>
      </div>
    </div>
  );
};

export default Companies;
