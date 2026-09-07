import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/sections/CTASection';
import { Target, Zap, MousePointerClick, BarChart } from 'lucide-react';

export default function LandingPageDevelopment() {
  return (
    <>
      <SEO 
        title="Google Ads Landing Page Development | High Conversion Rates" 
        description="Stop wasting Google Ads budget on poor landing pages. We build high-converting, lightning-fast landing pages designed specifically for paid traffic." 
      />

      <section className="pt-20 pb-16 bg-slate-900 text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-6">
                Optimized for Google Ads & Meta Ads
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Turn Paid Traffic Into <span className="text-blue-400">Qualified Leads</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Sending expensive ad traffic to a generic homepage is burning your budget. You need a dedicated, conversion-focused landing page that matches search intent exactly.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                <Link to="/contact">Build My Landing Page</Link>
              </Button>
            </div>
            
            {/* Funnel Visual */}
            <div className="hidden md:flex flex-col items-center space-y-2">
               <div className="w-64 h-16 bg-slate-800 rounded flex items-center justify-center font-bold text-slate-300 border border-slate-700">Google Ads Click</div>
               <div className="w-1 h-8 bg-blue-500"></div>
               <div className="w-56 h-16 bg-blue-900/50 border border-blue-500 rounded flex items-center justify-center font-bold text-blue-300">Dedicated Landing Page</div>
               <div className="w-1 h-8 bg-blue-500"></div>
               <div className="w-48 h-16 bg-green-900/50 border border-green-500 rounded flex items-center justify-center font-bold text-green-300">Qualified Lead</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Anatomy of a High-Converting Landing Page</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We implement proven CRO (Conversion Rate Optimization) strategies to ensure every click has the highest chance of converting.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Message Match", desc: "The page headline perfectly matches the ad copy and search intent." },
              { icon: Zap, title: "Lightning Fast", desc: "Built with lightweight code so the page loads before the user clicks back." },
              { icon: MousePointerClick, title: "Clear CTAs", desc: "Strategic placement of forms, click-to-call, and WhatsApp buttons." },
              { icon: BarChart, title: "Track Everything", desc: "Fully integrated with GA4, GTM, and Google Ads Conversion Tracking." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Stop Wasting Ad Spend" 
        subtitle="Let's build a landing page that actually converts your traffic into leads."
        primaryCtaText="Get a Landing Page Quote"
      />
    </>
  );
}
