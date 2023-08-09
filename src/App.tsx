import { ChangeEvent, useState } from "react";

///interfaces
import { IDescriptionData } from "./interfaces/inputDesc.interface";
import { IExperienceData } from "./interfaces/inputExperience.interface";
import { ISkillsData } from "./interfaces/inputSkills.interface";

/// componentes para ingresar experiencia
import InputsExperienceComponent from "./components/inputs-components/input-experience-components/inputseExperienceComponent";
import ListInputsComponent from "./components/inputs-components/all-inputs-components/listInputsComponent";
import { initialExperienceId } from "./components/inputs-components/input-experience-components/inputseExperienceComponent";
///inputs para secciones inputs y cv
import InputsFieldComponent from "./components/inputsFieldComponent";
import ResumeComponent from "./components/resumeComponent";
import InputDescriptionComponent from "./components/inputs-components/inputs-description-components/inputsDescriptionComponent";

///inputs seccion education
import InputEducationComponent from "./components/inputs-components/input-education-components/inputsEducationComponent";
import { IEducationData } from "./interfaces/inputEducation.interface";
import { initialEducationId } from "./components/inputs-components/input-education-components/inputsEducationComponent";

/// inputs seccion skills
import InputsSkillsComponennt from "./components/inputs-components/input-skills-components/inputsSkillsComponent";
import { initialSkillId } from "./components/inputs-components/input-skills-components/inputsSkillsComponent";

//imports de components customizados
import SeparatorComponent from "./components/style-components/separatorComponent";
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
  const handleDataTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);
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
    event: EventTarget & HTMLInputElement,
    id: number
  ) => {
    const { name, value } = event as HTMLInputElement;
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

  // funciones para skills
  const handleAddSkill = (skillData: ISkillsData) => {
    const currentId = initialSkillId;
    setAllSkills([...allSkills, { ...skillData, ["id"]: currentId }]);
  };

  const handleDeleteSkill = (id: number) => {
    setAllSkills((allSkills) => allSkills.filter((skill) => skill.id !== id));
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

  //funciones para idiomas
  const handleAddLanguage = (languageData: ISkillsData) => {
    const currentId = initialSkillId;
    setAllLanguages([...allLanguages, { ...languageData, ["id"]: currentId }]);
  };

  const handleDeleteLanguage = (id: number) => {
    setAllLanguages((allLanguages) =>
      allLanguages.filter((language) => language.id !== id)
    );
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
    <div className=" bg-[#ffffff] h-screen w-screen flex flex-row justify-center items-center">
      <InputsFieldComponent>
        {/* Description inputs */}
        <InputDescriptionComponent
          handleData={handleData}
          formData={formData}
          handleTextAreaInput={handleDataTextArea}
        />
        <SeparatorComponent />
        {/* Experience/Jobs Inputs */}
        <InputsExperienceComponent handleClickExp={handleClickExp} />
        <ListInputsComponent
          allElementsArray={allJobs}
          handleDeleteElement={handleDeleteJob}
          handleEditElement={handleExpEditData}
          listTitle="Jobs"
        />
        <SeparatorComponent />
        {/* Education Inputs */}
        <InputEducationComponent handleAddEducation={handleAddEducation} />
        <ListInputsComponent
          allElementsArray={allEducation}
          handleDeleteElement={handleDeleteEducation}
          handleEditElement={handleEducationEditData}
          listTitle="Education"
        />
        <SeparatorComponent />
        {/* Skills Inputs */}
        <InputsSkillsComponennt
          handleAddSkill={handleAddSkill}
          title="Skills"
        />
        <ListInputsComponent
          allElementsArray={allSkills}
          handleDeleteElement={handleDeleteSkill}
          handleEditElement={handleSkillEditData}
          listTitle="Skills"
        />
        <SeparatorComponent />
        {/* Languages Inputs */}
        <InputsSkillsComponennt
          handleAddSkill={handleAddLanguage}
          title="Languages"
        />
        <ListInputsComponent
          allElementsArray={allLanguages}
          handleDeleteElement={handleDeleteLanguage}
          handleEditElement={handleLanguageEditData}
          listTitle="Languages"
        />
      </InputsFieldComponent>
      <ResumeComponent
        formData={formData}
        allJobsArray={allJobs}
        allEducationArray={allEducation}
        allSkillsArray={allSkills}
        allLanguagesArray={allLanguages}
      ></ResumeComponent>
    </div>
  );
}

export default App;
