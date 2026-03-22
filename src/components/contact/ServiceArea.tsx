import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin } from 'lucide-react@0.487.0';

export function ServiceArea() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="bg-[#FAF8F5] py-24 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="w-20 h-20 rounded-full border-2 border-[#D5B36B] flex items-center justify-center">
            <MapPin className="w-10 h-10 text-[#D5B36B]" />
          </div>
        </motion.div>

        {/* Gold Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-0.5 bg-[#D5B36B] mx-auto mb-8"
        />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-4xl mb-6 text-[#6B8A47]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Serving Melbourne and Beyond
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-[#4B2E20]/80 leading-relaxed max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          We proudly cater across Melbourne's suburbs — from intimate dinners to lively gatherings. Wherever food brings people together, we're happy to be there.
        </motion.p>

        {/* Stylized Map Outline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12"
        >
          <svg
            className="w-48 h-48 mx-auto opacity-20"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simple Melbourne city outline */}
            <path
              d="M100 30 L140 60 L150 100 L130 140 L90 150 L60 130 L50 90 L70 50 Z"
              stroke="#6B8A47"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="100" cy="100" r="4" fill="#D5B36B" />
            {/* Radiating lines */}
            <circle cx="100" cy="100" r="30" stroke="#D5B36B" strokeWidth="1" fill="none" opacity="0.3" />
            <circle cx="100" cy="100" r="50" stroke="#D5B36B" strokeWidth="1" fill="none" opacity="0.2" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}