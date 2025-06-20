import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  FileText, 
  Zap, 
  Building2, 
  CreditCard, 
  Shield, 
  Users, 
  Clock, 
  CheckCircle,
  Home,
  Heart,
  User,
  Smartphone,
  Receipt,
  Banknote,
  Award,
  Fingerprint,
  List,
  ArrowLeft
} from 'lucide-react';
import ServiceModal from './components/ServiceModal';
import ServicesPage from './components/ServicesPage';

function App() {
  const phoneNumber = "+91-9876543210";
  const whatsappNumber = "919876543210";
  
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showServicesPage, setShowServicesPage] = useState(false);

  const serviceDetails = {
    "जन्म प्रमाण पत्र": {
      name: "जन्म प्रमाण पत्र",
      english: "Birth Certificate",
      details: {
        description: "जन्म प्रमाण पत्र (birth certificate) बनवाने के लिए, आपको कुछ दस्तावेजों की आवश्यकता होगी। आमतौर पर, आपको आवेदन पत्र, माता-पिता का पहचान प्रमाण (जैसे आधार कार्ड या राशन कार्ड), और जन्म स्थान (अस्पताल या घर) से संबंधित दस्तावेज जमा करने होंगे।",
        documents: [
          "जन्म प्रमाण पत्र के लिए आवेदन पत्र - इसे आप ऑनलाइन या ऑफलाइन प्राप्त कर सकते हैं",
          "माता-पिता का पहचान प्रमाण - आधार कार्ड, राशन कार्ड, या भामाशाह पहचान पत्र",
          "जन्म स्थान का प्रमाण - अस्पताल से जन्म प्रमाण पत्र या घर पर जन्म के लिए शपथ पत्र",
          "माता-पिता का संयुक्त फोटो शपथ पत्र - हस्ताक्षरित, हाल के फोटो के साथ",
          "माता-पिता की पासपोर्ट आकार की तस्वीरें",
          "अन्य वैध दस्तावेज - यदि आवश्यक हो"
        ],
        process: [
          "ऑनलाइन आवेदन: राजस्थान नागरिक पंजीकरण प्रणाली की आधिकारिक वेबसाइट पर जाएं",
          "ऑफलाइन आवेदन: नजदीकी जन्म विवरण कार्यालय या नगर निगम में जाएं",
          "आवश्यक दस्तावेज जमा करें: आवेदन पत्र और अन्य दस्तावेजों को जमा करें",
          "प्रमाण पत्र प्राप्त करें: आमतौर पर 7 से 10 दिनों में तैयार हो जाता है"
        ],
        timeline: "आमतौर पर 7 से 10 दिनों में प्रमाण पत्र तैयार हो जाता है",
        importantNotes: [
          "जन्म के 21 दिनों के भीतर प्रमाण पत्र बनवाना बेहतर है",
          "सरकारी अस्पताल में जन्म होने पर वहां से प्रमाण पत्र प्राप्त करना आसान होता है",
          "21 दिनों के बाद प्रमाण पत्र बनवाने पर विलंब शुल्क लग सकता है"
        ]
      }
    },
    "मृत्यु प्रमाण पत्र": {
      name: "मृत्यु प्रमाण पत्र",
      english: "Death Certificate",
      details: {
        description: "मृत्यु प्रमाण पत्र (Death Certificate) बनवाने के लिए, आपको कुछ आवश्यक दस्तावेजों की आवश्यकता होगी। मुख्य रूप से, आपको मृतक के पहचान प्रमाण, मृत्यु का प्रमाण, और आवेदन पत्र जमा करना होगा।",
        documents: [
          "मृतक का पहचान प्रमाण - आधार कार्ड, पैन कार्ड, मतदाता पहचान पत्र, राशन कार्ड, पासपोर्ट",
          "मृत्यु का प्रमाण - अस्पताल से जारी मृत्यु प्रमाण पत्र, श्मशान घाट की रसीद",
          "शपथ पत्र - मृत्यु का कारण और स्थान का उल्लेख के साथ",
          "आवेदन पत्र - मृत्यु प्रमाण पत्र के लिए विधिवत भरा हुआ",
          "आवेदक का पहचान पत्र और मोबाइल नंबर",
          "मृतक के परिवार के सदस्यों का पहचान प्रमाण"
        ],
        process: [
          "निर्धारित आवेदन पत्र प्राप्त करें",
          "आवेदन पत्र को सही-सही भरें",
          "आवश्यक दस्तावेजों को संलग्न करें",
          "आवेदन पत्र को संबंधित कार्यालय में जमा करें",
          "यदि आवश्यक हो तो शुल्क का भुगतान करें"
        ],
        timeline: "आमतौर पर 7 से 15 दिनों में प्रमाण पत्र तैयार हो जाता है",
        importantNotes: [
          "मृत्यु के 21 दिनों के भीतर मृत्यु प्रमाण पत्र के लिए आवेदन करना अनिवार्य है",
          "21 दिनों के बाद आवेदन करने पर जुर्माना लग सकता है",
          "ऑनलाइन या ऑफलाइन दोनों तरीकों से आवेदन कर सकते हैं",
          "आवेदन पत्र में दी गई जानकारी सही होनी चाहिए"
        ]
      }
    },
    "जाति प्रमाण पत्र": {
      name: "जाति प्रमाण पत्र",
      english: "Caste Certificate",
      details: {
        description: "जाति प्रमाण पत्र (Caste Certificate) बनवाने के लिए, आपको कुछ दस्तावेजों की आवश्यकता होगी। ये दस्तावेज आमतौर पर आवेदन पत्र, पहचान प्रमाण, निवास प्रमाण, और जाति के प्रमाण के रूप में प्रस्तुत किए जाते हैं।",
        documents: [
          "आवेदन पत्र - संबंधित विभाग से प्राप्त या ऑनलाइन डाउनलोड किया गया",
          "पहचान प्रमाण - आधार कार्ड, मतदाता पहचान पत्र, पासपोर्ट, अन्य सरकारी पहचान पत्र",
          "निवास प्रमाण - राशन कार्ड, मतदाता सूची, बिजली बिल, पानी का बिल",
          "जाति का प्रमाण - पिता का जाति प्रमाण पत्र, स्कूल छोड़ने का प्रमाण पत्र",
          "राजस्व रिकॉर्ड - जमाबंदी या अन्य दस्तावेज जो जाति को प्रमाणित करता हो",
          "आवेदक की नवीनतम फोटो, मोबाइल नंबर, शपथ पत्र (यदि आवश्यक हो)"
        ],
        process: [
          "संबंधित विभाग से आवेदन पत्र प्राप्त करें",
          "आवेदन पत्र को पूरी जानकारी के साथ भरें",
          "सभी आवश्यक दस्तावेजों को संलग्न करें",
          "तहसील या संबंधित कार्यालय में आवेदन जमा करें",
          "सत्यापन प्रक्रिया के बाद प्रमाण पत्र प्राप्त करें"
        ],
        timeline: "आमतौर पर 15 से 30 दिनों में प्रमाण पत्र तैयार हो जाता है",
        importantNotes: [
          "कुछ मामलों में आय प्रमाण पत्र भी आवश्यक हो सकता है",
          "आवेदन पत्र और दस्तावेजों की प्रतियां स्व-सत्यापित होनी चाहिए",
          "अधिक जानकारी के लिए राजस्थान सरकार की वेबसाइट देखें",
          "सभी दस्तावेज मूल और फोटोकॉपी दोनों लेकर जाएं"
        ]
      }
    },
    "मूल निवास प्रमाण पत्र": {
      name: "मूल निवास प्रमाण पत्र",
      english: "Domicile Certificate",
      details: {
        description: "मूल निवास प्रमाण पत्र (Domicile Certificate) बनवाने के लिए, आपको कुछ आवश्यक दस्तावेजों की आवश्यकता होगी। इनमें आधार कार्ड, राशन कार्ड, वोटर आईडी कार्ड, और निवास स्थान को प्रमाणित करने वाले अन्य दस्तावेज शामिल हैं।",
        documents: [
          "पहचान प्रमाण - आधार कार्ड, पैन कार्ड, वोटर आईडी कार्ड, पासपोर्ट, ड्राइविंग लाइसेंस",
          "निवास प्रमाण - राशन कार्ड, बिजली बिल, पानी का बिल, किराये का समझौता, बैंक पासबुक",
          "शैक्षणिक योग्यता की प्रतिलिपि",
          "जन्म प्रमाण पत्र",
          "शपथ पत्र (बालीग होने की दशा में)",
          "दो सक्षम अधिकारियों द्वारा जारी प्रमाण पत्र",
          "ग्रामीण क्षेत्रों के लिए पटवारी रिपोर्ट"
        ],
        process: [
          "ऑफलाइन या ऑनलाइन आवेदन करें",
          "ऑफलाइन के लिए तहसील या ई-मित्र केंद्र पर जाएं",
          "ऑनलाइन के लिए राजस्थान सरकार की आधिकारिक वेबसाइट पर जाएं",
          "आवेदन पत्र भरें और दस्तावेज संलग्न करें",
          "आवेदन शुल्क का भुगतान करें"
        ],
        timeline: "आमतौर पर 15 से 30 दिनों में प्रमाण पत्र तैयार हो जाता है",
        importantNotes: [
          "आवेदन पत्र में दी गई जानकारी सही और सटीक होनी चाहिए",
          "आवश्यक दस्तावेजों की प्रतियां संलग्न करें",
          "आवेदन शुल्क का भुगतान करें",
          "आवेदन पत्र जमा करने के बाद पावती रसीद मिलेगी",
          "कुछ दस्तावेज राज्य और क्षेत्र के अनुसार भिन्न हो सकते हैं"
        ]
      }
    },
    "विवाह प्रमाण पत्र": {
      name: "विवाह प्रमाण पत्र",
      english: "Marriage Certificate",
      details: {
        description: "विवाह प्रमाण पत्र (Marriage Certificate) बनवाने के लिए, आपको कुछ दस्तावेजों की आवश्यकता होगी। इन दस्तावेजों में वर और वधू दोनों के लिए आयु प्रमाण पत्र, पते का प्रमाण, संयुक्त फोटो, और विवाह संपन्न होने का प्रमाण शामिल हैं।",
        documents: [
          "विधिवत भरा हुआ और हस्ताक्षरित विवाह पंजीकरण आवेदन पत्र",
          "वर और वधू दोनों के लिए आयु प्रमाण - जन्म प्रमाण पत्र, स्कूल छोड़ने का प्रमाण पत्र, या पासपोर्ट",
          "वर और वधू दोनों के लिए पते का प्रमाण - राशन कार्ड, मतदाता पहचान पत्र, पासपोर्ट, या ड्राइविंग लाइसेंस",
          "जोड़े की हाल की संयुक्त तस्वीरें - शादी समारोह के दौरान की",
          "विवाह की तिथि और स्थान की पुष्टि करने वाला नोटरीकृत शपथ पत्र",
          "गवाहों के शपथ पत्र - विवाह संपन्न कराने वाले पुरोहित/काजी/पादरी या दो गवाहों के",
          "10वीं की मार्कशीट, माता-पिता के आधार कार्ड, या विवाह स्थल से प्रमाण पत्र (यदि आवश्यक हो)"
        ],
        process: [
          "नजदीकी ई-मित्र केंद्र या ऑनलाइन पोर्टल के माध्यम से आवेदन करें",
          "आवेदन पत्र और आवश्यक दस्तावेजों को जमा करें",
          "आवेदन शुल्क का भुगतान करें",
          "सत्यापन प्रक्रिया के बाद विवाह प्रमाण पत्र जारी किया जाएगा"
        ],
        timeline: "आमतौर पर 15 दिन से 60 दिन तक का समय लग सकता है",
        importantNotes: [
          "विशेष विवाह अधिनियम, 1954 के तहत पंजीकृत विवाह के लिए 30 दिनों की नोटिस अवधि होती है",
          "विवाह प्रमाण पत्र में किसी भी परिवर्तन के लिए वैध प्रमाण के साथ नया आवेदन करना होगा",
          "सभी दस्तावेज मूल और फोटोकॉपी दोनों लेकर जाएं",
          "आवेदन की स्थिति ऑनलाइन ट्रैक कर सकते हैं"
        ]
      }
    }
  };
  
  const services = [
    {
      category: "सरकारी प्रमाण पत्र (Government Certificates)",
      icon: <FileText className="w-8 h-8" />,
      items: [
        { name: "जन्म प्रमाण पत्र", english: "Birth Certificate", icon: <User className="w-5 h-5" /> },
        { name: "मृत्यु प्रमाण पत्र", english: "Death Certificate", icon: <Heart className="w-5 h-5" /> },
        { name: "जाति प्रमाण पत्र", english: "Caste Certificate", icon: <Award className="w-5 h-5" /> },
        { name: "मूल निवास प्रमाण पत्र", english: "Domicile Certificate", icon: <Home className="w-5 h-5" /> },
        { name: "विवाह प्रमाण पत्र", english: "Marriage Certificate", icon: <Users className="w-5 h-5" /> }
      ]
    },
    {
      category: "उपयोगिता बिल भुगतान (Utility Bill Payments)",
      icon: <Zap className="w-8 h-8" />,
      items: [
        { name: "बिजली बिल", english: "Electricity Bill", icon: <Zap className="w-5 h-5" /> },
        { name: "पानी का बिल", english: "Water Bill", icon: <Receipt className="w-5 h-5" /> },
        { name: "टेलीफोन बिल", english: "Telephone Bill", icon: <Phone className="w-5 h-5" /> },
        { name: "गैस बिल", english: "Gas Bill", icon: <Receipt className="w-5 h-5" /> }
      ]
    },
    {
      category: "सरकारी योजनाएं (Government Schemes)",
      icon: <Building2 className="w-8 h-8" />,
      items: [
        { name: "भामाशाह योजना", english: "Bhamashah Scheme", icon: <CreditCard className="w-5 h-5" /> },
        { name: "पेंशन योजना", english: "Pension Scheme", icon: <Users className="w-5 h-5" /> },
        { name: "खाद्य सुरक्षा योजना", english: "Food Security Scheme", icon: <Shield className="w-5 h-5" /> },
        { name: "सामाजिक सुरक्षा योजना", english: "Social Security Scheme", icon: <Users className="w-5 h-5" /> }
      ]
    },
    {
      category: "बैंकिंग सेवाएं (Banking Services)",
      icon: <CreditCard className="w-8 h-8" />,
      items: [
        { name: "खाता खोलना", english: "Account Opening", icon: <CreditCard className="w-5 h-5" /> },
        { name: "पैसे जमा/निकासी", english: "Deposit/Withdrawal", icon: <Banknote className="w-5 h-5" /> },
        { name: "धन ट्रांसफर", english: "Money Transfer", icon: <Banknote className="w-5 h-5" /> },
        { name: "बैंक बैलेंस", english: "Balance Inquiry", icon: <Receipt className="w-5 h-5" /> }
      ]
    },
    {
      category: "अन्य सेवाएं (Other Services)",
      icon: <Smartphone className="w-8 h-8" />,
      items: [
        { name: "पैन कार्ड आवेदन", english: "PAN Card Application", icon: <CreditCard className="w-5 h-5" /> },
        { name: "आयकर रिटर्न", english: "Income Tax Return", icon: <Receipt className="w-5 h-5" /> },
        { name: "मोबाइल रिचार्ज", english: "Mobile Recharge", icon: <Smartphone className="w-5 h-5" /> },
        { name: "DTH रिचार्ज", english: "DTH Recharge", icon: <Smartphone className="w-5 h-5" /> }
      ]
    },
    {
      category: "पुलिस सेवाएं (Police Services)",
      icon: <Shield className="w-8 h-8" />,
      items: [
        { name: "चरित्र सत्यापन", english: "Character Verification", icon: <Fingerprint className="w-5 h-5" /> },
        { name: "पुलिस क्लीयरेंस", english: "Police Clearance", icon: <Shield className="w-5 h-5" /> },
        { name: "डिजिटल सर्टिफिकेट", english: "Digital Certificate", icon: <Award className="w-5 h-5" /> }
      ]
    }
  ];

  const handleServiceClick = (serviceName: string) => {
    const service = serviceDetails[serviceName as keyof typeof serviceDetails];
    if (service) {
      setSelectedService(service);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  if (showServicesPage) {
    return (
      <div>
        {/* Header with Back Button */}
        <header className="bg-white shadow-md sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setShowServicesPage(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-6 h-6 text-gray-600" />
                </button>
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">eMitra केंद्र</h1>
                  <p className="text-sm text-gray-600">All Services</p>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <a href={`tel:${phoneNumber}`} className="contact-button bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700">
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </header>
        <ServicesPage />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">eMitra केंद्र</h1>
                <p className="text-sm text-gray-600">Digital Service Center</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setShowServicesPage(true)}
                className="contact-button bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
              >
                <List className="w-4 h-4" />
                <span>All Services</span>
              </button>
              <a href={`tel:${phoneNumber}`} className="contact-button bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700">
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              स्वागत है
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              हमारे eMitra केंद्र में!
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              सभी सरकारी सेवाएं एक जगह - तेज़, सरल और विश्वसनीय<br />
              <span className="text-base">All Government Services at One Place - Fast, Simple & Reliable</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${phoneNumber}`} className="contact-button bg-green-600 text-white px-8 py-3 rounded-xl flex items-center justify-center space-x-2 hover:bg-green-700 font-semibold">
                <Phone className="w-5 h-5" />
                <span>📞 कॉल करें</span>
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="contact-button bg-green-500 text-white px-8 py-3 rounded-xl flex items-center justify-center space-x-2 hover:bg-green-600 font-semibold">
                <MessageCircle className="w-5 h-5" />
                <span>📱 WhatsApp</span>
              </a>
              <button className="contact-button bg-orange-600 text-white px-8 py-3 rounded-xl flex items-center justify-center space-x-2 hover:bg-orange-700 font-semibold">
                <MapPin className="w-5 h-5" />
                <span>📍 स्थान देखें</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🛠️ हमारी प्रमुख सेवाएं
            </h2>
            <p className="text-lg text-gray-600">Our Key Services</p>
            <p className="text-sm text-orange-600 mt-2 font-semibold">
              💡 विस्तृत जानकारी के लिए किसी भी सेवा पर क्लिक करें
            </p>
            <div className="mt-4">
              <button
                onClick={() => setShowServicesPage(true)}
                className="contact-button bg-blue-600 text-white px-6 py-3 rounded-xl flex items-center justify-center space-x-2 hover:bg-blue-700 font-semibold mx-auto"
              >
                <List className="w-5 h-5" />
                <span>📋 सभी सेवाएं देखें (150+ Services)</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.category}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.items.map((item, itemIndex) => (
                    <button
                      key={itemIndex}
                      onClick={() => handleServiceClick(item.name)}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors cursor-pointer group w-full text-left"
                    >
                      <div className="text-orange-600 group-hover:text-orange-700">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm group-hover:text-orange-900">{item.name}</p>
                        <p className="text-xs text-gray-600">{item.english}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            ✅ क्यों चुनें हमें?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">तेज़ सेवा</h3>
              <p className="text-gray-600">Quick Service</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">सुरक्षित</h3>
              <p className="text-gray-600">100% Secure</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">विश्वसनीय</h3>
              <p className="text-gray-600">Trusted Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              📞 संपर्क करें
            </h2>
            <p className="text-lg text-gray-600">Get in Touch</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-orange-600" />
                  🕒 समय / Timing
                </h3>
                <p className="text-gray-700">
                  सोमवार से शनिवार<br />
                  <span className="font-semibold">9:00 AM - 6:00 PM</span><br />
                  <span className="text-sm text-gray-600">Monday to Saturday</span>
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-orange-600" />
                  📍 पता / Address
                </h3>
                <p className="text-gray-700">
                  Shop No. 123, Main Market<br />
                  Near Post Office<br />
                  Jaipur, Rajasthan - 302001
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <a href={`tel:${phoneNumber}`} className="contact-button w-full bg-blue-600 text-white p-4 rounded-xl flex items-center justify-center space-x-3 hover:bg-blue-700 text-lg font-semibold">
                <Phone className="w-6 h-6" />
                <span>📞 {phoneNumber}</span>
              </a>
              
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="contact-button w-full bg-green-600 text-white p-4 rounded-xl flex items-center justify-center space-x-3 hover:bg-green-700 text-lg font-semibold">
                <MessageCircle className="w-6 h-6" />
                <span>📱 WhatsApp पर संदेश</span>
              </a>
              
              <button className="contact-button w-full bg-red-600 text-white p-4 rounded-xl flex items-center justify-center space-x-3 hover:bg-red-700 text-lg font-semibold">
                <MapPin className="w-6 h-6" />
                <span>📍 Google Maps पर देखें</span>
              </button>

              <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                <p className="text-center text-orange-800 font-semibold">
                  💡 सभी सेवाओं के लिए पहले फोन करें<br />
                  <span className="text-sm font-normal">Call before visit for all services</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-green-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold">eMitra केंद्र</h3>
          </div>
          <p className="text-gray-400 mb-4">
            राजस्थान सरकार द्वारा अधिकृत eMitra केंद्र<br />
            Authorized eMitra Center by Government of Rajasthan
          </p>
          <p className="text-sm text-gray-500">
            © 2025 eMitra Center. All rights reserved. | सभी अधिकार सुरक्षित।
          </p>
        </div>
      </footer>

      {/* Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        service={selectedService}
      />
    </div>
  );
}

export default App;