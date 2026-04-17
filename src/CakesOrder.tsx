import { useOrder } from './context/OrderContext';
import { CakesHero } from './components/cakes/CakesHero';
import { CakeGallery } from './components/cakes/CakeGallery';
import { BakingClasses } from './components/cakes/BakingClasses';
import { ProgressIndicator } from './components/cakes/ProgressIndicator';
import { StepCakesMenu } from './components/cakes/StepCakesMenu';
import { StepEventDetails } from './components/shared/StepEventDetails';
import { StepCakesReview } from './components/cakes/StepCakesReview';
import { StepCakesConfirmation } from './components/cakes/StepCakesConfirmation';
import { Footer } from './components/Footer';

// FIXED: Removed "export" so Vite Fast Refresh doesn't crash anymore!
export const cakesMenuItems = [
  {
    id: 'cake-1',
    name: 'Chocolate Ganache Cake',
    description: 'Rich chocolate layers with smooth ganache frosting',
    price: 55,
    category: 'Cakes',
    images: ['https://images.unsplash.com/photo-1640794334523-b299f14d28db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwbHV4dXJpb3VzfGVufDF8fHx8MTc3NTI4NTc2NHww&ixlib=rb-4.1.0&q=80&w=1080'],
  },
  {
    id: 'cake-2',
    name: 'Wedding Cake',
    description: 'Elegant multi-tiered cake customized for your special day',
    price: 250,
    category: 'Cakes',
    images: ['https://images.unsplash.com/photo-1584158531319-96912adae663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzc1Mjg1NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080'],
  },
  {
    id: 'cake-3',
    name: 'Artisan Pastries',
    description: 'Selection of handcrafted French pastries',
    price: 35,
    category: 'Pastries',
    images: ['https://images.unsplash.com/photo-1759303380841-55c09244fd2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY2FrZSUyMHBhc3RyeXxlbnwxfHx8fDE3NzUyODU3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080'],
  },
  {
    id: 'cake-4',
    name: 'Gourmet Cupcakes',
    description: 'Colorful cupcakes with premium toppings',
    price: 28,
    category: 'Cupcakes',
    images: ['https://images.unsplash.com/photo-1680580735621-4371027734eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc3NTI4NTc2NXww&ixlib=rb-4.1.0&q=80&w=1080'],
  },
  {
    id: 'cake-5',
    name: 'Red Velvet Cake',
    description: 'Classic red velvet with cream cheese frosting',
    price: 48,
    category: 'Cakes',
    images: ['https://images.unsplash.com/photo-1640794334523-b299f14d28db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwbHV4dXJpb3VzfGVufDF8fHx8MTc3NTI4NTc2NHww&ixlib=rb-4.1.0&q=80&w=1080'],
  },
  {
    id: 'cake-6',
    name: 'Lemon Tart',
    description: 'Zesty lemon filling in buttery shortcrust pastry',
    price: 32,
    category: 'Pastries',
    images: ['https://images.unsplash.com/photo-1759303380841-55c09244fd2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY2FrZSUyMHBhc3RyeXxlbnwxfHx8fDE3NzUyODU3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080'],
  },
  {
    id: 'cake-7',
    name: 'Vanilla Bean Cake',
    description: 'Light vanilla sponge with Madagascar vanilla buttercream',
    price: 45,
    category: 'Cakes',
    images: ['https://images.unsplash.com/photo-1584158531319-96912adae663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzc1Mjg1NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080'],
  },
  {
    id: 'cake-8',
    name: 'Croissants',
    description: 'Buttery, flaky French croissants baked fresh',
    price: 22,
    category: 'Pastries',
    images: ['https://images.unsplash.com/photo-1759303380841-55c09244fd2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY2FrZSUyMHBhc3RyeXxlbnwxfHx8fDE3NzUyODU3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080'],
  },
  {
    id: 'cake-9',
    name: 'Mini Cupcakes',
    description: 'Assorted mini cupcakes perfect for parties',
    price: 18,
    category: 'Cupcakes',
    images: ['https://images.unsplash.com/photo-1680580735621-4371027734eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc3NTI4NTc2NXww&ixlib=rb-4.1.0&q=80&w=1080'],
  },
  {
    id: 'cake-10',
    name: 'Carrot Cake',
    description: 'Moist carrot cake with cream cheese frosting and walnuts',
    price: 42,
    category: 'Cakes',
    images: ['https://images.unsplash.com/photo-1640794334523-b299f14d28db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwbHV4dXJpb3VzfGVufDF8fHx8MTc3NTI4NTc2NHww&ixlib=rb-4.1.0&q=80&w=1080'],
  },
  {
    id: 'cake-11',
    name: 'Macarons',
    description: 'French macarons in assorted flavors',
    price: 38,
    category: 'Pastries',
    images: ['https://images.unsplash.com/photo-1759303380841-55c09244fd2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY2FrZSUyMHBhc3RyeXxlbnwxfHx8fDE3NzUyODU3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080'],
  },
  {
    id: 'cake-12',
    name: 'Birthday Cupcakes',
    description: 'Decorated cupcakes for birthday celebrations',
    price: 32,
    category: 'Cupcakes',
    images: ['https://images.unsplash.com/photo-1680580735621-4371027734eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc3NTI4NTc2NXww&ixlib=rb-4.1.0&q=80&w=1080'],
  },
];

