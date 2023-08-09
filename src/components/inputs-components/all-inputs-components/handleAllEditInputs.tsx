import { IExperienceData } from "../../../interfaces/inputExperience.interface";
import { IEducationData } from "../../../interfaces/inputEducation.interface";
import EditExperienceInputs from "../input-experience-components/editExperienceInputs";
import EditEdducationInputs from "../input-education-components/editEducationInputs";
import { EditDataHandler } from "./listInputsComponent";
import EditSkillsInputs from "../input-skills-components/editSkillInputs";
import { ISkillsData } from "../../../interfaces/inputSkills.interface";
export interface EditInputsProps {
  element: IExperienceData | IEducationData | ISkillsData ;
  handleEditData:EditDataHandler;
}

const EditAllInputs: React.FC<EditInputsProps> = ({
  element: element,
  handleEditData: handleEditData,
}) => {
    const isExperienceData = "posicion" in element;
    const isEducationData = "institucion" in element;
    const isSkillsData = "skillName" in element;
  return (
    <>
    {isExperienceData && <EditExperienceInputs job={element} handleExpResumeData={handleEditData}/> }
    {isEducationData && <EditEdducationInputs education={element} handleEducationEditData={handleEditData} /> }
    {isSkillsData && <EditSkillsInputs skill={element} handleEditSkill={handleEditData} />}
    </>
  );
};

export default EditAllInputs;
