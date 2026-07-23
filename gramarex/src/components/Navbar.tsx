'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#categories', label: 'Kategóriák' },
    { href: '#gallery', label: 'Galéria' },
    { href: '#stones', label: 'Kő anyagminták' },
    { href: '#contact', label: 'Kapcsolat' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false); // Bezárja a mobilos menüt kattintás után
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="/" 
            className="text-2xl font-bold tracking-tight text-stone-900 transition-transform duration-300 hover:scale-105 active:scale-95 z-50"
          >
            Gramarex
          </a>

          {/* Asztali navigációs linkek */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="relative text-stone-700 hover:text-stone-950 text-sm font-medium transition-colors duration-300 py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-stone-900 transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Asztali Ajánlatkérés gomb */}
          <div className="hidden md:block">
            <a 
              href="#quote" 
              className="px-6 py-2.5 rounded-full bg-stone-900 text-[#FDFBF7] text-sm font-medium transition-all duration-300 hover:bg-stone-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Ajánlatkérés
            </a>
          </div>

          {/* Mobil Hamburger Gomb (touch-barát z-index-szel) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-stone-900 focus:outline-none"
            aria-label="Menü megnyitása"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-stone-900 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`w-full h-0.5 bg-stone-900 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-stone-900 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

        </div>
      </nav>

      {/* Teljes képernyős Mobil Menü Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-[#FDFBF7] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-8 text-center px-6">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-2xl sm:text-3xl font-medium text-stone-800 hover:text-stone-950 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          
          <div className="pt-6">
            <a 
              href="#quote" 
              onClick={handleLinkClick}
              className="px-8 py-3.5 rounded-full bg-stone-900 text-[#FDFBF7] text-base font-medium shadow-md transition-transform active:scale-95"
            >
              Ajánlatkérés
            </a>
          </div>
        </div>
      </div>
    </>
  );
}