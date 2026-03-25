import imgImageWithFallback from "figma:asset/a4aaaba0c5b842f15db65ce95f4d89083006a758.png";
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Footer } from './components/Footer';
import imgCatering from "figma:asset/89df004593ab1004ad95a12d506a7351a5eafc5e.png";
import imgChocolates from "figma:asset/7dc0d6c2835088eea91239387b103e7260dca829.png";
import svgPaths from "./imports/svg-ho35oie2ec";

interface HomeProps {
  onPageChange: (page: 'menu' | 'about' | 'contact' | 'order' | 'chocolates-order') => void;
}

export default function Home({ onPageChange }: HomeProps) {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Hero images rotation
  const heroImages = [
    'https://images.unsplash.com/photo-1474221379956-afaf88e3d760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY2F0ZXJpbmclMjBwbGF0ZWQlMjBmb29kfGVufDF8fHx8MTc2NjM5NTkzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1636979275740-0c17f82f40d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kY3JhZnRlZCUyMGFydGlzYW4lMjBjaG9jb2xhdGVzfGVufDF8fHx8MTc2NjM5NTkzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1762765685319-fdaf8d22085d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNlbGVicmF0aW9uJTIwZGluaW5nfGVufDF8fHx8MTc2NjM5NTkzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-[#F9F7F4] pt-16">
      {/* Hero Banner */}
      <section className="relative bg-[#f9f7f4]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 pt-[68px] md:pt-[76px] pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="flex items-center">
              <div className="w-full max-w-[504px]">
                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-[#c49533] uppercase tracking-[0.8px] text-[16px] leading-6 mb-3"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Welcome to Jess Catering
                </motion.p>

                {/* Main Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col gap-1 mb-6"
                >
                  <h1
                    className="text-[52px] leading-[52px] text-[#6b8a47] font-bold"
                    style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
                  >
                    Crafted with Care,<br />Served with Heart.
                  </h1>
                </motion.div>

                {/* Gold Divider */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="bg-[#c49533] h-[2px] w-[64px] mb-6"
                />

                {/* Supporting Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-[#6e564a] text-[20px] leading-[30px] mb-6"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  From intimate gatherings to joyful celebrations, we bring the warmth of home-cooked food to every table across Melbourne.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <button
                    onClick={() => onPageChange('order')}
                    className="px-7 py-4 bg-[#6b8a47] text-white rounded-[10px] hover:bg-[#D5B36B] transition-all duration-300 text-[16px] leading-6"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Order Catering
                  </button>
                  <button
                    onClick={() => onPageChange('menu')}
                    className="px-7 py-4 border border-[#6b8a47] text-[#6b8a47] rounded-[10px] hover:border-[#D5B36B] hover:text-[#D5B36B] transition-all duration-300 text-[16px] leading-6"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    View Menu
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] lg:h-[600px]"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1474221379956-afaf88e3d760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY2F0ZXJpbmclMjBwbGF0ZWQlMjBmb29kfGVufDF8fHx8MTc2NjM5NTkzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Jess Catering Services"
                className="w-full h-full object-cover rounded-[16px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 md:py-14 bg-[#ffffff]">
        <div className="px-6 md:px-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl lg:text-[52px] leading-tight text-[#6B8A47] mb-4"
              style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
            >
              Our Services
            </h2>
            <p
              className="text-[#6e564a] text-[20px] leading-[30px] max-w-[1039px] mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Thoughtfully prepared food and chocolates, crafted for every occasion.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 gap-9 max-w-[1220px] mx-auto">
            {/* Card 1 - Catering */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group cursor-pointer"
              onClick={() => onPageChange('order')}
            >
              <div className="flex flex-col gap-3">
                <div className="relative overflow-hidden rounded-2xl aspect-[592/288]">
                  <img
                    src={imgCatering}
                    alt="Catering for Every Occasion"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3
                  className="text-[#6B8A47] text-[28px] leading-[26px]"
                  style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
                >
                  Catering for Every Occasion
                </h3>
                <p
                  className="text-[rgba(75,46,32,0.7)] text-[16px] leading-[26px]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  From small gatherings to celebrations of up to 50 guests, our catering blends tradition, flavor, and presentation.
                </p>
                <div className="inline-flex items-center border-b border-[#6B8A47] w-fit group-hover:border-[#D5B36B] transition-colors duration-300">
                  <span 
                    className="text-[#6B8A47] text-[16px] leading-[24px] group-hover:text-[#D5B36B] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Order Catering →
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Chocolates */}
            <motion.a
              href="https://cocodevenci.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group cursor-pointer block"
            >
              <div className="flex flex-col gap-3">
                <div className="relative overflow-hidden rounded-2xl aspect-[592/288]">
                  <img
                    src={imgChocolates}
                    alt="Artisan Chocolates"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3
                  className="text-[#6B8A47] text-[28px] leading-[26px]"
                  style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
                >
                  Artisan Chocolates
                </h3>
                <p
                  className="text-[rgba(75,46,32,0.7)] text-[16px] leading-[26px]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Exquisite, beautifully crafted chocolates, ideal for thoughtful gifting or a personal moment of sweet indulgence. Discover the art of chocolate.
                </p>
                <div className="inline-flex items-center border-b border-[#6B8A47] w-fit group-hover:border-[#D5B36B] transition-colors duration-300">
                  <span 
                    className="text-[#6B8A47] text-[16px] leading-[24px] group-hover:text-[#D5B36B] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Order Chocolates →
                  </span>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Our Menu Preview */}
      <section className="py-10 md:py-14 bg-[#f9f7f4]">
        <div className="px-6 md:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-[36px] md:text-[40px] lg:text-[52px] leading-tight text-[#6B8A47] mb-6"
                style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
              >
                A Menu Rooted<br />in Tradition.
              </h2>
              <p
                className="text-[#4B2E20]/80 mb-8 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Our food is inspired by family recipes, Parsi heritage, and a love for authentic flavors — prepared fresh for every order.
              </p>
              <button
                onClick={() => onPageChange('menu')}
                className="px-8 py-4 bg-[#6B8A47] text-white rounded-md hover:bg-[#D5B36B] transition-all duration-300"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                View Full Menu
              </button>
            </motion.div>

            {/* Right Side - Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-lg overflow-hidden aspect-square"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1666251214795-a1296307d29c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJzaSUyMGZvb2QlMjBjdWlzaW5lfGVufDF8fHx8MTc2NjM5NTkzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Parsi Specialty"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-lg overflow-hidden aspect-square"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1649140041688-0f75446e707e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwZGlzaGVzfGVufDF8fHx8MTc2NjM5NTkzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Indian Snack"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-lg overflow-hidden aspect-square"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1740594967618-23cd757b9291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwc3dlZXRzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjYzOTU5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Dessert"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-lg overflow-hidden aspect-square"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1636979275740-0c17f82f40d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kY3JhZnRlZCUyMGFydGlzYW4lMjBjaG9jb2xhdGVzfGVufDF8fHx8MTc2NjM5NTkzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Chocolate"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="px-6 md:px-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="h-[500px] overflow-clip rounded-[16px]"
            >
              <img
                src={imgImageWithFallback}
                alt="Restaurant dining setup"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-[#f9f7f4] rounded-[16px] p-12 flex flex-col gap-5"
            >
              <h2
                className="text-4xl md:text-5xl lg:text-[52px] leading-tight text-[#6b8a47]"
                style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
              >
                Our Story
              </h2>
              <div className="bg-[#c49533] h-[2px] w-[64px]" />
              <p
                className="text-[#6e564a] text-[18px] leading-[29.25px]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                It all started with a passion passed down from my mother. As a teenager, I helped her in the kitchen every day — learning that cooking is both art and love. Those early memories shaped everything Jess Catering stands for today.
              </p>
              <button
                onClick={() => onPageChange('about')}
                className="inline-flex items-center border-b border-[#6b8a47] w-fit hover:border-[#D5B36B] transition-colors duration-300"
              >
                <span
                  className="text-[#6b8a47] text-[16px] leading-[24px] hover:text-[#D5B36B] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Read Our Story →
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Value Section */}
      <section className="py-10 md:py-14 bg-[#f9f7f4]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-8">
          {/* Icon Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Block 1 - Fresh Ingredients */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-3 items-center"
            >
              <div className="relative w-16 h-16 rounded-full border-2 border-[#6b8a47] flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
                  <path d={svgPaths.p30871200} stroke="#6B8A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  <path d={svgPaths.p18f8f920} stroke="#6B8A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                </svg>
              </div>
              <p
                className="text-[#6e564a] text-[20px] leading-[24px] text-center"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Fresh Ingredients
              </p>
            </motion.div>

            {/* Block 2 - Handcrafted with Care */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-3 items-center"
            >
              <div className="relative w-16 h-16 rounded-full border-2 border-[#6b8a47] flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
                  <path d={svgPaths.p10249c80} stroke="#6B8A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  <path d="M8 22.666H24" stroke="#6B8A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                </svg>
              </div>
              <p
                className="text-[#6e564a] text-[20px] leading-[24px] text-center"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Handcrafted with Care
              </p>
            </motion.div>

            {/* Block 3 - Made with Love */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-3 items-center"
            >
              <div className="relative w-16 h-16 rounded-full border-2 border-[#6b8a47] flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
                  <path d={svgPaths.p2219d900} stroke="#6B8A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                </svg>
              </div>
              <p
                className="text-[#6e564a] text-[20px] leading-[24px] text-center"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Made with Love
              </p>
            </motion.div>

            {/* Block 4 - Authentic Flavours */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-3 items-center"
            >
              <div className="relative w-16 h-16 rounded-full border-2 border-[#6b8a47] flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
                  <path d={svgPaths.p3a084a70} stroke="#6B8A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                </svg>
              </div>
              <p
                className="text-[#6e564a] text-[20px] leading-[24px] text-center"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Authentic Flavours
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white relative">
        <div className="px-6 md:px-16 py-16 md:py-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6 text-center max-w-[896px] mx-auto"
          >
            <h2
              className="text-4xl md:text-5xl lg:text-[52px] leading-tight text-[#6B8A47] font-bold"
              style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
            >
              Ready to host your next event or gift our handmade chocolates?
            </h2>

            <p
              className="text-xl leading-[28px] text-[#6E564B]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Let's create something memorable together.
            </p>

            <button
              onClick={() => onPageChange('contact')}
              className="bg-[#6B8A47] text-white px-7 py-4 rounded-[10px] hover:bg-[#D5B36B] transition-all duration-300 text-base mt-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Contact Us
            </button>
          </motion.div>
        </div>
        
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}