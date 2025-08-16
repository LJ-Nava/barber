import React from 'react';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Barberos from './components/Barberos';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Barberos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;