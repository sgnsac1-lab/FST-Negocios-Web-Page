import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import iso9001 from '../Assets/ISO-9001.pdf'
import iso14001 from '../Assets/Iso-14001.pdf'
import iso45001 from '../Assets/ISO-45001.pdf'

const Certifications = () => {

  // Iniciamos como null porque al cargar no hay ningún PDF seleccionado
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <section className='flex flex-col md:flex-row justify-center items-center gap-5 w-full p-5 md:h-180'>
      
      <div className="flex flex-col md:w-200">
        <div className="h-100 group bg-white rounded-3xl p-5 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center">
          
          {/* Icon / Badge */}
          <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
            <FontAwesomeIcon icon={faFilePdf} className='text-blue-700 text-3xl'/>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-2">ISO 9001</h3>
          <p className="text-slate-500 text-sm mb-6">
            Certificación internacional que avala nuestra capacidad para proporcionar productos y servicios que cumplen con los requisitos de nuestros clientes y la normativa vigente, enfocándonos en la mejora continua y la satisfacción del usuario.
          </p>

          <div className="w-full pt-6 border-t border-slate-50">
            {/* 2. Botón que activa el modal */}
            <button 
              onClick={() => setSelectedPdf(iso9001)}
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors"
            >
              <i className="fas fa-eye text-xs"></i>
              <span>Ver PDF</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:w-200">
        <div className="h-100 group bg-white rounded-3xl p-5 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center">
          
          {/* Icon / Badge */}
          <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
            <FontAwesomeIcon icon={faFilePdf} className='text-blue-700 text-3xl'/>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-2">ISO 14001</h3>
          <p className="text-slate-500 text-sm mb-6">
            Certificación que avala nuestra eficiencia y sostenibilidad operativa en la transformación digital de organizaciones. Garantizamos que el diagnóstico estratégico y la implementación de soluciones tecnológicas para la automatización de procesos se ejecuten bajo un modelo de gestión responsable, optimizando recursos y asegurando la mejora continua de nuestros procesos.
          </p>

          <div className="w-full pt-6 border-t border-slate-50">
            {/* 2. Botón que activa el modal */}
            <button 
              onClick={() => setSelectedPdf(iso14001)}
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors"
            >
              <i className="fas fa-eye text-xs"></i>
              <span>Ver PDF</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:w-200">
        <div className="h-100 group bg-white rounded-3xl p-5 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center">
          
          {/* Icon / Badge */}
          <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
            <FontAwesomeIcon icon={faFilePdf} className='text-blue-700 text-3xl'/>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-2">ISO 45001</h3>
          <p className="text-slate-500 text-sm mb-6">
            Estándar global que certifica nuestro Sistema de Gestión de la Seguridad y Salud en el Trabajo. Garantiza que mantenemos entornos laborales seguros, priorizando la prevención de riesgos y el bienestar físico y mental de todo nuestro equipo de especialistas.
          </p>

          <div className="w-full pt-6 border-t border-slate-50">
            {/* 2. Botón que activa el modal */}
            <button 
              onClick={() => setSelectedPdf(iso45001)}
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors"
            >
              <i className="fas fa-eye text-xs"></i>
              <span>Ver PDF</span>
            </button>
          </div>
        </div>
      </div>





      {/* 3. El MODAL (Solo se renderiza si showModal es true) */}
      {selectedPdf && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative bg-white w-full max-w-5xl h-[90vh] rounded-2xl overflow-hidden flex flex-col">
            
            {/* Cabecera del Modal */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold text-slate-800">Vista Previa:</h3>
              <button 
                onClick={() => setSelectedPdf(null)}
                className="text-slate-500 hover:text-red-500 transition-colors"
              >
                <FontAwesomeIcon icon={faTimesCircle} size="lg" />
              </button>
            </div>

            {/* Cuerpo del Modal con el iframe */}
            <div className="flex grow">
              <iframe 
                src={`${selectedPdf}#toolbar=0`} 
                width="100%" 
                height="100%" 
                style={{ border: "none" }}
                title="PDF Preview"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certifications