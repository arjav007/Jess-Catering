import { createContext, useContext, useState, ReactNode } from 'react';

interface EventDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventType: string;
  guestCount: string;
  deliveryType: string;
  address: string;
  deliveryDate: string;
  paymentMethod: string;
  message: string;
}

interface CartItem {
  id: string;
  quantity: number;
  category: 'catering' | 'cakes';
}

interface OrderContextType {
  currentStep: number;
  cateringStep: number;
  cakesStep: number;
  selectedItems: Record<string, CartItem>;
  eventDetails: EventDetails;
  setCurrentStep: (step: number) => void;
  setCateringStep: (step: number) => void;
  setCakesStep: (step: number) => void;
  setSelectedItems: (items: Record<string, CartItem> | ((prev: Record<string, CartItem>) => Record<string, CartItem>)) => void;
  setEventDetails: (details: EventDetails) => void;
  addItem: (id: string, quantity: number, category: 'catering' | 'cakes') => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  getCateringItems: () => Record<string, number>;
  getCakesItems: () => Record<string, number>;
  resetOrder: () => void;
  resetSteps: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const initialEventDetails: EventDetails = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  eventType: '',
  guestCount: '',
  deliveryType: '',
  address: '',
  deliveryDate: '',
  paymentMethod: '',
  message: '',
};

export function OrderProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [cateringStep, setCateringStep] = useState(1);
  const [cakesStep, setCakesStep] = useState(1);
  const [selectedItems, setSelectedItems] = useState<Record<string, CartItem>>({});
  const [eventDetails, setEventDetails] = useState<EventDetails>(initialEventDetails);

  const addItem = (id: string, quantity: number, category: 'catering' | 'cakes') => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: { id, quantity: Math.max(0, quantity), category },
    }));
  };

  const removeItem = (id: string) => {
    setSelectedItems((prev) => {
      const newItems = { ...prev };
      delete newItems[id];
      return newItems;
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setSelectedItems((prev) => {
      if (quantity <= 0) {
        const newItems = { ...prev };
        delete newItems[id];
        return newItems;
      }
      return {
        ...prev,
        [id]: { ...prev[id], quantity: Math.max(0, quantity) },
      };
    });
  };

  const getCateringItems = (): Record<string, number> => {
    const cateringItems: Record<string, number> = {};
    Object.entries(selectedItems).forEach(([id, item]) => {
      if (item.category === 'catering') {
        cateringItems[id] = item.quantity;
      }
    });
    return cateringItems;
  };

  const getCakesItems = (): Record<string, number> => {
    const cakesItems: Record<string, number> = {};
    Object.entries(selectedItems).forEach(([id, item]) => {
      if (item.category === 'cakes') {
        cakesItems[id] = item.quantity;
      }
    });
    return cakesItems;
  };

  const resetOrder = () => {
    setCurrentStep(1);
    setCateringStep(1);
    setCakesStep(1);
    setSelectedItems({});
    setEventDetails(initialEventDetails);
  };

  const resetSteps = () => {
    setCurrentStep(1);
    setCateringStep(1);
    setCakesStep(1);
  };

  return (
    <OrderContext.Provider
      value={{
        currentStep,
        cateringStep,
        cakesStep,
        selectedItems,
        eventDetails,
        setCurrentStep,
        setCateringStep,
        setCakesStep,
        setSelectedItems,
        setEventDetails,
        addItem,
        removeItem,
        updateQuantity,
        getCateringItems,
        getCakesItems,
        resetOrder,
        resetSteps,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
}