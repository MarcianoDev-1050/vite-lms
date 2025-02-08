import React from 'react';
import { Play, Info } from 'lucide-react';

interface CourseCardProps {
  course: {
    title: string;
    thumbnail: string;
    duration: string;
    level: string;
    instructor: string;
  };
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group relative h-[12vw] min-h-[180px] cursor-pointer transition duration-200 ease-out hover:scale-105">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="rounded-md object-cover transition duration shadow-xl w-full h-full"
      />
      <div className="invisible absolute top-0 z-10 w-full h-full rounded-md opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 bg-black bg-opacity-80">
        <div className="flex flex-col justify-center h-full p-4">
          <h3 className="text-white text-lg font-semibold mb-2">{course.title}</h3>
          <div className="flex flex-col space-y-1 text-sm text-gray-400">
            <span>{course.duration}</span>
            <span>{course.level}</span>
            <span>Instructor: {course.instructor}</span>
          </div>
          <div className="flex items-center mt-4 space-x-2">
            <button className="flex items-center bg-white text-black rounded px-3 py-1 text-sm font-semibold">
              <Play className="w-4 h-4 mr-1" /> Reproducir
            </button>
            <button className="flex items-center bg-gray-600 text-white rounded px-3 py-1 text-sm font-semibold">
              <Info className="w-4 h-4 mr-1" /> Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}