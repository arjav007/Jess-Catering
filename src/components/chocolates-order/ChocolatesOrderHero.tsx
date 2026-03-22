import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ChocolatesOrderHero() {
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
              CHOCOLATES ORDER
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-[52px] leading-tight lg:leading-[64px] text-[#6B8A47]"
              style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
            >
              Indulge in Luxury
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
              Select your handcrafted chocolates, provide delivery details, and review — a delightful journey from selection to doorstep.
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
            <motion.div
              style={{
                x: mousePosition.x * 5,
                y: mousePosition.y * 5,
              }}
              className="w-full h-full"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1580916782504-3c4ac5200924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaG9jb2xhdGUlMjB0cnVmZmxlcyUyMG1hcmJsZXxlbnwxfHx8fDE3NjEyMDc0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury chocolates spread"
                className="w-full h-full object-cover scale-110"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}