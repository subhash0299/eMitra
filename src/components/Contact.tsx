import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail, Camera } from 'lucide-react';

interface ContactProps {
  businessType: 'emitra' | 'studio';
}

const Contact: React.FC<ContactProps> = ({ businessType }) => {
  const contactInfo = businessType === 'studio' 
    ? {
        title: "📸 Contact Ramdev Photo Studio",
        subtitle: "Book your photography session today",
        services: [
          "Wedding Photography",
          "Portrait Sessions", 
          "Event Coverage",
          "Product Photography"
        ],
        bgColor: "from-purple-600 to-pink-600",
        icon: <Camera className="w-8 h-8" />
      }
    : {
        title: "📞 संपर्क करें",
        subtitle: "किसी भी सेवा के लिए हमसे संपर्क करें",
        services: [
          "सभी प्रमाण पत्र सेवाएं",
          "मोबाइल रिचार्ज व बिल भुगतान",
          "बैंकिंग सेवाएं",
          "सरकारी योजनाएं"
        ],
        bgColor: "from-orange-600 to-red-600",
        icon: <Phone className="w-8 h-8" />
      };

  return (
    <section className={`py-16 bg-gradient-to-r ${contactInfo.bgColor} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {contactInfo.title}
          </h2>
          <p className="text-xl text-opacity-90">
            {contactInfo.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              {contactInfo.icon}
              <span className="ml-3">Get in Touch</span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone Number</h4>
                  <p className="text-opacity-90">+91-7742861375</p>
                  <p className="text-sm text-opacity-75">Available 9 AM - 7 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">WhatsApp</h4>
                  <p className="text-opacity-90">Quick Response</p>
                  <p className="text-sm text-opacity-75">Instant messaging support</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-opacity-90">Haliwav, Sanchor</p>
                  <p className="text-sm text-opacity-75">Jalore, Rajasthan</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Working Hours</h4>
                  <p className="text-opacity-90">Monday - Saturday</p>
                  <p className="text-sm text-opacity-75">9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services & CTA */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Services</h3>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 mb-6">
              <ul className="space-y-3">
                {contactInfo.services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-4">
              <a
                href="tel:+91-7742861375"
                className="w-full bg-green-600 text-white py-4 px-6 rounded-xl hover:bg-green-700 transition-colors font-semibold flex items-center justify-center space-x-3 shadow-lg"
              >
                <Phone className="w-6 h-6" />
                <span>📞 Call Now</span>
              </a>
              
              <a
                href="https://wa.me/7742861375"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white py-4 px-6 rounded-xl hover:bg-green-600 transition-colors font-semibold flex items-center justify-center space-x-3 shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                <span>💬 WhatsApp</span>
              </a>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-opacity-75">
                {businessType === 'studio' 
                  ? "Professional photography services with quick turnaround"
                  : "तुरंत सेवा • विश्वसनीय • सुरक्षित"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;