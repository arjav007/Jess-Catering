export function Footer() {
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
                  href="#"
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Our Values
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Sustainability
                </a>
              </li>
            </ul>
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
                  href="#"
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Appetisers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Mains
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Hot Mains
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Deserts
                </a>
              </li>
            </ul>
          </div>

          {/* Chocolates */}
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
                  href="#"
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Gift Boxes
                </a>
              </li>
              <li>
                <a
                  href="#"
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
              <li className="text-[#4B2E20]/70" style={{ fontFamily: 'var(--font-body)' }}>
                Melbourne, VIC
              </li>
              <li>
                <a
                  href="mailto:hello@jesscatering.com"
                  className="text-[#4B2E20]/70 hover:text-[#D5B36B] transition-colors duration-300 border-b border-transparent hover:border-[#D5B36B]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  hello@jesscatering.com
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
        <div className="pt-8 border-t border-[#4B2E20]/10 text-center">
          <p className="text-[#4B2E20]/60" style={{ fontFamily: 'var(--font-body)' }}>
            © Jess Catering Services · Made with ❤️ in Melbourne
          </p>
        </div>
      </div>
    </footer>
  );
}