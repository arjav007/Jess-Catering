import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { OrderMenuCard } from './OrderMenuCard';
import { CartSidebar, FloatingCartButton } from './CartSidebar';
import { ImageLightbox } from '../ImageLightbox';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  isVeg?: boolean;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface StepSelectMenuProps {
  menuItems: MenuItem[];
  selectedItems: Record<string, number>;
  onQuantityChange: (id: string, quantity: number) => void;
  onProceed: () => void;
}

const categories = ['All', 'Parsi Specialties', 'Indian Snacks', 'Continental', 'Desserts'];

export function StepSelectMenu({ menuItems, selectedItems, onQuantityChange, onProceed }: StepSelectMenuProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleImageClick = (item: MenuItem, imageIndex: number) => {
    setSelectedDish(item);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!selectedDish) return;
    
    setCurrentImageIndex((prev) => {
      if (direction === 'next') {
        return (prev + 1) % selectedDish.images.length;
      } else {
        return prev === 0 ? selectedDish.images.length - 1 : prev - 1;
      }
    });
  };

  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  const cartItems: CartItem[] = Object.entries(selectedItems)
    .filter(([_, quantity]) => quantity > 0)
    .map(([id, quantity]) => {
      const item = menuItems.find((item) => item.id === id);
      return {
        id,
        name: item?.name || '',
        price: item?.price || 0,
        quantity,
      };
    });

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <div className="mx-auto px-6 md:px-16 py-10 md:py-14">
        {/* Filter Bar */}
        <div className="mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 pb-2 min-w-max md:min-w-0">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-6 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap border-2
                  ${activeCategory === category
                    ? 'bg-[#6B8A47] text-white border-[#6B8A47]'
                    : 'bg-transparent border-[#6B8A47] text-[#4B2E20] hover:bg-[#D5B36B] hover:border-[#D5B36B] hover:text-white'
                  }
                `}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Menu Grid with Cart Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
              >
                {filteredItems.map((item) => (
                  <OrderMenuCard
                    key={item.id}
                    item={item}
                    quantity={selectedItems[item.id] || 0}
                    onQuantityChange={onQuantityChange}
                    layout="vertical"
                    onImageClick={() => handleImageClick(item, 0)}
                  />
                ))}

                {filteredItems.length === 0 && (
                  <div className="col-span-full text-center py-12">
                    <p
                      className="text-[#4B2E20]/60"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      No items found in this category.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Cart Sidebar */}
          <div className="hidden lg:block">
            <CartSidebar
              items={cartItems}
              onProceed={onProceed}
              isMobile={false}
            />
          </div>
        </div>
      </div>

      {/* Mobile Floating Cart Button */}
      <FloatingCartButton
        itemCount={totalItems}
        onClick={() => setIsMobileCartOpen(true)}
      />

      {/* Mobile Cart Drawer */}
      <CartSidebar
        items={cartItems}
        isOpen={isMobileCartOpen}
        onClose={() => setIsMobileCartOpen(false)}
        onProceed={() => {
          setIsMobileCartOpen(false);
          onProceed();
        }}
        isMobile={true}
      />

      {/* Image Lightbox */}
      {selectedDish && (
        <ImageLightbox
          images={selectedDish.images}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={handleNavigate}
          dishName={selectedDish.name}
          description={selectedDish.description}
        />
      )}
    </div>
  );
}