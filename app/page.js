import AnimatedLogo from '@/components/AnimatedLogo';
import ContactForm from '@/components/ContactForm';
import { ChevronDown } from 'lucide-react';

// Placeholder components for sections to be built in later batches
// These are simple functional components returning styled divs with text for now.
const StorySection = () => (
  <section id="story" className="min-h-screen w-full py-20 md:py-32 bg-white flex flex-col items-center justify-center px-6 md:px-10">
    <div className="text-center max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-6">The hueneu Story</h2>
      <p className="text-lg text-text-light mb-4">Discover the meaning behind "Hue + Neu" and our design philosophy.</p>
      <p className="text-lg text-text-light">Content for this section will be added soon, including the "Who Knew?" moment!</p>
      {/* Placeholder for WhoKnewElement */}
      <div className="mt-10 p-6 bg-hueneu-secondary rounded-soft shadow-subtle">
        <h3 className="text-xl font-heading text-text-dark">Interactive 'Who Knew?' element coming soon!</h3>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="min-h-screen w-full py-20 md:py-32 bg-neutral-bg flex flex-col items-center justify-center px-6 md:px-10">
    <div className="text-center max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-6">What We Do</h2>
      <p className="text-lg text-text-light">Our core offerings with playful microcopy and icons will be showcased here.</p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
        {['Branding', 'Packaging', 'Social Media', 'Stationery', 'Coffee Table Books', 'Creative Projects'].map(service => (
          <div key={service} className="p-4 bg-white rounded-soft shadow-subtle">
            <p className="font-semibold text-text-dark">{service}</p>
            <p className="text-sm text-text-light">Microcopy soon!</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyHueneuSection = () => (
  <section id="why-hueneu" className="min-h-screen w-full py-20 md:py-32 bg-white flex flex-col items-center justify-center px-6 md:px-10">
    <div className="text-center max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-6">Why hueneu?</h2>
      <p className="text-lg text-text-light italic">"We don’t just design—we decode stories."</p>
      <p className="text-lg text-text-light mt-2 italic">"Designs that speak quietly but stay with you."</p>
      <p className="text-lg text-text-light mt-4">More poetic copy highlighting our calm, mystery, and balance is on its way.</p>
    </div>
  </section>
);

export default function Home() {
  // Attempt to get Instagram URL from environment variable
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/hueneu_'; // Default fallback

  return (
    <main className="flex flex-col items-center justify-center text-text-dark bg-neutral-bg selection:bg-hueneu-accent selection:text-white">
      {/* Hero Section */}
      <section 
        id="hero" 
        className="min-h-screen w-full flex flex-col items-center justify-center relative text-center px-6 md:px-10 bg-neutral-bg pt-20 pb-10 md:pt-0 md:pb-0"
      >
        <AnimatedLogo />
        <div className="mt-8 md:mt-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-text-dark animate-fadeIn animation-delay-500">
            Where stories find their aesthetic.
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-text-light animate-fadeIn animation-delay-700">
            Designs that whisper loud stories.
          </p>
        </div>
        {/* Smooth scroll-down indicator - placeholder for ScrollIndicator component */}
        <div className="absolute bottom-10 md:bottom-16 animate-bounce">
          <a href="#story" aria-label="Scroll to next section">
            <ChevronDown className="w-8 h-8 md:w-10 md:w-10 text-hueneu-primary hover:text-hueneu-accent transition-colors" />
          </a>
        </div>
      </section>

      {/* Story Section (Placeholder) */}
      <StorySection />

      {/* Services Section (Placeholder) */}
      <ServicesSection />

      {/* Why hueneu? Section (Placeholder) */}
      <WhyHueneuSection />

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 md:py-32 bg-hueneu-secondary flex flex-col items-center px-6 md:px-10">
        <div className="text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-12">
            Let's Work Together
          </h2>
          <ContactForm />
          <div className="mt-12 text-center">
            <p className="text-text-light mb-2">Find more inspiration on our Instagram:</p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-hueneu-accent hover:text-opacity-80 transition-colors font-medium text-lg font-heading tracking-wide"
            >
              @hueneu_
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
