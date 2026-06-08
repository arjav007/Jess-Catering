import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { CategoryFilter } from './components/CategoryFilter';
import { MenuGrid } from './components/MenuGrid';
import { ChocolatesSection } from './components/ChocolatesSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

// Import your local appetisers photo here
import appetisersHero from './assets/cajun-tacos.png';
import ChocolateImg from './assets/tiramisu.png'
// Pulls the central menu item array containing all your local image assets
import { menuItems } from './Order';

// Category list matching the exact data item categories
const categories = ['All', 'Packages', 'Appetisers', 'Cold Mains', 'Hot Mains', 'Desserts'];
interface MenuProps {
  onContactClick?: () => void;
  onOrderClick?: () => void;
}

export default function Menu({ onContactClick, onOrderClick }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showMobileQuote, setShowMobileQuote] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show mobile bottom bar after scrolling past hero
      setShowMobileQuote(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <HeroSection imageUrl={appetisersHero} />

      {/* Category Filter */}
      <div>
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Menu Grid */}
      <MenuGrid items={menuItems} activeCategory={activeCategory} />

      {/* Chocolates Section */}
      <ChocolatesSection 
        imageUrl={ChocolateImg}
        onOrderClick={onOrderClick}
      />

      {/* CTA Section */}
      <CTASection onContactClick={onContactClick} />

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Bar */}
      {showMobileQuote && (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#6B8A47] p-4 shadow-lg transform transition-transform duration-300">
          <button
            onClick={onContactClick}
            className="w-full py-3 bg-white text-[#6B8A47] rounded-lg transition-all duration-300 active:scale-95"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Get a Quote
          </button>
        </div>
      )}
    </div>
  );
}