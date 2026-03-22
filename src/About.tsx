import { AboutHero } from './components/about/AboutHero';
import { AboutIntro } from './components/about/AboutIntro';
import { AboutStory } from './components/about/AboutStory';
import { SignatureCuisines } from './components/about/SignatureCuisines';
import { BehindTheScenes } from './components/about/BehindTheScenes';
import { Philosophy } from './components/about/Philosophy';
import { Timeline } from './components/about/Timeline';
import { Testimonials } from './components/about/Testimonials';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

interface AboutProps {
  onContactClick?: () => void;
}

export default function About({ onContactClick }: AboutProps) {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <AboutHero />

      {/* Introduction Section */}
      <AboutIntro />

      {/* Our Story Section */}
      <AboutStory />

      {/* Signature Cuisines */}
      <SignatureCuisines />

      {/* Behind the Scenes Gallery */}
      <BehindTheScenes />

      {/* Philosophy / Values */}
      <Philosophy />

      {/* Timeline / Milestones */}
      <Timeline />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CTASection onContactClick={onContactClick} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
