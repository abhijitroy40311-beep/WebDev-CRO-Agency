import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: "How much does a new website cost?",
    answer: "Our pricing is structured into three packages: Starter, Growth, and Premium. The exact cost depends on your specific requirements such as the number of pages, custom features, and e-commerce functionality. We provide a transparent quote after our free discovery call."
  },
  {
    question: "How long will it take to build my website?",
    answer: "Most standard business websites take between 2 to 4 weeks from discovery to launch. E-commerce and highly custom sites may take 6 to 8 weeks. We provide a clear timeline before we start any work."
  },
  {
    question: "Do you provide hosting and domain names?",
    answer: "Yes, we can manage your domain registration and provide secure, fast hosting as part of our ongoing maintenance packages, so you don't have to worry about the technical details."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. We design 'mobile-first', meaning your website will look and function perfectly on smartphones, tablets, and desktop computers."
  },
  {
    question: "Will my website show up on Google?",
    answer: "We build all websites with SEO best practices in mind, including fast load times, clean code, proper headings, and meta tags. We also submit your site to Google upon launch."
  },
];

export function FAQSection({ title = "Frequently Asked Questions", subtitle = "Everything you need to know about our services and process.", items = defaultFAQs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
          <p className="text-lg text-slate-600">{subtitle}</p>
        </div>

        <div className="space-y-4">
          {items.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-slate-200 rounded-xl overflow-hidden transition-colors ${openIndex === index ? 'bg-slate-50' : 'bg-white'}`}
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left focus:outline-none"
                onClick={() => toggleOpen(index)}
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-slate-500 shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-500 shrink-0 ml-4" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
