import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import RoadMap from './components/RoadMap';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Features from './components/Features';



function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <RoadMap />
      <FAQ />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
