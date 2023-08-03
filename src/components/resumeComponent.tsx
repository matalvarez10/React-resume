import DescriptionComponent from "./resume-components/descriptionResumeComponent";
import { IDescriptionData } from "../interfaces/inputDesc.interface";
import ExperienceComponent from "./resume-components/experienceResumeComponent";
import EducationResumeComponent from "./resume-components/educationResumeComponent";
import { IExperienceData } from "../interfaces/inputExperience.interface";
import { IEducationData } from "../interfaces/inputEducation.interface";
import { ISkillsData } from "../interfaces/inputSkills.interface";
import SkillsResumeComponent from "./resume-components/skillsResumeComponent";

interface ResumeComponentProps {
  formData: IDescriptionData;
  allJobsArray: IExperienceData[];
  allEducationArray: IEducationData[];
  allSkillsArray: ISkillsData[];
  allLanguagesArray: ISkillsData[];
}

const ResumeComponent: React.FC<ResumeComponentProps> = ({
  formData,
  allJobsArray,
  allEducationArray,
  allSkillsArray,
  allLanguagesArray,
}) => {
  return (
    <div className="contenedor">
      <DescriptionComponent formData={formData}></DescriptionComponent>
      <ExperienceComponent allJobsArray={allJobsArray}></ExperienceComponent>
      <EducationResumeComponent allEducationArray={allEducationArray}></EducationResumeComponent>
      <SkillsResumeComponent allSkillsArray={allSkillsArray}></SkillsResumeComponent>
      <SkillsResumeComponent allSkillsArray={allLanguagesArray}></SkillsResumeComponent>
    </div>
  );
};

export default ResumeComponent;
