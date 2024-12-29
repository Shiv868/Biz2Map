import React, { useState } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com'; // Import EmailJS

export default function Footer() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate message
    if (!message) {
      setError('Please enter a message.');
      return;
    }

    setLoading(true);

    // Send message using EmailJS
    const formData = {
      message: message, // This is the field that corresponds to the placeholder in the template
    };

    emailjs.send(
      'service_kc95t1o', // Replace with your Service ID
      'template_h5cvykc', // Replace with your Template ID
      formData,
      'LRBPe4rTM2SjXQWEp' // Replace with your User ID
    )
      .then((response) => {
        setLoading(false);
        setMessage(''); // Clear message field on success
        alert('Thank you for your message!');
      }, (error) => {
        setLoading(false);
        setError('Something went wrong, please try again later.');
      });
  };

  return (
    <footer id="footer" className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12">
          {/* Biz2Map Overview */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-6">Biz2Map</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering businesses to establish a strong digital presence and grow with innovative solutions.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                <span>contact@biz2map.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                <span>(+91) 9392523649</span>
              </li>
              <li className="flex items-center">
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Message Form */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Send Us a Message</h3>
            <p className="text-gray-400 mb-4">
              We'd love to hear from you. Send us your message below.
            </p>
            <form onSubmit={handleSubmit}>
              <textarea 
                placeholder="Enter your Email & message" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 text-gray-300 focus:ring-cyan-400 focus:border-cyan-400"
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <button 
                type="submit" 
                className="mt-4 w-full py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Biz2Map. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
