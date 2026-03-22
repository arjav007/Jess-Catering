import { motion } from 'motion/react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <motion.div 
      className="bg-white sticky top-0 z-30 py-6 border-b border-[#F9F7F4]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto px-6 md:px-16">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 text-base border-2 ${
                activeCategory === category
                  ? 'bg-[#6B8A47] text-white border-[#6B8A47]'
                  : 'bg-white border-[#6B8A47] text-[#6E564A] hover:bg-[#F9F7F4]'
              }`}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  );
}