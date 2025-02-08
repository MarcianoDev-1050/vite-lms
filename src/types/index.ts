export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  duration: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  instructor: string;
  featured?: boolean;
  progress?: number;
}

export interface Category {
  id: string;
  name: string;
  courses: Course[];
}

export interface Profile {
  id: string;
  name: string;
  avatar: string;
  isKids?: boolean;
}