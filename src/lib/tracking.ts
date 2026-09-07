/**
 * Analytics & Tracking utility
 * Connect this to your GA4, Google Ads, or GTM configurations.
 */

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  // Console log for development verification
  console.log(`[Tracking Event] ${eventName}`, eventParams);

  // Example GA4 Integration:
  // if (typeof window !== 'undefined' && (window as any).gtag) {
  //   (window as any).gtag('event', eventName, eventParams);
  // }
};

// Common conversion events
export const TRACKING_EVENTS = {
  GENERATE_LEAD: 'generate_lead',
  FORM_SUBMIT: 'form_submit',
  WHATSAPP_CLICK: 'whatsapp_click',
  PHONE_CLICK: 'phone_click',
  CONSULTATION_REQUEST: 'consultation_request',
};
