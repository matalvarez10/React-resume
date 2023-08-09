import { IExperienceData } from "../interfaces/inputExperience.interface";
import { IEducationData } from "../interfaces/inputEducation.interface";
import EditInputs from "./inputs-components/input-experience-components/editInputsComponent";
import EditEdducationInputs from "./inputs-components/input-education-components/editEducationInputs";
import { EditDataHandler } from "./inputs-components/input-experience-components/allJobsComponent";
import EditSkillsInputs from "./inputs-components/input-skills-components/editSkillInputs";
export interface EditInputsProps {
  job: IExperienceData | IEducationData ;
  handleExpResumeData:EditDataHandler;
}

const EditAllInputs: React.FC<EditInputsProps> = ({
  job,
  handleExpResumeData,
}) => {
    const isExperienceData = "posicion" in job;
    const isEducationData = "institucion" in job;
    const isSkillsData = "skillName" in job;
  return (
    <>
    {isExperienceData && <EditInputs job={job} handleExpResumeData={handleExpResumeData}/> }
    {isEducationData && <EditEdducationInputs education={job} handleEducationEditData={handleExpResumeData} /> }
    {isSkillsData && <EditSkillsInputs handleEditSkill={handleExpResumeData} skill={job}/>}
    </>
  );
};

export default EditAllInputs;
