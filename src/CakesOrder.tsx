import { useOrder } from './context/OrderContext';
import { CakesHero } from './components/cakes/CakesHero';
import { CakeGallery } from './components/cakes/CakeGallery'; // ADDED BACK
import { BakingClasses } from './components/cakes/BakingClasses';
import { ProgressIndicator } from './components/cakes/ProgressIndicator';
import { StepCakesMenu } from './components/cakes/StepCakesMenu';
import { StepEventDetails } from './components/shared/StepEventDetails';
import { StepCakesReview } from './components/cakes/StepCakesReview';
import { StepCakesConfirmation } from './components/cakes/StepCakesConfirmation';
import { Footer } from './components/Footer';

// ---------------------------------------------------------
// IMAGE IMPORTS (CLEAN, SHORT NAMES - ALL .PNG)
// ---------------------------------------------------------

// Wedding Cakes (8 items)
import wcButterscotch from './assets/modern-butterscotch.png';
import wcClassic2Tier from './assets/classic-2-tier.png';
import wcLemonChoc from './assets/lemon-chocolate.png';
import wcMidnightBerry from './assets/midnight-berry.png';
import wcSingleLayer from './assets/single-layer.png';
import wcClassicSingle from './assets/classic-single.png';
import wcSummerFlowers from './assets/summer-flowers.png';
import wcChocMousse from './assets/chocolate-mousse-cake.png';

// Celebration Cakes (17 items)
import ccOrangeAlmond from './assets/orange-almond.png';
import ccCarrotCake from './assets/carrot-cake.png';
import ccCaramelFantasy from './assets/caramel-fantasy.png';
import ccBurnCake from './assets/burn-cake.png';
import ccChocStrawberry from './assets/chocolate-strawberry.png';
import ccClassicBlackForest from './assets/classic-black-forest.png';
import ccVanillaCake from './assets/vanilla-cake.png';
import ccHeartCake from './assets/heart-cake.png';
import ccModernBlackForest from './assets/modern-black-forest.png';
import ccChocCake from './assets/chocolate-cake.png';
import ccPistachioDelight from './assets/pistachio-delight.png';
import ccWaferpaperSails from './assets/waferpaper-sails.png';
import ccTwoTonedHeart from './assets/two-toned-heart.png';
import ccWaterColour from './assets/water-colour.png';
import ccHazelnutPraline from './assets/hazelnut-praline.png';
import ccChocGlaze from './assets/chocolate-glaze.png';
import ccTwoTierBirthday from './assets/two-tier-birthday.png';

// Cupcakes (5 items)
import cupGourmet from './assets/gourmet-cupcakes.png';
import cupRegular from './assets/regular-cupcakes.png';
import cupMini from './assets/mini-cupcakes.png';
import cupHydrangeas from './assets/floral-hydrangeas.png';
import cupRosette from './assets/floral-rosette.png';

