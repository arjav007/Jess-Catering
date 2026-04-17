import { motion } from 'motion/react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Info, CreditCard, Banknote } from 'lucide-react@0.487.0';

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

interface StepEventDetailsProps {
  eventDetails: EventDetails;
  onDetailsChange: (details: EventDetails) => void;
  onProceed: () => void;
  onBack: () => void;
  hasCateringItems: boolean;
  hasCakesItems: boolean;
}

export function StepEventDetails({ 
  eventDetails, 
  onDetailsChange, 
  onProceed, 
  onBack,
  hasCateringItems,
  hasCakesItems 
}: StepEventDetailsProps) {
  const handleChange = (field: keyof EventDetails, value: string) => {
    onDetailsChange({ ...eventDetails, [field]: value });
  };

  // Determine cart type
  const hasOnlyCakes = hasCakesItems && !hasCateringItems;
  const hasMixed = hasCateringItems && hasCakesItems;

  // Validation Logic
  const isFormValid = 
    eventDetails.firstName &&
    eventDetails.lastName &&
    eventDetails.email &&
    eventDetails.phone &&
    eventDetails.deliveryType &&
    eventDetails.deliveryDate &&
    eventDetails.paymentMethod && // REQUIRED: To determine the payment flow
    (eventDetails.deliveryType !== 'delivery' || eventDetails.address) &&
    (!hasCateringItems || (eventDetails.eventType && eventDetails.guestCount));

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10 md:py-14 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
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
            Your Event Details
          </h2>
          <p
            className="text-[#4B2E20]/70"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Share a few details so we can prepare with care.
          </p>
        </motion.div>

        {/* Info Banner for Mixed Cart */}
        {hasMixed && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-[#6B8A47]/10 border border-[#6B8A47] rounded-lg p-4 flex items-start gap-3"
          >
            <Info className="text-[#6B8A47] mt-0.5 flex-shrink-0" size={20} />
            <p className="text-[#4B2E20] text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Your cart contains both catering and cake items. Please note that <strong>Event Type</strong> and <strong>Number of Guests</strong> are required for catering.
            </p>
          </motion.div>
        )}

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[#f9f7f4] rounded-2xl p-5 md:p-10 border border-[#6b8a47]"
        >
          <div className="flex flex-col gap-9">
            {/* Name Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="firstName" className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]" style={{ fontFamily: 'var(--font-body)' }}>
                  First Name <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="firstName"
                  value={eventDetails.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  placeholder="Enter your first name"
                  className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 text-sm focus-visible:ring-0 focus-visible:border-[#917e75]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="lastName" className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]" style={{ fontFamily: 'var(--font-body)' }}>
                  Last Name <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="lastName"
                  value={eventDetails.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  placeholder="Enter your last name"
                  className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 text-sm focus-visible:ring-0 focus-visible:border-[#917e75]"
                />
              </div>
            </div>

            {/* Contact Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]" style={{ fontFamily: 'var(--font-body)' }}>
                  Email Address <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={eventDetails.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="Enter your email"
                  className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 text-sm focus-visible:ring-0 focus-visible:border-[#917e75]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="phone" className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]" style={{ fontFamily: 'var(--font-body)' }}>
                  Phone Number <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={eventDetails.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="Enter your phone"
                  className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 text-sm focus-visible:ring-0 focus-visible:border-[#917e75]"
                />
              </div>
            </div>

            {/* Event Specifics (Required for Catering) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="eventType" className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]" style={{ fontFamily: 'var(--font-body)' }}>
                  Event Type {hasCateringItems && <span className="text-red-600">*</span>}
                </Label>
                <Select value={eventDetails.eventType} onValueChange={(value) => handleChange('eventType', value)}>
                  <SelectTrigger className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 h-9 text-sm focus:ring-0">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="birthday">Birthday Party</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="anniversary">Anniversary</SelectItem>
                    <SelectItem value="celebration">Celebration</SelectItem>
                    <SelectItem value="private">Private Dinner</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="guestCount" className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]" style={{ fontFamily: 'var(--font-body)' }}>
                  Number of guests {hasCateringItems && <span className="text-red-600">*</span>}
                </Label>
                <Input
                  id="guestCount"
                  type="number"
                  value={eventDetails.guestCount}
                  onChange={(e) => handleChange('guestCount', e.target.value)}
                  placeholder="Enter guest count"
                  className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 text-sm focus-visible:ring-0 focus-visible:border-[#917e75]"
                />
              </div>
            </div>

            {/* Logistics Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="deliveryType" className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]" style={{ fontFamily: 'var(--font-body)' }}>
                  Delivery Type <span className="text-red-600">*</span>
                </Label>
                <Select value={eventDetails.deliveryType} onValueChange={(value) => handleChange('deliveryType', value)}>
                  <SelectTrigger className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 h-9 text-sm focus:ring-0">
                    <SelectValue placeholder="Select delivery type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="delivery">Delivery</SelectItem>
                    <SelectItem value="pickup">Pickup</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="deliveryDate" className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]" style={{ fontFamily: 'var(--font-body)' }}>
                  Delivery Date <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="deliveryDate"
                  type="date"
                  value={eventDetails.deliveryDate}
                  onChange={(e) => handleChange('deliveryDate', e.target.value)}
                  className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 text-sm focus-visible:ring-0 focus-visible:border-[#917e75]"
                />
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="address" className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]" style={{ fontFamily: 'var(--font-body)' }}>
                Delivery Address {eventDetails.deliveryType === 'delivery' && <span className="text-red-600">*</span>}
              </Label>
              <Input
                id="address"
                value={eventDetails.address}
                onChange={(e) => handleChange('address', e.target.value)}
                placeholder="Enter address for delivery"
                className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 text-sm focus-visible:ring-0 focus-visible:border-[#917e75]"
              />
            </div>

            {/* PAYMENT METHOD - THE LOGIC GATE */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="paymentMethod" className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]" style={{ fontFamily: 'var(--font-body)' }}>
                Preferred Payment Method <span className="text-red-600">*</span>
              </Label>
              <Select value={eventDetails.paymentMethod} onValueChange={(value) => handleChange('paymentMethod', value)}>
                <SelectTrigger className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 h-9 text-sm focus:ring-0">
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cash">Cash (Direct to Confirmation)</SelectItem>
                  <SelectItem value="bank-transfer">Bank Transfer (Secure Redirect)</SelectItem>
                  <SelectItem value="card">Credit/Debit Card (Secure Redirect)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Notes Section */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="message" className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]" style={{ fontFamily: 'var(--font-body)' }}>
                Additional Notes
              </Label>
              <Input
                id="message"
                value={eventDetails.message}
                onChange={(e) => handleChange('message', e.target.value)}
                placeholder={hasOnlyCakes ? "Cake customizations or allergies" : "Special requests or dietary needs"}
                className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 text-sm focus-visible:ring-0 focus-visible:border-[#917e75]"
              />
            </div>

            {/* Payment Method Notice */}
            {eventDetails.paymentMethod && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-white/50 border border-[#D5B36B]/40 rounded-lg flex gap-3">
                {eventDetails.paymentMethod === 'cash' ? (
                  <>
                    <Banknote className="text-[#6B8A47] flex-shrink-0" size={20} />
                    <p className="text-xs text-[#4B2E20]/80">Your order will be submitted immediately for review. Please have exact cash ready upon delivery/pickup.</p>
                  </>
                ) : (
                  <>
                    <CreditCard className="text-[#6B8A47] flex-shrink-0" size={20} />
                    <p className="text-xs text-[#4B2E20]/80">After reviewing your order, you will be redirected to our secure <strong>Merchant Warrior</strong> payment page to complete your transaction.</p>
                  </>
                )}
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button
                onClick={onBack}
                className="flex-1 py-4 px-7 bg-transparent border border-[#6b8a47] text-[#6b8a47] rounded-[10px] hover:bg-[#6b8a47]/5 transition-all text-base"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Back to Menu
              </button>

              <button
                onClick={onProceed}
                disabled={!isFormValid}
                className={`
                  flex-1 py-4 px-7 rounded-[10px] transition-all text-base
                  ${isFormValid
                    ? 'bg-[#6b8a47] text-white cursor-pointer hover:bg-[#5a7339]'
                    : 'bg-[#6b8a47]/40 text-white/60 cursor-not-allowed'
                  }
                `}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Review Order
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}