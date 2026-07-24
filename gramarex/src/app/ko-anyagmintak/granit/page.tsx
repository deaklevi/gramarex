import { Metadata } from 'next';
import TitleCard from '@/components/TitleCard';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Gránit | Gramarex',
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

export default function GranitPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-28 pb-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="w-full max-w-[1500px]">
          <h1 className="text-2xl font-semibold mb-6 text-stone-900">Gránit</h1>
          
          <TitleCard 
            imageSrc="/ko-anyagmintak/granit.jpg" 
            text="A <span class='text-stone-900 font-semibold'>gránit</span> a leggyakoribb magmás kőzet, ami a magma megszilárdulásával jön létre. A magma, más néven kőzetolvadék folyékony halmazállapotú, a kőzetburok alsóbb részeiben, általában 70 km-nél mélyebb rétegekben képződik. Ha a magma a földfelszín alatt szilárdul meg mélységimagmáskőzetekről beszélünk. A mélyben lassú a kihűlés folyamata (több millió év is lehet), így a magmából kikristályosodó ásványok sokáig épülhetnek, nagyra növekedhetnek. A plutoni kőzetek ezért durván kristályosak. Ha a magma kijut a földfelszínre láváról beszélünk. A kilépés helyén tűzhányó, más néven vulkán alakul ki. A láva kihűlésével keletkező kőzetek a <span class='text-stone-900 font-semibold'>kiömlési magmáskőzetek</span>. A láva kihűlése igen gyors – akár néhány óra alatt is végbemehet, nagy kristályok felépülésére így nincs lehetőség. A vulkáni kőzetek ezért apró kristályosak. A gránitok sokszínűségének az oka a kőzetek eltérő ásványi összetétele. A magmás kőzetek csoportosításának másik nagyon fontos szempontja a kőzetben jelenlévő ásványok, illetve ezek arányának ismerete.<br><br>A magmás kőzeteket felépítő szilikátásványok két csoportra oszthatók: <br>a) színes elegyrészekre (zöldes, feketés színű ásványok), <br>b) színtelen ásványokra (fehér színű, rózsaszínes, halványkék, vagy színtelen ásványok). A színtelen ásványok közül az ún. földpátfélék a legfontosabbak. <br>A kontinenseken található gránit bányák, mind eltérő színű és struktúrájú nyersanyagot ad. <br>A gyémánt után a második legkeményebb kőzet, így érthető, hogy a megmunkálása csak gyémánt szerszámokkal lehetséges.<br><br>Az alábbi galériában szín szerinti csoportokba osztottuk a gránit fajtákat, hogy célirányosabban találja meg az Ön elképzelésének legmegfelelőbbet."
          />
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Card imageSrc="/ko-anyagmintak/granit/feher.jpg" title="Fehér" link="/ko-anyagmintak/granit/feher" />
            <Card imageSrc="/ko-anyagmintak/granit/sarga.jpg" title="Sárga" link="/ko-anyagmintak/granit/sarga" />
            <Card imageSrc="/ko-anyagmintak/granit/barna.jpg" title="Barna" link="/ko-anyagmintak/granit/barna" />
            <Card imageSrc="/ko-anyagmintak/granit/voros.jpg" title="Vörös" link="/ko-anyagmintak/granit/voros" />
            <Card imageSrc="/ko-anyagmintak/granit/rozsaszin.jpg" title="Rózsaszín" link="/ko-anyagmintak/granit/rozsaszin" />
            <Card imageSrc="/ko-anyagmintak/granit/zold.jpg" title="Zöld" link="/ko-anyagmintak/granit/zold" />
            <Card imageSrc="/ko-anyagmintak/granit/szurke.jpg" title="Szürke" link="/ko-anyagmintak/granit/szurke" />
            <Card imageSrc="/ko-anyagmintak/granit/fekete.jpg" title="Fekete" link="/ko-anyagmintak/granit/fekete" />
            <Card imageSrc="/ko-anyagmintak/granit/kek.jpg" title="Kék" link="/ko-anyagmintak/granit/kek" />
            <Card imageSrc="/ko-anyagmintak/granit/multicolor.jpg" title="Multicolor" link="/ko-anyagmintak/granit/multicolor" />
          </div>

        </div>

      </div>
    </main>
  );
}