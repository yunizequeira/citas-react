import { useState, useEffect } from "react";
import Error from "./Error";
const Formulario = ({ pacientes, setPacientes, paciente,setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);
  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
      
    }
  }, [paciente]);

  function generarID() {
    const fecha = Date.now().toString(36);
    const numero = Math.random().toString(36).substr(2);
    return fecha + numero;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validando formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
    } else {
      setError(false);
      // Objeto de paciente
      const objectPacientes = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
      };
      if (paciente.id) {
        // editando
        objectPacientes.id = paciente.id;

        const pacientesActualizados = pacientes.map((pacienteState) =>
          pacienteState.id === paciente.id ? objectPacientes : pacienteState
        );

        setPacientes(pacientesActualizados);
        setPaciente({})
      } else {
        // nuevo registro
        objectPacientes.id = generarID();
        setPacientes([...pacientes, objectPacientes]);
      }

      // reiniciar el formulario
      setNombre("");
      setPropietario("");
      setEmail("");
      setFecha("");
      setSintomas("");
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Paciente</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600  font-bold ">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error mensaje="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            type="text"
            id="mascota"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 "
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Propietario
          </label>
          <input
            type="text"
            id="propietario"
            placeholder="Nombre de la propietario"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 "
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            placeholder="E-mail contacto propietario"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            type="date"
            id="alta"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 "
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 "
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          className="w-full p-3 bg-indigo-600 rounded-lg text-white text-md font-bold cursor-pointer hover:bg-indigo-800 transition-colors uppercase"
        />
      </form>
    </div>
  );
};

export default Formulario;
