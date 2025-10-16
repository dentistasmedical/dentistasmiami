import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '¿Cuánto Cuesta el Dentista en Miami? | Precios 2025 - DentistasMiami',
  description: 'Guía completa de precios dentales en Miami. Compara costos de limpiezas, implantes, coronas y más. Precios transparentes sin sorpresas.',
};

// Price data for common dental procedures
const dentalPrices = [
  {
    service: 'Limpieza Dental',
    priceRange: '$65 - $150',
    average: '$95',
    description: 'Limpieza profesional y examen de rutina',
    factors: ['Con o sin rayos X', 'Severidad de acumulación', 'Ubicación de la clínica'],
  },
  {
    service: 'Implante Dental',
    priceRange: '$1,200 - $3,500',
    average: '$2,000',
    description: 'Por implante individual (incluye corona)',
    factors: ['Marca del implante', 'Material de la corona', 'Complejidad del caso'],
  },
  {
    service: 'Corona Dental',
    priceRange: '$800 - $2,000',
    average: '$1,200',
    description: 'Restauración completa del diente',
    factors: ['Material (porcelana, metal, zirconio)', 'Ubicación del diente', 'Laboratorio dental'],
  },
  {
    service: 'Blanqueamiento Dental',
    priceRange: '$300 - $800',
    average: '$500',
    description: 'Procedimiento profesional en consultorio',
    factors: ['Método usado', 'Número de sesiones', 'Marca del producto'],
  },
  {
    service: 'Extracción Simple',
    priceRange: '$75 - $300',
    average: '$150',
    description: 'Extracción de diente sin complicaciones',
    factors: ['Dificultad de extracción', 'Ubicación del diente', 'Anestesia requerida'],
  },
  {
    service: 'Extracción de Muela del Juicio',
    priceRange: '$200 - $600',
    average: '$350',
    description: 'Por muela, varía según complejidad',
    factors: ['Impactada o no', 'Sedación requerida', 'Complicaciones'],
  },
  {
    service: 'Ortodoncia (Brackets)',
    priceRange: '$3,000 - $7,000',
    average: '$5,000',
    description: 'Tratamiento completo (18-24 meses)',
    factors: ['Duración del tratamiento', 'Tipo de brackets', 'Plan de pago'],
  },
  {
    service: 'Invisalign',
    priceRange: '$3,500 - $8,000',
    average: '$5,500',
    description: 'Tratamiento completo con alineadores',
    factors: ['Complejidad del caso', 'Número de alineadores', 'Duración'],
  },
  {
    service: 'Endodoncia (Root Canal)',
    priceRange: '$500 - $1,500',
    average: '$900',
    description: 'Tratamiento de conducto',
    factors: ['Número de raíces', 'Ubicación del diente', 'Especialista o dentista general'],
  },
  {
    service: 'Relleno (Empaste)',
    priceRange: '$150 - $450',
    average: '$250',
    description: 'Relleno de cavidad',
    factors: ['Material (amalgama o composite)', 'Tamaño de la cavidad', 'Ubicación'],
  },
  {
    service: 'Carillas de Porcelana',
    priceRange: '$800 - $2,500',
    average: '$1,500',
    description: 'Por diente',
    factors: ['Calidad de porcelana', 'Número de carillas', 'Laboratorio'],
  },
  {
    service: 'Dentadura Completa',
    priceRange: '$1,200 - $4,000',
    average: '$2,500',
    description: 'Dentadura superior o inferior',
    factors: ['Material', 'Personalización', 'Ajustes incluidos'],
  },
];

