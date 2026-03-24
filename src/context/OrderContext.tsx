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

interface OrderContextType {
  currentStep: number;
  selectedItems: Record<string, number>;
  eventDetails: EventDetails;
  setCurrentStep: (step: number) => void;
  setSelectedItems: (items: Record<string, number> | ((prev: Record<string, number>) => Record<string, number>)) => void;
  setEventDetails: (details: EventDetails) => void;
  resetOrder: () => void;
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
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({});
  const [eventDetails, setEventDetails] = useState<EventDetails>(initialEventDetails);

  const resetOrder = () => {
    setCurrentStep(1);
    setSelectedItems({});
    setEventDetails(initialEventDetails);
  };

  return (
    <OrderContext.Provider
      value={{
        currentStep,
        selectedItems,
        eventDetails,
        setCurrentStep,
        setSelectedItems,
        setEventDetails,
        resetOrder,
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