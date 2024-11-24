import { useState, useMemo } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from './assets/logos/LDEnglogo.png';

const NavBar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');

  const navItems = useMemo(() => [
    { name: 'Home', path: '/' },
    { 
      name: 'Products',
      dropdown: [
        { name: 'Submersible Pumps', path: 'submersible-pumps' },
        { name: 'Centrifugal Pump', path: 'centrifugal-pump' },
        { name: 'Fuel Pump', path: 'fuel-pump' },
        { name: 'Aerators & Air Pump', path: 'aerators-air-pump' },
        { name: 'Caffini Pump', path: 'https://www.caffinipumps.it/english/default.aspx' },
        { name: 'Paragon Pump', path: 'https://paragonpumpasia.com/' },
        { name: 'Air Stones', path: 'air-stones' },
        { name: 'Float Switch', path: 'float-switch' },
        { name: 'Couplings', path: 'couplings' },
        { name: 'Diffuser', path: 'diffuser' },
        { name: 'Other Accessories', path: 'other-accessories' },
        { name: 'Water Meter', path: 'water-meters' }
      ]
    },
    { name: 'Our Partners', action: () => scrollToSection(refs.companyLogosRef) },
    { name: 'About Us', action: () => scrollToSection(refs.aboutUsRef) },
    { name: 'Contact', action: () => scrollToSection(refs.footerRef) }
  ], [scrollToSection, refs]);

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? '' : itemName);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              <img src={logo} alt="Logo" className="w-24 h-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.name === 'Home' ? (
                  <Link
                    to="/"
                    className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ) : item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute z-50 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          {item.dropdown.map((subItem) => (
                            subItem.path.startsWith('http') ? (
                              <a
                                key={subItem.name}
                                href={subItem.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                              >
                                {subItem.name}
                              </a>
                            ) : (
                              <Link
                                key={subItem.path}
                                to={`/products/${subItem.path}`}
                                onClick={() => setActiveDropdown('')}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                              >
                                {subItem.name}
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={item.action}
                    className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600"
              aria-label="Toggle menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="bg-gray-50">
                        {item.dropdown.map((subItem) => (
                          subItem.path.startsWith('http') ? (
                            <a
                              key={subItem.name}
                              href={subItem.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-8 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                            >
                              {subItem.name}
                            </a>
                          ) : (
                            <Link
                              key={subItem.path}
                              to={`/products/${subItem.path}`}
                              onClick={() => {
                                setIsOpen(false);
                                setActiveDropdown('');
                              }}
                              className="block px-8 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                            >
                              {subItem.name}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => {
                      item.action();
                      setIsOpen(false);
                    }}
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
