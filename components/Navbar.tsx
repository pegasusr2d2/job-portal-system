
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../App';
import { UserRole } from '../types';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Find Jobs', path: '/jobs' },
    { name: 'Companies', path: '/companies' },
    { name: 'Career Tips', path: '/tips' },
  ];

  const getDashboardLink = () => {
    if (!user) return null;
    switch (user.role) {
      case UserRole.SEEKER: return '/dashboard/seeker';
      case UserRole.EMPLOYER: return '/dashboard/employer';
      case UserRole.ADMIN: return '/dashboard/admin';
      default: return '/';
    }
  };

  return (
    <nav className="bg-white border-b border-brand-warm/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="text-xl font-bold text-brand-dark tracking-tight">HireHub</span>
            </Link>
            <div className="hidden md:ml-8 md:flex md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    location.pathname === link.path ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-brand-dark/70 hover:text-brand-primary transition-colors'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link to={getDashboardLink() || '/'} className="text-sm font-medium text-brand-dark/70 hover:text-brand-primary">
                  Dashboard
                </Link>
                <div className="h-6 w-px bg-brand-warm"></div>
                <div className="flex items-center gap-3">
                  <Link to="/profile" className="flex items-center gap-2 text-sm font-medium text-brand-dark">
                    <img className="h-8 w-8 rounded-full bg-brand-light object-cover border border-brand-warm" src={user.profilePic || 'https://picsum.photos/32'} alt="" />
                    <span>{user.name}</span>
                  </Link>
                  <button
                    onClick={logout}
                    className="text-sm font-medium text-red-600 hover:text-red-700"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="text-sm font-medium text-brand-dark/70 hover:text-brand-primary">
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="bg-brand-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:brightness-110 shadow-sm transition"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-dark/50 hover:text-brand-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-brand-warm/30 p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-dark/70 hover:text-brand-primary hover:bg-brand-light"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-brand-warm/30">
            {user ? (
              <>
                <Link
                  to={getDashboardLink() || '/'}
                  className="block px-3 py-2 rounded-md text-base font-medium text-brand-dark/70 hover:bg-brand-light"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => { logout(); setMobileMenuOpen(false); }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-2">
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-brand-dark/70 hover:bg-brand-light text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-brand-primary text-white text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
