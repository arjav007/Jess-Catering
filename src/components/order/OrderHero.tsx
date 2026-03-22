import { motion } from 'motion/react';
import { useState } from 'react';
import imgCateringHero from "figma:asset/6a4d55282a122b6156d097025368791c1d1847c6.png";

export function OrderHero() {
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
              CATERING ORDER
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-[52px] leading-tight lg:leading-[64px] text-[#6B8A47]"
              style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
            >
              Order With Ease
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
              Select your dishes, share your event details, and review before confirming — a seamless, handcrafted experience.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ backgroundColor: '#D5B36B' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight - 64,
                  behavior: 'smooth'
                });
              }}
              className="bg-[#6B8A47] text-white px-7 py-4 rounded-[10px] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Order Now
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
              src={imgCateringHero}
              alt="Catering spread"
              className="w-full h-full object-cover scale-110"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}