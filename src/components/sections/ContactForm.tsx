import { useState } from 'react';
import * as React from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { trackEvent, TRACKING_EVENTS } from '../../lib/tracking';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      trackEvent(TRACKING_EVENTS.FORM_SUBMIT, { formType: 'contact_form' });
      trackEvent(TRACKING_EVENTS.GENERATE_LEAD, { source: 'contact_page' });
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">
          Your request has been received. We will contact you shortly to discuss your project.
        </p>
        <Button 
          variant="outline" 
          className="mt-6"
          onClick={() => setIsSuccess(false)}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</label>
          <Input id="name" required placeholder="Enter Your Full Name" />
        </div>
        <div className="space-y-2">
          <label htmlFor="business" className="text-sm font-medium text-slate-700">Business Name</label>
          <Input id="business" placeholder="Your Business Name" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address *</label>
          <Input id="email" type="email" required placeholder="Enter Your Email" />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number *</label>
          <Input id="phone" type="tel" required placeholder="Enter Your Number" />
        </div>
      </div>

      <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-slate-700">Service Required</label>
          <select 
            id="service" 
            className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="business_website">New Business Website</option>
            <option value="website_redesign">Website Redesign</option>
            <option value="ecommerce">E-commerce Website</option>
            <option value="landing_page">Landing Page</option>
            <option value="other">Other</option>
          </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="budget" className="text-sm font-medium text-slate-700">Estimated Budget Range</label>
        <select 
          id="budget" 
          className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select budget range</option>
          <option value="1k-3k">₹1,000 - ₹3,000</option>
          <option value="3k-5k">₹3,000 - ₹5,000</option>
          <option value="5k-10k">₹5,000 - ₹10,000</option>
          <option value="10k+">₹10,000+</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="details" className="text-sm font-medium text-slate-700">Project Details</label>
        <Textarea id="details" placeholder="Tell us a bit about your business and what you want to achieve..." className="h-32" />
      </div>

      <Button type="submit" size="lg" className="w-full text-base" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Request a Free Consultation'}
      </Button>
      
    </form>
  );
}
