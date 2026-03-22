import { motion, useInView } from 'motion/react';
import { ArrowRight } from 'lucide-react@0.487.0';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef, useState, useEffect } from 'react';

interface ChocolatesSectionProps {
  imageUrl: string;
  onOrderClick?: () => void;
}

export function ChocolatesSection({ imageUrl, onOrderClick }: ChocolatesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className="relative bg-[#FAF8F5] overflow-hidden">
      <div className="mx-auto px-6 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side - with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden h-[400px] md:h-[500px] rounded-2xl order-2 lg:order-1"
          >
            <motion.div
              style={{
                transform: `translateY(${(scrollY - (ref.current ? (ref.current as HTMLElement).offsetTop : 0)) * 0.1}px)`,
              }}
              className="w-full h-full"
            >
              <ImageWithFallback
                src={imageUrl}
                alt="Order With Ease"
                className="w-full h-full object-cover scale-110"
              />
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6 order-1 lg:order-2"
          >
            <h2
              className="text-4xl md:text-5xl lg:text-[52px] leading-tight text-[#6B8A47]"
              style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
            >
              Order With Ease
            </h2>

            <p
              className="text-lg leading-[29.25px] text-[rgba(75,46,32,0.8)]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Select your dishes, share your event details, and review before confirming — a seamless, handcrafted experience.
            </p>

            <motion.button
              onClick={onOrderClick}
              className="inline-flex items-center gap-2 text-[#6B8A47] hover:text-[#D5B36B] group cursor-pointer w-fit transition-colors duration-300 border-b-2 border-[#6B8A47] hover:border-[#D5B36B] pb-0.5"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span className="text-base">Order Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}