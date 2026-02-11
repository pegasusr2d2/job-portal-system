
import React, { useState, useEffect, createContext, useContext } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { User, UserRole, AuthContextType, Job } from './types';
import { INITIAL_USERS, INITIAL_JOBS } from './services/mockData';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JobListings from './pages/JobListings';
import JobDetails from './pages/JobDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import SeekerDashboard from './pages/SeekerDashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Profile from './pages/Profile';
import PostJob from './pages/PostJob';
import Companies from './pages/Companies';
import CareerTips from './pages/CareerTips';

interface JobContextType {
  jobs: Job[];
  savedJobs: string[];
  addJob: (job: Omit<Job, 'id' | 'createdAt' | 'applicantsCount'>) => void;
  deleteJob: (id: string) => void;
  toggleSaveJob: (id: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);
const JobContext = createContext<JobContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) throw new Error("useJobs must be used within JobProvider");
  return context;
};

const ProtectedRoute = ({ children, allowedRoles }: { children?: React.ReactNode, allowedRoles?: UserRole[] }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/" replace />;
  return <>{children}</>;
};

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [jobs, setJobs] = useState<Job[]>(INITIAL_JOBS);
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('hirehub_user');
    if (savedUser) setUser(JSON.parse(savedUser));
    
    const savedJobsLocal = localStorage.getItem('hirehub_jobs');
    if (savedJobsLocal) setJobs(JSON.parse(savedJobsLocal));

    const savedList = localStorage.getItem('hirehub_saved_ids');
    if (savedList) setSavedJobs(JSON.parse(savedList));
  }, []);

  const login = async (email: string, _password?: string) => {
    const foundUser = INITIAL_USERS.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('hirehub_user', JSON.stringify(foundUser));
      navigate('/');
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const register = async (userData: Partial<User>) => {
    const newUser: User = {
      id: `u${Math.random().toString(36).substr(2, 9)}`,
      name: userData.name || '',
      email: userData.email || '',
      role: userData.role || UserRole.SEEKER,
      ...userData
    };
    setUser(newUser);
    localStorage.setItem('hirehub_user', JSON.stringify(newUser));
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('hirehub_user');
    navigate('/login');
  };

  const updateProfile = async (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('hirehub_user', JSON.stringify(updatedUser));
    }
  };

  const addJob = (jobData: Omit<Job, 'id' | 'createdAt' | 'applicantsCount'>) => {
    const newJob: Job = {
      ...jobData,
      id: `j${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      applicantsCount: 0
    };
    const updatedJobs = [newJob, ...jobs];
    setJobs(updatedJobs);
    localStorage.setItem('hirehub_jobs', JSON.stringify(updatedJobs));
  };

  const deleteJob = (id: string) => {
    const updatedJobs = jobs.filter(j => j.id !== id);
    setJobs(updatedJobs);
    localStorage.setItem('hirehub_jobs', JSON.stringify(updatedJobs));
  };

  const toggleSaveJob = (id: string) => {
    const newList = savedJobs.includes(id) 
      ? savedJobs.filter(savedId => savedId !== id)
      : [...savedJobs, id];
    setSavedJobs(newList);
    localStorage.setItem('hirehub_saved_ids', JSON.stringify(newList));
  };

  const authValue: AuthContextType = { user, login, register, logout, updateProfile };
  const jobValue: JobContextType = { jobs, savedJobs, addJob, deleteJob, toggleSaveJob };

  return (
    <AuthContext.Provider value={authValue}>
      <JobContext.Provider value={jobValue}>
        <div className="min-h-screen flex flex-col bg-brand-light">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jobs" element={<JobListings />} />
              <Route path="/jobs/:id" element={<JobDetails />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/tips" element={<CareerTips />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              <Route path="/profile" element={
                <ProtectedRoute><Profile /></ProtectedRoute>
              } />

              <Route path="/dashboard/seeker" element={
                <ProtectedRoute allowedRoles={[UserRole.SEEKER]}><SeekerDashboard /></ProtectedRoute>
              } />

              <Route path="/dashboard/employer" element={
                <ProtectedRoute allowedRoles={[UserRole.EMPLOYER]}><EmployerDashboard /></ProtectedRoute>
              } />

              <Route path="/dashboard/admin" element={
                <ProtectedRoute allowedRoles={[UserRole.ADMIN]}><AdminDashboard /></ProtectedRoute>
              } />

              <Route path="/post-job" element={
                <ProtectedRoute allowedRoles={[UserRole.EMPLOYER, UserRole.ADMIN]}><PostJob /></ProtectedRoute>
              } />
            </Routes>
          </main>
          <footer className="bg-brand-dark text-brand-light py-8 text-center text-sm border-t border-brand-primary/20">
            <p>© {new Date().getFullYear()} HireHub Professional. Built with Gemini & React.</p>
          </footer>
        </div>
      </JobContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
