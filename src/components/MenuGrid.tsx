import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuCard } from './MenuCard';
import { ImageLightbox } from './ImageLightbox';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  images: string[];
  category: string;
}

interface MenuGridProps {
  items: MenuItem[];
  activeCategory: string;
}

export function MenuGrid({ items, activeCategory }: MenuGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter(item => item.category === activeCategory);

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

  return (
    <>
     <div id="menu-grid" className="bg-white pt-0 pb-10 px-6 md:px-16">
        <div className="mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <MenuCard
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  images={item.images}
                  onImageClick={(imageIndex) => handleImageClick(item, imageIndex)}
                  delay={index * 0.1}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-[#4B2E20]/60" style={{ fontFamily: 'var(--font-body)' }}>
                No items found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Lightbox */}
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
    </>
  );
}