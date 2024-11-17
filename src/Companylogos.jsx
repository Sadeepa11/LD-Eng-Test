import  { useState, useEffect } from 'react';

import apecLogo from './assets/logos/apecLogo.png';
import hcpLogo from './assets/logos/hcpLogo.png';
import walrusLogo from './assets/logos/walrusLogo.png';
import paragonLogo from './assets/logos/paragonLogo.png';
import caffiniLogo from './assets/logos/caffiniLogo.jpg';
import nantongLogo from './assets/logos/nantongLogo.jpg';
import sjeLogo from './assets/logos/sjeLogo.png';
import evakLogo from './assets/logos/evakLogo.jpg';
import zennerLogo from './assets/logos/zennerLogo.svg';



const CompanyLogosViewer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Sample company data - in real usage, this would be passed as props
  const companies = [
    { id: 1, name: 'APEC Pump Enterprise Corp', logo: apecLogo },
    { id: 2, name: 'HCP Pump Manufacturer Co.,Ltd', logo: hcpLogo },
    { id: 3, name: 'WALRUS Pump Co.,Ltd', logo: walrusLogo },
    { id: 4, name: 'PARAGON Pump', logo: paragonLogo },
    { id: 5, name: 'CAFFINI Pump', logo: caffiniLogo },
    { id: 6, name: 'SINOMEC Pump', logo: nantongLogo },
    { id: 7, name: 'Evak', logo: evakLogo },
    { id: 8, name: 'SJE ROMBUS', logo: sjeLogo },
    { id: 9, name: 'ZANNER', logo: zennerLogo }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-blue-900 p-8" >
      <div className="max-w-6xl mx-auto mt-10 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Partners
          </h1>
          <div className={`
            w-24 h-1 bg-blue-500 mx-auto transition-all duration-1000 delay-300
            ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
          `}></div>
        
        <div className=" mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className={`
                bg-white rounded-lg shadow-lg overflow-hidden
                transform transition-all duration-500 ease-out
                hover:scale-105 hover:shadow-xl
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              `}
              style={{
                transitionDelay: `${index * 10}ms`
              }}
            >
              <div className="p-6  items-center justify-center align-middle">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-100 h-auto relative">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className=" object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800">
                  {company.name}
                </h3>
        
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogosViewer;