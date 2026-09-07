import { MessageCircle, Phone } from 'lucide-react';
import { trackEvent, TRACKING_EVENTS } from '../../lib/tracking';

export function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-3 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <a
        href="https://wa.me/918777202487"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-md py-3 flex items-center justify-center font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        onClick={() =>
          trackEvent(TRACKING_EVENTS.WHATSAPP_CLICK, {
            location: 'sticky_mobile',
          })
        }
      >
        <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
        WhatsApp
      </a>

      <a
        href="tel:+918777202487"
        aria-label="Call us now"
        className="flex-1 bg-slate-900 hover:bg-slate-800 text-white rounded-md py-3 flex items-center justify-center font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        onClick={() =>
          trackEvent(TRACKING_EVENTS.PHONE_CLICK, {
            location: 'sticky_mobile',
          })
        }
      >
        <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
        Call Now
      </a>
    </div>
  );
}