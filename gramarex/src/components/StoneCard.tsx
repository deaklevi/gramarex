'use client';

import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

interface StoneItem {
  id: number;
  group: string;
  name: string;
  image_url: string;
  tombstone_id?: string;
  origin?: string;
  color?: string;
  description?: string;
}

interface StoneCardProps {
  group: string;
}

export default function StoneCard({ group }: StoneCardProps) {
  const [stones, setStones] = useState<StoneItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<StoneItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://palasti-backend2.saavatar.top';

  useEffect(() => {
    const fetchStones = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get(`${baseUrl}/api/stones`);
        const rawData = response.data?.data || response.data || [];
        const filtered = Array.isArray(rawData)
          ? rawData.filter((item: StoneItem) => item.group === group)
          : [];
        setStones(filtered);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchStones();
  }, [group, baseUrl]);

  const toggleScroll = (isLocked: boolean) => {
    const action = isLocked ? 'hidden' : '';
    document.body.style.overflow = action;
    document.documentElement.style.overflow = action;
  };

  const openModal = (item: StoneItem, index: number) => {
    setCurrentIndex(index);
    setSelectedItem(item);
    toggleScroll(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    toggleScroll(false);
  };

  const nextItem = useCallback(() => {
    if (stones.length === 0) return;
    setCurrentIndex((prev) => {
      const nextIdx = (prev + 1) % stones.length;
      setSelectedItem(stones[nextIdx]);
      return nextIdx;
    });
  }, [stones]);

  const prevItem = useCallback(() => {
    if (stones.length === 0) return;
    setCurrentIndex((prev) => {
      const prevIdx = (prev - 1 + stones.length) % stones.length;
      setSelectedItem(stones[prevIdx]);
      return prevIdx;
    });
  }, [stones]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextItem();
      if (e.key === 'ArrowLeft') prevItem();
      if (e.key === 'Escape') closeModal();
    };

    if (selectedItem) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, nextItem, prevItem]);

  useEffect(() => {
    return () => toggleScroll(false);
  }, []);

  if (loading) return <div className="mt-16 text-stone-400 italic animate-pulse text-sm text-center">Anyagminták betöltése...</div>;
  if (error) return <div className="mt-16 text-red-500/80 text-center text-sm">Hiba történt a képek betöltésekor.</div>;
  if (stones.length === 0) return <div className="mt-16 text-stone-400 italic text-center text-sm">Ebben a kategóriában jelenleg nincsenek elérhető minták.</div>;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-6xl w-full">
        {stones.map((item, index) => (
          <div 
            key={item.id} 
            className="w-[45%] sm:w-48 md:w-52 cursor-pointer group flex flex-col items-center" 
            onClick={() => openModal(item, index)}
          >
            <div className="w-full bg-white p-2 border border-stone-200/60 shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:-translate-y-1 rounded-sm">
              <img 
                src={baseUrl + item.image_url} 
                alt={`Minta - ${item.name}`}
                className="w-full h-auto max-h-48 md:max-h-56 object-contain block" 
                loading="lazy"
              />
            </div>
            <h5 className="text-xs md:text-sm text-center break-words mt-4 text-stone-600 group-hover:text-stone-900 transition-colors font-medium leading-tight px-2 tracking-wide">
              {item.tombstone_id && <span className="font-bold uppercase mr-1">{item.tombstone_id}</span>}
              {item.tombstone_id && <span className="text-stone-300 mx-1">|</span>}
              {item.name}
            </h5>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div 
          className="fixed inset-0 bg-stone-900/60 flex items-center justify-center z-[9999] w-screen h-screen p-4 md:p-8 backdrop-blur-sm transition-opacity"
          onClick={closeModal}
        >
          {/* Fő Lightbox Container (Cream háttérrel) */}
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] bg-[#FDFBF7] shadow-2xl flex flex-col lg:flex-row overflow-hidden rounded-sm" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal} 
              className="absolute top-3 right-3 md:top-5 md:right-5 text-stone-400 hover:text-stone-900 transition-colors z-[100] text-3xl w-10 h-10 flex items-center justify-center"
            >
              &times;
            </button>

            {/* Bal oldal: Kép */}
            <div className="w-full lg:w-3/5 bg-white p-6 md:p-12 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-stone-200">
              <img 
                src={baseUrl + selectedItem.image_url} 
                alt={`Minta - ${selectedItem.name}`}
                className="max-w-full max-h-[40vh] lg:max-h-[70vh] object-contain drop-shadow-sm" 
              />
            </div>

            {/* Jobb oldal: Részletek */}
            <div className="w-full lg:w-2/5 p-6 md:p-10 flex flex-col justify-between bg-[#FDFBF7]">
              <div>
                <p className="text-stone-500 font-semibold tracking-widest text-[10px] md:text-xs mb-2 uppercase">
                  {selectedItem.tombstone_id ? `Azonosító: ${selectedItem.tombstone_id}` : `ID: ${selectedItem.id}`}
                </p>
                
                <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6 uppercase tracking-tight leading-none">
                  {selectedItem.name}
                </h2>
                
                <div className="h-[2px] w-12 bg-stone-900 mb-6"></div>

                <div className="text-stone-600 text-sm leading-relaxed overflow-y-auto max-h-[20vh] lg:max-h-[40vh] mb-6 pr-2">
                  <div className="space-y-3">
                    <p><span className="font-semibold text-stone-900">Anyag:</span> {selectedItem.name}</p>
                    {selectedItem.origin && <p><span className="font-semibold text-stone-900">Származás:</span> {selectedItem.origin}</p>}
                    {selectedItem.color && <p><span className="font-semibold text-stone-900">Szín:</span> {selectedItem.color}</p>}
                    
                    {selectedItem.description && (
                      <p className="mt-4 pt-4 border-t border-stone-200/60 text-stone-500">
                        {selectedItem.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Lapozó gombok */}
              <div className="flex gap-4 pt-6 border-t border-stone-200/60 mt-auto">
                <button onClick={prevItem} className="flex-1 py-3.5 bg-white border border-stone-200 text-stone-900 hover:bg-stone-50 transition-all font-semibold uppercase text-[10px] md:text-[11px] tracking-widest shadow-sm">
                  Vissza
                </button>
                <button onClick={nextItem} className="flex-1 py-3.5 bg-stone-900 border border-stone-900 text-[#FDFBF7] hover:bg-stone-800 transition-all font-semibold uppercase text-[10px] md:text-[11px] tracking-widest shadow-sm">
                  Következő
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}