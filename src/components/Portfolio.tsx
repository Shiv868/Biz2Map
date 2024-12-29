import React from 'react';
import { ExternalLink } from 'lucide-react';

const clients = [
  {
    name: "Cafe Delights",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&h=400",
    category: "Restaurant",
    description: "150% increase in visits",
    link: "#"
  },
  {
    name: "Tech Solutions Inc",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&h=400",
    category: "Technology",
    description: "200% growth in leads",
    link: "#"
  },
  {
    name: "Fitness First",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&h=400",
    category: "Health & Fitness",
    description: "80% more signups",
    link: "#"
  },
  {
    name: "Green Gardens",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&h=400",
    category: "Landscaping",
    description: "2x service coverage",
    link: "#"
  }
];

export default function Portfolio() {
  return (
    <section id="clients" className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Clients
          </h2>
          <p className="text-xl text-gray-400">
            See how we've helped businesses achieve remarkable growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300"
            >
              <div className="aspect-w-3 aspect-h-2 overflow-hidden">
                <img 
                  src={client.image} 
                  alt={client.name}
                  className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-white">{client.name}</h3>
                  <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 rounded-full text-xs inline-block w-fit">
                    {client.category}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-2">{client.description}</p>
                <a 
                  href={client.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm mt-3 group"
                >
                  View Case Study
                  <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}