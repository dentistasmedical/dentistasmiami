import Image from 'next/image';
import Link from 'next/link';

interface DentistCardProps {
  id: string;
  name: string;
  slug: string;
  neighborhood: string;
  address: string;
  phone?: string;
  image?: string;
  rating?: number;
  reviewCount?: number;
}

export function DentistCard({
  id,
  name,
  slug,
  neighborhood,
  address,
  phone,
  image,
  rating,
  reviewCount,
}: DentistCardProps) {
  // Create Schema.org structured data for Google
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address,
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    ...(phone && { "telephone": phone }),
    ...(rating && reviewCount && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": rating.toString(),
        "reviewCount": reviewCount.toString()
      }
    }),
    ...(image && { "image": image })
  };

  return (
    <div>
      {/* Schema.org JSON-LD - Hidden from users, visible to Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Visual Card that users see */}
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
        {/* Dentist Image */}
        {image && (
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={image}
              alt={`${name} - Dentista en ${neighborhood}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        <div className="space-y-3">
          {/* Dentist Name */}
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
            {name}
          </h3>

          {/* Star Rating */}
          {rating && reviewCount && (
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="ml-1 font-semibold text-gray-900">
                  {rating.toFixed(1)}
                </span>
              </div>
              <span className="text-sm text-gray-600">
                ({reviewCount} reseñas)
              </span>
            </div>
          )}

          {/* Location */}
          <div className="flex items-start gap-2 text-gray-600">
            <svg 
              className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
            <div>
              <p className="font-medium text-gray-900">{neighborhood}</p>
              <p className="text-sm">{address}</p>
            </div>
          </div>

          {/* Phone Number */}
          {phone && (
            <div className="flex items-center gap-2 text-gray-600">
              <svg 
                className="w-5 h-5 text-teal-600 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
              <a 
                href={`tel:${phone}`}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                {phone}
              </a>
            </div>
          )}

          {/* View Profile Button */}
          <Link
            href={`/dentistas/${slug}`}
            className="block w-full mt-4 bg-teal-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
          >
            Ver Perfil
          </Link>
        </div>
      </div>
    </div>
  );
}