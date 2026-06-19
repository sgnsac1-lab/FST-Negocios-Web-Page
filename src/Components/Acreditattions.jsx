import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faRibbon,
  faTrophy,
  faAward,
  faStar,
  faShieldHalved,
  faChevronLeft,
  faChevronRight,
  faArrowRight,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { faFilePdf, faTimesCircle } from "@fortawesome/free-regular-svg-icons";

import iso9001 from "../Assets/ISO-9001.pdf";
import iso14001 from "../Assets/Iso-14001.pdf";
import iso45001 from "../Assets/ISO-45001.pdf";
import InfoCard from "./InfoCard";

const Acreditattions = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const cardsData = [
    {
      icon: faMedal,
      verifierName: "Ministerio de la Producción",
      badgeTitle: "ACREDITACIÓN OFICIAL",
      mainTitle: "Centro de Transformación Digital",
      description:
        "Comprometidos con los estándares del Ministerio de la Producción para el desarrollo empresarial y la transformación digital.",
      type: "link",
      url: "https://www.gob.pe/institucion/produce/normas-legales/7490544-00011-2025-produce-dgitdf",
      actionText: "Ver perfil oficial",
    },
    {
      icon: faMedal,
      verifierName: "PCM",
      badgeTitle: "ACREDITACIÓN",
      mainTitle: "Red de Aceleradoras de la PCM",
      description:
        "Comprometidos con los estándares más altos de la PCM para el desarrollo empresarial y la innovación.",
      type: "link",
      url: "https://www.gob.pe/29832-fst-negocios",
      actionText: "Ver perfil oficial",
      highlighted: true,
    },
    {
      icon: faFilePdf,
      verifierName: "ISO",
      badgeTitle: "CERTIFICACIÓN DE CALIDAD",
      mainTitle: "Norma ISO 9001:2015",
      description:
        "Certificación internacional que garantiza productos y servicios alineados con la normativa vigente y las necesidades del cliente.",
      type: "pdf",
      file: iso9001,
      actionText: "Ver PDF",
    },
    {
      icon: faFilePdf,
      verifierName: "ISO",
      badgeTitle: "CERTIFICACIÓN AMBIENTAL",
      mainTitle: "Norma ISO 14001:2015",
      description:
        "Certificación en transformación digital sostenible que garantiza procesos automatizados, responsables y en mejora continua.",
      type: "pdf",
      file: iso14001,
      actionText: "Ver PDF",
    },
    {
      icon: faShieldHalved,
      verifierName: "ISO",
      badgeTitle: "CERTIFICACIÓN DE SEGURIDAD Y SALUD",
      mainTitle: "Norma ISO 45001:2018",
      description:
        "Estándar internacional que promueve ambientes de trabajo seguros y saludables, protegiendo a las personas y fortaleciendo el desempeño.",
      type: "pdf",
      file: iso45001,
      actionText: "Ver PDF",
    },
  ];

  const infiniteCards = [...cardsData, ...cardsData];

  const scrollRef = useRef(null);
  const positionRef = useRef(0);
  const requestRef = useRef(null);
  const currentSpeed = useRef(0.8);
  const [targetSpeed, setTargetSpeed] = useState(0.8);

  const moveLeft = () => {
    positionRef.current += 324;
  };

  const moveRight = () => {
    positionRef.current -= 324;
  };

  useEffect(() => {
    const animate = () => {
      if (!scrollRef.current) return;

      currentSpeed.current += (targetSpeed - currentSpeed.current) * 0.05;
      positionRef.current -= currentSpeed.current;

      const halfWidth = scrollRef.current.scrollWidth / 2;

      if (Math.abs(positionRef.current) >= halfWidth) {
        positionRef.current += halfWidth;
      }

      if (positionRef.current > 0) {
        positionRef.current -= halfWidth;
      }

      scrollRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [targetSpeed]);

  return (
    <section
      id="acreditaciones"
        className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#061a3a] px-4 pt-20 pb-8 md:pt-28 md:pb-15"
    >
      {/* FONDO CORPORATIVO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.42),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.35),transparent_30%),linear-gradient(135deg,#020617,#061a3a_45%,#020617)]" />

      {/* FORMAS DE FONDO */}
      <div className="absolute -left-48 top-[-80px] h-[520px] w-[520px] rounded-full border border-blue-400/10" />
      <div className="absolute -left-36 top-[-40px] h-[400px] w-[400px] rounded-full border border-blue-400/10" />
      <div className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full border border-blue-400/10" />
      <div className="absolute -right-28 bottom-24 h-[300px] w-[300px] rounded-full border border-blue-400/10" />

      {/* PUNTOS DECORATIVOS */}
      <div className="absolute right-[8%] top-[18%] hidden grid-cols-6 gap-3 opacity-25 md:grid">
        {Array.from({ length: 36 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-blue-400" />
        ))}
      </div>

      <div className="absolute left-[2%] bottom-[22%] hidden grid-cols-5 gap-3 opacity-20 md:grid">
        {Array.from({ length: 25 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-blue-400" />
        ))}
      </div>

      {/* ÍCONOS FLOTANTES */}
      <FontAwesomeIcon
        icon={faTrophy}
        className="absolute left-[9%] top-[22%] hidden text-6xl text-yellow-400/10 animate-bounce md:block"
        style={{ animationDuration: "3.5s" }}
      />

      <FontAwesomeIcon
        icon={faAward}
        className="absolute bottom-[16%] right-[12%] hidden text-6xl text-blue-400/10 animate-bounce md:block"
        style={{ animationDuration: "4.5s" }}
      />

      <FontAwesomeIcon
        icon={faStar}
        className="absolute right-[5%] top-[48%] hidden text-4xl text-white/10 animate-pulse md:block"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-col items-center">
        {/* TÍTULO */}
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/40 bg-blue-600/10 px-6 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-300 shadow-[0_0_35px_rgba(37,99,235,0.25)] backdrop-blur-xl">
            <FontAwesomeIcon icon={faShieldHalved} />
            Excelencia certificada
          </div>

          <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
            Nuestras{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Acreditaciones
            </span>{" "}
            y Certificaciones Oficiales
          </h1>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-blue-500 shadow-[0_0_22px_rgba(59,130,246,0.95)]" />

          <p className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-white/70 md:text-xl">
            Respaldo institucional que garantiza la calidad, seguridad y
            confianza en nuestros servicios de consultoría estratégica.
          </p>
        </div>

        {/* CARRUSEL INFINITO - SOLO 4 VISIBLE EN DESKTOP */}
        <div className="relative mt-14 w-full">
          <div className="relative mx-auto overflow-hidden max-w-[300px] md:max-w-[624px] lg:max-w-[948px] xl:max-w-[1272px]">
            {/* Gradientes laterales */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-30 hidden w-24 bg-gradient-to-r from-[#061a3a] to-transparent md:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-30 hidden w-24 bg-gradient-to-l from-[#061a3a] to-transparent md:block" />

            {/* Zona para acelerar */}
            <div
              className="absolute inset-y-0 right-0 z-40 hidden w-20 cursor-pointer md:block"
              onMouseEnter={() => setTargetSpeed(4)}
              onMouseLeave={() => setTargetSpeed(0.8)}
            />

            <div
              ref={scrollRef}
              className="flex gap-6 py-8"
              style={{ width: "max-content", willChange: "transform" }}
            >
              {infiniteCards.map((card, index) => (
                <InfoCard
                  key={index}
                  icon={card.icon}
                  verifierName={card.verifierName}
                  badgeTitle={card.badgeTitle}
                  mainTitle={card.mainTitle}
                  description={card.description}
                  highlighted={card.highlighted}
                  footerAction={
                    card.type === "link" ? (
                      <a
                        href={card.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-500"
                      >
                        <span>{card.actionText}</span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-xs transition-transform duration-300 group-hover/link:translate-x-1"
                        />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedPdf(card.file)}
                        className="group/link inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-500"
                      >
                        <span>{card.actionText}</span>
                        <FontAwesomeIcon icon={faDownload} className="text-xs" />
                      </button>
                    )
                  }
                />
              ))}
            </div>
          </div>
        </div>

        {/* CONTROLES */}
        <div className="mt-4 flex items-center gap-5">
          <button
            type="button"
            onClick={moveLeft}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <button
            type="button"
            onClick={moveRight}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400 bg-blue-600/10 text-white backdrop-blur-xl transition-all duration-300 hover:bg-blue-600"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      {/* MODAL PDF */}
      {selectedPdf && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b p-4">
              <h3 className="font-bold text-slate-800">Vista previa</h3>

              <button
                type="button"
                onClick={() => setSelectedPdf(null)}
                className="text-slate-500 transition-colors hover:text-red-500"
              >
                <FontAwesomeIcon icon={faTimesCircle} size="lg" />
              </button>
            </div>

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
  );
};

export default Acreditattions;