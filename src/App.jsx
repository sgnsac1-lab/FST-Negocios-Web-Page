import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChatBotFST from "./TreeDecicions/ChatBotFST"
import ButtonWhatsApp from "./Components/ButtonWhatsApp"
import Acreditattions from "./Components/Acreditattions"
import ButtonsActtion from "./Components/ButtonsActtion"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Services from "./Components/Services"
import SuccesStorys from "./Components/SuccesStorys"
import EventosAsistidos from "./Components/EventosAsistidos";
import PrototiposImplementaciones from "./Components/PrototiposImplementaciones";

import FormBookReclamation  from './BookReclamations/FormBookReclamation'


const App = () => {

  return(
    <>
      <Router>
      <div className="flex flex-col w-full gap-2">
        <Navbar />
        
        <Routes>
          {/* RUTA DE LA LANDING PAGE */}
          <Route path="/" element={
            <main className="w-full h-full">
              <section id='inicio'>
                <Hero />
              </section>
              <section id='contacto'>
                <ButtonsActtion />
              </section>
              <section id='servicios'>
                <Services />
              </section>
              <section id='acreditaciones'>
                <Acreditattions />
              </section>
              <section id='casos-exito'>
                <SuccesStorys />
              </section>
              <section id='eventos-asistidos'>
                <EventosAsistidos />
              </section>
              <section id='trabajos'>
                <PrototiposImplementaciones />
              </section>
              
            </main>
          } />

          {/* RUTA DEL LIBRO DE RECLAMACIONES */}
          <Route path="/libro-de-reclamaciones" element={<FormBookReclamation />} />
        </Routes>

        <section id='recursos'>
          <Footer />
        </section>
        <ButtonWhatsApp />
      </div>
    </Router>

    </>
  )
}

export default App