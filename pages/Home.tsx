
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../App';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="relative overflow-hidden bg-brand-light">
      {/* Hero Section */}
      <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-32 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-brand-dark sm:text-5xl md:text-6xl">
              <span className="block">Elevate your career with</span>
              <span className="block text-brand-primary">HireHub Professional</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-brand-dark/60 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Connect with top employers and find high-quality opportunities in tech, design, marketing, and beyond. Your next big career move starts here.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow-sm">
                <Link
                  to="/jobs"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-brand-primary hover:brightness-110 md:py-4 md:text-lg md:px-10 transition-all shadow-md"
                >
                  Browse Jobs
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow-sm sm:mt-0 sm:ml-3">
                <Link
                  to={user ? "/dashboard/seeker" : "/register"}
                  className="w-full flex items-center justify-center px-8 py-3 border border-brand-warm text-base font-bold rounded-md text-brand-primary bg-white hover:bg-brand-light md:py-4 md:text-lg md:px-10 transition-all"
                >
                  Post a Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-12 bg-brand-warm/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-brand-primary font-bold tracking-wide uppercase">Why HireHub</h2>
            <p className="mt-2 text-3xl leading-8 font-black tracking-tight text-brand-dark sm:text-4xl">
              A better way to find work
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: 'Verified Employers',
                  desc: 'Every company on our platform goes through a rigorous vetting process.',
                  icon: (
                    <svg className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04kM12 21.355r8.182-5.547V10.203L12 15.751l-8.182-5.548V15.808L12 21.355z" />
                    </svg>
                  )
                },
                {
                  title: 'Smart Matching',
                  desc: 'Our AI-powered engine suggests jobs that perfectly match your skill set.',
                  icon: (
                    <svg className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: 'Secure & Private',
                  desc: 'Control who sees your profile and resume with advanced privacy settings.',
                  icon: (
                    <svg className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )
                }
              ].map((feature) => (
                <div key={feature.title} className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-brand-warm/20">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-warm/30 text-white">
                      {feature.icon}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-bold text-brand-dark">{feature.title}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-brand-dark/60 font-medium">
                    {feature.desc}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
