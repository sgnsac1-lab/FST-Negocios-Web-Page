import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { 
  faChevronRight, 
  faBuildingColumns, 
  faLightbulb, 
  faGlobe, 
  faShieldHalved, 
  faCircle
} from '@fortawesome/free-solid-svg-icons'
import Button from './Buttons'

const ButtonsActtion = () => {

    const cardsData = [
        {
            title: "Subsidios, bonos y recursos no reembolsables",
            description: "Ideal si buscas acceder a oportunidades, beneficios del Estado o financiamiento para tu negocio.",
            tag: "Estado peruano",
            phone: "+51 949 638 568",
            whatsappUrl: "https://wa.me/51949638568",
            icon: faBuildingColumns,
            // Estilos dinámicos por color (Tailwind)
            theme: {
            borderTop: "border-t-4 border-t-emerald-500",
            iconBg: "bg-emerald-50 text-emerald-600",
            tagBg: "bg-emerald-50 text-emerald-700",
            btnArrow: "bg-emerald-50 text-emerald-600 hover:bg-emerald-100",
            waBtn: "bg-emerald-800 hover:bg-emerald-900",
            phoneBg: "bg-emerald-50 text-emerald-900 hover:bg-emerald-100",
            phoneArrow: "text-emerald-700/50"
            }
        },
        {
            title: "Proyectos de Tecnología e innovación",
            description: "Para asesoría en proyectos innovadores, transformación digital y oportunidades vinculadas a innovación.",
            tag: "Innovación",
            phone: "+51 943 190 708",
            whatsappUrl: "https://wa.me/51943190708",
            icon: faLightbulb,
            theme: {
            borderTop: "border-t-4 border-t-blue-500",
            iconBg: "bg-blue-50 text-blue-600",
            tagBg: "bg-blue-50 text-blue-700",
            btnArrow: "bg-blue-50 text-blue-600 hover:bg-blue-100",
            waBtn: "bg-blue-600 hover:bg-blue-700",
            phoneBg: "bg-blue-50 text-blue-900 hover:bg-blue-100",
            phoneArrow: "text-blue-600/50"
            }
        },
        {
            title: "Clientes internacionales",
            description: "Si estás fuera de Perú o deseas recibir orientación sobre fondos internacionales.",
            tag: "Atención global",
            phone: "+51 906 502 930",
            whatsappUrl: "https://wa.me/51906502930",
            icon: faGlobe,
            theme: {
            borderTop: "border-t-4 border-t-amber-600",
            iconBg: "bg-amber-50 text-amber-700",
            tagBg: "bg-amber-50 text-amber-800",
            btnArrow: "bg-amber-50 text-amber-700 hover:bg-amber-100",
            waBtn: "bg-amber-700 hover:bg-amber-800",
            phoneBg: "bg-amber-50 text-amber-950 hover:bg-amber-100",
            phoneArrow: "text-amber-700/50"
            }
        }
    ]

    return (
        <section className="w-full">

            <div className='flex flex-col md:flex-row gap-4 justify-center items-center p-4 md:mt-40 mt-30'>
                {cardsData.map((card, index) => (
                    <Button key={index} data={card} />
                ))}
            </div>

            <div className='mt-7 flex justify-center'>
                <a href='https://www.youtube.com/playlist?list=PLfqikFL7EsZDHi1xsqM6hVje3N9uiiV44' target='_blank' className="flex flex-col md:flex-row items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-red-500 transition-all group cursor-pointer md:w-120 w-70">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-red-600 text-white text-2xl mr-4 group-hover:scale-110 transition-transform">
                        {/* Aquí va el ícono de YouTube */}
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div>
                        <p className="font-bold text-gray-800 text-center md:text-left">Casos de Éxito</p>
                        <p className="text-sm text-gray-500 text-center md:text-left">Mira cómo hemos ayudado a otros</p>
                    </div>
                    <FontAwesomeIcon 
                        icon={faChevronRight} 
                        className="text-gray-300 group-hover:translate-x-1 transition-all md:ml-30 group-hover:text-red-500 text-center"
                    />
                </a>
            </div>
 
        </section>
    )
}

export default ButtonsActtion