import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Kontak() {
  return (
    <div className="pb-24">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Kami siap membantu mengatasi segala masalah kendaraan Anda. Jadwalkan servis sekarang.</p>
        </div>
      </section>
      
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Informasi Kontak</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Alamat Bengkel</h3>
                  <p className="text-slate-600">Jl. Jend. Sudirman No. 123<br/>Kebayoran Baru, Jakarta Selatan<br/>DKI Jakarta 12190</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Telepon & WhatsApp</h3>
                  <p className="text-slate-600">+62 812 3456 7890<br/>+62 21 9876 5432</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-slate-600">info@pradanaautocare.co.id<br/>cs@pradanaautocare.co.id</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Jam Operasional</h3>
                  <p className="text-slate-600">Senin - Sabtu: 08.00 - 17.00 WIB<br/>Minggu & Libur Nasional: Tutup</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="font-display text-2xl font-bold mb-6">Kirim Pesan / Booking</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Budi Santoso" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">No. WhatsApp</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="0812..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Jenis Layanan</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-white">
                  <option>Servis Berkala</option>
                  <option>Perbaikan Mesin</option>
                  <option>Kelistrikan & AC</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Pesan / Keluhan</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Ceritakan keluhan mobil Anda..."></textarea>
              </div>
              <button type="button" className="w-full py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
