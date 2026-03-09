import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faRibbon, faTrophy, faAward, faStar } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import iso9001 from '../Assets/ISO-9001.pdf'
import iso14001 from '../Assets/Iso-14001.pdf'
import iso45001 from '../Assets/ISO-45001.pdf'
import InfoCard from "./InfoCard"

const Acreditattions = () => {

    const [selectedPdf, setSelectedPdf] = useState(null)

    const cardsData = [
        {
            icon: faMedal,
            verifierName: "Ministerio de la Producción",
            badgeTitle: "ACREDITACION ADHESION",
            mainTitle: "Centro de Transformación Digital",
            description: "Comprometidos con los estandares más altos del Ministerio de la Produccion para el desarrollo empresarial.",
            type: 'link',
            url: "https://www.gob.pe/institucion/produce/normas-legales/7490544-00011-2025-produce-dgitdf"
        },
        {
            icon: faMedal,
            verifierName: "PCM",
            badgeTitle: "ACREDITACION RED DE ACELERADORAS",
            mainTitle: "Red de Aceleradoras de la PCM",
            description: "Comprometidos con los estandares mas altos de la PCM para el desarrollo empresarial",
            type: 'link',
            url: "https://www.gob.pe/29832-fst-negocios"
        },
        {
            icon: faFilePdf,
            verifierName: "ISO",
            badgeTitle: "CERTIFICACIÓN DE CALIDAD",
            mainTitle: "Norma ISO 9001:2015",
            description: "Certificación internacional que garantiza productos y servicios alineados con la normativa vigente y las necesidades del cliente.",
            type: 'pdf',
            file: iso9001
        },
        {
            icon: faFilePdf,
            verifierName: "ISO",
            badgeTitle: "CERTIFICACIÓN DE CALIDAD",
            mainTitle: "Norma ISO 14001:2015",
            description: "Certificación en transformación digital sostenible que garantiza procesos automatizados, responsables y en mejora continua.",
            type: 'pdf',
            file: iso14001
        },
        {
            icon: faFilePdf,
            verifierName: "ISO",
            badgeTitle: "CERTIFICACIÓN DE CALIDAD",
            mainTitle: "Norma ISO 45001:2018",
            description: "Estándar global que certifica nuestro Sistema de Gestión de Seguridad y Salud en el Trabajo.",
            type: 'pdf',
            file: iso45001
        }
    ];

    // 2. DUPLICAMOS LOS DATOS para el efecto infinito
    const infiniteCards = [...cardsData, ...cardsData]

    const scrollRef = useRef(null);
    const positionRef = useRef(0);
    const requestRef = useRef(null);
    
    // targetSpeed es a la velocidad que QUEREMOS ir
    const [targetSpeed, setTargetSpeed] = useState(1); 
    // currentSpeed es la velocidad real actual (para el efecto de aceleración suave)
    const currentSpeed = useRef(1);

    useEffect(() => {
    // Definimos la función ADENTRO para que useEffect tenga acceso total
    const animate = () => {
        if (!scrollRef.current) return;

        // Aceleración suave
        currentSpeed.current += (targetSpeed - currentSpeed.current) * 0.05;
        positionRef.current -= currentSpeed.current;

        const halfWidth = scrollRef.current.scrollWidth / 2;
        if (Math.abs(positionRef.current) >= halfWidth) {
            positionRef.current = 0;
        }

        scrollRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
        
        requestRef.current = requestAnimationFrame(animate);
    };

    // Iniciamos la animación
    requestRef.current = requestAnimationFrame(animate);
    
    // Limpiamos al desmontar o cambiar velocidad
    return () => {
        if (requestRef.current) {
            cancelAnimationFrame(requestRef.current);
        }
    };
    }, [targetSpeed]);
    
    return(
        <section className="relative flex flex-col justify-center items-center w-full overflow-x-hidden bg-slate-900 gap-8 pt-5 mt-30">

                <div>
                    {/* Trofeo */}
                    <div className="absolute top-20 left-[10%] text-yellow-500/20 text-6xl rotate-12 animate-bounce transition-all duration-1000" style={{ animationDuration: '3s' }}>
                        <FontAwesomeIcon icon={faTrophy} />
                    </div>

                    {/* Premio / Award */}
                    <div className="absolute bottom-20 right-[15%] text-blue-400/20 text-5xl -rotate-12 animate-bounce transition-all duration-1000" style={{ animationDuration: '4s' }}>
                        <FontAwesomeIcon icon={faAward} />
                    </div>

                    {/* Estrella */}
                    <div className="absolute top-1/2 right-[5%] text-yellow-300/10 text-4xl animate-pulse">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>

            <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 text-blue-400 font-bold tracking-widest text-xs uppercase border border-blue-500/20 mb-4">
                Excelencia Certificada
            </span>
            <h1 className="font-bold md:text-5xl text-center text-3xl w-50 md:w-full text-white">Nuestras <span className='text-blue-500'>Acreditaciones</span> y <span className='text-blue-500'>Certificaciones</span> Oficiales</h1>
            <p className="md:w-130 w-50 text-center text-slate-400">Respaldo institucional que garantiza la calidad y seguridad de nuestros servicios de consultoria estrategica.</p>

            
            {/* Contenedor del Carrusel Infinito */}
            <div className="relative w-full overflow-hidden">
                {/* Gradientes laterales para suavizar la entrada y salida */}
                <div className="absolute inset-y-0 left-0 md:w-64 bg-linear-to-r from-slate-900 to-transparent z-20 pointer-events-none hidden md:block"></div>
                <div className="absolute inset-y-0 right-0 md:w-64 bg-linear-to-l from-slate-900 to-transparent z-20 pointer-events-none hidden md:block"></div>

                {/* ZONAS DE INTERACCIÓN */}
                {/* ZONA DE ACELERACIÓN (Derecha) */}
                <div 
                    className="absolute inset-y-0 right-0 w-20 z-50 cursor-pointer"
                    onMouseEnter={() => setTargetSpeed(8)} // ¡Súper rápido!
                    onMouseLeave={() => setTargetSpeed(1)} // Vuelve a la normalidad
                />

                {/* Track de animación */}
                <div 
                ref={scrollRef}
                className="flex gap-7 py-10"
                style={{ width: 'max-content', willChange: 'transform' }}>

                {/* Tarjetas */}
                    {infiniteCards.map((card, index) => (
                        <InfoCard 
                            key={index} // Importante para React
                            icon={card.icon}
                            verifierName={card.verifierName}
                            badgeTitle={card.badgeTitle}
                            mainTitle={card.mainTitle}
                            description={card.description}
                            footerAction={
                                card.type === 'link' ? (
                                    <a 
                                        href={card.url}
                                        target='_blank'
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-3 bg-white/5 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 w-full justify-center border border-white/10 hover:border-blue-500 shadow-lg group/link"
                                    >
                                        <span>Ver perfil oficial</span>
                                        <i className="fas fa-arrow-right text-xs transition-transform group-hover/link:translate-x-1"></i>
                                    </a>
                                ) : (
                                    <button 
                                        onClick={() => setSelectedPdf(card.file)}
                                        className="inline-flex items-center gap-3 bg-white/5 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 w-full justify-center border border-white/10 hover:border-blue-500 shadow-lg group/link"
                                    >
                                        <i className="fas fa-eye text-xs"></i>
                                        <span>Ver PDF</span>
                                    </button>
                                )
                            }
                        />
                    ))}

                </div>
            </div>


            {/* Estilos locales para la animación infinita */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes scroll-acreditaciones {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
                }
                .animate-scroll-acreditaciones {
                display: flex;
                width: max-content; /* Esto está bien, pero el padre debe ser overflow-hidden */
                animation: scroll-acreditaciones 70s linear infinite ;
                }
                /* Agregamos esto para asegurar que no haya scroll lateral en el body */
                :global(body) {
                overflow-x: hidden;
                position: relative;
                width: 100%;
                }
            `}} />

      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl mr-4 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faRibbon} />
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

export default Acreditattions