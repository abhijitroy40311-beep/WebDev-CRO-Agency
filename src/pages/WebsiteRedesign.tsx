import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/sections/CTASection';
import { XCircle, ArrowRight } from 'lucide-react';

export default function WebsiteRedesign() {
  return (
    <>
      <SEO 
        title="Website Redesign Services | Improve Your Conversion Rate" 
        description="Stop losing customers to an outdated website. Our website redesign services focus on modern design, fast loading, and conversion optimization." 
      />

      <section className="pt-20 pb-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
            Is Your Outdated Website <span className="text-red-500">Turning Customers Away?</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            An old, slow, or hard-to-use website damages your brand trust. We redesign websites to look premium, load instantly, and generate more leads.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Improve My Website</Link>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* The Problem */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Signs You Need a Redesign</h2>
              <ul className="space-y-6">
                {[
                  "It is not fully responsive on mobile devices.",
                  "It takes more than 3 seconds to load.",
                  "The design looks like it was made 5+ years ago.",
                  "You get traffic, but very few enquiries or calls.",
                  "It is difficult for you to update content yourself.",
                  "Your competitors' websites look significantly better."
                ].map((text, i) => (
                  <li key={i} className="flex items-start">
                    <XCircle className="h-6 w-6 text-red-500 mr-4 shrink-0" />
                    <span className="text-lg text-slate-700">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Solution / Visual */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                 AFTER
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-4">What You Get</h3>
               <p className="text-slate-600 mb-6">A complete overhaul focused on modern UX/UI principles and conversion rate optimization.</p>
               <ul className="space-y-4 text-slate-700">
                 <li className="flex items-center"><ArrowRight className="h-4 w-4 text-blue-500 mr-2"/> Premium, high-trust design system</li>
                 <li className="flex items-center"><ArrowRight className="h-4 w-4 text-blue-500 mr-2"/> Flawless mobile experience</li>
                 <li className="flex items-center"><ArrowRight className="h-4 w-4 text-blue-500 mr-2"/> Clear, strategic calls-to-action</li>
                 <li className="flex items-center"><ArrowRight className="h-4 w-4 text-blue-500 mr-2"/> Optimized for Core Web Vitals</li>
                 <li className="flex items-center"><ArrowRight className="h-4 w-4 text-blue-500 mr-2"/> Easy-to-use content management</li>
               </ul>
            </div>

          </div>
        </div>
      </section>

      <CTASection 
        title="Ready for a Website That Actually Works?" 
        primaryCtaText="Request a Redesign Quote"
      />
    </>
  );
}
