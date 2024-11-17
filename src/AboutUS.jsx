import  { useState, useEffect } from 'react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 py-16 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div 
          className={`
            text-center mb-16 transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}
          `}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <div className={`
            w-24 h-1 bg-blue-500 mx-auto transition-all duration-1000 delay-300
            ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
          `}></div>
        </div>

        {/* Content Cards */}
        <div className="space-y-8">
          {/* Introduction */}
          <div 
            className={`
              bg-white/10 backdrop-blur-md rounded-lg p-6 transition-all duration-700
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}
            `}
            style={{ transitionDelay: '400ms' }}
          >
            <p className="text-gray-300 leading-relaxed">
              LD Engineering (Pvt) ltd, is the leading supplier of various type of pumps, air blowers, measuring equipment's, water meters, level controllers and accessories in Sri Lanka since 2008.
            </p>
          </div>

          {/* Value Statement */}
          <div 
            className={`
              bg-white/10 backdrop-blur-md rounded-lg p-6 transition-all duration-700
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
            `}
            style={{ transitionDelay: '600ms' }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Our Value</h3>
            <p className="text-gray-300 leading-relaxed">
              Our value is to satisfy our customers with a range of comprehensive products with superior quality and technology and make our user's life simply more pleasant.
            </p>
          </div>

          {/* Range */}
          <div 
            className={`
              bg-white/10 backdrop-blur-md rounded-lg p-6 transition-all duration-700
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}
            `}
            style={{ transitionDelay: '800ms' }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Product Range</h3>
            <p className="text-gray-300 leading-relaxed">
              We have wide range of pumps to meet our customers need in major application.
            </p>
          </div>

          {/* Service Commitment */}
          <div 
            className={`
              bg-white/10 backdrop-blur-md rounded-lg p-6 transition-all duration-700
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
            `}
            style={{ transitionDelay: '1000ms' }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Our Commitment</h3>
            <p className="text-gray-300 leading-relaxed">
              LD Engineering has intensified our spirit and attitude in our quest for perpetual betterment to persist in aggressively adhering to the policy of "Customer First, Quality First, Service First" to ensure customers with quality after-sales services.
            </p>
          </div>

          {/* Vision */}
          <div 
            className={`
              bg-white/10 backdrop-blur-md rounded-lg p-6 transition-all duration-700
              ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}
            `}
            style={{ transitionDelay: '1200ms' }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              We expect to give our customers with high quality products and perfect service in establishing excellent cornerstones for our sustainable business operation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;