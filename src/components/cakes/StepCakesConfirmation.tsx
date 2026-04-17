import { motion } from 'motion/react';
import { Check, Home, UtensilsCrossed } from 'lucide-react@0.487.0';

interface StepCakesConfirmationProps {
  onReturnHome?: () => void;
  onExploreMenu?: () => void;
}

export function StepCakesConfirmation({ onReturnHome, onExploreMenu }: StepCakesConfirmationProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F7F4] to-white flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-2xl w-full text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#6B8A47] flex items-center justify-center">
              <Check className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={3} />
            </div>
            <motion.div
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full bg-[#6B8A47]"
            />
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-[52px] text-[#6B8A47] mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Order Confirmed!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-[#4B2E20]/80 mb-2"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Thank you for your order.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-base md:text-lg text-[#4B2E20]/60 mb-12"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          We've received your order and will be in touch shortly to confirm the details.
          A confirmation email has been sent to your inbox.
        </motion.p>

        {/* Order Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-md mb-8"
        >
          <h3
            className="text-xl md:text-2xl text-[#6B8A47] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            What happens next?
          </h3>
          <div className="space-y-4 text-left">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#6B8A47]/10 flex items-center justify-center">
                <span
                  className="text-[#6B8A47]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  1
                </span>
              </div>
              <div>
                <p
                  className="text-[#4B2E20]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <strong>Confirmation:</strong> We'll review your order and contact you within 24 hours.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#6B8A47]/10 flex items-center justify-center">
                <span
                  className="text-[#6B8A47]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  2
                </span>
              </div>
              <div>
                <p
                  className="text-[#4B2E20]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <strong>Preparation:</strong> We'll start crafting your cakes and treats with care.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#6B8A47]/10 flex items-center justify-center">
                <span
                  className="text-[#6B8A47]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  3
                </span>
              </div>
              <div>
                <p
                  className="text-[#4B2E20]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <strong>Delivery:</strong> Your order will be delivered fresh on your chosen date.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {onReturnHome && (
            <button
              onClick={onReturnHome}
              className="px-8 py-4 bg-transparent border-2 border-[#6B8A47] text-[#6B8A47] rounded-[10px] hover:bg-[#6B8A47]/5 transition-all duration-300 flex items-center justify-center gap-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <Home className="w-5 h-5" />
              Return Home
            </button>
          )}

          {onExploreMenu && (
            <button
              onClick={onExploreMenu}
              className="px-8 py-4 bg-[#6B8A47] text-white rounded-[10px] hover:bg-[#D5B36B] transition-all duration-300 flex items-center justify-center gap-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <UtensilsCrossed className="w-5 h-5" />
              Explore Full Menu
            </button>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
