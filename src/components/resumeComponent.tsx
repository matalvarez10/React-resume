import DescriptionComponent from "./resume-components/descriptionComponent";
import { IDescriptionData } from "../interfaces/inputDesc.interface";
import ExperienceComponent from "./resume-components/experienceComponent";
import { IExperienceData } from "../interfaces/inputExperience.interface";

interface ResumeComponentProps {
    formData: IDescriptionData;
    allJobsArray : IExperienceData[];
  }

const  ResumeComponent:React.FC<ResumeComponentProps> = ({formData,allJobsArray}) => {
    return ( 
    <div className="contenedor"> 
            <DescriptionComponent formData={formData}></DescriptionComponent>
            <ExperienceComponent allJobsArray={allJobsArray}></ExperienceComponent>
        {/* TODO : ADD ALL THE OTHER RESUME COMPONENTS */}
    </div> 
    );
}

export default ResumeComponent;