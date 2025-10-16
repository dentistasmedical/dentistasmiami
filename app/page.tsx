import { Hero } from '@/components/marketing/Hero';
import { DentistCard } from '@/components/DentistCard';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const neighborhoods = [
  { name: 'Hialeah', slug: 'hialeah', count: 45 },
  { name: 'Kendall', slug: 'kendall', count: 38 },
  { name: 'Doral', slug: 'doral', count: 32 },
  { name: 'Brickell', slug: 'brickell', count: 28 },
  { name: 'Coral Gables', slug: 'coral-gables', count: 25 },
  { name: 'Sweetwater', slug: 'sweetwater', count: 22 },
  { name: 'Little Havana', slug: 'little-havana', count: 18 },
  { name: 'Westchester', slug: 'westchester', count: 16 },
];

// Fetch real dentists from Google Places API
async function getFeaturedDentists() {
  try {
    // Call our API route
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/dentists?neighborhood=Miami`, {
      cache: 'no-store', // Always get fresh data for now
    });
    
    if (!response.ok) {
      console.error('Failed to fetch dentists');
      return [];
    }
    
    const data = await response.json();
    
    if (!data.success) {
      console.error('API returned error:', data.error);
      return [];
    }
    
    // Return top 6 dentists sorted by rating
    return data.dentists
      .filter((d: any) => d.rating && d.rating >= 4.5) // Only highly rated
      .sort((a: any, b: any) => (b.rating || 0) - (a.rating || 0))
      .slice(0, 6);
  } catch (error) {
    console.error('Error fetching dentists:', error);
    return [];
  }
}

export default async function HomePage() {
  const featuredDentists = await getFeaturedDentists();

  return (
    <main>
      {/* JSON-LD: Organization and WebSite */}
      {(() => {
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dentistasmiami.com';
        const organization = {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'DentistasMiami',
          url: siteUrl,
          description: 'Directorio de dentistas en Miami con reseñas, precios y vecindarios.',
          logo: `${siteUrl}/site/site.webmanifest`,
        } as const;
        const webSite = {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'DentistasMiami',
          url: siteUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/dentistas?query={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        } as const;
        return (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
            />
          </>
        );
      })()}
      {/* Hero Section */}
      <Hero />

      {/* Featured Dentists */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Dentistas Destacados en Miami
              </h2>
              <p className="text-gray-600">Los mejores por calificación y opiniones</p>
            </div>
            <Link 
              href="/dentistas" 
              className="hidden md:inline-flex items-center gap-2 text-coral-500 hover:text-coral-600 font-semibold transition-colors"
            >
              Ver todos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {featuredDentists.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDentists.map((dentist: any) => (
                <DentistCard key={dentist.id} dentist={dentist} featured />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Cargando dentistas...</p>
            </div>
          )}

          {/* Mobile "Ver todos" button */}
          <div className="mt-8 text-center md:hidden">
            <Link 
              href="/dentistas" 
              className="inline-flex items-center gap-2 text-coral-500 hover:text-coral-600 font-semibold"
            >
              Ver todos los dentistas
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* Browse by Neighborhood */}
      <section className="py-12 bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Buscar por Vecindario
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {neighborhoods.map((neighborhood) => (
              <Link
                key={neighborhood.slug}
                href={`/vecindarios/${neighborhood.slug}`}
                className="group p-4 border border-gray-200 rounded-lg hover:border-coral-500 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 group-hover:text-coral-500 transition-colors">
                    {neighborhood.name}
                  </h3>
                  <svg 
                    className="w-5 h-5 text-gray-400 group-hover:text-coral-500 transition-colors" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
                <p className="text-sm text-gray-600">{neighborhood.count} dentistas</p>
              </Link>
            ))}

            {/* "Ver Todos" card */}
            <Link
              href="/vecindarios"
              className="group p-4 border border-gray-200 rounded-lg hover:border-coral-500 hover:shadow-md transition-all bg-coral-50"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-coral-600 group-hover:text-coral-700 transition-colors">
                  Ver Todos
                </h3>
                <svg 
                  className="w-5 h-5 text-coral-500 group-hover:text-coral-600 transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </div>
              <p className="text-sm text-coral-700">12 vecindarios</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Price Comparison CTA */}
      <section className="py-12 bg-coral-50">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compara Precios Antes de Agendar
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ve el costo real de limpiezas, implantes, ortodoncia y más. Sin sorpresas.
              </p>
              <Button asChild size="lg" className="bg-coral-500 hover:bg-coral-600 text-white">
                <Link href="/precios" className="inline-flex items-center gap-2">
                  Ver Comparación de Precios
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </Button>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-4 w-full max-w-md">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600 mb-1">Limpieza</div>
                <div className="text-2xl font-bold text-gray-900">$65-$95</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600 mb-1">Implante</div>
                <div className="text-2xl font-bold text-gray-900">$1,200-$2,500</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600 mb-1">Blanqueamiento</div>
                <div className="text-2xl font-bold text-gray-900">$300-$600</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600 mb-1">Corona</div>
                <div className="text-2xl font-bold text-gray-900">$800-$1,500</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* For Dentists CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-teal-600">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
            ¿Eres Dentista en Miami?
          </h2>
          <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
            Únete a DentistasMiami y conecta con miles de pacientes buscando atención dental de calidad.
          </p>
          <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-50">
            <Link href="/contacto">
              Anuncia Tu Clínica Gratis
            </Link>
          </Button>
        </Container>
      </section>
    </main>
  );
}