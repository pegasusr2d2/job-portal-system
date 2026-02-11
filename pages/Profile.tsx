
import React, { useState } from 'react';
import { useAuth } from '../App';

const Profile: React.FC = () => {
  const { user, updateProfile } = useAuth();
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    skills: user?.skills?.join(', ') || '',
    experience: user?.experience || '',
    companyBio: user?.companyBio || '',
    companyName: user?.companyName || ''
  });

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    await updateProfile({
      name: formData.name,
      skills: formData.skills.split(',').map(s => s.trim()).filter(s => s),
      experience: formData.experience,
      companyBio: formData.companyBio,
      companyName: formData.companyName
    });
    setTimeout(() => {
      setIsSaving(false);
      alert("Profile updated successfully!");
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-brand-dark">Your Profile</h1>
        <p className="text-brand-dark/50 font-medium">Manage your public information and preferences</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-brand-warm/30 overflow-hidden">
        <form onSubmit={handleSave} className="divide-y divide-brand-warm/20">
          <div className="p-8">
            <div className="flex items-center gap-6 mb-8">
              <div className="relative">
                <img
                  className="h-24 w-24 rounded-full border-4 border-brand-light object-cover shadow-sm"
                  src={user?.profilePic || 'https://picsum.photos/200'}
                  alt=""
                />
                <button type="button" className="absolute bottom-0 right-0 bg-brand-primary text-white p-2 rounded-full shadow-lg hover:brightness-110 transition-all">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
              <div>
                <h2 className="text-xl font-black text-brand-dark">{user?.name}</h2>
                <p className="text-brand-primary uppercase text-[10px] font-black tracking-widest">{user?.role}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-brand-dark mb-1">Display Name</label>
                <input
                  type="text"
                  className="w-full border-brand-warm rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary bg-brand-light/20 font-medium"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {user?.role === 'seeker' ? (
                <>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-brand-dark mb-1">Skills (comma separated)</label>
                    <input
                      type="text"
                      className="w-full border-brand-warm rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary bg-brand-light/20 font-medium"
                      value={formData.skills}
                      onChange={(e) => setFormData({...formData, skills: e.target.value})}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-brand-dark mb-1">Experience Summary</label>
                    <textarea
                      rows={4}
                      className="w-full border-brand-warm rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary bg-brand-light/20 font-medium"
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-brand-dark mb-1">Company Name</label>
                    <input
                      type="text"
                      className="w-full border-brand-warm rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary bg-brand-light/20 font-medium"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-brand-dark mb-1">Company Bio</label>
                    <textarea
                      rows={4}
                      className="w-full border-brand-warm rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary bg-brand-light/20 font-medium"
                      value={formData.companyBio}
                      onChange={(e) => setFormData({...formData, companyBio: e.target.value})}
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="px-8 py-6 bg-brand-warm/5 flex justify-between items-center">
            <p className="text-xs font-bold text-brand-dark/40 uppercase tracking-tight">Last updated {new Date().toLocaleDateString()}</p>
            <button
              type="submit"
              disabled={isSaving}
              className="bg-brand-primary text-white px-8 py-2 rounded-lg font-black text-sm hover:brightness-110 shadow-md transition-all disabled:opacity-50"
            >
              {isSaving ? 'Saving Changes...' : 'Save Profile'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
