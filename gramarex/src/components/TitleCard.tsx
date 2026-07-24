interface TitleCardProps {
  imageSrc: string;
  text: string;
}

export default function TitleCard({ imageSrc, text }: TitleCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-white border border-stone-200/60 p-6 md:p-8 gap-8 transition-all duration-300 hover:shadow-lg group w-full rounded-sm">
      <div className="flex-shrink-0 overflow-hidden rounded-sm shadow-sm">
        <img 
          src={imageSrc} 
          alt="Illusztráció" 
          className="h-48 w-56 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="text-stone-600 text-left flex-1">
        <p 
          className="text-base leading-relaxed" 
          dangerouslySetInnerHTML={{ 
            // Az orange-600-at lecseréljük stone-900-ra a HTML-en belül is
            __html: text.replace(/text-orange-600/g, 'text-stone-900') 
          }}
        />
      </div>
    </div>
  );
}