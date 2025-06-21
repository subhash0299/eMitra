import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, CheckCircle, Camera, Award, Users } from 'lucide-react';

interface HeroProps {
  businessType: 'emitra' | 'studio';
}

const Hero: React.FC<HeroProps> = ({ businessType }) => {
  if (businessType === 'studio') {
    return (
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <Camera className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              📸 Ramdev Photo Studio
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Professional Photography Services in Haliwav
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <Award className="w-8 h-8 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Professional Quality</h3>
                <p className="text-sm text-purple-100">High-quality photography with modern equipment</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <Users className="w-8 h-8 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">All Occasions</h3>
                <p className="text-sm text-purple-100">Weddings, portraits, events, and more</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <Clock className="w-8 h-8 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Quick Service</h3>
                <p className="text-sm text-purple-100">Fast delivery and professional editing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero-gradient text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/logo.png" 
              alt="Ramdev eMitra Center" 
              className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            🏛️ Ramdev eMitra Center
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-800">
            राजस्थान सरकार द्वारा अधिकृत डिजिटल सेवा केंद्र
          </p>
          <p className="text-lg mb-8 text-gray-700">
            सभी सरकारी और डिजिटल सेवाएं एक ही स्थान पर • हलीवाव, सांचोर
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white bg-opacity-90 p-4 rounded-lg text-gray-900">
              <div className="text-2xl font-bold text-orange-600">150+</div>
              <div className="text-sm">सेवाएं</div>
            </div>
            <div className="bg-white bg-opacity-90 p-4 rounded-lg text-gray-900">
              <div className="text-2xl font-bold text-green-600">24/7</div>
              <div className="text-sm">सहायता</div>
            </div>
            <div className="bg-white bg-opacity-90 p-4 rounded-lg text-gray-900">
              <div className="text-2xl font-bold text-blue-600">5000+</div>
              <div className="text-sm">खुश ग्राहक</div>
            </div>
            <div className="bg-white bg-opacity-90 p-4 rounded-lg text-gray-900">
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-sm">सुरक्षित</div>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+91-7742861375"
              className="contact-button bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all font-semibold flex items-center space-x-3 shadow-lg"
            >
              <Phone className="w-6 h-6" />
              <span>📞 अभी कॉल करें</span>
            </a>
            <a
              href="https://wa.me/7742861375"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all font-semibold flex items-center space-x-3 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>💬 WhatsApp</span>
            </a>
          </div>

          {/* Location & Hours */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-90 p-6 rounded-lg text-gray-900">
              <div className="flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 text-red-600 mr-2" />
                <h3 className="font-semibold">📍 हमारा पता</h3>
              </div>
              <p className="text-sm">हलीवाव, सांचोर, जालोर, राजस्थान</p>
            </div>
            <div className="bg-white bg-opacity-90 p-6 rounded-lg text-gray-900">
              <div className="flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="font-semibold">🕒 समय</h3>
              </div>
              <p className="text-sm">सोमवार - शनिवार: 9:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;