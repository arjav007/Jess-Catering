# Catering Order Flow - Component Documentation

## Overview
A luxury multi-step catering order experience featuring elegant design, smooth animations, and responsive layouts that reflect the Jess Catering brand.

## Components

### OrderHero.tsx
Half-height hero section with:
- Parallax image effect on mouse move
- Gradient overlay
- Animated text introduction
- Gold divider line

### ProgressIndicator.tsx
Luxury progress tracking with:
- Desktop: Roman numeral markers (I, II, III, IV) with connecting line
- Mobile: Simplified horizontal bar with step count
- Active step highlighting with green glow
- Gold shimmer animation on progress
- Smooth transitions between steps

### OrderMenuCard.tsx
Menu item cards with two layouts:
- **Vertical (Desktop)**: Full card with 3:2 image, description, price
- **Horizontal (Mobile)**: Compact card with side image
- Quantity stepper controls (-, qty, +)
- Veg/Non-veg indicator
- Gold ring highlight when selected
- Hover animations

### CartSidebar.tsx
Shopping cart display with:
- **Desktop**: Fixed sidebar with items list and subtotal
- **Mobile**: Bottom sheet drawer
- Animated item additions/removals
- Live subtotal calculation
- Proceed to next step button

### FloatingCartButton.tsx
Mobile-only floating action button:
- Bottom-right position
- Badge showing item count
- Opens cart drawer on tap
- Scale animations

### StepSelectMenu.tsx
Step 1 - Menu selection with:
- Category filter pills (sticky)
- Menu grid (responsive layout switch)
- Desktop: Vertical cards + sidebar
- Mobile: Horizontal cards + floating cart
- Smooth category transitions

### StepEventDetails.tsx
Step 2 - Event details form with:
- Luxury form styling (gold underline focus)
- Two-column layout (desktop) / single-column (mobile)
- Animated underline sweep on focus
- Required field validation
- Form fields:
  - Name, Email, Phone
  - Event Type, Guest Count
  - Delivery Type, Address, Date
  - Payment Method, Message

### StepReview.tsx
Step 3 - Order review with:
- Order summary card with gold border
- Editable quantities inline
- Event details summary
- Totals breakdown (subtotal, delivery, final)
- Confirmation checkbox
- Edit links to previous steps

### StepConfirmation.tsx
Step 4 - Success state with:
- Animated check circle with glow
- Gold shimmer line
- Decorative plate illustration
- Action buttons (Return Home, Explore Menu)
- Email confirmation message

## State Management

### Order.tsx (Main Controller)
Manages:
- Current step (1-4)
- Selected items (Record<id, quantity>)
- Event details form data
- Step navigation and transitions
- Scroll-to-top on step changes

## Design Features

### Colors
- Primary Green: #6B8A47
- Cocoa Brown: #4B2E20
- Soft Gold: #D5B36B
- Cream Background: #F9F7F4
- Dark Text: #2E1B12

### Typography
- Headings: Abhaya Libre (serif)
- Body: Inter (sans-serif)

### Animations
- Fade-in on scroll (IntersectionObserver)
- Smooth slide transitions
- Gold shimmer effects
- Button hover lifts
- Progress line animations
- Form underline sweeps

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## Usage

```tsx
import Order from './Order';

<Order
  onReturnHome={() => navigate('/')}
  onExploreMenu={() => navigate('/menu')}
/>
```

## Navigation Integration

The order flow is accessible via:
- Navigation "Order Now" button
- Menu page CTAs
- About page CTAs

## Data Flow

1. **Step 1**: User selects menu items → Updates selectedItems state
2. **Step 2**: User fills event details → Updates eventDetails state
3. **Step 3**: User reviews and edits → Can modify both states
4. **Step 4**: Order submitted → Console logs order data (ready for backend integration)

## Future Enhancements

- Backend API integration
- Real-time price calculation
- Email confirmation
- Order tracking
- Dietary restrictions filtering
- Custom dish requests
- Date/time availability checking
- Payment processing integration