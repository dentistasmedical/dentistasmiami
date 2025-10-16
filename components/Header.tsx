'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isVecindarioOpen, setIsVecindarioOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const vecindarios = [
    { name: 'Hialeah', href: '/dentistas-en-hialeah' },
    { name: 'Kendall', href: '/dentistas-en-kendall' },
    { name: 'Westchester', href: '/dentistas-en-westchester' },
    { name: 'Doral', href: '/dentistas-en-doral' },
    { name: 'Sweetwater', href: '/dentistas-en-sweetwater' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold font-poppins text-coral-600">
                Dentistas<span className="text-teal-600">Miami</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-coral-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Inicio
              </Link>
              
              <Link
                href="/dentistas"
                className="text-gray-700 hover:text-coral-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Dentistas
              </Link>
              
              <Link
                href="/precios"
                className="text-gray-700 hover:text-coral-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Precios
              </Link>

              {/* Vecindarios Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsVecindarioOpen(!isVecindarioOpen)}
                  onMouseEnter={() => setIsVecindarioOpen(true)}
                  className="text-gray-700 hover:text-coral-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  Vecindarios
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </button>

                {isVecindarioOpen && (
                  <div
                    className="absolute z-50 mt-1 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                    onMouseLeave={() => setIsVecindarioOpen(false)}
                  >
                    <div className="py-1">
                      {vecindarios.map((vecindario) => (
                        <Link
                          key={vecindario.name}
                          href={vecindario.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-coral-50 hover:text-coral-600 transition-colors duration-200"
                        >
                          {vecindario.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                className="text-gray-700 hover:text-coral-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/dentistas"
              className="bg-coral-600 hover:bg-coral-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Encuentra tu Dentista
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-coral-600 p-2"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-coral-600 hover:bg-coral-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              
              <Link
                href="/dentistas"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-coral-600 hover:bg-coral-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dentistas
              </Link>
              
              <Link
                href="/precios"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-coral-600 hover:bg-coral-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Precios
              </Link>

              {/* Mobile Vecindarios */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-500 mb-2">Vecindarios</div>
                {vecindarios.map((vecindario) => (
                  <Link
                    key={vecindario.name}
                    href={vecindario.href}
                    className="block px-3 py-1 text-sm text-gray-700 hover:text-coral-600 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {vecindario.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/blog"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-coral-600 hover:bg-coral-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>

              {/* Mobile CTA */}
              <div className="px-3 pt-4">
                <Link
                  href="/dentistas"
                  className="block w-full text-center bg-coral-600 hover:bg-coral-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Encuentra tu Dentista
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;