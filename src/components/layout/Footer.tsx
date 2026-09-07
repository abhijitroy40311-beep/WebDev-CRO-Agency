import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { trackEvent, TRACKING_EVENTS } from '../../lib/tracking';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">WebDev<span className="text-blue-500">.</span></h3>
            <p className="mb-4 text-sm text-slate-400">
              Professional website design and development designed to build credibility, generate enquiries, and help businesses grow online.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/business-website" className="hover:text-white transition-colors">Business Websites</Link></li>
              <li><Link to="/services/landing-page" className="hover:text-white transition-colors">Landing Page Development</Link></li>
              <li><Link to="/services/ecommerce" className="hover:text-white transition-colors">E-commerce Websites</Link></li>
              <li><Link to="/services/redesign" className="hover:text-white transition-colors">Website Redesign</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-slate-500 shrink-0" />
                <span>123 Innovation Drive<br/>Tech City, CA 94103</span>
              </li>
              <li>
                <a 
                  href="tel:8777202487" 
                  className="flex items-center hover:text-white transition-colors"
                  onClick={() => trackEvent(TRACKING_EVENTS.PHONE_CLICK, { location: 'footer' })}
                >
                  <Phone className="h-5 w-5 mr-2 text-slate-500" />
                  +91 8777202487
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/8777202487" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center hover:text-white transition-colors"
                  onClick={() => trackEvent(TRACKING_EVENTS.WHATSAPP_CLICK, { location: 'footer' })}
                >
                  <MessageCircle className="h-5 w-5 mr-2 text-green-500" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@yourdomain.com" 
                  className="flex items-center hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2 text-slate-500" />
                  hello@yourdomain.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} WebDev Agency. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span>Built for Conversion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
