import { Phone, MapPin, Mail, MessageCircle, Code } from 'lucide-react';
import logo from './assets/logos/LDEnglogo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="LD Engineering logo"
                className="w-20 h-auto rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold">LD Engineering</h3>
                <p className="text-gray-400 text-sm">Your partner for pumping solutions</p>
              </div>
            </div>
            <div className="text-gray-400">
              <a href="tel:+113050600" className="flex items-center gap-2 hover:text-white transition-colors" aria-label="Call LD Engineering at 0113050600">
                <Phone className="h-5 w-5" />
                <span>0113050600</span>
              </a>
              <a href="tel:+112504389" className="flex items-center gap-2 hover:text-white transition-colors" aria-label="Call LD Engineering at 0112504389">
                <Phone className="h-5 w-5" />
                <span>0112504389</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="mailto:ldengsales@sltnet.lk" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors" aria-label="Email LD Engineering">
                <Mail className="h-5 w-5" />
                <span>ldengsales@sltnet.lk</span>
              </a>
              <a href="https://wa.me/773999202" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors" aria-label="WhatsApp LD Engineering">
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <div className="flex items-start gap-2 text-gray-400">
              <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
              <span>
                No. 115, Maya Avenue,<br />
                Colombo 06,<br />
                Western Province, Sri Lanka.
              </span>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Find Us</h3>
            <div className="relative h-48 bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0868188339487!2d79.86828377448252!3d6.8802021189164755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bca4cd336a5%3A0x92fcc74f2ff0c2fb!2s115%20Maya%20Ave%2C%20Colombo%2000500!5e0!3m2!1sen!2slk!4v1731216418342!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="LD Engineering Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Developer Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-gray-400">© {new Date().getFullYear()} LD Engineering. All rights reserved.</p>
    <div className="flex items-center gap-2 text-gray-400">
      <Code className="h-5 w-5" />
      <span>Developed by</span>
      <a href="https://modulaverssystemscom.vercel.app" className="flex items-center gap-2 hover:text-white transition-colors" aria-label="Modulavers Systems Website">
        <img
          src={logo} // Replace with the actual path if needed
          alt="Modulavers Systems Logo"
          className="w-6 h-6 rounded"
        />
        <span className="font-semibold">Modulavers Systems</span>
      </a>
    </div>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
