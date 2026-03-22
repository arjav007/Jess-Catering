import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function BehindTheScenes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const images = [
    'https://images.unsplash.com/photo-1769955817432-641929f613f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGtpdGNoZW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNTMwMTA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjB0ZW1wZXJpbmclMjBwb3VyaW5nfGVufDF8fHx8MTc3MjU2MzA3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1661505300261-d45fa3e29890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGZvb2QlMjBwbGF0aW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzI1NjMwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1759673824858-d4050871d322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBraXRjaGVuJTIwcHJlcGFyYXRpb24lMjBpbmdyZWRpZW50c3xlbnwxfHx8fDE3NzI1NjMwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1605138693981-6c8a5ea87796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBjaGVmJTIwYmFraW5nJTIwZGVzc2VydHN8ZW58MXx8fHwxNzcyNTYzMDczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1771154139725-f2b0b4891430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGV2ZW50JTIwZm9vZCUyMHNlcnZpY2V8ZW58MXx8fHwxNzcyNTU3NTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1665088127661-83aeff6104c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwcHJlcGFyYXRpb24lMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzcyNTYzMDc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (
    <div ref={ref} className="bg-white overflow-hidden">
      <div className="mx-auto px-6 md:px-16 py-10 md:py-14">
        <div className="flex flex-col items-center gap-9">
          <div className="text-center space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-[52px] leading-tight text-[#6B8A47]"
              style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
            >
              Behind the Scenes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-[28px] text-[#6E564A]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              A glimpse into our kitchen where passion meets perfection
            </motion.p>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Gallery - Full Width */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-8 pb-4 pl-6 md:pl-16"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="flex-shrink-0 w-80 h-80 md:w-96 md:h-80 rounded-[96px] overflow-hidden group cursor-pointer"
            >
              <img
                src={image}
                alt={`Behind the scenes ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
          {/* Spacer for right padding */}
          <div className="flex-shrink-0 w-6 md:w-16" aria-hidden="true"></div>
        </motion.div>
      </div>
    </div>
  );
}