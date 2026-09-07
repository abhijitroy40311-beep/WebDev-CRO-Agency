import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { StickyMobileCTA } from './StickyMobileCTA';
import { ArrowLeft } from 'lucide-react';

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleBack = () => {
    // Check if there is internal routing history
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      // Fallback: Hierarchical navigation to prevent bouncing to external sites (like Google Ads)
      const pathParts = location.pathname.split('/').filter(Boolean);
      if (pathParts.length > 1) {
        pathParts.pop();
        navigate('/' + pathParts.join('/'));
      } else {
        navigate('/');
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col font-sans text-slate-900 bg-slate-50">
      <Navbar />
      
      {/* Global Back Button (Hidden on Home Page) */}
      {location.pathname !== '/' && (
        <div className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-16 z-40 w-full shadow-sm">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <button 
              onClick={handleBack}
              className="flex items-center text-sm font-bold text-slate-600 hover:text-blue-600 py-3 transition-colors focus:outline-none"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </button>
          </div>
        </div>
      )}

      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
