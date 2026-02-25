import Link from 'next/link';
import { Wrench } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-red-600 p-2 rounded-lg">
            <Wrench className="w-6 h-6 text-white" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight">Pradana Autocare</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link href="/" className="hover:text-red-600 transition-colors">Beranda</Link>
          <Link href="/tentang-kami" className="hover:text-red-600 transition-colors">Tentang Kami</Link>
          <Link href="/layanan" className="hover:text-red-600 transition-colors">Layanan</Link>
          <Link href="/gallery" className="hover:text-red-600 transition-colors">Gallery</Link>
          <Link href="/kontak" className="hover:text-red-600 transition-colors">Kontak Kami</Link>
        </nav>
        <Link href="/kontak" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-colors">
          Booking Servis
        </Link>
      </div>
    </header>
  );
}
