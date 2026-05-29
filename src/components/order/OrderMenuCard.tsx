import { motion } from 'motion/react';
import { Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react@0.487.0';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  isVeg?: boolean;
  externalUrl?: string; // NEW: Added to support external website links
}

interface OrderMenuCardProps {
  item: MenuItem;
  quantity: number;
  onQuantityChange: (id: string, quantity: number) => void;
  layout?: 'vertical' | 'horizontal';
  onImageClick?: (imageUrl: string) => void; 
}

export function OrderMenuCard({ item, quantity, onQuantityChange, layout = 'vertical', onImageClick }: OrderMenuCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isExternal = !!item.externalUrl;

  const handleIncrement = () => {
    if (!isExternal) onQuantityChange(item.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (!isExternal && quantity > 0) {
      onQuantityChange(item.id, quantity - 1);
    }
  };

  const handleImageChange = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.images.length);
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + item.images.length) % item.images.length);
    }
  };

  const handleCardOrImageClick = () => {
    if (isExternal) {
      window.open(item.externalUrl, '_blank');
    } else {
      onImageClick?.(item.images[currentImageIndex]);
    }
  };

  if (layout === 'horizontal') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        whileHover={{ y: -2, boxShadow: '0 8px 20px rgba(107, 138, 71, 0.15)' }}
        className={`bg-[#F9F7F4] rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${isExternal ? 'cursor-pointer' : ''}`}
        onClick={() => isExternal && handleCardOrImageClick()}
      >
        <div className="flex">
          {/* Image */}
          <div 
            className={`w-2/5 flex-shrink-0 ${!isExternal ? 'cursor-pointer' : ''}`} 
            onClick={() => !isExternal && handleCardOrImageClick()}
          >
            <div className="relative h-full min-h-[140px]">
              <ImageWithFallback
                src={item.images[currentImageIndex]}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              
              {item.images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                  {item.images.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50 w-1'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-[#6B8A47] mb-1" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.125rem' }}>
                {item.name}
              </h3>
              <p className="text-[#6e564a] leading-[26px] line-clamp-2 h-[52px] overflow-hidden" style={{ fontFamily: 'var(--font-body)', fontSize: '16px' }}>
                {item.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#D5B36B]" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.125rem' }}>
                A${item.price}
              </span>

              {/* Conditional Rendering for External Link vs Add Button */}
              {isExternal ? (
                <span className="text-[#6B8A47] text-sm font-medium tracking-wide flex items-center gap-1">
                  Visit Website ↗
                </span>
              ) : quantity === 0 ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleIncrement}
                  className="px-4 py-2 bg-[#6B8A47] text-white rounded-lg text-sm transition-colors duration-300 hover:bg-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Add
                </motion.button>
              ) : (
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleDecrement}
                    className="w-8 h-8 rounded-full border-2 border-[#6B8A47] flex items-center justify-center transition-colors duration-300 hover:border-[#D5B36B] hover:bg-[#D5B36B]/10"
                  >
                    <Minus className="w-4 h-4 text-[#6B8A47]" />
                  </motion.button>
                  <span className="w-6 text-center text-[#2E1B12]" style={{ fontFamily: 'var(--font-body)' }}>
                    {quantity}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleIncrement}
                    className="w-8 h-8 rounded-full border-2 border-[#6B8A47] flex items-center justify-center transition-colors duration-300 hover:border-[#D5B36B] hover:bg-[#D5B36B]/10"
                  >
                    <Plus className="w-4 h-4 text-[#6B8A47]" />
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Vertical Layout (Desktop)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex flex-col items-start w-full transition-all duration-300 ${isExternal ? 'cursor-pointer' : ''}`}
      onClick={() => isExternal && handleCardOrImageClick()}
    >
      {/* Image Container */}
      <div 
        className={`relative w-full h-[288px] overflow-clip rounded-[14px] group ${!isExternal ? 'cursor-pointer' : ''}`} 
        onClick={(e) => {
          if (isExternal) return; // Handled by parent div
          handleCardOrImageClick();
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ImageWithFallback
          src={item.images[currentImageIndex]}
          alt={item.name}
          className="w-full h-full object-cover rounded-[14px] transition-transform duration-300 group-hover:scale-105"
        />

        {item.images.length > 1 && (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => {
                e.stopPropagation();
                handleImageChange('prev');
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-[#6B8A47] text-white transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => {
                e.stopPropagation();
                handleImageChange('next');
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-[#6B8A47] text-white transition-all duration-300 z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </>
        )}
        
        {item.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {item.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80 w-1.5'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="w-full pt-[12px] flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[4px]">
          <h3 className="text-[#6B8A47] leading-[32px]" style={{ fontFamily: 'var(--font-heading)', fontSize: '24px' }}>
            {item.name}
          </h3>
          <p className="text-[#6e564a] leading-[26px] line-clamp-2 h-[52px]" style={{ fontFamily: 'var(--font-body)', fontSize: '16px' }}>
            {item.description}
          </p>
        </div>

        {/* Price and Controls */}
        <div className="flex items-center justify-between w-full">
          <span className="text-[#c49533] leading-[28px]" style={{ fontFamily: 'var(--font-body)', fontSize: '20px' }}>
            A${item.price}
          </span>

          {/* Conditional Rendering for External Link vs Add Button */}
          {isExternal ? (
            <div 
              className="px-2 py-[6px] text-[#6B8A47] flex items-center gap-1 font-medium group-hover:text-[#5a7339] transition-colors"
              style={{ fontFamily: 'var(--font-body)', fontSize: '16px' }}
            >
              Visit Website ↗
            </div>
          ) : quantity === 0 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleIncrement}
              className="px-6 py-[6px] border border-[#6B8A47] bg-transparent text-[#6B8A47] rounded-[10px] transition-colors duration-300 hover:bg-[#6B8A47] hover:text-white"
              style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: '24px' }}
            >
              Add
            </motion.button>
          ) : (
            <div className="flex items-center gap-[12px] h-[40px]">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleDecrement}
                className="w-[40px] h-[40px] rounded-full border border-[#6B8A47] flex items-center justify-center transition-colors duration-300 hover:border-[#D5B36B] hover:bg-[#D5B36B]/10"
              >
                <Minus className="w-5 h-5 text-[#6B8A47]" />
              </motion.button>
              <span className="w-[32px] text-center text-[#6e564a] leading-[27px]" style={{ fontFamily: 'var(--font-body)', fontSize: '18px' }}>
                {quantity}
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleIncrement}
                className="flex-1 h-[40px] min-w-[40px] rounded-full border border-[#6B8A47] flex items-center justify-center transition-colors duration-300 hover:border-[#D5B36B] hover:bg-[#D5B36B]/10"
              >
                <Plus className="w-5 h-5 text-[#6B8A47]" />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}