import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/sections/CTASection';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function BusinessWebsite() {
  return (
    <>
      <SEO 
        title="Business Website Development | Get Online Today" 
        description="Turn your business into a professional online presence. We build credibility-boosting websites that help local customers find and contact you." 
      />

      <section className="pt-20 pb-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Turn Your Business Into a <span className="text-blue-600">Professional Online Presence</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                In today's digital world, a professional website is your primary storefront. If you don't have a website, or rely solely on social media, you are losing customers to competitors who look more established.
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/contact">Build My Business Website</Link>
              </Button>
            </div>
            <div className="bg-slate-100 rounded-xl p-8 aspect-square flex flex-col justify-center border border-slate-200">
               <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto w-full">
                  <div className="w-1/2 h-4 bg-slate-200 rounded mb-4"></div>
                  <div className="w-3/4 h-8 bg-blue-100 rounded mb-4"></div>
                  <div className="w-full h-24 bg-slate-100 rounded mb-6"></div>
                  <div className="w-full h-10 bg-blue-600 rounded flex items-center justify-center text-white font-medium text-sm">
                    Contact Us Today
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Your Business Needs a Professional Website</h2>
            <p className="text-lg text-slate-600">Social media is not enough. Here is why serious businesses invest in their own website.</p>
          </div>

          <div className="space-y-8">
            {[
              { title: "Instant Credibility", desc: "Consumers expect legitimate businesses to have a website. Without one, you immediately raise doubts about your professionalism." },
              { title: "Google Search Visibility", desc: "When local customers search for your services on Google, a dedicated website is the best way to appear in those results." },
              { title: "24/7 Information", desc: "Answer common questions about your services, pricing, and location even when you are asleep." },
              { title: "Easy Contact Methods", desc: "Provide direct click-to-call, WhatsApp buttons, and inquiry forms in one centralized location." },
              { title: "You Own Your Audience", desc: "Unlike social media platforms that can change algorithms or ban accounts, you have complete control over your website." }
            ].map((item, i) => (
              <div key={i} className="flex bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-4 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Get Your Business Online?" 
        primaryCtaText="Start My Website Project"
      />
    </>
  );
}
