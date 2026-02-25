import { ShieldCheck, Star, ArrowRight, CheckCircle2, Settings, Car, Battery, Wrench } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Bengkel Mobil" 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-sm font-medium mb-6 border border-red-600/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Buka Hari Ini: 08.00 - 17.00
            </div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Perawatan Mobil <span className="text-red-500">Tanpa Kompromi.</span>
            </h1>
            <p className="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
              Kami mengembalikan performa optimal kendaraan Anda dengan mekanik bersertifikat, suku cadang asli, dan transparansi harga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontak" className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors text-lg">
                Booking Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/layanan" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm text-lg">
                Lihat Layanan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Layanan Komprehensif</h2>
            <p className="text-slate-600 text-lg">Dari perawatan rutin hingga perbaikan mesin berat, kami memiliki keahlian untuk menangani segala kebutuhan mobil Anda.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Settings, title: "Servis Berkala", desc: "Ganti oli, filter, dan pengecekan standar untuk menjaga performa mesin." },
              { icon: Car, title: "Spooring & Balancing", desc: "Penyelarasan roda untuk kenyamanan dan keamanan berkendara yang maksimal." },
              { icon: Battery, title: "Kelistrikan & Aki", desc: "Diagnosis dan perbaikan sistem kelistrikan, ganti aki, dan alternator." },
              { icon: Wrench, title: "Turun Mesin (Overhaul)", desc: "Perbaikan menyeluruh untuk mesin yang mengalami kerusakan berat." },
              { icon: ShieldCheck, title: "Sistem Pengereman", desc: "Pengecekan dan penggantian kampas rem, cakram, dan minyak rem." },
              { icon: Settings, title: "AC Mobil", desc: "Perawatan dan perbaikan sistem pendingin kabin agar tetap sejuk." },
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-red-200 hover:shadow-lg hover:shadow-red-900/5 transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-red-600 transition-colors">
                  <service.icon className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/layanan" className="inline-flex items-center justify-center px-8 py-3.5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors">
              Lihat Semua Layanan
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="keunggulan" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Mengapa Memilih Pradana Autocare?</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Kami tidak sekadar memperbaiki mobil; kami memberikan ketenangan pikiran. Dengan standar operasional yang ketat, kami memastikan setiap kendaraan diperlakukan dengan presisi.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Mekanik Bersertifikat", desc: "Tim kami terdiri dari teknisi berpengalaman dengan sertifikasi resmi." },
                  { title: "Suku Cadang Original", desc: "Kami hanya menggunakan spare part asli dengan garansi pabrik." },
                  { title: "Transparansi Harga", desc: "Estimasi biaya yang jelas di awal tanpa biaya tersembunyi." },
                  { title: "Garansi Servis", desc: "Setiap pekerjaan perbaikan kami lindungi dengan garansi hingga 6 bulan." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden relative">
                <Image 
                  src="https://picsum.photos/800/800?grayscale" 
                  alt="Mekanik bekerja" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 via-transparent to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white text-slate-900 p-6 rounded-3xl shadow-2xl max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <span className="font-bold">4.9/5</span>
                </div>
                <p className="text-sm font-medium text-slate-600">Dari 1,000+ pelanggan yang puas dengan layanan kami.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Booking Section */}
      <section id="booking" className="py-24 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Mobil Anda Bermasalah?</h2>
          <p className="text-red-100 text-xl mb-10 max-w-2xl mx-auto">
            Jangan tunggu sampai kerusakan bertambah parah. Jadwalkan pengecekan hari ini dan dapatkan diskon 15% untuk servis pertama.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/kontak" className="px-8 py-4 bg-white text-red-600 font-bold rounded-full hover:bg-slate-50 transition-colors text-lg shadow-xl shadow-red-900/20">
              Booking via WhatsApp
            </Link>
            <Link href="/kontak" className="px-8 py-4 bg-red-700 text-white font-bold rounded-full hover:bg-red-800 transition-colors text-lg border border-red-500">
              Telepon Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
