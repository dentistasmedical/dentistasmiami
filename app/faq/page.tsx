import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | DentistasMiami',
  description: 'Respuestas a preguntas comunes sobre cómo usar DentistasMiami.com',
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-100 to-teal-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Respuestas a preguntas comunes sobre DentistasMiami
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              ¿Qué es DentistasMiami.com?
            </h2>
            <p className="text-gray-700">
              DentistasMiami.com es un directorio en línea que ayuda a residentes de Miami 
              a encontrar dentistas locales. Proporcionamos información sobre clínicas dentales, 
              servicios, ubicaciones y reseñas.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              ¿Es gratis usar el sitio?
            </h2>
            <p className="text-gray-700">
              Sí, el uso de DentistasMiami.com es completamente gratuito para pacientes. 
              Puede buscar dentistas, leer reseñas y comparar opciones sin costo alguno.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              ¿De dónde viene la información de los dentistas?
            </h2>
            <p className="text-gray-700">
              La información proviene de dos fuentes:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
              <li>Datos públicos de fuentes como Google Places</li>
              <li>Información proporcionada directamente por los dentistas que se registran en nuestro sitio</li>
            </ul>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              ¿Puedo hacer citas a través del sitio?
            </h2>
            <p className="text-gray-700">
              Actualmente, proporcionamos la información de contacto de cada dentista. 
              Deberá contactar directamente al consultorio para hacer una cita.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              ¿Cómo sé si un dentista acepta mi seguro?
            </h2>
            <p className="text-gray-700">
              Recomendamos verificar directamente con el consultorio dental sobre la aceptación 
              de su seguro específico. La información de seguros puede cambiar, por lo que es 
              mejor confirmar antes de su cita.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              ¿Son precisos los precios mostrados?
            </h2>
            <p className="text-gray-700">
              Los precios mostrados son rangos típicos en el área de Miami y son solo para 
              referencia. Los costos reales pueden variar según su situación específica. 
              Siempre solicite una cotización directa del dentista.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              ¿Soy dentista, cómo me registro?
            </h2>
            <p className="text-gray-700 mb-2">
              Si es dentista en Miami y desea registrar su práctica o actualizar su información, 
              contáctenos en:
            </p>
            <a 
              href="mailto:contacto@dentistasmiami.com" 
              className="text-blue-600 hover:underline font-medium"
            >
              contacto@dentistasmiami.com
            </a>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              ¿Cómo se verifican las reseñas?
            </h2>
            <p className="text-gray-700">
              Las reseñas mostradas provienen de Google y otras plataformas públicas de reseñas. 
              No modificamos ni filtramos reseñas de estas fuentes.
            </p>
          </div>

          <div className="pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              ¿Cómo puedo contactarlos?
            </h2>
            <p className="text-gray-700 mb-2">
              Para preguntas, sugerencias o problemas técnicos:
            </p>
            <a 
              href="mailto:contacto@dentistasmiami.com" 
              className="text-blue-600 hover:underline font-medium"
            >
              contacto@dentistasmiami.com
            </a>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>¿No encontró su respuesta?</strong> Envíenos un correo electrónico 
            y le responderemos lo antes posible.
          </p>
        </div>
      </div>
    </div>
  );
}