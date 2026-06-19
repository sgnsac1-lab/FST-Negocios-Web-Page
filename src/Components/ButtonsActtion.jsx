import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faBuildingColumns,
  faLightbulb,
  faGlobe,
  faUsers,
  faShield,
  faCoins,
  faChartLine,
  faPiggyBank,
  faSackDollar,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";

import Button from "./Buttons";

const ButtonsActtion = () => {
  const cardsData = [
    {
      isMostRequested: true,
      title: "Subsidios, bonos y recursos no reembolsables",
      description:
        "Ideal si buscas acceder a oportunidades, beneficios del Estado o financiamiento para tu negocio.",
      tag: "Estado peruano",
      phone: "+51 949 638 568",
      whatsappUrl: "https://wa.me/51949638568",
      icon: faBuildingColumns,
      theme: {
        borderTop: "border-t-4 border-t-emerald-500",
        iconBg: "bg-emerald-50 text-emerald-600",
        tagBg: "bg-emerald-50 text-emerald-700",
        btnArrow: "bg-emerald-50 text-emerald-600 hover:bg-emerald-100",
        waBtn: "bg-emerald-700 hover:bg-emerald-800",
        phoneBg: "bg-emerald-50 text-emerald-900 hover:bg-emerald-100",
        phoneArrow: "text-emerald-700/50",
      },
    },
    {
      title: "Proyectos de Tecnología e innovación",
      description:
        "Para asesoría en proyectos innovadores, transformación digital y oportunidades vinculadas a innovación.",
      tag: "Innovación",
      phone: "+51 943 190 708",
      whatsappUrl: "https://wa.me/51943190708",
      icon: faLightbulb,
      theme: {
        borderTop: "border-t-4 border-t-blue-500",
        iconBg: "bg-blue-50 text-blue-600",
        tagBg: "bg-blue-50 text-blue-700",
        btnArrow: "bg-blue-50 text-blue-600 hover:bg-blue-100",
        waBtn: "bg-blue-600 hover:bg-blue-700",
        phoneBg: "bg-blue-50 text-blue-900 hover:bg-blue-100",
        phoneArrow: "text-blue-600/50",
      },
    },
    {
      title: "Clientes internacionales",
      description:
        "Si estás fuera de Perú o deseas recibir orientación sobre fondos internacionales.",
      tag: "Atención global",
      phone: "+51 906 502 930",
      whatsappUrl: "https://wa.me/51906502930",
      icon: faGlobe,
      theme: {
        borderTop: "border-t-4 border-t-orange-500",
        iconBg: "bg-orange-50 text-orange-600",
        tagBg: "bg-orange-50 text-orange-700",
        btnArrow: "bg-orange-50 text-orange-600 hover:bg-orange-100",
        waBtn: "bg-orange-600 hover:bg-orange-700",
        phoneBg: "bg-orange-50 text-orange-900 hover:bg-orange-100",
        phoneArrow: "text-orange-600/50",
      },
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#061a3a] py-16 md:py-24">
      {/* FONDO CORPORATIVO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_30%),linear-gradient(135deg,#020617,#061a3a_45%,#031330)]" />

      {/* LÍNEAS SUAVES DE FONDO */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(120deg,transparent_0%,transparent_35%,#60a5fa_35%,transparent_36%,transparent_100%)] bg-[length:280px_280px]" />

      {/* FORMAS DECORATIVAS */}
      <div className="absolute left-[-120px] top-20 h-[360px] w-[360px] rounded-full border border-blue-400/15 animate-[spin_28s_linear_infinite]" />
      <div className="absolute right-[-140px] bottom-10 h-[420px] w-[420px] rounded-full border border-blue-500/15 animate-[spin_35s_linear_infinite]" />
      <div className="absolute left-8 bottom-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
      <div className="absolute right-12 top-20 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl animate-pulse" />

      {/* ÍCONOS FLOTANTES */}
      <div className="pointer-events-none absolute inset-0 hidden opacity-20 md:block">
        <FontAwesomeIcon
          icon={faCoins}
          className="absolute left-[8%] top-[16%] text-5xl text-blue-300 animate-bounce"
        />
        <FontAwesomeIcon
          icon={faSackDollar}
          className="absolute right-[10%] top-[20%] text-6xl text-emerald-300 animate-pulse"
        />
        <FontAwesomeIcon
          icon={faPiggyBank}
          className="absolute left-[18%] bottom-[18%] text-5xl text-blue-200 animate-bounce"
        />
        <FontAwesomeIcon
          icon={faChartLine}
          className="absolute right-[18%] bottom-[16%] text-6xl text-blue-300 animate-pulse"
        />
        <FontAwesomeIcon
          icon={faArrowTrendUp}
          className="absolute left-[48%] top-[10%] text-5xl text-white/40 animate-bounce"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* BARRA SUPERIOR GLASS */}
        <div className="relative mx-auto mb-16 max-w-[1240px]">
          {/* GLOW */}
          <div className="absolute inset-0 rounded-[34px] bg-gradient-to-r from-blue-600/20 via-cyan-400/10 to-blue-700/20 blur-2xl" />

          {/* GLASS CARD */}
          <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            <div className="absolute inset-x-0 top-0 h-px bg-white/25" />
            <div className="absolute -top-14 left-1/2 h-28 w-72 -translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl" />
            <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-blue-500/10 to-transparent" />

            <div className="grid items-center text-white md:grid-cols-[0.85fr_1.7fr_1fr] md:divide-x md:divide-white/10">
              {/* ITEM 1 */}
              <div className="flex items-center gap-4 px-5 py-5 sm:px-6 md:px-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600/90 text-white shadow-lg shadow-blue-600/30">
                  <FontAwesomeIcon icon={faUsers} className="text-2xl" />
                </div>

                <div>
                  <p className="text-3xl font-black leading-none md:text-4xl">
                    +250
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white/90 md:text-base">
                    Empresas asesoradas
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex items-center gap-4 px-5 py-5 sm:px-6 md:px-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600/90 text-white shadow-lg shadow-blue-600/30">
                  <FontAwesomeIcon icon={faShield} className="text-2xl" />
                </div>

                <p className="max-w-[620px] text-sm leading-relaxed text-white/85 md:text-base">
                  Empresas asesoradas por{" "}
                  <strong className="text-white">FST NEGOCIOS</strong> han
                  accedido a fondos para innovación, digitalización y
                  crecimiento.
                </p>
              </div>

              {/* ITEM 3 */}
              <a
                href="https://www.youtube.com/playlist?list=PLfqikFL7EsZDHi1xsqM6hVje3N9uiiV44"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-4 px-5 py-5 transition-all duration-300 hover:bg-white/5 sm:px-6 md:px-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-red-600 shadow-lg transition-all duration-300 group-hover:scale-110">
                  <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
                </div>

                <span className="text-base font-black text-white md:text-lg">
                  Ver Casos de Éxito
                </span>

                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-white/60 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>

        {/* TÍTULO */}
        <div className="mx-auto max-w-4xl text-center text-white">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-blue-300">
            Atención personalizada por WhatsApp
          </p>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Elige tu{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              canal de atención
            </span>
          </h1>

          <p className="mt-4 text-base text-white/75 md:text-lg">
            Te conectamos por WhatsApp según el tipo de asesoría que necesitas.
          </p>
        </div>

        {/* TARJETAS */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="group relative transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02]"
            >
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-emerald-400/0 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

              <div className="relative">
                <Button data={card} />
              </div>
            </div>
          ))}
        </div>

        {/* TEXTO INFERIOR */}
        <div className="mt-8 hidden gap-4 text-sm text-white/80 md:grid md:grid-cols-3">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex flex-wrap items-center justify-center gap-3 text-center"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className={`text-xl ${
                  index === 0
                    ? "text-emerald-400"
                    : index === 1
                    ? "text-blue-400"
                    : "text-orange-400"
                }`}
              />

              <span>Respuesta inmediata</span>

              <span className="hidden h-5 w-px bg-white/20 sm:block" />

              <FontAwesomeIcon
                icon={faShield}
                className={`text-lg ${
                  index === 0
                    ? "text-emerald-400"
                    : index === 1
                    ? "text-blue-400"
                    : "text-orange-400"
                }`}
              />

              <span>Asesoría especializada</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ButtonsActtion;