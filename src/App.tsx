import { ChangeEvent, useState } from "react";
///interfaces
import { IDescriptionData } from "./interfaces/inputDesc.interface";
import { IExperienceData } from "./interfaces/inputExperience.interface";
/// componentes para ingresar experiencia
import InputsExperience from "./components/inputs-components/input-experience-components/inputseExperienceComponent";
import AllJobsComponent from "./components/inputs-components/input-experience-components/allJobsComponent";
import { initialExperienceId } from "./components/inputs-components/input-experience-components/inputseExperienceComponent";
///inputs para secciones inputs y cv
import InputsFieldComponent from "./components/inputsFieldComponent";
import ResumeComponent from "./components/resumeComponent";
import InputDescriptionComponent from "./components/inputs-components/inputs-description-components/inputsDescriptionComponent";
///inputs seccion education
import InputEducation from "./components/inputs-components/input-education-components/inputsEducationComponent";
import { IEducationData } from "./interfaces/inputEducation.interface";
import { initialEducationId } from "./components/inputs-components/input-education-components/inputsEducationComponent";
import AllEducationComponent from "./components/inputs-components/input-education-components/allEducationComponent";

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
  const [allEducation, setAllEducation] = useState<IEducationData[]>([]);

  console.log(allEducation);

  const handleData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  /// funciones para experiencia
  const handleExpEditData = (
    event:
      | (EventTarget & HTMLInputElement)
      | (EventTarget & HTMLTextAreaElement),
    id: number
  ) => {
    const { name, value } = event;
    setAllJobs((prevArray) => {
      return prevArray.map((job) => {
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

  /// funciones para educacion
  const handleEducationEditData = (
    event:
      | (EventTarget & HTMLInputElement),
    id: number
  ) => {
    const { name, value } = event;
    setAllEducation((prevArray) => {
      return prevArray.map((education) => {
        if (education.id === id) {
          return { ...education, [name]: value };
        }
        return education;
      });
    });
  };

  const handleAddEducation = (educacionData: IEducationData) => {
    const currentId = initialEducationId;
    setAllEducation([...allEducation, { ...educacionData, ["id"]: currentId }]);
  };
  const handleDeleteEducation = (id: number) => {
    setAllEducation((allEducation) => allEducation.filter((education) => education.id !== id));
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
          handleExpResumeData={handleExpEditData}
        ></AllJobsComponent>
        <InputsExperience handleClickExp={handleClickExp}></InputsExperience>
        <hr />
        <AllEducationComponent
        allEducationArray={allEducation}
        handleDeleteEducation={handleDeleteEducation}
        handleEducationEditData={handleEducationEditData}
        />
        <InputEducation handleAddEducation={handleAddEducation}></InputEducation>
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
