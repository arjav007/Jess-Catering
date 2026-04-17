import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
  const [mounted, setMounted] = useState(false);

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

  // Mount guard for SSR safety (Next.js)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll lock
  useEffect(() => {
    if (!mounted) return;
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) window.scrollTo(0, parseInt(scrollY) * -1);
    }
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) window.scrollTo(0, parseInt(scrollY) * -1);
    };
  }, [isOpen, mounted]);

  const itemOptions = [
    'Cake', 'Cupcakes', 'Mini Cupcakes', 'Cakesicles',
    'Chocolate Geo Hearts', 'Chocolate Pyramids', 'Other',
  ];

  const dietaryOptions = [
    'Gluten-Free', 'Vegan', 'Nut-Free', 'Dairy-Free',
    'Egg-Free', 'Sugar-Free', 'None',
  ];

  const handleChange = (field: keyof FormData, value: string | string[] | File[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
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
      setFormData((prev) => ({ ...prev, inspirationImages: [...prev.inspirationImages, ...filesArray] }));
    }
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setFormData((prev) => ({
      ...prev,
      inspirationImages: prev.inspirationImages.filter((_, index) => index !== indexToRemove),
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '', email: '', contactNumber: '', typeOfEvent: '', deliveryDate: '',
      pickupOrDelivery: '', deliveryAddress: '', itemsRequired: [], dietaryRequirements: [],
      noOfServings: '', designBrief: '', inspirationImages: [],
    });
    setErrors({});
    setSubmitStatus('idle');
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.deliveryDate) newErrors.deliveryDate = 'Date is required';
    if (!formData.pickupOrDelivery) newErrors.pickupOrDelivery = 'Select option';
    if (formData.itemsRequired.length === 0) newErrors.itemsRequired = 'Select at least one item';
    if (!formData.noOfServings.trim()) newErrors.noOfServings = 'Servings required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // THE FIX: Web3Forms Integration
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // 1. Create a native FormData object (Required for file uploads in Web3Forms)
      const formDataToSend = new window.FormData();
      
      // 2. Add API Key & Basic Settings
      formDataToSend.append('access_key', 'fd0a7abe-b925-4e03-98ff-955eceb062c3');
      formDataToSend.append('subject', `New Custom Cake Enquiry from ${formData.name}`);
      formDataToSend.append('from_name', formData.name);
      formDataToSend.append('email', formData.email);

      // 3. Construct a beautiful, readable message for your email inbox
      const messageBody = `
New Custom Cake Enquiry Details:

--- CUSTOMER INFO ---
Name: ${formData.name}
Email: ${formData.email}
Contact Number: ${formData.contactNumber || 'Not provided'}

--- EVENT DETAILS ---
Type of Event: ${formData.typeOfEvent || 'Not provided'}
Pickup/Delivery Date: ${formData.deliveryDate}
Method: ${formData.pickupOrDelivery}
${formData.pickupOrDelivery === 'delivery' ? `Delivery Address: ${formData.deliveryAddress}\n` : ''}

--- ORDER REQUIREMENTS ---
Items Required: ${formData.itemsRequired.join(', ')}
Dietary Requirements: ${formData.dietaryRequirements.length > 0 ? formData.dietaryRequirements.join(', ') : 'None'}
Number of Servings: ${formData.noOfServings}

--- DESIGN BRIEF ---
${formData.designBrief || 'No design brief provided.'}
      `;
      
      formDataToSend.append('message', messageBody);

      // 4. Attach the Inspiration Images
      formData.inspirationImages.forEach((file) => {
        formDataToSend.append('attachment', file);
      });

      // 5. Send to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          resetForm();
          onClose();
        }, 3000);
      } else {
        console.error("Web3Forms API Error:", data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      resetForm();
      onClose();
    }
  };

  // Don't render until client-side mounted (Next.js SSR safety)
  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-8"
          style={{ zIndex: 99999 }}
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl bg-[#F9F7F4] rounded-2xl shadow-2xl flex flex-col"
            style={{ maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >

            {/* HEADER */}
            <div className="shrink-0 border-b border-[#6B8A47]/20 px-6 md:px-8 py-5 flex items-center justify-between">
              <h2 className="text-2xl sm:text-3xl text-[#6B8A47]" style={{ fontFamily: 'var(--font-heading)' }}>
                Custom Cake Enquiry
              </h2>
              <button
                onClick={handleClose}
                disabled={isSubmitting}
                className="text-[#4B2E20] hover:text-[#6B8A47] transition-colors p-1.5 rounded-full hover:bg-[#6B8A47]/10 disabled:opacity-50"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* SCROLLABLE BODY */}
            <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6">
              {submitStatus === 'success' ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-16">
                  <div className="w-20 h-20 bg-[#6B8A47] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Check className="w-10 h-10 text-white" strokeWidth={3} />
                  </div>
                  <h3 className="text-3xl text-[#6B8A47] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    Enquiry Submitted!
                  </h3>
                  <p className="text-[#6E564A] text-lg" style={{ fontFamily: 'var(--font-body)' }}>
                    Thank you! We'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form id="cake-enquiry-form" onSubmit={handleSubmit} className="space-y-6">

                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="enquiry-name" className="text-[#4B2E20]/80 font-medium text-sm tracking-wide">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="enquiry-name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className={`bg-transparent border-0 border-b-2 rounded-none px-0 py-2 text-base focus-visible:ring-0 placeholder:text-[#a8a8a8] transition-colors ${errors.name ? 'border-red-500 focus-visible:border-red-500' : 'border-[#D5B36B] focus-visible:border-[#6B8A47]'}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="enquiry-email" className="text-[#4B2E20]/80 font-medium text-sm tracking-wide">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="enquiry-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="Enter your email"
                        className={`bg-transparent border-0 border-b-2 rounded-none px-0 py-2 text-base focus-visible:ring-0 placeholder:text-[#a8a8a8] transition-colors ${errors.email ? 'border-red-500 focus-visible:border-red-500' : 'border-[#D5B36B] focus-visible:border-[#6B8A47]'}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="enquiry-contactNumber" className="text-[#4B2E20]/80 font-medium text-sm tracking-wide">
                        Contact Number
                      </Label>
                      <Input
                        id="enquiry-contactNumber"
                        type="tel"
                        value={formData.contactNumber}
                        onChange={(e) => handleChange('contactNumber', e.target.value)}
                        placeholder="Optional"
                        className="bg-transparent border-0 border-b-2 border-[#D5B36B] rounded-none px-0 py-2 text-base focus-visible:ring-0 focus-visible:border-[#6B8A47] placeholder:text-[#a8a8a8] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Event & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="enquiry-typeOfEvent" className="text-[#4B2E20]/80 font-medium text-sm tracking-wide">
                        Type of Event
                      </Label>
                      <Input
                        id="enquiry-typeOfEvent"
                        value={formData.typeOfEvent}
                        onChange={(e) => handleChange('typeOfEvent', e.target.value)}
                        placeholder="e.g., Birthday, Wedding"
                        className="bg-transparent border-0 border-b-2 border-[#D5B36B] rounded-none px-0 py-2 text-base focus-visible:ring-0 focus-visible:border-[#6B8A47] placeholder:text-[#a8a8a8] transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="enquiry-deliveryDate" className="text-[#4B2E20]/80 font-medium text-sm tracking-wide">
                        Pickup/Delivery Date <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="enquiry-deliveryDate"
                        type="date"
                        value={formData.deliveryDate}
                        onChange={(e) => handleChange('deliveryDate', e.target.value)}
                        className={`bg-transparent border-0 border-b-2 rounded-none px-0 py-2 text-base focus-visible:ring-0 placeholder:text-[#a8a8a8] transition-colors ${errors.deliveryDate ? 'border-red-500 focus-visible:border-red-500' : 'border-[#D5B36B] focus-visible:border-[#6B8A47]'}`}
                      />
                      {errors.deliveryDate && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.deliveryDate}</p>}
                    </div>
                  </div>

                  {/* Pickup/Delivery */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="flex flex-col gap-1.5">
  <Label className="text-[#4B2E20]/80 font-medium text-sm tracking-wide">
    Pickup or Delivery <span className="text-red-500">*</span>
  </Label>

  <Select
    value={formData.pickupOrDelivery || ""}
    onValueChange={(value) => handleChange("pickupOrDelivery", value)}
  >
    <SelectTrigger
      className={`bg-transparent border-0 border-b-2 rounded-none px-0 py-2 h-10 text-base focus:ring-0 focus:ring-offset-0 transition-colors ${
        errors.pickupOrDelivery ? "border-red-500" : "border-[#D5B36B]"
      }`}
    >
      <SelectValue placeholder="Select option" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem value="pickup">Pickup</SelectItem>
      <SelectItem value="delivery">Delivery</SelectItem>
    </SelectContent>
  </Select>

  {errors.pickupOrDelivery && (
    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
      <AlertCircle className="w-3 h-3" />
      {errors.pickupOrDelivery}
    </p>
  )}
</div>

{formData.pickupOrDelivery === "delivery" && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex flex-col gap-1.5"
  >
    <Label
      htmlFor="enquiry-deliveryAddress"
      className="text-[#4B2E20]/80 font-medium text-sm tracking-wide"
    >
      Delivery Address
    </Label>

    <Input
      id="enquiry-deliveryAddress"
      value={formData.deliveryAddress}
      onChange={(e) =>
        handleChange("deliveryAddress", e.target.value)
      }
      placeholder="Enter delivery address"
      className="bg-transparent border-0 border-b-2 border-[#D5B36B] rounded-none px-0 py-2 text-base focus-visible:ring-0 focus-visible:border-[#6B8A47] placeholder:text-[#a8a8a8] transition-colors"
    />
  </motion.div>
)}
</div>

                  {/* Items Required */}
                  <div className="flex flex-col gap-2 pt-2">
                    <Label className="text-[#4B2E20]/80 font-medium text-sm tracking-wide">
                      Items Required <span className="text-red-500">*</span>
                    </Label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 mt-1 bg-white/40 p-4 rounded-xl border border-[#D5B36B]/30">
                      {itemOptions.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <Checkbox
                            id={`item-${item.replace(/\s+/g, '-')}`}
                            checked={formData.itemsRequired.includes(item)}
                            onCheckedChange={(checked) => handleCheckboxChange(item, checked === true)}
                            className="border-[#6B8A47] data-[state=checked]:bg-[#6B8A47]"
                          />
                          <label htmlFor={`item-${item.replace(/\s+/g, '-')}`} className="text-sm text-[#4B2E20] cursor-pointer hover:text-[#6B8A47] transition-colors">
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors.itemsRequired && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.itemsRequired}</p>}
                  </div>

                  {/* Dietary Requirements */}
                  <div className="flex flex-col gap-2">
                    <Label className="text-[#4B2E20]/80 font-medium text-sm tracking-wide">
                      Dietary Requirements
                    </Label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 mt-1 bg-white/40 p-4 rounded-xl border border-[#D5B36B]/30">
                      {dietaryOptions.map((dietary) => (
                        <div key={dietary} className="flex items-center gap-2">
                          <Checkbox
                            id={`dietary-${dietary.replace(/\s+/g, '-')}`}
                            checked={formData.dietaryRequirements.includes(dietary)}
                            onCheckedChange={(checked) => handleDietaryCheckboxChange(dietary, checked === true)}
                            className="border-[#6B8A47] data-[state=checked]:bg-[#6B8A47]"
                          />
                          <label htmlFor={`dietary-${dietary.replace(/\s+/g, '-')}`} className="text-sm text-[#4B2E20] cursor-pointer hover:text-[#6B8A47] transition-colors">
                            {dietary}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Number of Servings */}
                  <div className="flex flex-col gap-1.5 pt-2">
                    <Label htmlFor="enquiry-noOfServings" className="text-[#4B2E20]/80 font-medium text-sm tracking-wide">
                      Number of Servings <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="enquiry-noOfServings"
                      type="number"
                      min="1"
                      value={formData.noOfServings}
                      onChange={(e) => handleChange('noOfServings', e.target.value)}
                      placeholder="e.g., 50"
                      className={`bg-transparent border-0 border-b-2 rounded-none px-0 py-2 text-base focus-visible:ring-0 placeholder:text-[#a8a8a8] transition-colors ${errors.noOfServings ? 'border-red-500 focus-visible:border-red-500' : 'border-[#D5B36B] focus-visible:border-[#6B8A47]'}`}
                    />
                    {errors.noOfServings && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.noOfServings}</p>}
                  </div>

                  {/* Design Brief */}
                  <div className="flex flex-col gap-1.5 pt-2">
                    <Label htmlFor="enquiry-designBrief" className="text-[#4B2E20]/80 font-medium text-sm tracking-wide">
                      Design Brief & Customizations
                    </Label>
                    <Textarea
                      id="enquiry-designBrief"
                      value={formData.designBrief}
                      onChange={(e) => handleChange('designBrief', e.target.value)}
                      placeholder="Share ideas, flavors, themes, or colors..."
                      className="bg-white/50 border-2 border-[#D5B36B]/40 rounded-xl px-4 py-3 text-base focus-visible:ring-0 focus-visible:border-[#6B8A47] placeholder:text-[#a8a8a8] min-h-[100px] resize-y mt-1 transition-colors"
                    />
                  </div>

                  {/* Inspiration Images */}
                  <div className="flex flex-col gap-2 pt-2">
                    <Label className="text-[#4B2E20]/80 font-medium text-sm tracking-wide">
                      Inspiration Images
                    </Label>
                    
                    <label className="cursor-pointer flex flex-col items-center justify-center gap-2 py-6 px-4 border-2 border-dashed border-[#D5B36B] rounded-xl hover:border-[#6B8A47] hover:bg-[#6B8A47]/5 transition-all duration-300 bg-white/40 mt-1">
                      <div className="bg-[#6B8A47]/10 p-3 rounded-full">
                        <Upload className="w-6 h-6 text-[#6B8A47]" />
                      </div>
                      <span className="text-sm font-medium text-[#6E564A]">Click to upload files</span>
                      <span className="text-xs text-[#a8a8a8]">JPEG, PNG, JPG (max 5MB)</span>
                      <input type="file" multiple accept="image/*" onChange={handleFileChange} className="hidden" />
                    </label>
                    
                    {formData.inspirationImages.length > 0 && (
                      <div className="mt-3 space-y-2">
                        <p className="text-xs font-medium text-[#6B8A47] uppercase tracking-wider">
                          {formData.inspirationImages.length} Files Selected
                        </p>
                        {formData.inspirationImages.map((file, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center justify-between gap-3 py-2.5 px-4 bg-white border border-[#D5B36B]/30 rounded-lg shadow-sm"
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <ImageIcon className="w-4 h-4 text-[#6B8A47] shrink-0" />
                              <span className="text-sm font-medium text-[#4B2E20] truncate">{file.name}</span>
                            </div>
                            <button type="button" onClick={() => handleRemoveImage(index)} className="shrink-0 text-red-400 hover:text-red-600 transition-colors p-1.5 rounded-md hover:bg-red-50">
                              <X className="w-4 h-4" />
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit Error */}
                  {submitStatus === 'error' && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm font-medium">Unable to submit form. Please check your connection and try again.</p>
                    </motion.div>
                  )}

                  <div className="h-2" />
                </form>
              )}
            </div>

            {/* FIXED FOOTER */}
            {submitStatus !== 'success' && (
              <div className="shrink-0 border-t border-[#6B8A47]/20 px-6 md:px-8 pt-4 pb-4 sm:pb-8 z-10">
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="w-1/3 py-4 px-4 bg-transparent border-2 border-[#6b8a47] text-[#6b8a47] font-semibold rounded-xl transition-all hover:bg-[#6b8a47]/5 text-sm sm:text-base disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    form="cake-enquiry-form"
                    disabled={isSubmitting}
                    className="w-2/3 py-4 px-4 bg-[#6b8a47] text-white font-semibold rounded-xl transition-all hover:bg-[#5a7339] hover:shadow-md hover:-translate-y-0.5 text-sm sm:text-base disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? 'Sending Enquiry...' : 'Submit Enquiry'}
                  </button>
                </div>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}