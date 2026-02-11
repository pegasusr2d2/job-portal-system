
export enum UserRole {
  SEEKER = 'seeker',
  EMPLOYER = 'employer',
  ADMIN = 'admin'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  profilePic?: string;
  resume?: string;
  skills?: string[];
  experience?: string;
  companyName?: string;
  companyBio?: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string; // Full-time, Remote, etc.
  description: string;
  requirements: string[];
  postedBy: string; // Employer ID
  createdAt: string;
  applicantsCount: number;
}

export interface Application {
  id: string;
  jobId: string;
  userId: string;
  userName: string;
  userEmail: string;
  resume: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  appliedDate: string;
  jobTitle: string;
  companyName: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Partial<User> & { password?: string }) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
}
