import Acreditattions from "./Components/Acreditattions"
import ButtonsActtion from "./Components/ButtonsActtion"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Services from "./Components/Services"
import SuccesStorys from "./Components/SuccesStorys"


const App = () => {

  return(
    <>
      <div className="flex flex-col">
        <Navbar />
          <main className="w-full h-full">
            <Hero />
            <ButtonsActtion />
            <Services />
            <Acreditattions />
            <SuccesStorys />
          </main>
      </div>

    </>
  )
}

export default App