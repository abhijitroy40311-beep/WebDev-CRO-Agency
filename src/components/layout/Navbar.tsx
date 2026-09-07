import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { trackEvent, TRACKING_EVENTS } from '../../lib/tracking';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold tracking-tight text-slate-900">
              WebDev<span className="text-blue-600">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+15551234567" 
              className="text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Call Us"
              onClick={() => trackEvent(TRACKING_EVENTS.PHONE_CLICK, { location: 'navbar' })}
            >
              <Phone className="h-5 w-5" />
            </a>
            <Button asChild variant="outline" size="sm">
              <a 
                href="https://wa.me/15551234567" 
                target="_blank" 
                rel="noreferrer"
                onClick={() => trackEvent(TRACKING_EVENTS.WHATSAPP_CLICK, { location: 'navbar' })}
              >
                <MessageCircle className="mr-2 h-4 w-4 text-green-600" />
                WhatsApp
              </a>
            </Button>
            <Button asChild size="sm">
              <Link to="/contact">Get a Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <a 
              href="tel:+15551234567" 
              className="text-slate-600"
              aria-label="Call Us"
              onClick={() => trackEvent(TRACKING_EVENTS.PHONE_CLICK, { location: 'navbar_mobile' })}
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-slate-50 text-blue-600'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col space-y-2 px-3">
              <Button asChild className="w-full justify-center">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get a Free Consultation</Link>
              </Button>
              <Button asChild variant="whatsapp" className="w-full justify-center">
                <a 
                  href="https://wa.me/15551234567" 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={() => trackEvent(TRACKING_EVENTS.WHATSAPP_CLICK, { location: 'mobile_menu' })}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
