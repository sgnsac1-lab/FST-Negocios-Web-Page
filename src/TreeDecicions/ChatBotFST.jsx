import ChatBot from "react-chatbotify"
import IconBotAnimated from "../Assets/FredBotAnimated1.gif"
import FaceBot from "../Assets/FaceBot.png"

const ChatBotFST = () => {

    const flow = {
      start: {
        message: "Hola, yo soy FredBot, Robot creado por FST NEGOCIOS 🤖",
        path: "menu_principal"
      },
      menu_principal: {
        message: "Bienvenido!, Por favor, para poder ayudarle seleccione una opción haciendo clic:",
        options: ["1. Quienes somos", "2. Servicios", "3. Pagos", "4. Hablar con un asesor"],
        chatDisabled: true, // Esto obliga al usuario a usar las opciones
        path: (params) => {
          if (params.userInput.includes("1")) return "Quienes_somos";
          if (params.userInput.includes("2")) return "Servicios";
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
          transition: { duration: 5000 }, // Pausa natural de 2 segundos
          path: "menu_principal"
      },
      Acreditaciones: {
        message: "FST Negocios consolida su liderazgo en el ecosistema empresarial mediante el respaldo de instituciones clave del Estado 🏛️, garantizando procesos de alta calidad y transparencia ✅.Contamos con la Acreditación de Adhesión a la Red de Centros de Transformación Digital Empresarial del Ministerio de la Producción ⚙️💻 (https://www.gob.pe/institucion/produce/normas-legales/7490544-00011-2025-produce-dgitdf), lo que nos faculta para liderar la digitalización industrial 🚀.Asimismo, nuestra excelencia operativa está avalada por la Acreditación en la Red de Aceleradoras de la PCM (Presidencia del Consejo de Ministros) 🇵🇪, reafirmando nuestro compromiso con la innovación y el desarrollo económico del país 📈 (https://www.gob.pe/29832-fst-negocios).",
        transition: { duration: 5000 }, // Pausa natural de 2 segundos
        path: "menu_principal"
      },
      Resultados: {
        message: "¡Nuestros resultados hablan por nosotros! 🏆 En FST Negocios hemos impulsado a numerosas empresas y emprendedores a alcanzar el siguiente nivel, logrando ganar concursos clave como ProInnóvate y Turismo Emprende 🇵🇪✨. Gracias a nuestra asesoría estratégica, nuestros clientes han accedido a importantes fondos no reembolsables y bonos de digitalización para modernizar sus operaciones 🚀💻.Puedes conocer las historias reales de éxito y transformación en nuestra lista de reproducción oficial 🎬👇: 🔗 https://www.youtube.com/playlist?list=PLfqikFL7EsZDHi1xsqM6hVje3N9uiiV44",
        transition: { duration: 5000 }, // Pausa natural de 2 segundos
        path: "menu_principal"
      },

      //Logica de Servicios
      Servicios: {
        message: "En FST Negocios impulsamos tu crecimiento a través de tres pilares estratégicos: te ayudamos a asegurar el financiamiento que necesitas mediante nuestras Asesorías para Ganar Fondos del Estado 💰, modernizamos tu operativa con proyectos de Transformación Digital de vanguardia 💻, y potenciamos tu competitividad en el mercado desarrollando Proyectos de Innovación disruptivos 🚀. ¿Sobre cuál de estos servicios te gustaría recibir más información detallada?",
        options: ["1. Asesorias para Ganar Fondos del Estado", "2. Transformacion Digital", "3. Proyectos de Innovacion"],
        chatDisabled: true, // Esto obliga al usuario a usar las opciones
        path: (params) => {
          if (params.userInput.includes("1")) return "Asesorias";
          if (params.userInput.includes("2")) return "Transformacion";
          if (params.userInput.includes("3")) return "Proyectos";
          return "menu_principal";
          }
      },
      Asesorias: {
        message: "Nuestra asesoría especializada consiste en un acompañamiento integral donde identificamos las convocatorias estatales (como ProInnóvate o Turismo Emprende) que mejor se adaptan a tu perfil empresarial 📋. Con nosotros, ganarás la oportunidad de acceder a financiamiento no reembolsable para escalar tu negocio, respaldado por un proceso que incluye el diagnóstico de elegibilidad, la formulación técnica del proyecto y la gestión del expediente de postulación 🚀. El camino al éxito comienza hoy. Puedes agendar tu asesoría personalizada de manera inmediata realizando el pago de forma segura en el siguiente enlace:",
        component: (
          <div style={{ padding: "10px", textAlign: "center" }}>
            <a 
              href="https://mpago.la/22NbHX7" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: "#007bff",
                textDecoration: "underline",
                fontWeight: "bold",
                fontSize: "16px"
              }}
            >
              💳 [Haga clic aquí para Pagar con Mercado Pago]
            </a>
          </div>
        ),
        transition: { duration: 5000 }, // Pausa natural de 2 segundos
        path: "menu_principal"
      },
      Transformacion: {
        message: "En FST Negocios impulsamos tu Transformación Digital mediante la automatización inteligente de procesos y flujos de trabajo utilizando el sistema Odoo 🚀. Desarrollamos soluciones 100% a medida y adaptadas estrictamente a los requerimientos de tu empresa, permitiéndote centralizar la gestión y optimizar cada área operativa 💻. Con nosotros, ganarás una arquitectura digital robusta que elimina tareas repetitivas y mejora la toma de decisiones en tiempo real, respaldada por un proceso de diagnóstico, configuración personalizada e implementación estratégica según tus necesidades específicas. ¡Moderniza tu negocio y prepárate para escalar con eficiencia! ✨",
        component: (
          <div style={{ padding: "10px", textAlign: "center" }}>
            <a 
              href="https://mpago.la/22NbHX7" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: "#007bff",
                textDecoration: "underline",
                fontWeight: "bold",
                fontSize: "16px"
              }}
            >
              💳 [Haga clic aquí para Obtener una Asesoria]
            </a>
          </div>
        ),
        transition: { duration: 5000 }, // Pausa natural de 2 segundos
        path: "menu_principal"
      },
      Proyectos: {
        message: "En un mercado que cambia constantemente, la innovación no es una opción, sino la clave para que tu negocio sea competitivo y sostenible a largo plazo 🚀. En FST Negocios desarrollamos soluciones disruptivas que permiten transformar ideas en ventajas comerciales reales, optimizando el valor que entregas a tus clientes 💡. Entendemos que cada etapa empresarial requiere un enfoque distinto; por ello, contamos con estrategias especializadas según tu nivel actual:",
        options: ["1. Para emprendimientos", "2. Para pequeñas empresas"],
        chatDisabled: true, // Esto obliga al usuario a usar las opciones
        path: (params) => {
          if (params.userInput.includes("1")) return "Emprendimientos";
          if (params.userInput.includes("2")) return "Pequeñas_Empresas";
          return "menu_principal";
        }
      },
      Emprendimientos:{
        message: "En el mundo emprendedor, distinguimos dos rutas estratégicas según tu visión 🚀:1️⃣ Emprendimientos Innovadores: Nos enfocamos en la creación de soluciones desde cero. Desarrollamos prototipos personalizados basados en tus necesidades y te acompañamos con un seguimiento constante hasta consolidar un Mínimo Viable (MVP) que esté listo para el mercado 🛠️✨.2️⃣ Emprendimientos Dinámicos: Son aquellos negocios que ya tienen un modelo validado y buscan un crecimiento acelerado y escalable .¡Sea cual sea tu perfil, en FST Negocios tenemos el plan para impulsarte!",
        component: (
          <div style={{ padding: "10px", textAlign: "center" }}>
            <a 
              href="https://mpago.la/22NbHX7" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: "#007bff",
                textDecoration: "underline",
                fontWeight: "bold",
                fontSize: "16px"
              }}
            >
              💳 [Haga clic aquí para Obtener una Asesoria]
            </a>
          </div>
        ),
        transition: { duration: 5000 }, // Pausa natural de 2 segundos
        path: "menu_principal"
      },
      Pequeñas_Empresas: {
        message: "Para las pequeñas empresas, la innovación es el motor estratégico para asegurar la rentabilidad y el liderazgo en el mercado 🏢. Nuestro servicio se especializa en dos áreas críticas:1️⃣ Innovación Empresarial: Transformamos tus procesos, productos o servicios actuales mediante soluciones disruptivas que aumentan tu competitividad y valor comercial 💡.2️⃣ Validación Empresarial: Es el proceso técnico donde verificamos la viabilidad real de tu modelo de negocio o nuevo producto 📉. Validamos que la solución cumpla con los estándares del mercado, los requisitos del cliente y la factibilidad técnica necesaria para asegurar que tu inversión esté respaldada por resultados comprobables antes de cualquier fase de expansión ✅.¡Asegura el éxito de tu organización con nuestra metodología profesional!",
        component: (
          <div style={{ padding: "10px", textAlign: "center" }}>
            <a 
              href="https://mpago.la/22NbHX7" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: "#007bff",
                textDecoration: "underline",
                fontWeight: "bold",
                fontSize: "16px"
              }}
            >
              💳 [Haga clic aquí para Obtener una Asesoria]
            </a>
          </div>
        ),
        transition: { duration: 5000 }, // Pausa natural de 2 segundos
        path: "menu_principal"
      },

      // Logica para la seccion de pagos
      Pagos:{
        message:"¡Invierte en el futuro de tu empresa con total comodidad! 💳 Aprovecha nuestro beneficio exclusivo de 12 meses sin intereses para agendar una asesoría de alto impacto con nuestros especialistas. Durante 60 minutos de sesión personalizada, nos enfocaremos en aclarar todas tus dudas, brindarte las mejores opciones estratégicas para tu negocio y entregarte un trato al cliente sin igual que caracteriza nuestra excelencia profesional 🤝✨. Es el momento de obtener claridad y soluciones reales sin afectar tu flujo de caja inmediatamente. ¡Asegura tu sesión ahora!",
        component: (
          <div style={{ padding: "10px", textAlign: "center" }}>
            <a 
              href="https://mpago.la/22NbHX7" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: "#007bff",
                textDecoration: "underline",
                fontWeight: "bold",
                fontSize: "16px"
              }}
            >
              💳 [Haga clic aquí para Obtener una Asesoria]
            </a>
          </div>
        ),
        transition: { duration: 5000 }, // Pausa natural de 2 segundos
        path: "menu_principal"
      },

      //Logica de Hablar con un asesor
      Hablar_con_un_asesor:{
        message: "A continuacion se le brindara un enlace que lo redirecionara a Whatsapp para que pueda tener contacto con uno de nuestros asesores de manera inmediata:",
        component: (
          <div style={{ padding: "10px", textAlign: "center" }}>
            <a 
              href="https://wa.me/51949638568" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: "green",
                textDecoration: "underline",
                fontWeight: "bold",
                fontSize: "16px"
              }}
            >
              ☎️ [Haga clic aquí para Contactar con un asesor]
            </a>
          </div>
        ),
        transition: { duration: 5000 }, // Pausa natural de 2 segundos
        path: "menu_principal"
      }

    };






    const settings = {
      chatButton: {
        showNotification: true, // 1. Elimina el número rojo sobre la burbuja     
        icon: IconBotAnimated,               // Puedes poner un emoji o la URL de tu logo
      },
      header: {
        title: "FredBot",
        showAvatar: true,
        avatar: IconBotAnimated // Opcional: el logo de FST Negocios
      },
      botBubble: {
        showAvatar: true,
        avatar: FaceBot
      },
      notification: {
        disabled: true
      },
      tooltip: {
        mode: "NEVER",
      },
      general: {
        showFooter: false
      },
      chatWindow: {
        enableMarkdown: true,
        showMessagePrompt: true
      }
    };

    return(

      <ChatBot settings={settings} flow={flow} />
    )
}

export default ChatBotFST