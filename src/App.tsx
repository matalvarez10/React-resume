import { ChangeEvent, useState } from "react";
import InputsFieldComponent from "./components/inputsFieldComponent";
import ResumeComponent from "./components/resumeComponent";
import { IDescriptionData } from "./interfaces/inputDesc.interface";
import { IExperienceData } from "./interfaces/inputExperience.interface";
import InputDescriptionComponent from "./components/inputsDescriptionComponent";
import InputsExperience from "./components/inputseExperienceComponent";

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

  const [expData, setExpData] = useState<IExperienceData>({
    posicion:"",
    companyName:"",
    lugar:"",
    fechaInicio:"",
    fechaTermino:"",
    description:"",
  });
  
  const handleData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleExpData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target ;
    setExpData({ ...expData, [name]: value });
  };

  const handleExpDataTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setExpData({ ...expData, [name]: value });
  };
  console.log(expData);
  return (
    <>
    <InputsFieldComponent >
        <InputDescriptionComponent handleData={handleData} formData={formData}></InputDescriptionComponent>
        <InputsExperience expData={expData} handleExpData={handleExpData} handleExpDataTextarea={handleExpDataTextarea} ></InputsExperience>
    </InputsFieldComponent>
    <ResumeComponent formData={formData}></ResumeComponent>
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