import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Leaf, Utensils, Heart, Sparkles } from 'lucide-react@0.487.0';

export function AboutIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const features = [
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
    },
    {
      icon: Utensils,
      title: 'Handcrafted with Care',
    },
    {
      icon: Heart,
      title: 'Made with Love',
    },
    {
      icon: Sparkles,
      title: 'Authentic Flavours',
    },
  ];

  return (
    <div ref={ref} className="bg-[#F9F7F4]">
      <div className="mx-auto px-6 md:px-16 py-10 md:py-14">
        <div className="flex flex-col items-center gap-9 md:gap-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[52px] leading-tight text-[#6B8A47] text-center"
            style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
          >
            Welcome to Jess Catering Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl leading-[30px] text-[#6E564A] text-center max-w-[1083px]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            We is dedicated to providing you with yummy food that feels home-cooked. Jess Catering offers catering for individuals, small events, and gatherings of up to 50 guests across Melbourne. From handcrafted Parsi specialties to modern Indian snacks, every dish we serve celebrates flavor, care, and tradition.
          </motion.p>

          {/* Icon Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[896px]">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-16 h-16 rounded-full border-2 border-[#6B8A47] flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#6B8A47]" strokeWidth={2} />
                  </div>
                  <p
                    className="text-[#6E564A] text-xl text-center"
                    style={{ fontFamily: 'F37 Caslon, serif' }}
                  >
                    {feature.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}