import { motion } from 'motion/react';
import { useState } from 'react';

export function ContactHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / innerWidth;
    const y = (clientY - innerHeight / 2) / innerHeight;
    setMousePosition({ x, y });
  };

  const handleContactClick = () => {
    const formSection = document.querySelector('form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="bg-white">
      <div 
        className="mx-auto px-6 md:px-16 pt-[68px] md:pt-[76px] pb-16"
        onMouseMove={handleMouseMove}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span
                className="text-[#C49533] tracking-[0.8px] uppercase text-base"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Get in Touch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-[52px] leading-tight md:leading-[64px] text-[#6B8A47]"
              style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
            >
              We'd Love to Hear From You
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
              className="text-lg md:text-xl leading-[30px] text-[#6E564A]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Whether you're planning a cozy dinner or a grand celebration, we're here to make it delicious.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              onClick={handleContactClick}
              className="bg-[#6B8A47] text-white px-7 py-4 rounded-[10px] hover:bg-[#D5B36B] transition-all duration-300 text-base"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* Right Column - Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] lg:h-[652px] rounded-2xl overflow-hidden"
          >
            <motion.div
              style={{
                x: mousePosition.x * 5,
                y: mousePosition.y * 5,
              }}
              className="w-full h-full"
            >
              <img
                src="https://images.unsplash.com/photo-1661505300261-d45fa3e29890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHBsYXRpbmclMjBmb29kJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjEyMTk2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Elegant food plating"
                className="w-full h-full object-cover scale-110"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}