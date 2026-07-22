'use client';

import { useState } from 'react';

// Példa adatok (később cserélheted Axios-ból jövő adatokra)
const galleryItems = [
  {
    id: 1,
    title: "Modern Travertin Burkolat",
    category: "burkolatok",
    image: "house.jpg",
    span: "col-span-1 md:col-span-2 row-span-2", // Nagyobb kártya a bento gridhez
  },
  {
    id: 2,
    title: "Luxus Medence Szegély",
    category: "medence",
    image: "wellness.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Mediterrán Kertépítészeti Elem",
    category: "kertepites",
    image: "garden.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Építészeti Gránit Oszlop",
    category: "epiteszeti",
    image: "architecture.jpg",  
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  // További képek hozzáadása a galériához
];

const categories = [
  { id: 'all', label: 'Összes' },
  { id: 'burkolatok', label: 'Burkolatok' },
  { id: 'medence', label: 'Medence és wellness' },
  { id: 'kertepites', label: 'Kertépítés' },
  { id: 'epiteszeti', label: 'Építészeti elemek' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  // Szűrés logika
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="w-full bg-[#FDFBF7] py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Szekció Cím */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-700 font-semibold tracking-widest uppercase text-xs">Exkluzív Referenciák</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-stone-900 mt-2 mb-4">
            Galéria
          </h2>
          <p className="text-stone-600 text-base">
            Tekintse meg eddigi munkáinkat és merítsen ihletet a természetes kövek egyedi felhasználásához.
          </p>
        </div>

        {/* Szűrő Gombok */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat.id
                  ? 'bg-stone-900 text-[#FDFBF7] shadow-md'
                  : 'bg-amber-100/40 text-stone-600 hover:bg-amber-100/80 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid Képgaléria */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm bg-stone-200 ${item.span}`}
            >
              {/* Kép */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Szöveges info hoverre */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-amber-300 text-xs uppercase tracking-wider font-medium mb-1">
                  {categories.find(c => c.id === item.category)?.label}
                </span>
                <h3 className="text-xl font-semibold text-white tracking-wide">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Teljes képernyős nézet modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-[#FDFBF7] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bezáró gomb */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white flex items-center justify-center transition-colors"
              aria-label="Bezárás"
            >
              ✕
            </button>

            {/* Kép a modálban */}
            <div className="w-full md:w-2/3 h-[300px] md:h-[550px] bg-stone-900">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Leírás a modálban */}
            <div className="w-full md:w-1/3 p-8 flex flex-col justify-between bg-[#FDFBF7]">
              <div>
                <span className="text-amber-700 text-xs font-semibold uppercase tracking-wider">
                  {categories.find(c => c.id === selectedImage.category)?.label}
                </span>
                <h3 className="text-2xl font-bold text-stone-900 mt-2 mb-4">
                  {selectedImage.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Prémium minőségű természetes kő alapanyag, precíz beépítéssel. Tökéletes választás modern és klasszikus környezetbe egyaránt.
                </p>
              </div>

              <div className="pt-6 border-t border-amber-100 mt-6">
                <a 
                  href="#quote" 
                  onClick={() => setSelectedImage(null)}
                  className="w-full block text-center bg-stone-900 hover:bg-stone-800 text-[#FDFBF7] py-3 rounded-xl font-medium text-sm transition-colors shadow-sm"
                >
                  Ajánlatkérés ehhez a stílushoz
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}