import { IExperienceData } from "../../../interfaces/inputExperience.interface";
import { IEducationData } from "../../../interfaces/inputEducation.interface";
import EditInputs from "../input-experience-components/editInputsComponent";
import EditEdducationInputs from "../input-education-components/editEducationInputs";
import { EditDataHandler } from "./allJobsComponent";
import EditSkillsInputs from "../input-skills-components/editSkillInputs";
import { ISkillsData } from "../../../interfaces/inputSkills.interface";
export interface EditInputsProps {
  job: IExperienceData | IEducationData | ISkillsData ;
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
