import { Camera, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-amber-400" />
            <span className="text-white font-semibold tracking-wide">
              LENS<span className="text-amber-400">.</span>
            </span>
          </a>

          <div className="flex items-center gap-6 text-neutral-400">
            <a href="mailto:hello@lens.studio" className="flex items-center gap-2 hover:text-amber-400 transition-colors text-sm">
              <Mail className="w-4 h-4" /> hello@lens.studio
            </a>
            <a href="tel:+79990000000" className="flex items-center gap-2 hover:text-amber-400 transition-colors text-sm">
              <Phone className="w-4 h-4" /> +7 999 000-00-00
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-amber-400 transition-colors text-sm">
              <Instagram className="w-4 h-4" /> @lens.studio
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-neutral-500 text-sm">
          © {new Date().getFullYear()} LENS Studio. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
