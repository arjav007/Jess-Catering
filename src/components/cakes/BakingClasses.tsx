import { motion } from 'motion/react';

export function BakingClasses() {
  return (
    <section className="bg-white py-16 px-6 md:px-16" data-section="baking-classes">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row gap-6 lg:gap-[40px] items-start lg:items-center"
      >
        {/* Left - Image Container */}
        <div className="w-full lg:flex-[0_0_49%] h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shrink-0 order-1 lg:order-1">
          <div className="relative w-full h-full">
            {/* FIXED: Replaced the missing variable with a direct image string */}
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000"
              alt="Baking class"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right - Content Container */}
        <div className="bg-[#f9f7f4] rounded-2xl p-8 lg:p-[48px] w-full lg:flex-[0_0_47%] shrink-0 order-2 lg:order-2">
          <div className="h-auto lg:h-[344px] relative w-full">
            <div className="flex flex-col gap-[16px] items-start w-full">
              {/* Heading */}
              <div className="flex items-center">
                <h3
                  className="text-[28px] lg:text-[36px] leading-[32px] lg:leading-[40px] text-[#6b8a47]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Baking Classes
                </h3>
              </div>

              {/* Gold Divider */}
              <div className="bg-[#c49533] h-[2px] w-[64px]" />

              {/* Description */}
              <p
                className="text-[#6e564a] text-[16px] lg:text-[18px] leading-[26px] lg:leading-[28px] w-full"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Learn the art of baking with our expert-led classes. From basic techniques 
                to advanced cake decorating, we offer hands-on workshops for all skill levels.
              </p>

              {/* List */}
              <div className="flex flex-col gap-[8px] w-full">
                <div className="flex gap-[8px] w-full">
                  <div className="flex-shrink-0 w-[9px]">
                    <p className="text-[#6b8a47] text-[16px] leading-[24px]" style={{ fontFamily: 'var(--font-body)' }}>•</p>
                  </div>
                  <p className="text-[#6e564a] text-[16px] leading-[24px] flex-1" style={{ fontFamily: 'var(--font-body)' }}>
                    Small group sessions for personalized attention
                  </p>
                </div>
                <div className="flex gap-[8px] w-full">
                  <div className="flex-shrink-0 w-[9px]">
                    <p className="text-[#6b8a47] text-[16px] leading-[24px]" style={{ fontFamily: 'var(--font-body)' }}>•</p>
                  </div>
                  <p className="text-[#6e564a] text-[16px] leading-[24px] flex-1" style={{ fontFamily: 'var(--font-body)' }}>
                    Professional equipment and ingredients provided
                  </p>
                </div>
                <div className="flex gap-[8px] w-full">
                  <div className="flex-shrink-0 w-[9px]">
                    <p className="text-[#6b8a47] text-[16px] leading-[24px]" style={{ fontFamily: 'var(--font-body)' }}>•</p>
                  </div>
                  <p className="text-[#6e564a] text-[16px] leading-[24px] flex-1" style={{ fontFamily: 'var(--font-body)' }}>
                    Take home your delicious creations
                  </p>
                </div>
              </div>

              {/* Button with External Link Icon */}
              <a
                href="https://classbento.com.au/jess-catering"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6b8a47] text-white text-[16px] leading-[24px] rounded-[10px] h-[56px] px-8 hover:bg-[#D5B36B] transition-colors duration-300 inline-flex items-center gap-2 mt-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                View Classes
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}