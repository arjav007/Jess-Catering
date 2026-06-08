import React from 'react';
import { GoogleReviewsBadge } from './GoogleReviewsBadge';

export function Footer() {
  
  // This broadcasts a message to App.tsx to change the page!
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('navigatePage', { detail: page }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5F3F0] border-t-2 border-[#C49533]">
      <div className="mx-auto px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4
              className="mb-4 text-[#6B8A47] text-xl"
              style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
            >
              About
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, 'about')}
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Our Story
                </a>
              </li>
            </ul>

            {/* Google Reviews Badge Section */}
            <div className="mt-8 -ml-2">
              <GoogleReviewsBadge />
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h4
              className="mb-4 text-[#6B8A47] text-xl"
              style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
            >
              Menu
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleNavClick(e, 'menu')}
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Appetisers
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleNavClick(e, 'menu')}
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Cold Mains
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleNavClick(e, 'menu')}
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Hot Mains
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleNavClick(e, 'menu')}
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Desserts
                </a>
              </li>
            </ul>
          </div>

          {/* Cakes & Bakes */}
          <div>
            <h4
              className="mb-4 text-[#6B8A47] text-xl"
              style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
            >
              Cakes & Bakes
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#cakes-order"
                  onClick={(e) => handleNavClick(e, 'cakes')}
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Collections
                </a>
              </li>
              
              <li>
                <a
                  href="#cakes-order"
                  onClick={(e) => handleNavClick(e, 'cakes')}
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Custom Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-4 text-[#6B8A47] text-xl"
              style={{ fontFamily: 'Abhaya Libre SemiBold, serif' }}
            >
              Contact Info
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.google.com/maps/search/Melbourne%20VIC,%20Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Melbourne, VIC
                </a>
              </li>
              <li>
                <a
                  href="mailto:request@jesscateringservices.com.au"
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  request@jesscateringservices.com.au
                </a>
              </li>
              <li>
                <a
                  href="tel:+61412345678"
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  +61 412 345 678
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[#4B2E20]/10 text-center flex flex-col items-center gap-1">
          <p className="text-[#4B2E20]/60" style={{ fontFamily: 'var(--font-body)' }}>
            © Jess Catering Services · Made with ❤️ in Melbourne
          </p>
          <p className="text-[#4B2E20]/60 text-sm font-medium" style={{ fontFamily: 'var(--font-body)' }}>
            Made by Graphikwise
          </p>
        </div>
      </div>
    </footer>
  );
}