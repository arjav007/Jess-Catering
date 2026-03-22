import { motion } from 'motion/react';
import { useState } from 'react';

export function AboutHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / innerWidth;
    const y = (clientY - innerHeight / 2) / innerHeight;
    setMousePosition({ x, y });
  };

  return (
    <div className="bg-white" onMouseMove={handleMouseMove}>
      <div className="mx-auto px-6 md:px-16 pt-[68px] md:pt-[76px] pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#C49533] tracking-[0.8px] uppercase text-base"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Our Story
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-[52px] leading-tight lg:leading-[64px] text-[#6B8A47]"
              style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
            >
              Food Crafted from the Heart
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '64px' }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="h-[2px] bg-[#C49533]"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg md:text-xl leading-[30px] text-[#6E564A] max-w-[504px]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Every dish we make carries a memory, a flavor, and a feeling — bringing warmth from our kitchen to your celebration.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ y: -2, backgroundColor: '#8AA660' }}
              className="bg-[#6B8A47] text-white px-7 py-4 rounded-[10px] transition-all duration-300 text-base"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Watch Our Story
            </motion.button>
          </motion.div>

          {/* Right Column - Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[450px] md:h-[550px] lg:h-[652px] rounded-2xl overflow-hidden"
          >
            <motion.img
              style={{
                x: mousePosition.x * 5,
                y: mousePosition.y * 5,
              }}
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
              alt="Culinary artistry"
              className="w-full h-full object-cover scale-110"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}