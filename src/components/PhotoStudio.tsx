import React, { useState } from 'react';
import { 
  Camera, 
  Heart, 
  Users, 
  Award, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle,
  Star,
  Image,
  Video,
  Palette,
  Gift,
  Calendar,
  CheckCircle,
  ArrowRight,
  Play,
  Download
} from 'lucide-react';

const PhotoStudio: React.FC = () => {
  const [selectedGallery, setSelectedGallery] = useState<string>('wedding');

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
      price: "₹2,000 - ₹8,000",
      description: "Professional individual and family portraits",
      features: ["Studio lighting", "Multiple poses", "Digital editing", "Print ready photos"]
    },
    {
      id: 3,
      name: "Event Photography",
      hindi: "इवेंट फोटोग्राफी",
      icon: <Camera className="w-8 h-8" />,
      price: "₹5,000 - ₹20,000",
      description: "Birthday parties, corporate events, celebrations",
      features: ["Event coverage", "Candid shots", "Group photos", "Same day delivery"]
    },
    {
      id: 4,
      name: "Product Photography",
      hindi: "प्रोडक्ट फोटोग्राफी",
      icon: <Image className="w-8 h-8" />,
      price: "₹500 - ₹2,000",
      description: "Professional product photos for business",
      features: ["White background", "Multiple angles", "High resolution", "E-commerce ready"]
    },
    {
      id: 5,
      name: "Video Services",
      hindi: "वीडियो सेवाएं",
      icon: <Video className="w-8 h-8" />,
      price: "₹8,000 - ₹30,000",
      description: "Professional videography and editing",
      features: ["HD recording", "Professional editing", "Music integration", "Multiple formats"]
    },
    {
      id: 6,
      name: "Photo Editing",
      hindi: "फोटो एडिटिंग",
      icon: <Palette className="w-8 h-8" />,
      price: "₹50 - ₹500",
      description: "Professional photo retouching and enhancement",
      features: ["Color correction", "Background removal", "Skin retouching", "Creative effects"]
    }
  ];

  const galleryCategories = [
    { id: 'wedding', name: 'Weddings', hindi: 'शादी' },
    { id: 'portrait', name: 'Portraits', hindi: 'पोर्ट्रेट' },
    { id: 'events', name: 'Events', hindi: 'इवेंट्स' },
    { id: 'products', name: 'Products', hindi: 'प्रोडक्ट्स' }
  ];

  const testimonials = [
    {
      name: "राज शर्मा",
      event: "Wedding Photography",
      rating: 5,
      comment: "Amazing photography! They captured every moment beautifully. Highly recommended for weddings.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "प्रिया गुप्ता",
      event: "Family Portrait",
      rating: 5,
      comment: "Professional service and excellent quality photos. Very satisfied with the results.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "अमित पटेल",
      event: "Corporate Event",
      rating: 5,
      comment: "Great work on our company event. Photos were delivered on time and quality was excellent.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
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
              Professional Photography Services in Haliwav, Sanchor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:+91-7742861375"
                className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all font-semibold flex items-center space-x-3 shadow-lg"
              >
                <Phone className="w-6 h-6" />
                <span>Book Now</span>
              </a>
              <a
                href="https://wa.me/7742861375"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all font-semibold flex items-center space-x-3 shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📷 Our Photography Services
            </h2>
            <p className="text-lg text-gray-600">
              Professional photography services for all your special moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-lg mb-4 text-purple-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{service.hindi}</p>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <div className="text-lg font-bold text-purple-600 mb-4">
                  {service.price}
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                  Book Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🖼️ Our Work Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Browse through our portfolio of beautiful moments captured
            </p>
          </div>

          {/* Gallery Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedGallery(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedGallery === category.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                {category.name} ({category.hindi})
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="relative group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg overflow-hidden">
                  <img
                    src={`https://images.pexels.com/photos/${1000000 + item * 100000}/pexels-photo-${1000000 + item * 100000}.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop`}
                    alt={`Gallery ${item}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop`;
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ⭐ What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Read testimonials from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.event}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              📞 Ready to Capture Your Moments?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Contact us today to book your photography session
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <Phone className="w-8 h-8 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-purple-100">+91-7742861375</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <MessageCircle className="w-8 h-8 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-purple-100">Quick Response</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <MapPin className="w-8 h-8 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-purple-100">Haliwav, Sanchor</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+91-7742861375"
                className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all font-semibold flex items-center justify-center space-x-3 shadow-lg"
              >
                <Phone className="w-6 h-6" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/7742861375"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all font-semibold flex items-center justify-center space-x-3 shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoStudio;