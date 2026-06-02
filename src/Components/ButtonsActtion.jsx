import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { 
  faChevronRight, 
  faBuildingColumns, 
  faLightbulb, 
  faGlobe, 
  faShieldHalved, 
  faCircle,
  faUsers,
  faShield
} from '@fortawesome/free-solid-svg-icons'
import Button from './Buttons'

const ButtonsActtion = () => {

    const cardsData = [
        {
            isMostRequested: true,
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
        <section className="w-full bg-slate-900 py-2">

            <div className='w-full flex justify-center items-center mb-10'>
                <div className='md:w-300 w-80 border p-4 rounded-lg flex flex-col md:flex-row items-center justify-between gap-2 text-white text-lg md:divide-x not-md:divide-y divide-gray-600 h-110 md:h-fit'>
                    <div className='flex items-center gap-4 h-20'>
                        <FontAwesomeIcon icon={faUsers} className='text-4xl' />
                        <div className='flex flex-col'>
                            <p className='font-bold'>+250</p>
                            <p>Empresas asesoradas</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0'>
                        <div className='flex items-center gap-4'>
                            <FontAwesomeIcon icon={faShield} className='text-4xl' />
                            <p className='md:w-120 w-40'>Empresas asesoradas por FST NEGOCIOS han accedido a fondos para innovacion, digitalizacion y crecimiento.</p>
                        </div>
                        <a href='https://www.youtube.com/playlist?list=PLfqikFL7EsZDHi1xsqM6hVje3N9uiiV44' target='_blank' className="flex flex-col md:flex-row items-center p-2 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-red-500 transition-all group cursor-pointer md:w-70 w-55">
                            <div className="size-10 rounded-xl flex items-center justify-center bg-red-600 text-white text-xl mr-4 group-hover:scale-110 transition-transform">
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>
                            <div>
                                <p className="font-bold text-center md:text-left">Ver Casos de Éxito</p>
                            </div>
                            <FontAwesomeIcon 
                                icon={faChevronRight} 
                                className="text-gray-300 group-hover:translate-x-1 transition-all group-hover:text-red-500 text-center"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className='text-white flex flex-col justify-center items-center text-center gap-2'>
                <h1 className='font-bold text-3xl md:text-5xl'>Elige tu <span className='text-blue-500'>canal de atencion</span></h1>
                <p>Te conectamos por WhatsApp según el tipo de asesoría que necesitas.</p>
            </div>

            <div className='flex flex-col md:flex-row gap-4 justify-center items-center p-4 mt-10'>
                {cardsData.map((card, index) => (
                    <Button key={index} data={card} />
                ))}
            </div>
 
        </section>
    )
}

export default ButtonsActtion