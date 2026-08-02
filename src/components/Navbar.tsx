import { useEffect, useState } from 'react';
import { Camera, Menu, X } from 'lucide-react';

const links = [
  { href: '#gallery', label: 'Галерея' },
  { href: '#pricing', label: 'Цены' },
  { href: '#about', label: 'Обо мне' },
  { href: '#contact', label: 'Контакты' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-neutral-950/85 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2 group">
          <Camera className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />
          <span className="text-white font-semibold tracking-wide text-lg">
            LENS<span className="text-amber-400">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-neutral-300 hover:text-amber-400 text-sm font-medium tracking-wide transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-amber-400 text-neutral-950 text-sm font-semibold hover:bg-amber-300 transition-colors"
        >
          Забронировать
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-neutral-200 p-2"
          aria-label="Меню"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-t border-white/5">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-neutral-300 hover:text-amber-400 font-medium transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block mt-2 text-center py-3 rounded-full bg-amber-400 text-neutral-950 font-semibold"
              >
                Забронировать
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
