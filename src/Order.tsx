import { OrderHero } from './components/order/OrderHero';
import { ProgressIndicator } from './components/order/ProgressIndicator';
import { StepSelectMenu } from './components/order/StepSelectMenu';
import { StepEventDetails } from './components/order/StepEventDetails';
import { StepReview } from './components/order/StepReview';
import { StepConfirmation } from './components/order/StepConfirmation';
import { Footer } from './components/Footer';
import { useOrder } from './context/OrderContext';

// Menu data for ordering
const menuItems = [
  {
    id: '1',
    name: 'Patra Ni Macchi',
    description: 'Steamed fish wrapped in banana leaves with green chutney',
    price: 25,
    category: 'Parsi Specialties',
    images: [
      'https://images.unsplash.com/photo-1661939252817-ebb73304f4c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwYXJzaSUyMGZpc2glMjBiYW5hbmElMjBsZWFmfGVufDF8fHx8MTc2MTIwNzQ2OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzYxMjAyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjExNDA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    isVeg: false,
  },
  {
    id: '2',
    name: 'Samosa Platter',
    description: 'Crispy samosas filled with spiced potatoes and peas',
    price: 18,
    category: 'Indian Snacks',
    images: [
      'https://images.unsplash.com/photo-1589301773859-bb024d3ad558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzYW1vc2ElMjBzbmFja3N8ZW58MXx8fHwxNzYxMjA3NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzYxMjAyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjExNDA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    isVeg: true,
  },
  {
    id: '3',
    name: 'Dhokla',
    description: 'Soft steamed cakes from fermented chickpea flour',
    price: 15,
    category: 'Indian Snacks',
    images: [
      'https://images.unsplash.com/photo-1714799263291-272975db795a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaG9rbGElMjBpbmRpYW4lMjBmb29kfGVufDF8fHx8MTc2MTIwNzQ3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1589301773859-bb024d3ad558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzYW1vc2ElMjBzbmFja3N8ZW58MXx8fHwxNzYxMjA3NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjExNDA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    isVeg: true,
  },
  {
    id: '4',
    name: 'Dhansak',
    description: 'Rich Parsi curry with lentils and meat in sweet-sour gravy',
    price: 28,
    category: 'Parsi Specialties',
    images: [
      'https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzYxMjAyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjExNDA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1661939252817-ebb73304f4c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwYXJzaSUyMGZpc2glMjBiYW5hbmElMjBsZWFmfGVufDF8fHx8MTc2MTIwNzQ2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    isVeg: false,
  },
  {
    id: '5',
    name: 'Biryani',
    description: 'Fragrant basmati rice with tender meat or vegetables',
    price: 22,
    category: 'Indian Snacks',
    images: [
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjExNDA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzYxMjAyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1589301773859-bb024d3ad558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzYW1vc2ElMjBzbmFja3N8ZW58MXx8fHwxNzYxMjA3NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    isVeg: false,
  },
  {
    id: '6',
    name: 'Sali Boti',
    description: 'Tender mutton in tangy curry with crispy potato sticks',
    price: 26,
    category: 'Parsi Specialties',
    images: [
      'https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzYxMjAyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1661939252817-ebb73304f4c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwYXJzaSUyMGZpc2glMjBiYW5hbmElMjBsZWFmfGVufDF8fHx8MTc2MTIwNzQ2OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjExNDA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    isVeg: false,
  },
  {
    id: '7',
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese marinated in aromatic spices',
    price: 20,
    category: 'Indian Snacks',
    images: [
      'https://images.unsplash.com/photo-1662101875545-0b0cb8b7795b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwcGxhdGluZ3xlbnwxfHx8fDE3NjEyMjU1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzYxMjAyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjExNDA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    isVeg: true,
  },
  {
    id: '8',
    name: 'Chicken Pasta',
    description: 'Creamy pasta with grilled chicken and herbs',
    price: 24,
    category: 'Continental',
    images: [
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2h8ZW58MXx8fHwxNzYxMjI1NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzYxMjAyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjExNDA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    isVeg: false,
  },
  {
    id: '9',
    name: 'Chocolate Truffles',
    description: 'Handcrafted Belgian chocolate truffles',
    price: 35,
    category: 'Desserts',
    images: [
      'https://images.unsplash.com/photo-1580916782504-3c4ac5200924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaG9jb2xhdGUlMjB0cnVmZmxlcyUyMG1hcmJsZXxlbnwxfHx8fDE3NjEyMDc0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2h8ZW58MXx8fHwxNzYxMjI1NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjExNDA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    isVeg: true,
  },
  {
    id: '10',
    name: 'Gulab Jamun',
    description: 'Soft milk-solid dumplings in rose-flavored syrup',
    price: 12,
    category: 'Desserts',
    images: [
      'https://images.unsplash.com/photo-1589301773859-bb024d3ad558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzYW1vc2ElMjBzbmFja3N8ZW58MXx8fHwxNzYxMjA3NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzYxMjAyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjExNDA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    isVeg: true,
  },
];

interface OrderProps {
  onReturnHome?: () => void;
  onExploreMenu?: () => void;
}

export default function Order({ onReturnHome, onExploreMenu }: OrderProps) {
  const { currentStep, selectedItems, eventDetails, setCurrentStep, setSelectedItems, setEventDetails } = useOrder();

  const handleQuantityChange = (id: string, quantity: number) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: Math.max(0, quantity),
    }));
  };

  const handleProceedToDetails = () => {
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setCurrentStep(2), 300);
  };

  const handleProceedToReview = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setCurrentStep(3), 300);
  };

  const handleSubmitOrder = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setCurrentStep(4), 300);
    // Here you would typically send the order to your backend
    console.log('Order submitted:', { selectedItems, eventDetails });
  };

  const handleBackToMenu = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setCurrentStep(1), 300);
  };

  const handleBackToDetails = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setCurrentStep(2), 300);
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

  return (
    <div className="min-h-screen pt-[52px] md:pt-[60px] bg-[#F9F7F4]">
      {/* Hero Section - Only shown on step 1 */}
      {currentStep === 1 && <OrderHero />}

      {/* Progress Indicator - Hide on confirmation step */}
      {currentStep < 4 && <ProgressIndicator currentStep={currentStep} />}

      {/* Step Content */}
      {currentStep === 1 && (
        <StepSelectMenu
          menuItems={menuItems}
          selectedItems={selectedItems}
          onQuantityChange={handleQuantityChange}
          onProceed={handleProceedToDetails}
        />
      )}

      {currentStep === 2 && (
        <StepEventDetails
          eventDetails={eventDetails}
          onDetailsChange={setEventDetails}
          onProceed={handleProceedToReview}
          onBack={handleBackToMenu}
        />
      )}

      {currentStep === 3 && (
        <StepReview
          menuItems={menuItems}
          selectedItems={selectedItems}
          eventDetails={eventDetails}
          onQuantityChange={handleQuantityChange}
          onProceed={handleSubmitOrder}
          onBack={handleBackToDetails}
        />
      )}

      {currentStep === 4 && (
        <StepConfirmation
          onReturnHome={handleReturnHome}
          onExploreMenu={handleExploreMenu}
        />
      )}

      {/* Footer - Hide on confirmation step */}
      {currentStep < 4 && <Footer />}
    </div>
  );
}