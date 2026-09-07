import { SEO } from '../components/SEO';
import { ContactForm } from '../components/sections/ContactForm';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { trackEvent, TRACKING_EVENTS } from '../lib/tracking';
import { Card } from '../components/ui/Card';

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us | Free Website Consultation" 
        description="Get in touch for a free consultation about your website design and development needs. We help businesses generate more leads online." 
      />

      <section className="bg-slate-900 pt-20 pb-16 text-white text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Let's Discuss Your Project</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready for a website that actually generates leads? Request a free, no-obligation consultation today.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 relative -mt-8">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-8 border-0 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 mr-4 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Phone</h4>
                      <a 
                        href="tel:+91 8777202487" 
                        className="text-slate-600 hover:text-blue-600"
                        onClick={() => trackEvent(TRACKING_EVENTS.PHONE_CLICK, { location: 'contact_page' })}
                      >
                        +91 8777202487
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageCircle className="h-6 w-6 text-green-600 mr-4 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">WhatsApp</h4>
                      <a 
                        href="https://wa.me/8777202487" 
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-600 hover:text-green-600"
                        onClick={() => trackEvent(TRACKING_EVENTS.WHATSAPP_CLICK, { location: 'contact_page' })}
                      >
                        Chat with us
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 mr-4 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Email</h4>
                      <a href="mailto:hello@yourdomain.com" className="text-slate-600 hover:text-blue-600">
                        abhijitroy40311@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-4 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Location</h4>
                      <p className="text-slate-600">
                        Madhyamgram 700130<br/>
                        Kolkata, WB
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 mr-4 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Business Hours</h4>
                      <p className="text-slate-600">
                        Mon - Fri: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-1">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
