import Home1 from "../Assets/Home1.mp4"
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
        <section className="w-full flex flex-col items-center gap-10 relative mt-40" >
                    {/* Contenedor del Video de Fondo */}
                    <div className="absolute w-full inset-0 -z-10">
                        <video 
                            ref={videoRef} 
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                            preload="auto"
                            className="w-full h-120 object-cover md:object-[center_20%] object-[right_90%]" 
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
                    <h1 className="md:text-6xl text-2xl text-center font-bold md:mt-10 mt-50 mx-auto md:w-180 md:ml-80 w-80 md:p-8 p-2 rounded-3xl bg-black/40 backdrop-blur-md border border-white/20 shadow-2xl text-white">
                        Te ayudamos a acceder a <span className="text-yellow-300">Fondos del Estado</span>
                    </h1>
                    
                    {/* BOTÓN EVALUACIÓN CENTRADO */}
                    <div className="relative md:w-125 md:ml-110 mx-auto flex justify-center">
                        {/* El destello azul ahora también está centrado */}
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        
                        <a 
                            href="https://forms.gle/RVhRwD3g5F2VtFPn7" 
                            target="_blank" 
                            className="relative block md:w-full w-40 text-center bg-blue-600 hover:bg-blue-500 text-white font-black py-6 px-8 rounded-4xl shadow-2xl transition-all duration-300 transform hover:scale-[1.05] active:scale-[0.98] text-sm md:text-3xl tracking-wider uppercase border-b-4 border-blue-800"
                        >
                            EVALUACIÓN GRATUITA
                        </a>
                    </div>
        </section>
    )
}

export default Hero