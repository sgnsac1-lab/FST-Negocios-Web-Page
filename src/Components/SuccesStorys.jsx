
const SUCCESS_VIDEOS = [
  {
    id: '1',
    title: 'TESTIMONIO GANADOR DE CONCURSO PROINNOVATE MIPYMES DIGITALES',
    thumbnail: 'https://img.youtube.com/vi/fsj2bvie89s/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=fsj2bvie89s&list=PLfqikFL7EsZDHi1xsqM6hVje3N9uiiV44&index=2'
  },
  {
    id: '2',
    title: 'TESTIMONIO GANADORA DE CONCURSO TURISMO EMPRENDE',
    thumbnail: 'https://img.youtube.com/vi/e-fyAOT7c1Q/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=e-fyAOT7c1Q&list=PLfqikFL7EsZDHi1xsqM6hVje3N9uiiV44&index=3'
  },
  {
    id: '3',
    title: 'Testimonio Real: Empresa Gana S/100,000 del Estado Peruano | Caso Éxito Innovación Empresarial',
    thumbnail: 'https://img.youtube.com/vi/nMmJJ-MbYso/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=nMmJJ-MbYso&list=PLfqikFL7EsZDHi1xsqM6hVje3N9uiiV44&index=16'
  },
  {
    id: '4',
    title: 'Testimonio Real: Empresa Gana S/100,000 del Estado Peruano | Caso Éxito Innovación Empresarial',
    thumbnail: 'https://img.youtube.com/vi/aD2DsojfNxQ/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=aD2DsojfNxQ&list=PLfqikFL7EsZDHi1xsqM6hVje3N9uiiV44&index=8'
  }
];


const SuccesStorys = () => {

const displayVideos = [...SUCCESS_VIDEOS, ...SUCCESS_VIDEOS, ...SUCCESS_VIDEOS, ...SUCCESS_VIDEOS];

    return(
        <section className="py-24 bg-slate-900 text-white overflow-x-hidden w-full relative">
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-4 italic tracking-tight">
          Resultados que <span className="text-blue-500">inspiran</span>
        </h2>
        <p className="text-slate-400 w-60 md:w-160 mx-auto font-medium">
          Conoce de primera mano cómo hemos impulsado a cientos de empresas a alcanzar el siguiente nivel con casos reales y testimonios.
        </p>
      </div>

      {/* Contenedor del Carrusel Infinito */}
      <div className="relative w-full overflow-hidden">
        {/* Gradientes laterales para suavizar la entrada y salida */}
        <div className="absolute inset-y-0 left-0 md:w-64 bg-linear-to-r from-slate-900 to-transparent z-20 pointer-events-none hidden md:block"></div>
        <div className="absolute inset-y-0 right-0 md:w-64 bg-linear-to-l from-slate-900 to-transparent z-20 pointer-events-none hidden md:block"></div>

        {/* Track de animación */}
        <div className="flex animate-infinite-scroll hover:pause-scroll whitespace-nowrap py-10">
          {displayVideos.map((video, index) => (
            <div 
              key={`${video.id}-${index}`} 
              className="shrink-0 px-4 w-70 md:w-125"
            >
              <div className="relative group rounded-4xl overflow-hidden shadow-2xl bg-slate-800 border border-white/5 transition-all duration-500 hover:scale-[1.02] hover:border-blue-500/30">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                
                {/* Overlay de información y reproducción */}
                <a href={video.url} target="_blank">
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col items-center justify-center p-8">
                  
                  <link href={video.url}></link>
                  <div className="w-full text-left mt-auto">
                    <span className="inline-block py-1 px-3 rounded-lg bg-blue-600/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-2 border border-blue-500/20">
                      CASO DE ÉXITO
                    </span>
                    <h3 className="text-white text-lg md:text-xl font-bold leading-tight line-clamp-2">
                      {video.title}
                    </h3>
                  </div>
                </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Estilos locales para la animación infinita */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content; /* Esto está bien, pero el padre debe ser overflow-hidden */
          animation: infinite-scroll 40s linear infinite;
        }
        /* Agregamos esto para asegurar que no haya scroll lateral en el body */
        :global(body) {
          overflow-x: hidden;
          position: relative;
          width: 100%;
        }
      `}} />

      <div className="mt-16 text-center">
        <a 
          href="https://www.youtube.com/@FSTNEGOCIOS" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group w-50 md:w-80 relative inline-flex items-center gap-4 bg-white/5 border border-white/10 hover:border-red-600/50 hover:bg-red-600/5 text-white font-black py-4 px-10 rounded-2xl transition-all duration-300"
        >
          <div className="absolute -inset-1 bg-red-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="uppercase tracking-widest text-sm relative ">Suscríbete a nuestro canal</span>
        </a>
      </div>
    </section>
    )

}

export default SuccesStorys