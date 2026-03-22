import { motion } from 'motion/react';
import { Pencil, Trash2 } from 'lucide-react@0.487.0';
import { Checkbox } from '../ui/checkbox';
import { useState } from 'react';
import svgPaths from '../../imports/svg-76ebkejwoj';

interface MenuItem {
  id: string;
  name: string;
  price: number;
}

interface EventDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventType: string;
  guestCount: string;
  deliveryType: string;
  address: string;
  deliveryDate: string;
  paymentMethod: string;
  message: string;
}

interface StepReviewProps {
  menuItems: MenuItem[];
  selectedItems: Record<string, number>;
  eventDetails: EventDetails;
  onQuantityChange: (id: string, quantity: number) => void;
  onProceed: () => void;
  onBack: () => void;
}

export function StepReview({ 
  menuItems, 
  selectedItems, 
  eventDetails, 
  onQuantityChange,
  onProceed, 
  onBack 
}: StepReviewProps) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const orderItems = Object.entries(selectedItems)
    .filter(([_, quantity]) => quantity > 0)
    .map(([id, quantity]) => {
      const item = menuItems.find((item) => item.id === id);
      return {
        id,
        name: item?.name || '',
        price: item?.price || 0,
        quantity,
        total: (item?.price || 0) * quantity,
      };
    });

  const subtotal = orderItems.reduce((sum, item) => sum + item.total, 0);
  const deliveryFee = eventDetails.deliveryType === 'delivery' ? 25 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen py-12 px-4 md:px-6 bg-[#ffffff]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-[52px] leading-tight text-[#6B8A47] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Review Your Order
          </h2>
          <p
            className="text-[#4B2E20]/70"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Confirm your dishes and event details before submitting.
          </p>
        </motion.div>

        {/* Review Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#f9f7f4] rounded-2xl border border-[#6b8a47] p-5 md:p-10"
        >
          {/* Order Items */}
          <div className="mb-9">
            <div className="mb-6 pb-1 border-b border-[rgba(213,179,107,0.3)]">
              <h3
                className="text-2xl text-[#6b8a47] leading-7"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Your Dishes
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {orderItems.map((item, index) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-[rgba(107,138,71,0.1)]"
                >
                  <p
                    className="text-[#6e564a] text-base leading-6 flex-1"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {item.name}
                  </p>
                  
                  <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                        className="w-10 h-10 rounded-full border border-[#6b8a47] flex items-center justify-center hover:bg-[#6b8a47]/5 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                          <path d="M4.16602 10H15.8327" stroke="#6B8A47" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <span
                        className="w-8 text-center text-[#6e564a] text-lg leading-7"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                        className="w-10 h-10 rounded-full border border-[#6b8a47] flex items-center justify-center hover:bg-[#6b8a47]/5 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                          <path d="M4.16602 10H15.8327" stroke="#6B8A47" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10 4.16602V15.8327" stroke="#6B8A47" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* Price */}
                    <p
                      className="text-[#c49533] text-base leading-7 min-w-[80px] text-right"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      A${item.total.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Totals */}
          <div className="mb-9 pb-1 border-b border-[rgba(107,138,71,0.2)]">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span
                  className="text-[#6e564a] text-base font-semibold leading-6"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Subtotal
                </span>
                <span
                  className="text-[#6e564a] text-base leading-7"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  A${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span
                  className="text-[#6e564a] text-base font-semibold leading-6"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Delivery Fee
                </span>
                <span
                  className="text-[#6e564a] text-base leading-7"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  A${deliveryFee.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-[rgba(107,138,71,0.2)]">
                <span
                  className="text-[#6b8a47] text-lg font-semibold leading-7"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Final Total
                </span>
                <span
                  className="text-[#6b8a47] text-[28px] font-bold leading-[42px]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Event Details Summary */}
          <div className="mb-9">
            <div className="flex items-center justify-between mb-6 pb-1 border-b border-[rgba(213,179,107,0.3)]">
              <h3
                className="text-2xl text-[#6b8a47] leading-7"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Event Details
              </h3>
              <button
                onClick={onBack}
                className="text-[#c49533] flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p2c619100} stroke="#C49533" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M10 3.33398L12.6667 6.00065" stroke="#C49533" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
                Edit
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Name', value: `${eventDetails.firstName} ${eventDetails.lastName}` },
                { label: 'Email', value: eventDetails.email },
                { label: 'Phone', value: eventDetails.phone },
                { label: 'Event Type', value: eventDetails.eventType },
                { label: 'Guests', value: eventDetails.guestCount },
                { label: 'Delivery', value: eventDetails.deliveryType },
                { label: 'Date', value: eventDetails.deliveryDate },
                { label: 'Payment', value: eventDetails.paymentMethod || 'Not specified' },
              ].map((detail, index) => (
                <div
                  key={detail.label}
                  className="flex flex-col gap-1"
                >
                  <span
                    className="text-[#938279] text-xs uppercase tracking-[0.6px] leading-4"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {detail.label}
                  </span>
                  <span
                    className="text-[#6e564a] text-base leading-6"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
            {eventDetails.address && (
              <div className="mt-4 pt-4 border-t border-[rgba(107,138,71,0.1)]">
                <span
                  className="text-[#938279] text-xs uppercase tracking-[0.6px] leading-4 mb-1 block"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Address
                </span>
                <span
                  className="text-[#6e564a] text-base leading-6"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {eventDetails.address}
                </span>
              </div>
            )}
            {eventDetails.message && (
              <div className="mt-4 pt-4 border-t border-[rgba(107,138,71,0.1)]">
                <span
                  className="text-[#938279] text-xs uppercase tracking-[0.6px] leading-4 mb-1 block"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Special Notes
                </span>
                <span
                  className="text-[#6e564a] text-base leading-6"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {eventDetails.message}
                </span>
              </div>
            )}
          </div>

          {/* Confirmation Checkbox */}
          <div className="flex items-start gap-3 mb-9 p-4 bg-[rgba(255,255,255,0.5)] rounded-[10px] border border-[#eee3cb]">
            <Checkbox
              id="confirm"
              checked={isConfirmed}
              onCheckedChange={(checked) => setIsConfirmed(checked as boolean)}
              className="mt-1 border-[#6b8a47] data-[state=checked]:bg-[#6b8a47]"
            />
            <label
              htmlFor="confirm"
              className="text-[#6e564a] text-base leading-6 cursor-pointer font-medium"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              I confirm that all details are correct and I understand that pricing will be finalized upon confirmation.
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onBack}
              className="flex-1 py-4 px-7 bg-transparent border border-[#6b8a47] text-[#6b8a47] rounded-[10px] transition-all duration-300 hover:bg-[#6b8a47]/5 text-base leading-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Back to Event Details
            </button>

            <button
              onClick={onProceed}
              disabled={!isConfirmed}
              className={`
                flex-1 py-4 px-7 rounded-[10px] transition-all duration-300 text-base leading-6
                ${isConfirmed
                  ? 'bg-[#6b8a47] text-white cursor-pointer hover:bg-[#5a7339]'
                  : 'bg-[#6b8a47]/40 text-white/60 cursor-not-allowed'
                }
              `}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Submit Order
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}