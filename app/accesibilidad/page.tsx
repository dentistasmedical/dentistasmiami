import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accesibilidad | DentistasMiami',
  description: 'Compromiso de accesibilidad web de DentistasMiami.com',
};

export default function AccesibilityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-100 to-teal-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Declaración de Accesibilidad
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Comprometidos con hacer nuestro sitio accesible para todos
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Última actualización: Octubre 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Nuestro Compromiso
              </h2>
              <p className="mb-4">
                DentistasMiami.com está comprometido con hacer que nuestro sitio web 
                sea accesible para todas las personas, incluyendo aquellas con discapacidades.
              </p>
              <div className="bg-teal-50 rounded-lg p-6">
                <p className="font-semibold text-teal-900 mb-2">
                  Nos esforzamos por cumplir con los estándares WCAG 2.1 nivel AA
                </p>
                <p className="text-gray-700">
                  Trabajamos continuamente para mejorar la experiencia de todos nuestros usuarios.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Características de Accesibilidad
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">✓ Navegación con teclado</p>
                  <p className="text-sm text-gray-600">Compatible con navegación usando solo el teclado</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">✓ Texto alternativo</p>
                  <p className="text-sm text-gray-600">Descripciones para imágenes importantes</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">✓ Contraste de color</p>
                  <p className="text-sm text-gray-600">Colores con contraste adecuado para legibilidad</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">✓ Estructura semántica</p>
                  <p className="text-sm text-gray-600">Encabezados y etiquetas organizados lógicamente</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">✓ Formularios claros</p>
                  <p className="text-sm text-gray-600">Etiquetas descriptivas en todos los campos</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">✓ Diseño responsive</p>
                  <p className="text-sm text-gray-600">Funciona en todos los dispositivos y tamaños</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Nuestros Esfuerzos de Accesibilidad
              </h2>
              <p className="mb-4">
                Estamos trabajando para asegurar que nuestro sitio sea compatible con:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 text-xl">•</span>
                  <span><strong>Lectores de pantalla</strong> (JAWS, NVDA, VoiceOver)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 text-xl">•</span>
                  <span><strong>Navegación por teclado</strong> para usuarios que no pueden usar un mouse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 text-xl">•</span>
                  <span><strong>Software de reconocimiento de voz</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 text-xl">•</span>
                  <span><strong>Ampliadores de pantalla</strong> y herramientas de zoom</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600 bg-teal-50 p-4 rounded">
                Si experimenta problemas de accesibilidad, por favor contáctenos 
                para que podamos mejorar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Mejora Continua
              </h2>
              <p>
                Trabajamos continuamente para mejorar la accesibilidad de nuestro sitio 
                a través de pruebas regulares, actualizaciones y feedback de usuarios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Reportar Problemas
              </h2>
              <div className="bg-coral-50 rounded-lg p-6">
                <p className="font-semibold text-gray-900 mb-4">
                  Si experimenta dificultades para acceder a cualquier contenido en este sitio, 
                  o tiene sugerencias sobre cómo podemos mejorar la accesibilidad, contáctenos:
                </p>
                <div className="bg-white rounded p-4">
                  <p className="text-sm text-gray-600 mb-2">Email:</p>
                  <a 
                    href="mailto:contacto@dentistasmiami.com?subject=Problema de Accesibilidad" 
                    className="text-teal-600 hover:text-teal-700 font-medium text-lg"
                  >
                    contacto@dentistasmiami.com
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Por favor describa el problema que encontró y, si es posible, 
                  incluya su navegador y tecnología de asistencia que está usando.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}