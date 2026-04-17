import { motion } from 'motion/react';
import { useState } from 'react';

export function CakesHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
              CAKES & BAKES
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-[52px] leading-tight lg:leading-[64px] text-[#6B8A47]"
              style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
            >
              Artisanal Cakes & Pastries
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
              Browse our selection of handcrafted cakes and pastries, customize your order, and bring sweetness to your special occasion.
            </motion.p>

            {/* Buttons Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Order Now Button */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight - 64,
                    behavior: 'smooth'
                  });
                }}
                className="bg-[#6B8A47] text-white px-6 py-3 rounded-[10px] hover:bg-[#D5B36B] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Order Now
              </motion.button>

              {/* Custom Cake Enquiry Button */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const enquirySection = document.querySelector('[data-section="custom-enquiry"]');
                  if (enquirySection) {
                    enquirySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="bg-transparent border-2 border-[#6B8A47] text-[#6B8A47] px-6 py-3 rounded-[10px] hover:bg-[#6B8A47] hover:text-white transition-colors duration-300"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Custom Enquiry
              </motion.button>

              {/* Baking Classes Button */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const bakingSection = document.querySelector('[data-section="baking-classes"]');
                  if (bakingSection) {
                    bakingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="inline-flex flex-col items-start gap-1 text-[#6B8A47] hover:text-[#D5B36B] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <span className="inline-flex items-center gap-2">
                  Baking Classes
                  <span className="text-xl">→</span>
                </span>
                <span className="w-full h-[2px] bg-[#6B8A47] transition-colors duration-300" style={{ backgroundColor: 'currentColor' }}></span>
              </motion.button>
            </motion.div>
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
              src="https://images.unsplash.com/photo-1737700088028-fae0666feb83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY2FrZSUyMGRpc3BsYXklMjBiYWtlcnl8ZW58MXx8fHwxNzc1Mjg2MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Artisanal cakes and pastries"
              className="w-full h-full object-cover scale-110"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}