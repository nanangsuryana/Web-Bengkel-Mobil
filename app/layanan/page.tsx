import { Wrench, ShieldCheck, Settings, Car, Battery, Zap, Droplet, Thermometer } from 'lucide-react';

export default function Layanan() {
  const services = [
    { icon: Settings, title: "Servis Berkala", desc: "Perawatan rutin sesuai standar pabrikan untuk menjaga performa optimal kendaraan Anda. Termasuk ganti oli, filter, dan pengecekan 20 titik." },
    { icon: Car, title: "Spooring & Balancing", desc: "Penyelarasan sudut roda dan keseimbangan ban untuk mencegah keausan tidak merata dan meningkatkan kenyamanan berkendara." },
    { icon: Battery, title: "Kelistrikan & Aki", desc: "Diagnosis sistem kelistrikan menggunakan scanner komputer, perbaikan alternator, dinamo starter, dan penggantian aki." },
    { icon: Wrench, title: "Turun Mesin (Overhaul)", desc: "Perbaikan menyeluruh untuk mesin yang mengalami kerusakan berat, ngelitik, atau kehilangan kompresi." },
    { icon: ShieldCheck, title: "Sistem Pengereman", desc: "Perawatan krusial untuk keselamatan Anda. Meliputi penggantian kampas rem, bubut cakram, dan minyak rem." },
    { icon: Thermometer, title: "Perawatan AC Mobil", desc: "Servis kompresor, pembersihan evaporator, isi freon, dan perbaikan keberoran agar kabin tetap sejuk." },
    { icon: Droplet, title: "Kuras Transmisi", desc: "Perawatan sistem transmisi manual maupun otomatis (ATF/CVT) untuk perpindahan gigi yang halus dan responsif." },
    { icon: Zap, title: "Tune Up Engine", desc: "Pembersihan ruang bakar, injektor, dan throttle body untuk mengembalikan tenaga mesin yang loyo dan boros bahan bakar." }
  ];

  return (
    <div className="pb-24">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Layanan Kami</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Solusi komprehensif untuk segala kebutuhan perawatan dan perbaikan kendaraan Anda.</p>
        </div>
      </section>
      
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                <service.icon className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
