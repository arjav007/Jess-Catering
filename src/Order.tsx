import { OrderHero } from './components/order/OrderHero';
import { ProgressIndicator } from './components/order/ProgressIndicator';
import { StepSelectMenu } from './components/order/StepSelectMenu';
import { StepEventDetails } from './components/shared/StepEventDetails';
import { StepReview } from './components/order/StepReview';
import { StepConfirmation } from './components/order/StepConfirmation';
import { Footer } from './components/Footer';
import { useOrder } from './context/OrderContext';

// Menu data for ordering
// Complete, fully-formatted menu data
export const menuItems = [
  // ---------------------------------------------------------
  // APPETISERS ($16.50)
  // ---------------------------------------------------------
  {
    id: 'app-1',
    name: 'Choice of Crostini (mini toast)',
    description: 'Choice of: Chicken, tuna, prawn cocktail, smoked salmon. V, VG, GF option available',
    price: 16.50,
    category: 'Appetisers',
    images: [
      'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'app-2',
    name: 'Sausage Rolls',
    description: 'Gourmet Chicken or Beef Sausage rolls',
    price: 16.50,
    category: 'Appetisers',
    images: [
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'app-3',
    name: 'BBQ Chicken Lolipop',
    description: 'Chicken Drummettes marinated in a homemade BBQ Sauce',
    price: 16.50,
    category: 'Appetisers',
    images: [
      'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1608039755401-742077f0d508?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'app-4',
    name: 'Prawn Cocktail',
    description: 'Juicy prawns in a homemade cocktail sauce',
    price: 16.50,
    category: 'Appetisers',
    images: [
      'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'app-5',
    name: 'Sliders',
    description: 'Fried Chicken, Pulled Beef, Pork or Chicken. V, VG, GF options available',
    price: 16.50,
    category: 'Appetisers',
    images: [
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'app-6',
    name: 'Tandoori Paneer skewers (VG)',
    description: 'Paneer skewers in a tandoori marinade',
    price: 16.50,
    category: 'Appetisers',
    images: [
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1599487405702-3e58ffa18108?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: true,
  },
  {
    id: 'app-7',
    name: 'Cajun Spiced Soft Tacos',
    description: 'Choice of Pulled Pork, Beef, Chicken, Fish. V, VG, GF options available',
    price: 16.50,
    category: 'Appetisers',
    images: [
      'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'app-8',
    name: 'Croquettes',
    description: 'Choice of Chicken, Beef, cheese, corn. V, VG, GF options available',
    price: 16.50,
    category: 'Appetisers',
    images: [
      'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'app-9',
    name: 'Teriyaki Chicken',
    description: 'Chicken ribs sauted in a teriyaki sauce',
    price: 16.50,
    category: 'Appetisers',
    images: [
      'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'app-10',
    name: 'Crispy Fried Prawns',
    description: 'Crispy fried prawns with a spicy dipping sauce',
    price: 16.50,
    category: 'Appetisers',
    images: [
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'app-11',
    name: 'Corn Fritters (VG)',
    description: 'Crispy fried corn fritters. V, GF option available',
    price: 16.50,
    category: 'Appetisers',
    images: [
      'https://images.unsplash.com/photo-1625938144755-652e08e359b7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: true,
  },
  {
    id: 'app-12',
    name: 'Beef Teriyaki',
    description: 'Beef pieces sauted in Teriyaki Sauce with a spicy sauce',
    price: 16.50,
    category: 'Appetisers',
    images: [
      'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'app-13',
    name: 'Meatballs in sauce',
    description: 'Classic Meatballs in a slightly spicy tomato sauce',
    price: 16.50,
    category: 'Appetisers',
    images: [
      'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1515516969-d4008cc6241a?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'app-14',
    name: 'Stuffed Mushroom (VG)',
    description: 'Choice of Wildrice or tomato and fetta. V, GF options available',
    price: 16.50,
    category: 'Appetisers',
    images: [
      'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: true,
  },
  {
    id: 'app-15',
    name: 'Broccoli /Cauliflower Fritters',
    description: 'Crispy Broccoli Fritters with garlic aioli sauce',
    price: 16.50,
    category: 'Appetisers',
    images: [
      'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: true,
  },
  {
    id: 'app-16',
    name: 'Zucchini & Corn Fritters (VG)',
    description: 'Crispy fried zucchini & corn fritters. V, GF option available',
    price: 16.50,
    category: 'Appetisers',
    images: [
      'https://images.unsplash.com/photo-1625938144755-652e08e359b7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: true,
  },

  // ---------------------------------------------------------
  // MAINS - PICK ME UPS ($8.97)
  // ---------------------------------------------------------
  {
    id: 'main-1',
    name: 'Assorted Sandwiches',
    description: 'Choice of Chicken, smoked beef, smoked salmon, tuna, ham or salami. V, VG, GF options available',
    price: 8.97,
    category: 'Mains',
    images: [
      'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1553909489-cd47cebebea8?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'main-2',
    name: 'Assorted Bagels',
    description: 'Choice of Chicken, tuna, smoked Salmon. V, VG, GF options available',
    price: 8.97,
    category: 'Mains',
    images: [
      'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1627308595229-7830f5c928b1?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'main-3',
    name: 'Assorted Wraps',
    description: 'Choice of Chicken, smoked beef, smoked salmon, tuna, ham or salami. V, VG, GF options available',
    price: 8.97,
    category: 'Mains',
    images: [
      'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'main-4',
    name: 'Assorted Parathas',
    description: 'Choice of Potato, Cheese Chilli garlic, plain',
    price: 8.97,
    category: 'Mains',
    images: [
      'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: true,
  },
  {
    id: 'main-5',
    name: 'Assorted Salads',
    description: 'Choice of Garden, Greek, Rocket and Almond, Coleslaw, Asian Slaw. Choice of meat can be added.',
    price: 8.97,
    category: 'Mains',
    images: [
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: true,
  },
  {
    id: 'main-6',
    name: 'Samosa',
    description: 'Choice of Chicken, Beef, potato',
    price: 8.97,
    category: 'Mains',
    images: [
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1589301773859-bb024d3ad558?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },

  // ---------------------------------------------------------
  // HOT MAINS ($32.00)
  // ---------------------------------------------------------
  {
    id: 'hot-1',
    name: 'Coconut Curry',
    description: 'Choice of Chicken, Beef, Pork, Prawns. V, VG, GF options available',
    price: 32.00,
    category: 'Hot Mains',
    images: [
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'hot-2',
    name: 'Grilled Chicken',
    description: 'Grilled chicken in choice of sauces',
    price: 32.00,
    category: 'Hot Mains',
    images: [
      'https://images.unsplash.com/photo-1598515318256-8b252814b17b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'hot-3',
    name: 'Paneer Methi Mattar (VG)',
    description: 'Paneer (cottage cheese), mattar (peas) in a creamy methi (fenugreek) sauce',
    price: 32.00,
    category: 'Hot Mains',
    images: [
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: true,
  },
  {
    id: 'hot-4',
    name: 'Roast Chicken',
    description: 'Ask for choice of basting and stuffing flavours',
    price: 32.00,
    category: 'Hot Mains',
    images: [
      'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'hot-5',
    name: 'Shahi Korma',
    description: 'Choice of Chicken, or Beef in spicy creamy chashew sauce',
    price: 32.00,
    category: 'Hot Mains',
    images: [
      'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'hot-6',
    name: 'Paneer Butter Masala (VG)',
    description: 'Char grilled paneer (cottage cheese) in a spicy creamy tomato sauce',
    price: 32.00,
    category: 'Hot Mains',
    images: [
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: true,
  },
  {
    id: 'hot-7',
    name: 'Morrocan Lamb Cutlets',
    description: 'Grilled Lamb cutlets marinated in a minty morracan spice mix.',
    price: 32.00,
    category: 'Hot Mains',
    images: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'hot-8',
    name: 'Butter Chicken',
    description: 'Classic chargrilled chicken in a spicy, creamy tomato sauce',
    price: 32.00,
    category: 'Hot Mains',
    images: [
      'https://images.unsplash.com/photo-1603894584373-5ac82b6ae398?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: false,
  },
  {
    id: 'hot-9',
    name: 'Rice (included in price)',
    description: 'Choice of plain, saffon or veg pulao',
    price: 0.00,
    category: 'Hot Mains',
    images: [
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1539755530862-00f623c00f52?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: true,
  },

  // ---------------------------------------------------------
  // DESSERTS ($9.98)
  // ---------------------------------------------------------
  {
    id: 'des-1',
    name: 'Rasmalai Mousse',
    description: 'V, VG, GF options available',
    price: 9.98,
    category: 'Desserts',
    images: [
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: true,
  },
  {
    id: 'des-2',
    name: 'Classic Tiramisu',
    description: 'V, VG, GF options available',
    price: 9.98,
    category: 'Desserts',
    images: [
      'https://images.unsplash.com/photo-1571115177098-24ea148dea07?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: true,
  },
  {
    id: 'des-3',
    name: 'Chocolatae Mousse',
    description: 'V, VG, GF option available',
    price: 9.98,
    category: 'Desserts',
    images: [
      'https://images.unsplash.com/photo-1511381939415-e1652359fae5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: true,
  },
  {
    id: 'des-4',
    name: 'Chocolate Brownies',
    description: 'Rich decadent brownies with ice-cream. V, VG, GF options available',
    price: 9.98,
    category: 'Desserts',
    images: [
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: true,
  },
  {
    id: 'des-5',
    name: 'Panna Cotta (ask for flavour choice)',
    description: 'V, VG, GF options available',
    price: 9.98,
    category: 'Desserts',
    images: [
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: true,
  },
  {
    id: 'des-6',
    name: 'Liqueur Chocolates',
    description: 'Dark chocolate shells with variety of liqueur infused chocolate ganaches. Ask for non Alcholal if needed.',
    price: 9.98,
    category: 'Desserts',
    images: [
      'https://images.unsplash.com/photo-1548741361-26ec0dd1136b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542843137-87f188fl8c0e?auto=format&fit=crop&q=80&w=800'
    ],
    isVeg: true,
  }
];

interface OrderProps {
  onReturnHome?: () => void;
  onExploreMenu?: () => void;
}

export default function Order({ onReturnHome, onExploreMenu }: OrderProps) {
  // FIXED: Swapped out the old 'setSelectedItems' for our new global cart commands!
  const { 
    currentStep, 
    setCurrentStep, 
    eventDetails, 
    setEventDetails, 
    addItem, 
    updateQuantity, 
    selectedItems: allSelectedItems 
  } = useOrder();

  // FIXED: Safely grab the cart items from the global context
  const selectedItems = allSelectedItems || {};

  // FIXED: Upgraded this function to use the global cart and tag items as 'catering'
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