import { faHandHoldingDollar, faLaptopCode, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Services = () => {

    return(

        <section className=" relative flex flex-col w-full justify-center items-center gap-8 mt-30">
                 {/* Fondo Animado inspirado en la imagen de referencia */}
                <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-40 md:opacity-60">
                    {/* Ondas decorativas de fondo */}
                    <svg className="absolute bottom-0 left-0 w-full h-auto" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#f0f7ff" fillOpacity="0.5" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>

                    {/* Sistema de Trayectorias Múltiples */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
                    <defs>
                        <marker id="arrow-blue" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#1e40af" />
                        </marker>
                        <marker id="arrow-cyan" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#06b6d4" />
                        </marker>
                        <marker id="arrow-indigo" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1" />
                        </marker>
                    </defs>
                    
                    {/* LÍNEA 1: Azul - Ascendente Clásica */}
                    <path 
                        d="M-50,550 L150,480 L350,510 L500,400 L650,430 L850,200 L980,40" 
                        fill="none" stroke="#1e40af" strokeWidth="3" strokeDasharray="1500" strokeDashoffset="1500"
                        markerEnd="url(#arrow-blue)" className="animate-draw-line"
                    />
                    <circle cx="150" cy="480" r="4" fill="white" stroke="#1e40af" strokeWidth="2" className="animate-fade-node-1" />
                    <circle cx="500" cy="400" r="4" fill="white" stroke="#1e40af" strokeWidth="2" className="animate-fade-node-2" />
                    <circle cx="850" cy="200" r="4" fill="white" stroke="#1e40af" strokeWidth="2" className="animate-fade-node-3" />

                    {/* LÍNEA 2: Cyan - Descendente y luego Impulso (Empieza arriba) */}
                    <path 
                        d="M1050,100 L800,300 L600,250 L400,450 L200,400 L-50,580" 
                        fill="none" stroke="#06b6d4" strokeWidth="2" strokeDasharray="1500" strokeDashoffset="1500"
                        markerEnd="url(#arrow-cyan)" className="animate-draw-line-reverse"
                    />
                    <circle cx="800" cy="300" r="3" fill="white" stroke="#06b6d4" strokeWidth="2" className="animate-fade-node-2" />
                    <circle cx="400" cy="450" r="3" fill="white" stroke="#06b6d4" strokeWidth="2" className="animate-fade-node-4" />

                    {/* LÍNEA 3: Indigo - Cruzada Suave (Trayectoria Central) */}
                    <path 
                        d="M-50,200 L250,250 L450,150 L750,300 L1050,150" 
                        fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="1500" strokeDashoffset="1500"
                        markerEnd="url(#arrow-indigo)" className="animate-draw-line-slow"
                    />
                    <circle cx="250" cy="250" r="3" fill="white" stroke="#6366f1" strokeWidth="2" className="animate-fade-node-1" />
                    <circle cx="750" cy="300" r="3" fill="white" stroke="#6366f1" strokeWidth="2" className="animate-fade-node-5" />
                    </svg>
                </div>
            

            <div>
                <h2 className="font-bold text-3xl w-50 text-center md:w-full">NUESTROS SERVICIOS</h2>
                <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="flex flex-col md:flex-row md:flex-wrap gap-5">
                <div className="flex flex-col justify-around items-center md:items-start p-8 rounded-[2.5rem] bg-white/70 backdrop-blur-sm border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_50px_rgba(30,64,175,0.1)] transition-all duration-500 group">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
                        <FontAwesomeIcon icon={faHandHoldingDollar} />
                    </div>
                    <h3 className='font-bold text-xl w-50 text-center md:text-left'>Asesorias para  Ganar Fondos del Estado</h3>
                    <p className='w-60 text-center md:text-left'>Apoyamos a personas y empresas a acceder a fondos no reembolsables y financiamiento público.</p>
                    <a href='https://forms.gle/RVhRwD3g5F2VtFPn7' target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white font-black py-4 px-6 rounded-2xl transition-all duration-300 w-full justify-center ">
                    <span>Solicitar Evaluación</span>
                    </a>
                </div>

                <div className="flex flex-col justify-around items-center md:items-start p-8 rounded-[2.5rem] bg-white/70 backdrop-blur-sm border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_50px_rgba(30,64,175,0.1)] transition-all duration-500 group">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
                        <FontAwesomeIcon icon={faLaptopCode} />
                    </div>
                    <h3 className='font-bold text-xl w-50 text-center md:text-left'>Transformacion Digital</h3>
                    <p className='w-60 text-center md:text-left'>Proyectos estrategicos para modernizar tu negocio mediante tecnologia de vanguardia.</p>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSfF9F80OUCMsTj3F58DEWOrTzcONomFvuYZ7WeOIy1nUel6AQ/viewform' target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white font-black py-4 px-6 rounded-2xl transition-all duration-300 w-full justify-center">
                    <span>Solicitar Evaluación</span>
                    </a>
                </div>

                <div className="flex flex-col justify-around items-center md:items-start p-8 rounded-[2.5rem] bg-white/70 backdrop-blur-sm border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_50px_rgba(30,64,175,0.1)] transition-all duration-500 group">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
                        <FontAwesomeIcon icon={faLightbulb} />
                    </div>
                    <h3 className='font-bold text-xl w-50 text-center md:text-left'>Proyectos de Innovación</h3>
                    <p className='w-60 text-center md:text-left'>Desarrollo de nuevas ideas y soluciones disruptivas para ganar competitividad en el mercado.</p>
                    <a href='https://forms.gle/RVhRwD3g5F2VtFPn7' target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white font-black py-4 px-6 rounded-2xl transition-all duration-300 w-full justify-center">
                    <span>Solicitar Evaluación</span>
                    </a>
                </div>
            
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
        @keyframes draw-line {
          0% { stroke-dashoffset: 1500; opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes draw-line-rev {
          0% { stroke-dashoffset: -1500; opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes fade-node {
          0% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1.4); }
          100% { opacity: 0; transform: scale(1); }
        }
        .animate-draw-line {
          animation: draw-line 7s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .animate-draw-line-reverse {
          animation: draw-line-rev 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          animation-delay: 1s;
        }
        .animate-draw-line-slow {
          animation: draw-line 10s linear infinite;
          animation-delay: 2s;
        }
        .animate-fade-node-1 { animation: fade-node 7s infinite 1s; opacity: 0; }
        .animate-fade-node-2 { animation: fade-node 7s infinite 2.5s; opacity: 0; }
        .animate-fade-node-3 { animation: fade-node 7s infinite 4s; opacity: 0; }
        .animate-fade-node-4 { animation: fade-node 8s infinite 3s; opacity: 0; }
        .animate-fade-node-5 { animation: fade-node 10s infinite 5s; opacity: 0; }
      `}} />
        </section>

    )
}

export default Services