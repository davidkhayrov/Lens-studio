import { ArrowDown, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/37233404/pexels-photo-37233404.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Студийное фото с драматичным освещением"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/70 to-neutral-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-neutral-200 text-sm font-medium tracking-wide">
            12 лет за объективом
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight">
          Истории в&nbsp;свете
          <br />
          <span className="text-amber-400">и&nbsp;тени</span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-neutral-300 leading-relaxed">
          Профессиональная съёмка портретов, свадеб и студийных кадров.
          Превращаю моменты в кадры, которые остаются с вами навсегда.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-amber-400 text-neutral-950 font-semibold hover:bg-amber-300 hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-400/20"
          >
            Смотреть работы
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Обсудить съёмку
          </a>
        </div>
      </div>

      <a
        href="#gallery"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-neutral-400 hover:text-amber-400 transition-colors animate-bounce"
        aria-label="Прокрутить вниз"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
