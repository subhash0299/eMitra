import React from 'react';
import { Award, Users, Clock, Shield, Camera, Star, MapPin, Phone } from 'lucide-react';

interface AboutProps {
  businessType: 'emitra' | 'studio';
}

const About: React.FC<AboutProps> = ({ businessType }) => {
  if (businessType === 'studio') {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                📸 About Ramdev Photo Studio
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                With over 10 years of experience in professional photography, Ramdev Photo Studio 
                has been capturing precious moments and creating lasting memories for families and 
                businesses in Haliwav and surrounding areas.
              </p>
              <p className="text-gray-600 mb-8">
                हमारा फोटो स्टूडियो आधुनिक उपकरणों और अनुभवी फोटोग्राफरों के साथ आपकी हर खुशी 
                के पल को संजोने के लिए तैयार है। शादी-विवाह से लेकर पारिवारिक फोटो तक, हम हर 
                अवसर के लिए बेहतरीन फोटोग्राफी सेवा प्रदान करते हैं।
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Camera className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">1000+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Star className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8">
                <img
                  src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Photography Studio"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Haliwav, Sanchor, Jalore</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">+91-7742861375</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Mon-Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "5000+",
      label: "खुश ग्राहक",
      color: "text-blue-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "150+",
      label: "सेवाएं",
      color: "text-green-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "24/7",
      label: "सहायता",
      color: "text-orange-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: "100%",
      label: "सुरक्षित",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🏛️ हमारे बारे में
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Ramdev eMitra Center राजस्थान सरकार द्वारा अधिकृत डिजिटल सेवा केंद्र है। 
              हम हलीवाव, सांचोर में स्थित हैं और पिछले कई वर्षों से विश्वसनीय सेवा प्रदान कर रहे हैं।
            </p>
            <p className="text-gray-600 mb-8">
              हमारा मिशन है कि सभी सरकारी और डिजिटल सेवाएं आम जनता तक आसानी से पहुंचाना। 
              हमारी अनुभवी टीम आपकी हर समस्या का समाधान तुरंत करने के लिए तैयार है।
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className={`${stat.color} mx-auto mb-2`}>
                    {stat.icon}
                  </div>
                  <div className={`text-2xl font-bold ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="eMitra Center"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">राजस्थान सरकार अधिकृत</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">100% सुरक्षित सेवा</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">अनुभवी टीम</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;