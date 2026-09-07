import { SEO } from '../components/SEO';

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="Our privacy policy." />
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>This is a placeholder for the Privacy Policy.</p>
        </div>
      </div>
    </>
  );
}
