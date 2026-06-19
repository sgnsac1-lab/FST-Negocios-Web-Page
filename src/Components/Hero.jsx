import Home1 from "../Assets/Home1.mp4";
import Banner from "../Assets/BannerFSTNEGOCIOS.jpg";
import Foto1 from "../Assets/imagen1.jpg";
import Foto2 from "../Assets/imagen2.jpg";
import Foto3 from "../Assets/imagen3.png";
import Foto4 from "../Assets/imagen4.jpg";
import Foto6 from "../Assets/imagen6.jpg";
import Video1 from "../Assets/video1.MP4";
import FondoCorporativo from "../Assets/FondoCorporativo.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBuildingColumns,
  faChevronLeft,
  faChevronRight,
  faCircleCheck,
  faDesktop,
  faPaperPlane,
  faPlay,
  faRocket,
  faUsers,
  faVolumeHigh,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

import { useEffect, useRef, useState } from "react";

const mediaItems = [
    {
    type: "image",
    src: Foto3,
    alt: "Fondos del Estado FST Negocios",
    fit: "cover",
    position: "object-[50%_0%]",
  },
  {
    type: "video",
    src: Video1,
    poster: Banner,
    alt: "Video principal FST Negocios",
    fit: "cover",
    position: "object-[72%_center]",
  },
  {
    type: "image",
    src: Foto6,
    alt: "Fondos del Estado FST Negocios",
    fit: "cover", // horizontal
    position: "object-center",
  },
  {
    type: "image",
    src: Foto2,
    alt: "Fondos del Estado FST Negocios",
    fit: "cover", // horizontal
    position: "object-center",
  },
  {
    type: "image",
    src: Foto4,
    alt: "Fondos del Estado FST Negocios",
    fit: "cover", // horizontal
    position: "object-center",
  },
];

const benefits = [
  {
    icon: faRocket,
    title: "Más oportunidades",
    text: "Accede a fondos que impulsan tu empresa.",
  },
  {
    icon: faCircleCheck,
    title: "Gestión experta",
    text: "Maximizamos tus opciones de aprobación.",
  },
  {
    icon: faDesktop,
    title: "Transformación real",
    text: "Implementamos soluciones digitales a tu medida.",
  },
];

const stats = [
  {
    icon: faUsers,
    title: "+250",
    subtitle: "Empresas asesoradas",
    text: "en todo el país",
  },
  {
    icon: faBuildingColumns,
    title: "Fondos estatales",
    subtitle: "Gestionamos convocatorias",
    text: "nacionales y regionales",
  },
  {
    icon: faCircleCheck,
    title: "Altas tasas de éxito",
    subtitle: "Estrategias personalizadas",
    text: "que generan resultados",
  },
  {
    icon: faDesktop,
    title: "Transformación digital",
    subtitle: "Soluciones que optimizan",
    text: "y hacen crecer tu negocio",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const currentItem = mediaItems[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? mediaItems.length - 1 : prev - 1
    );
  };

  const toggleMute = () => {
    setIsMuted((prev) => {
      const newValue = !prev;

      if (videoRef.current) {
        videoRef.current.muted = newValue;
      }

      return newValue;
    });
  };


  useEffect(() => {
    if (mediaItems.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mediaItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    if (currentItem.type === "video" && videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.play().catch(() => {});
    }
  }, [activeIndex, currentItem.type, isMuted]);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#061a3a] pt-[110px] pb-10 sm:pt-[125px] lg:pt-[150px] lg:pb-14"
    >
      {/* FONDO AZUL CORPORATIVO */}
  
    <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${FondoCorporativo})` }}
    />

    {/* CAPA OSCURA PARA QUE EL CONTENIDO SE LEA BIEN */}
    <div className="absolute inset-0 bg-slate-950/60" />


      <div className="relative mx-auto max-w-[1680px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-stretch gap-6 lg:grid-cols-1 xl:grid-cols-[minmax(560px,0.9fr)_minmax(0,1.25fr)] 2xl:grid-cols-[minmax(620px,0.9fr)_minmax(0,1.25fr)]">
          <article className="rounded-[28px] border border-white/15 bg-slate-950/70 p-6 text-white shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 lg:p-12">
            <div className="inline-flex rounded-full border border-blue-500/80 px-4 py-2 text-[11px] font-black uppercase tracking-wide text-blue-300 sm:text-sm ">
              Expertos en fondos estatales y transformación digital
            </div>

            <h1 className="mt-6 text-[38px] font-black leading-[1.08] text-white sm:text-[48px] lg:text-[54px] xl:text-[58px] 2xl:text-[64px]">
              Te ayudamos a acceder a{" "}
              <span className="text-blue-500">Fondos del Estado</span>
            </h1>

            <div className="mt-5 h-1.5 w-16 rounded-full bg-blue-500" />

            <p className="mt-5 hidden max-w-[650px] text-base leading-relaxed text-white/90 sm:block sm:text-xl">
              Asesoría estratégica y gestión integral de fondos estatales para
              impulsar el crecimiento de tu empresa y acelerar tu{" "}
              <strong>transformación digital.</strong>
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://forms.gle/n2U1jQ9tTN739cgF7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 sm:text-base"
              >
                <FontAwesomeIcon icon={faRocket} />
                Quiero saber si califico
              </a>

              <button
                type="button"
                onClick={() => {
                  const element = document.getElementById("casos-exito");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/60 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-slate-900 sm:text-base"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                Ver casos de éxito
              </button>
            </div>

            <div className="mt-9 hidden grid-cols-3 gap-4 lg:grid">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-400/40 bg-blue-600/20 text-blue-300">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>

                  <div>
                    <h3 className="text-sm font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/75">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* CARRUSEL DE VIDEOS / FOTOS */}
          <div className="relative min-w-0 h-full overflow-hidden rounded-[28px] border border-white/20 bg-white/10 p-2 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="relative h-[300px] overflow-hidden rounded-[24px] bg-slate-900 sm:h-[420px] md:h-[500px] xl:h-full xl:min-h-[620px]">
              {currentItem.type === "video" ? (
                <video
                  key={activeIndex}
                  ref={videoRef}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  preload="auto"
                  poster={currentItem.poster}
                  className={`h-full w-full object-cover ${currentItem.position || "object-center"}`}
                >
                  <source src={currentItem.src} type="video/mp4" />
                </video>

              ) : (
                <img
                  key={activeIndex}
                  src={currentItem.src}
                  alt={currentItem.alt}
                  className={`h-full w-full object-cover ${currentItem.position || "object-center"}`}
                />
              )}

              <div className="absolute inset-0 z-20 bg-black/5" />

              {mediaItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md transition-all hover:bg-black/55"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md transition-all hover:bg-black/55"
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>

                  <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
                    {mediaItems.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeIndex === index
                            ? "w-8 bg-blue-500"
                            : "w-2 bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}

              {currentItem.type === "video" && (
                <button
                  type="button"
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white/35"
                >
                  <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeHigh} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;