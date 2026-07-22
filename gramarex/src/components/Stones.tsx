import Link from "next/link";

export default function StoneSection() {
  return (
    <section id="stones" className="relative w-full min-h-screen bg-stone-950 text-[#FDFBF7] flex items-center justify-center overflow-hidden py-24 px-6">
      
      {/* Háttér kép finom sötétítéssel és parallax jellegű hatással */}
      <div className="absolute inset-0 z-0">
        <img
          src="granit.jpg"
          alt="Természetes kő anyagminták háttér"
          className="w-full h-full object-cover opacity-80 scale-105"
        />
        {/* Gradiens átmenetek a mélységért */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950" />
      </div>

      {/* Tartalom konténer - kiterítve a képernyőre */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Bal oldal: Szöveges rész */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <span className="inline-block text-amber-300 font-semibold tracking-widest uppercase text-xs mb-4 px-3 py-1 rounded-full bg-amber-950/50 border border-amber-800/50">
            Prémium kő anyagminták
          </span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Tapintsa meg a <br />
            <span className="text-amber-200">különbséget.</span>
          </h2>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
            Jöjjön el hozzánk, hogy saját szemével láthassa kőanyagaink valódi textúráját és árnyalatait — még a tervezőasztalon vagy kérjen ajánlatot.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <Link 
              href="#stones"
              className="bg-white/80 border border-stone-300 text-stone-900 font-medium px-8 py-4 rounded-xl hover:bg-white transition-all shadow-sm text-center text-base"
            >
              Tekintse meg a kő anyagmintákat
            </Link>
            <Link 
              href="#quote"
              className="bg-slate-950 text-white font-medium px-8 py-4 rounded-xl hover:bg-slate-800 transition-all shadow-sm text-center text-base"
            >
              Ingyenes ajánlatkérés
            </Link>
          </div>
        </div>

        {/* Jobb oldal: Kiemelt kártya / vizuális elem */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md bg-stone-900/60 backdrop-blur-md border border-stone-800 p-8 rounded-3xl shadow-2xl">
            <div className="absolute -top-3 -right-3 bg-amber-300 text-stone-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Kiemelt
            </div>
            
            <h3 className="text-2xl font-semibold text-white mb-3">
              Egyedi Kőfeldolgozás
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Nemcsak alapanyagot biztosítunk, hanem a legmodernebb technológiával méretre is vágjuk, csiszoljuk és felületkezeljük a köveket az Ön elképzelései alapján.
            </p>

            <ul className="space-y-3 text-stone-300 text-sm border-t border-stone-800/80 pt-6">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                Fagyálló és csúszásmentes felületek
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                Precíz, milliméter pontos megmunkálás
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                Szakértői szaktanácsadás a választáshoz
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}