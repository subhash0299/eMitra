import React from 'react';
import { Building2, Camera, Menu, X, Home, List } from 'lucide-react';

interface HeaderProps {
  currentView: 'home' | 'services' | 'studio';
  setCurrentView: (view: 'home' | 'services' | 'studio') => void;
  businessType: 'emitra' | 'studio';
  onBusinessToggle: (type: 'emitra' | 'studio') => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentView, 
  setCurrentView, 
  businessType, 
  onBusinessToggle 
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                {businessType === 'emitra' ? 'Ramdev eMitra Center' : 'Ramdev Photo Studio'}
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">
                {businessType === 'emitra' ? 'Digital Services Center' : 'Professional Photography'}
              </p>
            </div>
          </div>

          {/* Mobile Business Toggle - Always Visible */}
          <div className="flex items-center space-x-2">
            {/* Business Toggle - Mobile & Desktop */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1 shadow-sm">
              <button
                onClick={() => onBusinessToggle('emitra')}
                className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-md transition-all text-xs sm:text-sm font-medium ${
                  businessType === 'emitra'
                    ? 'bg-orange-600 text-white shadow-md transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">eMitra</span>
              </button>
              <button
                onClick={() => onBusinessToggle('studio')}
                className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-md transition-all text-xs sm:text-sm font-medium ${
                  businessType === 'studio'
                    ? 'bg-purple-600 text-white shadow-md transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Camera className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Studio</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            {businessType === 'emitra' && (
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 ml-2"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            )}
          </div>

          {/* Navigation - Desktop Only */}
          {businessType === 'emitra' && (
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setCurrentView('home')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  currentView === 'home'
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button
                onClick={() => setCurrentView('services')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  currentView === 'services'
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                <List className="w-4 h-4" />
                <span>All Services</span>
              </button>
            </nav>
          )}
        </div>

        {/* Mobile Business Title - Show when menu is closed */}
        {!isMenuOpen && (
          <div className="sm:hidden pb-2">
            <h1 className="text-sm font-bold text-gray-900 text-center">
              {businessType === 'emitra' ? '🏛️ Ramdev eMitra Center' : '📸 Ramdev Photo Studio'}
            </h1>
            <p className="text-xs text-gray-600 text-center">
              {businessType === 'emitra' ? 'Digital Services Center' : 'Professional Photography'}
            </p>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && businessType === 'emitra' && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {/* Mobile Business Title */}
            <div className="mb-4 text-center">
              <h1 className="text-lg font-bold text-gray-900">
                🏛️ Ramdev eMitra Center
              </h1>
              <p className="text-sm text-gray-600">Digital Services Center</p>
            </div>

            {/* Navigation - Mobile */}
            <div className="space-y-2">
              <button
                onClick={() => {
                  setCurrentView('home');
                  setIsMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-2 px-4 py-3 rounded-md transition-colors ${
                  currentView === 'home'
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                }`}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </button>
              <button
                onClick={() => {
                  setCurrentView('services');
                  setIsMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-2 px-4 py-3 rounded-md transition-colors ${
                  currentView === 'services'
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                }`}
              >
                <List className="w-5 h-5" />
                <span>All Services</span>
              </button>
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="text-center space-y-2">
                <p className="text-sm font-medium text-gray-900">📞 Contact Us</p>
                <p className="text-sm text-gray-600">+91-7742861375</p>
                <p className="text-xs text-gray-500">Haliwav, Sanchor, Jalore</p>
              </div>
            </div>
          </div>
        )}

        {/* Photo Studio Mobile Menu */}
        {isMenuOpen && businessType === 'studio' && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="text-center space-y-2">
              <h1 className="text-lg font-bold text-gray-900">
                📸 Ramdev Photo Studio
              </h1>
              <p className="text-sm text-gray-600">Professional Photography Services</p>
              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium text-gray-900">📞 Book Your Session</p>
                <p className="text-sm text-gray-600">+91-7742861375</p>
                <p className="text-xs text-gray-500">Haliwav, Sanchor, Jalore</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;