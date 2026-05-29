import { OrderHero } from './components/order/OrderHero';
import { ProgressIndicator } from './components/order/ProgressIndicator';
import { StepSelectMenu } from './components/order/StepSelectMenu';
import { StepEventDetails } from './components/shared/StepEventDetails';
import { StepReview } from './components/order/StepReview';
import { StepConfirmation } from './components/order/StepConfirmation';
import { Footer } from './components/Footer';
import { useOrder } from './context/OrderContext';

// ---------------------------------------------------------
// IMAGE IMPORTS
// UPDATE THE FILENAMES IN QUOTES TO MATCH YOUR EXACT FILES IN THE ASSETS FOLDER
// ---------------------------------------------------------
import crostiniImg from './assets/crostini.png';
import sausageRollsImg from './assets/sausage-rolls.png';
import bbqChickenLollipopImg from './assets/bbq-chicken-lollipop.png';
import prawnCocktailImg from './assets/prawn-cocktail.png';
import slidersImg from './assets/sliders.png';
import tandooriPaneerImg from './assets/tandoori-paneer.png';
import cajunTacosImg from './assets/cajun-tacos.png';
import croquettesImg from './assets/croquettes.png';
import teriyakiChickenAppImg from './assets/teriyaki-chicken.png';
import crispyFriedPrawnsImg from './assets/crispy-fried-prawns.png';
import cornFrittersImg from './assets/corn-fritters.png';
import beefTeriyakiImg from './assets/beef-teriyaki.png';
import meatballsImg from './assets/meatballs.png';
import stuffedMushroomImg from './assets/stuffed-mushroom.png';
import broccoliFrittersImg from './assets/broccoli-fritters.png';
import zucchiniFrittersImg from './assets/zucchini-fritters.png';

import sandwichesImg from './assets/sandwiches.png';
import bagelsImg from './assets/bagels.png';
import wrapsImg from './assets/wraps.png';
import parathasImg from './assets/parathas.png';
import saladsImg from './assets/salads.png';
import samosaImg from './assets/samosa.png';

import coconutCurryImg from './assets/coconut-curry.png';
import grilledChickenImg from './assets/grilled-chicken.png';
import paneerMethiMattarImg from './assets/paneer-methi-mattar.png';
import roastChickenImg from './assets/Roast Chicken.png';
import shahiKormaImg from './assets/shahi-korma.png';
import paneerButterMasalaImg from './assets/paneer-butter-masala.png';
import moroccanLambImg from './assets/Moroccan lamb.png';
import butterChickenImg from './assets/butter-chicken.png';
import riceImg from './assets/rice.png';

import rasmalaiMousseImg from './assets/rasmalai-mousse.png';
import tiramisuImg from './assets/tiramisu.png';
import chocolateMousseImg from './assets/chocolate-mousse.png';
import browniesImg from './assets/brownies.png';
import pannaCottaImg from './assets/panna-cotta.png';
import liqueurChocolatesImg from './assets/liqueur-chocolates.png';

