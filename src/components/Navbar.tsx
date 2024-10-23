import React from 'react';
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen, currentPage, setCurrentPage }) => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-[1800px] mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <button className="p-2">
              <Search size={20} />
            </button>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-lg font-light tracking-widest hover:opacity-70 transition-opacity"
            >
              SSENSE
            </button>
          </div>

          <div className="flex items-center gap-6">
            <button className="p-2">
              <User size={20} />
            </button>
            <button className="p-2">
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>

        <div className="max-w-[1800px] mx-auto px-4 h-12 flex items-center justify-center">
          <div className="flex gap-8">
            {['MENSWEAR', 'WOMENSWEAR', 'EVERYTHING ELSE', 'EDITORIAL'].map((item) => (
              <button
                key={item}
                onClick={() => setCurrentPage(item.toLowerCase())}
                className={`text-sm hover:opacity-70 transition-opacity ${
                  currentPage === item.toLowerCase() ? 'font-medium' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-28">
          <div className="max-w-[1800px] mx-auto px-4 py-8">
            <div className="grid grid-cols-4 gap-8">
              {['MENSWEAR', 'WOMENSWEAR', 'EVERYTHING ELSE', 'SALE'].map((category) => (
                <div key={category} className="space-y-6">
                  <h2 className="text-sm font-medium">{category}</h2>
                  <ul className="space-y-3">
                    {['New Arrivals', 'Clothing', 'Shoes', 'Bags', 'Accessories'].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-sm hover:underline">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;