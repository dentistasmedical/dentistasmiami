import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | DentistasMiami',
  description: 'Política de privacidad de DentistasMiami.com',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-100 to-teal-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Política de Privacidad
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Su privacidad es importante para nosotros
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Última actualización: Octubre 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Información que Recopilamos
              </h2>
              <p className="mb-3">
                DentistasMiami.com recopila información limitada para mejorar su experiencia:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Información de navegación:</strong> Datos sobre cómo usa nuestro sitio (páginas visitadas, tiempo en el sitio)</li>
                <li><strong>Información de contacto:</strong> Si nos contacta voluntariamente (nombre, email)</li>
                <li><strong>Datos de ubicación:</strong> Ubicación general para mostrar dentistas cerca de usted</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Cómo Usamos su Información
              </h2>
              <div className="bg-teal-50 rounded-lg p-6">
                <p className="mb-3">Usamos su información para:</p>
                <ul className="space-y-2">
                  <li>✓ Proporcionar y mejorar nuestros servicios</li>
                  <li>✓ Responder a sus consultas</li>
                  <li>✓ Mostrar dentistas relevantes en su área</li>
                  <li>✓ Analizar el uso del sitio y mejorar la experiencia</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Cookies y Tecnologías Similares
              </h2>
              <p>
                Usamos cookies y tecnologías similares para mejorar su experiencia. 
                Las cookies nos ayudan a recordar sus preferencias y entender cómo usa nuestro sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Compartir Información
              </h2>
              <div className="bg-coral-50 rounded-lg p-6">
                <p className="font-semibold text-coral-800 mb-2">
                  NO vendemos su información personal.
                </p>
                <p className="text-gray-700">
                  Podemos compartir información solo en estas circunstancias:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  <li>Con su consentimiento explícito</li>
                  <li>Con proveedores de servicios que nos ayudan a operar el sitio</li>
                  <li>Cuando sea requerido por ley</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Información de Terceros
              </h2>
              <p>
                Obtenemos información de dentistas de fuentes públicas como Google Places API. 
                No somos responsables de la exactitud de esta información de terceros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Sus Derechos de Privacidad
              </h2>
              <p className="mb-3">Usted tiene derecho a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acceder a la información que tenemos sobre usted</li>
                <li>Solicitar corrección de información inexacta</li>
                <li>Solicitar la eliminación de su información</li>
                <li>Optar por no recibir comunicaciones de marketing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Seguridad de Datos
              </h2>
              <p>
                Tomamos medidas razonables para proteger su información contra acceso no autorizado, 
                alteración o destrucción. Sin embargo, ningún método de transmisión por Internet 
                es 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Cambios a Esta Política
              </h2>
              <p>
                Podemos actualizar esta política de privacidad ocasionalmente. 
                Le notificaremos sobre cambios significativos publicando la nueva política en esta página.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Contáctenos
              </h2>
              <p className="mb-4">
                Si tiene preguntas sobre esta política de privacidad:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="font-semibold text-gray-900 mb-2">Email:</p>
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