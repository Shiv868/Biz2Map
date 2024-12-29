import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Menu, X } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [formData, setFormData] = useState({ email: '', message: '' }); // Form data

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        'service_kc95t1o', // Replace with your EmailJS service ID
        'template_h5cvykc', // Replace with your EmailJS template ID
        formData, // Form data
        'LRBPe4rTM2SjXQWEp' // Replace with your EmailJS user ID
      );
      alert('Message sent successfully!');
      setIsModalOpen(false); // Close modal after successful submission
      setFormData({ email: '', message: '' }); // Reset form
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-white">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
                Biz2Map
              </h2>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink onClick={() => scrollToSection('services')}>Services</NavLink>
            <NavLink onClick={() => scrollToSection('clients')}>Clients</NavLink>
            <NavLink onClick={() => scrollToSection('footer')}>Contact</NavLink>
            <Button variant="primary" className="ml-4" onClick={() => setIsModalOpen(true)}>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 rounded-lg mt-2 p-4">
            <div className="flex flex-col gap-4">
              <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
              <NavLink onClick={() => scrollToSection('services')}>Services</NavLink>
              <NavLink onClick={() => scrollToSection('clients')}>Portfolio</NavLink>
              <NavLink onClick={() => scrollToSection('footer')}>Contact</NavLink>
              <Button variant="primary" className="w-full" onClick={() => setIsModalOpen(true)}>Get Started</Button>
            </div>
          </div>
        )}
      </div>

      {/* Modal Popup for 'Get Started' */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-xl font-bold mb-4">Get Started</h2>
            <form onSubmit={handleSubmit}>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Email & Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="w-full p-2 border rounded-md" 
                  required
                ></textarea>
              </div>
              <div className="flex justify-between">
                <Button type="submit" variant="primary">Send</Button>
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  className="text-gray-500 hover:text-gray-700"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ 
  children, 
  onClick 
}: { 
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="text-gray-300 hover:text-white font-medium transition-colors"
    >
      {children}
    </button>
  );
}
