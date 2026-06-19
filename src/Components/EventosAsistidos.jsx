import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCalendarCheck,
  faUsers,
  faStar,
  faLocationDot,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

// CAMBIA ESTAS IMPORTACIONES POR TUS IMÁGENES REALES
import Evento1 from "../Assets/evento1.jpeg";
import Evento2 from "../Assets/evento2.jpg";
import Evento3 from "../Assets/evento3.jpg";
import Evento4 from "../Assets/evento4.jpg";
import Evento5 from "../Assets/evento5.jpg";
import Evento6 from "../Assets/evento6.jpg";
import Evento7 from "../Assets/evento7.jpg";

const eventos = [
  {
    id: 1,
    image: Evento1,
    category: "Ministerio de la Producción",
    title: "Conversión y Logística ante la red de MYPES.",
    location: "Lima, Perú",
  },
  {
    id: 2,
    image: Evento2,
    category: "Ministerio de la Producción",
    title: "Cumbre ITP 2026 – Red CITE",
    location: "Lima, Perú",
  },
  {
    id: 3,
    image: Evento3,
    category: "Proinnóvate",
    title: "PROINNÓVATE SUMMIT 2026",
    location: "Lima, Perú",
  },
  {
    id: 4,
    image: Evento4,
    category: "Concytec",
    title: "PERÚ INVESTIGA 2026",
    location: "Lima, Perú",
  },
  {
    id: 5,
    image: Evento5,
    category: "Mype Digital",
    title: "Red de Centros MYPE Digital del Perú",
    location: "Lima, Perú",
  },
  {
    id: 6,
    image: Evento6,
    category: "Concytec",
    title: "Semana de la Innovación 2026",
    location: "Lima, Perú",
  },
  {
    id: 7,
    image: Evento7,
    category: "Ministerio de la Producción",
    title: " Red de Centros de Transformación Digital",
    location: "Lima, Perú",
  },
];

const EventosAsistidos = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % eventos.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? eventos.length - 1 : prev - 1));
  };

  const visibleEvents = [
    eventos[activeIndex],
    eventos[(activeIndex + 1) % eventos.length],
    eventos[(activeIndex + 2) % eventos.length],
  ];

  return (
    <section
      id="eventos"
      className="relative w-full overflow-hidden bg-white px-4 py-16 md:py-20"
    >
      {/* FONDO DECORATIVO */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* degradado azul suave */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.08),transparent_30%)]" />

        {/* líneas curvas izquierdas */}
        <div className="absolute -left-32 top-16 h-[420px] w-[420px] rounded-full border border-blue-200/80" />
        <div className="absolute -left-20 top-28 h-[320px] w-[320px] rounded-full border border-blue-100/80" />

        {/* líneas curvas derechas */}
        <div className="absolute -right-28 bottom-10 h-[360px] w-[360px] rounded-full border border-cyan-200/70" />
        <div className="absolute -right-12 bottom-24 h-[250px] w-[250px] rounded-full border border-cyan-100/80" />

        {/* puntitos decorativos */}
        <div className="absolute left-[3%] bottom-[12%] hidden grid-cols-4 gap-3 opacity-40 md:grid">
          {Array.from({ length: 16 }).map((_, index) => (
            <span key={index} className="h-1.5 w-1.5 rounded-full bg-blue-200" />
          ))}
        </div>

        <div className="absolute right-[4%] top-[14%] hidden grid-cols-4 gap-3 opacity-40 md:grid">
          {Array.from({ length: 16 }).map((_, index) => (
            <span key={index} className="h-1.5 w-1.5 rounded-full bg-cyan-200" />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1350px] items-center gap-10 lg:grid-cols-[0.8fr_1.45fr]">
        {/* COLUMNA IZQUIERDA */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-700">
            <FontAwesomeIcon icon={faCalendarCheck} />
            Eventos asistidos
          </div>

          <h2 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">
            Eventos{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              asistidos
            </span>
          </h2>

          <div className="mt-5 h-1.5 w-20 rounded-full bg-blue-600 shadow-[0_0_18px_rgba(37,99,235,0.25)]" />

          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600">
            Hemos participado y brindado asesoría en eventos clave que impulsan
            el desarrollo empresarial, la innovación y el acceso a nuevas
            oportunidades.
          </p>

          {/* MÉTRICAS */}
          <div className="mt-8 grid max-w-md grid-cols-2 gap-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <FontAwesomeIcon icon={faCalendarCheck} className="text-2xl text-blue-500" />
              <p className="mt-3 text-3xl font-black text-blue-600">+10</p>
              <p className="text-sm text-slate-600">Eventos asistidos</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <FontAwesomeIcon icon={faUsers} className="text-2xl text-blue-500" />
              <p className="mt-3 text-3xl font-black text-blue-600">+5,000</p>
              <p className="text-sm text-slate-600">Empresarios impactados</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <FontAwesomeIcon icon={faStar} className="text-2xl text-blue-500" />
              <p className="mt-3 text-3xl font-black text-blue-600">+20</p>
              <p className="text-sm text-slate-600">Aliados y organizadores</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <FontAwesomeIcon icon={faLocationDot} className="text-2xl text-blue-500" />
              <p className="mt-3 text-3xl font-black text-blue-600">10</p>
              <p className="text-sm text-slate-600">Regiones alcanzadas</p>
            </div>
          </div>
        </div>

        {/* CARRUSEL */}
        <div className="relative">
          {/* BOTÓN IZQUIERDO */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white md:-left-6"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* BOTÓN DERECHO */}
          <button
            type="button"
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white md:-right-6"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleEvents.map((evento, index) => (
              <div
                key={`${evento.id}-${index}`}
                className={`${index === 1 ? "hidden sm:block" : ""} ${
                  index === 2 ? "hidden lg:block" : ""
                }`}
              >
                <div className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_60px_rgba(37,99,235,0.16)]">
                  {/* IMAGEN */}
                  <div className="relative h-[230px] overflow-hidden">
                    <img
                      src={evento.image}
                      alt={evento.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* FECHA */}
                    <div className="absolute bottom-0 left-0 rounded-tr-2xl bg-blue-600 px-5 py-3 text-white shadow-lg">
                      <p className="text-3xl font-black leading-none">{evento.day}</p>
                      <p className="mt-1 text-xs font-bold uppercase tracking-wide">
                        {evento.month}
                      </p>
                    </div>
                  </div>

                  {/* CONTENIDO */}
                  <div className="p-5">
                    <p className="text-sm text-slate-500">{evento.category}</p>

                    <h3 className="mt-2 min-h-[72px] text-xl font-black leading-tight text-slate-900">
                      {evento.title}
                    </h3>

                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                      <FontAwesomeIcon icon={faLocationDot} className="text-blue-500" />
                      <span>{evento.location}</span>
                    </div>

                    <div className="mt-5 h-px w-full bg-slate-100" />

                    <div className="mt-4 flex items-center gap-2 text-sm font-bold text-blue-600">
                      <FontAwesomeIcon icon={faBookmark} />
                      <span>Evento destacado</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* INDICADORES */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {eventos.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventosAsistidos;