import DescriptionComponent from "./resume-components/descriptionResumeComponent";
import { IDescriptionData } from "../interfaces/inputDesc.interface";
import ExperienceResumeComponent from "./resume-components/experienceResumeComponent";
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
      <div className="bg-white h-[1000px] w-[1000px] shadow-lg lg:w-[567px] lg:h-[800px] p-5 align-middle my-10 flex flex-col gap-3">
        <DescriptionComponent formData={formData} />
        <div className="flex flex-row gap-10">
          <div className="w-[60%]">
            <ExperienceResumeComponent allJobsArray={allJobsArray} />
          </div>
          <div className="w-[35%] flex flex-col gap-1">
            <EducationResumeComponent allEducationArray={allEducationArray} />
            <SkillsResumeComponent
              allSkillsArray={allSkillsArray}
              titulo="Skills"
            />
            <SkillsResumeComponent
              allSkillsArray={allLanguagesArray}
              titulo="Languages"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeComponent;
