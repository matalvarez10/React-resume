import { ChangeEvent, useState } from "react";
///interfaces
import { IDescriptionData } from "./interfaces/inputDesc.interface";
import { IExperienceData } from "./interfaces/inputExperience.interface";
import { ISkillsData } from "./interfaces/inputSkills.interface";
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
/// inputs seccion skills
import InputsSkillsComponennt from "./components/inputs-components/input-skills-components/inputsSkillsComponent";
import AllSkillsComponent from "./components/inputs-components/input-skills-components/allSkillsComponent";
import { initialSkillId } from "./components/inputs-components/input-skills-components/inputsSkillsComponent";
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
  const [allSkills, setAllSkills] = useState<ISkillsData[]>([]);
  const [allLanguages, setAllLanguages] = useState<ISkillsData[]>([]);

  // funciones para descripcion
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
  console.log("todas las skills", allSkills);
  console.log("todos los idiomas", allLanguages);
  /// funciones para educacion
  const handleEducationEditData = (
    event: EventTarget & HTMLInputElement,
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
    setAllEducation((allEducation) =>
      allEducation.filter((education) => education.id !== id)
    );
  };

  // funciones para skills y lenguajes
  const handleAddSkill = (skillData: ISkillsData) => {
    const currentId = initialSkillId;
    setAllSkills([...allSkills, { ...skillData, ["id"]: currentId }]);
  };
  const handleAddLanguage = (languageData: ISkillsData) => {
    const currentId = initialSkillId;
    setAllLanguages([...allLanguages, { ...languageData, ["id"]: currentId }]);
  };

  const handleDeleteSkill = (id: number) => {
    setAllSkills((allSkills) => allSkills.filter((skill) => skill.id !== id));
  };
  const handleDeleteLanguage = (id: number) => {
    setAllLanguages((allLanguages) =>
      allLanguages.filter((language) => language.id !== id)
    );
  };
  const handleSkillEditData = (
    event: (EventTarget & HTMLInputElement) | (EventTarget & HTMLSelectElement),
    id: number
  ) => {
    const { name, value } = event;
    setAllSkills((prevArray) => {
      return prevArray.map((skill) => {
        if (skill.id === id) {
          return { ...skill, [name]: value };
        }
        return skill;
      });
    });
  };
  const handleLanguageEditData = (
    event: (EventTarget & HTMLInputElement) | (EventTarget & HTMLSelectElement),
    id: number
  ) => {
    const { name, value } = event;
    setAllLanguages((prevArray) => {
      return prevArray.map((language) => {
        if (language.id === id) {
          return { ...language, [name]: value };
        }
        return language;
      });
    });
  };

  return (
    <>
      <InputsFieldComponent>
        <InputDescriptionComponent
          handleData={handleData}
          formData={formData}
        />
        <AllJobsComponent
          allJobsArray={allJobs}
          handleDeleteJob={handleDeleteJob}
          handleExpResumeData={handleExpEditData}
        />
        <InputsExperience handleClickExp={handleClickExp} />
        <hr />
        <AllEducationComponent
          allEducationArray={allEducation}
          handleDeleteEducation={handleDeleteEducation}
          handleEducationEditData={handleEducationEditData}
        />
        <InputEducation handleAddEducation={handleAddEducation} />
        <AllSkillsComponent
          allSkillsArray={allSkills}
          handleDeleteSkill={handleDeleteSkill}
          handleEditSkill={handleSkillEditData}
        />
        <InputsSkillsComponennt handleAddSkill={handleAddSkill} />
        <AllSkillsComponent
          allSkillsArray={allLanguages}
          handleDeleteSkill={handleDeleteLanguage}
          handleEditSkill={handleLanguageEditData}
        />
        <InputsSkillsComponennt handleAddSkill={handleAddLanguage} />
      </InputsFieldComponent>
      <ResumeComponent
        formData={formData}
        allJobsArray={allJobs}
        allEducationArray={allEducation}
      ></ResumeComponent>
    </>
  );
}

export default App;
