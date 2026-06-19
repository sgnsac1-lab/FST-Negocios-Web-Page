import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBuilding,
  faCheck,
  faCirclePlay,
  faDollarSign,
  faStar,
  faTrophy,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const SUCCESS_VIDEOS = [
  {
    id: "1",
    title: "Testimonio de Ganador de Concurso ProInnovate",
    description:
      "Accedieron a fondos no reembolsables que impulsaron su crecimiento y competitividad.",
    thumbnail: "https://img.youtube.com/vi/fsj2bvie89s/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=fsj2bvie89s&list=PLfqikFL7EsZDHi1xsqM6hVje3N9uiiV44&index=2",
  },
  {
    id: "2",
    title: "Ganadora de Concurso Turismo Emprende",
    description:
      "Financiamiento que hizo posible innovar, crecer y generar más impacto.",
    thumbnail: "https://img.youtube.com/vi/e-fyAOT7c1Q/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=e-fyAOT7c1Q&list=PLfqikFL7EsZDHi1xsqM6hVje3N9uiiV44&index=3",
  },
  {
    id: "3",
    title: "Empresa gana S/100,000 en concurso público",
    description:
      "Fondos obtenidos que aceleraron su proyecto y fortalecieron su competitividad.",
    thumbnail: "https://img.youtube.com/vi/nMmJJ-MbYso/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=nMmJJ-MbYso&list=PLfqikFL7EsZDHi1xsqM6hVje3N9uiiV44&index=16",
  },
  {
    id: "4",
    title: "Caso real de innovación empresarial",
    description:
      "Una historia de éxito que demuestra cómo una buena postulación puede transformar un negocio.",
    thumbnail: "https://img.youtube.com/vi/aD2DsojfNxQ/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=aD2DsojfNxQ&list=PLfqikFL7EsZDHi1xsqM6hVje3N9uiiV44&index=8",
  },
];

