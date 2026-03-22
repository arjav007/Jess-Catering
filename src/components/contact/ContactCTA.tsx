import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface ContactCTAProps {
  onViewMenu?: () => void;
  onGetQuote?: () => void;
}

export function ContactCTA({ onViewMenu, onGetQuote }: ContactCTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="bg-[#FAF8F5] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl mb-6 text-[#6B8A47]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Ready to Make Your Next Event Special?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-[#4B2E20]/80 leading-relaxed mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          From handcrafted chocolates to full-service catering, Jess Catering brings warmth to every occasion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ y: -2, backgroundColor: '#D5B36B' }}
            onClick={onViewMenu}
            className="px-8 py-4 bg-[#6B8A47] text-white rounded-lg transition-all duration-300 min-w-[200px]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            View Menu
          </motion.button>

          <motion.button
            whileHover={{ y: -2, backgroundColor: '#F9F7F4' }}
            onClick={onGetQuote}
            className="px-8 py-4 bg-transparent border-2 border-[#6B8A47] text-[#6B8A47] rounded-lg transition-all duration-300 hover:border-[#D5B36B] hover:text-[#D5B36B] min-w-[200px]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Get a Quote
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}