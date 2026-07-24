import { Metadata } from 'next';
import TitleCard from '@/components/TitleCard';
import StoneCard from '@/components/StoneCard';

export const metadata: Metadata = {
  title: 'Kék gránit | Gramarex',
  description: 'A síremlék a szeretet és tisztelet maradandó kifejezése. Hiszünk abban, hogy az elhunyt emléke méltó, örökké tartó keretet érdemel, ezért dolgozunk a természet legnemesebb kőzeteivel.',
  keywords: [
    'Africa Red', 'Amadeus', 'Aurora', 'Baltic Brown', 'Baltic Green', 'Bararp', 'Halmstad', 
    'Belorizont', 'Bianco Tarn Claire', 'Blue Orissa', 'Blue Vizag', 'Brass Blue', 'Cristal G603', 
    'Giallo Ornamentale', 'Giallo Santa Cecilia', 'Giallo Veneciano', 'Himalaya Blue', 'Indian Aurora', 
    'Juparana Columbo', 'Juparana Pink', 'Kasmir White', 'Kinawa', 'Labrador Blue', 'Labrador Black', 
    'Labrador Silver', 'Labrador Antique', 'Multicolor', 'Nero Assuloto Black', 'Nero Impala', 
    'Nero Zimbabwe', 'New Impala', 'New Paradiso', 'New Red', 'Oliv Green', 'Paradiso Classico', 
    'River Gold', 'Rosabeta', 'Rosso Vanga', 'Ivö Red', 'Samba', 'Silver Cloud', 'Verde Eucalipta', 
    'Verde Gloria Dark', 'Verde Gloria Light', 'Verde Laguna', 'Verde Lavras', 'Verde Marina', 
    'Verde San Francisco', 'Ruschita', 'Ruskica', 'Jura mészkő', 'Baschioi', 'Podeni', 'Carpinis', 'Geoagiu'
  ],
};

export default function KekGranitPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-28 pb-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="w-full max-w-[1500px]">
          <h1 className="text-2xl font-semibold mb-6 text-stone-900">Kék gránit</h1>
          
          <TitleCard 
            imageSrc="/ko-anyagmintak/granit/kek.jpg" 
            text="A <span class='text-orange-600 font-semibold'>kék gránit</span> is magmás eredetű kőzet, mint bármely másik színű. A „gránit” egy gyűjtő név, amit az alkotó ásványok és kristályok előfordulásának változatossága tesz különbözővé, változatossá. Színét általában a földpátok, azaz kőzetalkotó ásványok határozzák meg. Kevesebb kvarcot tartalmazó típusa a granoszienit, a kvarc nélkül, nagyobbrészt földpátokból álló kőzet a szienit. Az olyan, kevés káliumot, de a szokásosnál több nátriumot és kalciumot tartalmazó gránitot, amiben a káliföldpát nincs vagy mennyisége csekély, és helyette plagioklászt találunk, plagiogránitnak nevezzük. A kék gránitok színét alapvetően az apatit, fluorit, andaluzit, berill, topáz, cirkon, hemetit, grafit és az áttetsző szürkés kvarc határozzák meg. Rajzolatát és struktúráját tekintve, többségében homogén szerkezetű, de a fotógalériában bemutatott kék gránitok között látható nagy csillámos, felhős és erezett rajzolatú is. A felhasználási terület nagyon különböző és változatos, mert a tulajdonságaikat (nedvszívó képesség, nyomó szilárdság, stb.) figyelembe véve egyes gránit fajták nem alkalmazhatóak minden területen. Kérem, tekintse meg kínálatunkat, és segítünk a célnak, esztétikának és a pénztárcának legmegfelelőbbet kiválasztani."
          />
          
          <div className="mt-12">
            <StoneCard group="kek-granit" />
          </div>

        </div>

      </div>
    </div>
  );
}