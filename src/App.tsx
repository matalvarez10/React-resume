import { ChangeEvent, useState } from "react";
import InputsFieldComponent from "./components/inputsFieldComponent";
import ResumeComponent from "./components/resumeComponent";
import { IDescriptionData } from "./interfaces/inputDesc.interface";
import InputDescriptionComponent from "./components/inputsDescriptionComponent";
import InputsExperience from "./components/inputseExperienceComponent";
import { IExperienceData } from "./interfaces/inputExperience.interface";

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

  const [allJobs,setAllJobs] = useState<IExperienceData[]>([])

  const handleData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(allJobs);
  const handleClickExp = (expData: IExperienceData) =>{
    setAllJobs([...allJobs,expData]);
  }
  return (
    <>
    <InputsFieldComponent >
        <InputDescriptionComponent handleData={handleData} formData={formData}></InputDescriptionComponent>
        <InputsExperience handleClickExp={handleClickExp} ></InputsExperience>
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