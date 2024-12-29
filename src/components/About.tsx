import React from 'react';
import { MapPin, Image, Globe } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Claim Your Profile",
    text: "Take control of your Google My Business profile and start managing your online presence effectively.",
  },
  {
    icon: <Image className="w-8 h-8" />,
    title: "Enhance Your Listing",
    text: "Optimize your Google Maps listing with professional photos and accurate business details that convert.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Grow Your Presence",
    text: "Build a strong online presence with a professional website and local SEO optimization.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-400">
            Biz2Map is dedicated to helping businesses establish a powerful digital presence. 
            We simplify the process of getting your business noticed online.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-cyan-400 mb-6 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
