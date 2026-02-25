import Image from 'next/image';

export default function Gallery() {
  const images = [
    "https://picsum.photos/800/600?random=1&grayscale",
    "https://picsum.photos/800/800?random=2&grayscale",
    "https://picsum.photos/800/600?random=3&grayscale",
    "https://picsum.photos/800/1000?random=4&grayscale",
    "https://picsum.photos/800/600?random=5&grayscale",
    "https://picsum.photos/800/800?random=6&grayscale",
  ];

  return (
    <div className="pb-24">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Gallery Pradana Autocare</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Intip fasilitas modern dan dedikasi tim kami saat bekerja.</p>
        </div>
      </section>
      
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden relative group">
              <Image 
                src={src} 
                alt={`Gallery image ${i + 1}`} 
                width={800} 
                height={800} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium px-4 py-2 border border-white/50 rounded-full backdrop-blur-sm">Lihat Detail</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
