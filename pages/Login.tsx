
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../App';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password. Try john@example.com, employer@techcorp.com, or admin@hirehub.com');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-brand-light">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-black text-brand-dark">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-brand-dark/60 font-medium">
          Or{' '}
          <Link to="/register" className="font-bold text-brand-primary hover:brightness-90">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm sm:rounded-lg sm:px-10 border border-brand-warm/30">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm font-bold text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}
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
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-brand-warm rounded-md shadow-sm placeholder-brand-warm/50 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm bg-brand-light/20 font-medium"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-brand-warm rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-brand-dark/70 font-medium">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-bold text-brand-primary hover:brightness-90">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-md text-sm font-black text-white bg-brand-primary hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:opacity-50 transition-all"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-brand-warm/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-brand-dark/40 font-bold uppercase tracking-widest text-[10px]">Demo Accounts</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <div className="text-xs text-brand-dark/50 text-center space-y-1 font-medium bg-brand-light/30 p-4 rounded-lg border border-brand-warm/10">
                <p>Seeker: <strong className="text-brand-primary">john@example.com</strong></p>
                <p>Employer: <strong className="text-brand-primary">employer@techcorp.com</strong></p>
                <p>Admin: <strong className="text-brand-primary">admin@hirehub.com</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
