import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Heart, Users, Star } from 'lucide-react@0.487.0';

export function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const values = [
    {
      icon: Award,
      title: 'Quality',
      description: 'Only the freshest, finest ingredients make it to your plate',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We cook with heart and intention in every single dish',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Serving with pride across Melbourne, one celebration at a time',
    },
    {
      icon: Star,
      title: 'Authenticity',
      description: 'Staying true to traditional recipes and time-honored methods',
    },
  ];

  return (
    <div ref={ref} className="bg-[#F9F7F4]">
      <div className="mx-auto px-6 md:px-16 py-10 md:py-14">
        <div className="flex flex-col items-center gap-9">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[52px] leading-tight text-[#6B8A47] text-center"
            style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
          >
            Our Philosophy
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl leading-[28px] text-[rgba(75,46,32,0.8)] text-center max-w-[731px]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            We believe food connects people — it's love shared on a plate. Every dish we create reflects quality, authenticity, and care.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white border border-[#6B8A47] rounded-2xl p-8 flex flex-col items-center gap-4 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[rgba(107,138,71,0.1)] flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#6B8A47]" strokeWidth={2} />
                  </div>
                  <div className="space-y-3">
                    <h3
                      className="text-2xl leading-[28px] text-[#6B8A47]"
                      style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
                    >
                      {value.title}
                    </h3>
                    <p
                      className="text-base leading-[26px] text-[#6E564B]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}