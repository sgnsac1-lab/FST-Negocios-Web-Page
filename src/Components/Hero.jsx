import Home1 from "../Assets/Home1.mp4"
import Banner from "../Assets/BannerFSTNEGOCIOS.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef } from 'react'


const Hero = () => {

    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    return(
        <section className="w-full flex flex-col items-start gap-10 relative md:mt-30 mt-25 md:mb-30 mb-10 py-5">
                    {/* Contenedor del Video de Fondo */}
                    <div className="absolute w-full inset-0 -z-10 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${Banner})` }}>
                        <video 
                            ref={videoRef} 
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                            preload="auto"
                            poster={Banner}
                            className="w-full h-150 object-cover md:object-[center_20%] object-[85%_50%] block" 
                        >
                            <source src={Home1} type="video/mp4" />
                        </video>
                    </div>

                    {/* BOTÓN DE VOLUMEN */}
                    <button 
                        onClick={toggleMute}
                        className="absolute bottom-5 right-5 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 border border-white/30"
                        title={isMuted ? "Activar sonido" : "Silenciar"}
                    >
                        <FontAwesomeIcon 
                            icon={isMuted ? faVolumeMute : faVolumeHigh} 
                            className="w-6 h-6"
                        />
                    </button>

                    {/* TÍTULO CENTRADO - Se usa mx-auto y w-full con max-w para que no se rompa */}
                    <div className="flex flex-col justify-between items-start md:px-8 md:py-8 px-2 py-4 bg-black/40 backdrop-blur-md border border-white/20 shadow-2xl text-white rounded-3xl md:w-180 w-40 h-105 md:ml-30">
                        <h1 className="md:text-6xl text-xl font-bold">
                            Te ayudamos a acceder a <span className="text-blue-500">Fondos del Estado</span>
                        </h1>
                        <p className="md:w-100">Asesoria estrategica, gestion de fondos estables y transformacion digital para impulsar el crecimiento de tu empresa.</p>
                        <div className="bg-blue-600 hover:bg-blue-500 w-30 md:w-100 md:p-4 p-1 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-[1.05] active:scale-[0.98] border-b-4 border-blue-800">
                            <div className="bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse md:w-125"></div>
                                <a 
                                    href="https://forms.gle/n2U1jQ9tTN739cgF7" 
                                    target="_blank" 
                                    className="text-white font-black text-sm md:text-2xl tracking-wider uppercase"
                                >
                                    Quiero saber si califico
                                </a>
                        </div>
                    </div>
                    
        </section>
    )
}

export default Hero