import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faRibbon, faTrophy, faAward, faStar } from '@fortawesome/free-solid-svg-icons'

const Acreditattions = () => {
    
    return(
        <section className="relative flex flex-col justify-center items-center bg-slate-900 gap-8 pt-5 mt-30">

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
            <h1 className="font-bold md:text-5xl text-center text-3xl w-50 md:w-full text-white">Nuestras <span className='text-blue-500'>Acreditaciones</span> Oficiales</h1>
            <p className="md:w-130 w-50 text-center text-slate-400">Respaldo institucional que garantiza la calidad y seguridad de nuestros servicios de consultoria estrategica.</p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6">

              
              <div className="group relative h-full w-70 md:w-fit">
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative h-full bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-[2.4rem] p-8 md:p-10 flex flex-col justify-center items-center md:justify-between md:items-stretch transition-all duration-500 group-hover:translate-y-2">
                    
                    {/* Header with Badge Icon */}
                    <div className="flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between md:items-start justify-center items-center mb-8 text-center md:text-left">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/40 transition-all"></div>
                            <div className="relative w-16 h-16 bg-linear-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-blue-500/40">
                            <FontAwesomeIcon icon={faMedal} />
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block">Verificado por</span>
                            <span className="text-white font-bold text-sm">Ministerio de la Produccion</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="mb-8">
                    <h4 className="text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-3 text-center md:text-left">ACREDITACION ADHESION</h4>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-blue-300 transition-colors md:w-100 w-60 text-center md:text-left">
                        Centro de Transformacion Digital
                    </h3>
                    <div className="mt-4 md:w-12 h-1 bg-blue-500 rounded-full transition-all duration-500 group-hover:w-24"></div>
                    </div>

                    <p className="text-slate-400 text-sm mb-10 leading-relaxed italic md:w-95 w-50 text-center md:text-left">
                    "Comprometidos con los estandares más altos del Ministerio de la Produccion para el desarrollo empresarial."
                    </p>

                    {/* Footer Link */}
                    <div className="mt-auto">
                    <a 
                        href="https://www.gob.pe/institucion/produce/normas-legales/7490544-00011-2025-produce-dgitdf"
                        target='_blank'
                        className="inline-flex items-center gap-3 bg-white/5 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 w-full justify-center border border-white/10 hover:border-blue-500 shadow-lg group/link"
                    >
                        <span>Ver resolución</span>
                        <i className="fas fa-arrow-right text-xs transition-transform group-hover/link:translate-x-1"></i>
                    </a>
                    </div>
                </div>
                </div>



              <div className="group relative h-full w-70 md:w-fit">
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative h-full bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-[2.4rem] p-8 md:p-10 flex flex-col justify-center items-center md:justify-between md:items-stretch transition-all duration-500 group-hover:translate-y-2">
                    
                    {/* Header with Badge Icon */}
                    <div className="flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between md:items-start mb-8 justify-center items-center text-center md:text-left">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/40 transition-all"></div>
                        <div className="relative w-16 h-16 bg-linear-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-blue-500/40">
                        <FontAwesomeIcon icon={faMedal} />
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block">Verificado por</span>
                        <span className="text-white font-bold text-sm">PCM</span>
                    </div>
                    </div>

                    {/* Content */}
                    <div className="mb-8">
                    <h4 className="text-blue-400 text-xs w-60 font-black uppercase tracking-[0.3em] mb-3 text-center md:text-left">ACREDITACION RED DE ACELERADORAS</h4>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-blue-300 transition-colors md:w-100 w-60 text-center md:text-left">
                        Red de Aceleradoras de la PCM
                    </h3>
                    <div className="mt-4 md:w-12 h-1 bg-blue-500 rounded-full transition-all duration-500 group-hover:w-24"></div>
                    </div>

                    <p className="text-slate-400 text-sm mb-10 leading-relaxed italic md:w-95 w-50 text-center md:text-left">
                    "Comprometidos con los estandares mas altos de la PCM para el desarrollo empresarial"
                    </p>

                    {/* Footer Link */}
                    <div className="mt-auto">
                    <a 
                        href="https://www.gob.pe/29832-fst-negocios"
                        target='_blank'
                        className="inline-flex items-center gap-3 bg-white/5 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 w-full justify-center border border-white/10 hover:border-blue-500 shadow-lg group/link"
                    >
                        <span>Ver perfil oficial</span>
                        <i className="fas fa-arrow-right text-xs transition-transform group-hover/link:translate-x-1"></i>
                    </a>
                    </div>
                </div>
                </div>
            </div>

            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl mr-4 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faRibbon} />
            </div>
        </section>
    )
}

export default Acreditattions