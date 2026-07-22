export default function Categories() {
  const categories = [
    {
      title: "Burkolatok",
      image: "house.jpg",
      href: "#"
    },
    {
      title: "Medence és wellness",
      image: "wellness.jpg",
      href: "#"
    },
    {
      title: "Kertépítés",
      image: "garden.jpg",
      href: "#"
    },
    {
      title: "Építészeti elemek",
      image: "architecture.jpg",
      href: "#"
    }
  ];

  return (
    <section id="categories" className="w-full bg-[#FDFBF7] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Sekció fejléc */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 mb-4">
            Felhasználási területek
          </h2>
          <p className="text-stone-600 text-base">
            Fedezze fel, hogyan keltik életre a természetes kövek otthonának és környezetének különböző pontjait.
          </p>
        </div>

        {/* 4 oszlopos, szorosan egymás melletti grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {categories.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group relative h-[420px] overflow-hidden block focus:outline-none"
            >
              {/* Kép háttér finom zoom effekttel */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Sötétítő gradiensek a jó olvashatóságért */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Szöveges tartalom alul */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white tracking-wide translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <span className="inline-flex items-center text-xs font-medium tracking-wider uppercase text-amber-200 mt-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Megtekintés &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}