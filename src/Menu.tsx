import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { CategoryFilter } from './components/CategoryFilter';
import { MenuGrid, MenuItem } from './components/MenuGrid';
import { ChocolatesSection } from './components/ChocolatesSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

// Menu data with multiple images per dish
const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Patra Ni Macchi',
    description: 'Steamed fish wrapped in banana leaves with green chutney – a signature Parsi delight that melts in your mouth.',
    price: 'A$25 / Plate',
    images: [
      'https://images.unsplash.com/photo-1661939252817-ebb73304f4c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwYXJzaSUyMGZpc2glMjBiYW5hbmElMjBsZWFmfGVufDF8fHx8MTc2MTIwNzQ2OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzYxMjAyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjExNDA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Parsi Specialties',
  },
  {
    id: '2',
    name: 'Samosa Platter',
    description: 'Crispy, golden samosas filled with spiced potatoes and peas. Served with mint and tamarind chutneys.',
    price: 'A$18 / Dozen',
    images: [
      'https://images.unsplash.com/photo-1589301773859-bb024d3ad558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzYW1vc2ElMjBzbmFja3N8ZW58MXx8fHwxNzYxMjA3NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzYxMjAyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjExNDA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Indian Snacks',
  },
  {
    id: '3',
    name: 'Dhokla',
    description: 'Soft, spongy steamed cakes made from fermented chickpea flour, garnished with mustard seeds and curry leaves.',
    price: 'A$15 / Box',
    images: [
      'https://images.unsplash.com/photo-1714799263291-272975db795a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaG9rbGElMjBpbmRpYW4lMjBmb29kfGVufDF8fHx8MTc2MTIwNzQ3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1589301773859-bb024d3ad558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzYW1vc2ElMjBzbmFja3N8ZW58MXx8fHwxNzYxMjA3NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjExNDA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Indian Snacks',
  },
  {
    id: '4',
    name: 'Dhansak',
    description: 'A rich Parsi curry combining lentils, vegetables, and meat in a perfectly balanced sweet and sour gravy.',
    price: 'A$28 / Plate',
    images: [
      'https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzYxMjAyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjExNDA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1661939252817-ebb73304f4c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwYXJzaSUyMGZpc2glMjBiYW5hbmElMjBsZWFmfGVufDF8fHx8MTc2MTIwNzQ2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Parsi Specialties',
  },
  {
    id: '5',
    name: 'Biryani',
    description: 'Fragrant basmati rice layered with tender meat or vegetables, infused with saffron and aromatic spices.',
    price: 'A$22 / Plate',
    images: [
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjExNDA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzYxMjAyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1589301773859-bb024d3ad558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzYW1vc2ElMjBzbmFja3N8ZW58MXx8fHwxNzYxMjA3NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Indian Snacks',
  },
  {
    id: '6',
    name: 'Sali Boti',
    description: 'Tender mutton cubes cooked in a tangy tomato-based curry, topped with crispy potato sticks.',
    price: 'A$26 / Plate',
    images: [
      'https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzYxMjAyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1661939252817-ebb73304f4c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwYXJzaSUyMGZpc2glMjBiYW5hbmElMjBsZWFmfGVufDF8fHx8MTc2MTIwNzQ2OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjExNDA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Parsi Specialties',
  },
];

const categories = ['All', 'Parsi Specialties', 'Indian Snacks'];

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
      <HeroSection imageUrl="https://images.unsplash.com/photo-1624763149686-1893acf73092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXRlcmluZyUyMGV2ZW50JTIwc3ByZWFkfGVufDF8fHx8MTc2MTIwNzQ2OHww&ixlib=rb-4.1.0&q=80&w=1080" />

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
        imageUrl="https://images.unsplash.com/photo-1580916782504-3c4ac5200924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaG9jb2xhdGUlMjB0cnVmZmxlcyUyMG1hcmJsZXxlbnwxfHx8fDE3NjEyMDc0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080" 
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