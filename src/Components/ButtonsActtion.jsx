import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Importamos los íconos de marcas
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ButtonsActtion = () => {
    return (
        <section className="w-full flex flex-col md:flex-row gap-4 justify-center items-center p-4 md:mt-40 mt-30">
            {/* Botón WhatsApp */}
            <a href='https://whatsapp.com/channel/0029VakG2v359PwMS7GIti1B' target='_blank' className="flex flex-col md:flex-row items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-400 transition-all group cursor-pointer md:w-120 w-70">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-green-500 text-white text-2xl mr-4 group-hover:scale-110 transition-transform">
                    {/* Aquí va el ícono de WhatsApp */}
                    <FontAwesomeIcon icon={faWhatsapp} />
                </div>
                <div>
                    <p className="font-bold text-gray-800 text-center md:text-left">Canal de WhatsApp</p>
                    <p className="text-sm text-gray-500 text-center md:text-left">Únete para recibir alertas exclusivas</p>
                </div>
                <FontAwesomeIcon 
                    icon={faChevronRight} 
                    className="text-gray-300 group-hover:translate-x-1 transition-all md:ml-30 group-hover:text-blue-400 text-center"
                />
            </a>

            {/* Botón YouTube */}
            <a href='https://www.youtube.com/playlist?list=PLfqikFL7EsZDHi1xsqM6hVje3N9uiiV44' target='_blank' className="flex flex-col md:flex-row items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-400 transition-all group cursor-pointer md:w-120 w-70">
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
                    className="text-gray-300 group-hover:translate-x-1 transition-all md:ml-30 group-hover:text-blue-400 text-center"
                />
            </a>
        </section>
    );
}

export default ButtonsActtion;