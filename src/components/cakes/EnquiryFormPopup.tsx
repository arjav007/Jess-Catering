import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, AlertCircle, Upload, Image as ImageIcon } from 'lucide-react@0.487.0';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';

interface EnquiryFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  contactNumber: string;
  typeOfEvent: string;
  deliveryDate: string;
  pickupOrDelivery: string;
  deliveryAddress: string;
  itemsRequired: string[];
  dietaryRequirements: string[];
  noOfServings: string;
  designBrief: string;
  inspirationImages: File[];
}

interface FormErrors {
  name?: string;
  email?: string;
  deliveryDate?: string;
  pickupOrDelivery?: string;
  itemsRequired?: string;
  noOfServings?: string;
}

export function EnquiryFormPopup({ isOpen, onClose }: EnquiryFormPopupProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    contactNumber: '',
    typeOfEvent: '',
    deliveryDate: '',
    pickupOrDelivery: '',
    deliveryAddress: '',
    itemsRequired: [],
    dietaryRequirements: [],
    noOfServings: '',
    designBrief: '',
    inspirationImages: [],
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const itemOptions = [
    'Cake',
    'Cupcakes',
    'Mini Cupcakes',
    'Cakesicles',
    'Chocolate Geo Hearts',
    'Chocolate Pyramids',
    'Other',
  ];

  const dietaryOptions = [
    'Gluten-Free',
    'Vegan',
    'Nut-Free',
    'Dairy-Free',
    'Egg-Free',
    'Sugar-Free',
    'None',
  ];

  const handleChange = (field: keyof FormData, value: string | string[] | File[]) => {
    setFormData({ ...formData, [field]: value });
    // Clear error for this field when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const handleCheckboxChange = (item: string, checked: boolean) => {
    const newItems = checked
      ? [...formData.itemsRequired, item]
      : formData.itemsRequired.filter((i) => i !== item);
    handleChange('itemsRequired', newItems);
  };

  const handleDietaryCheckboxChange = (dietary: string, checked: boolean) => {
    const newDietary = checked
      ? [...formData.dietaryRequirements, dietary]
      : formData.dietaryRequirements.filter((d) => d !== dietary);
    handleChange('dietaryRequirements', newDietary);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFormData({ ...formData, inspirationImages: [...formData.inspirationImages, ...filesArray] });
    }
  };

  const handleRemoveImage = (indexToRemove: number) => {
    const updatedImages = formData.inspirationImages.filter((_, index) => index !== indexToRemove);
    setFormData({ ...formData, inspirationImages: updatedImages });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.deliveryDate) {
      newErrors.deliveryDate = 'Date of pickup/delivery is required';
    }

    if (!formData.pickupOrDelivery) {
      newErrors.pickupOrDelivery = 'Please select pickup or delivery';
    }

    if (formData.itemsRequired.length === 0) {
      newErrors.itemsRequired = 'Please select at least one item';
    }

    if (!formData.noOfServings.trim()) {
      newErrors.noOfServings = 'Number of servings is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Enquiry submitted:', formData);
      setSubmitStatus('success');
      
      // Reset form after 3 seconds and close popup
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          typeOfEvent: '',
          deliveryDate: '',
          pickupOrDelivery: '',
          deliveryAddress: '',
          itemsRequired: [],
          dietaryRequirements: [],
          noOfServings: '',
          designBrief: '',
          inspirationImages: [],
        });
        setSubmitStatus('idle');
        onClose();
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        name: '',
        email: '',
        contactNumber: '',
        typeOfEvent: '',
        deliveryDate: '',
        pickupOrDelivery: '',
        deliveryAddress: '',
        itemsRequired: [],
        dietaryRequirements: [],
        noOfServings: '',
        designBrief: '',
        inspirationImages: [],
      });
      setErrors({});
      setSubmitStatus('idle');
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-[#F9F7F4] rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#F9F7F4] border-b border-[#6B8A47]/20 px-6 md:px-8 py-5 flex items-center justify-between z-10">
              <h2
                className="text-2xl md:text-3xl text-[#6B8A47]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Custom Cake Enquiry
              </h2>
              <button
                onClick={handleClose}
                disabled={isSubmitting}
                className="text-[#4B2E20] hover:text-[#6B8A47] transition-colors duration-300 disabled:opacity-50"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6">
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-[#6B8A47] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-white" strokeWidth={3} />
                  </div>
                  <h3
                    className="text-2xl text-[#6B8A47] mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Enquiry Submitted!
                  </h3>
                  <p
                    className="text-[#6E564A]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Thank you! We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form id="cake-enquiry-form" onSubmit={handleSubmit} className="space-y-6 pb-4">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="enquiry-name"
                      className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span className="capitalize">Full Name</span> <span className="text-red-600">*</span>
                    </Label>
                    <Input
                      id="enquiry-name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className={`bg-transparent border-0 border-b-[1.6px] rounded-none px-0 py-1 text-sm focus-visible:ring-0 placeholder:text-[#a8a8a8] ${
                        errors.name ? 'border-red-500 focus-visible:border-red-500' : 'border-[#917e75] focus-visible:border-[#917e75]'
                      }`}
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                    {errors.name && (
                      <p className="text-red-600 text-xs mt-1 flex items-center gap-1" style={{ fontFamily: 'var(--font-body)' }}>
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email & Contact Number */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="enquiry-email"
                        className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        <span className="capitalize">Email Address</span> <span className="text-red-600">*</span>
                      </Label>
                      <Input
                        id="enquiry-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="Enter your email"
                        className={`bg-transparent border-0 border-b-[1.6px] rounded-none px-0 py-1 text-sm focus-visible:ring-0 placeholder:text-[#a8a8a8] ${
                          errors.email ? 'border-red-500 focus-visible:border-red-500' : 'border-[#917e75] focus-visible:border-[#917e75]'
                        }`}
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                      {errors.email && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1" style={{ fontFamily: 'var(--font-body)' }}>
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="enquiry-contactNumber"
                        className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        <span className="capitalize">Contact Number</span>
                      </Label>
                      <Input
                        id="enquiry-contactNumber"
                        type="tel"
                        value={formData.contactNumber}
                        onChange={(e) => handleChange('contactNumber', e.target.value)}
                        placeholder="Enter your contact number"
                        className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 text-sm focus-visible:ring-0 focus-visible:border-[#917e75] placeholder:text-[#a8a8a8]"
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                    </div>
                  </div>

                  {/* Type of Event & Delivery Date */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="enquiry-typeOfEvent"
                        className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        <span className="capitalize">Type of Event</span>
                      </Label>
                      <Input
                        id="enquiry-typeOfEvent"
                        value={formData.typeOfEvent}
                        onChange={(e) => handleChange('typeOfEvent', e.target.value)}
                        placeholder="e.g., Wedding, Birthday, Anniversary"
                        className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 text-sm focus-visible:ring-0 focus-visible:border-[#917e75] placeholder:text-[#a8a8a8]"
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="enquiry-deliveryDate"
                        className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        <span className="capitalize">Date of Pickup/Delivery</span> <span className="text-red-600">*</span>
                      </Label>
                      <Input
                        id="enquiry-deliveryDate"
                        type="date"
                        value={formData.deliveryDate}
                        onChange={(e) => handleChange('deliveryDate', e.target.value)}
                        className={`bg-transparent border-0 border-b-[1.6px] rounded-none px-0 py-1 text-sm focus-visible:ring-0 placeholder:text-[#a8a8a8] ${
                          errors.deliveryDate ? 'border-red-500 focus-visible:border-red-500' : 'border-[#917e75] focus-visible:border-[#917e75]'
                        }`}
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                      {errors.deliveryDate && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1" style={{ fontFamily: 'var(--font-body)' }}>
                          <AlertCircle className="w-3 h-3" />
                          {errors.deliveryDate}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Pickup or Delivery */}
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="enquiry-pickupOrDelivery"
                      className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span className="capitalize">Pickup or Delivery</span> <span className="text-red-600">*</span>
                    </Label>
                    <Select value={formData.pickupOrDelivery} onValueChange={(value) => handleChange('pickupOrDelivery', value)}>
                      <SelectTrigger className={`bg-transparent border-0 border-b-[1.6px] rounded-none px-0 py-1 h-9 text-sm focus:ring-0 focus:ring-offset-0 placeholder:text-[#a8a8a8] ${
                        errors.pickupOrDelivery ? 'border-red-500' : 'border-[#917e75]'
                      }`}>
                        <SelectValue placeholder="Select pickup or delivery" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pickup">Pickup</SelectItem>
                        <SelectItem value="delivery">Delivery</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.pickupOrDelivery && (
                      <p className="text-red-600 text-xs mt-1 flex items-center gap-1" style={{ fontFamily: 'var(--font-body)' }}>
                        <AlertCircle className="w-3 h-3" />
                        {errors.pickupOrDelivery}
                      </p>
                    )}
                  </div>

                  {/* Delivery Address */}
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="enquiry-deliveryAddress"
                      className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span className="capitalize">Delivery Address</span>
                    </Label>
                    <Input
                      id="enquiry-deliveryAddress"
                      value={formData.deliveryAddress}
                      onChange={(e) => handleChange('deliveryAddress', e.target.value)}
                      placeholder="Enter delivery address"
                      className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 text-sm focus-visible:ring-0 focus-visible:border-[#917e75] placeholder:text-[#a8a8a8]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>

                  {/* Items Required */}
                  <div className="flex flex-col gap-2">
                    <Label
                      className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span className="capitalize">Items Required</span> <span className="text-red-600">*</span>
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                      {itemOptions.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <Checkbox
                            id={`item-${item.replace(/\s+/g, '-')}`}
                            checked={formData.itemsRequired.includes(item)}
                            onCheckedChange={(checked) => handleCheckboxChange(item, checked === true)}
                          />
                          <label
                            htmlFor={`item-${item.replace(/\s+/g, '-')}`}
                            className="text-sm text-[#4B2E20] cursor-pointer"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors.itemsRequired && (
                      <p className="text-red-600 text-xs mt-1 flex items-center gap-1" style={{ fontFamily: 'var(--font-body)' }}>
                        <AlertCircle className="w-3 h-3" />
                        {errors.itemsRequired}
                      </p>
                    )}
                  </div>

                  {/* Dietary Requirements */}
                  <div className="flex flex-col gap-2">
                    <Label
                      className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span className="capitalize">Dietary Requirements</span>
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                      {dietaryOptions.map((dietary) => (
                        <div key={dietary} className="flex items-center gap-2">
                          <Checkbox
                            id={`dietary-${dietary.replace(/\s+/g, '-')}`}
                            checked={formData.dietaryRequirements.includes(dietary)}
                            onCheckedChange={(checked) => handleDietaryCheckboxChange(dietary, checked === true)}
                          />
                          <label
                            htmlFor={`dietary-${dietary.replace(/\s+/g, '-')}`}
                            className="text-sm text-[#4B2E20] cursor-pointer"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            {dietary}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Number of Servings */}
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="enquiry-noOfServings"
                      className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span className="capitalize">Number of Servings</span> <span className="text-red-600">*</span>
                    </Label>
                    <Input
                      id="enquiry-noOfServings"
                      type="number"
                      min="1"
                      value={formData.noOfServings}
                      onChange={(e) => handleChange('noOfServings', e.target.value)}
                      placeholder="e.g., 50"
                      className={`bg-transparent border-0 border-b-[1.6px] rounded-none px-0 py-1 text-sm focus-visible:ring-0 placeholder:text-[#a8a8a8] ${
                        errors.noOfServings ? 'border-red-500 focus-visible:border-red-500' : 'border-[#917e75] focus-visible:border-[#917e75]'
                      }`}
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                    {errors.noOfServings && (
                      <p className="text-red-600 text-xs mt-1 flex items-center gap-1" style={{ fontFamily: 'var(--font-body)' }}>
                        <AlertCircle className="w-3 h-3" />
                        {errors.noOfServings}
                      </p>
                    )}
                  </div>

                  {/* Design Brief */}
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="enquiry-designBrief"
                      className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span className="capitalize">Design Brief</span>
                    </Label>
                    <Textarea
                      id="enquiry-designBrief"
                      value={formData.designBrief}
                      onChange={(e) => handleChange('designBrief', e.target.value)}
                      placeholder="Share any specific design ideas, flavors, colors, or dietary requirements..."
                      rows={1}
                      className="bg-transparent border-0 border-b-[1.6px] border-[#917e75] rounded-none px-0 py-1 text-sm focus-visible:ring-0 focus-visible:border-[#917e75] placeholder:text-[#a8a8a8] min-h-[32px] resize-none overflow-hidden"
                      style={{ fontFamily: 'var(--font-body)', lineHeight: '1.5' }}
                      onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = 'auto';
                        target.style.height = target.scrollHeight + 'px';
                      }}
                    />
                  </div>

                  {/* Inspiration Images */}
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="enquiry-inspirationImages"
                      className="text-[rgba(75,46,32,0.6)] font-medium text-sm tracking-[0.6px]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span className="capitalize">Inspiration Images</span>
                    </Label>
                    
                    {/* File Input with Icon */}
                    <label 
                      htmlFor="enquiry-inspirationImages"
                      className="cursor-pointer flex items-center gap-3 py-3 px-4 border-2 border-dashed border-[#6B8A47]/30 rounded-lg hover:border-[#6B8A47] transition-colors duration-300 bg-white/50"
                    >
                      <ImageIcon className="w-5 h-5 text-[#6B8A47]" />
                      <span className="text-sm text-[#6E564A]" style={{ fontFamily: 'var(--font-body)' }}>
                        Click to upload images
                      </span>
                      <input
                        id="enquiry-inspirationImages"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    
                    {/* Uploaded Images List */}
                    {formData.inspirationImages.length > 0 && (
                      <div className="mt-3 space-y-2">
                        <p className="text-xs text-[#6E564A]/70" style={{ fontFamily: 'var(--font-body)' }}>
                          {formData.inspirationImages.length} {formData.inspirationImages.length === 1 ? 'image' : 'images'} selected
                        </p>
                        {formData.inspirationImages.map((file, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="flex items-center justify-between gap-3 py-2 px-3 bg-[#6B8A47]/5 rounded-lg group hover:bg-[#6B8A47]/10 transition-colors duration-200"
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <ImageIcon className="w-4 h-4 text-[#6B8A47] flex-shrink-0" />
                              <span className="text-sm text-[#4B2E20] truncate" style={{ fontFamily: 'var(--font-body)' }}>
                                {file.name}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemoveImage(index)}
                              className="flex-shrink-0 text-[#4B2E20] hover:text-red-600 transition-colors duration-200 p-1"
                              aria-label="Remove image"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-red-600 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                        Something went wrong. Please try again later.
                      </p>
                    </motion.div>
                  )}
                </form>
              )}
            </div>

            {/* Sticky Footer with Buttons */}
            {submitStatus !== 'success' && (
              <div className="sticky bottom-0 bg-[#F9F7F4] border-t border-[#6B8A47]/20 px-6 md:px-8 py-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="flex-1 py-4 px-7 bg-transparent border border-[#6b8a47] text-[#6b8a47] rounded-[10px] transition-all duration-300 hover:bg-[#6b8a47]/5 text-base disabled:opacity-50"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    form="cake-enquiry-form"
                    disabled={isSubmitting}
                    className="flex-1 py-4 px-7 bg-[#6b8a47] text-white rounded-[10px] transition-all duration-300 hover:bg-[#5a7339] text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}