import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="bg-white">
      <div className="mx-auto px-6 md:px-16 py-10 md:py-14 space-y-16">
        {/* First Story Section - Image Left, Text Right */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="h-[500px] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1593759608363-fde2fa65f5d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGluZ3JlZGllbnRzJTIwY29va2luZyUyMGtpdGNoZW58ZW58MXx8fHwxNzcyNTYyODIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Fresh ingredients"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#F9F7F4] p-12 rounded-2xl space-y-5"
          >
            <h3
              className="text-[36px] leading-[40px] text-[#6B8A47]"
              style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
            >
              How It All Began
            </h3>

            <div className="h-[2px] w-16 bg-[#C49533]" />

            <p
              className="text-[18px] leading-[29.25px] text-[#6E564A] max-w-[491px]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              It all started with a passion passed down from my mother. As a teenager, I helped her in the kitchen every day — learning that cooking is both art and love. Those early memories shaped everything Jess Catering stands for today.
            </p>
          </motion.div>
        </div>

        {/* Second Story Section - Text Left, Image Right */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - shown first on mobile, second on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#F9F7F4] p-8 md:p-12 rounded-2xl space-y-5 lg:max-w-[592px] order-2 lg:order-1"
          >
            <h3
              className="text-3xl md:text-4xl leading-[46px] text-[#6B8A47]"
              style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
            >
              Crafted with Care, Loved in Melbourne
            </h3>

            <div className="h-[2px] w-16 bg-[#C49533]" />

            <p
              className="text-lg leading-[29.25px] text-[#6E564A]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              What began as home-cooked meals for friends grew into a full-fledged catering journey filled with laughter, aromas, and flavor. Every order we deliver still carries that personal touch — the taste of home served with professionalism.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-[400px] md:h-[500px] rounded-2xl overflow-hidden order-1 lg:order-2"
          >
            <img
              src="https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?w=800&q=80"
              alt="Chocolate making"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}