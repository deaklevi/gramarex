import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ajánlatkérés | Gramarex',
  description: 'Kérjen részletes árajánlatot síremlékeinkre az alábbi űrlap segítségével.',
};

export default function AjanlatkeresPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-28 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-stone-900">Ajánlatkérés</h1>
        
        <p className="text-stone-700 mb-8 leading-relaxed">
          Az alábbi űrlap segítségével részletes árajánlatot kérhet síremlékekre. Kérjük, a pontos kalkuláció érdekében töltsön ki minden mezőt! 
          <br /><br />
          <span className="text-sm italic">Egyéb termékek (konyhapult, lépcső, burkolat) esetén kérjük, használja a <a href="/kapcsolat" className="text-stone-900 underline font-semibold">Kapcsolat</a> oldalt.</span>
        </p>

        <form className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 space-y-8">
          
          {/* Elérhetőségek */}
          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4 border-b border-stone-200 pb-2">Kapcsolat</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Név', 'E-mail cím', 'Telefonszám', 'Helyszín (Város/Temető)'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-stone-700 mb-1">{field}</label>
                  <input type="text" className="w-full p-2 border border-stone-300 rounded focus:ring-2 focus:ring-stone-400 outline-none" />
                </div>
              ))}
            </div>
          </section>

          {/* Specifikáció */}
          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4 border-b border-stone-200 pb-2">Specifikáció</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Alapterület</label>
                <input type="text" className="w-full p-2 border border-stone-300 rounded focus:ring-2 focus:ring-stone-400 outline-none" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Anyag', 'Alsórész kódja', 'Fejrész kódja', 'Kiegészítők'].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-stone-700 mb-1">{field}</label>
                    <input type="text" className="w-full p-2 border border-stone-300 rounded focus:ring-2 focus:ring-stone-400 outline-none" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Részletek */}
          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4 border-b border-stone-200 pb-2">Részletek</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Sírfelirat szövege</label>
                <textarea rows={3} className="w-full p-2 border border-stone-300 rounded focus:ring-2 focus:ring-stone-400 outline-none"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Egyéb megjegyzés</label>
                <textarea rows={3} className="w-full p-2 border border-stone-300 rounded focus:ring-2 focus:ring-stone-400 outline-none"></textarea>
              </div>
            </div>
          </section>

          <button className="w-full bg-stone-900 text-white py-3 rounded font-semibold hover:bg-stone-800 transition">
            Ajánlatkérés elküldése
          </button>

          <p className="text-xs text-stone-500 text-center">
            Az adatok elküldése nem minősül megrendelésnek, kollégánk keresni fogja a részletekkel.
          </p>
        </form>
      </div>
    </main>
  );
}