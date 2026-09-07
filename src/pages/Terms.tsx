import { SEO } from '../components/SEO';

export default function Terms() {
  return (
    <>
      <SEO title="Terms of Service" description="Our terms of service." />
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-slate max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>This is a placeholder for the Terms of Service.</p>
        </div>
      </div>
    </>
  );
}
