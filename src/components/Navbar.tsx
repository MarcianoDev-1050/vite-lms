import React, { useState, useEffect } from 'react';
import { Search, Bell, User } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="px-4 md:px-16 py-6 flex items-center">
        <div className="flex items-center space-x-2 text-red-600">
          <h1 className="text-2xl font-bold">Vite Materiales</h1>
        </div>
        <div className="flex-grow ml-8">
          <ul className="flex items-center space-x-4">
            <li className="text-white hover:text-gray-300 cursor-pointer">Inicio</li>
            <li className="text-white hover:text-gray-300 cursor-pointer">Mi Aprendizaje</li>
            <li className="text-white hover:text-gray-300 cursor-pointer">Explorar</li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="w-6 h-6 text-gray-200 cursor-pointer" />
          <Bell className="w-6 h-6 text-gray-200 cursor-pointer" />
          <User className="w-6 h-6 text-gray-200 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}