import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
}

export function CTASection({
  title = "Ready to Grow Your Business Online?",
  subtitle = "Get a professional website designed to build trust and generate more enquiries.",
  primaryCtaText = "Request a Free Consultation",
  primaryCtaLink = "/contact"
}: CTASectionProps) {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white border-0">
            <Link to={primaryCtaLink}>
              {primaryCtaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-slate-700 text-white hover:bg-slate-800 hover:text-white">
            <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 h-5 w-5 text-green-500" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
