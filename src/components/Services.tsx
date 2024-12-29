import React from 'react';
import { MapPin, Map, Globe, Search } from 'lucide-react';

const services = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Google My Business Claiming & Management",
    description: "Establish and maintain your Google Business Profile to improve local visibility.",
  },
  {
    icon: <Map className="w-8 h-8" />,
    title: "Google Maps Optimization",
    description: "Enhance your presence on Google Maps with accurate information and rich content.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Professional Website Design",
    description: "Create a stunning, mobile-friendly website that converts visitors into customers.",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Local SEO Enhancements",
    description: "Improve your local search rankings to reach more customers in your area.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-800 border border-gray-700 rounded-lg hover:border-cyan-500 transition-colors">
              <div className="text-cyan-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}