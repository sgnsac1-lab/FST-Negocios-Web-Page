
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoCard = ({ 
  icon, 
  verifierName = "PCM", 
  badgeTitle, 
  mainTitle, 
  description, 
  footerAction // Aquí pasaremos el <a> o el <button>
}) => {
  return (
    <div className="group relative md:h-130 h-150 w-70 md:w-fit">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative h-full bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-[2.4rem] p-8 md:p-10 flex flex-col justify-center items-center md:justify-between md:items-stretch transition-all duration-500 group-hover:translate-y-2">
        
        {/* Header with Badge Icon */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between md:items-start mb-8 justify-center items-center text-center md:text-left">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/40 transition-all"></div>
            <div className="relative w-16 h-16 bg-linear-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-blue-500/40">
              <FontAwesomeIcon icon={icon} />
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block">Verificado por</span>
            <span className="text-white font-bold text-sm">{verifierName}</span>
          </div>
        </div>

        {/* Content */}
        <div className="mb-8">
          <h4 className="text-blue-400 text-xs w-60 font-black uppercase tracking-[0.3em] mb-3 text-center md:text-left">
            {badgeTitle}
          </h4>
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-blue-300 transition-colors md:w-100 w-60 text-center md:text-left">
            {mainTitle}
          </h3>
          <div className="mt-4 md:w-12 h-1 bg-blue-500 rounded-full transition-all duration-500 group-hover:w-24"></div>
        </div>

        <p className="text-slate-400 text-sm mb-10 leading-relaxed italic md:w-95 w-50 text-center md:text-left">
          "{description}"
        </p>

        {/* Footer Action Area */}
        <div className="mt-auto">
          {footerAction}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;