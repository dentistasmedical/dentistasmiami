'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo className="scale-90" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link 
              href="/dentistas" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Buscar
            </Link>
            <Link 
              href="/precios" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Precios
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Recursos
            </Link>
            <Button 
              asChild 
              variant="ghost"
              className="bg-gray-100 hover:bg-gray-200 text-gray-900"
            >
              <Link href="/contacto">Anunciar Clínica</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/dentistas" 
                className="text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Buscar
              </Link>
              <Link 
                href="/precios" 
                className="text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Precios
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Recursos
              </Link>
              <Button 
                asChild 
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 w-full"
              >
                <Link href="/contacto">Anunciar Clínica</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}