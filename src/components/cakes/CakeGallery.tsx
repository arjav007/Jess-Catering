import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { X, Calendar, Users, Palette } from 'lucide-react@0.487.0';
import { EnquiryFormPopup } from './EnquiryFormPopup';

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
}

export function CakeGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  const galleryImages: GalleryImage[] = [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1640794334523-b299f14d28db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwbHV4dXJpb3VzfGVufDF8fHx8MTc3NTI4NTc2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Chocolate Ganache Masterpiece',
      category: 'Celebration Cakes'
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1584158531319-96912adae663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzc1Mjg1NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Elegant Wedding Cake',
      category: 'Wedding Cakes'
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2UlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzYzMzE1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Birthday Celebration',
      category: 'Birthday Cakes'
    },
    {
      id: '5',
      url: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlcyUyMGRlY29yYXRlZHxlbnwxfHx8fDE3NzYzMzE1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Gourmet Cupcakes',
      category: 'Cupcakes'
    },
    {
      id: '6',
      url: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZSUyMGx1eHVyeXxlbnwxfHx8fDE3NzYzMzE1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Signature Dessert Cake',
      category: 'Celebration Cakes'
    },
    {
      id: '7',
      url: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWVyZWQlMjBjYWtlJTIwd2VkZGluZ3xlbnwxfHx8fDE3NzYzMzE1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Multi-Tiered Elegance',
      category: 'Wedding Cakes'
    }
  ];

  return (
    <>
      <section ref={ref} data-section="custom-enquiry" className="bg-white px-6 md:px-16 py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#D5B36B] tracking-[0.8px] uppercase text-base mb-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              CUSTOM CREATIONS
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl text-[#6B8A47] mb-6"
              style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
            >
              Custom Cake Enquiry
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={isInView ? { opacity: 1, width: '64px' } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-[2px] bg-[#D5B36B] mx-auto mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#6E564A] max-w-[700px] mx-auto leading-[30px] mb-8 text-[16px]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
             Looking for something unique? Whether it's a bespoke wedding cake, a custom birthday design, or special dietary requirements, we're here to bring your vision to life.
          </motion.p>
          </motion.div>

          {/* Custom Cake Information Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="bg-[#F9F7F4] rounded-2xl p-8 text-center">
              <div className="w-14 h-14 bg-[#6B8A47] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 
                className="text-xl text-[#6B8A47] mb-3"
                style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
              >
                Plan Ahead
              </h3>
              <p 
                className="text-[#6E564A] leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Custom cakes require 2-3 weeks notice for design, baking, and decoration to perfection.
              </p>
            </div>

            <div className="bg-[#F9F7F4] rounded-2xl p-8 text-center">
              <div className="w-14 h-14 bg-[#6B8A47] rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="text-white" size={24} />
              </div>
              <h3 
                className="text-xl text-[#6B8A47] mb-3"
                style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
              >
                Fully Customizable
              </h3>
              <p 
                className="text-[#6E564A] leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Choose your flavors, fillings, colors, decorations, and theme to match your vision.
              </p>
            </div>

            <div className="bg-[#F9F7F4] rounded-2xl p-8 text-center">
              <div className="w-14 h-14 bg-[#6B8A47] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 
                className="text-xl text-[#6B8A47] mb-3"
                style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
              >
                Any Size
              </h3>
              <p 
                className="text-[#6E564A] leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                From intimate gatherings to grand celebrations, we create cakes for 10 to 500+ guests.
              </p>
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4B2E20]/90 via-[#4B2E20]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p 
                    className="text-[#D5B36B] text-sm uppercase tracking-wider mb-2"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {image.category}
                  </p>
                  <h3 
                    className="text-white text-xl"
                    style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
                  >
                    {image.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowEnquiryForm(true)}
              className="bg-[#6B8A47] text-white px-8 py-4 rounded-[10px] hover:bg-[#D5B36B] transition-colors duration-300 text-lg"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Submit Enquiry
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FIXED: Bulletproof Inline Backdrop Blur */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 sm:p-6 md:p-8"
            // THE FIX: Forcing the blur directly on the style object guarantees it works across all browsers!
            style={{ 
              zIndex: 99999,
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)'
            }} 
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 z-10"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-4xl flex flex-col items-center justify-center mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-auto h-auto max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="text-center mt-6 w-full">
                <p 
                  className="text-[#D5B36B] text-sm uppercase tracking-wider mb-2 font-medium"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {selectedImage.category}
                </p>
                <h3 
                  className="text-white text-2xl md:text-3xl"
                  style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
                >
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enquiry Form Popup */}
      <EnquiryFormPopup
        isOpen={showEnquiryForm}
        onClose={() => setShowEnquiryForm(false)}
      />
    </>
  );
}