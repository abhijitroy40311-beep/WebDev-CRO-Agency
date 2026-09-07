import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/sections/CTASection';
import { ShoppingCart, CreditCard, Smartphone, ShieldCheck } from 'lucide-react';

export default function EcommerceWebsite() {
  return (
    <>
      <SEO 
        title="E-Commerce Website Development | Sell Online" 
        description="Professional e-commerce websites with secure checkout, mobile optimization, and easy product management. Start selling online today." 
      />

      <section className="pt-20 pb-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
            Build a Professional <span className="text-blue-600">Online Store</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Sell physical products, digital downloads, or services online with a fast, secure, and easy-to-manage e-commerce website.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Build My Online Store</Link>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShoppingCart, title: "Product Catalog", desc: "Beautifully organized product pages that drive sales and highlight features." },
              { icon: CreditCard, title: "Secure Payments", desc: "Integration with major payment gateways for seamless, safe transactions." },
              { icon: Smartphone, title: "Mobile Shopping", desc: "Optimized checkout flow designed specifically for smartphone users." },
              { icon: ShieldCheck, title: "Order Management", desc: "Easy-to-use backend to track orders, manage inventory, and update products." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Start Selling Online?" 
        primaryCtaText="Request an E-Commerce Quote"
      />
    </>
  );
}
