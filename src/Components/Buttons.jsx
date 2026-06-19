import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Buttons = ({ data }) => {
  const { theme, isMostRequested } = data;

  return (
    <div className="relative w-full max-w-[450px] shrink-0 space-y-4 font-sans text-sm">
      {isMostRequested && (
        <div className="absolute -top-3.5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-linear-to-r from-emerald-700 to-emerald-600 px-4 py-1.5 text-xs font-semibold text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]">
          <FontAwesomeIcon
            icon={faStar}
            className="text-[10px] text-amber-300"
          />
          <span>Más solicitado</span>
        </div>
      )}

      {/* Tarjeta Blanca */}
      <div
        className={`flex min-h-85 flex-col justify-between rounded-3xl border border-neutral-100 bg-white p-8 shadow-lg ${theme.borderTop}`}
      >
        {/* Sección Superior */}
        <div className="mb-6 flex flex-col items-start gap-5 lg:flex-row">
          {/* Ícono Principal */}
          <div
            className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl p-4 text-3xl ${theme.iconBg}`}
          >
            <FontAwesomeIcon icon={data.icon} />
          </div>

          {/* Textos */}
          <div className="grow">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="max-w-48 text-xl font-bold leading-tight text-neutral-900">
                  {data.title}
                </h3>

                <p className="mt-2 max-w-56 text-[14px] leading-snug text-neutral-500">
                  {data.description}
                </p>
              </div>

              {/* Flecha superior derecha */}
              <button
                type="button"
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${theme.btnArrow}`}
              >
                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
              </button>
            </div>

            {/* Tag */}
            <div className="mt-3">
              <span
                className={`rounded-full px-4 py-1 text-xs font-semibold ${theme.tagBg}`}
              >
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
          className="group grid grid-cols-[62%_39%] items-stretch overflow-hidden rounded-2xl border border-neutral-100 transition-all hover:shadow-md"
        >
          {/* Botón Hablar por WA */}
          <div
            className={`flex min-w-0 items-center justify-center gap-2 px-4 py-4 font-semibold transition-colors ${theme.waBtn}`}
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="shrink-0 text-[17px] text-white/90 animate-pulse"
            />

            <span className="whitespace-nowrap text-[12px] font-black leading-none text-white sm:text-[14px] xl:text-[15px]">
              Hablar por WhatsApp
            </span>
          </div>

          {/* Número */}
          <div
            className={`flex shrink-0 items-center justify-center gap-1 px-2.5 py-4 font-semibold transition-colors sm:px-3 ${theme.phoneBg}`}
          >
            <span className="whitespace-nowrap text-[12px] font-black leading-none sm:text-[13px]">
              {data.phone}
            </span>

            <FontAwesomeIcon
              icon={faChevronRight}
              className={`shrink-0 text-[10px] transition-transform group-hover:translate-x-0.5 ${theme.phoneArrow}`}
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Buttons;