import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#141414] z-50 flex items-center justify-center">
      <div className="relative w-24 h-24">
        <div className="absolute border-4 border-t-red-600 border-r-transparent border-b-transparent border-l-transparent rounded-full w-full h-full animate-spin"></div>
        <div className="absolute border-4 border-t-transparent border-r-red-600 border-b-transparent border-l-transparent rounded-full w-3/4 h-3/4 top-1/8 left-1/8 animate-spin-slow"></div>
      </div>
    </div>
  );
}