import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen lg:h-screen flex items-center overflow-hidden bg-[#FDFBF7] pt-24 lg:pt-0">
      
      {/* 1. Tartalom (Bal oldalon a szövegek és gombok) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8 z-10 py-12 lg:py-0">
          
          {/* Kis cím */}
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-900 bg-amber-200/50 px-4 py-1.5 rounded-full shadow-sm">
            Természetes kőmegoldások 2010 óta
          </span>

          {/* Nagy Főcím */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-stone-950 leading-[1.1]">
            GRAMAREX: A természet ereje, az ön otthonában
          </h1>

          {/* Kis leírás */}
          <p className="text-base sm:text-lg text-stone-700 max-w-xl leading-relaxed font-normal">
            Tartós, esztétikus és egyedi kőmegoldások minden építkezési projekthez.
          </p>

          {/* Két gomb */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <Link 
              href="#quote"
              className="bg-slate-950 text-white font-medium px-8 py-4 rounded-xl hover:bg-slate-800 transition-all shadow-sm text-center text-base"
            >
              Tekintse meg a kő anyagmintákat
            </Link>
            <Link 
              href="#stones"
              className="bg-white/80 border border-stone-300 text-stone-900 font-medium px-8 py-4 rounded-xl hover:bg-white transition-all shadow-sm text-center text-base"
            >
              Ingyenes ajánlatkérés
            </Link>
          </div>

        </div>

      </div>

      {/* 2. Jobb oldali kép (Teljes magasságban, balra tartó átmenettel) */}
      {/* Mobilon halványabb háttérként, asztali nézetben pedig a jobb oldalt kitöltő képként jelenik meg */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 h-full z-0 pointer-events-none">
        <div className="absolute inset-0 bg-stone-900/20 lg:hidden z-10" /> {/* Mobilos sötétítés a jobb olvashatóságért */}
        <img 
          src="hero-img.jpg" 
          alt="Művészeti Galéria Háttér" 
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)'
          }}
        />
      </div>

    </section>
  );
}