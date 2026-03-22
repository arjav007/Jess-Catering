import { ContactHero } from './components/contact/ContactHero';
import { ContactForm } from './components/contact/ContactForm';
import { Footer } from './components/Footer';

interface ContactProps {
  onViewMenu?: () => void;
}

export default function Contact({ onViewMenu }: ContactProps) {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Image */}
      <ContactHero />

      {/* Contact Form + Details */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}