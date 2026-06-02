import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from "../Assets/Logo.png"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

 const navItems = [
        { label: 'Inicio', id: 'inicio', hasDropdown: false },
        { label: 'Contacto', id: 'contacto', hasDropdown: false },
        { label: 'Servicios', id: 'servicios', hasDropdown: false },
        { label: 'Acreditaciones', id: 'acreditaciones', hasDropdown: false },
        { label: 'Casos de Éxito', id: 'casos-exito', hasDropdown: false },
        { label: 'Recursos', id: 'recursos', hasDropdown: false },
    ]

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('inicio')
  const location = useLocation()
  const navigate = useNavigate()

  // 1. CONTROL DEL SCROLL E INTERSECTION OBSERVER
  useEffect(() => {
    // Si NO estamos en la landing page, no ejecutamos el observador de scroll
    if (location.pathname !== '/') {
      setActiveSection('') // Ninguna sección de la landing está activa
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px', // Cuadrante de detección
      threshold: 0,
    }

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions)

    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [location.pathname]) // Se vuelve a ejecutar si cambia la ruta de la página

  // 2. FUNCIÓN DE NAVEGACIÓN INTELIGENTE
  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      // Si estás en otra página (ej: libro de reclamaciones), viaja primero al Home
      navigate('/')
      // Esperamos un brevísimo instante a que cargue el DOM del Home para scrollear
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      // Si ya estás en el Home, haz scroll suave directo
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

    return(
        <section className="w-full flex flex-col md:flex-row items-center justify-between py-5 px-4 md:h-30 h-25 fixed bg-white z-999">
            <Link to="/"><img src={logo} className="md:w-60 w-40" /></Link>
            {/* CENTRO: MENÚ DE NAVEGACIÓN EN UN FLEX */}
            {/* CENTRO: MENÚ (FLEX) */}
        <nav className="hidden lg:flex items-center gap-7 h-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative h-full flex items-center gap-1.5 text-[15px] font-semibold transition-all duration-300 focus:outline-none group
                  ${isActive ? 'text-blue-600 font-bold' : 'text-slate-700 hover:text-blue-500'}`}
              >
                <span>{item.label}</span>
                
                {item.hasDropdown && (
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className="text-[10px] opacity-70 group-hover:translate-y-0.5 transition-transform" 
                  />
                )}

                {/* Línea Azul inferior */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 h-0.75 bg-blue-500 rounded-t-full transition-all duration-300 transform
                    ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-50 group-hover:opacity-50'}`}
                />
              </button>
            );
          })}
        </nav>

        {/* LADO DERECHO: BOTÓN DE ACCIÓN (WHATSAPP) */}
            <div className="hidden md:flex items-center">
                <a
                    href="https://forms.gle/n2U1jQ9tTN739cgF7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white font-bold py-3 px-5 rounded-xl shadow-md shadow-blue-500/20 hover:bg-blue-700 hover:shadow-lg transition-all duration-300 text-sm whitespace-nowrap group"
                >
                    <span>Quiero saber si califico</span>
                </a>
            </div>
        </section>
    )

}

export default Navbar