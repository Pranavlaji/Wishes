import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import SelectedWorks from './components/SelectedWorks';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <WhyUs />
      <SelectedWorks />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
