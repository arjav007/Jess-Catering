import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function IntroText() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      id="menu-intro"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="bg-[#F9F7F4] py-20 px-6 md:px-16"
    >
      <div className="max-w-[700px] mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl mb-6 text-[#6B8A47]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Crafted with Care, Inspired by Tradition.
        </h2>
        
        <p
          className="text-lg md:text-xl text-[#4B2E20]/80 leading-relaxed mb-6"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          From soulful Parsi specialties to beloved Indian snacks, every dish from Jess Catering celebrates home-style flavor with elegance. Our handcrafted chocolates bring the perfect sweet finish to every celebration.
        </p>

        {/* Decorative Gold Line */}
        <div className="w-24 h-0.5 bg-[#D5B36B] mx-auto mt-8" />
      </div>
    </motion.div>
  );
}