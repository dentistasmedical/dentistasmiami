import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos de Servicio | DentistasMiami',
  description: 'Términos y condiciones de uso de DentistasMiami.com',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-100 to-teal-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Términos de Servicio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Por favor lea estos términos cuidadosamente
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
                1. Aceptación de Términos
              </h2>
              <p>
                Al acceder y usar DentistasMiami.com, usted acepta estos términos de servicio. 
                Si no está de acuerdo, no use este sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Uso del Servicio
              </h2>
              <p className="mb-4">
                DentistasMiami.com es un directorio informativo de dentistas en Miami. 
                No somos un proveedor de servicios médicos o dentales.
              </p>
              <div className="bg-teal-50 rounded-lg p-6">
                <ul className="space-y-2">
                  <li>✓ La información es solo con fines informativos</li>
                  <li>✓ No garantizamos la exactitud de toda la información</li>
                  <li>✓ Usted es responsable de verificar información directamente con los proveedores</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Descargo de Responsabilidad Médica
              </h2>
              <div className="bg-coral-50 rounded-lg p-6">
                <p className="font-bold text-coral-800 text-lg mb-3">
                  ⚠️ Este sitio web NO proporciona consejo médico o dental
                </p>
                <p className="text-gray-700">
                  Siempre consulte directamente con un dentista profesional con licencia 
                  para diagnósticos, tratamientos o preguntas sobre su salud dental. 
                  La información en este sitio no debe usarse como sustituto del consejo médico profesional.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Información de Terceros
              </h2>
              <p className="mb-3">
                Los listados de dentistas provienen de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fuentes públicas (como Google Places API)</li>
                <li>Información proporcionada directamente por los dentistas</li>
              </ul>
              <p className="mt-3">
                No verificamos independientemente toda la información. Los usuarios deben 
                confirmar detalles importantes directamente con los proveedores de servicios dentales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Enlaces Externos
              </h2>
              <p>
                Nuestro sitio puede contener enlaces a sitios web de terceros. 
                No somos responsables del contenido, las prácticas de privacidad, 
                o la disponibilidad de esos sitios externos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Limitación de Responsabilidad
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="font-semibold mb-3">
                  DentistasMiami.com no será responsable por:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Daños directos, indirectos, incidentales o consecuentes</li>
                  <li>Pérdida de datos o interrupciones del servicio</li>
                  <li>Calidad de servicios dentales obtenidos a través de este sitio</li>
                  <li>Inexactitudes en la información de terceros</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Uso Aceptable
              </h2>
              <p className="mb-3">Usted acepta NO:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Usar el sitio para propósitos ilegales</li>
                <li>Intentar acceder a áreas restringidas del sitio</li>
                <li>Interferir con el funcionamiento del sitio</li>
                <li>Recopilar información de usuarios sin consentimiento</li>
                <li>Publicar contenido falso o engañoso</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Cambios a los Términos
              </h2>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio. 
                Su uso continuado del sitio después de cambios constituye aceptación de los nuevos términos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Contacto
              </h2>
              <p className="mb-4">
                Si tiene preguntas sobre estos términos:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <a 
                  href="mailto:contacto@dentistasmiami.com" 
                  className="text-teal-600 hover:text-teal-700 font-medium text-lg"
                >
                  contacto@dentistasmiami.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}