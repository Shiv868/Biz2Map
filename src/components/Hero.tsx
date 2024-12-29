import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

export default function Hero() {
  // Function to scroll to the footer section when called
  const scrollToFooter = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to the clients section when called
  const scrollToClients = () => {
    const clientsElement = document.getElementById('clients');
    if (clientsElement) {
      clientsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2 space-y-8">
            <div className="flex items-center gap-4 mb-8">
              {/* Add logo or icon if needed */}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Put Your Business on the Map
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              We help businesses grow by claiming, optimizing, and enhancing their online presence. Join thousands of successful businesses that trust Biz2Map.
            </p>
            <div className="flex gap-4 items-center">
              <Button variant="primary" onClick={scrollToFooter}>
                Contact us Today
              </Button>
              <Button variant="secondary" className="group" onClick={scrollToClients}>
                Previous Works
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <div className="absolute inset-0" />
            <Logo className="w-15 h-15" />
          </div>
        </div>
      </div>
    </div>
  );
}
