import { SEO } from '../components/SEO';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { CTASection } from '../components/sections/CTASection';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Apex Dental Clinic",
      industry: "Healthcare",
      type: "Business Website",
      services: "UI/UX Design, Web Development, Local SEO",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
      result: "Results to be added after verified campaign/project data is available."
    },
    {
      id: 2,
      title: "Summit Real Estate",
      industry: "Real Estate",
      type: "Landing Page",
      services: "Landing Page Design, Lead Forms, Google Ads Prep",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
      result: "Results to be added after verified campaign/project data is available."
    },
    {
      id: 3,
      title: "The Rustic Olive",
      industry: "Hospitality",
      type: "Business Website",
      services: "Web Design, Menu Integration, Mobile Optimization",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
      result: "Results to be added after verified campaign/project data is available."
    },
    {
      id: 4,
      title: "Lumina Boutique",
      industry: "Retail",
      type: "E-Commerce",
      services: "E-commerce Development, Payment Integration",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
      result: "Results to be added after verified campaign/project data is available."
    },
    {
      id: 5,
      title: "Iron Core Fitness",
      industry: "Health & Fitness",
      type: "Business Website",
      services: "Website Redesign, Lead Generation Forms",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
      result: "Results to be added after verified campaign/project data is available."
    },
    {
      id: 6,
      title: "Meridian Consulting",
      industry: "B2B Services",
      type: "Corporate Website",
      services: "UI/UX Design, CMS Integration",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
      result: "Results to be added after verified campaign/project data is available."
    }
  ];

  return (
    <>
      <SEO 
        title="Our Portfolio | Website Design Projects" 
        description="View our recent website design and development projects for small businesses and growing companies." 
      />

      <section className="bg-slate-900 pt-20 pb-20 text-white text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Work</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We build websites focused on clean design, fast performance, and business growth.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden border-slate-200">
                <div className="aspect-[16/9] bg-slate-200 overflow-hidden border-b border-slate-200 relative group">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-slate-400 font-medium">Project Screenshot Placeholder</span>
                    </div>
                  )}
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1 block">{project.industry}</span>
                      <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                    </div>
                    <span className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full font-medium">
                      {project.type}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">Services Provided</h4>
                      <p className="text-sm text-slate-600">{project.services}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">Business Impact</h4>
                      <p className="text-sm text-slate-500 italic">{project.result}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-slate-600 mb-6">Want to see how we can help your specific business?</p>
             <Button asChild size="lg">
               <Link to="/contact">Request a Custom Proposal</Link>
             </Button>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
