import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChartLine,
  faCheckCircle,
  faCode,
  faCubes,
  faLaptopCode,
  faLightbulb,
  faRocket,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import HeroTrabajo from "../Assets/prototipos.jpg";


const PrototiposImplementaciones = () => {
  const prototypeUrl = "https://www.tiktok.com/@fsttecnologia?is_from_webapp=1&sender_device=pc";
  const implementationUrl = "https://www.youtube.com/playlist?list=PLfqikFL7EsZCzWnHR3N3rdivcBDPdkGc8";

  const heroImage = HeroTrabajo;

  return (
    <section
      id="trabajos"
      className="relative w-full overflow-hidden bg-[#061a3a] px-4 py-16 text-white md:py-20"
    >
      {/* FONDO CORPORATIVO ANIMADO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.42),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.22),transparent_28%),linear-gradient(135deg,#020617,#061a3a_48%,#020617)]" />

      {/* IMAGEN OSCURA DE FONDO */}
      <div className="absolute inset-0 opacity-15">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
      </div>

      {/* CAPA OSCURA */}
      <div className="absolute inset-0 bg-[#061a3a]/80" />

      {/* LÍNEAS Y FORMAS ANIMADAS */}
      <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full border border-blue-400/10 animate-spin-slow" />
      <div className="absolute -right-36 bottom-8 h-[380px] w-[380px] rounded-full border border-cyan-400/10 animate-spin-reverse" />

      <div className="absolute left-[4%] top-[18%] hidden grid-cols-5 gap-3 opacity-20 md:grid">
        {Array.from({ length: 25 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-blue-400" />
        ))}
      </div>

      <div className="absolute right-[5%] bottom-[18%] hidden grid-cols-5 gap-3 opacity-20 md:grid">
        {Array.from({ length: 25 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
        ))}
      </div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(120deg,transparent_0%,transparent_42%,rgba(59,130,246,0.25)_43%,transparent_44%,transparent_100%)] bg-[length:320px_320px] animate-bg-move" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1350px] items-center gap-10 lg:grid-cols-[0.95fr_1.15fr]">
        {/* COLUMNA IZQUIERDA */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-white/[0.06] px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-300 backdrop-blur-xl">
            <FontAwesomeIcon icon={faCubes} />
            Trabajos
          </div>

          <h2 className="max-w-xl text-4xl font-black leading-tight md:text-5xl">
            Prototipos e{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Implementaciones
            </span>
          </h2>

          <div className="mt-5 h-1.5 w-24 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.85)]" />

          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75">
            Soluciones diseñadas a medida que transformamos en resultados reales
            para tu negocio: desde la idea inicial hasta la implementación final.
          </p>

          {/* BENEFICIOS */}
          <div className="mt-8 grid max-w-3xl gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.09]">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                <FontAwesomeIcon icon={faRocket} />
              </div>
              <h3 className="text-sm font-black">Innovación aplicada</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/65">
                Desarrollamos prototipos funcionales y escalables.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.09]">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <h3 className="text-sm font-black">Implementación efectiva</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/65">
                Acompañamos cada etapa hasta su despliegue.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.09]">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3 className="text-sm font-black">Resultados medibles</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/65">
                Soluciones que generan impacto real y sostenible.
              </p>
            </div>
          </div>

          {/* BOTONES INTERNOS */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-black text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              <FontAwesomeIcon icon={faLightbulb} />
              <span>Ver Prototipos</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:translate-x-1">
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </span>
            </a>

            <a
              href={implementationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/[0.06] px-6 py-4 text-sm font-black text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-white/[0.12]"
            >
              <FontAwesomeIcon icon={faLaptopCode} />
              <span>Ver Implementaciones</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:translate-x-1">
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </span>
            </a>
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-blue-600/40 via-cyan-400/20 to-blue-600/40 blur-2xl" />

          <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-white/[0.06] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.40)] backdrop-blur-2xl">
            <div className="relative h-[320px] overflow-hidden rounded-[24px] bg-slate-900 md:h-[420px]">
              <img
                src={heroImage}
                alt="Prototipos e implementaciones"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061a3a]/30 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-black/35 p-5 backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <FontAwesomeIcon icon={faCode} />
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-white">
                      Diseño, desarrollo e implementación
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">
                      Convertimos ideas en sistemas, prototipos, plataformas y
                      soluciones digitales listas para operar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MINI FLOATING CARD */}
          <div className="absolute -bottom-6 right-6 hidden rounded-2xl border border-white/15 bg-white/[0.08] p-4 shadow-xl backdrop-blur-xl md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>

              <div>
                <p className="text-sm font-black text-white">Trabajo validado</p>
                <p className="text-xs text-white/60">Prototipos funcionales</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes bg-move {
              0% {
                background-position: 0 0;
              }
              100% {
                background-position: 320px 320px;
              }
            }

            @keyframes spin-slow {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }

            @keyframes spin-reverse {
              from {
                transform: rotate(360deg);
              }
              to {
                transform: rotate(0deg);
              }
            }

            .animate-bg-move {
              animation: bg-move 18s linear infinite;
            }

            .animate-spin-slow {
              animation: spin-slow 36s linear infinite;
            }

            .animate-spin-reverse {
              animation: spin-reverse 42s linear infinite;
            }
          `,
        }}
      />
    </section>
  );
};

export default PrototiposImplementaciones;