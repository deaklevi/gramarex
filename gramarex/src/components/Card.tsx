import Link from 'next/link';

interface CardProps {
  imageSrc: string;
  title: string;
  link?: string;
}

export default function Card({ imageSrc, title, link }: CardProps) {
  const cardContent = (
    <>
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100 border-b border-stone-100">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          loading="lazy"
        />
        {/* Finom világosodó overlay hover esetén */}
        <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>

      <div className="p-3 md:p-4 flex items-center justify-center min-h-[60px] bg-white">
        <h4 
          className="text-xs md:text-sm font-semibold text-center text-stone-700 uppercase tracking-widest group-hover:text-stone-900 transition-colors duration-300" 
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </>
  );

  const containerClasses = "w-[45%] sm:w-48 md:w-56 flex flex-col rounded-sm border border-stone-200/60 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-stone-300 group";

  if (link) {
    return (
      <Link href={link} className={containerClasses}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={containerClasses}>
      {cardContent}
    </div>
  );
}