import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { CTASection } from '../components/sections/CTASection';
import { FAQSection } from '../components/sections/FAQSection';
import { ArrowRight, CheckCircle2, Globe, MonitorSmartphone, Zap, Search, MessageCircle, BarChart3, ShieldCheck } from 'lucide-react';
import { trackEvent, TRACKING_EVENTS } from '../lib/tracking';

export default function Home() {
  return (
    <>
      <SEO 
        title="Professional Website Design & Development for Businesses" 
        description="Modern websites designed to build credibility, generate enquiries, and help businesses grow online. Get a free consultation today." 
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-16 md:pt-24 pb-20 md:pb-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
              Turn Your Website Into Your Best <span className="text-blue-600">Sales Representative</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Professional website design and development for small businesses and growing companies. Backed by 8+ years of industry experience, we build websites to look great, load fast, and generate qualified enquiries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/contact">Get a Free Website Consultation</Link>
              </Button>
              <Button asChild variant="whatsapp" size="lg" className="w-full sm:w-auto">
                <a 
                  href="https://wa.me/8777202487" 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={() => trackEvent(TRACKING_EVENTS.WHATSAPP_CLICK, { location: 'hero' })}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
            <div className="mt-6 text-sm text-slate-500 font-medium">
              Call us directly: <a href="tel:+91 8777202487" className="text-blue-600 hover:underline">+91 8777202487</a>
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <div className="mt-16 mx-auto max-w-5xl relative rounded-xl shadow-2xl bg-white p-2 border border-slate-200">
            <div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden flex flex-col relative">
               {/* Decorative Browser Bar */}
               <div className="h-8 bg-slate-200 flex items-center px-4 space-x-2 shrink-0 z-10 relative">
                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                 <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                 <div className="w-3 h-3 rounded-full bg-green-400"></div>
               </div>
               <div className="flex-1 relative bg-slate-800">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" 
                    alt="Professional Website Mockup" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer" 
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Is Your Current Online Presence Costing You Customers?</h2>
            <p className="text-lg text-slate-600">Most small businesses lose potential leads every day because of common website mistakes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-slate-50 border-0">
              <div className="mx-auto w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">No Website or Outdated Design</h3>
              <p className="text-slate-600">Customers search for you online. If they can't find you, or if your site looks like it was built in 2010, they go to your competitors.</p>
            </Card>
            <Card className="p-8 text-center bg-slate-50 border-0">
              <div className="mx-auto w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-6">
                <MonitorSmartphone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Poor Mobile Experience</h3>
              <p className="text-slate-600">Over 60% of searches happen on mobile. If your website requires pinching and zooming, visitors will leave immediately.</p>
            </Card>
            <Card className="p-8 text-center bg-slate-50 border-0">
              <div className="mx-auto w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Not Generating Leads</h3>
              <p className="text-slate-600">A website that acts only as a digital brochure won't grow your business. It needs clear calls-to-action and easy ways to contact you.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Professional Services Tailored for Growth</h2>
            <p className="text-lg text-slate-300">We build conversion-focused websites that work hard for your business 24/7.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Link to="/services/business-website" className="group">
              <Card className="p-8 bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors h-full text-left flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Business Website Development</h3>
                <p className="text-slate-400 mb-6 flex-1">Complete multi-page websites that establish credibility, showcase your services, and make it easy for local customers to contact you.</p>
                <div className="flex items-center text-blue-400 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            <Link to="/services/landing-page" className="group">
              <Card className="p-8 bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors h-full text-left flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Landing Page Development</h3>
                <p className="text-slate-400 mb-6 flex-1">High-converting, single-purpose pages specifically designed to maximize ROI from your Google Ads and social media campaigns.</p>
                <div className="flex items-center text-blue-400 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            <Link to="/services/ecommerce" className="group">
              <Card className="p-8 bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors h-full text-left flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">E-commerce Development</h3>
                <p className="text-slate-400 mb-6 flex-1">Professional online stores with secure checkout, product catalogues, and seamless payment integration.</p>
                <div className="flex items-center text-blue-400 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            <Link to="/services/redesign" className="group">
              <Card className="p-8 bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors h-full text-left flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Website Redesign</h3>
                <p className="text-slate-400 mb-6 flex-1">Transform your outdated website into a modern, fast, and mobile-friendly lead generation tool.</p>
                <div className="flex items-center text-blue-400 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Designed to Deliver Business Results</h2>
              <p className="text-lg text-slate-600 mb-8">We don't just build websites; we build business tools. Every design decision is made with one goal: to help your business grow.</p>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mr-4 shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Look More Professional</h4>
                    <p className="text-slate-600">Build immediate trust before the first phone call with a premium, modern design.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mr-4 shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Get More Enquiries</h4>
                    <p className="text-slate-600">Strategic placement of WhatsApp buttons, contact forms, and click-to-call links.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mr-4 shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Rank Higher on Google</h4>
                    <p className="text-slate-600">SEO-friendly structures and fast loading speeds to improve your search visibility.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               {/* Tech/Benefit visual cards */}
               <Card className="p-6 bg-slate-50 border-0 shadow-sm flex flex-col items-center text-center">
                 <MonitorSmartphone className="h-10 w-10 text-blue-600 mb-4" />
                 <span className="font-semibold">Mobile-First</span>
               </Card>
               <Card className="p-6 bg-slate-50 border-0 shadow-sm flex flex-col items-center text-center mt-8">
                 <Zap className="h-10 w-10 text-amber-500 mb-4" />
                 <span className="font-semibold">Fast Loading</span>
               </Card>
               <Card className="p-6 bg-slate-50 border-0 shadow-sm flex flex-col items-center text-center -mt-8">
                 <ShieldCheck className="h-10 w-10 text-green-600 mb-4" />
                 <span className="font-semibold">Secure & Reliable</span>
               </Card>
               <Card className="p-6 bg-slate-50 border-0 shadow-sm flex flex-col items-center text-center">
                 <BarChart3 className="h-10 w-10 text-purple-600 mb-4" />
                 <span className="font-semibold">Analytics Ready</span>
               </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-slate-400">Take a look at some of our recent web design projects that have helped local businesses grow.</p>
            </div>
            <Button asChild variant="outline" className="mt-6 md:mt-0 text-slate-900 bg-white hover:bg-slate-100 border-white">
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-slate-700 bg-slate-800 group">
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop" 
                  alt="Apex Dental Clinic" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1 block">Healthcare</span>
                <h3 className="text-xl font-bold text-white mb-2">Apex Dental Clinic</h3>
                <p className="text-sm text-slate-400">Business Website & Local SEO</p>
              </div>
            </Card>
            
            <Card className="overflow-hidden border-slate-700 bg-slate-800 group">
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop" 
                  alt="Summit Real Estate" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1 block">Real Estate</span>
                <h3 className="text-xl font-bold text-white mb-2">Summit Real Estate</h3>
                <p className="text-sm text-slate-400">Lead Generation Landing Page</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Simple, Transparent Process</h2>
            <p className="text-lg text-slate-600">From concept to launch, we handle the technical details so you can focus on running your business.</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
             <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-blue-200 hidden md:block"></div>
             
             {[
               { title: "Discovery & Strategy", desc: "We discuss your business goals, target audience, and what you want the website to achieve." },
               { title: "Design & Content", desc: "We create a conversion-focused layout and help structure your content for maximum impact." },
               { title: "Development", desc: "We build the website using modern, fast, and mobile-friendly technologies." },
               { title: "Review & Refine", desc: "You review the site. We make revisions to ensure everything is perfect." },
               { title: "Launch & Support", desc: "We deploy your site securely and set up tracking (GA4/GTM) so you can measure results." }
             ].map((step, idx) => (
               <div key={idx} className="flex flex-col md:flex-row mb-12 last:mb-0 relative">
                 <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white items-center justify-center font-bold z-10 border-4 border-slate-50">
                   {idx + 1}
                 </div>
                 <div className="md:ml-8 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex-1">
                   <h3 className="text-xl font-bold text-slate-900 mb-2">
                     <span className="md:hidden text-blue-600 mr-2">{idx + 1}.</span> 
                     {step.title}
                   </h3>
                   <p className="text-slate-600">{step.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Pricing Section (Placeholder) */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Transparent Pricing Packages</h2>
            <p className="text-lg text-slate-600">No hidden fees or surprises. Select the perfect package for your business growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <Card className="p-8 border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Starter Website</h3>
              <p className="text-slate-500 text-sm mb-6">Perfect for small local businesses.</p>
              <div className="mb-6">
                <span className="text-3xl font-extrabold text-slate-900">₹999</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-slate-700">
                <li className="flex"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0"/> Up to 5 Pages</li>
                <li className="flex"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0"/> Mobile Responsive</li>
                <li className="flex"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0"/> Contact Form</li>
                <li className="flex"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0"/> WhatsApp Integration</li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link to="/contact">Get Started</Link>
              </Button>
            </Card>

            {/* Growth */}
            <Card className="p-8 border-blue-600 border-2 relative shadow-lg transform md:-translate-y-4 bg-slate-900 text-white">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Growth Website</h3>
              <p className="text-slate-400 text-sm mb-6">For businesses actively running ads.</p>
              <div className="mb-6">
                <span className="text-3xl font-extrabold">₹1,499</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                <li className="flex"><CheckCircle2 className="h-5 w-5 text-blue-400 mr-2 shrink-0"/> Up to 10 Pages</li>
                <li className="flex"><CheckCircle2 className="h-5 w-5 text-blue-400 mr-2 shrink-0"/> Dedicated Landing Page</li>
                <li className="flex"><CheckCircle2 className="h-5 w-5 text-blue-400 mr-2 shrink-0"/> GA4 & Tracking Setup</li>
                <li className="flex"><CheckCircle2 className="h-5 w-5 text-blue-400 mr-2 shrink-0"/> Basic SEO Setup</li>
              </ul>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/contact">Get Started</Link>
              </Button>
            </Card>

            {/* Premium */}
            <Card className="p-8 border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Premium Website</h3>
              <p className="text-slate-500 text-sm mb-6">Complete digital presence & store.</p>
              <div className="mb-6">
                <span className="text-3xl font-extrabold text-slate-900">₹2,499</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-slate-700">
                <li className="flex"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0"/> E-commerce Capability</li>
                <li className="flex"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0"/> Payment Gateway</li>
                <li className="flex"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0"/> Advanced SEO</li>
                <li className="flex"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0"/> 3 Months Support</li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link to="/contact">Get Started</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
