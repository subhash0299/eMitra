import React from 'react';
import { X, FileText,Phone, MessageCircle, Clock, AlertCircle, CheckCircle } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    name: string;
    english: string;
    details: {
      description: string;
      documents: string[];
      process: string[];
      timeline: string;
      importantNotes: string[];
    };
  } | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{service.name}</h2>
              <p className="text-lg text-gray-600">{service.english}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-orange-600" />
              विवरण (Description)
            </h3>
            <p className="text-gray-700 leading-relaxed">{service.details.description}</p>
          </div>

          {/* Required Documents */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-orange-600" />
              आवश्यक दस्तावेज (Required Documents)
            </h3>
            <div className="space-y-3">
              {service.details.documents.map((doc, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800">{doc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-orange-600" />
              आवेदन प्रक्रिया (Application Process)
            </h3>
            <div className="space-y-3">
              {service.details.process.map((step, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-800">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-green-600" />
              समय सीमा (Timeline)
            </h3>
            <p className="text-gray-800">{service.details.timeline}</p>
          </div>

          {/* Important Notes */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2 text-red-600" />
              महत्वपूर्ण बातें (Important Notes)
            </h3>
            <div className="space-y-3">
              {service.details.importantNotes.map((note, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800">{note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-orange-100 to-green-100 p-6 rounded-xl text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              💡 सहायता चाहिए? (Need Help?)
            </h3>
            <p className="text-gray-700 mb-4">
              इस सेवा के लिए आवेदन करने में सहायता के लिए हमसे संपर्क करें
            </p>
            <div className="flex flex-row gap-3 justify-center">
              <a
                href="tel:+91-7742861375"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center min-w-[120px]"
              >
                <Phone className="w-6 h-6 mr-2" />
                <span>Call</span>
              </a>
              <a
                href="https://wa.me/7742861375"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors font-semibold flex items-center justify-center min-w-[120px]"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;