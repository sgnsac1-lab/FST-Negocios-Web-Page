
const SUCCESS_VIDEOS = [
  {
    id: '1',
    title: 'Transformación Digital - Éxito Empresarial',
    thumbnail: 'https://img.youtube.com/vi/wEnHhoRVv_s/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=wEnHhoRVv_s'
  },
  {
    id: '2',
    title: 'Acceso a Fondos - Impulso PYME',
    thumbnail: 'https://img.youtube.com/vi/h-P7L8t_v0Q/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=h-P7L8t_v0Q'
  },
  {
    id: '3',
    title: 'Innovación Tecnológica Aplicada',
    thumbnail: 'https://img.youtube.com/vi/LXb3EKWsInQ/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=LXb3EKWsInQ'
  }
];


const SuccesStorys = () => {

const displayVideos = [...SUCCESS_VIDEOS, ...SUCCESS_VIDEOS, ...SUCCESS_VIDEOS, ...SUCCESS_VIDEOS];

    return(
        <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-4 italic tracking-tight">
          Resultados que <span className="text-blue-500">inspiran</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-medium">
          Conoce de primera mano cómo hemos impulsado a cientos de empresas a alcanzar el siguiente nivel con casos reales y testimonios.
        </p>
      </div>

      {/* Contenedor del Carrusel Infinito */}
      <div className="relative w-full">
        {/* Gradientes laterales para suavizar la entrada y salida */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none"></div>

        {/* Track de animación */}
        <div className="flex animate-infinite-scroll hover:pause-scroll whitespace-nowrap py-10">
          {displayVideos.map((video, index) => (
            <div 
              key={`${video.id}-${index}`} 
              className="inline-block px-4 w-[320px] md:w-[500px]"
            >
              <div className="relative group rounded-[2rem] overflow-hidden shadow-2xl bg-slate-800 border border-white/5 transition-all duration-500 hover:scale-[1.02] hover:border-blue-500/30">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                
                {/* Overlay de información y reproducción */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col items-center justify-center p-8">
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:scale-110 transition-all duration-300 mb-4"
                  >
                    <i className="fas fa-play ml-1"></i>
                  </a>
                  
                  <div className="w-full text-left mt-auto">
                    <span className="inline-block py-1 px-3 rounded-lg bg-blue-600/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-2 border border-blue-500/20">
                      CASO DE ÉXITO
                    </span>
                    <h3 className="text-white text-lg md:text-xl font-bold leading-tight line-clamp-2">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Estilos locales para la animación infinita */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 40s linear infinite;
        }
        .pause-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="mt-16 text-center">
        <a 
          href="https://www.youtube.com/@FSTNEGOCIOS" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-4 bg-white/5 border border-white/10 hover:border-red-600/50 hover:bg-red-600/5 text-white font-black py-4 px-10 rounded-2xl transition-all duration-300"
        >
          <div className="absolute -inset-1 bg-red-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="uppercase tracking-widest text-sm relative">Suscríbete a nuestro canal</span>
        </a>
      </div>
    </section>
    )

}

export default SuccesStorys