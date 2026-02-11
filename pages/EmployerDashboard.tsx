
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth, useJobs } from '../App';

const EmployerDashboard: React.FC = () => {
  const { user } = useAuth();
  const { jobs, deleteJob } = useJobs();
  
  // Filter jobs by current employer
  const myJobs = jobs.filter(j => j.postedBy === user?.id || (user?.email === 'employer@techcorp.com' && j.company === 'Flipkart'));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black text-brand-dark">Employer Dashboard</h1>
          <p className="text-brand-dark/50 font-medium">Manage your job postings and applicants</p>
        </div>
        <Link
          to="/post-job"
          className="bg-brand-primary text-white px-6 py-2 rounded-lg font-black hover:brightness-110 shadow-md transition-all flex items-center justify-center gap-2"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Post a New Job
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'Active Jobs', count: myJobs.length.toString(), icon: '📋' },
          { label: 'Total Applicants', count: (myJobs.length * 12).toString(), icon: '👥' },
          { label: 'Unread Messages', count: '8', icon: '💬' },
          { label: 'Interviews', count: '3', icon: '🗓️' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm border border-brand-warm/30 hover:border-brand-primary transition-colors group">
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
            <p className="text-[10px] font-black text-brand-dark/40 uppercase tracking-widest">{stat.label}</p>
            <p className="text-2xl font-black text-brand-dark">{stat.count}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-brand-warm/30 overflow-hidden">
        <div className="px-6 py-4 border-b border-brand-warm/20 bg-brand-light/30">
          <h2 className="font-black text-brand-dark text-lg">Your Postings</h2>
        </div>
        <div className="divide-y divide-brand-warm/10">
          {myJobs.length > 0 ? myJobs.map((job) => (
            <div key={job.id} className="p-6 hover:bg-brand-light/30 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-lg font-black text-brand-dark">{job.title}</h3>
                <p className="text-sm text-brand-dark/50 mb-2 font-medium">{job.location} • {job.type}</p>
                <div className="flex gap-4">
                  <span className="text-[10px] font-black uppercase text-brand-primary">{job.applicantsCount || 0} Applicants</span>
                  <span className="text-[10px] font-black uppercase text-brand-dark/30 tracking-tighter">Posted on {new Date(job.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-1.5 text-xs font-black uppercase border border-brand-warm text-brand-dark/60 rounded hover:bg-brand-warm/20 transition-all">
                  Edit
                </button>
                <button className="px-4 py-1.5 text-xs font-black uppercase border border-brand-primary text-brand-primary bg-brand-primary/5 rounded hover:bg-brand-primary/10 transition-all shadow-sm">
                  View Applicants
                </button>
                <button 
                  onClick={() => deleteJob(job.id)}
                  className="p-1.5 text-red-600 border border-red-100 rounded hover:bg-red-50 transition-all shadow-sm"
                  title="Delete Posting"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          )) : (
            <div className="p-12 text-center text-brand-dark/30 italic font-medium">
              You haven't posted any jobs yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
