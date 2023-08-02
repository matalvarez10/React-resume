import { ChangeEvent, useState } from "react";
import InputsFieldComponent from "./components/inputsFieldComponent";
import ResumeComponent from "./components/resumeComponent";
import { IDescriptionData } from "./interfaces/inputDesc.interface";
import InputDescriptionComponent from "./components/inputs-components/inputsDescriptionComponent";
import InputsExperience from "./components/inputs-components/inputseExperienceComponent";
import { IExperienceData } from "./interfaces/inputExperience.interface";
import AllJobsComponent from "./components/inputs-components/allJobsComponent";
import { initialExperienceId } from "./components/inputs-components/inputseExperienceComponent";

function App() {
  const [formData, setFormData] = useState<IDescriptionData>({
    nombre: "",
    apellido: "",
    cargo: "",
    about: "",
    numero: "",
    correo: "",
    sitioWeb: "",
    ubicacion: "",
  });

  const [allJobs, setAllJobs] = useState<IExperienceData[]>([]);

  const handleData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleExpResumeData = (event: EventTarget & HTMLInputElement, id: number) => {
    
    const { name, value } = event;
    setAllJobs(prevArray => {
      return prevArray.map(job => {
        if (job.id === id) {
          return { ...job, [name]: value }; 
        }
        return job; 
      });
    });
    
  };

  const handleClickExp = (expData: IExperienceData) => {
    const currentId = initialExperienceId;
    setAllJobs([...allJobs, { ...expData, ["id"]: currentId }]);
  };
  const handleDeleteJob = (id: number) => {
    setAllJobs((allJobs) => allJobs.filter((job) => job.id !== id));
  };
  return (
    <>
      <InputsFieldComponent>
        <InputDescriptionComponent
          handleData={handleData}
          formData={formData}
        ></InputDescriptionComponent>
        <AllJobsComponent
          allJobsArray={allJobs}
          handleDeleteJob={handleDeleteJob}
          handleExpResumeData={handleExpResumeData}
        ></AllJobsComponent>
        <InputsExperience handleClickExp={handleClickExp}></InputsExperience>
      </InputsFieldComponent>
      <ResumeComponent
        formData={formData}
        allJobsArray={allJobs}
      ></ResumeComponent>
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
