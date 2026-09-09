import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';

// Pages (to be implemented)
import Home from './pages/Home';
import Services from './pages/Services';
import BusinessWebsite from './pages/BusinessWebsite';
import WebsiteRedesign from './pages/WebsiteRedesign';
import LandingPageDevelopment from './pages/LandingPageDevelopment';
import EcommerceWebsite from './pages/EcommerceWebsite';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="services/business-website" element={<BusinessWebsite />} />
            <Route path="services/redesign" element={<WebsiteRedesign />} />
            <Route path="services/landing-page" element={<LandingPageDevelopment />} />
            <Route path="services/ecommerce" element={<EcommerceWebsite />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
