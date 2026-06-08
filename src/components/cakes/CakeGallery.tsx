import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Calendar, Users, Palette } from 'lucide-react@0.487.0';
import { EnquiryFormPopup } from './EnquiryFormPopup';

export function CakeGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

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

      {/* Enquiry Form Popup */}
      <EnquiryFormPopup
        isOpen={showEnquiryForm}
        onClose={() => setShowEnquiryForm(false)}
      />
    </>
  );
}