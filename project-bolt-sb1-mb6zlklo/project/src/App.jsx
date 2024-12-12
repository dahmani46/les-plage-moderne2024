import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;