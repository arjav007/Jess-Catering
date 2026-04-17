import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react@0.487.0';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '../ui/sheet';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category?: 'catering' | 'cakes';
}

interface CartSidebarProps {
  items: CartItem[];
  isOpen?: boolean;
  onClose?: () => void;
  onProceed: () => void;
  onUpdateQuantity?: (id: string, quantity: number) => void;
  onRemoveItem?: (id: string) => void;
  isMobile?: boolean;
}

export function CartSidebar({ items, isOpen = true, onClose, onProceed, onUpdateQuantity, onRemoveItem, isMobile = false }: CartSidebarProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const content = (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="border-b border-[#D5B36B]/30 pb-4 mb-4">
        <div className="flex items-center justify-between">
          <h3
            className="text-[#6B8A47] text-xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Your Order
          </h3>
          <div className="flex items-center gap-2">
            <div className="bg-[#6B8A47] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              {totalItems}
            </div>
          </div>
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <ShoppingBag className="w-16 h-16 text-[#D5B36B]/40 mb-4" />
            <p
              className="text-[#4B2E20]/60"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Your cart is empty
            </p>
            <p
              className="text-[#4B2E20]/40 text-sm mt-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Add items to get started
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="py-3 border-b border-[#6B8A47]/10"
                >
                  {/* Item Name and Category */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p
                          className="text-[#2E1B12] text-sm font-medium"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {item.name}
                        </p>
                        {item.category && (
                          <span
                            className="text-xs px-3 py-1 rounded-full whitespace-nowrap font-medium text-[#6B8A47]"
                            // FIXED: Forced the background color to render via inline styles and added extra padding
                            style={{ fontFamily: 'var(--font-body)', backgroundColor: '#E6EEDC' }}
                          >
                            {item.category === 'catering' ? 'Catering' : 'Cakes & Bakes'}
                          </span>
                        )}
                      </div>
                      <p
                        className="text-[#D5B36B] text-base font-semibold"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                    {/* Remove Button */}
                    {onRemoveItem && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#4B2E20]/40 hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    )}
                  </div>

                  {/* Quantity Controls and Total */}
                  <div className="flex items-center justify-between">
                    {/* Quantity Controls */}
                    {onUpdateQuantity ? (
                      <div className="flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                          // FIXED: Forced the background color to render via inline styles
                          style={{ backgroundColor: '#E6EEDC' }}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3 text-[#6B8A47]" />
                        </motion.button>
                        <span
                          className="text-[#2E1B12] min-w-[2rem] text-center"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {item.quantity}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                          // FIXED: Forced the background color to render via inline styles
                          style={{ backgroundColor: '#E6EEDC' }}
                        >
                          <Plus className="w-3 h-3 text-[#6B8A47]" />
                        </motion.button>
                      </div>
                    ) : (
                      <p
                        className="text-[#4B2E20]/60 text-sm"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        Qty: {item.quantity}
                      </p>
                    )}

                    {/* Item Total */}
                    <p
                      className="text-[#6B8A47] font-semibold text-lg"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Subtotal & Proceed */}
      {items.length > 0 && (
        <div className="border-t border-[#D5B36B]/30 pt-4 mt-4">
          <div className="flex justify-between items-center mb-6">
            <span
              className="text-[#2E1B12]"
              style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem' }}
            >
              Subtotal
            </span>
            <motion.span
              key={subtotal}
              initial={{ scale: 1.2, color: '#D5B36B' }}
              animate={{ scale: 1, color: '#6B8A47' }}
              className="text-[#6B8A47]"
              style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}
            >
              ${subtotal.toFixed(2)}
            </motion.span>
          </div>

          <motion.button
            whileHover={{ y: -2, backgroundColor: '#D5B36B' }}
            whileTap={{ scale: 0.98 }}
            onClick={onProceed}
            className="w-full py-4 bg-[#6B8A47] text-white rounded-lg transition-all duration-300"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Proceed to Details
          </motion.button>
        </div>
      )}
    </div>
  );

  // Mobile: Render as Sheet (bottom drawer)
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="bottom" className="h-[80vh] rounded-t-2xl border-t-4 border-[#D5B36B] bg-[#F9F7F4] p-6">
          <SheetHeader>
            <SheetTitle className="sr-only">Shopping Cart</SheetTitle>
            <SheetDescription className="sr-only">
              Review your selected items and proceed to checkout
            </SheetDescription>
          </SheetHeader>
          {content}
        </SheetContent>
      </Sheet>
    );
  }

  // Desktop: Render as fixed sidebar
  return (
    <div className="sticky top-32 bg-[#F9F7F4] rounded-xl border-t-4 border-[#D5B36B] p-6 h-[calc(100vh-10rem)] overflow-hidden">
      {content}
    </div>
  );
}

// Floating Cart Button (Mobile)
interface FloatingCartButtonProps {
  itemCount: number;
  onClick: () => void;
}

export function FloatingCartButton({ itemCount, onClick }: FloatingCartButtonProps) {
  if (itemCount === 0) return null;

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#6B8A47] rounded-full shadow-lg flex items-center justify-center md:hidden"
    >
      <ShoppingBag className="w-6 h-6 text-white" />
      <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#D5B36B] rounded-full flex items-center justify-center">
        <span className="text-white text-xs" style={{ fontFamily: 'var(--font-body)' }}>
          {itemCount}
        </span>
      </div>
    </motion.button>
  );
}