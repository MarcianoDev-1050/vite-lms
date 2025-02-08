import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Billboard from './components/Billboard';
import CourseRow from './components/CourseRow';
import LoadingScreen from './components/LoadingScreen';
import ProfileSelection from './components/ProfileSelection';
import { categories } from './data/courses';
import { Profile } from './types';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!selectedProfile) {
    return <ProfileSelection onProfileSelect={setSelectedProfile} />;
  }

  return (
    <div className="relative min-h-screen bg-[#141414]">
      <Navbar />
      <main className="relative pb-24 lg:space-y-24">
        <Billboard />
        <section className="md:space-y-24">
          {categories.map((category) => (
            <CourseRow key={category.id} category={category} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;