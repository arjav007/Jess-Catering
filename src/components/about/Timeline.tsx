import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, Sparkles, Users, Smartphone } from 'lucide-react@0.487.0';

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const milestones = [
    {
      year: '2010',
      icon: Calendar,
      title: 'The Beginning',
      description: 'First catering order for a family gathering',
    },
    {
      year: '2015',
      icon: Sparkles,
      title: 'Sweet Expansion',
      description: 'Introduced handcrafted chocolates to the menu',
    },
    {
      year: '2020',
      icon: Users,
      title: 'Full Service',
      description: 'Expanded to full-service events for up to 50 guests',
    },
    {
      year: '2024',
      icon: Smartphone,
      title: 'Modern Touch',
      description: 'Digital transformation & brand refresh',
    },
  ];

  return (
    <div ref={ref} className="bg-white">
      <div className="mx-auto px-6 md:px-16 py-10 md:py-14">
        <div className="flex flex-col items-center gap-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[52px] leading-tight text-[#6B8A47] text-center"
            style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
          >
            Our Journey
          </motion.h2>

          {/* Desktop Timeline - Horizontal */}
          <div className="hidden md:block w-full">
            <div className="relative">
              <div className="grid grid-cols-4 gap-8">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  return (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="flex flex-col items-center gap-4 text-center relative"
                    >
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-full bg-[#6B8A47] flex items-center justify-center z-10">
                        <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>

                      {/* Year with connecting line */}
                      <div className="relative w-full flex items-center justify-center">
                        <p
                          className="text-2xl leading-[32px] text-[#C49533] relative z-10"
                          style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
                        >
                          {milestone.year}
                        </p>
                        
                        {/* Connecting line to next milestone (except for last item) */}
                        {index < milestones.length - 1 && (
                          <div 
                            className="absolute h-px bg-[#C49533] top-1/2 -translate-y-1/2"
                            style={{ 
                              left: 'calc(50% + 3rem)',
                              width: 'calc(100% - 4rem)',
                            }}
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <h3
                          className="text-2xl leading-[28px] text-[#6B8A47]"
                          style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
                        >
                          {milestone.title}
                        </h3>
                        <p
                          className="text-base leading-[24px] text-[#6E564A]"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {milestone.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="md:hidden w-full space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex gap-6"
                >
                  {/* Left - Icon and Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#6B8A47] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-px h-full bg-[#C49533] mt-4" />
                    )}
                  </div>

                  {/* Right - Content */}
                  <div className="flex-1 pb-8">
                    <p
                      className="text-2xl leading-[32px] text-[#C49533] mb-3"
                      style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
                    >
                      {milestone.year}
                    </p>
                    <h3
                      className="text-2xl leading-[28px] text-[#6B8A47] mb-2"
                      style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
                    >
                      {milestone.title}
                    </h3>
                    <p
                      className="text-base leading-[24px] text-[#6E564A]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {milestone.description}
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