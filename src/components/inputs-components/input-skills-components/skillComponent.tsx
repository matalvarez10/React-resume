import { ISkillsData } from "../../../interfaces/inputSkills.interface";
import { useState } from "react";
import EditSkillsInputs from "./editSkillInputs";
interface SkillComponentProps {
  skill: ISkillsData;
  handleDeleteSkill: (id: number) => void;
  handleEditSkill:(event: (EventTarget & HTMLInputElement) | (EventTarget & HTMLSelectElement), id: number) => void;
}

const SkillComponent: React.FC<SkillComponentProps> = ({
  skill,
  handleDeleteSkill,
  handleEditSkill,
}) => {
    const [toggleEdit, setToggleEdit] = useState<boolean>(false);

  return (
    <>
      <p>{skill.skillName}</p>
      <p>{skill.skillLevel}</p>
      <button onClick={()=>handleDeleteSkill(skill.id)}>DELETE</button>
      <button
        onClick={() => {
        setToggleEdit(!toggleEdit);
        }}
      >EDIT</button>
      {toggleEdit && (
        <EditSkillsInputs
          skill={skill}
          handleEditSkill={handleEditSkill}
        ></EditSkillsInputs>
      )}
    </>
    
  );
};

export default SkillComponent;
