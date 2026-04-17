import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { OrderProvider } from './context/OrderContext';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Order from './Order';
import Cakes from './CakesOrder'; // <-- 1. Imported the new Cakes page
import { StepConfirmation } from './components/order/StepConfirmation'; 

export default function App() {
  // 2. Added 'cakes' to the allowed pages here
  const [currentPage, setCurrentPage] = useState<'home' | 'menu' | 'about' | 'contact' | 'order' | 'success' | 'cakes'>('home');

  // Intercept the Merchant Warrior redirect when the app loads
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Check for the NEW variable Merchant Warrior sends back
    const paymentStatus = urlParams.get('status');

    if (paymentStatus === 'approved') {
      // Payment Approved! Show YOUR success screen
      setCurrentPage('success');
      // Clean the ugly Merchant Warrior data out of the URL bar
      window.history.replaceState({}, document.title, window.location.pathname);
      
    } else if (paymentStatus && paymentStatus !== 'approved') {
      // Payment Failed or Cancelled (e.g., status=declined)
      alert("Payment was declined or cancelled. Please try again.");
      window.history.replaceState({}, document.title, window.location.pathname);
      setCurrentPage('order'); // Send them back to the order page to try again
    }
  }, []);

  return (
    <OrderProvider>
      <div className="min-h-screen bg-[#F9F7F4]">
        {/* Navigation */}
        <Navigation currentPage={currentPage as any} onPageChange={(page: any) => setCurrentPage(page)} />

        {/* Page Content */}
        {currentPage === 'home' && <Home onPageChange={(page: any) => setCurrentPage(page)} />}
        
        {currentPage === 'menu' && (
          <Menu 
            onContactClick={() => setCurrentPage('contact')} 
            onOrderClick={() => setCurrentPage('order')}
          />
        )}
        
        {currentPage === 'about' && <About onContactClick={() => setCurrentPage('contact')} />}
        
        {currentPage === 'contact' && <Contact onViewMenu={() => setCurrentPage('menu')} />}
        
        {currentPage === 'order' && (
          <Order
            onReturnHome={() => setCurrentPage('home')}
            onExploreMenu={() => setCurrentPage('menu')}
          />
        )}

        {/* 3. The New Cakes Page Render Block */}
        {currentPage === 'cakes' && (
          <Cakes onPageChange={(page: any) => setCurrentPage(page)} />
        )}

        {/* Render YOUR animated component here! */}
        {currentPage === 'success' && (
          <StepConfirmation
            onReturnHome={() => setCurrentPage('home')}
            onExploreMenu={() => setCurrentPage('menu')}
          />
        )}
      </div>
    </OrderProvider>
  );
}