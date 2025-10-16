'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface NeighborhoodFilterProps {
  neighborhoods: string[];
  selected?: string;
}

export default function NeighborhoodFilter({ 
  neighborhoods, 
  selected 
}: NeighborhoodFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilter = (neighborhood: string | null) => {
    if (neighborhood) {
      router.push(`/dentistas?neighborhood=${neighborhood.toLowerCase().replace(/\s+/g, '-')}`);
    } else {
      router.push('/dentistas');
    }
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-700 mb-3">
          <span className="font-semibold">Filtrar por vecindario:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {/* All button */}
          <button
            onClick={() => handleFilter(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              !selected
                ? 'bg-teal-600 text-white'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-teal-500'
            }`}
          >
            Todos
          </button>
          
          {/* Neighborhood buttons */}
          {neighborhoods.map((neighborhood) => (
            <button
              key={neighborhood}
              onClick={() => handleFilter(neighborhood)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selected === neighborhood.toLowerCase().replace(/\s+/g, '-')
                  ? 'bg-teal-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-teal-500'
              }`}
            >
              {neighborhood}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}