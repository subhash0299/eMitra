import React, { useState } from 'react';
import { Camera, Building2 } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicesPage from './components/ServicesPage';
import PhotoStudio from './components/PhotoStudio';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'services'>('home');
  const [businessMode, setBusinessMode] = useState<'emitra' | 'studio'>('emitra');

  const toggleBusinessMode = () => {
    setBusinessMode(prev => prev === 'emitra' ? 'studio' : 'emitra');
    setCurrentView('home'); // Reset to home when switching modes
  };

  if (businessMode === 'studio') {
    return (
      <div className="min-h-screen bg-white">
        {/* Toggle Button - Fixed Position */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={toggleBusinessMode}
            className="bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 border-2 border-purple-200 hover:border-purple-400 group"
            title="Switch to eMitra"
          >
            <div className="flex items-center space-x-2">
              <Building2 className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
              <span className="hidden sm:inline text-sm font-medium text-purple-600 group-hover:text-purple-700">
                eMitra
              </span>
            </div>
          </button>
        </div>
        
        <PhotoStudio />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Toggle Button - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleBusinessMode}
          className="bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 border-2 border-orange-200 hover:border-orange-400 group"
          title="Switch to Photo Studio"
        >
          <div className="flex items-center space-x-2">
            <Camera className="w-5 h-5 text-orange-600 group-hover:text-orange-700" />
            <span className="hidden sm:inline text-sm font-medium text-orange-600 group-hover:text-orange-700">
              Studio
            </span>
          </div>
        </button>
      </div>

      <Header currentView={currentView} setCurrentView={setCurrentView} />
      
      {currentView === 'home' ? (
        <>
          <Hero />
          <Services setCurrentView={setCurrentView} />
          <About />
          <Contact />
          <Footer />
        </>
      ) : (
        <ServicesPage />
      )}
    </div>
  );
}

export default App;