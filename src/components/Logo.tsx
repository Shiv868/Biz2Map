import React from 'react';

export default function Logo({ className = "w-0 h-0" }: { className?: string }) {
  return (
    <img 
      src="/logo.png" 
      alt="Biz2Map Logo" 
      className={className}
    />
  );
}