'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Közös stílus a vonalaknak
  const lineClass = "absolute block h-0.5 w-7 bg-stone-950 rounded-full transition-all duration-300 ease-in-out";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FDFBF7] border-b border-amber-100/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Bal oldali logo */}
        <Link href="/" onClick={closeMenu} className="text-xl font-bold tracking-wider text-stone-900 z-50">
          GALLERY<span className="text-amber-700">.</span>
        </Link>

        {/* Jobb oldali linkek (Asztali nézet) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <Link href="#categories" className="hover:text-stone-900 transition-colors">Kategóriák</Link>
          <Link href="#gallery" className="hover:text-stone-900 transition-colors">Galéria</Link>
          <Link href="#stones" className="hover:text-stone-900 transition-colors">Kő anyagminták</Link>
          <Link href="#contact" className="hover:text-stone-900 transition-colors">Kapcsolat</Link>
          <Link href="#quote" className="hover:text-stone-900 transition-colors">Ajánlatkérés</Link>
        </div>

        {/* Mobil hamburger / X gomb (ÚJRATERVEZVE) */}
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Menü bezárása" : "Menü megnyitása"}
          className="md:hidden relative w-10 h-10 z-50 focus:outline-none flex items-center justify-center"
        >
          <div className="relative w-7 h-5 flex items-center justify-center">
            {/* Felső vonal (X egyik szára) */}
            <span
              className={`${lineClass} ${isOpen ? 'rotate-45 top-[9px]' : 'top-0'}`}
            />
            
            {/* Középső vonal (eltűnik nyitáskor) */}
            <span
              className={`${lineClass} top-[9px] ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}
            />
            
            {/* Alsó vonal (X másik szára) */}
            <span
              className={`${lineClass} ${isOpen ? '-rotate-45 top-[9px]' : 'top-[18px]'}`}
            />
          </div>
        </button>
      </div>

      {/* Mobilos lenyíló menü panel */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-[#FDFBF7] border-b border-amber-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 py-8' : 'max-h-0 opacity-0 py-0 border-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-6 text-lg font-medium text-stone-800">
          <Link href="#categories" onClick={closeMenu} className="hover:text-amber-700 transition-colors">Kategóriák</Link>
          <Link href="#gallery" onClick={closeMenu} className="hover:text-amber-700 transition-colors">Galéria</Link>
          <Link href="#stones" onClick={closeMenu} className="hover:text-amber-700 transition-colors">Kő anyagminták</Link>
          <Link href="#contact" onClick={closeMenu} className="hover:text-amber-700 transition-colors">Kapcsolat</Link>
          <Link href="#quote" onClick={closeMenu} className="hover:text-amber-700 transition-colors">Ajánlatkérés</Link>
        </div>
      </div>
    </nav>
  );
}