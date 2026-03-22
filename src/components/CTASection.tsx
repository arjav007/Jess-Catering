import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface CTASectionProps {
  onContactClick?: () => void;
}

export function CTASection({ onContactClick }: CTASectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="bg-white">
      <div className="mx-auto px-6 md:px-16 py-16 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 text-center max-w-[896px] mx-auto"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-[52px] leading-tight text-[#6B8A47]"
            style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
          >
            Ready to host your next event or gift our handmade chocolates?
          </h2>

          <p
            className="text-xl leading-[28px] text-[#6E564B]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Let's create something memorable together.
          </p>

          <button
            onClick={onContactClick}
            className="bg-[#6B8A47] text-white px-7 py-4 rounded-[10px] hover:bg-[#D5B36B] transition-all duration-300 text-base mt-2"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
}