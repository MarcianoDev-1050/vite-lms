import { Course, Category } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Seguridad en el Lugar de Trabajo',
    description: 'Aprende los protocolos esenciales de seguridad y las mejores prácticas para sitios de construcción.',
    thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000',
    category: 'Seguridad Laboral',
    duration: '2h 15m',
    level: 'Principiante',
    instructor: 'María Rodríguez',
    featured: true
  },
  {
    id: '2',
    title: 'Salud y Bienestar en la Construcción',
    description: 'Estrategias para mantener la salud y el bienestar en el entorno de la construcción.',
    thumbnail: 'https://images.pexels.com/photos/39671/pexels-photo-39671.jpeg',
    category: 'Salud y Bienestar',
    duration: '1h 45m',
    level: 'Intermedio',
    instructor: 'Juan Pérez',
    featured: true
  },
  {
    id: '3',
    title: 'Gestión de Operaciones en Construcción',
    description: 'Domina los procesos operativos en proyectos de construcción modernos.',
    thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000',
    category: 'Operaciones y Procesos',
    duration: '3h 30m',
    level: 'Avanzado',
    instructor: 'Carlos Sánchez',
    featured: true
  },
  {
    id: '4',
    title: 'Primeros Auxilios en Construcción',
    description: 'Aprende técnicas esenciales de primeros auxilios para situaciones de emergencia.',
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
    category: 'Primeros Auxilios',
    duration: '2h 00m',
    level: 'Principiante',
    instructor: 'Ana López',
    featured: true
  },
  {
    id: '5',
    title: 'Liderazgo en Proyectos de Construcción',
    description: 'Desarrolla habilidades de liderazgo efectivo en el sector de la construcción.',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
    category: 'Administración y Gestión',
    duration: '4h 15m',
    level: 'Avanzado',
    instructor: 'Roberto Martínez'
  },
  {
    id: '6',
    title: 'Desarrollo Personal en la Industria',
    description: 'Estrategias para el crecimiento profesional en la industria de la construcción.',
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000',
    category: 'Desarrollo Personal',
    duration: '2h 30m',
    level: 'Intermedio',
    instructor: 'Laura González'
  },
  {
    id: '7',
    title: 'Equipos de Protección Personal',
    description: 'Guía completa sobre el uso correcto de EPP en construcción.',
    thumbnail: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
    category: 'Seguridad Laboral',
    duration: '1h 30m',
    level: 'Principiante',
    instructor: 'Diego Morales',
    featured: true
  },
  {
    id: '8',
    title: 'Ergonomía en la Construcción',
    description: 'Mejores prácticas para prevenir lesiones y mantener la salud laboral.',
    thumbnail: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000',
    category: 'Salud y Bienestar',
    duration: '2h 45m',
    level: 'Intermedio',
    instructor: 'Patricia Vega'
  },
  {
    id: '9',
    title: 'Gestión de Residuos en Obra',
    description: 'Aprende a gestionar residuos de construcción de manera sostenible.',
    thumbnail: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000',
    category: 'Operaciones y Procesos',
    duration: '3h 00m',
    level: 'Intermedio',
    instructor: 'Fernando Ruiz'
  },
  {
    id: '10',
    title: 'Presupuestos y Costos',
    description: 'Metodologías efectivas para la gestión financiera de proyectos.',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000',
    category: 'Administración y Gestión',
    duration: '4h 30m',
    level: 'Avanzado',
    instructor: 'Carmen Torres'
  },
  {
    id: '11',
    title: 'RCP y Primeros Auxilios Avanzados',
    description: 'Técnicas avanzadas de respuesta a emergencias en obra.',
    thumbnail: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=1000',
    category: 'Primeros Auxilios',
    duration: '3h 15m',
    level: 'Avanzado',
    instructor: 'Dr. Javier Méndez'
  },
  {
    id: '12',
    title: 'Comunicación Efectiva',
    description: 'Habilidades de comunicación para líderes en construcción.',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000',
    category: 'Desarrollo Personal',
    duration: '2h 45m',
    level: 'Intermedio',
    instructor: 'Sofia Ramírez'
  }
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Cursos Destacados',
    courses: courses.filter(course => course.featured)
  },
  {
    id: '2',
    name: 'Seguridad Laboral',
    courses: courses.filter(course => course.category === 'Seguridad Laboral')
  },
  {
    id: '3',
    name: 'Salud y Bienestar',
    courses: courses.filter(course => course.category === 'Salud y Bienestar')
  },
  {
    id: '4',
    name: 'Operaciones y Procesos',
    courses: courses.filter(course => course.category === 'Operaciones y Procesos')
  },
  {
    id: '5',
    name: 'Administración y Gestión',
    courses: courses.filter(course => course.category === 'Administración y Gestión')
  },
  {
    id: '6',
    name: 'Primeros Auxilios',
    courses: courses.filter(course => course.category === 'Primeros Auxilios')
  },
  {
    id: '7',
    name: 'Desarrollo Personal',
    courses: courses.filter(course => course.category === 'Desarrollo Personal')
  }
];