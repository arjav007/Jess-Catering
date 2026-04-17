import { motion } from 'motion/react';
import { Checkbox } from '../ui/checkbox';
import { useState } from 'react';
// Import cakes menu items to ensure they are recognized in the catering review
import { cakesMenuItems } from '../../CakesOrder';

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
  selectedItems: Record<string, any>; 
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
  const [isProcessing, setIsProcessing] = useState(false);

  // FIXED: Create a master list of all possible products for lookup
  const allPossibleItems = [...menuItems, ...cakesMenuItems];

  // Mapping logic to read item.quantity and details from the master menu
  const orderItems = Object.entries(selectedItems || {})
    .filter(([_, item]) => item && item.quantity > 0)
    .map(([id, item]) => {
      // FIXED: Search the master menu so cake items aren't "Unknown"
      const menuItem = allPossibleItems.find((m) => m.id === id);
      return {
        id,
        name: menuItem?.name || 'Unknown Item',
        price: menuItem?.price || 0,
        quantity: item.quantity,
        total: (menuItem?.price || 0) * item.quantity,
      };
    });

  const subtotal = orderItems.reduce((sum, item) => sum + item.total, 0);
  const deliveryFee = eventDetails.deliveryType === 'delivery' ? 25 : 0;
  const total = subtotal + deliveryFee;

  // MERCHANT WARRIOR PAYMENT HANDLER
  const handlePayment = async () => {
    setIsProcessing(true); 

    const isManualCash = eventDetails.paymentMethod?.toLowerCase() === 'cash';

    if (isManualCash) {
      setTimeout(() => {
        setIsProcessing(false);
        window.scrollTo({ top: 0, behavior: 'instant' });
        onProceed(); 
      }, 800); 
      return; 
    }

    try {
      // FIXED: Use window.location.origin to ensure the API is found locally and on Vercel
      const response = await fetch(`${window.location.origin}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cartTotal: total, 
          orderDetails: `Order for ${eventDetails.firstName} ${eventDetails.lastName}`,
          customerName: `${eventDetails.firstName} ${eventDetails.lastName}`,
          customerEmail: eventDetails.email
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server Error Response:", errorText);
        throw new Error(`Server responded with ${response.status}. Please check if vercel dev is running.`);
      }

      const data = await response.json();

      if (data.success && data.formFields) {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = data.payPageUrl;

        for (const key in data.formFields) {
          if (Object.prototype.hasOwnProperty.call(data.formFields, key)) {
            const hiddenField = document.createElement('input');
            hiddenField.type = 'hidden';
            hiddenField.name = key;
            hiddenField.value = data.formFields[key];
            form.appendChild(hiddenField);
          }
        }
        document.body.appendChild(form);
        form.submit(); 
      } else {
        alert("Payment Failed: " + (data.message || "Could not connect to secure checkout."));
        setIsProcessing(false); 
      }
    } catch (error: any) {
      console.error("Error during checkout:", error);
      alert(`Checkout Error: ${error.message || "Something went wrong connecting to the payment server."}`);
      setIsProcessing(false); 
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-6 bg-[#ffffff]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[52px] leading-tight text-[#6B8A47] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Review Your Order
          </h2>
          <p className="text-[#4B2E20]/70" style={{ fontFamily: 'var(--font-body)' }}>
            Confirm your dishes and details before submitting.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#f9f7f4] rounded-2xl border border-[#6b8a47] p-5 md:p-10"
        >
          {/* Dishes Section */}
          <div className="mb-9">
            <div className="mb-6 pb-1 border-b border-[rgba(213,179,107,0.3)]">
              <h3 className="text-2xl text-[#6b8a47] leading-7" style={{ fontFamily: 'var(--font-heading)' }}>Your Items</h3>
            </div>
            <div className="flex flex-col gap-4">
              {orderItems.length > 0 ? (
                orderItems.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-[rgba(107,138,71,0.1)]">
                    <p className="text-[#6e564a] text-base leading-6 flex-1" style={{ fontFamily: 'var(--font-body)' }}>{item.name}</p>
                    <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8">
                      <div className="flex items-center gap-3">
                        <button onClick={() => onQuantityChange(item.id, item.quantity - 1)} className="w-10 h-10 rounded-full border border-[#6b8a47] flex items-center justify-center hover:bg-[#6b8a47]/5 transition-colors">
                          <Minus className="w-4 h-4 text-[#6b8a47]" />
                        </button>
                        <span className="w-8 text-center text-[#6e564a] text-lg leading-7" style={{ fontFamily: 'var(--font-body)' }}>{item.quantity}</span>
                        <button onClick={() => onQuantityChange(item.id, item.quantity + 1)} className="w-10 h-10 rounded-full border border-[#6b8a47] flex items-center justify-center hover:bg-[#6b8a47]/5 transition-colors">
                          <Plus className="w-4 h-4 text-[#6b8a47]" />
                        </button>
                      </div>
                      <p className="text-[#c49533] text-base leading-7 min-w-[80px] text-right" style={{ fontFamily: 'var(--font-body)' }}>A${item.total.toFixed(2)}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-[#6e564a]/60 py-4">Your selection is empty.</p>
              )}
            </div>
          </div>

          {/* Totals Section */}
          <div className="mb-9 pb-1 border-b border-[rgba(107,138,71,0.2)]">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-[#6e564a] text-base">
                <span className="font-semibold">Subtotal</span>
                <span>A${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-[#6e564a] text-base">
                <span className="font-semibold">Delivery Fee</span>
                <span>A${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-[rgba(107,138,71,0.2)]">
                <span className="text-[#6b8a47] text-lg font-semibold">Final Total</span>
                <span className="text-[#6b8a47] text-[28px] font-bold" style={{ fontFamily: 'var(--font-heading)' }}>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Event Details Section */}
          <div className="mb-9">
            <div className="flex items-center justify-between mb-6 pb-1 border-b border-[rgba(213,179,107,0.3)]">
              <h3 className="text-2xl text-[#6b8a47] leading-7" style={{ fontFamily: 'var(--font-heading)' }}>Order Details</h3>
              <button onClick={onBack} className="text-[#c49533] text-sm hover:opacity-80 transition-opacity" style={{ fontFamily: 'var(--font-body)' }}>Edit</button>
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
              ].map((detail) => (
                <div key={detail.label} className="flex flex-col gap-1">
                  <span className="text-[#938279] text-xs uppercase tracking-[0.6px] leading-4" style={{ fontFamily: 'var(--font-body)' }}>{detail.label}</span>
                  <span className="text-[#6e564a] text-base leading-6" style={{ fontFamily: 'var(--font-body)' }}>{detail.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-3 mb-9 p-4 bg-[rgba(255,255,255,0.5)] rounded-[10px] border border-[#eee3cb]">
            <Checkbox id="confirm" checked={isConfirmed} onCheckedChange={(checked) => setIsConfirmed(checked as boolean)} className="mt-1 border-[#6b8a47] data-[state=checked]:bg-[#6b8a47]" />
            <label htmlFor="confirm" className="text-[#6e564a] text-base leading-6 cursor-pointer font-medium" style={{ fontFamily: 'var(--font-body)' }}>
              I confirm that all details are correct and I understand that pricing will be finalized upon confirmation.
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={onBack} disabled={isProcessing} className="flex-1 py-4 px-7 border border-[#6b8a47] text-[#6b8a47] rounded-[10px] hover:bg-[#6b8a47]/5 transition-all disabled:opacity-50">
              Back to Event Details
            </button>
            <button onClick={handlePayment} disabled={!isConfirmed || isProcessing} className={`flex-1 py-4 px-7 rounded-[10px] transition-all text-white font-medium ${isConfirmed && !isProcessing ? 'bg-[#6b8a47] hover:bg-[#5a7339]' : 'bg-[#6b8a47]/40 cursor-not-allowed'}`}>
              {isProcessing 
                ? (eventDetails.paymentMethod?.toLowerCase().includes('cash') ? "Confirming..." : "Connecting...") 
                : (eventDetails.paymentMethod?.toLowerCase().includes('cash') ? "Confirm Order" : "Proceed to Payment")
              }
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Icon Components
function Minus({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>;
}
function Plus({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>;
}