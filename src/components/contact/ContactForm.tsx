import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  User,
  Instagram,
  Facebook,
  MessageCircle
} from 'lucide-react@0.487.0';

export function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div ref={ref} className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#F9F7F4] p-8 md:p-10 rounded-2xl border border-[#6B8A47] space-y-9"
            >
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-[8px]">
                  <label
                    htmlFor="firstName"
                    className="text-[rgba(75,46,32,0.6)] text-[14px] tracking-[0.6px] uppercase font-medium leading-[16px]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <span className="capitalize">First Name</span>
                    <span className="text-red-600"> *</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your first name"
                    className="w-full bg-transparent border-0 border-b-[1.572px] border-[#917E75] py-1 text-[#4B2E20] text-[14px] placeholder:text-[#a8a8a8] focus:outline-none focus:border-[#6B8A47] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label
                    htmlFor="lastName"
                    className="text-[rgba(75,46,32,0.6)] text-[14px] tracking-[0.6px] uppercase font-medium leading-[16px]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <span className="capitalize">Last Name</span>
                    <span className="text-red-600"> *</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your last name"
                    className="w-full bg-transparent border-0 border-b-[1.572px] border-[#917E75] py-1 text-[#4B2E20] text-[14px] placeholder:text-[#a8a8a8] focus:outline-none focus:border-[#6B8A47] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-[8px]">
                <label
                  htmlFor="email"
                  className="text-[rgba(75,46,32,0.6)] text-[14px] tracking-[0.6px] uppercase font-medium leading-[16px]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <span className="capitalize">Email Address</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full bg-transparent border-0 border-b-[1.572px] border-[#917E75] py-1 text-[#4B2E20] text-[14px] placeholder:text-[#a8a8a8] focus:outline-none focus:border-[#6B8A47] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-[8px]">
                <label
                  htmlFor="phone"
                  className="text-[rgba(75,46,32,0.6)] text-[14px] tracking-[0.6px] uppercase font-medium leading-[16px]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <span className="capitalize">Phone Number</span>
                  <span className="text-red-600"> *</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="0400 000 000"
                  className="w-full bg-transparent border-0 border-b-[1.572px] border-[#917E75] py-1 text-[#4B2E20] text-[14px] placeholder:text-[#a8a8a8] focus:outline-none focus:border-[#6B8A47] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-[8px]">
                <label
                  htmlFor="message"
                  className="text-[rgba(75,46,32,0.6)] text-[14px] tracking-[0.6px] font-medium leading-[16px]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Tell us a little about your requirement...
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={1}
                  placeholder="Enter your message"
                  className="w-full bg-transparent border-0 border-b-[1.572px] border-[#917E75] py-1 text-[#4B2E20] text-[14px] placeholder:text-[#a8a8a8] focus:outline-none focus:border-[#6B8A47] transition-colors duration-300 resize-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>

              {/* Submit Section */}
              <div className="space-y-4 pt-6">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#6B8A47] text-white rounded-[10px] hover:bg-[#D5B36B] transition-all duration-300 text-base"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Contact Us
                </button>

                <p
                  className="text-center text-[#6E564A] text-sm leading-[21px]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  We usually reply within 24 hours.
                </p>
              </div>
            </form>
          </motion.div>

          {/* Right Column - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Details Section */}
            <div className="space-y-6">
              <h2
                className="text-4xl md:text-5xl lg:text-[52px] leading-tight text-[#6B8A47]"
                style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
              >
                Contact Details
              </h2>

              <div className="space-y-6">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-[#6B8A47] flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-[#6B8A47]" />
                  </div>
                  <p
                    className="text-[#6E564A] text-base"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Jerestene Saher
                  </p>
                </motion.div>

                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-[#6B8A47] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-[#D5B36B] group-hover:bg-[#D5B36B]/10">
                    <MapPin className="w-5 h-5 text-[#6B8A47] transition-colors duration-300 group-hover:text-[#D5B36B]" />
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=56+McDougall+Pl+Truganina+VIC+3029"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6E564A] text-base hover:text-[#D5B36B] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    56 McDougall Pl, Truganina VIC 3029
                  </a>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-[#6B8A47] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-[#D5B36B] group-hover:bg-[#D5B36B]/10">
                    <Mail className="w-5 h-5 text-[#6B8A47] transition-colors duration-300 group-hover:text-[#D5B36B]" />
                  </div>
                  <a
                    href="mailto:request@jesscateringservices.com.au"
                    className="text-[#6E564A] text-base hover:text-[#D5B36B] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    request@jesscateringservices.com.au
                  </a>
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-[#6B8A47] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-[#D5B36B] group-hover:bg-[#D5B36B]/10">
                    <Phone className="w-5 h-5 text-[#6B8A47] transition-colors duration-300 group-hover:text-[#D5B36B]" />
                  </div>
                  <a
                    href="tel:0415282931"
                    className="text-[#6E564A] text-base hover:text-[#D5B36B] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    0415 282 931
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Brand Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-6 border-t border-[#6B8A47]/20"
            >
              <p
                className="text-lg leading-[29.25px] text-[#6E564A]"
                style={{ fontFamily: 'Abhaya Libre, serif' }}
              >
                "Food tastes better when shared — let's start planning your next gathering."
              </p>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-4"
            >
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: MessageCircle, href: '#', label: 'WhatsApp' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="w-12 h-12 rounded-full border-2 border-[#6B8A47] flex items-center justify-center transition-all duration-300 hover:border-[#D5B36B] hover:bg-[#D5B36B]/10 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-[#6B8A47] transition-colors duration-300 group-hover:text-[#D5B36B]" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}