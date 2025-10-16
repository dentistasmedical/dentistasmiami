import { SearchBar } from '@/components/search/SearchBar';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80"
          alt="Consultorio dental en Miami"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display leading-tight">
          Encuentra.<br/>
          Compara.<br/>
          Agenda.
        </h1>
        
        {/* Search Bar */}
        <SearchBar className="max-w-3xl mx-auto mb-6" />

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link 
            href="/vecindarios/hialeah" 
            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors text-sm font-medium"
          >
            Hialeah
          </Link>
          <Link 
            href="/vecindarios/kendall" 
            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors text-sm font-medium"
          >
            Kendall
          </Link>
          <Link 
            href="/vecindarios/doral" 
            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors text-sm font-medium"
          >
            Doral
          </Link>
          <Link 
            href="/precios" 
            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors text-sm font-medium"
          >
            Implantes Dentales
          </Link>
        </div>
      </div>
    </section>
  );
}