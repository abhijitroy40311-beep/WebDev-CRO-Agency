import { SEO } from '../components/SEO';
import { CTASection } from '../components/sections/CTASection';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <>
      <SEO 
        title="About Us | Professional Web Development" 
        description="Learn about our website design and development agency. We specialize in building modern, high-converting websites for small businesses." 
      />

      <section className="bg-slate-900 pt-20 pb-20 text-white text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We are dedicated to helping businesses grow online through professional, conversion-focused web development.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-slate-600">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="mb-8">
              Many small and medium businesses struggle to establish a professional online presence. They often rely on outdated websites or simple social media pages that fail to convert visitors into actual customers. Our mission is to bridge that gap by providing premium, agency-quality website development services that focus on actual business results rather than just visual aesthetics.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Who We Are</h2>
            <p className="mb-8">
              We are a team of UI/UX designers, developers, and conversion rate optimization specialists. With over 8+ years of industry experience, we don't just write code; we build digital tools designed to generate leads and build trust with your target audience.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
              <div className="bg-slate-900 text-white p-6 rounded-xl text-center">
                <div className="text-3xl font-extrabold mb-1 text-blue-400">8+</div>
                <div className="text-sm font-medium text-slate-300 uppercase tracking-wider">Years Exp.</div>
              </div>
              <div className="bg-slate-900 text-white p-6 rounded-xl text-center">
                <div className="text-3xl font-extrabold mb-1 text-blue-400">100+</div>
                <div className="text-sm font-medium text-slate-300 uppercase tracking-wider">Websites Built</div>
              </div>
              <div className="bg-slate-900 text-white p-6 rounded-xl text-center">
                <div className="text-3xl font-extrabold mb-1 text-blue-400">4.9/5</div>
                <div className="text-sm font-medium text-slate-300 uppercase tracking-wider">Client Rating</div>
              </div>
              <div className="bg-slate-900 text-white p-6 rounded-xl text-center">
                <div className="text-3xl font-extrabold mb-1 text-blue-400">24/7</div>
                <div className="text-sm font-medium text-slate-300 uppercase tracking-wider">Support</div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 my-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Work With Us?</h3>
              <ul className="space-y-4">
                {[
                  "Business-First Approach: We focus on how the website will generate leads and sales.",
                  "Transparent Process: No confusing technical jargon. We explain things in plain English.",
                  "Modern Technology: We use the latest web standards (React, Tailwind) for fast, secure sites.",
                  "Conversion Optimized: Every design decision is made to guide visitors toward contacting you.",
                  "Client Partnership: We view ourselves as your digital growth partners, not just contractors."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-4 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
