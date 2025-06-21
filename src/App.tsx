import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicesPage from './components/ServicesPage';
import ServiceModal from './components/ServiceModal';
import PhotoStudio from './components/PhotoStudio';
import { serviceData } from './data/serviceData';

type ViewType = 'home' | 'services' | 'studio';
type BusinessType = 'emitra' | 'studio';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [businessType, setBusinessType] = useState<BusinessType>('emitra');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: any) => {
    const serviceDetails = serviceData[service.id];
    if (serviceDetails) {
      setSelectedService({
        ...service,
        details: serviceDetails
      });
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleBusinessToggle = (type: BusinessType) => {
    setBusinessType(type);
    setCurrentView('home');
  };

  const renderContent = () => {
    if (businessType === 'studio') {
      return <PhotoStudio />;
    }

    switch (currentView) {
      case 'services':
        return <ServicesPage />;
      case 'home':
      default:
        return (
          <>
            <Hero businessType={businessType} />
            <Services onServiceClick={handleServiceClick} />
            <About businessType={businessType} />
            <Contact businessType={businessType} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentView={currentView}
        setCurrentView={setCurrentView}
        businessType={businessType}
        onBusinessToggle={handleBusinessToggle}
      />
      
      {renderContent()}
      
      <Footer businessType={businessType} />
      
      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </div>
  );
}

export default App;