import React, { useState, useEffect } from 'react';
import { Play, Info } from 'lucide-react';
import { courses } from '../data/courses';

export default function Billboard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredCourses = courses.filter(course => course.featured);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredCourses.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredCourses.length]);

  const currentCourse = featuredCourses[currentIndex];

  return (
    <div className="relative h-[56.25vw]">
      <div className="absolute inset-0 transition-opacity duration-1000">
        <img 
          className="w-full h-full object-cover brightness-[60%]"
          src={currentCourse.thumbnail}
          alt={currentCourse.title}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#141414]" />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <h1 className="text-white text-2xl md:text-5xl lg:text-6xl font-bold">
          {currentCourse.title}
        </h1>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%]">
          {currentCourse.description}
        </p>
        <div className="flex items-center mt-3 md:mt-4 gap-3">
          <button className="bg-white text-black rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex items-center hover:bg-opacity-80 transition">
            <Play className="w-4 h-4 md:w-6 md:h-6 mr-1" /> Comenzar
          </button>
          <button className="bg-gray-500 text-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex items-center hover:bg-opacity-80 transition">
            <Info className="w-4 h-4 md:w-6 md:h-6 mr-1" /> Más Info
          </button>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {featuredCourses.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-gray-500'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}