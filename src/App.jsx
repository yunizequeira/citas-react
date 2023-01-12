import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState,useEffect } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState([]);

  // Agregar a localStorage


useEffect(() =>{
  const ObtenerLS = ()=>{
    const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
  console.log(pacientesLS)
  }
  ObtenerLS();
},[]);

 useEffect(() => {
  localStorage.setItem("pacientes",JSON.stringify(pacientes));
 },[pacientes])

  const EliminarPaciente = id => {
    const arrayNew = pacientes.filter(
      (pacienteState) => pacienteState.id !== id
    );
    setPacientes(arrayNew);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex  ">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />

        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          EliminarPaciente={EliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
