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
    <section className="bg-[#eaefff] w-full h-full flex justify-center overflow-auto lg:w-[55%]">
      {/* RESUME CANVAS */}
      <div className="bg-white h-[1000px] w-[1000px] shadow-lg lg:w-[567px] lg:h-[800px] p-5 align-middle my-10 ">
        <DescriptionComponent formData={formData} />
        <ExperienceComponent allJobsArray={allJobsArray} />
        <EducationResumeComponent allEducationArray={allEducationArray} />
        <SkillsResumeComponent allSkillsArray={allSkillsArray} />
        <SkillsResumeComponent allSkillsArray={allLanguagesArray} />
      </div>
    </section>
  );
};

export default ResumeComponent;
