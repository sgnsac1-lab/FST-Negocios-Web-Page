import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faArrowRight,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import logo from "../Assets/Logo.png";
import LibroReclamaciones from "../Assets/LibroReclamaciones.webp";

const Footer = () => {
  return (
    <footer className="relative -mt-[2px] w-full overflow-hidden bg-[#b5d2ff] pt-0">

      {/* CONTENEDOR BLANCO */}
      <div className="relative mx-auto w-full rounded-t-[34px] border-t-[8px] border-blue-500/35 bg-white shadow-[0_-18px_60px_rgba(15,23,42,0.18)] md:rounded-t-[42px]">
        <div className="mx-auto max-w-[1650px] px-6 py-12 md:px-12 lg:px-20 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_1.05fr_1.1fr_1.15fr] lg:gap-12">
            {/* COLUMNA 1 */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <img
                src={logo}
                alt="FST Negocios"
                className="w-[230px] md:w-[280px]"
              />

              <p className="mt-6 max-w-[360px] text-base leading-8 text-slate-600 md:text-lg">
                Somos expertos en consultoría estratégica, gestión de fondos
                estatales y transformación digital para impulsar el crecimiento
                sostenible de tu empresa.
              </p>
            </div>

            {/* COLUMNA 2 */}
            <div className="border-slate-200 lg:border-l lg:pl-12">
              <h3 className="text-center text-lg font-black uppercase tracking-wide text-slate-900 lg:text-left">
                Contacto directo
              </h3>

              <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-blue-600 lg:mx-0" />

              <div className="mt-8 space-y-6">
                <a
                  href="mailto:consultas@fstnegocios.com"
                  className="group flex items-center gap-5 rounded-2xl p-3 transition-all duration-300 hover:bg-blue-50"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-2xl text-blue-600 shadow-md transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-600 group-hover:text-white">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>

                  <span className="text-left">
                    <span className="block font-bold text-slate-700">
                      consultas@fstnegocios.com
                    </span>
                    <span className="mt-1 block text-sm text-slate-500">
                      Respondemos a la brevedad
                    </span>
                  </span>
                </a>

                <a
                  href="https://wa.me/51949638568"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 rounded-2xl p-3 transition-all duration-300 hover:bg-green-50"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-2xl text-green-600 shadow-md transition-all duration-300 group-hover:border-green-200 group-hover:bg-green-600 group-hover:text-white">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </span>

                  <span className="text-left">
                    <span className="block font-bold text-slate-700">
                      Conversa con nosotros por WhatsApp
                    </span>
                    <span className="mt-1 block text-sm text-slate-500">
                      Atención rápida y personalizada
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* COLUMNA 3 */}
            <div className="border-slate-200 lg:border-l lg:pl-12">
              <h3 className="text-center text-lg font-black uppercase tracking-wide text-slate-900 lg:text-left">
                Servicio al cliente
              </h3>

              <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-blue-600 lg:mx-0" />

              <div className="mt-8 rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.12)]">
                <div className="flex flex-col items-center gap-5 sm:flex-row lg:flex-col xl:flex-row">
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-blue-50">
                    <img
                      src={LibroReclamaciones}
                      alt="Libro de Reclamaciones"
                      className="h-16 w-16 object-contain"
                    />
                  </div>

                  <div className="text-center sm:text-left lg:text-center xl:text-left">
                    <h4 className="text-xl font-black leading-tight text-blue-700">
                      Libro de Reclamaciones
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Tu opinión nos ayuda a mejorar cada día.
                    </p>
                  </div>
                </div>

                <Link
                  to="/libro-de-reclamaciones"
                  className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Acceder al libro
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>

            {/* COLUMNA 4 */}
            <div className="border-slate-200 lg:border-l lg:pl-12">
              <h3 className="text-center text-lg font-black uppercase tracking-wide text-slate-900 lg:text-left">
                Nuestras redes sociales
              </h3>

              <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-blue-600 lg:mx-0" />

              <div className="mt-8 flex justify-center gap-4 lg:justify-start">
                <a
                  href="https://www.facebook.com/profile.php?id=61576697158088"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl text-[#1877F2] shadow-[0_12px_35px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                  title="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>

                <a
                  href="https://www.instagram.com/fstnegocios?igsh=aTY2eWs4eGR6ZjAw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-3xl text-white shadow-[0_12px_35px_rgba(236,72,153,0.22)] transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                  title="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a
                  href="https://www.tiktok.com/@fstnegocios?_r=1&_t=ZS-93cPj1lpSB0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-3xl text-white shadow-[0_12px_35px_rgba(15,23,42,0.20)] transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                  title="TikTok"
                >
                  <FontAwesomeIcon icon={faTiktok} />
                </a>

                <a
                  href="https://www.youtube.com/@FSTNEGOCIOS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl text-[#FF0000] shadow-[0_12px_35px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                  title="YouTube"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>

              <div className="mt-8 text-center lg:text-left">
                <h4 className="text-lg font-black text-blue-700">
                  ¡Síguenos y no te pierdas nada!
                </h4>

                <p className="mt-3 max-w-[340px] text-base leading-7 text-slate-500">
                  Novedades, consejos y contenido exclusivo para tu negocio.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BARRA INFERIOR */}
        <div className="border-t border-slate-200">
          <div className="mx-auto flex max-w-[1650px] flex-col items-center justify-between gap-5 px-6 py-7 text-center md:flex-row md:px-12 lg:px-20">
            <p className="text-sm text-slate-600">
              © 2026{" "}
              <span className="font-black text-blue-700">FST NEGOCIOS.</span>{" "}
              Todos los derechos reservados.
            </p>

            <div className="flex flex-col items-center gap-3 text-sm text-slate-600 sm:flex-row sm:gap-6">
              <a href="#" className="transition-colors hover:text-blue-600">
                Política de privacidad
              </a>

              <span className="hidden h-5 w-px bg-slate-300 sm:block" />

              <a href="#" className="transition-colors hover:text-blue-600">
                Términos y condiciones
              </a>

              <span className="hidden h-5 w-px bg-slate-300 sm:block" />

              <a href="#" className="transition-colors hover:text-blue-600">
                Mapa del sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;