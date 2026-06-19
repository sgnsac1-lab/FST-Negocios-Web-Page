import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import logo from "../Assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faXmark,
  faHouse,
  faEnvelope,
  faBriefcase,
  faShieldHalved,
  faTrophy,
  faCalendarCheck,
  faBookOpen,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { label: "Inicio", id: "inicio", icon: faHouse },
  { label: "Contacto", id: "contacto", icon: faEnvelope },
  { label: "Servicios", id: "servicios", icon: faBriefcase },
  { label: "Acreditaciones", id: "acreditaciones", icon: faShieldHalved },
  { label: "Casos de Éxito", id: "casos-exito", icon: faTrophy },
  { label: "Eventos", id: "eventos", icon: faCalendarCheck },
  { label: "Trabajos", id: "trabajos", icon: faCubes },
  { label: "Recursos", id: "recursos", icon: faBookOpen },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (id) => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-[999] w-full px-3 pt-3 sm:px-5 lg:px-8">
        <div className="mx-auto flex h-[78px] max-w-[1840px] items-center justify-between rounded-[24px] bg-white px-4 shadow-[0_16px_40px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:h-[84px] sm:px-5 lg:h-[96px] lg:rounded-[18px] lg:px-8">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img
              src={logo}
              alt="FST Negocios"
              className="w-[180px] sm:w-[220px] lg:w-[245px]"
            />
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex h-[70px] items-center text-[15px] font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-0 left-0 h-[4px] rounded-full bg-blue-600 transition-all duration-300 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* CTA DESKTOP */}
          <a
            href="https://forms.gle/n2U1jQ9tTN739cgF7"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-black text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 lg:flex"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white">
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </span>
            Quiero saber si califico
          </a>

          {/* BOTÓN MOBILE */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white lg:hidden"
            aria-label="Abrir menú"
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>
      </header>

      {/* MENÚ MOBILE */}
      {isOpen && (
        <div className="fixed inset-0 z-[1000] bg-slate-950/70 px-4 py-4 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex h-full max-w-[420px] flex-col">
            {/* TOP MENU */}
            <div className="mb-3 flex items-center justify-between rounded-[26px] border border-white/15 bg-white px-4 py-3 shadow-2xl">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img
                  src={logo}
                  alt="FST Negocios"
                  className="w-[185px]"
                />
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                aria-label="Cerrar menú"
              >
                <FontAwesomeIcon icon={faXmark} className="text-2xl" />
              </button>
            </div>

            {/* CARD MENU */}
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[30px] border border-white/15 bg-white shadow-2xl">
              <div className="border-b border-slate-100 px-5 py-4">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-600">
                  Menú principal
                </p>
                <h3 className="mt-1 text-xl font-black text-slate-900">
                  Navega por FST Negocios
                </h3>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
                <div className="grid gap-2">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 text-left font-black transition-all duration-300 ${
                          isActive
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                            : "bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                            isActive
                              ? "bg-white/15 text-white"
                              : "bg-white text-blue-600"
                          }`}
                        >
                          <FontAwesomeIcon icon={item.icon} />
                        </span>

                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-slate-100 p-4">
                <a
                  href="https://forms.gle/n2U1jQ9tTN739cgF7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-4 py-4 text-center font-black text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-700"
                >
                  Quiero saber si califico
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40">
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;