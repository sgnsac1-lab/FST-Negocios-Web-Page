import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const ButtonWhatsApp = () => {

    return(
        <a
      href="https://wa.me/51949638568"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-27 right-6 z-100 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center text-3xl shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp}/>
      {/* Tooltip hint */}
      <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-bold px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-gray-100">
        ¡Hablemos ahora!
      </span>
    </a>
    )
}

export default ButtonWhatsApp