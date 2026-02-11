
import React from 'react';

const TIPS = [
  {
    title: 'How to Crack Technical Interviews at FAANG',
    category: 'Interview Prep',
    readTime: '8 min read',
    excerpt: 'Key strategies for data structures, algorithms, and system design interviews in the Indian tech context.',
    image: 'https://picsum.photos/400/250?random=20'
  },
  {
    title: 'Top 10 Resume Mistakes Indian Graduates Make',
    category: 'Job Search',
    readTime: '5 min read',
    excerpt: 'From formatting errors to lack of quantification, avoid these common pitfalls to land more interviews.',
    image: 'https://picsum.photos/400/250?random=21'
  },
  {
    title: 'Remote Work: Negotiating Salaries in INR',
    category: 'Salary',
    readTime: '6 min read',
    excerpt: 'Understanding purchasing power parity and how to negotiate globally competitive salaries while staying in India.',
    image: 'https://picsum.photos/400/250?random=22'
  },
  {
    title: 'Transitioning from Service to Product Based Companies',
    category: 'Career Growth',
    readTime: '10 min read',
    excerpt: 'A step-by-step guide for software engineers looking to shift their career trajectory in the Indian market.',
    image: 'https://picsum.photos/400/250?random=23'
  }
];

const CareerTips: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-brand-light/30">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-brand-dark mb-4">Career Advice & Tips</h1>
        <p className="text-xl text-brand-dark/60 font-medium">Expert guidance to help you navigate the Indian job market and grow your career.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {TIPS.map((tip, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-brand-warm/30 overflow-hidden shadow-sm hover:shadow-md transition group">
            <div className="relative overflow-hidden">
                <img src={tip.image} alt={tip.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                     <span className="bg-brand-primary text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest shadow-md">{tip.category}</span>
                </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-brand-dark/40 text-[10px] font-black uppercase tracking-widest">{tip.readTime}</span>
              </div>
              <h2 className="text-2xl font-black text-brand-dark mb-4 leading-tight group-hover:text-brand-primary transition-colors">{tip.title}</h2>
              <p className="text-brand-dark/70 mb-6 leading-relaxed font-medium">
                {tip.excerpt}
              </p>
              <button className="text-brand-primary font-black text-sm hover:brightness-90 flex items-center gap-1 group/btn">
                Read Full Article
                <svg className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-brand-dark rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl text-white">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-2xl font-black mb-2">Subscribe to our Career Newsletter</h2>
          <p className="text-brand-warm/80 font-medium">Get the latest job trends and career advice delivered straight to your inbox every Monday.</p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 md:w-64 border-brand-warm rounded-lg focus:ring-brand-primary focus:border-brand-primary bg-white/10 text-white placeholder-brand-warm/30 font-medium"
          />
          <button className="bg-brand-primary text-white px-6 py-2 rounded-lg font-black hover:brightness-110 shadow-md transition-all whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerTips;
