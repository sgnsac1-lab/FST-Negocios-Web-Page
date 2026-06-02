import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { 
  faChevronRight, 
  faBuildingColumns, 
  faLightbulb, 
  faGlobe, 
  faShieldHalved, 
  faCircle,
  faStar
} from '@fortawesome/free-solid-svg-icons'

const Buttons = ({data}) => {
    const { theme, isMostRequested } = data
  return (
    <div className="max-w-112.5 relative shrink-0 space-y-4 font-sans text-sm">

      {isMostRequested && (
        <div className="absolute -top-3.5 left-35 z-10 flex items-center gap-1.5 bg-linear-to-r from-emerald-700 to-emerald-600 text-white font-semibold px-4 py-1.5 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.4)] border border-emerald-500/30 text-xs">
          <FontAwesomeIcon icon={faStar} className="text-amber-300 text-[10px]" />
          <span>Más solicitado</span>
        </div>
      )}

      {/* Tarjeta Blanca */}
      <div className={`bg-white min-h-85 rounded-3xl p-8 border border-neutral-100 shadow-lg flex flex-col justify-between ${theme.borderTop}`}>
        
        {/* Sección Superior */}
        <div className="flex flex-col lg:flex-row items-start gap-5 mb-6">
          {/* Ícono Principal */}
          <div className={`shrink-0 rounded-2xl p-4 w-20 h-20 flex items-center justify-center text-3xl ${theme.iconBg}`}>
            <FontAwesomeIcon icon={data.icon} />
          </div>

          {/* Textos */}
          <div className="grow">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 leading-tight max-w-40">
                  {data.title}
                </h3>
                <p className="text-neutral-500 mt-2 text-[14px] leading-snug max-w-50">
                  {data.description}
                </p>
              </div>
              {/* Flecha superior derecha */}
              <button className={`shrink-0 rounded-full w-9 h-9 flex items-center justify-center transition-colors ${theme.btnArrow}`}>
                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
              </button>
            </div>

            {/* Tag */}
            <div className="mt-3">
              <span className={`font-semibold px-4 py-1 rounded-full text-xs ${theme.tagBg}`}>
                {data.tag}
              </span>
            </div>
          </div>
        </div>

        {/* Barra WhatsApp */}
        <a 
          href={data.whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col lg:flex-row items-center rounded-2xl overflow-hidden border border-neutral-100 group cursor-pointer transition-all hover:shadow-md"
        >
          {/* Botón Hablar por WA */}
          <div className={`text-white flex items-center gap-3 py-4 px-5 font-semibold lg:w-[60%] transition-colors ${theme.waBtn}`}>
            <FontAwesomeIcon icon={faWhatsapp} className="text-xl animate-pulse" />
            <span className="text-sm sm:text-base whitespace-nowrap">Hablar por WhatsApp</span>
          </div>
          
          {/* Número */}
          <div className={`flex items-center justify-between py-4 px-5 font-semibold lg:w-[40%] transition-colors ${theme.phoneBg}`}>
            <span className="text-sm whitespace-nowrap">{data.phone}</span>
            <FontAwesomeIcon 
              icon={faChevronRight} 
              className={`text-xs group-hover:translate-x-1 transition-transform ${theme.phoneArrow}`} 
            />
          </div>
        </a>
      </div>

      {/* Footer (Respuesta inmediata / Asesoría) */}
      <div className="flex items-center gap-6 pl-4 text-gray-400 text-xs">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faShieldHalved} />
          <span>Respuesta inmediata</span>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircle} className="text-[8px] text-blue-500" />
          <span>Asesoría especializada</span>
        </div>
      </div>
    </div>
  )
}

export default Buttons