import Link from 'next/link';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-sm text-gray-600 max-w-xs">
              Encuentra dentistas en Miami con información de Google Maps. Compara ubicaciones, calificaciones y opiniones.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Buscar</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/dentistas" className="hover:text-teal-600">Todos los Dentistas</Link></li>
              <li><Link href="/vecindarios" className="hover:text-teal-600">Por Vecindario</Link></li>
              <li><Link href="/servicios" className="hover:text-teal-600">Por Servicio</Link></li>
              <li><Link href="/emergencias" className="hover:text-teal-600">Emergencias</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/precios" className="hover:text-teal-600">Guía de Precios</Link></li>
              <li><Link href="/blog" className="hover:text-teal-600">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-teal-600">Preguntas Frecuentes</Link></li>
              <li><Link href="/seguro-dental" className="hover:text-teal-600">Seguro Dental</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Para Dentistas</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/anunciar" className="hover:text-teal-600">Anunciar Clínica</Link></li>
              <li><Link href="/planes" className="hover:text-teal-600">Planes y Precios</Link></li>
              <li><Link href="/contacto" className="hover:text-teal-600">Contacto</Link></li>
              <li><Link href="/terminos" className="hover:text-teal-600">Términos de Servicio</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          {/* Top row: Copyright and links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-sm text-gray-500">
              © 2025 DentistasMiami.com - Todos los derechos reservados
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="/privacidad" className="hover:text-teal-600">Privacidad</Link>
              <Link href="/terminos" className="hover:text-teal-600">Términos</Link>
              <Link href="/accesibilidad" className="hover:text-teal-600">Accesibilidad</Link>
            </div>
          </div>
          
          {/* Disclaimer - separate row, centered, max width */}
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-gray-600 text-center leading-relaxed">
              La información en DentistasMiami.com es solo para fines informativos. No garantizamos la aceptación de seguros ni la disponibilidad de servicios. Verifique directamente con la clínica antes de agendar una cita.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}