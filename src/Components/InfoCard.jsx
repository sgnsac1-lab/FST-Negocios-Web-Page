import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";

const InfoCard = ({
  icon,
  verifierName = "PCM",
  badgeTitle,
  mainTitle,
  description,
  footerAction,
  highlighted,
}) => {
  const isLongVerifier = verifierName.length > 12;
  const isLongTitle = mainTitle.length > 24;

  return (
    <div className="group relative h-[450px] w-[310px] shrink-0">
      {/* Glow Effect */}
      <div
        className={`absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-blue-600 to-cyan-500 blur transition-all duration-700 ${
          highlighted ? "opacity-60" : "opacity-20 group-hover:opacity-70"
        }`}
      />

      {/* Card Glass */}
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-[1.9rem] border p-5 text-white shadow-[0_22px_65px_rgba(0,0,0,0.30)] backdrop-blur-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/[0.09] ${
          highlighted
            ? "border-blue-400/45 bg-white/[0.08]"
            : "border-white/15 bg-white/[0.06]"
        }`}
      >
        {/* Fondo interno glass */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.28),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />

        {/* Brillo superior */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/25" />

        <div className="relative z-10 flex h-full flex-col">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="relative shrink-0">
              <div className="absolute -inset-3 rounded-full bg-blue-500/20 blur-xl transition-all group-hover:bg-blue-500/40" />

              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-3xl text-white shadow-lg shadow-blue-500/35">
                <FontAwesomeIcon icon={icon} />
              </div>
            </div>

            <div
              className={`flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-3 py-2 text-right backdrop-blur-xl ${
                isLongVerifier ? "max-w-[160px]" : "max-w-[135px]"
              }`}
            >
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="shrink-0 text-base text-blue-400"
              />

              <div className="min-w-0 leading-none">
                <span className="block text-[8px] font-black uppercase tracking-wide text-blue-300/80">
                  Verificado por
                </span>

                <span
                  className={`mt-1 block font-black text-white ${
                    isLongVerifier
                      ? "whitespace-normal text-[11px] leading-tight"
                      : "truncate text-xs"
                  }`}
                >
                  {verifierName}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mt-6 flex flex-1 flex-col">
            <h4 className="min-h-[32px] text-[10px] font-black uppercase tracking-[0.18em] text-blue-400">
              {badgeTitle}
            </h4>

            <h3
              className={`mt-3 min-h-[80px] font-black leading-tight text-white transition-colors group-hover:text-blue-300 ${
                isLongTitle ? "text-[23px]" : "text-[24px]"
              }`}
            >
              {mainTitle}
            </h3>

            <div className="mt-3 h-1 w-10 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.8)] transition-all duration-500 group-hover:w-20" />

            <p className="mt-4 max-h-[96px] overflow-hidden text-sm leading-relaxed text-white/70">
              {description}
            </p>
          </div>

          {/* Footer Action Area */}
          <div className="mt-auto pt-4">
            {footerAction}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;