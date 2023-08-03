import { ISkillsData } from "../../../interfaces/inputSkills.interface";
import SkillComponent from "./skillComponent";
interface AllSkillsProps {
  allSkillsArray: ISkillsData[];
  handleDeleteSkill: (id: number) => void;
  handleEditSkill:(event: (EventTarget & HTMLInputElement) | (EventTarget & HTMLSelectElement), id: number) => void;
}

const AllSkillsComponent: React.FC<AllSkillsProps> = ({
  allSkillsArray,
  handleDeleteSkill,
  handleEditSkill,
}) => {
  if (allSkillsArray.length === 0) {
    return;
  }
  return (
    <>
      {allSkillsArray.map((skill) => (
        <SkillComponent
          key={skill.id}
          skill={skill}
          handleDeleteSkill={handleDeleteSkill}
          handleEditSkill={handleEditSkill}
        />
      ))}
    </>
  );
};

export default AllSkillsComponent;
