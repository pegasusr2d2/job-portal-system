
import React, { useState } from 'react';
import { INITIAL_JOBS, INITIAL_USERS } from '../services/mockData';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'users' | 'jobs'>('users');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-brand-dark">Administrator Console</h1>
        <p className="text-brand-dark/50 font-medium">Global overview and system management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Users', value: '1,245', trend: '+12%', color: 'text-brand-primary' },
          { label: 'Active Jobs', value: INITIAL_JOBS.length.toString(), trend: '+5%', color: 'text-green-600' },
          { label: 'Revenue (Monthly)', value: '₹3.45 Lakh', trend: '+18%', color: 'text-blue-600' },
          { label: 'Spam Flagged', value: '3', trend: '-20%', color: 'text-red-600' },
        ].map((item) => (
          <div key={item.label} className="bg-white p-5 rounded-lg shadow-sm border border-brand-warm/30">
            <p className="text-[10px] font-black text-brand-dark/40 uppercase tracking-widest">{item.label}</p>
            <div className="flex items-baseline justify-between mt-2">
              <p className={`text-2xl font-black ${item.color}`}>{item.value}</p>
              <p className="text-[10px] font-black text-green-500">{item.trend}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-brand-warm/30 overflow-hidden">
        <div className="flex border-b border-brand-warm/20 bg-brand-light/30">
          <button
            onClick={() => setActiveTab('users')}
            className={`px-8 py-4 text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'users' ? 'text-brand-primary border-b-2 border-brand-primary bg-white' : 'text-brand-dark/50 hover:text-brand-dark'}`}
          >
            Manage Users
          </button>
          <button
            onClick={() => setActiveTab('jobs')}
            className={`px-8 py-4 text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'jobs' ? 'text-brand-primary border-b-2 border-brand-primary bg-white' : 'text-brand-dark/50 hover:text-brand-dark'}`}
          >
            Manage Jobs
          </button>
        </div>

        <div className="p-0 overflow-x-auto">
          {activeTab === 'users' ? (
            <table className="min-w-full divide-y divide-brand-warm/10">
              <thead className="bg-brand-light">
                <tr>
                  <th className="px-6 py-3 text-left text-[10px] font-black text-brand-dark/50 uppercase tracking-widest">User</th>
                  <th className="px-6 py-3 text-left text-[10px] font-black text-brand-dark/50 uppercase tracking-widest">Role</th>
                  <th className="px-6 py-3 text-left text-[10px] font-black text-brand-dark/50 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-3 text-left text-[10px] font-black text-brand-dark/50 uppercase tracking-widest">Joined</th>
                  <th className="px-6 py-3 text-right text-[10px] font-black text-brand-dark/50 uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-warm/10">
                {INITIAL_USERS.map((user) => (
                  <tr key={user.id} className="hover:bg-brand-light/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-brand-warm/30 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm font-bold text-brand-dark">{user.name}</p>
                          <p className="text-[10px] font-medium text-brand-dark/40">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-[10px] font-black px-2 py-1 rounded bg-brand-warm/20 text-brand-dark uppercase tracking-tighter">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="h-2 w-2 rounded-full bg-green-500 inline-block mr-1"></span>
                      <span className="text-[10px] font-bold text-brand-dark/60">Active</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[10px] font-medium text-brand-dark/40">Jan 12, 2024</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button className="text-brand-primary hover:brightness-90 text-[10px] font-black uppercase mr-3">Edit</button>
                      <button className="text-red-600 hover:text-red-800 text-[10px] font-black uppercase">Ban</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
             <table className="min-w-full divide-y divide-brand-warm/10">
              <thead className="bg-brand-light">
                <tr>
                  <th className="px-6 py-3 text-left text-[10px] font-black text-brand-dark/50 uppercase tracking-widest">Job Title</th>
                  <th className="px-6 py-3 text-left text-[10px] font-black text-brand-dark/50 uppercase tracking-widest">Company</th>
                  <th className="px-6 py-3 text-left text-[10px] font-black text-brand-dark/50 uppercase tracking-widest">Reports</th>
                  <th className="px-6 py-3 text-right text-[10px] font-black text-brand-dark/50 uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-warm/10">
                {INITIAL_JOBS.map((job) => (
                  <tr key={job.id} className="hover:bg-brand-light/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="text-sm font-bold text-brand-dark">{job.title}</p>
                      <p className="text-[10px] font-medium text-brand-dark/40">{job.type}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-bold text-brand-dark/60">{job.company}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-tighter">0 reports</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button className="text-brand-primary hover:brightness-90 text-[10px] font-black uppercase mr-3">View</button>
                      <button className="text-red-600 hover:text-red-800 text-[10px] font-black uppercase">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
