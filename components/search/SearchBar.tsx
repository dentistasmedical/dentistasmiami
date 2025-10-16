'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export function SearchBar({ 
  placeholder = "Vecindario, servicio o nombre del dentista...", 
  onSearch,
  className = '' 
}: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    } else {
      // Default: navigate to search page
      window.location.href = `/dentistas?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="bg-white rounded-lg shadow-2xl p-2 flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-4 py-3 text-gray-900 text-base md:text-lg focus:outline-none"
        />
        <Button 
          type="submit"
          className="bg-coral-500 hover:bg-coral-600 text-white px-6 md:px-8 py-3 rounded-md font-semibold transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <span className="hidden md:inline">Buscar</span>
        </Button>
      </div>
    </form>
  );
}