import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react@0.487.0';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from './ui/carousel';

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  images: string[];
  onImageClick: (imageIndex: number) => void;
  delay?: number;
}

export function MenuCard({ name, description, price, images, onImageClick, delay = 0 }: MenuCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Carousel */}
      <div className="relative overflow-hidden rounded-2xl group">
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <motion.div
                  className="cursor-pointer"
                  onClick={() => onImageClick(index)}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${name} - Image ${index + 1}`}
                    className="w-full h-72 object-cover"
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows - Show on hover */}
          {images.length > 1 && (
            <>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-[#6B8A47] text-white transition-all duration-300 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-[#6B8A47] text-white transition-all duration-300 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </>
          )}

          {/* Dots Indicator */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    api?.scrollTo(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/80 w-2'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </Carousel>
      </div>

      {/* Card Content */}
      <div className="py-2">
        <h3
          className="text-2xl leading-[32px] text-[#6B8A47] mb-3"
          style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
        >
          {name}
        </h3>

        <div className="space-y-6">
          <p
            className="text-base leading-[26px] text-[#6E564A] line-clamp-2 h-[52px] overflow-hidden"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {description}
          </p>
          
          <p
            className="text-xl leading-[28px] text-[#C49533]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            A${price}
          </p>
        </div>
      </div>
    </motion.div>
  );
}