export const cakesMenuItems = [
  // ---------------------------------------------------------
  // WEDDING CAKES (8 Items)
  // ---------------------------------------------------------
  {
    id: 'wc-3',
    name: '2 Tiered Wedding Cake - Lemon & Chocolate',
    description: 'Beautiful 2 tiered cake featuring lemon and chocolate.',
    price: 500.00,
    category: 'Wedding Cakes',
    images: [wcLemonChoc],
  },
  {
    id: 'wc-1',
    name: 'Modern Wedding Cake - Butterscotch',
    description: 'Elegant modern wedding cake in butterscotch.',
    price: 645.00,
    category: 'Wedding Cakes',
    images: [wcButterscotch],
  },
  {
    id: 'wc-2',
    name: 'Classic 2 Tier Wedding Cake',
    description: 'Vanilla with Baileys & Chocolate with Raspberries.',
    price: 500.00,
    category: 'Wedding Cakes',
    images: [wcClassic2Tier],
  },
  
  {
    id: 'wc-4',
    name: 'Midnight Berry Lux',
    description: 'Chocolate Cake with Blackberry Balsamic Mousse filling.',
    price: 280.00,
    category: 'Wedding Cakes',
    images: [wcMidnightBerry],
  },
  {
    id: 'wc-5',
    name: 'Single Layer Wedding Cake',
    description: 'Beautiful and elegant single layer wedding cake.',
    price: 250.00,
    category: 'Wedding Cakes',
    images: [wcSingleLayer],
  },
  {
    id: 'wc-6',
    name: 'Classic Single Layer Wedding Cake',
    description: 'Classic, timeless single layer wedding cake.',
    price: 250.00,
    category: 'Wedding Cakes',
    images: [wcClassicSingle],
  },
  {
    id: 'wc-7',
    name: 'Summer Flowers - Chocolate & Orange',
    description: 'Beautiful summer flower decor over chocolate & orange cake.',
    price: 250.00,
    category: 'Wedding Cakes',
    images: [wcSummerFlowers],
  },
  {
    id: 'wc-8',
    name: 'Chocolate Mousse Cake',
    description: 'Rich, airy, and decadent chocolate mousse cake.',
    price: 210.00,
    category: 'Wedding Cakes',
    images: [wcChocMousse],
  },

  // ---------------------------------------------------------
  // CELEBRATION CAKES (17 Items)
  // ---------------------------------------------------------
  {
    id: 'cc-1',
    name: 'Two Tiered Birthday Cake',
    description: 'Grand two-tiered celebration birthday cake.',
    price: 538.00,
    category: 'Celebration Cakes',
    images: [ccTwoTierBirthday],
  },
  {
    id: 'cc-2',
    name: 'Chocolate & Hazelnut Praline Mousse Cake',
    description: 'Luxurious chocolate and hazelnut praline mousse.',
    price: 280.00,
    category: 'Celebration Cakes',
    images: [ccHazelnutPraline],
  },
  {
    id: 'cc-3',
    name: 'Chocolate Cake with Chocolate Glaze',
    description: 'Rich chocolate cake coated in a mirror chocolate glaze.',
    price: 280.00,
    category: 'Celebration Cakes',
    images: [ccChocGlaze],
  },
  {
    id: 'cc-4',
    name: 'Modern Water Colour Effect',
    description: 'Artistic modern water colour effect cake.',
    price: 270.00,
    category: 'Celebration Cakes',
    images: [ccWaterColour],
  },
  {
    id: 'cc-5',
    name: 'Two Toned Heart',
    description: 'Stunning two-toned heart design celebration cake.',
    price: 265.00,
    category: 'Celebration Cakes',
    images: [ccTwoTonedHeart],
  },
  {
    id: 'cc-6',
    name: 'Modern Waferpaper Sails - Chocolate Decadence',
    description: 'Chocolate decadence with modern waferpaper sail decor.',
    price: 225.00,
    category: 'Celebration Cakes',
    images: [ccWaferpaperSails],
  },
  {
    id: 'cc-7',
    name: 'Chocolate Cake',
    description: 'Ultimate rich chocolate celebration cake.',
    price: 210.00,
    category: 'Celebration Cakes',
    images: [ccChocCake],
  },
  {
    id: 'cc-8',
    name: 'Pistachio Delight',
    description: 'Elegant pistachio flavored celebration cake.',
    price: 210.00,
    category: 'Celebration Cakes',
    images: [ccPistachioDelight],
  },
  {
    id: 'cc-9',
    name: 'Heart Cake',
    description: 'Beautiful heart-shaped celebration cake.',
    price: 190.00,
    category: 'Celebration Cakes',
    images: [ccHeartCake],
  },
  {
    id: 'cc-10',
    name: 'Modern Black Forest Cake',
    description: 'A modern twist on the classic black forest.',
    price: 190.00,
    category: 'Celebration Cakes',
    images: [ccModernBlackForest],
  },
  {
    id: 'cc-11',
    name: 'Burn Cake - Classic Vanilla',
    description: 'Trending classic vanilla burn cake.',
    price: 180.00,
    category: 'Celebration Cakes',
    images: [ccBurnCake],
  },
  {
    id: 'cc-12',
    name: 'Chocolate Strawberry Cake',
    description: 'Classic chocolate and fresh strawberry combination.',
    price: 180.00,
    category: 'Celebration Cakes',
    images: [ccChocStrawberry],
  },
  {
    id: 'cc-13',
    name: 'Classic Black Forest',
    description: 'Traditional black forest cake with cherries and cream.',
    price: 180.00,
    category: 'Celebration Cakes',
    images: [ccClassicBlackForest],
  },
  {
    id: 'cc-14',
    name: 'Vanilla Cake',
    description: 'Classic, moist vanilla celebration cake.',
    price: 180.00,
    category: 'Celebration Cakes',
    images: [ccVanillaCake],
  },
  {
    id: 'cc-15',
    name: 'Caramel Fantasy',
    description: 'Decadent caramel fantasy celebration cake.',
    price: 135.00,
    category: 'Celebration Cakes',
    images: [ccCaramelFantasy],
  },
  {
    id: 'cc-16',
    name: 'Carrot Cake',
    description: 'Carrot cake with rich cream cheese filling & icing.',
    price: 90.00,
    category: 'Celebration Cakes',
    images: [ccCarrotCake],
  },
  {
    id: 'cc-17',
    name: 'Gluten Free Orange & Almond Cake',
    description: 'Delicious and completely gluten-free orange and almond cake.',
    price: 80.00,
    category: 'Celebration Cakes',
    images: [ccOrangeAlmond],
  },

  // ---------------------------------------------------------
  // CUPCAKES (5 Items) - Priced per 6 cakes
  // ---------------------------------------------------------
  {
    id: 'cup-1',
    name: 'Gourmet Cupcakes',
    description: 'High-end gourmet cupcakes. (Priced per 6 cakes)',
    price: 45.70,
    category: 'Cupcakes',
    images: [cupGourmet],
  },
  {
    id: 'cup-2',
    name: 'Regular Cupcakes',
    description: 'Classic regular cupcakes. (Priced per 6 cakes)',
    price: 40.80,
    category: 'Cupcakes',
    images: [cupRegular],
  },
  {
    id: 'cup-3',
    name: 'Mini Cupcakes',
    description: 'Assorted mini cupcakes perfect for sharing. (Priced per 6 cakes)',
    price: 30.00,
    category: 'Cupcakes',
    images: [cupMini],
  },
  {
    id: 'cup-4',
    name: 'Gourmet Cupcake Floral - Hydrangeas',
    description: 'Beautiful hydrangea floral design. (Priced per 6 cakes)',
    price: 45.72,
    category: 'Cupcakes',
    images: [cupHydrangeas],
  },
  {
    id: 'cup-5',
    name: 'Gourmet Cupcake Floral - Rosette',
    description: 'Beautiful rosette floral design. (Priced per 6 cakes)',
    price: 45.72,
    category: 'Cupcakes',
    images: [cupRosette],
  },
];

interface CakesOrderProps {
  onReturnHome?: () => void;
  onExploreMenu?: () => void;
}

export default function CakesOrder({ onReturnHome, onExploreMenu }: CakesOrderProps) {
  const { cakesStep, setCakesStep, addItem, updateQuantity, eventDetails, setEventDetails, selectedItems: allSelectedItems } = useOrder();
  
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