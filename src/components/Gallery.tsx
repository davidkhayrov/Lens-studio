import { useMemo, useState } from 'react';
import { galleryItems, type GalleryItem } from '@/data/gallery';
import { X } from 'lucide-react';

const categories = ['Все', 'Portrait', 'Wedding', 'Studio', 'Nature'] as const;

export default function Gallery() {
  const [active, setActive] = useState<(typeof categories)[number]>('Все');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = useMemo(
    () =>
      active === 'Все'
        ? galleryItems
        : galleryItems.filter((item) => item.category === active),
    [active],
  );

  return (
    <section id="gallery" className="bg-neutral-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Портфолио
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Избранные работы
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            Каждый кадр — отдельная история. Перейдите по категориям, чтобы найти нужный стиль.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-amber-400 text-neutral-950'
                  : 'bg-white/5 text-neutral-300 border border-white/10 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-4">
          {filtered.map((item) => (
            <button
              key={item.id}
              onClick={() => setLightbox(item)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                item.span === 'tall'
                  ? 'row-span-2'
                  : item.span === 'wide'
                    ? 'col-span-2'
                    : ''
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-4 left-4 text-amber-400 text-xs font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
          />
        </div>
      )}
    </section>
  );
}
