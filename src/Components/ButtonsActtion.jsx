import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Importamos los íconos de marcas
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ButtonsActtion = () => {
    return (
        <section className="w-full flex flex-col md:flex-row gap-4 justify-center p-4">
            {/* Botón WhatsApp */}
            <a className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-400 transition-all group cursor-pointer w-120">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-green-500 text-white text-2xl mr-4 group-hover:scale-110 transition-transform">
                    {/* Aquí va el ícono de WhatsApp */}
                    <FontAwesomeIcon icon={faWhatsapp} />
                </div>
                <div>
                    <p className="font-bold text-gray-800">Canal de WhatsApp</p>
                    <p className="text-sm text-gray-500">Únete para recibir alertas exclusivas</p>
                </div>
                <FontAwesomeIcon 
                    icon={faChevronRight} 
                    className="text-gray-300 group-hover:translate-x-1 transition-all ml-30 group-hover:text-blue-400 "
                />
            </a>

            {/* Botón YouTube */}
            <a className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-400 transition-all group cursor-pointer w-120">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-red-600 text-white text-2xl mr-4 group-hover:scale-110 transition-transform">
                    {/* Aquí va el ícono de YouTube */}
                    <FontAwesomeIcon icon={faYoutube} />
                </div>
                <div>
                    <p className="font-bold text-gray-800">Casos de Éxito</p>
                    <p className="text-sm text-gray-500">Mira cómo hemos ayudado a otros</p>
                </div>
                <FontAwesomeIcon 
                    icon={faChevronRight} 
                    className="text-gray-300 group-hover:translate-x-1 transition-all ml-30 group-hover:text-blue-400 "
                />
            </a>
        </section>
    );
}

export default ButtonsActtion;