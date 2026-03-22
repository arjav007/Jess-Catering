import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Quote } from 'lucide-react@0.487.0';

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Jess Catering transformed our wedding reception into a culinary masterpiece. The Parsi specialties were absolutely divine, and our guests are still talking about those handcrafted chocolates!",
      author: "Sarah & Michael",
      event: "Wedding Reception",
    },
    {
      quote: "We've used Jess Catering for three corporate events now, and each time the quality and presentation exceed expectations. The attention to detail and authentic flavors make all the difference.",
      author: "James Chen",
      event: "Corporate Event",
    },
    {
      quote: "The samosas and dhokla brought back memories of my childhood. It's rare to find such authentic, home-style cooking with this level of professionalism. Absolutely recommend!",
      author: "Priya Sharma",
      event: "Family Gathering",
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
            What Our Clients Say
          </motion.h2>

          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-4xl"
          >
            <div className="bg-white border border-[#6B8A47] rounded-2xl p-8 md:p-12">
              <div className="flex flex-col items-center gap-6 text-center">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-[#C49533]" strokeWidth={1.5} />

                {/* Quote Text */}
                <p
                  className="text-xl md:text-2xl leading-[36px] text-[#6E564A]"
                  style={{ fontFamily: 'F37 Caslon, serif' }}
                >
                  "{testimonials[activeIndex].quote}"
                </p>

                {/* Divider */}
                <div className="h-[2px] w-16 bg-[#C49533]" />

                {/* Author */}
                <div className="space-y-2">
                  <p
                    className="text-base leading-[24px] text-[#6B8A47]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {testimonials[activeIndex].author}
                  </p>
                  <p
                    className="text-sm leading-[21px] text-[rgba(75,46,32,0.6)] uppercase tracking-[0.7px]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {testimonials[activeIndex].event}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 h-2 bg-[#6B8A47]'
                    : 'w-2 h-2 bg-[rgba(107,138,71,0.3)]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}