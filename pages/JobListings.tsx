
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useJobs } from '../App';

const JobListings: React.FC = () => {
  const { jobs } = useJobs();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterLocation, setFilterLocation] = useState('All');

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || job.type === filterType;
    const matchesLocation = filterLocation === 'All' || job.location.includes(filterLocation);
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-black leading-7 text-brand-dark sm:text-3xl sm:truncate">
            Open Opportunities in India
          </h2>
          <p className="mt-1 text-brand-dark/50 font-medium">Find the role that's right for you across top Indian tech hubs</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-warm/30">
            <h3 className="text-sm font-black text-brand-dark uppercase tracking-wider mb-4">Search</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Job title or company..."
                className="w-full pl-10 pr-4 py-2 border border-brand-warm rounded-md focus:ring-brand-primary focus:border-brand-primary text-sm bg-brand-light/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute left-3 top-2.5 text-brand-warm">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <h3 className="text-sm font-black text-brand-dark uppercase tracking-wider mt-8 mb-4">Job Type</h3>
            <div className="space-y-2">
              {['All', 'Full-time', 'Remote', 'Contract', 'Hybrid'].map((type) => (
                <label key={type} className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="jobType"
                    className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-brand-warm"
                    checked={filterType === type}
                    onChange={() => setFilterType(type)}
                  />
                  <span className="ml-2 text-sm text-brand-dark/70 group-hover:text-brand-primary transition-colors font-medium">{type}</span>
                </label>
              ))}
            </div>

            <h3 className="text-sm font-black text-brand-dark uppercase tracking-wider mt-8 mb-4">Location</h3>
            <select
              className="w-full border-brand-warm rounded-md focus:ring-brand-primary focus:border-brand-primary text-sm bg-brand-light/20"
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
            >
              <option value="All">Anywhere in India</option>
              <option value="Remote">Remote</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Gurugram">Gurugram</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Pune">Pune</option>
              <option value="Noida">Noida</option>
            </select>
          </div>
        </div>

        {/* Job Grid */}
        <div className="lg:col-span-3 space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm border border-brand-warm/30 hover:border-brand-primary transition group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded bg-brand-warm/30 flex items-center justify-center text-brand-primary font-black text-lg uppercase shadow-inner">
                        {job.company.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition">
                        <Link to={`/jobs/${job.id}`}>{job.title}</Link>
                      </h3>
                      <p className="text-brand-dark/60 text-sm mb-2 font-medium">{job.company}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-brand-light text-brand-dark border border-brand-warm/20">
                          {job.location}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-green-50 text-green-700 border border-green-200">
                          {job.salary}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end gap-2">
                    <Link
                      to={`/jobs/${job.id}`}
                      className="px-4 py-2 border border-brand-primary text-brand-primary text-sm font-bold rounded-md hover:bg-brand-primary hover:text-white transition-all shadow-sm"
                    >
                      View Details
                    </Link>
                    <span className="text-[10px] font-bold text-brand-dark/30">Posted {new Date(job.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-lg border border-dashed border-brand-warm">
              <p className="text-brand-dark/40 italic font-medium">No jobs found matching your criteria.</p>
              <button onClick={() => { setSearchTerm(''); setFilterType('All'); setFilterLocation('All'); }} className="mt-2 text-brand-primary font-bold hover:underline">Clear all filters</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobListings;
