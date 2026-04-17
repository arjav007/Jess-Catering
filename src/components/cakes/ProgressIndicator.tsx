import { motion } from 'motion/react';

interface ProgressIndicatorProps {
  currentStep: number;
}

const steps = [
  { number: 'I', label: 'Select Items' },
  { number: 'II', label: 'Event Details' },
  { number: 'III', label: 'Review' },
  { number: 'IV', label: 'Confirm' },
];

export function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  return (
    <div className="bg-[#F9F7F4] border-b border-[#D5B36B]/20 py-4 px-16">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Progress Bar */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Background Line */}
            <div className="absolute top-6 left-0 right-0 h-[2px] bg-[rgba(213,179,107,0.3)]" />

            {/* Steps */}
            <div className="relative flex justify-between items-start">
              {steps.map((step, index) => {
                const stepNumber = index + 1;
                const isActive = stepNumber === currentStep;
                const isPast = stepNumber < currentStep;
                const isFuture = stepNumber > currentStep;

                return (
                  <div key={step.number} className="flex flex-col items-center gap-2">
                    <motion.div
                      className={`
                        w-[50px] h-[50px] rounded-full flex items-center justify-center
                        transition-all duration-300
                        ${isActive ? 'bg-[#6B8A47]' : 'bg-white border-2 border-[rgba(213,179,107,0.4)]'}
                      `}
                      initial={{ scale: 0.8 }}
                      animate={{ 
                        scale: isActive ? 1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span
                        className={`
                          transition-colors duration-300
                          ${isActive ? 'text-white' : 'text-[#6e564a]'}
                        `}
                        style={{ fontFamily: 'var(--font-heading)', fontSize: '1.125rem', lineHeight: '27px' }}
                      >
                        {step.number}
                      </span>
                    </motion.div>
                    <p
                      className={`
                        text-sm transition-colors duration-300
                        ${isActive ? 'text-[#6B8A47]' : 'text-[#6e564a]'}
                      `}
                      style={{ fontFamily: 'var(--font-body)', lineHeight: '20px' }}
                    >
                      {step.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Progress Bar */}
        <div className="md:hidden">
          <div className="flex items-center justify-between mb-3">
            <div className="flex-1 h-1 bg-[#D5B36B]/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#D5B36B] to-[#6B8A47]"
                initial={{ width: '0%' }}
                animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </div>
            <span
              className="ml-4 text-[#4B2E20]/60"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
            >
              {currentStep} / {steps.length}
            </span>
          </div>
          <p
            className="text-center text-[#6B8A47]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {steps[currentStep - 1].label}
          </p>
        </div>
      </div>
    </div>
  );
}