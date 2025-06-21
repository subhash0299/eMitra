import React from 'react';
import { 
  FileText, 
  CreditCard, 
  Smartphone, 
  Shield, 
  Zap, 
  Car, 
  Heart, 
  GraduationCap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

interface ServicesProps {
  onServiceClick: (service: any) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const popularServices = [
    {
      id: 1,
      name: "जन्म प्रमाण पत्र",
      english: "Birth Certificate",
      icon: <FileText className="w-8 h-8" />,
      description: "नवजात शिशु के लिए जन्म प्रमाण पत्र",
      color: "from-blue-500 to-blue-600",
      popular: true
    },
    {
      id: 2,
      name: "जाति प्रमाण पत्र",
      english: "Caste Certificate",
      icon: <Shield className="w-8 h-8" />,
      description: "सरकारी योजनाओं के लिए जाति प्रमाण पत्र",
      color: "from-green-500 to-green-600",
      popular: true
    },
    {
      id: 3,
      name: "मोबाइल रिचार्ज",
      english: "Mobile Recharge",
      icon: <Smartphone className="w-8 h-8" />,
      description: "सभी नेटवर्क का तुरंत रिचार्ज",
      color: "from-purple-500 to-purple-600",
      popular: true
    },
    {
      id: 4,
      name: "बिजली बिल भुगतान",
      english: "Electricity Bill Payment",
      icon: <Zap className="w-8 h-8" />,
      description: "ऑनलाइन बिजली बिल का भुगतान",
      color: "from-yellow-500 to-orange-500",
      popular: true
    },
    {
      id: 5,
      name: "ड्राइविंग लाइसेंस",
      english: "Driving License",
      icon: <Car className="w-8 h-8" />,
      description: "नया DL या रिन्यूअल",
      color: "from-red-500 to-red-600",
      popular: true
    },
    {
      id: 6,
      name: "पैन कार्ड सेवा",
      english: "PAN Card Service",
      icon: <CreditCard className="w-8 h-8" />,
      description: "नया पैन कार्ड या सुधार",
      color: "from-indigo-500 to-indigo-600",
      popular: true
    },
    {
      id: 7,
      name: "स्वास्थ्य बीमा",
      english: "Health Insurance",
      icon: <Heart className="w-8 h-8" />,
      description: "आयुष्मान भारत योजना",
      color: "from-pink-500 to-pink-600",
      popular: false
    },
    {
      id: 8,
      name: "छात्रवृत्ति आवेदन",
      english: "Scholarship Application",
      icon: <GraduationCap className="w-8 h-8" />,
      description: "विभिन्न छात्रवृत्ति योजनाएं",
      color: "from-teal-500 to-teal-600",
      popular: false
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "तुरंत सेवा",
      description: "सभी सेवाएं तत्काल उपलब्ध"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "सुरक्षित भुगतान",
      description: "100% सुरक्षित ऑनलाइन भुगतान"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "विशेषज्ञ सहायता",
      description: "अनुभवी टीम द्वारा सहायता"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "डिजिटल रसीद",
      description: "सभी लेनदेन की डिजिटल रसीद"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🏆 लोकप्रिय सेवाएं
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Most Popular Services • सबसे ज्यादा उपयोग की जाने वाली सेवाएं
          </p>
        </div>

        {/* Popular Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {popularServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onServiceClick(service)}
              className="service-card bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer p-6 border border-gray-100 relative overflow-hidden group"
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                  Popular
                </div>
              )}
              
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{service.english}</p>
              <p className="text-gray-700 text-sm mb-4">{service.description}</p>
              
              <div className="flex items-center text-orange-600 font-medium text-sm group-hover:text-orange-700">
                <span>विवरण देखें</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ✨ हमारी विशेषताएं
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            🔍 अन्य सेवाएं भी देखें
          </h3>
          <p className="text-lg mb-6 text-orange-100">
            हमारे पास 150+ सरकारी और डिजिटल सेवाएं उपलब्ध हैं
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            सभी सेवाएं देखें
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;