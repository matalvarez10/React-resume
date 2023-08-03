import DescriptionComponent from "./resume-components/descriptionComponent";
import { IDescriptionData } from "../interfaces/inputDesc.interface";
import ExperienceComponent from "./resume-components/experienceComponent";
import EducationResumeComponent from "./resume-components/educationResumeComponent";
import { IExperienceData } from "../interfaces/inputExperience.interface";
import { IEducationData } from "../interfaces/inputEducation.interface";
interface ResumeComponentProps {
  formData: IDescriptionData;
  allJobsArray: IExperienceData[];
  allEducationArray: IEducationData[];
}

const ResumeComponent: React.FC<ResumeComponentProps> = ({
  formData,
  allJobsArray,
  allEducationArray,
}) => {
  return (
    <div className="contenedor">
      <DescriptionComponent formData={formData}></DescriptionComponent>
      <ExperienceComponent allJobsArray={allJobsArray}></ExperienceComponent>
      <EducationResumeComponent allEducationArray={allEducationArray}></EducationResumeComponent>
      {/* TODO : ADD ALL THE OTHER RESUME COMPONENTS */}
    </div>
  );
};

export default ResumeComponent;