const SuccesStorys = () => {
  const displayVideos = [
    ...SUCCESS_VIDEOS,
    ...SUCCESS_VIDEOS,
    ...SUCCESS_VIDEOS,
    ...SUCCESS_VIDEOS,
  ];

  return (
    <section
      id="casos-exito"
      className="relative w-full overflow-hidden bg-[#061a3a] px-4 py-20 text-white md:py-24"
    >
      {/* FONDO CORPORATIVO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.38),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.32),transparent_28%),linear-gradient(135deg,#020617,#061a3a_45%,#020617)]" />

      {/* FORMAS DE FONDO */}
      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full border border-blue-400/10" />
      <div className="absolute -left-24 top-36 h-[300px] w-[300px] rounded-full border border-blue-400/10" />
      <div className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full border border-blue-400/10" />
      <div className="absolute -right-16 top-28 h-[300px] w-[300px] rounded-full border border-blue-400/10" />

      {/* PUNTOS DECORATIVOS */}
      <div className="absolute left-[2%] top-[12%] hidden grid-cols-5 gap-3 opacity-20 md:grid">
        {Array.from({ length: 25 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-blue-400" />
        ))}
      </div>

      <div className="absolute right-[8%] bottom-[20%] hidden grid-cols-6 gap-3 opacity-20 md:grid">
        {Array.from({ length: 30 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-blue-400" />
        ))}
      </div>

      {/* LUCES */}
      <div className="absolute left-[8%] top-[8%] h-3 w-3 rounded-full bg-blue-400 blur-[2px] animate-pulse" />
      <div className="absolute right-[12%] top-[16%] h-3 w-3 rounded-full bg-blue-400 blur-[2px] animate-pulse" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* TÍTULO */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-white/[0.04] px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-300 backdrop-blur-xl">
            <FontAwesomeIcon icon={faStar} />
            Historias reales de éxito
          </div>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Resultados que{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              inspiran
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.85)]" />

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
            Conoce historias reales de empresas y emprendedores que, con el
            apoyo de FST NEGOCIOS, accedieron a fondos públicos y transformaron
            sus ideas en resultados.
          </p>
        </div>

        {/* MÉTRICAS */}
        <div className="mx-auto mt-8 grid max-w-[780px] gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl md:grid-cols-3 md:divide-x md:divide-white/10">
          <div className="flex items-center justify-center gap-4 px-4 py-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-400/30 bg-blue-600/10 text-blue-400">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <div>
              <p className="text-2xl font-black">250+</p>
              <p className="text-xs text-white/65">Historias de éxito</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 px-4 py-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-400/30 bg-blue-600/10 text-blue-400">
              <FontAwesomeIcon icon={faDollarSign} />
            </div>
            <div>
              <p className="text-2xl font-black">S/ 25M+</p>
              <p className="text-xs text-white/65">Fondos obtenidos</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 px-4 py-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-400/30 bg-blue-600/10 text-blue-400">
              <FontAwesomeIcon icon={faBuilding} />
            </div>
            <div>
              <p className="text-2xl font-black">200+</p>
              <p className="text-xs text-white/65">Empresas apoyadas</p>
            </div>
          </div>
        </div>

        {/* CARRUSEL INFINITO */}
        <div className="relative mt-10 w-full">
          <div className="relative mx-auto overflow-hidden max-w-[320px] md:max-w-[704px] xl:max-w-[1092px]">
            {/* SOMBRAS LATERALES */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-30 hidden w-24 bg-gradient-to-r from-[#061a3a] to-transparent md:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-30 hidden w-24 bg-gradient-to-l from-[#061a3a] to-transparent md:block" />

            <div className="flex w-max animate-success-scroll gap-6 py-5 hover:[animation-play-state:paused]">
              {displayVideos.map((video, index) => (
                <div
                  key={`${video.id}-${index}`}
                  className="w-[320px] shrink-0 md:w-[340px]"
                >
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block h-full overflow-hidden rounded-[26px] border border-white/12 bg-white/[0.05] shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-400/50 hover:bg-white/[0.08]"
                  >
                    {/* IMAGEN */}
                    <div className="relative h-[190px] overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#061a3a] via-[#061a3a]/25 to-transparent" />

                      {/* PLAY */}
                      <div className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-blue-700 shadow-xl transition-all duration-300 group-hover:scale-110">
                        <FontAwesomeIcon icon={faCirclePlay} className="text-2xl" />
                      </div>
                    </div>

                    {/* CONTENIDO */}
                    <div className="relative z-10 flex min-h-[220px] flex-col p-6">
                      <span className="mb-3 inline-flex w-fit rounded-lg bg-blue-600 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-white">
                        Caso de éxito
                      </span>

                      <h3 className="min-h-[58px] text-xl font-black leading-tight text-white">
                        {video.title}
                      </h3>

                      <div className="mt-4 flex gap-3 text-sm leading-relaxed text-white/75">
                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-400 text-blue-400">
                          <FontAwesomeIcon icon={faCheck} className="text-xs" />
                        </div>

                        <p className="min-h-[60px]">{video.description}</p>
                      </div>

                      <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-5 text-sm font-black text-white/90">
                        <span>Ver testimonio</span>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/60 text-blue-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-blue-600 group-hover:text-white">
                          <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTONES INFERIORES */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://youtube.com/playlist?list=PLfqikFL7EsZDHi1xsqM6hVje3N9uiiV44&si=PLd1YerfVwbtnUAx"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full max-w-[320px] items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-black text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-500 sm:w-auto"
          >
            <FontAwesomeIcon icon={faTrophy} />
            <span>Ver más casos de éxito</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:translate-x-1">
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </span>
          </a>

          <a
            href="https://www.youtube.com/@FSTNEGOCIOS"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full max-w-[320px] items-center justify-center gap-3 rounded-xl border border-white/18 bg-white/[0.04] px-6 py-4 text-sm font-black text-white backdrop-blur-xl transition-all duration-300 hover:border-red-500/50 hover:bg-red-600/10 sm:w-auto"
          >
            <FontAwesomeIcon icon={faYoutube} />
            <span>Suscríbete a nuestro canal</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:translate-x-1">
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </span>
          </a>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes success-scroll {
              from {
                transform: translateX(0);
              }

              to {
                transform: translateX(-50%);
              }
            }

            .animate-success-scroll {
              animation: success-scroll 42s linear infinite;
            }

            @media (max-width: 768px) {
              .animate-success-scroll {
                animation-duration: 34s;
              }
            }
          `,
        }}
      />
    </section>
  );
};

export default SuccesStorys;