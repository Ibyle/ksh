export type Role = 'Admin' | 'Editor' | 'Member';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  order: number;
  icon?: string;
}

export interface Teaching {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  series?: string;
  author: string;
  coverImage: string;
  content: string; // Rich HTML string
  scriptureReferences: string[];
  createdDate: string;
  published: boolean;
  featured: boolean;
  readingTime: number; // in minutes
  summary: string;
}