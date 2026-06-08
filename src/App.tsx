import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { OrderProvider } from './context/OrderContext';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Order from './Order';
import Cakes from './CakesOrder'; 
import { StepConfirmation } from './components/order/StepConfirmation'; 

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'menu' | 'about' | 'contact' | 'order' | 'success' | 'cakes'>('home');

  // Listen for the Footer navigation events globally
  useEffect(() => {
    const handleCustomNavigation = (e: any) => {
      if (e.detail) {
        setCurrentPage(e.detail);
      }
    };
    
    window.addEventListener('navigatePage', handleCustomNavigation);
    return () => window.removeEventListener('navigatePage', handleCustomNavigation);
  }, []);

  // Intercept the Merchant Warrior redirect when the app loads
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentStatus = urlParams.get('status');

    if (paymentStatus === 'approved') {
      setCurrentPage('success');
      window.history.replaceState({}, document.title, window.location.pathname);
      
    } else if (paymentStatus && paymentStatus !== 'approved') {
      alert("Payment was declined or cancelled. Please try again.");
      window.history.replaceState({}, document.title, window.location.pathname);
      setCurrentPage('order'); 
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

        {currentPage === 'cakes' && (
          <Cakes 
            onReturnHome={() => setCurrentPage('home')}
            onExploreMenu={() => setCurrentPage('menu')}
          />
        )}

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