import { DentistCard } from '@/components/DentistCard';
import NeighborhoodFilter from '@/components/NeighborhoodFilter';
import DOMPurify from 'dompurify';

// Enable ISR - revalidate every 6 hours
export const revalidate = 21600;

const NEIGHBORHOODS = [
  'Hialeah',
  'Kendall', 
  'Doral',
  'Brickell',
  'Coral Gables',
  'Little Havana',
  'Sweetwater',
  'Westchester',
];

// Server-side data fetching
async function getDentists(neighborhood?: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = neighborhood 
    ? `${baseUrl}/api/dentists?neighborhood=${neighborhood}`
    : `${baseUrl}/api/dentists`;
  
  const res = await fetch(url, {
    next: { revalidate: 21600 } // 6 hours
  });
  
  if (!res.ok) {
    console.error('Failed to fetch dentists');
    return [];
  }
  
  const data = await res.json();
  return data.dentists || [];
}

// Generate ItemList schema for directory page
function generateDirectorySchema(dentists: any[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": dentists.map((dentist, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Dentist",
        "name": dentist.name,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": dentist.address,
          "addressLocality": "Miami",
          "addressRegion": "FL",
          "addressCountry": "US"
        },
        ...(dentist.phone && { "telephone": dentist.phone }),
        ...(dentist.rating && dentist.reviewCount && {
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": dentist.rating.toString(),
            "reviewCount": dentist.reviewCount.toString()
          }
        }),
        ...(dentist.image && { "image": dentist.image })
      }
    }))
  };
}

// Generate BreadcrumbList schema
function generateBreadcrumbSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dentistasmiami.com';
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio (Home)",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Dentistas en Miami",
        "item": `${baseUrl}/dentistas`
      }
    ]
  };
}

export default async function DentistasPage({
  searchParams,
}: {
  searchParams: Promise<{ neighborhood?: string }>;
}) {
  const params = await searchParams;
  const selectedNeighborhood = params.neighborhood;
  const dentists = await getDentists(selectedNeighborhood);
  const directorySchema = generateDirectorySchema(dentists);
  const breadcrumbSchema = generateBreadcrumbSchema();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Schema.org JSON-LD ItemList for directory */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(directorySchema)) }}
      />
      
      {/* Schema.org JSON-LD BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(breadcrumbSchema)) }}
      />

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dentistas en Miami
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Encuentra el dentista perfecto para ti y tu familia en Miami.
          </p>
        </div>
      </div>

      {/* Filters - Client Component */}
      <NeighborhoodFilter 
        neighborhoods={NEIGHBORHOODS}
        selected={selectedNeighborhood}
      />

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-gray-600 mb-8">
          Mostrando <span className="font-semibold">{dentists.length}</span> dentistas
          {selectedNeighborhood && (
            <span> en <span className="font-semibold">{selectedNeighborhood}</span></span>
          )}
        </p>

        {dentists.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dentists.map((dentist: any) => (
              <DentistCard
                key={dentist.id || dentist.name}
                id={dentist.id}  
                name={dentist.name}
                slug={dentist.slug}
                neighborhood={dentist.neighborhood}
                address={dentist.address}
                phone={dentist.phone}
                image={dentist.image}
                rating={dentist.rating}
                reviewCount={dentist.reviewCount}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <p className="text-gray-500 text-lg mb-4">
              No se encontraron dentistas en {selectedNeighborhood || 'esta área'}.
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg shadow-lg p-8 md:p-10 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Eres dentista en Miami?
            </h2>
            <p className="text-teal-100 mb-6 text-lg max-w-2xl mx-auto">
              Destaca tu práctica dental con un perfil premium. Incluye precios, servicios, y aparece primero en los resultados.
            </p>
            <a
              href="/anunciar-clinica"
              className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-bold hover:bg-teal-50 transition-colors shadow-lg"
            >
              Anunciar mi Clínica
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}