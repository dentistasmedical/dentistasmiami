import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | DentistasMiami',
  description: 'Contáctenos para preguntas, sugerencias o para registrar su práctica dental',
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-100 to-teal-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contáctenos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            ¿Tiene preguntas o desea registrar su práctica dental?
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-teal-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Para Pacientes
                </h2>
                <p className="text-gray-700 mb-3">
                  ¿Preguntas sobre cómo usar el sitio o encontrar un dentista?
                </p>
                <a 
                  href="mailto:contacto@dentistasmiami.com"
                  className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
                >
                  Enviar Correo
                </a>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Para Dentistas
                </h2>
                <p className="text-gray-700 mb-3">
                  ¿Desea registrar su práctica o actualizar su información?
                </p>
                <a 
                  href="mailto:contacto@dentistasmiami.com?subject=Registro de Práctica Dental"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
                >
                  Registrar Práctica
                </a>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Soporte Técnico
                </h2>
                <p className="text-gray-700 mb-3">
                  ¿Problemas con el sitio web?
                </p>
                <a 
                  href="mailto:contacto@dentistasmiami.com?subject=Soporte Técnico"
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
                >
                  Reportar Problema
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Información de Contacto
              </h3>
              
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-medium text-gray-900 mb-1">Email</p>
                  <a 
                    href="mailto:contacto@dentistasmiami.com"
                    className="text-teal-600 hover:underline"
                  >
                    contacto@dentistasmiami.com
                  </a>
                </div>

                <div>
                  <p className="font-medium text-gray-900 mb-1">Ubicación</p>
                  <p>Miami, Florida</p>
                </div>

                <div>
                  <p className="font-medium text-gray-900 mb-1">Horario de Respuesta</p>
                  <p>Respondemos correos dentro de 1-2 días hábiles</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Preguntas Frecuentes
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Revise nuestra página de FAQ antes de contactarnos - 
                  es posible que su pregunta ya esté respondida.
                </p>
                <a 
                  href="/faq"
                  className="text-teal-600 hover:underline text-sm font-medium"
                >
                  Ver Preguntas Frecuentes →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-teal-50 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            ¿Es Usted Dentista?
          </h3>
          <p className="text-gray-700 mb-4">
            Únase a DentistasMiami.com y llegue a miles de pacientes hispanohablantes 
            que buscan servicios dentales en Miami.
          </p>
          <div className="space-y-2 text-gray-700">
            <p>✓ Aumente su visibilidad en línea</p>
            <p>✓ Conecte con nuevos pacientes</p>
            <p>✓ Perfil verificado y destacado</p>
            <p>✓ Sin compromiso inicial</p>
          </div>
          <a 
            href="mailto:contacto@dentistasmiami.com?subject=Información sobre Listado Premium"
            className="inline-block mt-4 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
          >
            Solicitar Información
          </a>
        </div>
      </div>
    </div>
  );
}