// Menu data for ordering
// Complete, fully-formatted menu data
export const menuItems = [
  
  // ---------------------------------------------------------
  // PACKAGES / 3-COURSE MEALS 
  // ---------------------------------------------------------
  {
    id: 'pkg-1',
    name: '3 Course Meal - Standard',
    description: '3 Entrées, 2 Hot Mains OR 3 Pick Me Ups, and 1 Dessert. (Priced per person)',
    price: 65.00,
    category: 'Packages',
    // Updated to a beautiful top-down spread showing multiple dishes together
    images: ['https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800'],
    isVeg: false,
  },
  {
    id: 'pkg-2',
    name: '3 Course Meal - Premium',
    description: '3 Entrées, 2 Hot Mains OR 3 Pick Me Ups, and 2 Desserts. (Priced per person)',
    price: 85.00,
    category: 'Packages',
    // Updated to a luxurious, large dining spread with multiple courses visible
    images: ['https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800'],
    isVeg: false,
  },
  // ---------------------------------------------------------
  // APPETISERS ($16.50)
  // ---------------------------------------------------------
  {
    id: 'app-1',
    name: 'Choice of Crostini (mini toast)',
    description: 'Choice of: Chicken, tuna, prawn cocktail, smoked salmon. V, VG, GF option available',
    price: 3.0,
    category: 'Appetisers',
    images: [crostiniImg],
    isVeg: false,
  },
  {
    id: 'app-2',
    name: 'Sausage Rolls',
    description: 'Gourmet Chicken or Beef Sausage rolls',
    price: 3.50,
    category: 'Appetisers',
    images: [sausageRollsImg],
    isVeg: false,
  },
  {
    id: 'app-3',
    name: 'BBQ Chicken Lolipop',
    description: 'Chicken Drummettes marinated in a homemade BBQ Sauce',
    price: 5,
    category: 'Appetisers',
    images: [bbqChickenLollipopImg],
    isVeg: false,
  },
  {
    id: 'app-4',
    name: 'Prawn Cocktail',
    description: 'Juicy prawns in a homemade cocktail sauce',
    price: 6.50,
    category: 'Appetisers',
    images: [prawnCocktailImg],
    isVeg: false,
  },
  {
    id: 'app-5',
    name: 'Sliders',
    description: 'Fried Chicken, Pulled Beef, Pork or Chicken. V, VG, GF options available',
    price: 16.50,
    category: 'Appetisers',
    images: [slidersImg],
    isVeg: false,
  },
  {
    id: 'app-6',
    name: 'Tandoori Paneer skewers (VG)',
    description: 'Paneer skewers in a tandoori marinade',
    price: 16.50,
    category: 'Appetisers',
    images: [tandooriPaneerImg],
    isVeg: true,
  },
  {
    id: 'app-7',
    name: 'Cajun Spiced Soft Tacos',
    description: 'Choice of Pulled Pork, Beef, Chicken, Fish. V, VG, GF options available',
    price: 5,
    category: 'Appetisers',
    images: [cajunTacosImg],
    isVeg: false,
  },
  {
    id: 'app-8',
    name: 'Croquettes',
    description: 'Choice of Chicken, Beef, cheese, corn. V, VG, GF options available',
    price: 3,
    category: 'Appetisers',
    images: [croquettesImg],
    isVeg: false,
  },
  {
    id: 'app-9',
    name: 'Teriyaki Chicken',
    description: 'Chicken ribs sauted in a teriyaki sauce',
    price: 5,
    category: 'Appetisers',
    images: [teriyakiChickenAppImg],
    isVeg: false,
  },
  {
    id: 'app-10',
    name: 'Crispy Fried Prawns',
    description: 'Crispy fried prawns with a spicy dipping sauce',
    price: 3.5,
    category: 'Appetisers',
    images: [crispyFriedPrawnsImg],
    isVeg: false,
  },
  {
    id: 'app-11',
    name: 'Corn Fritters (VG)',
    description: 'Crispy fried corn fritters. V, GF option available',
    price: 2.50,
    category: 'Appetisers',
    images: [cornFrittersImg],
    isVeg: true,
  },
  {
    id: 'app-12',
    name: 'Beef Teriyaki',
    description: 'Beef pieces sauted in Teriyaki Sauce with a spicy sauce',
    price: 5,
    category: 'Appetisers',
    images: [beefTeriyakiImg],
    isVeg: false,
  },
  {
    id: 'app-13',
    name: 'Meatballs in sauce',
    description: 'Classic Meatballs in a slightly spicy tomato sauce',
    price: 3.50,
    category: 'Appetisers',
    images: [meatballsImg],
    isVeg: false,
  },
  {
    id: 'app-14',
    name: 'Stuffed Mushroom (VG)',
    description: 'Choice of Wildrice or tomato and fetta. V, GF options available',
    price: 2.50,
    category: 'Appetisers',
    images: [stuffedMushroomImg],
    isVeg: true,
  },
  {
    id: 'app-15',
    name: 'Broccoli /Cauliflower Fritters',
    description: 'Crispy Broccoli Fritters with garlic aioli sauce',
    price: 3.50,
    category: 'Appetisers',
    images: [broccoliFrittersImg],
    isVeg: true,
  },
  {
    id: 'app-16',
    name: 'Zucchini & Corn Fritters (VG)',
    description: 'Crispy fried zucchini & corn fritters. V, GF option available',
    price: 3.50,
    category: 'Appetisers',
    images: [zucchiniFrittersImg],
    isVeg: true,
  },

  // ---------------------------------------------------------
  // MAINS - PICK ME UPS ($8.97)
  // ---------------------------------------------------------
  {
    id: 'main-1',
    name: 'Assorted Sandwiches',
    description: 'Choice of Chicken, smoked beef, smoked salmon, tuna, ham or salami. V, VG, GF options available',
    price: 2.5,
    category: 'Mains',
    images: [sandwichesImg],
    isVeg: false,
  },
  {
    id: 'main-2',
    name: 'Assorted Bagels',
    description: 'Choice of Chicken, tuna, smoked Salmon. V, VG, GF options available',
    price: 3,
    category: 'Mains',
    images: [bagelsImg],
    isVeg: false,
  },
  {
    id: 'main-3',
    name: 'Assorted Wraps',
    description: 'Choice of Chicken, smoked beef, smoked salmon, tuna, ham or salami. V, VG, GF options available',
    price: 2.5,
    category: 'Mains',
    images: [wrapsImg],
    isVeg: false,
  },
  {
    id: 'main-4',
    name: 'Assorted Parathas',
    description: 'Choice of Potato, Cheese Chilli garlic, plain',
    price: 5,
    category: 'Mains',
    images: [parathasImg],
    isVeg: true,
  },
  {
    id: 'main-5',
    name: 'Assorted Salads',
    description: 'Choice of Garden, Greek, Rocket and Almond, Coleslaw, Asian Slaw. Choice of meat can be added.',
    price: 10,
    category: 'Mains',
    images: [saladsImg],
    isVeg: true,
  },
  {
    id: 'main-6',
    name: 'Samosa',
    description: 'Choice of Chicken, Beef, potato',
    price: 5,
    category: 'Mains',
    images: [samosaImg],
    isVeg: false,
  },

  // ---------------------------------------------------------
  // HOT MAINS ($32.00)
  // ---------------------------------------------------------
  {
    id: 'hot-1',
    name: 'Coconut Curry',
    description: 'Choice of Chicken, Beef, Pork, Prawns. V, VG, GF options available',
    price: 12.00,
    category: 'Hot Mains',
    images: [coconutCurryImg],
    isVeg: false,
  },
  {
    id: 'hot-2',
    name: 'Grilled Chicken',
    description: 'Grilled chicken in choice of sauces',
    price: 8.00,
    category: 'Hot Mains',
    images: [grilledChickenImg],
    isVeg: false,
  },
  {
    id: 'hot-3',
    name: 'Paneer Methi Mattar (VG)',
    description: 'Paneer (cottage cheese), mattar (peas) in a creamy methi (fenugreek) sauce',
    price: 12.00,
    category: 'Hot Mains',
    images: [paneerMethiMattarImg],
    isVeg: true,
  },
  {
    id: 'hot-4',
    name: 'Roast Chicken',
    description: 'Ask for choice of basting and stuffing flavours',
    price: 15.00,
    category: 'Hot Mains',
    images: [roastChickenImg],
    isVeg: false,
  },
  {
    id: 'hot-5',
    name: 'Shahi Korma',
    description: 'Choice of Chicken, or Beef in spicy creamy chashew sauce',
    price: 12.00,
    category: 'Hot Mains',
    images: [shahiKormaImg],
    isVeg: false,
  },
  {
    id: 'hot-6',
    name: 'Paneer Butter Masala (VG)',
    description: 'Char grilled paneer (cottage cheese) in a spicy creamy tomato sauce',
    price: 12.00,
    category: 'Hot Mains',
    images: [paneerButterMasalaImg],
    isVeg: true,
  },
  {
    id: 'hot-7',
    name: 'Moroccan Lamb Cutlets',
    description: 'Grilled lamb cutlets marinated in a minty Moroccan spice mix.',
    price: 15.00,
    category: 'Hot Mains',
    images: [moroccanLambImg],
    isVeg: false,
  },
  {
    id: 'hot-8',
    name: 'Butter Chicken',
    description: 'Classic chargrilled chicken in a spicy, creamy tomato sauce',
    price: 15.00,
    category: 'Hot Mains',
    images: [butterChickenImg],
    isVeg: false,
  },
  {
    id: 'hot-9',
    name: 'Rice (included in price)',
    description: 'Choice of plain, saffon or veg pulao',
    price: 5.00,
    category: 'Hot Mains',
    images: [riceImg],
    isVeg: true,
  },

  // ---------------------------------------------------------
  // DESSERTS ($9.98)
  // ---------------------------------------------------------
  {
    id: 'des-1',
    name: 'Rasmalai Mousse',
    description: 'V, VG, GF options available',
    price: 5.5,
    category: 'Desserts',
    images: [rasmalaiMousseImg],
    isVeg: true,
  },
  {
    id: 'des-2',
    name: 'Classic Tiramisu',
    description: 'V, VG, GF options available',
    price: 8,
    category: 'Desserts',
    images: [tiramisuImg],
    isVeg: true,
  },
  {
    id: 'des-3',
    name: 'Chocolatae Mousse',
    description: 'V, VG, GF option available',
    price: 8,
    category: 'Desserts',
    images: [chocolateMousseImg],
    isVeg: true,
  },
  {
    id: 'des-4',
    name: 'Chocolate Brownies',
    description: 'Rich decadent brownies with ice-cream. V, VG, GF options available',
    price: 5.5,
    category: 'Desserts',
    images: [browniesImg],
    isVeg: true,
  },
  {
    id: 'des-5',
    name: 'Panna Cotta (ask for flavour choice)',
    description: 'V, VG, GF options available',
    price: 8,
    category: 'Desserts',
    images: [pannaCottaImg],
    isVeg: true,
  },
  {
    id: 'des-6',
    name: 'Liqueur Chocolates',
    description: 'Dark chocolate shells with variety of liqueur infused chocolate ganaches. Ask for non Alcholal if needed.',
    price: 9.98,
    category: 'Desserts',
    images: [liqueurChocolatesImg], // Or whatever variable you use
    isVeg: true,
    externalUrl: 'https://www.cocodevenci.com', // <--- Add this line!
  }
];

interface OrderProps {
  onReturnHome?: () => void;
  onExploreMenu?: () => void;
}

export default function Order({ onReturnHome, onExploreMenu }: OrderProps) {
  const { 
    currentStep, 
    setCurrentStep, 
    eventDetails, 
    setEventDetails, 
    addItem, 
    updateQuantity, 
    selectedItems: allSelectedItems 
  } = useOrder();

  const selectedItems = allSelectedItems || {};

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      addItem(id, quantity, 'catering');
    } else {
      updateQuantity(id, 0);
    }
  };

  const handleProceedToDetails = () => {
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProceedToReview = () => {
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitOrder = () => {
    setCurrentStep(4);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('Order submitted:', { selectedItems, eventDetails });
  };

  const handleBackToMenu = () => {
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDetails = () => {
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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