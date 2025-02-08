import React from 'react';
import CourseCard from './CourseCard';
import { Category } from '../types';

interface CourseRowProps {
  category: Category;
}

export default function CourseRow({ category }: CourseRowProps) {
  return (
    <div className="px-4 md:px-16 mt-4 space-y-8">
      <div>
        <h2 className="text-white text-xl md:text-2xl font-semibold">{category.name}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
          {category.courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}