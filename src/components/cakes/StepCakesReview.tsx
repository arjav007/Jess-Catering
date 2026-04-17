import { motion } from 'motion/react';
import { useState } from 'react';
import { Checkbox } from '../ui/checkbox';
// FIXED: Import the catering items so they are recognized in the cake review
import { menuItems as cateringMenuItems } from '../../Order';

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

interface StepCakesReviewProps {
  menuItems: MenuItem[];
  selectedItems: Record<string, any>; 
  eventDetails: EventDetails;
  onBack: () => void;
  onSubmit: () => void;
}

export function StepCakesReview({ 
  menuItems, 
  selectedItems, 
  eventDetails, 
  onBack, 
  onSubmit 
}: StepCakesReviewProps) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // FIXED: Create a master list of all products (Catering + Cakes) for lookup
  const allPossibleItems = [...menuItems, ...cateringMenuItems];

  // Logic updated to extract the 'quantity' property and find details from master menu
  const orderItems = Object.entries(selectedItems || {})
    .filter(([_, item]) => item && item.quantity > 0)
    .map(([id, item]) => {
      // FIXED: Search the combined master list
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
  const deliveryFee = eventDetails.deliveryType === 'delivery' ? 15 : 0;
  const total = subtotal + deliveryFee;

  // MERCHANT WARRIOR PAYMENT HANDLER
  const handlePayment = async () => {
    setIsProcessing(true); 

    // LOGIC GATE: Skip payment ONLY for "Cash"
    // "Bank Transfer" and "Card" will trigger the API call
    const isManualCash = eventDetails.paymentMethod?.toLowerCase() === 'cash';

    if (isManualCash) {
      setTimeout(() => {
        setIsProcessing(false);
        window.scrollTo({ top: 0, behavior: 'instant' });
        onSubmit(); // Directly to Step 4
      }, 800); 
      return; 
    }

    try {
      // Use window.location.origin to ensure it works with 'vercel dev'
      const response = await fetch(`${window.location.origin}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cartTotal: total, 
          orderDetails: `Cakes & Bakes Order for ${eventDetails.firstName} ${eventDetails.lastName}`,
          customerName: `${eventDetails.firstName} ${eventDetails.lastName}`,
          customerEmail: eventDetails.email
        }),
      });

      // Safety check for server response
      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error Response:", errorText);
        throw new Error(`Server responded with ${response.status}. Make sure 'vercel dev' is running.`);
      }

      const data = await response.json();

      if (data.success && data.formFields) {
        // Create an invisible form to submit to Merchant Warrior
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
      console.error("Checkout crash:", error);
      alert(`Checkout Error: ${error.message}`);
      setIsProcessing(false); 
    }
  };

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
            Confirm your items and details before submitting.
          </p>
        </motion.div>

        {/* Review Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#f9f7f4] rounded-2xl border border-[#6b8a47] p-5 md:p-10"
        >
          {/* Order Items Section */}
          <div className="mb-9">
            <div className="mb-6 pb-1 border-b border-[rgba(213,179,107,0.3)]">
              <h3 className="text-2xl text-[#6b8a47] leading-7" style={{ fontFamily: 'var(--font-heading)' }}>
                Your Items
              </h3>
            </div>

            <div className="space-y-4">
              {orderItems.length > 0 ? (
                orderItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-3 border-b border-[rgba(213,179,107,0.2)]">
                    <div className="flex-1">
                      <p className="text-[#4B2E20]" style={{ fontFamily: 'var(--font-body)' }}>{item.name}</p>
                      <p className="text-sm text-[#4B2E20]/60 mt-1" style={{ fontFamily: 'var(--font-body)' }}>
                        ${item.price.toFixed(2)} × {item.quantity}
                      </p>
                    </div>
                    <p className="text-[#6B8A47] font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                      ${item.total.toFixed(2)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-[#4B2E20]/60 py-4">Your selection is empty.</p>
              )}
            </div>
          </div>

          {/* Details Summary */}
          <div className="mb-9">
            <div className="mb-6 pb-1 border-b border-[rgba(213,179,107,0.3)]">
              <h3 className="text-2xl text-[#6b8a47] leading-7" style={{ fontFamily: 'var(--font-heading)' }}>Order Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
               <div>
                  <p className="text-sm text-[#4B2E20]/60 mb-1">Name</p>
                  <p className="text-[#4B2E20]">{eventDetails.firstName} {eventDetails.lastName}</p>
               </div>
               <div>
                  <p className="text-sm text-[#4B2E20]/60 mb-1">Email</p>
                  <p className="text-[#4B2E20]">{eventDetails.email}</p>
               </div>
               <div>
                  <p className="text-sm text-[#4B2E20]/60 mb-1">Payment Method</p>
                  <p className="text-[#4B2E20] capitalize">{eventDetails.paymentMethod.replace('-', ' ')}</p>
               </div>
               <div>
                  <p className="text-sm text-[#4B2E20]/60 mb-1">Delivery Type</p>
                  <p className="text-[#4B2E20] capitalize">{eventDetails.deliveryType}</p>
               </div>
            </div>
          </div>

          {/* Pricing Summary */}
          <div className="mb-9 pt-6 border-t border-[rgba(213,179,107,0.3)]">
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[#4B2E20]/70">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-[#4B2E20]/70">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-[rgba(213,179,107,0.3)]">
                <p className="text-xl text-[#6B8A47]" style={{ fontFamily: 'var(--font-heading)' }}>Total</p>
                <p className="text-2xl text-[#6B8A47]" style={{ fontFamily: 'var(--font-heading)' }}>${total.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Confirmation Checkbox */}
          <div className="mb-9 flex items-start gap-3 p-4 bg-[#6B8A47]/5 rounded-lg border border-[#D5B36B]/20">
            <Checkbox
              id="confirm"
              checked={isConfirmed}
              onCheckedChange={(checked) => setIsConfirmed(checked === true)}
              className="mt-1"
            />
            <label htmlFor="confirm" className="text-sm text-[#4B2E20]/80 leading-relaxed cursor-pointer" style={{ fontFamily: 'var(--font-body)' }}>
              I confirm that the order details and items are correct. I understand that changes may not be possible after submission.
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onBack}
              disabled={isProcessing}
              className="flex-1 py-4 px-7 border border-[#6b8a47] text-[#6b8a47] rounded-[10px] hover:bg-[#6b8a47]/5 transition-all duration-300 disabled:opacity-50"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Back to Details
            </button>

            <button
              onClick={handlePayment}
              disabled={!isConfirmed || isProcessing}
              className={`flex-1 py-4 px-7 rounded-[10px] transition-all duration-300 text-white font-medium
                ${isConfirmed && !isProcessing ? 'bg-[#6b8a47] hover:bg-[#5a7339]' : 'bg-[#6b8a47]/40 cursor-not-allowed'}`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {isProcessing 
                ? "Processing..." 
                : (eventDetails.paymentMethod?.toLowerCase().includes('cash') ? "Confirm Order" : "Proceed to Payment")
              }
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}