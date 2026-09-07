import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/Card';
import { ArrowRight, MonitorSmartphone, Target, ShoppingCart, RefreshCcw } from 'lucide-react';
import { CTASection } from '../components/sections/CTASection';
import { FAQSection } from '../components/sections/FAQSection';

export default function Services() {
  const services = [
    {
      title: "Business Website Development",
      desc: "Complete multi-page websites that establish credibility, showcase your services, and make it easy for local customers to contact you.",
      icon: MonitorSmartphone,
      link: "/services/business-website",
      problem: "Your business lacks credibility online.",
      solution: "A professional 5-10 page custom website."
    },
    {
      title: "Landing Page Development",
      desc: "High-converting, single-purpose pages specifically designed to maximize ROI from your Google Ads and social media campaigns.",
      icon: Target,
      link: "/services/landing-page",
      problem: "You are wasting ad spend sending traffic to a generic homepage.",
      solution: "A targeted, hyper-fast landing page matching search intent."
    },
    {
      title: "E-Commerce Website",
      desc: "Professional online stores with secure checkout, product catalogues, and seamless payment integration.",
      icon: ShoppingCart,
      link: "/services/ecommerce",
      problem: "You need to sell products online securely.",
      solution: "A modern, scalable online store."
    },
    {
      title: "Website Redesign",
      desc: "Transform your outdated website into a modern, fast, and mobile-friendly lead generation tool.",
      icon: RefreshCcw,
      link: "/services/redesign",
      problem: "Your current website looks old and loads slowly.",
      solution: "A complete visual and technical overhaul."
    }
  ];

  return (
    <>
      <SEO 
        title="Web Design & Development Services" 
        description="Explore our web design and development services. We build business websites, landing pages, and e-commerce stores designed to convert." 
      />

      <section className="bg-slate-900 pt-20 pb-20 text-white text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Strategic web development solutions designed to solve your business challenges and drive growth.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-md">
                <div className="grid md:grid-cols-5 h-full">
                  <div className="md:col-span-2 bg-slate-100 p-8 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-slate-200">
                    <service.icon className="h-16 w-16 text-blue-600 mb-6" />
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h2>
                  </div>
                  <div className="md:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                    <p className="text-lg text-slate-600 mb-6">{service.desc}</p>
                    
                    <div className="space-y-4 mb-8">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-red-500 block mb-1">The Problem</span>
                        <p className="text-slate-700">{service.problem}</p>
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-green-600 block mb-1">The Solution</span>
                        <p className="text-slate-700">{service.solution}</p>
                      </div>
                    </div>

                    <div>
                      <Link to={service.link} className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
                        View Service Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      <CTASection />
    </>
  );
}
