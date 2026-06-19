import {
  faArrowRight,
  faChartLine,
  faCircleCheck,
  faCoins,
  faHandHoldingDollar,
  faLaptopCode,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  const servicesData = [
    {
      label: "Financiamiento",
      title: "Asesorías para Ganar Fondos del Estado",
      description:
        "Apoyamos a personas y empresas a acceder a fondos no reembolsables y financiamiento público.",
      icon: faHandHoldingDollar,
      link: "https://forms.gle/n2U1jQ9tTN739cgF7",
      color: {
        border: "border-t-blue-600",
        iconBg: "bg-blue-600/10 text-blue-600",
        label: "bg-blue-600/10 text-blue-700",
        line: "bg-blue-600",
        button: "bg-blue-600 hover:bg-blue-700 shadow-blue-600/25",
        glow: "from-blue-500/25",
        check: "text-blue-600",
      },
      items: [
        "Identificación de oportunidades",
        "Postulación y documentación",
        "Acompañamiento integral",
      ],
    },
    {
      label: "Tecnología",
      title: "Transformación Digital",
      description:
        "Proyectos estratégicos para modernizar tu negocio mediante tecnología de vanguardia.",
      icon: faLaptopCode,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfF9F80OUCMsTj3F58DEWOrTzcONomFvuYZ7WeOIy1nUel6AQ/viewform",
      color: {
        border: "border-t-sky-500",
        iconBg: "bg-sky-500/10 text-sky-600",
        label: "bg-sky-500/10 text-sky-700",
        line: "bg-sky-500",
        button: "bg-sky-600 hover:bg-sky-700 shadow-sky-600/25",
        glow: "from-sky-500/25",
        check: "text-sky-600",
      },
      items: [
        "Diagnóstico y estrategia digital",
        "Automatización de procesos",
        "Implementación tecnológica",
      ],
    },
    {
      label: "Innovación",
      title: "Proyectos de Innovación",
      description:
        "Desarrollo de nuevas ideas y soluciones disruptivas para ganar competitividad en el mercado.",
      icon: faLightbulb,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfF9F80OUCMsTj3F58DEWOrTzcONomFvuYZ7WeOIy1nUel6AQ/viewform",
      color: {
        border: "border-t-cyan-500",
        iconBg: "bg-cyan-500/10 text-cyan-600",
        label: "bg-cyan-500/10 text-cyan-700",
        line: "bg-cyan-500",
        button: "bg-cyan-600 hover:bg-cyan-700 shadow-cyan-600/25",
        glow: "from-cyan-500/25",
        check: "text-cyan-600",
      },
      items: [
        "Ideación y diseño de soluciones",
        "Validación y prototipado",
        "Ejecución e implementación",
      ],
    },
  ];

  return (
    <section
      id="servicios"
      className="relative w-full overflow-hidden bg-slate-50 pt-20 pb-10 md:pt-28 md:pb-14"
    >
      {/* FONDO CORPORATIVO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.16),transparent_35%),linear-gradient(180deg,#f8fbff,#eef7ff)]" />

      {/* FORMAS DECORATIVAS */}
      <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full border border-blue-300/30 animate-[spin_38s_linear_infinite]" />
      <div className="absolute -right-36 bottom-10 h-[460px] w-[460px] rounded-full border border-cyan-300/35 animate-[spin_42s_linear_infinite_reverse]" />
      <div className="absolute left-[10%] top-[18%] h-20 w-20 rounded-full bg-blue-400/10 blur-2xl animate-pulse" />
      <div className="absolute right-[12%] top-[20%] h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl animate-pulse" />

      {/* ÍCONOS FLOTANTES */}
      <div className="pointer-events-none absolute inset-0 hidden opacity-20 md:block">
        <FontAwesomeIcon
          icon={faCoins}
          className="absolute left-[7%] top-[40%] text-5xl text-blue-500 animate-float-money"
        />

        <FontAwesomeIcon
          icon={faChartLine}
          className="absolute right-[8%] top-[34%] text-5xl text-cyan-500 animate-float-chart"
        />

        <FontAwesomeIcon
          icon={faHandHoldingDollar}
          className="absolute bottom-[12%] left-[16%] text-5xl text-sky-500 animate-float-money"
        />
      </div>

      {/* LÍNEAS ANIMADAS */}
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
      >
        <path
          d="M-80 520 C220 380, 350 620, 640 420 S1020 220, 1520 360"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="12 18"
          className="animate-service-line"
        />

        <path
          d="M-90 230 C240 120, 410 320, 720 210 S1050 100, 1530 210"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="2"
          strokeDasharray="10 20"
          className="animate-service-line-slow"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        {/* TÍTULO */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-blue-500/20 bg-blue-600 px-5 py-2 text-xs font-black uppercase tracking-wide text-white shadow-lg shadow-blue-600/25">
            Soluciones que generan resultados
          </div>

          <h2 className="text-4xl font-black leading-tight text-slate-950 md:text-6xl">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Ayudamos a empresas y organizaciones a acceder a fondos públicos,
            modernizar sus procesos y desarrollar soluciones innovadoras que
            impulsan su crecimiento y competitividad.
          </p>
        </div>

        {/* TARJETAS */}
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <article
              key={index}
              className={
                "group relative flex h-full overflow-hidden rounded-[32px] border border-white/70 border-t-4 bg-white/55 p-7 shadow-[0_20px_70px_rgba(15,23,42,0.10)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/85 hover:shadow-[0_30px_90px_rgba(37,99,235,0.18)] " +
                service.color.border
              }
            >
              {/* GLOW HOVER */}
              <div
                className={
                  "absolute -inset-1 bg-gradient-to-br via-transparent to-cyan-400/10 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100 " +
                  service.color.glow
                }
              />

              {/* BRILLO SUPERIOR */}
              <div className="absolute inset-x-0 top-0 h-px bg-white/80" />

              <div className="relative z-10 flex h-full w-full flex-col">
                <div className="flex items-start justify-between gap-5">
                  <div
                    className={
                      "flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl text-3xl shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 " +
                      service.color.iconBg
                    }
                  >
                    <FontAwesomeIcon icon={service.icon} />
                  </div>

                  <span
                    className={
                      "rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wide " +
                      service.color.label
                    }
                  >
                    {service.label}
                  </span>
                </div>

                <h3 className="mt-7 min-h-[72px] text-2xl font-black leading-tight text-slate-950">
                  {service.title}
                </h3>

                <div
                  className={
                    "mt-5 h-1 w-12 rounded-full " + service.color.line
                  }
                />

                <p className="mt-5 min-h-[60px] text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-6 min-h-[98px] space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-sm font-medium text-slate-700"
                    >
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className={"mt-1 shrink-0 " + service.color.check}
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    "mt-auto inline-flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-sm font-black text-white shadow-xl transition-all duration-300 hover:-translate-y-1 " +
                    service.color.button
                  }
                >
                  <span>Solicitar evaluación</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 bg-white/10 transition-all duration-300 group-hover:translate-x-1">
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes service-line {
              0% {
                stroke-dashoffset: 0;
                opacity: 0.15;
              }

              50% {
                opacity: 0.45;
              }

              100% {
                stroke-dashoffset: -260;
                opacity: 0.15;
              }
            }

            @keyframes service-line-slow {
              0% {
                stroke-dashoffset: 0;
                opacity: 0.12;
              }

              50% {
                opacity: 0.4;
              }

              100% {
                stroke-dashoffset: 260;
                opacity: 0.12;
              }
            }

            @keyframes float-money {
              0%, 100% {
                transform: translateY(0) rotate(0deg);
              }

              50% {
                transform: translateY(-18px) rotate(8deg);
              }
            }

            @keyframes float-chart {
              0%, 100% {
                transform: translateY(0) rotate(0deg);
              }

              50% {
                transform: translateY(16px) rotate(-8deg);
              }
            }

            .animate-service-line {
              animation: service-line 12s linear infinite;
            }

            .animate-service-line-slow {
              animation: service-line-slow 16s linear infinite;
            }

            .animate-float-money {
              animation: float-money 5s ease-in-out infinite;
            }

            .animate-float-chart {
              animation: float-chart 6s ease-in-out infinite;
            }
          `,
        }}
      />
    </section>
  );
};

export default Services;