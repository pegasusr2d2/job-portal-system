
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useJobs } from '../App';

const PostJob: React.FC = () => {
  const { user } = useAuth();
  const { addJob } = useJobs();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    location: '',
    salary: '',
    type: 'Full-time',
    description: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Actually add the job to our state
    addJob({
      title: formData.title,
      company: user?.companyName || 'Private Employer',
      location: formData.location,
      salary: formData.salary,
      type: formData.type,
      description: formData.description,
      requirements: formData.requirements.split('\n').filter(r => r.trim()),
      postedBy: user?.id || 'unknown'
    });

    setTimeout(() => {
      setIsLoading(false);
      navigate('/jobs'); // Navigate to listings to see the new job
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-brand-dark">Post a New Job</h1>
        <p className="text-brand-dark/50 font-medium">Reach India's top tech talent</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-brand-warm/30 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-brand-dark mb-1">Job Title</label>
              <input
                type="text"
                required
                placeholder="e.g. Senior Frontend Developer"
                className="w-full border-brand-warm rounded-md focus:ring-brand-primary focus:border-brand-primary bg-brand-light/20 font-medium"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-dark mb-1">Location</label>
              <input
                type="text"
                required
                placeholder="e.g. Bengaluru, KA or Remote"
                className="w-full border-brand-warm rounded-md focus:ring-brand-primary focus:border-brand-primary bg-brand-light/20 font-medium"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-dark mb-1">Salary Range (Annual)</label>
              <input
                type="text"
                required
                placeholder="e.g. ₹12 LPA - ₹18 LPA"
                className="w-full border-brand-warm rounded-md focus:ring-brand-primary focus:border-brand-primary bg-brand-light/20 font-medium"
                value={formData.salary}
                onChange={(e) => setFormData({...formData, salary: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-dark mb-1">Employment Type</label>
              <select
                className="w-full border-brand-warm rounded-md focus:ring-brand-primary focus:border-brand-primary bg-brand-light/20 font-medium"
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Remote</option>
                <option>Hybrid</option>
                <option>Internship</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-brand-dark mb-1">Job Description</label>
            <textarea
              required
              rows={6}
              placeholder="Describe the role, the team, and why candidates should join you..."
              className="w-full border-brand-warm rounded-md focus:ring-brand-primary focus:border-brand-primary bg-brand-light/20 font-medium"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-brand-dark mb-1">Requirements (one per line)</label>
            <textarea
              required
              rows={4}
              placeholder="Requirement 1&#10;Requirement 2&#10;Requirement 3"
              className="w-full border-brand-warm rounded-md focus:ring-brand-primary focus:border-brand-primary bg-brand-light/20 font-medium"
              value={formData.requirements}
              onChange={(e) => setFormData({...formData, requirements: e.target.value})}
            />
          </div>

          <div className="flex justify-end gap-4 pt-6 border-t border-brand-warm/20">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2 text-brand-dark/50 hover:text-brand-dark font-bold text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-2 bg-brand-primary text-white font-black rounded-lg hover:brightness-110 shadow-md transition-all disabled:opacity-50"
            >
              {isLoading ? 'Publishing...' : 'Publish Job'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
