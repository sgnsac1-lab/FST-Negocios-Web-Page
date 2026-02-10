
const FormBookReclamation = () => {

  const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target
  
  const formData = {
    nombre_cliente: e.target.nombre_cliente.value,
    domicilio_cliente: e.target.domicilio_cliente.value,
    tipo_documento: e.target.tipo_documento.value,
    numero_documento: e.target.numero_documento.value,
    fech_nac_cliente: e.target.fech_nac_cliente.value,
    correo_cliente: e.target.correo_cliente.value,
    telefono_cliente: e.target.telefono_cliente.value,
    tipo_Contrato: e.target.tipo_Contrato.value,
    fecha_producto_servicio: e.target.fecha_producto_servicio.value,
    monto_reclamado: e.target.monto_reclamado.value,
    descripcion: e.target.descripcion.value,
    tipo_Reclamacion: e.target.tipo_Reclamacion.value,
    detalle_reclamo_queja: e.target.detalle_reclamo_queja.value,
    pedido_cliente: e.target.pedido_cliente.value,
  };

  try {
    // eslint-disable-next-line no-unused-vars
      const data = await fetch('https://script.google.com/macros/s/AKfycbxwJcRHJLDuTWTZpjWARyoWtOKm_jy2ebbBH80Zg2m1f_pSEWNlOxTFJoTpexRJjLln/exec', {
      method: 'POST',
      mode: 'no-cors', // Importante para evitar bloqueos de CORS con Google
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    alert("¡Reclamación enviada con éxito!");
    form.reset();
    
  } catch (error) {
    console.error("Error:", error);
    }
  };

  const hoy = new Date().toLocaleDateString('es-PE')

  return (
    <>
      <section className="flex flex-col gap-5 items-center w-full mt-40 bg-gray-200 py-10 px-5 md:px-0">
        
        <div className="">
          <h1 className="font-bold text-4xl text-left">LIBRO DE RECLAMACIONES</h1>
          <p>Fecha:{hoy}</p>
          <p>FINANZAS STARTUPS TECNOLOGIA Y NEGOCIOS S.A.C</p>
          <p>RUC N° 20522161501</p>
          <p>Direccion: Jr. de la Roca de Vergallo Nro. 493 Int. 1101</p>
        </div>

        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <section className="h-fit md:w-250 w-100 flex flex-col gap-4 bg-white p-5 rounded-[20px]">
          <h3>1.- IDENTIFICACION DEL CONSUMIDOR RECLAMANTE</h3>
            <div className="grid md:grid-cols-2 gap-2 ">
              <div className="flex flex-col">
                <label>Nombres completos</label>
                <input type="text" name="nombre_cliente" required className="md:w-100 w-80 p-3 border rounded-md outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:bg-slate-50" />
              </div>
              <div className="flex flex-col">
                <label>Domicilio</label>
                <input type="text" name="domicilio_cliente" required className="md:w-100 w-80 p-3 border rounded-md outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:bg-slate-50" />
              </div>
              <div className="flex flex-col">
                <label>Tipo de documento</label>
                <select defaultValue="" name="tipo_documento" required className="md:w-100 w-80 p-3 border rounded-md outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:bg-slate-50">
                  <option value="">--Selecione--</option>
                  <option value="dni">DNI</option>
                  <option value="pasaporte">Pasaporte</option>
                  <option value="licencia_conducir">Licencia de conducir</option>
                  <option value="carnet_extranjeria">Carnet de extranjeria</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label>Numero de documento</label>
                <input type="number" name="numero_documento" required className="md:w-100 w-80 p-3 border rounded-md outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:bg-slate-50" onWheel={(e) => e.target.blur()} />
              </div>
              <div className="flex flex-col">
                <label>Fecha de nacimiento</label>
                <input type="date" name="fech_nac_cliente" required className="md:w-100 w-80 p-3 border rounded-md outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:bg-slate-50" />
              </div>
              <div className="flex flex-col">
                <label>Correo electrónico</label>
                <input type="email" name="correo_cliente" required className="md:w-100 w-80 p-3 border rounded-md outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:bg-slate-50" />
              </div>
              <div className="flex flex-col">
                <label>Telefono / Celular</label>
                <input type="number" name="telefono_cliente" required className="md:w-100 w-80 p-3 border rounded-md outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:bg-slate-50" onInput={(e) => {if (e.target.value < 0) e.target.value = 0; if (e.target.value.length > 9) {e.target.value = e.target.value.slice(0, 9);}}} onWheel={(e) => e.target.blur()} />
              </div>
            </div>
          </section>

          <section className="h-fit md:w-250 flex flex-col gap-4 bg-white p-5 rounded-[20px]">
            <h3>2.- IDENTIFICACION DEL BIEN CONTRATADO</h3>

            <div className="flex flex-col">
              <div>
                <label>Tipo de contrato</label>
                <div className="flex gap-5">
                  <div>
                  <input type="radio" value="producto" name="tipo_Contrato" required /><span>Producto</span>
                  </div>
                  <div>
                  <input type="radio" value="servicio" name="tipo_Contrato" required /><span>Servicio</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-start gap-5">

              <div className="flex flex-col">
                <label>Fecha</label>
                <input type="date" name="fecha_producto_servicio" required className="w-60 p-3 border rounded-md outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:bg-slate-50" />
              </div>

              <div className="flex flex-col">
                <label>Monto reclamado</label>
                {/* El contenedor que simula el input */}
                <div className="w-60 flex items-center border rounded-md transition-all 
                                focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-200 focus-within:bg-slate-50">
                  
                  {/* El símbolo S/. fijo */}
                  <span className="pl-3 pr-1 text-gray-500 font-semibold select-none">
                    S/.
                  </span>

                  {/* El input real (sin bordes para que no se note) */}
                  <input 
                    type="number"
                    name="monto_reclamado"
                    required
                    className="w-full p-3 pl-1 outline-none bg-transparent" 
                    onWheel={(e) => e.target.blur()}
                    placeholder="0.00"
                  />
                </div>
              </div>

            </div>

            <div className="flex flex-col">
                <label>Descripcion</label>
                <textarea name="descripcion" id="descripcion_id" required className="w-full h-40 p-3 border rounded-md outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:bg-slate-50"></textarea>
            </div>
          </section>

          <section className="h-fit md:w-250 flex flex-col gap-4 bg-white p-5 rounded-[20px]">
            <h3>3.- DETALLE DE LA RECLAMACION Y PEDIDO DEL CONSUMIDOR</h3>

            <div className="flex flex-col">
              <div>
                <label>Tipo de reclamacion</label>
                <div className="flex gap-5">
                  <div>
                  <input type="radio" value="reclamo" name="tipo_Reclamacion" required /><span>Reclamo(1)</span>
                  </div>
                  <div>
                  <input type="radio" value="queja" name="tipo_Reclamacion" required /><span>Queja(2)</span>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-col">
                <label>Detalle del Reclamo o queja</label>
                <textarea name="detalle_reclamo_queja" id="detalle_reclamo_queja_id" required className="w-full h-40 p-3 border rounded-md outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:bg-slate-50"></textarea>
            </div>

            <div className="flex flex-col">
                <label>Pedido del cliente</label>
                <textarea name="pedido_cliente" id="pedido_cliente_id" required className="w-full h-40 p-3 border rounded-md outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:bg-slate-50"></textarea>
            </div>

            <p>(1) RECLAMO: Disconformidad sobre el producto o servicio comprado.</p>
            <p>(2) QUEJA: Malestar con la atención o procesos, no con el producto.</p>

            <button className="w-30 p-3 bg-red-700 border rounded-md hover:bg-red-600 font-bold text-white" type="onSubmit">Enviar</button>
          </section>

        </form>
      </section>
    </>
  )
}

export default FormBookReclamation