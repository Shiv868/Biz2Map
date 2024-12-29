import React from 'react';
import { Award, DollarSign, Clock, Users } from 'lucide-react';

const benefits = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Expert Guidance",
    description: "Years of experience in digital optimization",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Cost-Effective Solutions",
    description: "Affordable pricing for small and medium businesses",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Time-Saving",
    description: "We handle the technicalities so you can focus on your business",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Personalized Service",
    description: "Customized plans tailored to your needs",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Why Biz2Map?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors"
            >
              <div className="text-cyan-400 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
