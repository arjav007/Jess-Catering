import { motion } from 'motion/react';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import svgPaths from '../../imports/svg-p8u8uz854l';

interface OrderDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  orderType: string;
  deliveryType: string;
  address: string;
  deliveryDate: string;
  paymentMethod: string;
  message: string;
}

interface StepOrderDetailsProps {
  orderDetails: OrderDetails;
  onDetailsChange: (details: OrderDetails) => void;
  onProceed: () => void;
  onBack: () => void;
}

export function StepOrderDetails({ orderDetails, onDetailsChange, onProceed, onBack }: StepOrderDetailsProps) {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (field: keyof OrderDetails, value: string) => {
    onDetailsChange({ ...orderDetails, [field]: value });
  };

  const isFormValid = 
    orderDetails.firstName &&
    orderDetails.lastName &&
    orderDetails.email &&
    orderDetails.phone &&
    orderDetails.orderType &&
    orderDetails.deliveryType &&
    orderDetails.deliveryDate &&
    (orderDetails.deliveryType !== 'delivery' || orderDetails.address);

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
            Your Order Details
          </h2>
          <p
            className="text-[#4B2E20]/70"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Share a few details so we can prepare with care.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[#f9f7f4] rounded-2xl p-5 md:p-10 border border-[#6b8a47]"
        >
          <div className="flex flex-col gap-9">
            {/* Row 1: First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="firstName"
                  className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <span className="capitalize">First Name</span> <span className="text-red-600">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="firstName"
                    value={orderDetails.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    placeholder="Enter your first name"
                    className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 text-sm focus-visible:ring-0 focus-visible:border-[#917e75] placeholder:text-[#a8a8a8]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="lastName"
                  className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <span className="capitalize">Last Name</span> <span className="text-red-600">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="lastName"
                    value={orderDetails.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    placeholder="Enter your last name"
                    className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 text-sm focus-visible:ring-0 focus-visible:border-[#917e75] placeholder:text-[#a8a8a8]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="email"
                  className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <span className="capitalize">Email Address</span> <span className="text-red-600">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value={orderDetails.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="Enter your email address"
                    className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 text-sm focus-visible:ring-0 focus-visible:border-[#917e75] placeholder:text-[#a8a8a8]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="phone"
                  className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <span className="capitalize">Phone Number</span> <span className="text-red-600">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="phone"
                    type="tel"
                    value={orderDetails.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                    className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 text-sm focus-visible:ring-0 focus-visible:border-[#917e75] placeholder:text-[#a8a8a8]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Order Type & Delivery Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Order Type */}
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="orderType"
                  className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px] capitalize"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Order Type <span className="text-red-600">*</span>
                </Label>
                <Select value={orderDetails.orderType} onValueChange={(value) => handleChange('orderType', value)}>
                  <SelectTrigger className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 h-9 text-sm focus:ring-0 focus:ring-offset-0 placeholder:text-[#a8a8a8]">
                    <SelectValue placeholder="Select order type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">Personal Gift</SelectItem>
                    <SelectItem value="corporate">Corporate Gift</SelectItem>
                    <SelectItem value="event">Event/Party</SelectItem>
                    <SelectItem value="subscription">Subscription</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Delivery Type */}
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="deliveryType"
                  className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px] capitalize"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Delivery Type <span className="text-red-600">*</span>
                </Label>
                <Select value={orderDetails.deliveryType} onValueChange={(value) => handleChange('deliveryType', value)}>
                  <SelectTrigger className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 h-9 text-sm focus:ring-0 focus:ring-offset-0 placeholder:text-[#a8a8a8]">
                    <SelectValue placeholder="Select delivery type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="delivery">Delivery</SelectItem>
                    <SelectItem value="pickup">Pickup</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 4: Delivery Date */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="deliveryDate"
                className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px] capitalize"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Delivery Date <span className="text-red-600">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="deliveryDate"
                  type="date"
                  value={orderDetails.deliveryDate}
                  onChange={(e) => handleChange('deliveryDate', e.target.value)}
                  placeholder="Select delivery date"
                  className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 text-sm focus-visible:ring-0 focus-visible:border-[#917e75] placeholder:text-[#a8a8a8]"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>
            </div>

            {/* Row 5: Delivery Address - Full Width */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="address"
                className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px] capitalize"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Delivery Address {orderDetails.deliveryType === 'delivery' && <span className="text-red-600">*</span>}
              </Label>
              <div className="relative">
                <Input
                  id="address"
                  value={orderDetails.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  placeholder="Enter delivery address"
                  className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 text-sm focus-visible:ring-0 focus-visible:border-[#917e75] placeholder:text-[#a8a8a8]"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>
            </div>

            {/* Row 6: Payment Method - Full Width */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="paymentMethod"
                className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px] capitalize"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                preferred Payment Method
              </Label>
              <Select value={orderDetails.paymentMethod} onValueChange={(value) => handleChange('paymentMethod', value)}>
                <SelectTrigger className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 h-9 text-sm focus:ring-0 focus:ring-offset-0 placeholder:text-[#a8a8a8]">
                  <SelectValue placeholder="Select preferred payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cash">Cash</SelectItem>
                  <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                  <SelectItem value="card">Credit/Debit Card</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Row 7: Additional Notes - Full Width */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="message"
                className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px] capitalize"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Additional Notes
              </Label>
              <div className="relative">
                <Input
                  id="message"
                  value={orderDetails.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Enter any dietary restrictions or special requests"
                  className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 text-sm focus-visible:ring-0 focus-visible:border-[#917e75] placeholder:text-[#a8a8a8]"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button
                onClick={onBack}
                className="flex-1 py-4 px-7 bg-transparent border border-[#6b8a47] text-[#6b8a47] rounded-[10px] transition-all duration-300 hover:bg-[#6b8a47]/5 text-base"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Back to Menu
              </button>

              <button
                onClick={onProceed}
                disabled={!isFormValid}
                className={`
                  flex-1 py-4 px-7 rounded-[10px] transition-all duration-300 text-base
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
