import { Metadata } from 'next';
import TitleCard from '@/components/TitleCard';
import StoneCard from '@/components/StoneCard';

export const metadata: Metadata = {
  title: 'Onyx | Gramarex',
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

export default function OnyxPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-28 pb-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="w-full max-w-[1500px]">
          <h1 className="text-2xl font-semibold mb-6 text-stone-900">Onyx</h1>
          
          <TitleCard 
            imageSrc="/ko-anyagmintak/onyx.jpg" 
            text="Az <span class='text-stone-900 font-semibold'>onyx</span> a kőfeldolgozó- és az építőiparban használt kövek közül az egyik legszebb és legkülönlegesebb fajtája. Szerkezete mikrokristályos vagy kriptokristályos. Kémiai összetétele megegyezik a kvarcéval, de az eltérő kristályosodás eltérő tulajdonságokat eredményez, az onyx esetében sokkal puhább és törékenyebb, mint a kvarcitok. Szalagosan vagy sávosan elhelyezkedő, mikroszkopikus vagy nagyon apró kristályok alkotta tömeges halmazai oldatokból válnak ki. A szalagok és a sávok jellegzetes és tetszetős megjelenést kölcsönöznek a kőzetnek. Színét tekintve rendkívül változatos. Könnyen lehet mesterségesen színezni, és színeit felerősíteni. Változatos rajzolatának megfelelő különböző elnevezései: szalagos, csillagos, szivárvány- és felhőachát. Viszonylag puha kőzet ezért a gyenge ásványi ill. erős szervetlen savak is megtámadhatják az onyx felületét, felmarják, feloldják. (Sósav, vízkőoldók, ecetsav, citromsav, vörösbor, nikotin stb.) Ezért a gyakorlatban még a füstös, szennyezett levegőtől is óvni, védeni kell. Korlátai ellenére, gyönyörű, exkluzív esztétikai megjelenése sok alkalmazásnál előtérbe helyezik az alternatív „ipari” hidegburkolatokkal szemben. Míg pl. konyha- és fürdőszobapultnak nem igazán alkalmas, addig a belső burkolatok választásánál, és az ablakpárkányok és az egyéb design díszítő kő elemek területén közkedvelt. Áttetszősége miatt, hátsó megvilágítással rendkívüli esztétikai impulzust ad. Kérem, tekintse meg onyx kínálatunkat, és segítünk a célnak, esztétikának és a pénztárcának legmegfelelőbbet kiválasztani."
          />
          
          <div className="mt-12">
            <StoneCard group="onyx" />
          </div>

        </div>

      </div>
    </div>
  );
}