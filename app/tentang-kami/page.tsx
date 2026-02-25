import Image from 'next/image';
import { CheckCircle2, Users, Target, Shield } from 'lucide-react';

export default function TentangKami() {
  return (
    <div className="pb-24">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Tentang Pradana Autocare</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Dedikasi kami untuk memberikan layanan otomotif terbaik dengan standar profesionalisme tinggi.</p>
        </div>
      </section>
      
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image 
              src="https://picsum.photos/800/600?grayscale" 
              alt="Bengkel Pradana Autocare" 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer" 
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold mb-6">Sejarah Kami</h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Didirikan pada tahun 2010, Pradana Autocare bermula dari sebuah bengkel kecil dengan visi untuk mengubah stigma bengkel mobil yang seringkali tidak transparan. Kini, kami telah berkembang menjadi salah satu pusat perawatan mobil terpercaya dengan fasilitas modern.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Kami percaya bahwa setiap kendaraan berhak mendapatkan perawatan terbaik, dan setiap pemilik kendaraan berhak mendapatkan ketenangan pikiran ketika mempercayakan mobilnya kepada kami.
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold">Nilai Inti Kami</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Integritas", desc: "Kejujuran dalam setiap diagnosa dan transparansi dalam setiap biaya yang dikeluarkan pelanggan." },
              { icon: Target, title: "Presisi", desc: "Bekerja dengan standar operasional yang ketat dan menggunakan peralatan diagnostik modern." },
              { icon: Users, title: "Pelayanan", desc: "Kepuasan pelanggan adalah prioritas utama dalam setiap interaksi dan layanan yang kami berikan." }
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                  <v.icon />
                </div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
