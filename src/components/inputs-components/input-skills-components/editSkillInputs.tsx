import { ISkillsData } from "../../../interfaces/inputSkills.interface";
interface EditSkillsInterface {
  skill: ISkillsData;
  handleEditSkill: (event: (EventTarget & HTMLInputElement) | (EventTarget & HTMLSelectElement), id: number) => void;
}

const EditSkillsInputs: React.FC<EditSkillsInterface> = ({
  skill,
  handleEditSkill,
}) => {
  return (
    <>
      <input
        type="text"
        name="skillName"
                onChange={(event) => {
          const value = event.target;
          handleEditSkill(value, skill.id);
        }}
        value={skill.skillName} 
      />
      <select
        name="skillLevel"
                onChange={(event) => {
          const value = event.target;
          handleEditSkill(value, skill.id);
        }}
        value={skill.skillLevel} 
      >
        <option value="" disabled>
          Select an Option
        </option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
        <option value="Expert">Expert</option>
      </select>
    </>
  );
};

export default EditSkillsInputs;
