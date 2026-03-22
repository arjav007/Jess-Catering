import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function SignatureCuisines() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const cuisines = [
    {
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80',
      title: 'Parsi Specialties',
      description: 'Traditional fish and meat dishes',
    },
    {
      image: 'https://images.unsplash.com/photo-1601050690117-3a1db5c75e1f?w=800&q=80',
      title: 'Indian Snacks',
      description: 'Samosas, bhajis, and more',
    },
    {
      image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80',
      title: 'Desserts & Chocolates',
      description: 'Handcrafted sweet creations',
    },
  ];

  return (
    <div ref={ref} className="bg-[#F9F7F4]">
      <div className="mx-auto px-6 md:px-16 py-10 md:py-14">
        <div className="flex flex-col items-center gap-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[52px] leading-tight text-[#6B8A47] text-center"
            style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
          >
            What We Love to Create
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {cuisines.map((cuisine, index) => (
              <motion.div
                key={cuisine.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex flex-col gap-4 items-center"
              >
                <div className="h-64 w-full rounded-2xl overflow-hidden group cursor-pointer">
                  <img
                    src={index === 1 ? "https://images.unsplash.com/photo-1760263051323-fcd7da7040b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHJlZXQlMjBmb29kJTIwc25hY2tzfGVufDF8fHx8MTc3MjU2MjkzNnww&ixlib=rb-4.1.0&q=80&w=1080" : cuisine.image}
                    alt={cuisine.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3
                    className="text-2xl leading-[28px] text-[#6B8A47]"
                    style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
                  >
                    {cuisine.title}
                  </h3>
                  <p
                    className="text-base leading-[24px] text-[#6E564A]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {cuisine.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}