interface CakesOrderProps {
  onReturnHome?: () => void;
  onExploreMenu?: () => void;
}

export default function CakesOrder({ onReturnHome, onExploreMenu }: CakesOrderProps) {
  // FIXED: Removed the broken getCakesItems from here entirely
  const { cakesStep, setCakesStep, addItem, updateQuantity, eventDetails, setEventDetails, selectedItems: allSelectedItems } = useOrder();
  
  // FIXED: Restored the selectedItems variable using the data from the context!
  const selectedItems = allSelectedItems;

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      addItem(id, quantity, 'cakes');
    } else {
      updateQuantity(id, 0);
    }
  };

  const handleProceedToDetails = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setCakesStep(2), 300);
  };

  const handleProceedToReview = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setCakesStep(3), 300);
  };

  const handleSubmitOrder = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setCakesStep(4), 300);
    console.log('Cakes order submitted:', { selectedItems, eventDetails });
  };

  const handleBackToMenu = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setCakesStep(1), 300);
  };

  const handleBackToDetails = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setCakesStep(2), 300);
  };

  const handleReturnHome = () => {
    if (onReturnHome) {
      onReturnHome();
    }
  };

  const handleExploreMenu = () => {
    if (onExploreMenu) {
      onExploreMenu();
    }
  };

  const handleEnquiryClick = () => {
    const enquirySection = document.querySelector('[data-section="custom-enquiry"]');
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen pt-[52px] md:pt-[60px] bg-[#F9F7F4]">
      {/* Hero Section - Only shown on step 1 */}
      {cakesStep === 1 && <CakesHero />}

      {/* Progress Indicator - Hide on confirmation step */}
      {cakesStep < 4 && <ProgressIndicator currentStep={cakesStep} />}

      {/* Step Content */}
      {cakesStep === 1 && (
        <StepCakesMenu
          menuItems={cakesMenuItems}
          selectedItems={selectedItems}
          onQuantityChange={handleQuantityChange}
          onProceed={handleProceedToDetails}
        />
      )}

      {/* Cake Gallery with Custom Enquiry - Only shown on step 1 */}
      {cakesStep === 1 && <CakeGallery />}

      {/* Baking Classes - Only shown on step 1 */}
      {cakesStep === 1 && <BakingClasses />}
      
      {cakesStep === 2 && (
        <StepEventDetails
          eventDetails={eventDetails}
          onDetailsChange={setEventDetails}
          onBack={handleBackToMenu}
          onProceed={handleProceedToReview}
          hasCateringItems={Object.values(allSelectedItems).some(item => item.category === 'catering' && item.quantity > 0)}
          hasCakesItems={Object.values(allSelectedItems).some(item => item.category === 'cakes' && item.quantity > 0)}
        />
      )}

      {cakesStep === 3 && (
        <StepCakesReview
          menuItems={cakesMenuItems}
          selectedItems={selectedItems}
          eventDetails={eventDetails}
          onBack={handleBackToDetails}
          onSubmit={handleSubmitOrder}
        />
      )}

      {cakesStep === 4 && (
        <StepCakesConfirmation
          onReturnHome={handleReturnHome}
          onExploreMenu={handleExploreMenu}
        />
      )}

      {/* Footer - Hide on confirmation step */}
      {cakesStep < 4 && <Footer />}
    </div>
  );
}