export default function Footer() {
    const currentYear = new Date().getFullYear();
    
  return (
    <footer className="w-full bg-[#FDFBF7] text-stone-800 pt-20 pb-10 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Fő tartalom: 2 oszlopos elrendezés (Bal: Logo + leírás, Jobb: Kapcsolat) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 items-start">
          
          {/* Bal oldal: Logo és leírás */}
          <div className="flex flex-col items-start">
            <a href="#" className="text-2xl font-bold tracking-tight text-stone-900 mb-4">
              Gramarex
            </a>
            <p className="text-stone-600 text-base leading-relaxed max-w-md">
                A kő nem csupán anyag, hanem az örökkévalóság egy darabja. Célunk, hogy ezt az erőt vigyük el az Ön otthonába.
            </p>
          </div>

          {/* Jobb oldal: Kapcsolat */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right">
            <h3 className="text-lg font-semibold text-stone-900 mb-4 tracking-wide">
              Kapcsolat
            </h3>
            <div className="flex flex-col space-y-3 text-stone-600 text-base">
              <p className="flex items-center md:justify-end gap-2">
                <span className="font-medium text-stone-900">Cím:</span> 2310 Szigetszentmiklós, Kőműves utca 12.
              </p>
              <p className="flex items-center md:justify-end gap-2">
                <span className="font-medium text-stone-900">Email:</span> info@gramarex.hu
              </p>
              <p className="flex items-center md:justify-end gap-2">
                <span className="font-medium text-stone-900">Telefon:</span> +36 30 123 4567
              </p>
            </div>
          </div>

        </div>

        {/* Vékony kis vonal */}
        <div className="w-full h-[1px] bg-stone-200" />

        {/* Alsó sáv: Copyright és Minden jog fenntartva */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            Copyright &copy; {currentYear} - Gramarex
          </p>
          <p>
            Minden jog fenntartva.
          </p>
        </div>

      </div>
    </footer>
  );
}