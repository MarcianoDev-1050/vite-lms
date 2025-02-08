import React from 'react';
import { Profile } from '../types';
import { defaultProfiles } from '../data/profiles';

interface ProfileSelectionProps {
  onProfileSelect: (profile: Profile) => void;
}

export default function ProfileSelection({ onProfileSelect }: ProfileSelectionProps) {
  return (
    <div className="min-h-screen bg-[#141414] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-4xl md:text-5xl mb-8">¿Quién está viendo?</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
          {defaultProfiles.map((profile) => (
            <button
              key={profile.id}
              onClick={() => onProfileSelect(profile)}
              className="group flex flex-col items-center space-y-4"
            >
              <div className="relative rounded-md overflow-hidden group-hover:ring-4 ring-white transition duration-200">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-32 h-32 object-cover group-hover:border-4 border-white transition duration-200"
                />
              </div>
              <span className="text-gray-400 group-hover:text-white transition duration-200">
                {profile.name}
              </span>
            </button>
          ))}
          <button className="group flex flex-col items-center space-y-4">
            <div className="w-32 h-32 rounded-md bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition duration-200">
              <span className="text-gray-400 text-5xl group-hover:text-white">+</span>
            </div>
            <span className="text-gray-400 group-hover:text-white transition duration-200">
              Agregar Perfil
            </span>
          </button>
        </div>
        <button className="border border-gray-400 text-gray-400 px-4 py-2 hover:text-white hover:border-white transition duration-200">
          Administrar Perfiles
        </button>
      </div>
    </div>
  );
}