export default function PreciosPage() {
  return (
    <main>
      {/* JSON-LD: BreadcrumbList */}
      {(() => {
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dentistasmiami.com';
        const breadcrumb = {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: siteUrl,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Precios',
              item: `${siteUrl}/precios`,
            },
          ],
        } as const;
        return (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
          />
        );
      })()}
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coral-700 via-coral-600 to-teal-700 py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Precios Dentales en Miami
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95">
              Compara costos y toma decisiones informadas sobre tu salud dental
            </p>
            <p className="text-lg text-white/90">
              Última actualización: Enero 2025
            </p>
          </div>
        </Container>
      </section>

      {/* Price Table */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10">
              <h2 className="text-lg font-bold text-blue-900 mb-2">
                💡 Nota Importante
              </h2>
              <p className="text-blue-800">
                Los precios mostrados son promedios aproximados en Miami. Los costos reales pueden variar según el dentista, 
                tu seguro dental, y la complejidad de tu caso. Siempre solicita un presupuesto detallado antes del tratamiento.
              </p>
            </div>

            <div className="space-y-6">
              {dentalPrices.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.service}
                      </h3>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-1">Rango de precio</div>
                      <div className="text-2xl font-bold text-coral-600 mb-1">
                        {item.priceRange}
                      </div>
                      <div className="text-sm text-gray-600">
                        Promedio: <span className="font-semibold">{item.average}</span>
                      </div>
                    </div>
                  </div>

                  {/* Factors */}
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Factores que afectan el precio:
                    </p>
                    <ul className="grid md:grid-cols-3 gap-2">
                      {item.factors.map((factor, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-teal-500 mt-0.5">•</span>
                          <span>{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Insurance Section */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ¿Tienes Seguro Dental?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Con Seguro Dental
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">✓</span>
                    <span>Limpiezas preventivas 100% cubiertas (2x año)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">✓</span>
                    <span>Procedimientos básicos: 70-80% cubiertos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">✓</span>
                    <span>Procedimientos mayores: 50% cubiertos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">✓</span>
                    <span>Verifica dentistas en tu red</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Sin Seguro Dental
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-coral-500 mt-1">•</span>
                    <span>Pregunta por planes de pago</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-coral-500 mt-1">•</span>
                    <span>Busca clínicas con descuentos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-coral-500 mt-1">•</span>
                    <span>Considera Medicaid (si calificas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-coral-500 mt-1">•</span>
                    <span>Escuelas dentales ofrecen servicios reducidos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Tips Section */}
      <section className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Consejos para Ahorrar en Servicios Dentales
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-teal-900 mb-3">
                  1. Compara Precios
                </h3>
                <p className="text-teal-800">
                  Llama a varios dentistas y pregunta por precios específicos. Los costos pueden variar 50% o más entre clínicas.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-teal-900 mb-3">
                  2. Pregunta por Descuentos
                </h3>
                <p className="text-teal-800">
                  Muchas clínicas ofrecen descuentos por pago en efectivo, paquetes familiares, o para nuevos pacientes.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-teal-900 mb-3">
                  3. Mantén Prevención
                </h3>
                <p className="text-teal-800">
                  Las limpiezas regulares ($65-95) previenen tratamientos costosos como endodoncias ($900) o coronas ($1,200).
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-teal-900 mb-3">
                  4. Planes de Financiamiento
                </h3>
                <p className="text-teal-800">
                  Pregunta por CareCredit u otras opciones de financiamiento sin intereses para tratamientos mayores.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-coral-500 to-coral-600">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              ¿Listo para Encontrar tu Dentista?
            </h2>
            <p className="text-xl mb-8 text-white/95">
              Compara dentistas en Miami, lee opiniones reales, y agenda tu cita hoy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-coral-600 hover:bg-gray-50">
                <Link href="/dentistas">
                  Ver Todos los Dentistas
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                <Link href="/vecindarios">
                  Buscar por Vecindario
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ¿Por qué varían tanto los precios dentales en Miami?
                </h3>
                <p className="text-gray-700">
                  Los precios varían según la ubicación de la clínica, experiencia del dentista, tecnología utilizada, 
                  y costos operativos. Clínicas en áreas como Brickell o Coral Gables tienden a ser más costosas que en Hialeah o Kendall.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ¿Aceptan planes de pago?
                </h3>
                <p className="text-gray-700">
                  La mayoría de dentistas en Miami ofrecen opciones de financiamiento, especialmente para tratamientos costosos 
                  como implantes u ortodoncia. Pregunta por CareCredit, planes internos, o financiamiento a través de LendingClub.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ¿Qué incluye una limpieza dental?
                </h3>
                <p className="text-gray-700">
                  Una limpieza típica incluye: examen visual, remoción de placa y sarro, pulido de dientes, y aplicación de flúor. 
                  Los rayos X pueden tener costo adicional ($25-50) si no están incluidos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ¿Los dentistas en Miami aceptan Medicaid?
                </h3>
                <p className="text-gray-700">
                  Algunos dentistas aceptan Medicaid, especialmente en áreas como Hialeah, Kendall, y Sweetwater. 
                  Usa nuestro buscador con el filtro "Acepta Medicaid" para encontrarlos fácilmente.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}