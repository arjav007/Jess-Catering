import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { OrderProvider } from './context/OrderContext';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Order from './Order';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'menu' | 'about' | 'contact' | 'order'>('home');

  return (
    <OrderProvider>
      <div className="min-h-screen bg-[#F9F7F4]">
        {/* Navigation */}
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />

        {/* Page Content */}
        {currentPage === 'home' && <Home onPageChange={setCurrentPage} />}
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
      </div>
    </OrderProvider>
  );
}