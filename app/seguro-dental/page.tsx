import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Seguro Dental en Miami | DentistasMiami',
  description: 'Información sobre seguro dental, Medicaid, y opciones de pago para servicios dentales en Miami',
};

export default function SeguroDentalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-100 to-teal-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Guía de Seguro Dental en Miami
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Información sobre seguro dental, Medicaid, y opciones de pago
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
        
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-sm">
              <strong>Nota importante:</strong> Esta información es solo con fines educativos. 
              Siempre verifique la cobertura directamente con su proveedor de seguro y el consultorio dental.
            </p>
          </div>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Tipos de Seguro Dental
              </h2>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Seguro Privado</h3>
                  <p>
                    Planes ofrecidos por empleadores o comprados individualmente. 
                    Ejemplos comunes incluyen Delta Dental, MetLife, Cigna, Aetna.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Medicaid (Florida)</h3>
                  <p>
                    Cobertura dental para personas elegibles de bajos ingresos. 
                    La cobertura para adultos es limitada; más amplia para niños menores de 21 años.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Medicare</h3>
                  <p>
                    Medicare tradicional generalmente NO cubre atención dental de rutina. 
                    Algunos planes Medicare Advantage pueden incluir beneficios dentales.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Encontrar Dentistas que Aceptan su Seguro
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Identifique su compañía de seguro y número de plan</li>
                <li>Llame al consultorio dental antes de su cita</li>
                <li>Pregunte específicamente si aceptan su plan</li>
                <li>Verifique si hay restricciones o limitaciones</li>
                <li>Solicite un estimado de su costo de bolsillo</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Opciones Sin Seguro
              </h2>
              <p className="mb-4">
                Si no tiene seguro dental, considere estas alternativas:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Planes de descuento dental:</strong> Membresías anuales que ofrecen 
                  descuentos en servicios (no son seguros)
                </li>
                <li>
                  <strong>Planes de pago:</strong> Muchos consultorios ofrecen financiamiento 
                  a través de CareCredit u otros proveedores
                </li>
                <li>
                  <strong>Clínicas comunitarias:</strong> Centros de salud federalmente calificados 
                  (FQHC) ofrecen servicios a escala móvil
                </li>
                <li>
                  <strong>Escuelas de odontología:</strong> Servicios a menor costo realizados 
                  por estudiantes bajo supervisión
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Preguntas para Hacer al Dentista
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>✓ ¿Aceptan mi seguro específico?</li>
                  <li>✓ ¿Cuál será mi costo estimado de bolsillo?</li>
                  <li>✓ ¿Ofrecen planes de pago?</li>
                  <li>✓ ¿Aceptan CareCredit u otro financiamiento?</li>
                  <li>✓ ¿Hay descuentos por pago en efectivo?</li>
                  <li>✓ ¿Presentan los reclamos al seguro?</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Recursos Adicionales
              </h2>
              <ul className="space-y-2">
                <li>
                  <strong>Florida Medicaid:</strong>{' '}
                  <a 
                    href="https://www.myflfamilies.com/service-programs/access-florida/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline"
                  >
                    myflfamilies.com
                  </a>
                </li>
                <li>
                  <strong>Departamento de Salud de Florida:</strong>{' '}
                  <a 
                    href="https://www.floridahealth.gov/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline"
                  >
                    floridahealth.gov
                  </a>
                </li>
              </ul>
            </section>

            <div className="mt-8 p-6 bg-teal-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">¿Listo para encontrar un dentista?</h3>
              <p className="mb-4">
                Use nuestro directorio para encontrar dentistas en su área de Miami.
              </p>
              <Link 
                href="/dentistas" 
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
              >
                Ver Dentistas en Miami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}