import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Building2, Camera } from 'lucide-react';

interface FooterProps {
  businessType: 'emitra' | 'studio';
}

const Footer: React.FC<FooterProps> = ({ businessType }) => {
  const currentYear = new Date().getFullYear();
  
  const footerData = businessType === 'studio' 
    ? {
        title: "Ramdev Photo Studio",
        subtitle: "Professional Photography Services",
        services: [
          "Wedding Photography",
          "Portrait Sessions",
          "Event Coverage", 
          "Product Photography",
          "Video Services",
          "Photo Editing"
        ],
        bgColor: "bg-purple-900",
        icon: <Camera className="w-6 h-6" />
      }
    : {
        title: "Ramdev eMitra Center",
        subtitle: "राजस्थान सरकार अधिकृत डिजिटल सेवा केंद्र",
        services: [
          "Birth Certificate",
          "Caste Certificate", 
          "Mobile Recharge",
          "Bill Payments",
          "Banking Services",
          "Government Schemes"
        ],
        bgColor: "bg-gray-900",
        icon: <Building2 className="w-6 h-6" />
      };

  return (
    <footer className={`${footerData.bgColor} text-white py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">{footerData.title}</h3>
                <p className="text-sm text-gray-300">{footerData.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {businessType === 'studio' 
                ? "Capturing your precious moments with professional photography services. We specialize in weddings, portraits, events, and commercial photography with state-of-the-art equipment and experienced photographers."
                : "हम हलीवाव, सांचोर में स्थित राजस्थान सरकार द्वारा अधिकृत eMitra केंद्र हैं। सभी सरकारी और डिजिटल सेवाएं एक ही स्थान पर उपलब्ध हैं।"
              }
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+91-7742861375"
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </a>
              <a
                href="https://wa.me/7742861375"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              {footerData.icon}
              <span className="ml-2">Our Services</span>
            </h4>
            <ul className="space-y-2">
              {footerData.services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Haliwav, Sanchor</p>
                  <p className="text-gray-400 text-sm">Jalore, Rajasthan</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300">+91-7742861375</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon - Sat</p>
                  <p className="text-gray-400 text-sm">9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {footerData.title}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-400">
                {businessType === 'studio' 
                  ? "Professional Photography Services"
                  : "राजस्थान सरकार अधिकृत"
                }
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">Haliwav, Sanchor</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;