
const Paciente = ({paciente,setPaciente,EliminarPaciente}) => {
   
   
   const{nombre,propietario,email,fecha,sintomas,id} = paciente;

   const handleEliminar = () => {
      const respuesta = confirm('Deseas eliminar el paciente '+""+ nombre + "?");
      if(respuesta) {
          EliminarPaciente(id)
      }
   }
  return (
    
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl" key={Math.random()}>
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
               <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">propietario: {''}
               <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
               <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
               <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
               <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-between">
               <button
               type="button"
               className="py-2 px-5 bg-indigo-600 rounded hover:bg-indigo-800 text-white font-bold uppercase"
               onClick={(  ) =>setPaciente(paciente)}
               >Modificar </button>
               <button
               type="button"
               className="py-2 px-5 bg-red-600 rounded hover:bg-red-800 text-white font-bold uppercase"
               onClick={handleEliminar}
               >ELiminar</button>
            </div>
        </div>
    
  )
}

export default Paciente
