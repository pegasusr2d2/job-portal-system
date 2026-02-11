
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth, useJobs } from '../App';
import { UserRole } from '../types';

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const { jobs, savedJobs, toggleSaveJob } = useJobs();
  const navigate = useNavigate();
  
  const job = jobs.find(j => j.id === id);
  const [applied, setApplied] = useState(false);
  const [isApplying, setIsApplying] = useState(false);

  if (!job) return <div className="p-20 text-center text-brand-dark">Job not found</div>;

  const isSaved = savedJobs.includes(job.id);

  const handleApply = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    if (user.role !== UserRole.SEEKER) {
      alert("Only job seekers can apply for jobs.");
      return;
    }
    setIsApplying(true);
    setTimeout(() => {
      setIsApplying(false);
      setApplied(true);
    }, 1500);
  };

  const handleToggleSave = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    toggleSaveJob(job.id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link to="/jobs" className="text-brand-primary hover:brightness-90 text-sm font-medium flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all jobs
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-brand-warm/30 overflow-hidden">
        <div className="p-8 border-b border-brand-warm/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-brand-dark">{job.title}</h1>
              <div className="mt-2 flex items-center gap-4 text-brand-dark/70">
                <span className="flex items-center gap-1 font-medium">
                  <svg className="h-5 w-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {job.company}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="h-5 w-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </span>
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              {applied ? (
                <div className="bg-green-100 text-green-800 px-6 py-3 rounded-lg font-bold text-center">
                  Application Sent
                </div>
              ) : (
                <button
                  onClick={handleApply}
                  disabled={isApplying}
                  className="w-full md:w-auto px-8 py-3 bg-brand-primary text-white rounded-lg font-bold hover:brightness-110 shadow-md transition flex items-center justify-center"
                >
                  {isApplying ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Applying...
                    </>
                  ) : "Apply Now"}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="p-8 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4 border-l-4 border-brand-primary pl-4">Job Description</h2>
              <p className="text-brand-dark/80 leading-relaxed whitespace-pre-line">{job.description}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4 border-l-4 border-brand-primary pl-4">Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-brand-dark/80">
                {job.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-brand-light p-6 rounded-lg border border-brand-warm">
              <h3 className="text-sm font-semibold text-brand-dark uppercase tracking-wider mb-4">Job Summary</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs text-brand-dark/50 uppercase">Salary</dt>
                  <dd className="text-sm font-semibold text-brand-dark">{job.salary}</dd>
                </div>
                <div>
                  <dt className="text-xs text-brand-dark/50 uppercase">Job Type</dt>
                  <dd className="text-sm font-semibold text-brand-dark">{job.type}</dd>
                </div>
                <div>
                  <dt className="text-xs text-brand-dark/50 uppercase">Applicants</dt>
                  <dd className="text-sm font-semibold text-brand-dark">{job.applicantsCount} applications</dd>
                </div>
                <div>
                  <dt className="text-xs text-brand-dark/50 uppercase">Date Posted</dt>
                  <dd className="text-sm font-semibold text-brand-dark">{new Date(job.createdAt).toLocaleDateString()}</dd>
                </div>
              </dl>
            </div>

            <div className="bg-brand-primary p-6 rounded-lg text-white shadow-lg">
              <h3 className="font-bold mb-2">{isSaved ? "Saved!" : "Save this job"}</h3>
              <p className="text-white/80 text-xs mb-4">Track this opportunity in your dashboard.</p>
              <button 
                onClick={handleToggleSave}
                className={`w-full py-2 rounded-md font-bold text-sm transition ${isSaved ? 'bg-white text-brand-primary' : 'bg-brand-dark text-white hover:brightness-110'}`}
              >
                {isSaved ? "Saved to List" : "Save for Later"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
