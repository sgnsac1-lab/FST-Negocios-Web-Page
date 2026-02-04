import ButtonWhatsApp from "./Components/ButtonWhatsApp"
import Acreditattions from "./Components/Acreditattions"
import ButtonsActtion from "./Components/ButtonsActtion"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Services from "./Components/Services"
import SuccesStorys from "./Components/SuccesStorys"


const App = () => {

  return(
    <>
      <div className="flex flex-col w-full gap-2">
        <Navbar />
          <main className="w-full h-full">
            <Hero />
            <ButtonsActtion />
            <Services />
            <Acreditattions />
            <SuccesStorys />
          </main>
          
          <Footer />
          <ButtonWhatsApp />
      </div>

    </>
  )
}

export default App