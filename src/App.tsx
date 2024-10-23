import React, { useState } from 'react';
import { Menu, Search, ShoppingBag, User } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import EditorialSection from './components/EditorialSection';
import EditorialPage from './components/EditorialPage';
import SingleEditorialPage from './components/SingleEditorialPage';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedEditorial, setSelectedEditorial] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <FeaturedProducts />
            <EditorialSection 
              setCurrentPage={setCurrentPage}
              setSelectedEditorial={setSelectedEditorial}
            />
          </>
        ) : currentPage === 'editorial' && selectedEditorial !== null ? (
          <SingleEditorialPage 
            editorialId={selectedEditorial}
            onBack={() => setSelectedEditorial(null)}
          />
        ) : (
          <EditorialPage 
            setSelectedEditorial={setSelectedEditorial}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;