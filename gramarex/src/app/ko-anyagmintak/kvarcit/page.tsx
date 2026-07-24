import { Metadata } from 'next';
import TitleCard from '@/components/TitleCard';
import StoneCard from '@/components/StoneCard';

export const metadata: Metadata = {
  title: 'Kvarcit | Gramarex',
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

export default function KvarcitPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-28 pb-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="w-full max-w-[1500px]">
          <h1 className="text-2xl font-semibold mb-6 text-stone-900">Kvarcit</h1>
          
          <TitleCard 
            imageSrc="/ko-anyagmintak/kvarcit.jpg" 
            text="A <span class='text-stone-900 font-semibold'>kvarcit</span> vaskos vagy szemcsés kvarcból álló metamorf kőzet. A kvarc a földkéreg egyik legelterjedtebb ásványa. Kvarcszemekből áll a puszták, sivatagok, folyóvizek s részben a tengerek homokja, kavicsa, úgyszintén a homokkő is. Az apró kvarcszemcsék átkristályosodnak a metamorfózis során. Ez minél mélyebben történt, annál keményebb az így keletkezett tömör és finomszemcsés kvarcit. Színét tekintve rendkívül változatos. Alapvetően víztiszta, de gyakran tartalmaz színező és „szennyező” anyagokat, amitől bármilyen színben előfordulhat. Tulajdonságai közé tartozik, hogy fagyálló, kopásálló és jó a különböző savakkal és sókkal szembeni ellenálló képessége. A kvarcit kiváló kőzettani tulajdonságai és természetes esztétikája miatt egyre nagyobb a felhasználási terület, ahol alkalmazzák kültéren és beltérben egyaránt. Padló-, fal- és homlokzat burkolat, fürdőszobai mosdópult vagy konyhai munkalap. Kérem, tekintse meg kvarcit kínálatunkat, és segítünk a célnak, esztétikának és a pénztárcának legmegfelelőbbet kiválasztani."
          />
          
          <div className="mt-12">
            <StoneCard group="kvarcit" />
          </div>

        </div>

      </div>
    </div>
  );
}