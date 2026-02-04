import { faHandHoldingDollar, faLaptopCode, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Services = () => {

    return(

        <section className="flex flex-col w-full justify-center items-center gap-8">

            <div>
                <h2 className="font-bold text-3xl">NUESTROS SERVICIOS</h2>
                <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="flex flex-wrap gap-5">
                <div className="flex flex-col gap-3 p-8 rounded-[2.5rem] bg-slate-50 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
                        <FontAwesomeIcon icon={faHandHoldingDollar} />
                    </div>
                    <h3 className='font-bold text-xl w-50'>Asesorias para  Ganar Fondos del Estado</h3>
                    <p className='w-60'>Apoyamos a personas y empresas a acceder a fondos no reembolsables y financiamiento público.</p>
                    <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white font-black py-4 px-6 rounded-2xl transition-all duration-300 w-full justify-center ">
                    <span>Solicitar Evaluación</span>
                    </a>
                </div>

                <div className="flex flex-col gap-3 p-8 rounded-[2.5rem] bg-slate-50 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
                        <FontAwesomeIcon icon={faLaptopCode} />
                    </div>
                    <h3 className='font-bold text-xl w-50'>Transformacion Digital</h3>
                    <p className='w-60'>Proyectos estrategicos para modernizar tu negocio mediante tecnologia de vanguardia.</p>
                    <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white font-black py-4 px-6 rounded-2xl transition-all duration-300 w-full justify-center">
                    <span>Solicitar Evaluación</span>
                    </a>
                </div>

                <div className="flex flex-col gap-3 p-8 rounded-[2.5rem] bg-slate-50 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
                        <FontAwesomeIcon icon={faLightbulb} />
                    </div>
                    <h3 className='font-bold text-xl w-50'>Proyectos de Innovación</h3>
                    <p className='w-60'>Desarrollo de nuevas ideas y soluciones disruptivas para ganar competitividad en el mercado.</p>
                    <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white font-black py-4 px-6 rounded-2xl transition-all duration-300 w-full justify-center">
                    <span>Solicitar Evaluación</span>
                    </a>
                </div>
            
            </div>
        </section>

    )
}

export default Services