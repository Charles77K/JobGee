export interface IUserProfile {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  resume?: string | null; // File path as string
  about_me?: string | null;
  phone_no?: number | undefined;
  experience_level?: number | null;
  location?: string | null;
  created_at: string; // ISO date string
  is_staff: boolean;
  is_active: boolean;
  date_joined: string; // ISO date string
}

export interface IJobSearch{
  user: IUserProfile;
  job_title: string;
  location: string;
}