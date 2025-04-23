import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Categories from './Categories';
import Benefits from './Benefits';
import CTA from './CTA';
import TrustedFeatures from './TrustedFeatures';
import BusinessHighlight from "./BusinessHighlight";
import Testimonial from './Testimonial';


export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <TrustedFeatures />
      <Benefits />
      <Categories />
      <BusinessHighlight />
      <Testimonial />
      <CTA />
    </div>
  );
}
