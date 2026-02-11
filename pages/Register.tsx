
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import { UserRole } from '../types';

const Register: React.FC = () => {
  const [role, setRole] = useState<UserRole>(UserRole.SEEKER);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await register({ name, email, role });
      navigate('/');
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-light flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-black text-brand-dark">
          Create your HireHub account
        </h2>
        <p className="mt-2 text-center text-sm text-brand-dark/60 font-medium">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-brand-primary hover:brightness-90">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm sm:rounded-lg sm:px-10 border border-brand-warm/30">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex bg-brand-light p-1 rounded-lg border border-brand-warm/30">
              <button
                type="button"
                className={`flex-1 py-2 text-sm font-black rounded-md transition-all ${role === UserRole.SEEKER ? 'bg-brand-primary shadow-sm text-white' : 'text-brand-dark/50 hover:text-brand-dark'}`}
                onClick={() => setRole(UserRole.SEEKER)}
              >
                Job Seeker
              </button>
              <button
                type="button"
                className={`flex-1 py-2 text-sm font-black rounded-md transition-all ${role === UserRole.EMPLOYER ? 'bg-brand-primary shadow-sm text-white' : 'text-brand-dark/50 hover:text-brand-dark'}`}
                onClick={() => setRole(UserRole.EMPLOYER)}
              >
                Employer
              </button>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-bold text-brand-dark">
                {role === UserRole.SEEKER ? 'Full Name' : 'Company Name'}
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-brand-warm rounded-md shadow-sm placeholder-brand-warm/50 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm bg-brand-light/20 font-medium"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-brand-dark">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-brand-warm rounded-md shadow-sm placeholder-brand-warm/50 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm bg-brand-light/20 font-medium"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-brand-dark">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-brand-warm rounded-md shadow-sm placeholder-brand-warm/50 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm bg-brand-light/20 font-medium"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-md text-sm font-black text-white bg-brand-primary hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:opacity-50 transition-all"
              >
                {isLoading ? 'Creating account...' : 'Create account'}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-xs font-bold text-brand-dark/40 uppercase tracking-tight">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
