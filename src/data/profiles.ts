import { Profile } from '../types';

export const defaultProfiles: Profile[] = [
  {
    id: '1',
    name: 'Usuario 1',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '2',
    name: 'Usuario 2',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '3',
    name: 'Usuario 3',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '4',
    name: 'Niños',
    avatar: 'https://images.unsplash.com/photo-1590649880765-91b1956b8276?auto=format&fit=crop&q=80&w=200',
    isKids: true,
  }
];