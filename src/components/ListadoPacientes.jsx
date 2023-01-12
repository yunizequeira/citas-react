
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes ,setPaciente,EliminarPaciente}) => {


  return (
  
    <div className="mx-5 md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">

      {pacientes && pacientes.length>0 ?
      <>
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
          Administra tus {""}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>
      </>
      : 
      <>
          <h2 className="font-black text-3xl text-center">No hay pacientes aun</h2>
        <p className="text-lg mt-5 text-center mb-10">
          Agraga uno para que puedas administrar tus {""}
          <span className="text-indigo-600 font-bold">Pacientes Citas </span>
        </p>
      </>
      }

      
      
        {pacientes.map((paciente) => (
          <Paciente key={paciente.id}
           paciente={paciente}
           setPaciente={setPaciente} 
           EliminarPaciente={EliminarPaciente}
           />
        ))}
      
    </div>
  );
};

export default ListadoPacientes;
