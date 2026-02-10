import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import logo from "../Assets/Logo.jpeg"
import LibroReclamaciones from "../Assets/LibroReclamaciones.webp"

const Footer = () => {

    return(

        <section className="w-full grid md:grid-cols-4 gap-5 md:gap-0 px-5 md:px-25 py-5 items-center">

            <div className="flex flex-col items-center md:items-start gap-2">
                    <img src={logo} className='size-35' />
                <p className="md:w-70 w-60 text-slate-500 text-center md:text-left">Expertos en consultoria estrategica, gestion de fondos estatales y transformacion digital para impulsar el crecimiento de tu empresa.</p>
            </div>

            <div className="flex flex-col items-center gap-5 h-35">
                <h4 className='font-bold'>CONTACTO DIRECTO</h4>

                <div className="flex flex-col">
                    <a href="mailto:consultas@fstnegocios.com" className="hover:text-blue-600 transition-colors flex items-center gap-2 text-slate-500"><FontAwesomeIcon icon={faEnvelope}/>consultas@fstnegocios.com</a>
                    <a href="https://wa.me/51949638568" className="hover:text-green-500 transition-colors flex items-center gap-2 text-slate-500"><FontAwesomeIcon icon={faWhatsapp}/>Conversa con nosotros por Whatsapp</a>
                </div>
            </div>

            <div className="flex flex-col items-center gap-5 h-35">
                <h4 className='font-bold'>SERVICIO AL CLIENTE</h4>

                <div className="flex flex-col items-center">
                    <img src={LibroReclamaciones} className='size-25' />
                    <Link to="/libro-de-reclamaciones">Libro de reclamaciones</Link>
                </div>
            </div>

            <div className="flex flex-col md:items-end items-center gap-5 h-35">
                <h3 className="font-bold">NUESTRAS REDES SOCIALES</h3>
                <div className="flex flex-col md:flex-row md:justify-start justify-center items-center gap-2">
                    {/* Facebook (Link al formulario como se solicitó) */}
                    <a 
                        href="https://www.facebook.com/profile.php?id=61576697158088" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-[#1877F2] text-white rounded-2xl flex items-center justify-center text-xl shadow-lg shadow-blue-200 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                        title="Facebook"
                    >
                        <FontAwesomeIcon icon={faFacebookF}/>
                    </a>

                    {/* Instagram */}
                    <a 
                        href="https://www.instagram.com/fstnegocios?igsh=aTY2eWs4eGR6ZjAw" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-2xl flex items-center justify-center text-xl shadow-lg shadow-pink-100 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                        title="Instagram"
                    >
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>

                    {/* TikTok */}
                    <a 
                        href="https://www.tiktok.com/@fstnegocios?_r=1&_t=ZS-93cPj1lpSB0" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center text-xl shadow-lg shadow-gray-200 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                        title="TikTok"
                    >
                        <FontAwesomeIcon icon={faTiktok}/>
                    </a>

                    {/* YouTube */}
                    <a 
                        href="https://www.youtube.com/@FSTNEGOCIOS" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-[#FF0000] text-white rounded-2xl flex items-center justify-center text-xl shadow-lg shadow-red-100 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                        title="YouTube"
                    >
                        <FontAwesomeIcon icon={faYoutube}/>
                    </a>
                </div>
                <h3 className='text-sm text-slate-400'>¡SIGUENOS Y NO TE PIERDAS NADA!</h3>
            </div>

        </section>

    )
}

export default Footer