import React, { useState } from 'react';
import { 
  Camera, 
  Image, 
  Users, 
  Heart, 
  GraduationCap, 
  Baby, 
  Crown, 
  Star,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Award,
  Palette,
  Printer,
  Gift,
  Calendar,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const PhotoStudio: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const services = [
    {
      id: 1,
      name: "Wedding Photography",
      hindi: "शादी की फोटोग्राफी",
      icon: <Heart className="w-8 h-8" />,
      price: "₹15,000 - ₹50,000",
      description: "Complete wedding photography and videography services",
      features: ["Pre-wedding shoot", "Wedding day coverage", "Reception photography", "Album design"]
    },
    {
      id: 2,
      name: "Portrait Photography",
      hindi: "पोर्ट्रेट फोटोग्राफी",
      icon: <Users className="w-8 h-8" />,
      price: "₹500 - ₹2,000",
      description: "Professional portrait and family photography",
      features: ["Individual portraits", "Family photos", "Professional headshots", "Studio lighting"]
    },
    {
      id: 3,
      name: "Baby Photography",
      hindi: "बच्चों की फोटोग्राफी",
      icon: <Baby className="w-8 h-8" />,
      price: "₹1,000 - ₹3,000",
      description: "Adorable baby and newborn photography sessions",
      features: ["Newborn shoots", "Baby milestones", "Family with baby", "Props included"]
    },
    {
      id: 4,
      name: "Event Photography",
      hindi: "इवेंट फोटोग्राफी",
      icon: <Calendar className="w-8 h-8" />,
      price: "₹5,000 - ₹20,000",
      description: "Coverage for all types of events and celebrations",
      features: ["Birthday parties", "Corporate events", "Religious ceremonies", "Social gatherings"]
    },
    {
      id: 5,
      name: "Passport Photos",
      hindi: "पासपोर्ट फोटो",
      icon: <Camera className="w-8 h-8" />,
      price: "₹50 - ₹200",
      description: "Official document photography services",
      features: ["Passport size", "Visa photos", "ID card photos", "Instant printing"]
    },
    {
      id: 6,
      name: "Photo Printing",
      hindi: "फोटो प्रिंटिंग",
      icon: <Printer className="w-8 h-8" />,
      price: "₹5 - ₹500",
      description: "High-quality photo printing and album services",
      features: ["Digital prints", "Canvas prints", "Photo albums", "Frame mounting"]
    }
  ];

  const gallery = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Wedding Photography",
      category: "Wedding"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Family Portrait",
      category: "Portrait"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Baby Photography",
      category: "Baby"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Event Coverage",
      category: "Event"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Professional Shoot",
      category: "Professional"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Couple Photography",
      category: "Couple"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "राज शर्मा",
      text: "बहुत ही बेहतरीन फोटोग्राफी सर्विस! हमारी शादी की तस्वीरें बहुत खूबसूरत आईं।",
      rating: 5,
      service: "Wedding Photography"
    },
    {
      id: 2,
      name: "प्रिया गुप्ता",
      text: "बच्चों की फोटो के लिए यहाँ आई थी, बहुत अच्छा काम करते हैं।",
      rating: 5,
      service: "Baby Photography"
    },
    {
      id: 3,
      name: "अमित कुमार",
      text: "पासपोर्ट फोटो के लिए आया था, तुरंत मिल गई और क्वालिटी भी अच्छी थी।",
      rating: 4,
      service: "Passport Photos"
    }
  ];

  React.useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % gallery.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, gallery.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % gallery.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Camera className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              📸 Ramdev Photo Studio
            </h1>
            <p className="text-xl md:text-2xl mb-2">रामदेव फोटो स्टूडियो</p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Capturing your precious moments with professional photography services in Haliwav, Sanchore
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+91-7742861375"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Book Now - 7742861375</span>
            </a>
            <a
              href="https://wa.me/7742861375"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🖼️ Our Work Gallery
            </h2>
            <p className="text-lg text-gray-600">हमारे काम के नमूने</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={gallery[currentSlide].image}
                alt={gallery[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{gallery[currentSlide].title}</h3>
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                  {gallery[currentSlide].category}
                </span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📷 Our Photography Services
            </h2>
            <p className="text-lg text-gray-600">हमारी फोटोग्राफी सेवाएं</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{service.hindi}</p>
                  <p className="text-2xl font-bold text-purple-600 mb-4">
                    {service.price}
                  </p>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                    <span>Book Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ⭐ Customer Reviews
            </h2>
            <p className="text-lg text-gray-600">ग्राहकों की राय</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            📞 Ready to Capture Your Moments?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to book your photography session
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6" />
              <span className="text-lg">+91-7742861375</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Haliwav, Sanchore</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-6 h-6" />
              <span className="text-lg">9 AM - 8 PM</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+91-7742861375"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/7742861375"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoStudio;