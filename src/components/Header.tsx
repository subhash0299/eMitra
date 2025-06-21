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
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {businessType === 'emitra' ? 'Ramdev eMitra Center' : 'Ramdev Photo Studio'}
              </h1>
              <p className="text-sm text-gray-600">
                {businessType === 'emitra' ? 'Digital Services Center' : 'Professional Photography'}
              </p>
            </div>
          </div>

          {/* Business Toggle */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => onBusinessToggle('emitra')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                businessType === 'emitra'
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>eMitra</span>
            </button>
            <button
              onClick={() => onBusinessToggle('studio')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                businessType === 'studio'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Photo Studio</span>
            </button>
          </div>

          {/* Navigation - Desktop */}
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {/* Business Toggle - Mobile */}
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-1 mb-4">
              <button
                onClick={() => {
                  onBusinessToggle('emitra');
                  setIsMenuOpen(false);
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                  businessType === 'emitra'
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>eMitra</span>
              </button>
              <button
                onClick={() => {
                  onBusinessToggle('studio');
                  setIsMenuOpen(false);
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                  businessType === 'studio'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Camera className="w-4 h-4" />
                <span>Photo Studio</span>
              </button>
            </div>

            {/* Navigation - Mobile */}
            {businessType === 'emitra' && (
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setCurrentView('home');
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    currentView === 'home'
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </button>
                <button
                  onClick={() => {
                    setCurrentView('services');
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    currentView === 'services'
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  <List className="w-4 h-4" />
                  <span>All Services</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;