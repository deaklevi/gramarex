import { Metadata } from 'next';
import TitleCard from '@/components/TitleCard';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Kő anyagminták | Gramarex',
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

export default function Stones() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-28 pb-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="w-full max-w-[1500px]">
          <h1 className="text-2xl font-semibold mb-5 text-stone-900">Kő anyagminták</h1>
          
          <TitleCard 
            imageSrc="/ko-anyagmintak/ko-anyagmintak.jpg" 
            text="A <span class='text-orange-600 font-semibold'>természetes kő</span> képződése szerint három fő csoportba osztható. A <span class='text-orange-600 font-semibold'>magmás kőzetek</span> légnemű és szilárd alkotórészekből álló, többkomponensű, többnyire szilikátos olvadékok kikristályosodásával alakulnak ki. Az olvadékban a gázok és gőzök oldatban tartják a szilárdakat, ezért lehűlés során kristályos szerkezetű lesz. A kristályosodás mélysége szerint megkülönböztetjük a mélységi magmás és kiömlési magmás kőzeteket. Az <span class='text-orange-600 font-semibold'>üledékes kőzetek</span> felszíni (másodlagos) folyamatok, azaz a felszíni vagy felszín közeli kőzetek lepusztulása, mállása, a mállástermék szállítása és lerakódása eredményeként létrejött laza üledékekből képződnek azok kőzetté válásával. A <span class='text-orange-600 font-semibold'>metamorf kőzetek</span> nagy hőmérsékleten és/vagy nyomáson korábbi kőzetek szilárd fázisú átkristályosodással jönnek létre. Az eredeti kőzet jellege szerint megkülönböztetünk orto- (azaz magmás kőzetből képződött) és para- (azaz üledékes kőzetből képződött) metamorfitokat. Ennek megfelelően a Föld felszínének nagyobbik részét laza üledék vagy üledékes kőzetek borítják, lefelé haladva viszont a laza üledékek aránya gyorsan, az üledékes kőzeteké lassabban csökken, a metamorf kőzeteké pedig fokozatosan nő. Mintegy 15 km mélyen már gyakorlatilag csak metamorf kőzeteket találunk. Az általunk forgalmazott köveket az alábbiak szerint csoportosítjuk: gránit, márvány, mészkő, kvarcit és onyx."
          />
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Card imageSrc="/ko-anyagmintak/anyagtar.jpg" title="Anyagtár" link="/ko-anyagmintak/anyagtar" />
            <Card imageSrc="/ko-anyagmintak/granit.jpg" title="Gránit" link="/ko-anyagmintak/granit" />
            <Card imageSrc="/ko-anyagmintak/marvany.jpg" title="Márvány" link="/ko-anyagmintak/marvany" />
            <Card imageSrc="/ko-anyagmintak/meszko.jpg" title="Mészkő" link="/ko-anyagmintak/meszko" />
            <Card imageSrc="/ko-anyagmintak/kvarcit.jpg" title="Kvarcit" link="/ko-anyagmintak/kvarcit" />
            <Card imageSrc="/ko-anyagmintak/onyx.jpg" title="Onyx" link="/ko-anyagmintak/onyx" />
          </div>
        </div>

      </div>
    </div>
  );
}