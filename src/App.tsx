import { ChangeEvent, useState } from "react";
import InputsFieldComponent from "./components/inputsFieldComponent";
import ResumeComponent from "./components/resumeComponent";
import { IDescriptionData } from "./interfaces/inputDesc.interface";

function App() {
  const [formData, setFormData] = useState<IDescriptionData>({
    nombre: "",
    apellido: "",
    cargo:"",
    about:"",
    numero: "",
    correo:"",
    sitioWeb:"",
    ubicacion:"",
  });

  const handleData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
    <InputsFieldComponent handleData={handleData} formData={formData}></InputsFieldComponent>
    <ResumeComponent formData={formData}></ResumeComponent>
{/*       <div className="contenedor">
        <input
          type="text"
          placeholder="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleData}
        />
        <input
          type="text"
          placeholder="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleData}
        />
        <input
          type="text"
          placeholder="numero"
          name="numero"
          value={formData.numero}
          onChange={handleData}
        />
      </div>
      <div className="contenedor">
        <p>{formData.apellido}</p>
        <p>{formData.nombre}</p>
        <p>{formData.numero}</p>
      </div> */}
    </>
  );
}

export default App;


/* 
// seccion personal
nombre
apellido
cargo
perfil
numero
correo
sitio web

//Experiencia Laboral
Empresa
rol
cargo
fecha inicio
fecha termino
descripcion

//habilidades
nombre
nivel (dropdown)

//educacion
institucion
grado
fecha inicio
fecha termino

//idiomas
same as skills


*/