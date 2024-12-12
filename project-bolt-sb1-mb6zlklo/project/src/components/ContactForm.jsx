import React, { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire à implémenter
    console.log('Formulaire soumis:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-8 animate-fade-in">
            Contactez-nous
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="w-full pl-10 pr-4 py-3 bg-blue-950/50 border border-blue-400/30 rounded-lg 
                           text-white placeholder-blue-300 focus:outline-none focus:ring-2 
                           focus:ring-blue-400 transition-all duration-300
                           hover:border-blue-400 animate-slide-up"
                  required
                />
              </div>
            </div>

            <div className="group">
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  className="w-full pl-10 pr-4 py-3 bg-blue-950/50 border border-blue-400/30 rounded-lg 
                           text-white placeholder-blue-300 focus:outline-none focus:ring-2 
                           focus:ring-blue-400 transition-all duration-300
                           hover:border-blue-400 animate-slide-up"
                  required
                />
              </div>
            </div>

            <div className="group">
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Votre téléphone"
                  className="w-full pl-10 pr-4 py-3 bg-blue-950/50 border border-blue-400/30 rounded-lg 
                           text-white placeholder-blue-300 focus:outline-none focus:ring-2 
                           focus:ring-blue-400 transition-all duration-300
                           hover:border-blue-400 animate-slide-up"
                />
              </div>
            </div>

            <div className="group">
              <div className="relative">
                <FaComments className="absolute left-3 top-5 text-blue-300" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  rows="5"
                  className="w-full pl-10 pr-4 py-3 bg-blue-950/50 border border-blue-400/30 rounded-lg 
                           text-white placeholder-blue-300 focus:outline-none focus:ring-2 
                           focus:ring-blue-400 transition-all duration-300
                           hover:border-blue-400 animate-slide-up"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 
                       rounded-lg transition-all duration-300 transform hover:scale-105
                       flex items-center justify-center space-x-2 group animate-slide-up"
            >
              <span>Envoyer</span>
              <FaPaperPlane className="transform group-hover:translate-x-1 group-hover:-translate-y-1 
                                     transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;