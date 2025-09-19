// Shared type definitions for the ISCF website

export interface Event {
  id: number;
  title: string;
  date: string;
  status: 'upcoming' | 'active' | 'completed' | 'cancelled';
  attendees: number;
  description?: string;
  location?: string;
  maxAttendees?: number;
}

export interface Photo {
  id: number;
  title: string;
  category: string;
  date: string;
  count: number;
  images?: string[];
}

export interface Program {
  id: number;
  title: string;
  schedule: string;
  status: 'active' | 'paused' | 'inactive' | 'draft';
  participants: number;
  description?: string;
  maxParticipants?: number;
  coordinator?: string;
  contactEmail?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}