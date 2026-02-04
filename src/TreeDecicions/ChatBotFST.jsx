import ChatBot from "react-chatbotify"

const ChatBotFST = () => {

    const flow = {
    start: {
      message: "Hola, yo soy FredBot, Robot creado por FST NEGOCIOS 🤖",
      path: "menu_principal"
    },
    menu_principal: {
      message: "Por favor, selecciona una opción indicando el número o haciendo clic:",
      options: ["1. Quienes somos", "2. Servicios", "3. Pagos", "4. Hablar con un asesor"],
      chatDisabled: true, // Esto obliga al usuario a usar las opciones
      path: (params) => {
        if (params.userInput.includes("1")) return "Quienes_somos";
        if (params.userInput.includes("2")) return "Sevicios";
        if (params.userInput.includes("3")) return "Pagos";
        if (params.userInput.includes("4")) return "Hablar_con_un_asesor";
        return "menu_principal"; // Si escribe algo que no es, repite el menú
      }
    },
    // Logica para tematica de quienes somo o informacion de la empresa
    Quienes_somos:{
        message: "FST Negocios es una organización dedicada a brindar soluciones estratégicas integrales. Nos especializamos en consultoría, gestión de proyectos y optimización de procesos bajo estándares de calidad internacional, ayudando a las empresas a alcanzar sus objetivos de manera eficiente.",
        options: ["1. Como garantizan calidad?", "2. Tienen acreditaciones?", "3. Que resultados han logrado?"],
        chatDisabled: true, // Esto obliga al usuario a usar las opciones
        path: (params) => {
        if (params.userInput.includes("1")) return "Calidad";
        if (params.userInput.includes("2")) return "Acreditaciones";
        if (params.userInput.includes("3")) return "Resultados";
        return "menu_principal";
        }
    },
    Calidad:{
        message: "En FST Negocios operamos bajo un ecosistema de calidad integral: la ISO 9001:2015 asegura nuestra excelencia operativa y enfoque en tu satisfacción, mientras que la ISO/IEC 27001 blinda la confidencialidad de tus datos. Nos mantenemos a la vanguardia con la ISO/IEC 42001:2023 para una gestión ética de la Inteligencia Artificial, y complementamos nuestra robustez técnica con la ISO/IEC 25010 para garantizar la calidad y eficiencia del software que desarrollamos, la ISO 56002 para gestionar la innovación continua, y la ISO/IEC 20000-1 que optimiza la entrega de servicios tecnológicos automatizados.",
        transition: { duration: 2000 }, // Pausa natural de 2 segundos
        path: "menu_principal"
    }
    
  };

    return(
        <ChatBot flow={flow} />
    )
}

export default ChatBotFST