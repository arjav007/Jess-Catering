import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react@0.487.0';

interface StepConfirmationProps {
  onReturnHome: () => void;
  onExploreMenu: () => void;
}

export function StepConfirmation({ onReturnHome, onExploreMenu }: StepConfirmationProps) {
  return (
    <div className="bg-[#F9F7F4] min-h-screen py-12 px-4 md:px-6 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon with Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: 'spring', 
            stiffness: 200, 
            damping: 15,
            delay: 0.2 
          }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <motion.div
              initial={{ opacity: 0, scale: 1.5 }}
              animate={{ opacity: [0, 0.3, 0], scale: [1.5, 2, 2.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D5B36B] to-[#6B8A47]"
            />
            
            {/* Check circle */}
            <div className="relative bg-white rounded-full p-6 shadow-2xl">
              <CheckCircle2 className="w-24 h-24 text-[#6B8A47]" />
            </div>
          </div>
        </motion.div>

        {/* Gold shimmer line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D5B36B] to-transparent mx-auto mb-8 rounded-full"
        />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-4xl md:text-5xl lg:text-[52px] leading-tight text-[#6B8A47] text-center mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Thank You for Your Order!
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl text-[#4B2E20]/80 mb-12 leading-relaxed max-w-xl mx-auto"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          We'll reach out within 24 hours to confirm pricing and delivery. We can't wait to share our handcrafted chocolates with you!
        </motion.p>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="mb-12"
        >
          
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ y: -2, backgroundColor: '#D5B36B' }}
            whileTap={{ scale: 0.98 }}
            onClick={onReturnHome}
            className="px-8 py-4 bg-[#6B8A47] text-white rounded-lg transition-all duration-300 min-w-[200px]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Return Home
          </motion.button>

          <motion.button
            whileHover={{ y: -2, backgroundColor: '#F9F7F4' }}
            whileTap={{ scale: 0.98 }}
            onClick={onExploreMenu}
            className="px-8 py-4 bg-transparent border-2 border-[#6B8A47] text-[#6B8A47] rounded-lg transition-all duration-300 hover:border-[#D5B36B] hover:text-[#D5B36B] min-w-[200px]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Explore Menu
          </motion.button>
        </motion.div>

        {/* Additional reassurance */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-[#4B2E20]/50 mt-8 text-sm"
          style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic' }}
        >
          A confirmation email has been sent to your inbox.
        </motion.p>
      </div>
    </div>
  );
}
