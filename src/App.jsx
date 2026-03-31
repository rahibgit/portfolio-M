import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import DigitalVault from './components/DigitalVault';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-soft-white text-slate-gray font-sans selection:bg-forest-green/20 selection:text-forest-green">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <DigitalVault />
      </main>

      <Footer />
    </div>
  );
}

export default App;
