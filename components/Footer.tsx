import Link from 'next/link';
import { Wrench, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-red-600 p-1.5 rounded-lg">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">Pradana Autocare</span>
            </Link>
            <p className="mb-6 max-w-sm">
              Solusi terpercaya untuk segala kebutuhan perawatan dan perbaikan mobil Anda. Profesional, transparan, dan bergaransi.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Jl. Jend. Sudirman No. 123, Jakarta Selatan, 12190</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>Senin - Sabtu: 08.00 - 17.00</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Menu Cepat</h4>
            <ul className="space-y-2">
              <li><Link href="/tentang-kami" className="hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link href="/layanan" className="hover:text-white transition-colors">Layanan</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/kontak" className="hover:text-white transition-colors">Kontak Kami</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Pradana Autocare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
