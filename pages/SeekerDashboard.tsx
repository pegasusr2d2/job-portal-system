
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth, useJobs } from '../App';

const SeekerDashboard: React.FC = () => {
  const { user } = useAuth();
  const { jobs, savedJobs } = useJobs();

  const mySavedJobs = jobs.filter(j => savedJobs.includes(j.id));

  const applications = [
    { id: 'a1', title: 'Senior Software Engineer', company: 'Flipkart', status: 'In Review', date: 'Oct 24, 2024' },
    { id: 'a2', title: 'Frontend Developer', company: 'Swiggy', status: 'Interview', date: 'Oct 20, 2024' },
    { id: 'a3', title: 'Product Manager', company: 'Zomato', status: 'Rejected', date: 'Oct 15, 2024' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brand-dark">Namaste, {user?.name}!</h1>
        <p className="text-brand-dark/60 font-medium">You have {applications.filter(a => a.status === 'Interview').length} active interviews scheduled.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { label: 'Applications', count: '12', icon: '📝', color: 'bg-brand-warm/20 text-brand-dark' },
          { label: 'Saved Jobs', count: savedJobs.length.toString(), icon: '⭐', color: 'bg-brand-primary text-white shadow-md' },
          { label: 'Profile Views', count: '128', icon: '👁️', color: 'bg-brand-warm/20 text-brand-dark' },
        ].map((stat) => (
          <div key={stat.label} className={`p-6 rounded-xl border border-brand-warm/30 ${stat.color}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold opacity-80 uppercase tracking-widest">{stat.label}</p>
                <p className="text-3xl font-black mt-1">{stat.count}</p>
              </div>
              <span className="text-4xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-xl shadow-sm border border-brand-warm/30 overflow-hidden">
            <div className="px-6 py-4 border-b border-brand-warm/30 flex justify-between items-center bg-brand-light/50">
              <h2 className="font-bold text-brand-dark text-lg">Recent Applications</h2>
              <button className="text-brand-primary text-sm font-bold hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-brand-warm/30">
                <thead className="bg-brand-light">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-brand-dark/50 uppercase">Job Role</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-brand-dark/50 uppercase">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-brand-dark/50 uppercase">Status</th>
                    <th className="px-6 py-3 text-right text-xs font-bold text-brand-dark/50 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-brand-warm/10">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-brand-light/20 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-brand-dark">{app.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-dark/70">{app.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-[10px] font-black uppercase rounded-full border ${
                          app.status === 'Interview' ? 'border-green-500 bg-green-50 text-green-700' :
                          app.status === 'In Review' ? 'border-brand-primary bg-brand-warm/20 text-brand-primary' : 'border-red-500 bg-red-50 text-red-700'
                        }`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-brand-primary hover:text-brand-dark font-bold">Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-brand-warm/30 overflow-hidden">
            <div className="px-6 py-4 border-b border-brand-warm/30 bg-brand-light/50">
              <h2 className="font-bold text-brand-dark text-lg">Saved Jobs</h2>
            </div>
            <div className="p-4 space-y-4 max-h-[500px] overflow-y-auto custom-scrollbar">
              {mySavedJobs.length > 0 ? mySavedJobs.map((job) => (
                <div key={job.id} className="p-4 rounded-lg border border-brand-warm/20 hover:border-brand-primary transition-colors group">
                  <Link to={`/jobs/${job.id}`}>
                    <h3 className="text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors">{job.title}</h3>
                    <p className="text-xs text-brand-dark/50 mt-1">{job.company} • {job.location}</p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-xs font-bold text-brand-primary">{job.salary}</span>
                      <span className="text-[10px] text-brand-dark/40">{new Date(job.createdAt).toLocaleDateString()}</span>
                    </div>
                  </Link>
                </div>
              )) : (
                <div className="py-12 text-center">
                  <p className="text-sm text-brand-dark/40 italic">No saved jobs yet.</p>
                  <Link to="/jobs" className="text-xs font-bold text-brand-primary mt-2 inline-block">Browse Jobs</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeekerDashboard;